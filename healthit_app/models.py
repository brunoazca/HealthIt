from django.db import models
from django.contrib.auth.models import User


class RespostaFormulario(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    horas_sono = models.IntegerField()
    horas_atividade = models.IntegerField()
  
class Escolha(models.Model):
  title=models.CharField(max_length=50)

  def __str__(self):
      return self.texto
# Create your models here.

