# recipes/views.py

from rest_framework import viewsets
from .models import Recipe
from .serializers import RecipeSerializer

class RecipeView(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
