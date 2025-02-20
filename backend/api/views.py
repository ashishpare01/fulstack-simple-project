from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Challenge
from .serializers import ChallengeSerializer

class ChallengeView(generics.ListCreateAPIView):
    queryset = Challenge.objects.all()
    serializer_class = ChallengeSerializer
