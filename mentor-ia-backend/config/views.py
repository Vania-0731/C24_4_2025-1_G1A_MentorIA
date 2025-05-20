from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'authentication': request.build_absolute_uri('/api/authentication/'),
        'academic_management': request.build_absolute_uri('/api/academic_management/'),
        'module': request.build_absolute_uri('/api/module/'),
        'material': request.build_absolute_uri('/api/material/'),
        'assignment': request.build_absolute_uri('/api/assignment/'),
        'assessment': request.build_absolute_uri('/api/assessment/'),
        'forum': request.build_absolute_uri('/api/forum/'),
    })

