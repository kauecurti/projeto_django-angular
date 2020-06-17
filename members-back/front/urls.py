from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from core.views import MemberViewSet, ProductViewSet, FornecedoresViewSet
from django.conf import settings
from django.conf.urls.static import static

router = routers.DefaultRouter()
router.register(r'members', MemberViewSet)
router.register(r'produto', ProductViewSet)
router.register(r'geral', FornecedoresViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('admin/', admin.site.urls),
] 