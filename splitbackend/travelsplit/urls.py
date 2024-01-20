from django.urls import path
from .views import TravelExpenseListCreateView, PersonListCreateView, SplitCalculation

urlpatterns = [
    path('travel-expenses/', TravelExpenseListCreateView.as_view(), name='travel-expense-list-create'),
    path('persons/', PersonListCreateView.as_view(), name='person-list-create'),
    path('split-calculation/', SplitCalculation.as_view(), name='split-calculator'),
    # Add other paths as needed
]