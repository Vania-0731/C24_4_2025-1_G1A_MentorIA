from django.contrib import admin
from .models import Evaluation, Question, EvaluationAttempt, QuestionAnswer

@admin.register(Evaluation)
class EvaluationAdmin(admin.ModelAdmin):
    list_display = ('id', 'module', 'title', 'start_date', 'end_date', 'time_limit')
    search_fields = ('title', 'module__class_obj__course__name')
    list_filter = ('start_date', 'end_date')

@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = ('id', 'evaluation', 'statement', 'type')
    search_fields = ('statement',)

@admin.register(EvaluationAttempt)
class EvaluationAttemptAdmin(admin.ModelAdmin):
    list_display = ('id', 'evaluation', 'user', 'submission_date', 'status', 'score')
    search_fields = ('user__username', 'status')
    list_filter = ('status',)

@admin.register(QuestionAnswer)
class QuestionAnswerAdmin(admin.ModelAdmin):
    list_display = ('id', 'attempt', 'question', 'correct')
    search_fields = ('attempt__user__username', 'question__statement')
    list_filter = ('correct',)
