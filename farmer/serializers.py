from rest_framework import serializers
from drf_extra_fields.fields import Base64ImageField
from .models import FarmerProfile, Product

class FarmerSerializer(serializers.ModelSerializer):
    class Meta:
        model = FarmerProfile
        fields = [
            'user', 'product_type','farm_size','location','city','zipcode','state','country'
        ]


# class ProductSerializer(serializers.ModelSerializer):
#     # image = Base64ImageField(max_length=None, use_url=True)
#     farmer = serializers.PrimaryKeyRelatedField(queryset=FarmerProfile.objects.all(), write_only = True)
#     quantity_type = serializers.CharField(allow_null=True)
#     price_type = serializers.CharField(allow_null=True)


#     class Meta:
#         model = Product
#         fields = ['_id', 'name', 'description', 'available_quantity', 'price_per_unit', 'quantity_type', 'price_type', 'image', 'farmer', 'created_at']
class ProductSerializer(serializers.ModelSerializer):
    # image = serializers.ImageField()
    # # image = Base64ImageField(max_length=None, use_url=True)
    # farmer = FarmerSerializer(read_only = True)
    class Meta:
        model = Product
        fields = '__all__'