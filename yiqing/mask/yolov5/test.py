def get_detect(iostring):
    from detect import run
    import cv2
    from PIL import Image
    import  io
    import numpy as np
    im=np.array(Image.open(io.BytesIO(iostring)),dtype=np.uint8)
    im=cv2.cvtColor(im,cv2.COLOR_RGB2BGR)
    res=run(source=im).tobytes()
    
    return res
