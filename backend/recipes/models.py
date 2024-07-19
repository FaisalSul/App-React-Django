from django.db import models

# Create your models here.

class Recipe(models.Model):
    image = models.ImageField(upload_to='uploads/images', null=True, blank=True)
    name = models.CharField(max_length=150, null=False, blank=False)
    description = models.TextField(null=False, blank=False)

    def __str__(self):
        return self.name
