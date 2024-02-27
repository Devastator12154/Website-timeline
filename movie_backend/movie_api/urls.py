from django.urls import path, include
from .views import (
    MovieListApiView,MovieDetailView
)

urlpatterns = [
    path('api', MovieListApiView.as_view()),
    path('api/<int:movie_id>',MovieDetailView.as_view()),
]