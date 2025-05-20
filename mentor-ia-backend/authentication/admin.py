from django.contrib import admin
from .models import Professor, Student

@admin.register(Professor)
class ProfessorAdmin(admin.ModelAdmin):
    list_display = ('id', 'user')
    search_fields = ('user__username', 'user__email')

@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'career')
    search_fields = ('user__username', 'user__email', 'career__name')
