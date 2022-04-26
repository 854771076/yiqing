from django.shortcuts import render,HttpResponse
import requests
import json
# Create your views here.
def index(request):
    # function newdata(){
    #     //console.log(p)
    #     $.get(
    #         "https://lab.isaaclin.cn/nCoV/api/news",
    #         {
    #           page:1,
    #           num: "10",
    #         },
    #         function (data, status) {
    #           var news=document.querySelector('.hotnew')
    #           //console.log(data);
    #           html=''
    #           div=''
    #           data=data.results
              
    #           for(var i=0;i<data.length;i++){
    #               date=new Date(Number(data[i].pubDate))
    #               div='<li><a href="'+data[i].sourceUrl+'" class="title">'+data[i].title+'</a></li>'
    #               html+=div;
    #               //console.log(html)
    #               //console.log(div)
    #           }
            
    #           news.innerHTML=html;

    #         }
    #       );
          
    # }
    
    # $(document).ready(function () {
    #         newdata();
        
    #   });
    news=requests.get('https://lab.isaaclin.cn/nCoV/api/news?page=1&num=10')
    news.encodingcoding=news.apparent_encoding
    news=json.loads(news.text)['results']
    content={'data':news}
        
    return render(request, 'index.html',content)

def map(request):
    return render(request, 'map.html')
def news(request):
    return render(request, 'news.html')