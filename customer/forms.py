from django import forms
from .models import CustomerProfile, phone_regex
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm

def email_exist(value):
    if User.objects.filter(email=value).exists():
        raise forms.ValidationError("Profile with this Email Address already exists")

class CustomerRegistrationForm(UserCreationForm):
    email = forms.EmailField(validators=[email_exist])
    market_representative_name = forms.CharField(max_length=100)
    market_location = forms.CharField(max_length=255)
    city = forms.CharField(max_length=50)
    zipcode = forms.CharField(max_length=10)
    state = forms.CharField(max_length=50)
    country = forms.CharField(max_length=50)
    phone_number = forms.CharField(max_length=17, validators=[phone_regex], label="Mobile Number (For OTP)")

    class Meta:
        model = User
        fields = [
            'username',
            'email',
            'market_representative_name',
            'market_location',
            'city',
            'zipcode',
            'state',
            'country',
            'phone_number',
        ]

class LoginForm(forms.Form):
    phone_number = forms.CharField(max_length=17, validators=[phone_regex])
    password = forms.CharField(widget=forms.PasswordInput)

class VerifyOtpForm(forms.Form):
    otp = forms.CharField(label="Enter OTP")
