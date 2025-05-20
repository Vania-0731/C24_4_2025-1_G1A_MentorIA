from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    CareerViewSet, CourseViewSet, AcademicPeriodViewSet,
    SubjectViewSet, EnrollmentViewSet
)

router = DefaultRouter()
router.register(r'careers', CareerViewSet)
router.register(r'subjects', SubjectViewSet)
router.register(r'academic-periods', AcademicPeriodViewSet)
router.register(r'courses', CourseViewSet)
router.register(r'enrollments', EnrollmentViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
