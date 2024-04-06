from rest_framework import serializers
from .models import CustomerProfile

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomerProfile
        fields = [
            'user','market_rep_name', 'location', 'city', 'zipcode', 'state', 'country'
        ]
