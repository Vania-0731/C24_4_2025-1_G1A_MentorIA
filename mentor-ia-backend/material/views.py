from rest_framework import viewsets
from .models import Material, FavoriteMaterial
from .serializers import (
    MaterialSerializer, MaterialDetailSerializer,
    FavoriteMaterialSerializer, FavoriteMaterialDetailSerializer
)

class MaterialViewSet(viewsets.ModelViewSet):
    queryset = Material.objects.all()

    def get_serializer_class(self):
        if self.action in ['retrieve', 'list']:
            return MaterialDetailSerializer
        return MaterialSerializer

class FavoriteMaterialViewSet(viewsets.ModelViewSet):
    queryset = FavoriteMaterial.objects.all()

    def get_serializer_class(self):
        if self.action in ['retrieve', 'list']:
            return FavoriteMaterialDetailSerializer
        return FavoriteMaterialSerializer
