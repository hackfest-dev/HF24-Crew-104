from django.contrib import admin
from .models import CustomerProfile

@admin.register(CustomerProfile)
class CustomerProfileAdmin(admin.ModelAdmin):
    list_display = ['user', 'email_verified', 'uuid', 'market_rep_name', 'location', 'city', 'zipcode', 'state', 'country']
