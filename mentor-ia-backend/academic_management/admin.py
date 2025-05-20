from django.contrib import admin
from .models import Career, Course, AcademicPeriod, Class, Enrollment

@admin.register(Career)
class CareerAdmin(admin.ModelAdmin):
    list_display = ('code', 'name')
    search_fields = ('code', 'name')

@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('name',)

@admin.register(AcademicPeriod)
class AcademicPeriodAdmin(admin.ModelAdmin):
    list_display = ('name', 'year', 'term', 'start_date', 'end_date')
    list_filter = ('year', 'term')

@admin.register(Class)
class ClassAdmin(admin.ModelAdmin):
    list_display = ('id', 'course', 'professor_user')
    search_fields = ('course__name', 'professor_user__username')

@admin.register(Enrollment)
class EnrollmentAdmin(admin.ModelAdmin):
    list_display = ('id', 'student', 'class_obj', 'period', 'status', 'enrollment_date')
    search_fields = ('student__user__username', 'class_obj__course__name', 'status')
    list_filter = ('status', 'period')
