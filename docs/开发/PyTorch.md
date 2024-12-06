## 一、face_alignment 使用错误

1、使用

```python
import face_alignment
face = face_alignment.FaceAlignment(face_alignment.LandmarksType._2D, flip_input=False, device='cuda')
```

2、报错如下

```shell
Traceback (most recent call last):
  File "/data/LP2/lipreading-demo/video_process.py", line 21, in <module>
    face = face_alignment.FaceAlignment(face_alignment.LandmarksType._2D, flip_input=False, device='cuda')
  File "/home/amax/.conda/envs/torch2/lib/python3.10/enum.py", line 437, in __getattr__
    raise AttributeError(name) from None
AttributeError: _2D
```

3、分析原因

LandmarksType 没有 _2D 属性

4、验证

```shell
(torch2) amax@amax:/data/LP2$ python
Python 3.10.11 (main, May 16 2023, 00:28:57) [GCC 11.2.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import face_alignment
>>> print(dir(face_alignment.LandmarksType))
['THREE_D', 'TWO_D', 'TWO_HALF_D', '__class__', '__doc__', '__members__', '__module__']
>>> 
```

5、解决

```shell
face = face_alignment.FaceAlignment(face_alignment.LandmarksType.TWO_D, flip_input=False, device='cuda')
```

## 二、计算模型的参数两与运算量

1、安装 thop 包

```shell
pip install thop
```

2、使用

```python
from thop import profile, clever_format

def cal_flops_params(model, inputs):
    flops, params = profile(model, inputs=inputs)
    flops, params = clever_format([flops, params], "%.2f")
    return flops, params

if __name__ == "__main__":
	total_flops, total_params = cal_flops_params(model, inputs=(video, video_mask, tgt))
```

## 三、touch.no_grade() 报错

1、错误代码

```python
@staticmethod
@torch.no_grad			#! API 使用错误
def inference(lips):
    model = LipReader()
    model = ModelInferenceUtil.load_model_state(model, "/path/to/checkpoint")
    # data
    lips, lips_mask = ModelInferenceUtil.prepare_data(lips)
    # cpu --> gpu
    model = model.cuda()
    lips = lips.cuda()
    lips_mask = lips_mask()
    # extract feature
    c3d_feature = ModelInferenceUtil.extract_feature(lips)
    # inference
    model.eval()
    scores, logits, predict = model(c3d_feature, lips_mask)
    predict_text = ModelInferenceUtil.idx_to_hz(predict)
    # return
    return predict_text
```

2、报错

```shell
File "/data/LP2/LipReaderClient/app/lipreader/util.py", line 124, in <module>
    class ModelInferenceUtil:
File "/data/LP2/LipReaderClient/app/lipreader/util.py", line 131, in ModelInferenceUtil
    def inference(lips):
TypeError: no_grad.__init__() takes 1 positional argument but 2 were given
```

3、分析原因

touch.no_grade() 相关 API 使用错误，no_grade() 应为方法，而不是属性

4、更改

```python
@staticmethod
@torch.no_grad()
def inference(lips):
    model = LipReader()
    model = ModelInferenceUtil.load_model_state(model, "/path/to/checkpoint")
    # data
    lips, lips_mask = ModelInferenceUtil.prepare_data(lips)
    # cpu --> gpu
    model = model.cuda()
    lips = lips.cuda()
    lips_mask = lips_mask()
    # extract feature
    c3d_feature = ModelInferenceUtil.extract_feature(lips)
    # inference
    model.eval()
    scores, logits, predict = model(c3d_feature, lips_mask)
    predict_text = ModelInferenceUtil.idx_to_hz(predict)
    # return
    return predict_text
```

## 四、PyQT 报错

1、错误

```shell
(torch2) amax@amax:/data/LP2/LipReaderClient$ python demo.py 

 Tips: QFluentWidgets Pro is now released. Click https://qfluentwidgets.com/pages/pro to learn more about it.

QObject::moveToThread: Current thread (0x1089de0) is not the object's thread (0x6ea6c90).
Cannot move to target thread (0x1089de0)

qt.qpa.plugin: Could not load the Qt platform plugin "xcb" in "/home/amax/.conda/envs/torch2/lib/python3.10/site-packages/cv2/qt/plugins" even though it was found.
This application failed to start because no Qt platform plugin could be initialized. Reinstalling the application may fix this problem.

Available platform plugins are: xcb, linuxfb, minimal, offscreen, vnc, webgl.

Aborted (core dumped)
```

2、分析原因

`opencv` 与 `pyqt5` 一起使用时，会出现此问题。

`opencv` 内部使用的 qt 插件与 `pyqt5` 不兼容。

3、解决办法

在 `import cv2` 语句之后取消设置环境变量：

```python
import os
os.environ.pop("QT_QPA_PLATFORM_PLUGIN_PATH")
```

## 
