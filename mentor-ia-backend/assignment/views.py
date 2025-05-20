from rest_framework import viewsets
from .models import Task, Submission
from .serializers import (
    TaskSerializer, TaskDetailSerializer,
    SubmissionSerializer, SubmissionDetailSerializer
)

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()

    def get_serializer_class(self):
        if self.action in ['retrieve', 'list']:
            return TaskDetailSerializer
        return TaskSerializer

class SubmissionViewSet(viewsets.ModelViewSet):
    queryset = Submission.objects.all()

    def get_serializer_class(self):
        if self.action in ['retrieve', 'list']:
            return SubmissionDetailSerializer
        return SubmissionSerializer
