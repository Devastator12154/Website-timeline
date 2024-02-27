from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from .models import Movie
from .serializers import MovieSerializer
# Create your views here.

class MovieListApiView(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.IsAuthenticated]

    # 1. List all
    def get(self, request, *args, **kwargs):
        '''
        List all the todo items for given requested user
        '''
        movie = Movie.objects.filter(user = request.user.id)
        serializer = MovieSerializer(movie, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    # 2. Create
    def post(self, request, *args, **kwargs):
        '''
        Create the Todo with given todo data
        '''
        print(request)
        data = {
            'title': request.data.get('title'), 
            'MainActors': request.data.get('MainActors'),
            'Summary': request.data.get('Summary'),
            'Genre': request.data.get('Genre'), 
            'user': request.user.id
        }
        serializer = MovieSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class MovieDetailView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    
    def get_object(self, movie_id, user_id):
        try:
            return Movie.objects.get(id=movie_id, user=user_id)
        
        except Movie.DoesNotExist:
            return None

    def get(self, request, movie_id, *args, **kwargs):
        print(movie_id, "Movie")
        movieinstance = self.get_object(movie_id, request.user.id)
        print(movieinstance)
        if not movieinstance:
            return Response({"res": "Not Found"}, status.HTTP_400_BAD_REQUEST)
        serializer = MovieSerializer(movieinstance)
        
        return Response(serializer.data, status.HTTP_200_OK)
    
    def put(self, request, movie_id, *args, **kwargs):
        
        movieinstance = self.get_object(movie_id, request.user.id)
        if not movieinstance:
            return Response({"res": "Not Found"}, status.HTTP_400_BAD_REQUEST)
        
        data = {
            'title': request.data.get('title'), 
            'MainActors': request.data.get('MainActors'),
            'Summary': request.data.get('Summary'),
            'Genre': request.data.get('Genre'), 
            'user': request.user.id
        }
        serializer = MovieSerializer(instance=movieinstance, data = data, partial = True)
        
        if serializer .is_valid():
            serializer.save()
            return Response(serializer.data, status.HTTP_200_OK)
            
        
        return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)
    def delete(self, request, movie_id, *args, **kwargs):
        
        movieinstance = self.get_object(movie_id, request.user.id)
        if not movieinstance:
            return Response({"res": "Not Found"}, status.HTTP_400_BAD_REQUEST)
        movieinstance.delete()
        return Response({"res": "Object Deleted"}, status.HTTP_200_OK)
    
        