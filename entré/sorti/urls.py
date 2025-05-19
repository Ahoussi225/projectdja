from django.urls import path
from . import views
from .forms import CustomAuthenticationForm  # Si vous utilisez un formulaire personnalisé

#app_name = 'sorti'  # Namespace pour les URLs

urlpatterns = [
    # Page d'accueil
    path('', views.home, name='home'),

    # Authentification
    path('register/', views.register, name='register'),
    path('login/', views.custom_login, name='login'),
    path('logout/', views.custom_logout, name='logout'),

    # Pages spécifiques
    path('profile/', views.profile, name='profile'),
    path('contact/', views.contact, name='contact'),
]