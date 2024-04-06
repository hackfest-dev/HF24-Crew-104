from django.contrib import admin
from .models import FarmerProfile, Product

# Now, register the Profile model with your desired admin class
@admin.register(FarmerProfile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ['user', 'email_verified', 'uuid', 'product_type', 'farm_size', 'location', 'city', 'zipcode', 'state', 'country']


class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'available_quantity', 'price_per_unit', 'farmer']

admin.site.register(Product, ProductAdmin)

