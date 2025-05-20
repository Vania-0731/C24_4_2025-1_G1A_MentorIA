from rest_framework import viewsets
from .models import Evaluation, Question, EvaluationAttempt, QuestionAnswer
from .serializers import (
    EvaluationSerializer, EvaluationDetailSerializer,
    QuestionSerializer, QuestionDetailSerializer,
    EvaluationAttemptSerializer, EvaluationAttemptDetailSerializer,
    QuestionAnswerSerializer, QuestionAnswerDetailSerializer,
)

class EvaluationViewSet(viewsets.ModelViewSet):
    queryset = Evaluation.objects.all()

    def get_serializer_class(self):
        if self.action in ['retrieve', 'list']:
            return EvaluationDetailSerializer
        return EvaluationSerializer

class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()

    def get_serializer_class(self):
        if self.action in ['retrieve', 'list']:
            return QuestionDetailSerializer
        return QuestionSerializer

class EvaluationAttemptViewSet(viewsets.ModelViewSet):
    queryset = EvaluationAttempt.objects.all()

    def get_serializer_class(self):
        if self.action in ['retrieve', 'list']:
            return EvaluationAttemptDetailSerializer
        return EvaluationAttemptSerializer

class QuestionAnswerViewSet(viewsets.ModelViewSet):
    queryset = QuestionAnswer.objects.all()

    def get_serializer_class(self):
        if self.action in ['retrieve', 'list']:
            return QuestionAnswerDetailSerializer
        return QuestionAnswerSerializer
