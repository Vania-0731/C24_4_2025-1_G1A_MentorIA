from rest_framework import viewsets
from .models import Professor, Student
from .serializers import (
    ProfessorSerializer, ProfessorDetailSerializer,
    StudentSerializer, StudentDetailSerializer
)

class ProfessorViewSet(viewsets.ModelViewSet):
    queryset = Professor.objects.all()

    def get_serializer_class(self):
        if self.action in ['retrieve', 'list']:
            return ProfessorDetailSerializer
        return ProfessorSerializer

class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()

    def get_serializer_class(self):
        if self.action in ['retrieve', 'list']:
            return StudentDetailSerializer
        return StudentSerializer
