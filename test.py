import requests
import  json
# news=requests.get('https://lab.isaaclin.cn/nCoV/api/news?page=1&num=10')
# print(news.text)
# news.encodingcoding=news.apparent_encoding
# news=json.loads(news.text)['results']
# print(news)
f=open(r'C:\Users\awsless\Desktop\疫情\yiqing\static\data\knowledge.json','r',encoding='utf8').read()
res=json.loads(f)['data']
print(res)