from rest_framework import serializers
from .models import Module, Announcement
from django.contrib.auth.models import User
from academic_management.models import Class
from academic_management.serializers import ClassDetailSerializer

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
    class_obj = ClassDetailSerializer()

    class Meta:
        model = Module
        fields = '__all__'

class AnnouncementDetailSerializer(serializers.ModelSerializer):
    class_obj = ClassDetailSerializer()
    author = UserSerializer()

    class Meta:
        model = Announcement
        fields = '__all__'
