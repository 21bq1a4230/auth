from rest_framework import serializers
from .models import UsersModel

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UsersModel
        fields = ['username','password']