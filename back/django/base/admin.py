from django.contrib import admin

# Register your models here.
from .models import Task
from .models import Product
from .models import Student
from .models import Category
 
admin.site.register(Task)
admin.site.register(Product)
admin.site.register(Student)
admin.site.register(Category)
