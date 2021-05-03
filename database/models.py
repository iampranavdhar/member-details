
from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100)
    stack_image = models.CharField(max_length=500)

    def __str__(self):
        return self.name

class Member(models.Model):
    name = models.CharField(max_length=100)
    image = models.CharField(max_length=500)
    intro = models.CharField(max_length=200)
    description = models.TextField()
    githubusername=models.CharField(max_length=100)
    discordusername=models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    phone=models.CharField(max_length=100)
    category = models.ForeignKey(
        Category, related_name="members", on_delete=models.CASCADE
    )

    def __str__(self):
        return self.name