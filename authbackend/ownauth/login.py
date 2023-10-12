from .models import UsersModel


def Authenticate(data):
    name = data['username']
    pasw = data['password']

    users = UsersModel.objects.values('username','password')
    user = {'username':name,'password':pasw}
    if user in users:
        return {"authenticate":True}
    
    return {"authenticate":False}