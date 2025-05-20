from rest_framework import serializers
from .models import Material, FavoriteMaterial
from module.models import Module
from django.contrib.auth.models import User
from module.serializers import ModuleDetailSerializer

# === Serializers base ===
class MaterialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Material
        fields = '__all__'

class FavoriteMaterialSerializer(serializers.ModelSerializer):
    class Meta:
        model = FavoriteMaterial
        fields = '__all__'

# === Serializers anidados ===
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

class MaterialDetailSerializer(serializers.ModelSerializer):
    module = ModuleDetailSerializer()

    class Meta:
        model = Material
        fields = '__all__'

class FavoriteMaterialDetailSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    material = MaterialDetailSerializer()

    class Meta:
        model = FavoriteMaterial
        fields = '__all__'
