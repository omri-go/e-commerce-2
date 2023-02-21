from django.db import models
from django.contrib.auth.models import User


class Task(models.Model):

    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    image = models.ImageField(null=True, blank=True,default='/placeholder.png')
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=100)
    completed = models.BooleanField(default=False)

    def __str__(self):
        return self.title


class Student(models.Model):

    id = models.BigAutoField(primary_key=True)
    sName = models.CharField(max_length=50, null=True, blank=True)
    email = models.EmailField(null=True, blank=True)
    age = models.IntegerField()
    active = models.BooleanField()
    createdTime = models.DateTimeField(auto_now_add=True)
    fields = ['sName', 'email', "age"]

    def __str__(self):
        return self.title


class Product(models.Model):

    id = models.BigAutoField(primary_key=True)
    desc = models.CharField(max_length=50, null=True, blank=True)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    createdTime = models.DateTimeField(auto_now_add=True)
    fields = ['desc', 'price']

    def __str__(self):
        return self.title


class Category (models.Model):

    name = models.CharField(max_length=50, null=True, blank=True)
    description = models.CharField(max_length=100)

    def __str__(self):
        return self.title

# class CartItem (models.Model):

#     name = models.CharField(max_length=50, null=True, blank=True)
#     description = models.CharField(max_length=100)
#     price = models.DecimalField(max_digits=5, decimal_places=2)
#     category = models.DecimalField(max_digits=10, decimal_places=2)
#     amount = models.DecimalField(max_digits=5, decimal_places=2)

#     def __str__(self):
#         return self.title