from django.conf.urls import url, include
from rest_framework import routers
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework.authtoken import views
from kitties import views


router = routers.DefaultRouter()
router.register(r'kitties', views.KIttyViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
]