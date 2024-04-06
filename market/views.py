from rest_framework import generics
from farmer.models import Product, FarmerProfile
from farmer.serializers import ProductSerializer
from customer.models import CustomerProfile

class ProductListView(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        user = request.user
        customer_district = self.request.user.customer_profile.district  # Example assuming customer profile has district field

        # Retrieveing farmers based on customers district
        matching_farmers = FarmerProfile.objects.filter(district=customer_district)

        # Retrieve products from matching farmers
        queryset = Product.objects.filter(farmer__in=matching_farmers)
        return queryset

