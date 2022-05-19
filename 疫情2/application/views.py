from django.shortcuts import render,HttpResponse
from application.models import Hero
# Create your views here.
def index(request):
    heros=Hero.objects.all()
    return render(request,'index.html',{'heros':heros})