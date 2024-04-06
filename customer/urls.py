from django.urls import path
from .import views
from django.contrib.auth import views as auth_view
from django.views.generic import TemplateView

urlpatterns = [
    path('signup', views.Customer.signup, name = 'signup'),
]
