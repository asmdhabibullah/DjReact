from django.urls import include, path
from rest_framework import routers
from .Api import views

router = routers.DefaultRouter()
router.register('post', views.PostSerializerViews)


urlpatterns =[
    path('', include(router.urls)),
]