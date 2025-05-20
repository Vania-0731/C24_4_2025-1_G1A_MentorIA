from django.db import models
from django.contrib.auth.models import User
from academic_management.models import Class

class Module(models.Model):
    class_obj = models.ForeignKey(Class, on_delete=models.CASCADE)

    def __str__(self):
        return f"Module of {self.class_obj}"

class Announcement(models.Model):
    class_obj = models.ForeignKey(Class, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    content = models.TextField()
    creation_date = models.DateTimeField()
    publication_date = models.DateTimeField()
    author = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.title