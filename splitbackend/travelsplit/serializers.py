from rest_framework import serializers
from .models import TravelExpense, Person

class TravelExpenseSerializer(serializers.ModelSerializer):
    class Meta:
        model = TravelExpense
        fields = '__all__'

class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = '__all__'