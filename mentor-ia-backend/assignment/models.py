from django.db import models
from module.models import Module
from django.contrib.auth.models import User

class Task(models.Model):
    module = models.ForeignKey(Module, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()
    publication_date = models.DateTimeField()
    due_date = models.DateTimeField()

    def __str__(self):
        return self.title

class Submission(models.Model):
    task = models.ForeignKey(Task, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    submission_date = models.DateTimeField()
    status = models.CharField(
        max_length=20,
        choices=[('pending', 'Pending'), ('submitted', 'Submitted'), ('graded', 'Graded')]
    )
    grade = models.FloatField()
    comments = models.TextField()
    file_url = models.URLField()

    def __str__(self):
        return f"{self.user.username} - {self.task.title} - {self.status}"