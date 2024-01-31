from django.urls import path, include
from .views import (
    MovieListApiView,
)

urlpatterns = [
    path('api', MovieListApiView.as_view()),
]