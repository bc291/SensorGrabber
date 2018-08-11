from django.http import HttpResponse, JsonResponse
from sensor.models import Sensor, Reading
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from sensor.serializers import SensorSerializer, ReadingSerializer
from sensor.serializers import UserSerializer, UserSerializerWithToken
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView

"""
class ListReadings(APIView)
    permission_classes = (IsAuthenticated,)

    def get(self):
        all_readings = Reading.objects.all()
        serializer = ReadingSerializer(all_readings, many=True)
        return JsonResponse(serializer.data, safe=False)
"""
def sensor_list(request):
    if request.method == 'GET':
        all_sensors = Sensor.objects.all()
        serializer = SensorSerializer(all_sensors, many=True)
        return JsonResponse(serializer.data, safe=False)

@api_view(['GET'])
def reading_list(request):
    permission_classes = (IsAuthenticated,)
    if request.method == 'GET':
        all_readings = Reading.objects.all()
        serializer = ReadingSerializer(all_readings, many=True)
        return JsonResponse(serializer.data, safe=False)
        




@api_view(['GET'])
def current_user(request):
    """
    Determine the current user by their token, and return their data
    """
    
    serializer = UserSerializer(request.user)
    return Response(serializer.data)
