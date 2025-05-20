from rest_framework import viewsets
from .models import Career, Course, AcademicPeriod, Subject, Enrollment
from .serializers import (
    CareerSerializer, CourseSerializer, AcademicPeriodSerializer,
    SubjectSerializer, CourseDetailSerializer,
    EnrollmentSerializer, EnrollmentDetailSerializer
)

class CareerViewSet(viewsets.ModelViewSet):
    queryset = Career.objects.all()
    serializer_class = CareerSerializer

class SubjectViewSet(viewsets.ModelViewSet):
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer

class AcademicPeriodViewSet(viewsets.ModelViewSet):
    queryset = AcademicPeriod.objects.all()
    serializer_class = AcademicPeriodSerializer

class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()

    def get_serializer_class(self):
        if self.action in ['retrieve', 'list']:
            return CourseDetailSerializer
        return CourseSerializer

class EnrollmentViewSet(viewsets.ModelViewSet):
    queryset = Enrollment.objects.all()

    def get_serializer_class(self):
        if self.action in ['retrieve', 'list']:
            return EnrollmentDetailSerializer
        return EnrollmentSerializer
