from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _
from django.conf import settings
from datetime import date
from django.core.validators import RegexValidator

phone_regex = RegexValidator(regex=r'^\+?1?\d{9,15}$', message="Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed.")

class User(AbstractUser):
    username = models.CharField(max_length = 50, blank = True, null = True, unique = True)
    email = models.EmailField(_('email address'), unique = True)
    phone_number = models.CharField(max_length=17, validators=[phone_regex])
    user_type = models.CharField(max_length=50, default='')
    full_name = models.CharField(max_length=100,  default = '')

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'password', 'user_type', 'full_name']
    def __str__(self):
        return "{}".format(self.email)
