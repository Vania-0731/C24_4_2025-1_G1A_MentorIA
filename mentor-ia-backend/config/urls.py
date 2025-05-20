"""
URL configuration for config project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from .views import api_root

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', api_root, name='api-root-general'),  # índice general
    path('api/authentication/', include('authentication.urls')),
    path('api/academic_management/', include('academic_management.urls')),
    path('api/module/', include('module.urls')),
    path('api/material/', include('material.urls')),
    path('api/assignment/', include('assignment.urls')),
    path('api/assessment/', include('assessment.urls')),
    path('api/forum/', include('forum.urls')),
]
