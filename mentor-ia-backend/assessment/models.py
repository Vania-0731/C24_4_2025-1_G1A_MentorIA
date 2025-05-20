from django.db import models
from module.models import Module
from django.contrib.auth.models import User

class Evaluation(models.Model):
    module = models.ForeignKey(Module, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    time_limit = models.IntegerField()

    def __str__(self):
        return self.title

class Question(models.Model):
    evaluation = models.ForeignKey(Evaluation, on_delete=models.CASCADE)
    statement = models.TextField()
    type = models.CharField(
        max_length=20,
        choices=[('multiple_choice', 'Multiple Choice'), ('open', 'Open')]
    )
    options = models.JSONField()
    correct_answer = models.TextField()

    def __str__(self):
        return f"Question for {self.evaluation.title}: {self.statement[:50]}..."

class EvaluationAttempt(models.Model):
    evaluation = models.ForeignKey(Evaluation, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    submission_date = models.DateTimeField()
    status = models.CharField(max_length=50)
    score = models.FloatField()
    comments = models.TextField()

    def __str__(self):
        return f"{self.user.username} - {self.evaluation.title} - {self.status}"

class QuestionAnswer(models.Model):
    attempt = models.ForeignKey(EvaluationAttempt, on_delete=models.CASCADE)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    answer = models.TextField()
    correct = models.BooleanField()

    def __str__(self):
        return f"Answer by {self.attempt.user.username} to Question {self.question.id}"