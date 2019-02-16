from rest_framework import viewsets
from EduApp.models import Post
from .serializers import PostSerializer

class PostSerializerViews(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer