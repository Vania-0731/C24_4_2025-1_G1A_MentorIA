from rest_framework import viewsets
from .models import Material, FavoriteMaterial
from .serializers import (
    MaterialSerializer, MaterialDetailSerializer,
    FavoriteMaterialSerializer, FavoriteMaterialDetailSerializer
)

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser
from rest_framework import status
from django.core.files.storage import default_storage
from django.conf import settings

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


class UploadMaterialFileView(APIView):
    parser_classes = [MultiPartParser]

    def post(self, request, *args, **kwargs):
        file_obj = request.FILES.get('file')
        if not file_obj:
            return Response({'error': 'No se proporcionó archivo.'}, status=status.HTTP_400_BAD_REQUEST)

        path = default_storage.save(f'materials/{file_obj.name}', file_obj)
        file_url = request.build_absolute_uri(settings.MEDIA_URL + path.split('media/')[-1])
        return Response({'url': file_url}, status=status.HTTP_201_CREATED)