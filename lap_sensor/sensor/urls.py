from django.conf.urls import url
from django.urls import path
from sensor import views


urlpatterns = [
    url(r'^sensors/$', views.sensor_list),
    url(r'^reading/$', views.reading_list),
    path('current_user/', views.current_user),
]