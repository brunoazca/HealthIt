from django import forms
from .models import Escolha

class EscolhaForm(forms.Form):
  ESCOLHAS = [
      (5, '5h'),
      (7, '7h'),
      (9, '9h'),
  ]

  sono = forms.ChoiceField(choices=ESCOLHAS, widget=forms.RadioSelect)