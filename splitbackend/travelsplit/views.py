from rest_framework import generics
from .models import TravelExpense, Person
from rest_framework.response import Response
from django.db.models import Sum
from .serializers import TravelExpenseSerializer, PersonSerializer

class TravelExpenseListCreateView(generics.ListCreateAPIView):
    queryset = TravelExpense.objects.all()
    serializer_class = TravelExpenseSerializer

class PersonListCreateView(generics.ListCreateAPIView):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer

class SplitCalculation(generics.GenericAPIView):
    serializer_class = PersonSerializer

    def get(self, request):
        travel_expenses = TravelExpense.objects.all()
        persons = Person.objects.all()

        total_expense = travel_expenses.aggregate(Sum('expPrice'))['expPrice__sum']
        average_contribution = total_expense / persons.count()

        contributions = {}
        net_amount_owed = {}

        for persons in persons:
            contributions[persons.PersonName] = 0
            net_amount_owed[persons.PersonName] = 0

        for travel_expenses in travel_expenses:
            share = travel_expenses.expPrice / len(travel_expenses.expContri)

            contributions[travel_expenses.paidPerson] += travel_expenses.expPrice

            for participant in travel_expenses.expContri.all():
                contributions[participant.PersonName] -= share

        for persons in persons:
            net_amount_owed[persons.PersonName] = contributions[persons.PersonName] - average_contribution

        while any(amount > 0.01 for amount in net_amount_owed.values()):
            payer = max(net_amount_owed, key=net_amount_owed.get)
            participant = min(net_amount_owed, key=net_amount_owed.get)

            amount_to_transfer = min(net_amount_owed[payer], -net_amount_owed[participant])

            net_amount_owed[payer] -= amount_to_transfer
            net_amount_owed[participant] += amount_to_transfer

        return Response(contributions)