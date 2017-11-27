from rest_framework import serializers
from kitties.models import Kitty


class KittySerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Kitty
        fields = ('url', 'id', 'name', 'age', 'breed', 'temperament')
