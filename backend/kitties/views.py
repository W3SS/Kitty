from kitties.models import Kitty
from rest_framework import viewsets
from kitties.serializers import (KittySerializer)


class KIttyViewSet(viewsets.ModelViewSet):

    queryset = Kitty.objects.all()
    serializer_class = KittySerializer
