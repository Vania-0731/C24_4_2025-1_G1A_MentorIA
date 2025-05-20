from rest_framework import viewsets
from .models import Career, Course, AcademicPeriod, Class, Enrollment
from .serializers import (
    CareerSerializer, CourseSerializer, AcademicPeriodSerializer,
    ClassSerializer, ClassDetailSerializer,
    EnrollmentSerializer, EnrollmentDetailSerializer
)

class CareerViewSet(viewsets.ModelViewSet):
    queryset = Career.objects.all()
    serializer_class = CareerSerializer

class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class AcademicPeriodViewSet(viewsets.ModelViewSet):
    queryset = AcademicPeriod.objects.all()
    serializer_class = AcademicPeriodSerializer

class ClassViewSet(viewsets.ModelViewSet):
    queryset = Class.objects.all()

    def get_serializer_class(self):
        if self.action in ['retrieve', 'list']:
            return ClassDetailSerializer
        return ClassSerializer

class EnrollmentViewSet(viewsets.ModelViewSet):
    queryset = Enrollment.objects.all()

    def get_serializer_class(self):
        if self.action in ['retrieve', 'list']:
            return EnrollmentDetailSerializer
        return EnrollmentSerializer
