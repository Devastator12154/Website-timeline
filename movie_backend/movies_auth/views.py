from django.shortcuts import render
from .serializers import myTokenObtainPairSerializer
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.views import TokenObtainPairView

class MyTokenObtainPairView(TokenObtainPairView):
    permission_classes = (AllowAny)
    serializer_class = myTokenObtainPairSerializer
    
# Create your views here.
