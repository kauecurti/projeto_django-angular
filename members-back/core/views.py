from rest_framework import viewsets
from .models import Member, Product, Fornecedores
from .serializers import MemberSerializer, MemberSimpleSerializer, ProductSerializer, FornecedoresSerializer
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication, SessionAuthentication
from rest_framework.permissions import IsAuthenticated



class MemberViewSet(viewsets.ModelViewSet):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer
    authentication_class = [TokenAuthentication, SessionAuthentication]
    permission_class = [IsAuthenticated,]

    def list(self, request, *args, **kwargs):
        queryset = Member.objects.all()
        serializer = MemberSimpleSerializer(queryset, many = True)
        return Response(serializer.data)


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    authentication_class = [TokenAuthentication, SessionAuthentication]
    permission_class = [IsAuthenticated,]

class FornecedoresViewSet(viewsets.ModelViewSet):
    queryset = Fornecedores.objects.all()
    serializer_class = FornecedoresSerializer