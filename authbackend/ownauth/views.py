from django.shortcuts import render
from rest_framework.views import APIView
from .serializer import UserSerializer
from rest_framework.response import Response
from .models import UsersModel
from .login import Authenticate

class LoginView(APIView):
    def get(self,res):
        output = UsersModel.objects.values('username','password')
        print(output)
        return Response(output)


    def post(self,req):
        
        return Response(Authenticate(req.data))
