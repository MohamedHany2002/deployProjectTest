from django.db import models

# Create your models here.



class Doc(models.Model):
    file = models.ImageField(upload_to='images/')

    def __str__(self):
        return str(self.pk)



class Post(models.Model):
    title = models.CharField(max_length=200)
    body  = models.TextField()