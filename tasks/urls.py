from django.urls import path, include
from rest_framework import routers
from tasks import views

routers = routers.DefaultRouter()
routers.register(r'tasks', views.TaskView, 'task')

urlpatterns = [
    path('api/v1/', include(routers.urls)),
]
