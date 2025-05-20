from rest_framework import serializers
from .models import Evaluation, Question, EvaluationAttempt, QuestionAnswer
from module.serializers import ModuleDetailSerializer
from django.contrib.auth.models import User

# Serializers base
class EvaluationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Evaluation
        fields = '__all__'

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = '__all__'

class EvaluationAttemptSerializer(serializers.ModelSerializer):
    class Meta:
        model = EvaluationAttempt
        fields = '__all__'

class QuestionAnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuestionAnswer
        fields = '__all__'

# Serializers anidados
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

class EvaluationDetailSerializer(serializers.ModelSerializer):
    module = ModuleDetailSerializer()

    class Meta:
        model = Evaluation
        fields = '__all__'

class QuestionDetailSerializer(serializers.ModelSerializer):
    evaluation = EvaluationSerializer()

    class Meta:
        model = Question
        fields = '__all__'

class EvaluationAttemptDetailSerializer(serializers.ModelSerializer):
    evaluation = EvaluationDetailSerializer()
    user = UserSerializer()

    class Meta:
        model = EvaluationAttempt
        fields = '__all__'

class QuestionAnswerDetailSerializer(serializers.ModelSerializer):
    attempt = EvaluationAttemptSerializer()
    question = QuestionSerializer()

    class Meta:
        model = QuestionAnswer
        fields = '__all__'
