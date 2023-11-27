from django.contrib import admin
from django.urls import path, include
from healthit_app import views
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('dashboard/', views.dashboard, name='dashboard'),
    path('forms/', views.forms, name='forms'),
    path('users/', include('django.contrib.auth.urls')),
    path('users/login/', views.login_user, name='login'),
    path('users/logout/', views.logout_user, name='logout'),
    path('users/register/', views.create_user, name='register'),
    path('', views.home, name='home'),
    path('password_reset/', auth_views.PasswordResetView.as_view(template_name="password/password-reset.html"), name="password_reset"),
    path('password_reset/done/', auth_views.PasswordResetDoneView.as_view(template_name="password/password-reset-done.html"), name="password_reset_done" ),
    path('reset/<uidb64>/<token>', auth_views.PasswordResetConfirmView.as_view(template_name="password/password-reset-confirm.html"), name="password_reset_confirm"),
    path('reset/done' , auth_views.PasswordResetCompleteView.as_view(template_name="password/password-reset-complete.html"), name="password_reset_complete"),
   path('obter_respostas_json/', views.obter_respostas_json, name='obter_respostas_json'),
]
