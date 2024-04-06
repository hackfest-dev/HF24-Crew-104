from rest_framework import serializers
from django.core.files.base import ContentFile
from .models import FarmerProfile, Product
from django.conf import settings

class FarmerSerializer(serializers.ModelSerializer):
    class Meta:
        model = FarmerProfile
        fields = [
            'user', 'product_type','farm_size','location','city','zipcode','state','country'
        ]



class ProductSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(write_only=True)  
    image_url = serializers.SerializerMethodField()  

    class Meta:
        model = Product
        fields = ('_id', 'name', 'description', 'available_quantity', 'price_per_unit', 'price_type', 'quantity_type', 'image', 'image_url')  # Include 'image_url'

    def create(self, validated_data):
        image = validated_data.pop('image')  # Extract image data
        product = Product.objects.create(**validated_data)  # Create product without image

        # Save the image using ContentFile
        product.image.save(f'product_{product._id}.jpg', ContentFile(image.read()))

        return product

    def get_image_url(self, obj):
        return f"{settings.MEDIA_URL}{obj.image}"  # Assuming 'image' field stores filename


       