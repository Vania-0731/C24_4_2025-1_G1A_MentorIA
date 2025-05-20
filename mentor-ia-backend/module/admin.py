from django.contrib import admin
from .models import Module, Announcement

@admin.register(Module)
class ModuleAdmin(admin.ModelAdmin):
    list_display = ('id', 'course')
    search_fields = ('course__subject__name',)

@admin.register(Announcement)
class AnnouncementAdmin(admin.ModelAdmin):
    list_display = ('id', 'course', 'title', 'creation_date', 'publication_date', 'author')
    search_fields = ('title', 'author__username')
    list_filter = ('creation_date', 'publication_date')
