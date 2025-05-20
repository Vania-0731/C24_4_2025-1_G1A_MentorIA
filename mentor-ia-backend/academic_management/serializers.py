from rest_framework import serializers
from .models import Career, Subject, AcademicPeriod, Course, Enrollment
from django.contrib.auth.models import User
from authentication.models import Student

# === Serializers base ===
class CareerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Career
        fields = '__all__'

class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = '__all__'

class AcademicPeriodSerializer(serializers.ModelSerializer):
    class Meta:
        model = AcademicPeriod
        fields = '__all__'

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'

class EnrollmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Enrollment
        fields = '__all__'

# === Serializers anidados ===
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

class StudentSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    career = CareerSerializer()

    class Meta:
        model = Student
        fields = '__all__'

class CourseDetailSerializer(serializers.ModelSerializer):
    subject = SubjectSerializer()  # antes: course
    professor_user = UserSerializer()

    class Meta:
        model = Course
        fields = '__all__'

class EnrollmentDetailSerializer(serializers.ModelSerializer):
    student = StudentSerializer()
    course = CourseDetailSerializer()  # antes: class_obj
    period = AcademicPeriodSerializer()

    class Meta:
        model = Enrollment
        fields = '__all__'
