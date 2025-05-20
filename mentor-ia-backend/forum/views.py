from rest_framework import viewsets
from .models import Forum, Comment
from .serializers import (
    ForumSerializer, ForumDetailSerializer,
    CommentSerializer, CommentDetailSerializer
)

class ForumViewSet(viewsets.ModelViewSet):
    queryset = Forum.objects.all()

    def get_serializer_class(self):
        if self.action in ['retrieve', 'list']:
            return ForumDetailSerializer
        return ForumSerializer

class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()

    def get_serializer_class(self):
        if self.action in ['retrieve', 'list']:
            return CommentDetailSerializer
        return CommentSerializer
