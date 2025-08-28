from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('recipe/', views.recipe, name='recipe'),
    path('recipe/page/2/', views.recipe2, name='recipe2'),
    path('user/', views.userDetails, name='user'),
    path('about/', views.about, name = 'about')
]