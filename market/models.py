from django.db import models
from userAuth.models import User
from farmer.models import Product, FarmerProfile
from customer.models import CustomerProfile, CartItem
import uuid
from django.utils import timezone
        
class FarmerOrders(models.Model):
    PREFIX = 'ORD'
    ordered_at = models.DateTimeField(auto_now_add=True)
    farmer = models.ForeignKey(FarmerProfile, on_delete=models.CASCADE, related_name='farmer_orders')  # Farmer fulfilling the order
    customer = models.ForeignKey(CustomerProfile, on_delete=models.CASCADE, related_name='customer_orders')  # Customer who placed the order
    products = models.ManyToManyField(Product)  # ManyToMany relationship with products (through OrderProduct model)
    delivery_fee = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    total_amount_to_pay = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)  # Automatically calculated
    STATUS_CHOICES = (
        (1, 'Farmer Not Approved'),
        (2, 'Approved & Out for Delivery'),
        (3, 'Delivered'),
    )
    status = models.IntegerField(choices=STATUS_CHOICES, default=1)
    delivered_by = models.ForeignKey(FarmerProfile, on_delete=models.SET_NULL, blank=True, null=True)  # Optional field for delivery person

    order_no = models.CharField(max_length=50, unique=True, editable=False)

    def generate_order_no(self):
        last_order = FarmerOrders.objects.order_by('-id').first()
        last_order_number = int(last_order.order_no.replace(self.PREFIX, '')) if last_order else 0
        new_order_number = last_order_number + 1
        return f"{self.PREFIX}{new_order_number:04d}"  # Assuming a 4-digit sequential number

    def save(self, *args, **kwargs):
        if not self.order_no:
            self.order_no = self.generate_order_no()
        super().save(*args, **kwargs)

    def __str__(self):
        return f"Order #{self.order_no} - {self.customer.user.username}"

    class Meta:
        ordering = ['-ordered_at']

class OrderItem(models.Model):
    customer = models.ForeignKey(CustomerProfile, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)  # Ensure positive quantity

    def __str__(self):
        return f"{self.order.id} - {self.cart_item}"


class Order(models.Model):
    customer = models.ForeignKey(CustomerProfile, on_delete=models.CASCADE)
    items = models.ManyToManyField(OrderItem)
    ordered_at = models.DateTimeField(auto_now_add=True)
    is_approved = models.BooleanField(default=False)  # Flag for farmer approval
    total_amount = models.DecimalField(max_digits=10, decimal_places=2, default=0)  # Add total_amount field

    def update_total_amount(self):
        total = sum(item.get_total() for item in self.items.all())
        self.total_amount = total
        self.save()

        # You can also update the total amount directly when adding or removing items from the order

    def get_total_amount(self):
        return self.total_amount

