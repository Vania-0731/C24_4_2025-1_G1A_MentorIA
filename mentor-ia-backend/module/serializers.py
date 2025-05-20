from rest_framework import serializers
from .models import Module, Announcement
from django.contrib.auth.models import User
from academic_management.models import Course
from academic_management.serializers import CourseDetailSerializer

# === Serializers base ===
class ModuleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Module
        fields = '__all__'

class AnnouncementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Announcement
        fields = '__all__'

# === Serializers anidados ===
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

class ModuleDetailSerializer(serializers.ModelSerializer):
    course = CourseDetailSerializer()  # antes class_obj

    class Meta:
        model = Module
        fields = '__all__'

class AnnouncementDetailSerializer(serializers.ModelSerializer):
    course = CourseDetailSerializer()  # antes class_obj
    author = UserSerializer()

    class Meta:
        model = Announcement
        fields = '__all__'