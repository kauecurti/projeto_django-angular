from rest_framework import serializers
from .models import Member, Product, Fornecedores


class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = '__all__'


class MemberSimpleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = '__all__'

class ProductSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Product
        fields = ('id','name_product','price','providers')

class FornecedoresSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Fornecedores
        fields = ('name','products')