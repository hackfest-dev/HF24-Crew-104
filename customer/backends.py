from django.contrib.auth.backends import ModelBackend
from .models import CustomerProfile

class CustomerPhoneNumberAuthBackend(ModelBackend):
    def authenticate(self, request, phone_number=None, password=None):
        if phone_number is None:
            return None
        try:
            customer_profile = CustomerProfile.objects.get(phone_number=phone_number)
            user = customer_profile.user
            if user.check_password(password):
                return user
        except CustomerProfile.DoesNotExist:
            return None
