from django.contrib import admin
from .models import Career, Subject, AcademicPeriod, Course, Enrollment

@admin.register(Career)
class CareerAdmin(admin.ModelAdmin):
    list_display = ('code', 'name')
    search_fields = ('code', 'name')

@admin.register(Subject)
class SubjectAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('name',)

@admin.register(AcademicPeriod)
class AcademicPeriodAdmin(admin.ModelAdmin):
    list_display = ('name', 'year', 'term', 'start_date', 'end_date')
    list_filter = ('year', 'term')

@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ('id', 'subject', 'professor_user')
    search_fields = ('subject__name', 'professor_user__username')

@admin.register(Enrollment)
class EnrollmentAdmin(admin.ModelAdmin):
    list_display = ('id', 'student', 'course', 'period', 'status', 'enrollment_date')
    search_fields = ('student__user__username', 'course__subject__name', 'status')
    list_filter = ('status', 'period')
