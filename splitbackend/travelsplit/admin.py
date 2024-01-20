from django.contrib import admin
from .models import TravelExpense, Person

# Register your models here.

@admin.register(TravelExpense)
class TravelExpenseAdmin(admin.ModelAdmin):
    list_display = ('expName', 'expDate', 'paidPerson', 'expPrice','expContri')

@admin.register(Person)
class PersonAdmin(admin.ModelAdmin):
    list_display = ('PersonName', 'TotalMoney')


