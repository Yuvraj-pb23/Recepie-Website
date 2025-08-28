from django.shortcuts import render
from django.http import HttpResponse
from . models import User

# Create your views here.

def home(request):
    return render(request, 'home.html', {"active_page": "home"})

def recipe(request):
    return render(request, 'recipe.html', {"active_page": "recipe"})

def recipe2(request):
    return render(request, 'recipe2.html', {"active_page": "recipe2"})

def about(request):
    return render(request, 'about.html', {"active_page": "about"})

def userDetails(request):
    if request.method == 'POST':

        name = request.POST.get('name')
        email = request.POST.get('email')
        password = request.POST.get('password')
        confirm_password = request.POST.get('confirm_password')

        rslt=User(name = name, email = email, password = password, confirm_password = confirm_password)
        rslt.save()

    return render(request, 'home.html', {'show_login_modal': True, 'active_page': 'home'})