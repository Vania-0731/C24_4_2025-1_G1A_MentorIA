from django.contrib import admin
from .models import Module, Announcement

@admin.register(Module)
class ModuleAdmin(admin.ModelAdmin):
    list_display = ('id', 'class_obj')
    search_fields = ('class_obj__course__name',)

@admin.register(Announcement)
class AnnouncementAdmin(admin.ModelAdmin):
    list_display = ('id', 'class_obj', 'title', 'creation_date', 'publication_date', 'author')
    search_fields = ('title', 'author__username')
    list_filter = ('creation_date', 'publication_date')
