# from rest_framework import serializers
# from .models import Profile

# class ProfileSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Profile
#         fields = [
#             'username','email','full_name','product_type','farm_size','location','city','zipcode','state','country','phone_number','password'
#         ]
#         extra_kwargs = {'password': {'write_only': True}}

from rest_framework import serializers
from .models import Profile

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = [
            'full_name','product_type','farm_size','location','city','zipcode','state','country','phone_number'
        ]
