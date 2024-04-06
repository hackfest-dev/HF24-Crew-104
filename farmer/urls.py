from django.urls import path, include
from .import views
from rest_framework.routers import DefaultRouter
from django.contrib.auth import views as auth_view
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static

# route = DefaultRouter()
# route.register("",views.ProductViewSet,basename='productview')
urlpatterns = [
    path('signup', views.Farmer.signup, name = 'farmer-signup'),
    path('logincheck', views.Farmer.sampleEndpoint, name = 'sample-endpoint'),
    path('profile', views.Farmer.profile, name = 'farmer-profile'),
    path('update_profile', views.Farmer.update_profile, name='update-farmer-profile'),
    path('create', views.Farmer.create, name = 'add_product_farmer' ),
    # path('product/',include(route.urls)),
    path('retrieve',views.Farmer.retrieve, name='get_products'),
    path('product/<int:pk>/update', views.Farmer.update, name='update'),
    path('product/<int:pk>/delete', views.Farmer.delete_product, name='delete'),

]+ static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)