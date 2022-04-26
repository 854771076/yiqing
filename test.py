import requests
import  json
news=requests.get('https://lab.isaaclin.cn/nCoV/api/news?page=1&num=10')
print(news.text)
news.encodingcoding=news.apparent_encoding
news=json.loads(news.text)['results']
print(news)
