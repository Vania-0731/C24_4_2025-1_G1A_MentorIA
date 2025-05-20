from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ModuleViewSet, AnnouncementViewSet

router = DefaultRouter()
router.register(r'modules', ModuleViewSet)
router.register(r'announcements', AnnouncementViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
