from django.db import models
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token
from datetime import datetime
from django.core.exceptions import ValidationError


class Kitty(models.Model):

    name = models.CharField(max_length=100)
    age = models.IntegerField(blank=True, null=True)
    breed = models.CharField(blank=True, max_length=100)
    temperament = models.CharField(blank=True, max_length=100)

    class Meta:
        ordering = ('name',)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if self.age:
            current_year = datetime.now().year
            if self.age < 0 or self.age > 50:
                raise ValidationError("Please, enter the correct age")
            super(Kitty, self).save(*args, **kwargs)
