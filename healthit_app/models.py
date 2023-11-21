from django.db import models

class Escolha(models.Model):
  title=models.CharField(max_length=50)

  def __str__(self):
      return self.texto
# Create your models here.
