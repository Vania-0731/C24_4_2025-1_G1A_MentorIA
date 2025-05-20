from rest_framework import viewsets
from .models import Module, Announcement
from .serializers import (
    ModuleSerializer, ModuleDetailSerializer,
    AnnouncementSerializer, AnnouncementDetailSerializer
)

class ModuleViewSet(viewsets.ModelViewSet):
    queryset = Module.objects.all()

    def get_serializer_class(self):
        if self.action in ['retrieve', 'list']:
            return ModuleDetailSerializer
        return ModuleSerializer

class AnnouncementViewSet(viewsets.ModelViewSet):
    queryset = Announcement.objects.all()

    def get_serializer_class(self):
        if self.action in ['retrieve', 'list']:
            return AnnouncementDetailSerializer
        return AnnouncementSerializer
