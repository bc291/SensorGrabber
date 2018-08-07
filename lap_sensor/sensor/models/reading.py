from django.db import models
from sensor.models.sensors import Sensor

class Reading(models.Model):
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    value = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)
    unit = models.CharField(max_length=10)
    sensor = models.ForeignKey(Sensor, on_delete=models.CASCADE)