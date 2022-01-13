




from django.urls import path,include
from . import views

urlpatterns = [
    path('dropzone', views.mainPage.as_view(),name='dropzone'),
    path('fileUpload', views.fileUpload,name='fileUpload'),
    path('delete_obj', views.delete_obj,name='delete_obj'),
    path('mainSpinner', views.mainSpinner,name='mainSpinner'),
    path('postJson', views.postJson,name='postJson'),
    path('postJsonSearch', views.postJsonSearch,name='postJsonSearch'),

    path('dataSearch', views.dataSearch,name='dataSearch'),


    

]
