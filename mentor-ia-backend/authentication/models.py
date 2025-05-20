from django.db import models
from django.contrib.auth.models import User  # Usamos User de Django, no personalizado

class Professor(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return f"Professor: {self.user.username}"

class Student(models.Model):
    career = models.ForeignKey('academic_management.Career', on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return f"Student: {self.user.username}"