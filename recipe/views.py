from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.db.models import Q
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

def login(request):
    return render(request, 'login.html')

def sign(request):
    return render(request, 'sign.html')

def userDetails(request):
    error = ""
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        password = request.POST.get('password')
        confirm_password = request.POST.get('confirm_password')

        if password != confirm_password:
            error = "Passwords do not match"
            return render(request, 'sign.html', {'error': error})

        # Check if user already exists
        if User.objects.filter(email=email).exists():
            error = "Email already registered"
            return render(request, 'sign.html', {'error': error})

        # Save new user
        User.objects.create(name=name, email=email, password=password, confirm_password=confirm_password)
        return redirect('login')  # Redirect to login page after successful signup

    return render(request, 'sign.html')


def dashboard(request):
    return render(request, 'Dashboard/dash.html', {'active_section': 'dashboard'})

def loginUser(request):
    message = ""  

    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')

        try:
            user = User.objects.get(email=email, password=password)
            return render(request, 'Dashboard/dash.html', {'active_section': 'dashboard', 'user': user})
        except User.DoesNotExist:
            message = "Invalid email or password"

    return render(request, 'login.html', {'error': message})