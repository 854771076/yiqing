from django.shortcuts import render,HttpResponse
from application.models import *
import requests
import json
# Create your views here.
def index(request):
    heros=Hero.objects.all()
    warms=Warm.objects.all()
    warmpage=request.GET.get('warmpage','')
    newspage=request.GET.get('newspage','1')
    truethpage=request.GET.get('truethpage','1')
    trueth=requests.get(f'https://lab.isaaclin.cn/nCoV/api/rumors?rumorType=1&page={truethpage}&num=8')
    trueth.encodingcoding=trueth.apparent_encoding
    trueth=json.loads(trueth.text)['results']
    if warmpage=='' or warmpage=='1':
        warmpage=1
        warms=warms[:6]
    elif warmpage=='2':
        warms=warms[6:12]
    elif warmpage=='3':
        warms=warms[12:]
    else:
        warms=warms[:6]
    return render(request,'index.html',{'heros':heros,'warms':warms,'warmpage':warmpage,'warmendpage':3,'newspage':newspage,'trueth':trueth,'truethpage':truethpage,})