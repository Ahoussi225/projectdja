from django.shortcuts import render, redirect
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from .forms import UserRegistrationForm, ContactForm

def home(request):
    return render(request, 'home.html')

def register(request):
    if request.method == 'POST':
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            messages.success(request, 'Inscription réussie!')
            return redirect('sorti:home')
    else:
        form = UserRegistrationForm()
    return render(request, 'sorti/register.html', {'form': form})

def custom_login(request):
    if request.method == 'POST':
        form = CustomAuthenticationForm(request, data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect('sorti:profile')
    else:
        form = CustomAuthenticationForm()
    return render(request, 'sorti/login.html', {'form': form})

@login_required
def custom_logout(request):
    logout(request)
    return redirect('sorti:home')

@login_required
def profile(request):
    return render(request, 'sorti/profile.html')

def contact(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Message envoyé avec succès!')
            return redirect('sorti:contact')
    else:
        form = ContactForm()
    return render(request, 'sorti/contact.html', {'form': form})