from django.db import models
from django.contrib.auth.models import User  # Para la FK en Class
from authentication.models import Student  # Importamos para FK si fuera necesario
# Ojo: en este archivo no hay FK a Student, solo a User, Career, etc.

class Career(models.Model):
    code = models.CharField(max_length=20)
    name = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.code} - {self.name}"

class Course(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class AcademicPeriod(models.Model):
    name = models.CharField(max_length=100)
    year = models.IntegerField()
    term = models.IntegerField()
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()

    def __str__(self):
        return self.name

class Class(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    professor_user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.course.name} - Prof: {self.professor_user.username}"

class Enrollment(models.Model):
    from authentication.models import Student  # Import local para evitar ciclo
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    class_obj = models.ForeignKey(Class, on_delete=models.CASCADE)
    period = models.ForeignKey(AcademicPeriod, on_delete=models.CASCADE)
    status = models.CharField(max_length=50)
    enrollment_date = models.DateField()

    def __str__(self):
        return f"{self.student.user.username} - {self.class_obj} - {self.period.name}"
