from django.db import models

# Create your models here.
class Employee(models.Model):
    id = models.AutoField(primary_key=True)
    name= models.CharField(max_length=500)
    mobile = models.CharField(max_length=500)
    designation    = models.CharField(max_length=500)
    address  = models.CharField(max_length=500)
