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
        TravelExpense = TravelExpense.objects.all()
        Person = Person.objects.all()

        total_expense = TravelExpense.aggregate(Sum('expPrice'))['expPrice__sum']
        average_contribution = total_expense / Person.count()

        contributions = {}
        net_amount_owed = {}

        for Person in Person:
            contributions[Person.PersonName] = 0
            net_amount_owed[Person.PersonName] = 0

        for TravelExpense in TravelExpense:
            share = TravelExpense.expPrice / TravelExpense.expContri.count()

            contributions[TravelExpense.paidPerson] += TravelExpense.expPrice

            for participant in TravelExpense.expContri.all():
                contributions[participant.PersonName] -= share

        for Person in Person:
            net_amount_owed[Person.PersonName] = contributions[Person.PersonName] - average_contribution

        while any(amount > 0.01 for amount in net_amount_owed.values()):
            payer = max(net_amount_owed, key=net_amount_owed.get)
            participant = min(net_amount_owed, key=net_amount_owed.get)

            amount_to_transfer = min(net_amount_owed[payer], -net_amount_owed[participant])

            net_amount_owed[payer] -= amount_to_transfer
            net_amount_owed[participant] += amount_to_transfer

        return Response(contributions)