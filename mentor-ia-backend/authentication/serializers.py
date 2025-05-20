from rest_framework import serializers
from .models import Professor, Student
from django.contrib.auth.models import User
from academic_management.models import Career

# Serializers base
class ProfessorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Professor
        fields = '__all__'

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'

# Serializers anidados
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

class CareerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Career
        fields = ['id', 'code', 'name']

class ProfessorDetailSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Professor
        fields = '__all__'

class StudentDetailSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    career = CareerSerializer()

    class Meta:
        model = Student
        fields = '__all__'
