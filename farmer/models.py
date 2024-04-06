from django.db import models
from userAuth.models import User
import uuid
from django.utils import timezone

class FarmerProfile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, default = '')
    email_verified = models.BooleanField(default=False)
    uuid = models.UUIDField(default=uuid.uuid4, editable=False)
    product_type = models.CharField(max_length=50,  default = '')  # Adjust length based on your product types
    farm_size = models.FloatField(blank=True, null=True)  # Allows empty values
    location = models.CharField(max_length=255, blank=True)  # Optional location details
    city = models.CharField(max_length=50, default = '')
    zipcode = models.CharField(max_length=10, default = '')
    state = models.CharField(max_length=50,  default = '')
    country = models.CharField(max_length=50,  default = '')

class Product(models.Model):
    image = models.ImageField(null=True,blank = True,upload_to="images/")
    name = models.CharField(max_length=100)
    description = models.TextField(null = True)
    available_quantity = models.PositiveIntegerField()
    price_per_unit = models.DecimalField(max_digits=10, decimal_places=2)
    quantity_type = models.CharField(max_length=50 )  # Add field for quantity type
    price_type = models.CharField(max_length=50)  # Add field for price type
    farmer = models.ForeignKey(FarmerProfile, on_delete=models.SET_NULL,null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['-created_at']
