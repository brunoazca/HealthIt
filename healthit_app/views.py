from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from .forms import EscolhaForm
from .models import Escolha

def forms(request):
  if request.method == 'POST':
    form = EscolhaForm(request.POST)
    if form.is_valid():
        sono = form.cleaned_data['sono']
          # Faça algo com a escolha selecionada, como salvar no banco de dados
        return render(request, 'dashboard.html', {'sono': sono})
  else:
    form = EscolhaForm()

  return render(request, 'forms.html', {'form': form})
  
def home(request):
   return render(request, "home.html");

def create_user(request):
  if request.method == "POST":
    user = User.objects.create_user(
      request.POST["username"],
      request.POST["email"], 
      request.POST["password"]
    )
    user.save()
    return redirect("home")
  return render(request, "registration/register.html", context={"action": "Registrar"})

def login_user(request):
  if request.method == "POST":
    user = authenticate(
      username = request.POST["username"],
      password = request.POST["password"]
    )
  
    if user:
      login(request, user)
    else:
      return render(request, "registration/login.html", context={"error_msg": "Usuário não existe"})
    print(request.user)
    print(request.user.is_authenticated)
    if request.user.is_authenticated:
      return redirect("home")
    return render(request, "registration/login.html", context={"error_msg": "Usuário não pode ser autenticado"})
  return render(request, "registration/login.html")

def dashboard(request):
  context = {
      'title': 'My Dashboard',
      'users': [
          {'name': 'Alice', 'email': 'alice@example.com'},
          {'name': 'Bob', 'email': 'bob@example.com'},
          {'name': 'Charlie', 'email': 'charlie@example.com'},
      ],
  }
  return render(request, 'dashboard.html', context)

def logout_user(request):
  logout(request)
  return redirect("login")