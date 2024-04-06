from django.db import models
from userAuth.models import User
from farmer.models import Product
import uuid
from django.utils import timezone

class CustomerProfile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, default = '')
    email_verified = models.BooleanField(default=False)
    uuid = models.UUIDField(default=uuid.uuid4, editable=False)

    # Additional fields for customer
    market_rep_name = models.CharField(max_length=100, default='')
    location = models.CharField(max_length=255, blank=True)
    city = models.CharField(max_length=50, default='')
    zipcode = models.CharField(max_length=10, default='')
    state = models.CharField(max_length=50, default='')
    country = models.CharField(max_length=50, default='')

class CartItem(models.Model):
    customer = models.ForeignKey(CustomerProfile, on_delete=models.CASCADE, related_name='cart_items')
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)  # Ensure positive quantity

    def __str__(self):
        return f"{self.customer} - {self.product.name} ({self.quantity})"

    def get_total(self):
        return self.product.price_per_unit * self.quantity
