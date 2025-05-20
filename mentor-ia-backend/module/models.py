from django.db import models
from django.contrib.auth.models import User
from academic_management.models import Course

class Module(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)  # antes class_obj

    def __str__(self):
        return f"Module of {self.course}"

class Announcement(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)  # antes class_obj
    title = models.CharField(max_length=255)
    content = models.TextField()
    creation_date = models.DateTimeField()
    publication_date = models.DateTimeField()
    author = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.title