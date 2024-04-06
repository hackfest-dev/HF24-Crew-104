from userAuth.models import User
from django.contrib.auth.password_validation import validate_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import status
from django.contrib.auth.models import AnonymousUser
from .models import CustomerProfile
from .serializers import CustomerSerializer
from userAuth.serializers import UserSerializer
import requests
from django.http import JsonResponse
import json

class Customer():
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
                "username": username,
                "password": password,  # Note: You should use set_password to properly hash the password
                "phone_number": phone_number,
                "full_name": full_name,
                "user_type": user_type
        })

            if (created) :
                user.set_password(password)
                user.save()

            request_data = request.data
            request_data['user'] = user.id

            serializer = CustomerSerializer(data = request.data)
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
            profile = CustomerProfile.objects.filter(user=user).first()

            profile_data = {
                "id": user.id,
                "username": user.username,
                "email": user.email,
                "full_name": user.full_name,
                "phone_number": user.phone_number
            }

            if profile:
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
            profile = CustomerProfile.objects.filter(user=user).first()

            if not profile:
                return Response({'error': 'Profile not found'}, status=404)

            serializer = CustomerProfile(profile, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        except User.DoesNotExist:
            return JsonResponse({'error': 'User not found'}, status=404)
        except Exception as e:
            print(str(e))
            return JsonResponse({'error': str(e)}, status=500)
        
