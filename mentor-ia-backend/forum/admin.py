from django.contrib import admin
from .models import Forum, Comment

@admin.register(Forum)
class ForumAdmin(admin.ModelAdmin):
    list_display = ('id', 'module', 'title', 'author', 'creation_date')
    search_fields = ('title', 'author__username')
    list_filter = ('creation_date',)

@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ('id', 'forum', 'user', 'creation_date')
    search_fields = ('user__username', 'content')
    list_filter = ('creation_date',)
