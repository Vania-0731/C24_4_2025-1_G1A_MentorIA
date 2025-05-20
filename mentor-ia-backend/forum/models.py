from django.db import models
from module.models import Module
from django.contrib.auth.models import User

class Forum(models.Model):
    module = models.ForeignKey(Module, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    creation_date = models.DateTimeField()

    def __str__(self):
        return self.title

class Comment(models.Model):
    forum = models.ForeignKey(Forum, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    creation_date = models.DateTimeField()

    def __str__(self):
        return f"Comment by {self.user.username} on {self.forum.title}"