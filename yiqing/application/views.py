from django.shortcuts import render,HttpResponse
import requests
import time
import json
from application.models import Hero
# Create your views here.
def index(request):
    news=requests.get('https://lab.isaaclin.cn/nCoV/api/news?page=1&num=10')
    news.encodingcoding=news.apparent_encoding
    news=json.loads(news.text)['results']
    f=open(r'static\data\knowledge.json','r',encoding='utf8')
    knows=json.loads(f.read())['data']
    f.close()
    heros=Hero.objects.all()
    content={'data':news,'knows':knows,'heros':heros}
        
    return render(request, 'index.html',content)
def news(request):
    if request.GET:
        page=request.GET.get('page')
        # status=request.GET.get('status')
        # if status=='pre':
        #     if int(page)==1:
        #         pass
        #     else:
        #         page=int(page)-1
        # elif status=='next':
        #     page=int(page)+1
        page=int(page)

    else:
        page=1
    
    news=requests.get(f'https://lab.isaaclin.cn/nCoV/api/news?page={page}&num=40')
    news.encodingcoding=news.apparent_encoding
    news=json.loads(news.text)['results']
    for i in news:
        # i['pubDate']=time.strptime('%Y-%m-%d %H:%M:%S',time.localtime(int(i['pubDate'])/1000))
        times=time.localtime(int(i['pubDate'])/1000)
        i['pubDate']=time.strftime('%Y-%m-%d %H:%M:%S',times)
    content={'news':news,'page':int(page)}
    return render(request, 'news.html',content)