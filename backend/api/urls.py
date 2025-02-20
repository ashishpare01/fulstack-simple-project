from django.urls import path
from .views import ChallengeView

urlpatterns = [
    path('challenges/', ChallengeView.as_view(), name="challenges"),
]
