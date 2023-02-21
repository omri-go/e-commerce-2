from rest_framework import serializers
from .models import Student, Task, Product, Category


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'
    def create(self, validated_data):
        user = self.context['user']
        print(user)
        return Task.objects.create(**validated_data,user=user)
    

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

    

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


# class CartItemSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = CartItem
#         fields = '__all__'

