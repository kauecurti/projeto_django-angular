from django.contrib import admin
from .models import Member, Product, Fornecedores

admin.register(Member, Product, Fornecedores)(admin.ModelAdmin)