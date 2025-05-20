from django.contrib import admin
from .models import Material, FavoriteMaterial

@admin.register(Material)
class MaterialAdmin(admin.ModelAdmin):
    list_display = ('id', 'module', 'title', 'type', 'creation_date')
    search_fields = ('title', 'type', 'module__class_obj__course__name')
    list_filter = ('type',)

@admin.register(FavoriteMaterial)
class FavoriteMaterialAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'material', 'date')
    search_fields = ('user__username', 'material__title')
    list_filter = ('date',)
