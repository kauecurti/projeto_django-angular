from django.db import models


class Member(models.Model):
    nome_fantasia = models.CharField(null=False, max_length=50)
    cnpj = models.CharField(null=False, max_length=20)
    email = models.EmailField(null=False)
    city = models.CharField(max_length=100, blank=False)

    def __str__(self):
        return self.nome_fantasia + " " + self.cnpj

class Product(models.Model):
    name_product = models.CharField(max_length=100)
    price =  models.FloatField(verbose_name='Price')
    providers = models.ForeignKey(Member, on_delete=models.CASCADE, null=False,)


    def __str__(self):
        return self.name_product


class Fornecedores(models.Model):
    name = models.CharField(max_length=50)
    products = models.ManyToManyField(Product)

    def __str__(self):
        return self.name + " " + self.products