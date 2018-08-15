from django.conf.urls import url, include
from django.contrib import admin
from django.views.generic import TemplateView
from django.urls import path
from rest_framework import routers, serializers, viewsets
from sensor.serializers import SensorSerializer
from sensor.models import Sensor
from rest_framework_jwt.views import obtain_jwt_token
from rest_framework_jwt.views import refresh_jwt_token
from rest_framework_jwt.views import verify_jwt_token

# ViewSets define the view behavior.
class SensorViewSet(viewsets.ModelViewSet):
    queryset = Sensor.objects.all()
    serializer_class = SensorSerializer


# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'sensors', SensorViewSet)




urlpatterns = [
    #path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name="index.html")),
    #url(r'^', include(router.urls)),
    #url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('sensor/', include('sensor.urls')),
    path('auth-jwt/', obtain_jwt_token),
    path('auth-jwt-refresh/', refresh_jwt_token),
    path('auth-jwt-verify/', verify_jwt_token),
]
