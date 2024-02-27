from django.urls import path
from .views import MyTokenObtainPairView
from rest_framework_simplejwt import TokenRefreshView

urlpatterns = [
    path("login/",MyTokenObtainPairView.as_view(),name="token_obtain_pair"),
    path("login/refresh",TokenRefreshView.as_view(),name="token_refresh")
]
