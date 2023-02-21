from django.contrib import admin
from django.urls import path
from .views import tasks 
from . import views 

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)



urlpatterns = [
    # path('',views.index ),
    # path('about',views.about ),
    path('students',views.StudentView.as_view()),
    path('students/<id>',views.StudentView.as_view() ),
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/',views.register ),
    path('tasks/',tasks ),
    path('tasks/<int:id>',tasks),
    path('test/',views.test ),
    path('get_all_images', views.getTasks),
    path('upload_image/',views.ImageUpload.as_view()),
    path('mymodel/', views.MyModelView.as_view()),
    path('mymodel/<int:pk>/', views.MyModelView.as_view()),
    
]
