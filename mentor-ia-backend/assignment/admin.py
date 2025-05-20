from django.contrib import admin
from .models import Task, Submission

@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    list_display = ('id', 'module', 'title', 'publication_date', 'due_date')
    search_fields = ('title', 'module__class_obj__course__name')
    list_filter = ('publication_date', 'due_date')

@admin.register(Submission)
class SubmissionAdmin(admin.ModelAdmin):
    list_display = ('id', 'task', 'user', 'submission_date', 'status', 'grade')
    search_fields = ('user__username', 'task__title', 'status')
    list_filter = ('status',)
