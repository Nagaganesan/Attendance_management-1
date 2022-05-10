import imp
from pickle import FROZENSET
from django.conf.urls import url
from django.urls import path, include
from AttendanceApp import views
from .views import EmployeeView
from django.conf.urls.static import static
from django.conf import settings

urlpatterns=[
    


    path('add',EmployeeView.as_view()),


    
]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)