from django.db import models

class UsersModel(models.Model):
    username = models.CharField(max_length=200)
    password = models.CharField(max_length=200)

# Create your models here.
