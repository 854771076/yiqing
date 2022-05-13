from django.shortcuts import render,HttpResponse
iostring=None
res=None
# Create your views here.
def imguploadform(request):
    # GET请求返回表单页面
    if request.method == 'GET':
        return render(request=request, template_name='image.html')
    # POST请求上传图片
    elif request.method == 'POST':
    	# 获取图片文件
        img_data = request.FILES.get('file')
        global iostring
        global res
        iostring=img_data.read()
        res,nums,bad=get_detect(iostring)

        
        return render(request,'image.html',{'nums':nums,'bad':bad})

def oldimg(request):
    global iostring
    return HttpResponse(iostring, content_type='image/jpg')
def resimg(request):
    global res
    return HttpResponse(res, content_type='image/jpg')
def index(request):
    
   
    	
    return render(request=request, template_name='image.html')

def image2byte(image):
    import  io
    '''
    图片转byte
    image: 必须是PIL格式
    image_bytes: 二进制
    '''
    # 创建一个字节流管道
    img_bytes = io.BytesIO()
    # 将图片数据存入字节流管道， format可以按照具体文件的格式填写
    image.save(img_bytes, format="JPEG")
    # 从字节流管道中获取二进制
    image_bytes = img_bytes.getvalue()
    return image_bytes

def get_detect(iostring):
    from mask.yolov5.detect import run
    import cv2
    from PIL import Image
    import  io
    import numpy
    im=numpy.array(Image.open(io.BytesIO(iostring)),dtype=numpy.uint8)
    im=cv2.cvtColor(im,cv2.COLOR_RGB2BGR)
    
    res,nums,bad=run(source=im)

    res=Image.fromarray(res)
    res=image2byte(res)
    
    return (res,nums,bad)
