## 一、face_alignment 使用错误

### 1、使用

```python
import face_alignment
face = face_alignment.FaceAlignment(face_alignment.LandmarksType._2D, flip_input=False, device='cuda')
```

### 2、报错如下

```shell
Traceback (most recent call last):
  File "/data/LP2/lipreading-demo/video_process.py", line 21, in <module>
    face = face_alignment.FaceAlignment(face_alignment.LandmarksType._2D, flip_input=False, device='cuda')
  File "/home/amax/.conda/envs/torch2/lib/python3.10/enum.py", line 437, in __getattr__
    raise AttributeError(name) from None
AttributeError: _2D
```

### 3、分析原因

LandmarksType 没有 _2D 属性

### 4、验证

```shell
(torch2) amax@amax:/data/LP2$ python
Python 3.10.11 (main, May 16 2023, 00:28:57) [GCC 11.2.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import face_alignment
>>> print(dir(face_alignment.LandmarksType))
['THREE_D', 'TWO_D', 'TWO_HALF_D', '__class__', '__doc__', '__members__', '__module__']
>>> 
```

### 5、解决

```shell
face = face_alignment.FaceAlignment(face_alignment.LandmarksType.TWO_D, flip_input=False, device='cuda')
```

## 二、计算模型的参数两与运算量

### 1、安装 thop 包

```shell
pip install thop
```

### 2、使用

```python
from thop import profile, clever_format

def cal_flops_params(model, inputs):
    flops, params = profile(model, inputs=inputs)
    flops, params = clever_format([flops, params], "%.2f")
    return flops, params

if __name__ == "__main__":
	total_flops, total_params = cal_flops_params(model, inputs=(video, video_mask, tgt))
```

