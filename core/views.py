from django.shortcuts import render
from django.views.generic import TemplateView
from django.http import HttpResponse,JsonResponse
from .models import Doc,Post
from django.views.decorators.csrf import csrf_exempt,requires_csrf_token

import json
# Create your views here.




class mainPage(TemplateView):
    template_name = 'dropzone.html'


def fileUpload(request):
    print(request.FILES,"************")
    file = request.FILES['file']
    Doc.objects.create(file=file)
    print(Doc.objects.count(),"*//////////")
    return HttpResponse('upload')


def delete_obj(request):
    return JsonResponse({'status':'ok'})


def mainSpinner(request):
    # posts = Post.objects.values()
    
    
    return render(request,"home.html")


def postJson(request):

    posts = list(Post.objects.values('id','title','body'))[:10]
    return JsonResponse(posts,safe=False)

@csrf_exempt
def postJsonSearch(request):
    print("console")
    print(request.POST['key'])
    key = request.POST['key']
    posts = list(Post.objects.filter(title__icontains=key).values('id','title','body'))[:10]
    return JsonResponse(posts,safe=False)


def dataSearch(request):
    postsTemplate = list(Post.objects.values('id','title','body'))[:20]
    posts = json.dumps(postsTemplate)
    x = 1
    print(posts)
    return render(request,"home.html",{'posts':posts,'postsTemplate':postsTemplate})
