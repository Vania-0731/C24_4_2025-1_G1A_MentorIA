from rest_framework import serializers
from .models import Task, Submission
from module.serializers import ModuleDetailSerializer
from module.models import Module
from django.contrib.auth.models import User

# === Serializers base ===
class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'

class SubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Submission
        fields = '__all__'

# === Serializers anidados ===
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

class TaskDetailSerializer(serializers.ModelSerializer):
    module = ModuleDetailSerializer()

    class Meta:
        model = Task
        fields = '__all__'

class SubmissionDetailSerializer(serializers.ModelSerializer):
    task = TaskDetailSerializer()
    user = UserSerializer()

    class Meta:
        model = Submission
        fields = '__all__'
