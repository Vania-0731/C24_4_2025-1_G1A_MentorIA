# Generated by Django 5.2.1 on 2025-05-20 17:49

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('module', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Evaluation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('start_date', models.DateTimeField()),
                ('end_date', models.DateTimeField()),
                ('time_limit', models.IntegerField()),
                ('module', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='module.module')),
            ],
        ),
        migrations.CreateModel(
            name='EvaluationAttempt',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('submission_date', models.DateTimeField()),
                ('status', models.CharField(max_length=50)),
                ('score', models.FloatField()),
                ('comments', models.TextField()),
                ('evaluation', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='assessment.evaluation')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Question',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('statement', models.TextField()),
                ('type', models.CharField(choices=[('multiple_choice', 'Multiple Choice'), ('open', 'Open')], max_length=20)),
                ('options', models.JSONField()),
                ('correct_answer', models.TextField()),
                ('evaluation', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='assessment.evaluation')),
            ],
        ),
        migrations.CreateModel(
            name='QuestionAnswer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('answer', models.TextField()),
                ('correct', models.BooleanField()),
                ('attempt', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='assessment.evaluationattempt')),
                ('question', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='assessment.question')),
            ],
        ),
    ]
