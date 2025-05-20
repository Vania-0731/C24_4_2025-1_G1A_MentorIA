from rest_framework import serializers
from .models import Forum, Comment
from module.serializers import ModuleDetailSerializer
from django.contrib.auth.models import User

# Serializers base
class ForumSerializer(serializers.ModelSerializer):
    class Meta:
        model = Forum
        fields = '__all__'

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'

# Serializers anidados
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

class ForumDetailSerializer(serializers.ModelSerializer):
    module = ModuleDetailSerializer()
    author = UserSerializer()

    class Meta:
        model = Forum
        fields = '__all__'

class CommentDetailSerializer(serializers.ModelSerializer):
    forum = ForumSerializer()
    user = UserSerializer()

    class Meta:
        model = Comment
        fields = '__all__'
