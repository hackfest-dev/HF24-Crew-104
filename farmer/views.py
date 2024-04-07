from userAuth.models import User
from django.contrib.auth.password_validation import validate_password
from django.forms.models import model_to_dict
from django.http import JsonResponse
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from django.contrib.auth.decorators import login_required
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import status, viewsets
from django.contrib.auth.models import AnonymousUser
from .models import FarmerProfile, Product
from .serializers import FarmerSerializer, ProductSerializer
from userAuth.serializers import UserSerializer
import requests
from django.core.exceptions import ObjectDoesNotExist
import json
from django.core.files.base import ContentFile




class Farmer():
    @api_view(['POST']) 
    @authentication_classes([])
    def signup(request):
        try:
             # Create user with provided data
            username = request.data.get('username')
            email = request.data.get('email')
            password = request.data.get('password')
            phone_number = request.data.get('phone_number')
            full_name = request.data.get('full_name')
            user_type = request.data.get('user_type')

            user, created = User.objects.get_or_create(email=email, defaults={
                'username': username,
                'password': password,  # Note: You should use set_password to properly hash the password
                'phone_number': phone_number,
                'full_name': full_name,
                'user_type': user_type
            })

            if (created) :
                user.set_password(password)
                user.save()

            request_data = request.data
            request_data['user'] = user.id

            serializer = FarmerSerializer(data=request_data)
            if serializer.is_valid():
                serializer.save()
                try:
                    url = 'http://localhost:8000/api/v1/token'  # Replace with your actual token endpoint
                    user_data = {
                        'email': email,
                        'password': password
                    }
                    response = requests.post(url, data=user_data)
                except requests.exceptions.RequestException as e:
                    print("Error:", e)
                return Response(serializer.data, status = status.HTTP_200_OK)
            return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            # Handle the exception
            print(e)
            return Response({"error": str(e)}, status = status.HTTP_500_INTERNAL_SERVER_ERROR)

    @api_view(['GET', 'POST'])
    @permission_classes([IsAuthenticated])
    def sampleEndpoint(request):
        if request.method == 'GET':
            data = f"Congratulation {request.user}, your API just responded to GET request"
            return Response({'response': data}, status=status.HTTP_200_OK)
        elif request.method == 'POST':
            try:
                body = request.body.decode('utf-8')
                data = json.loads(body)
                if 'text' not in data:
                    return Response("Invalid JSON data", status.HTTP_400_BAD_REQUEST)
                text = data.get('text')
                data = f'Congratulation your API just responded to POST request with text: {text}'
                return Response({'response': data}, status=status.HTTP_200_OK)
            except json.JSONDecodeError:
                return Response("Invalid JSON data", status.HTTP_400_BAD_REQUEST)
        return Response("Invalid JSON data", status.HTTP_400_BAD_REQUEST)
    
    @api_view(['GET'])
    @permission_classes([IsAuthenticated])
    def profile(request):
        try:
            user = User.objects.get(email=request.user)
            profile = FarmerProfile.objects.filter(user=user).first()

            profile_data = {
                "id": user.id,
                "username": user.username,
                "email": user.email,
                "full_name": user.full_name,
                "phone_number": user.phone_number
            }

            if profile:
                profile_data["product_type"] = profile.product_type
                profile_data["farm_size"] = profile.farm_size
                profile_data["location"] = profile.location
                profile_data["city"] = profile.city
                profile_data["zipcode"] = profile.zipcode
                profile_data["state"] = profile.state
                profile_data["country"] = profile.country
                print("Profile Data:", profile_data)
                
                print("Product Type:", profile_data.get("product_type"))
                print("Zipcode:", profile_data.get("zipcode"))


            return JsonResponse(profile_data)

        except User.DoesNotExist:
            return JsonResponse({'error': 'User not found'}, status=404)
        except Exception as e:
            print(str(e))
            return JsonResponse({'error': str(e)}, status=500)

    @api_view(['POST'])
    @permission_classes([IsAuthenticated])
    def update_profile(request):
        try:
            if isinstance(request.user, AnonymousUser):
            # Handle the case where the user is not authenticated
                return Response({'error': 'Authentication credentials were not provided'}, status=status.HTTP_401_UNAUTHORIZED)

            # user = User.objects.get(email=request.user)
            user = request.user
            profile = FarmerProfile.objects.filter(user=user).first()

            if not profile:
                return Response({'error': 'Profile not found'}, status=404)

            serializer = FarmerSerializer(profile, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        except User.DoesNotExist:
            return JsonResponse({'error': 'User not found'}, status=404)
        except Exception as e:
            print(str(e))
            return JsonResponse({'error': str(e)}, status=500)
        
    
    @api_view(['GET'])
    @permission_classes([IsAuthenticated])
    def retrieve(request, pk=None):
        try:
            user = request.user
            profile = FarmerProfile.objects.filter(user=user).first()

            # Filter products based on the farmer profile
            products = Product.objects.filter(farmer=profile)
            serializer = ProductSerializer(products, many=True)
            return Response(serializer.data)
        except ObjectDoesNotExist:
            return Response({'error': 'Farmer profile not found'}, status=status.HTTP_404_NOT_FOUND)
        
    
    @permission_classes([IsAuthenticated])
    @api_view(['POST'])
    def create(request):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            # Associate the product with the current farmer
            try:
                # Retrieve all FarmerProfiles associated with the user
                profiles = FarmerProfile.objects.filter(user=request.user)
                if profiles.exists():
                    # Select the first FarmerProfile
                    profile = profiles.first()
                    serializer.save(farmer=profile)
                    image = serializer.validated_data.pop('image')
                    product = serializer.save(farmer=profile)  # Save product without image
                    product.image.save(f'product_{product.pk}.jpg', ContentFile(image.read()))  # Save image separately

                    return Response(serializer.data, status=status.HTTP_201_CREATED)
                else:
                    return Response({"error": "No Farmer profile found for this user"}, status=status.HTTP_404_NOT_FOUND)
            except Exception as e:
                return Response({'error': f"An error occurred while creating the product: {str(e)}"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    @api_view(['PUT'])
    @permission_classes([IsAuthenticated])
    def update(request, pk):
        try:
            product = Product.objects.get(pk=pk)
            serializer = ProductSerializer(product, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except ObjectDoesNotExist:
            return Response({'error': 'Product not found'}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({'error': f'An error occurred while updating the product: {str(e)}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    @api_view(['DELETE'])
    @permission_classes([IsAuthenticated])   
    def delete_product(request, pk):
        # Retrieve the product instance based on the pk
        
        product = Product.objects.get(pk=pk)
        if product:
            product.delete()
        
        
            # Delete the product instance
        
            # Return appropriate response
            return JsonResponse({'message': 'Product deleted successfully'}, status=204)
        else:
            return JsonResponse({'error': 'Invalid request method'}, status=405)

    