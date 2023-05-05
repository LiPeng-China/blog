## 1、概述

JDK8 中的一个语法糖，对某些匿名内部类的写法进行简化。

是函数式编程思想的一个重要体现，让我们不在关注是什么对象，而是更关注对数据进行了什么操作。

## 2、核心原则

可推导可省略

## 3、基本格式

```java
(参数列表) -> {代码}
```

### 举例：创建线程

匿名内部类写法

```java
new Thread(new Runnable() {
            @Override
            public void run() {
                System.out.println("你好");
            }
        }).start();
```

Lambda 表达式写法【接口且只有一个抽象方法】

```java
new Thread(() -> System.out.println("新线程中 run 方法被执行了。")).start();
```

### 省略规则

- 参数类型可以省略
- 方法体中如果只有一句代码的时候，大括号、return、和唯一一句代码后面的分号
- 方法只有一个参数时，小括号也可以省略