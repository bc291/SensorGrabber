from django.db import models

class Sensor(models.Model):
    name = models.CharField(max_length=100)
    type = models.CharField(max_length=100)
    used_gpios = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)