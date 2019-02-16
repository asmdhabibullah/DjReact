from django.db import models
from django.contrib.auth.models import User


class RegUser(models.Model):
    first_name = models.CharField(max_length=150, blank=False)
    last_name = models.CharField(max_length=150, blank=False)
    user_name = models.CharField(max_length=150, blank=False)
    email = models.EmailField(max_length=150, unique=True)
    password_1 = models.CharField(max_length=100, blank=False)
    password_2 = models.CharField(max_length=100, blank=False)

    


class Post(models.Model):
    title = models.CharField(max_length=200, blank=False)
    image = models.ImageField(upload_to='post', blank=True)
    tirle_h4 = models.CharField(max_length=200, blank=True)
    dis = models.TextField()
    post_time = models.DateTimeField(auto_now_add=True)
    post_update = models.DateTimeField(auto_now_add=True)
    