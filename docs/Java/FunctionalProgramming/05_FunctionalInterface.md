## 一、概述

只有 **一个抽象方法** 的接口称之为函数式接口。

JDK 的函数式接口都加上了 @FunctionalInterface 。

## 二、常见的函数式接口

### 2.1、Consumer 消费接口

在方法中传入参数，进行消费。

源码

```java
@FunctionalInterface
public interface Consumer<T> {

    /**
     * Performs this operation on the given argument.
     *
     * @param t the input argument
     */
    void accept(T t);
    
    // ... 默认方法
}
```

### 2.2、Function 计算转换接口

传入参数，进行计算或转换，结果返回。

源码

```java
@FunctionalInterface
public interface Function<T, R> {

    /**
     * Applies this function to the given argument.
     *
     * @param t the function argument
     * @return the function result
     */
    R apply(T t);
}
```

### 2.3、Predicate判断接口

在方法中对传入的参数进行条件判断，返回判断结果。

源码：

```java
@FunctionalInterface
public interface Predicate<T> {

    /**
     * Evaluates this predicate on the given argument.
     *
     * @param t the input argument
     * @return {@code true} if the input argument matches the predicate,
     * otherwise {@code false}
     */
    boolean test(T t);
}
```

### 2.4 、Supplier 生产型接口

在方法中创建对象，把创建包的对象返回。

源码：

```java
@FunctionalInterface
public interface Supplier<T> {

    /**
     * Gets a result.
     *
     * @return a result
     */
    T get();
}
```

## 三、常用的默认方法

### 3,1、add

在使用 Predicate 接口时，可能需要多个判断条件的拼接，and 方法相当于 && 。

```java
// 打印作家中年龄大于17且名字长度大于1的作家姓名
authors.stream()
    .filter(((Predicate<Author>) author -> author.getAge() > 17)
            .and(author -> author.getName().length() > 1) )
    .forEach(author -> System.out.println(author.getName() + ": " + author.getAge()));
// 不使用 add 方法
authors.stream()
                .filter(author -> author.getAge() > 17 && author.getName().length() > 1)
                .forEach(author -> System.out.println(author.getName() + ": " + author.getAge()));
```

### 3.2、or

```java
// 打印作家中年龄大于17或名字长度小于2的作家姓名
authors.stream()
    .filter(((Predicate<Author>) author -> author.getAge() > 17)
            .or(author -> author.getName().length() < 2))
    .forEach(author -> System.out.println(author.getName() + " : " + author.getAge()));
```

### 3.3、negate

相当于 `!`

```java
// 打印年龄不大于17的作家
authors.stream()
    .filter(((Predicate<Author>) author -> author.getAge() > 17)
            .negate())
    .forEach(author -> System.out.println(author.getAge()));

// 不是用 negate
authors.stream()
    .filter(author -> !(author.getAge() > 17))
    .forEach(author -> System.out.println(author.getAge()));
```

