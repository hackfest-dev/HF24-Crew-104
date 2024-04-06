from django.contrib import admin
from .models import User

@admin.register(User)
class User(admin.ModelAdmin):
    list_display = ['email', 'password', 'user_type', 'full_name']


