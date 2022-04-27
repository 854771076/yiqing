from django.shortcuts import render,HttpResponse
import requests
import json
from application.models import Hero
# Create your views here.
def index(request):
    news=requests.get('https://lab.isaaclin.cn/nCoV/api/news?page=1&num=10')
    news.encodingcoding=news.apparent_encoding
    news=json.loads(news.text)['results']
    f=open(r'C:\Users\awsless\Desktop\疫情\yiqing\static\data\knowledge.json','r',encoding='utf8')
    knows=json.loads(f.read())['data']
    f.close()
    heros=Hero.objects.all()
    content={'data':news,'knows':knows,'heros':heros}
        
    return render(request, 'index.html',content)
def news(request):
    return render(request, 'news.html')