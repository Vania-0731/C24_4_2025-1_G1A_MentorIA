from django.db import models
from module.models import Module
from django.contrib.auth.models import User

class Material(models.Model):
    module = models.ForeignKey(Module, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()
    type = models.CharField(
        max_length=20,
        choices=[('video', 'Video'), ('document', 'Document'), ('link', 'Link'), ('other', 'Other')]
    )
    url = models.URLField()
    creation_date = models.DateTimeField()

    def __str__(self):
        return self.title

class FavoriteMaterial(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    material = models.ForeignKey(Material, on_delete=models.CASCADE)
    date = models.DateTimeField()

    class Meta:
        unique_together = ('user', 'material')

    def __str__(self):
        return f"{self.user.username} - {self.material.title}"