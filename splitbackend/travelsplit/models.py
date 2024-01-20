from django.db import models

class TravelExpense(models.Model):
    expName = models.CharField(max_length=255)
    expDate = models.CharField(max_length=255)
    paidPerson = models.CharField(max_length=255)
    expContri = models.CharField(max_length=255)
    expPrice = models.DecimalField(max_digits=10, decimal_places=2)

class Person(models.Model):
    PersonName = models.CharField(max_length=255)
    TotalMoney = models.DecimalField(max_digits=10, decimal_places=2)
