from django.db import models

# Create your models here.
class Hero(models.Model):
    index = models.BigIntegerField(blank=True, primary_key=True)
    姓名 = models.TextField(blank=True, null=True)
    简介 = models.TextField(blank=True, null=True)
    事迹 = models.TextField(blank=True, null=True)
    图片url = models.TextField(blank=True, null=True)
    url=models.TextField(blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'hero'
        
class Warm(models.Model):
    wid = models.BigIntegerField(blank=True, primary_key=True)
    title = models.TextField(blank=True, null=True)
    content = models.TextField(blank=True, null=True)
    picurl = models.TextField(blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'warm'
        