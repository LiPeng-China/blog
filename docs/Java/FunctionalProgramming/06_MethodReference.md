## 一、概述

在使用 lambda 时，如果方法体重只有一个方法的调用的话（包括构造方法），可以使用方法引用进一步简化代码。

## 二、基本格式

类名或对象名::方法名

## 三、语法详解

### 3.1、引用类的静态方法

**格式**

`类名::方法名`

**使用前提**

方法体中只有一行代码，这行代码调用了某个类的静态方法，并且把要重写的抽象方法中所有的参数按照顺序传入这个传入这个静态方法中。

**举例**

优化前

```java
authors.stream()
    .map(author -> author.getAge())
    .map(age -> String.valueOf(age));
```

优化后

```java
authors.stream()
    .map(author -> author.getAge())
    .map(String::valueOf);
```

### 3.1、引用对象的实例方法

**格式**

`类名::方法名`

**使用前提**

方法体重一行方法，这行代码是调用某个对象的成员方法，并且把要重写的抽象方法中所有的参数按照顺序传入这个成员方法中。

**举例**

优化前

```java
List<Author> authors = getAuthors();
StringBuilder sb = new StringBuilder();

authors.stream()
    .map(author -> author.getName())
    .forEach(s -> sb.append(s));
```

优化后

```java
authors.stream()
    .map(author -> author.getName())
    .forEach(sb::append);
```

### 3.3、引用类的实例方法

**格式**

`类名::方法名`

**使用前提**

方法体重只有一行代码，并且这行代码调用了第一个参数的成员方法，并且把重写的抽象方法中的剩余参数按顺序传入这个成员方法中。

**举例**

优化前

```java
public class MethodReference {
    interface UseString {
        String use(String str, int start, int length);
    }

    private static List<Author> getAuthors() {
        // 同上 省略
    }

    public static String subAuthorName(String str, UseString useString) {
        int start = 0;
        int length = 1;
        return useString.use(str, start, length);
    }

    public static void main(String[] args) {
        List<Author> authors = getAuthors();
        subAuthorName("太一", new UseString() {
            @Override
            public String use(String str, int start, int length) {
                return str.substring(start, length);
            }
        });
    }
}
```

优化后

```java
List<Author> authors = getAuthors();
subAuthorName("太一", String::substring);
```

### 3.4、构造器引用

**格式**

`类名::new`

**使用前提**

方法体中只有一行代码，这行方法是调用了某个类的构造方法，并且把要冲且的方法中的所有参数按照顺序传入这个构造方法中。

**举例**

优化前

```java
authors.stream()
    .map(author -> author.getName())
    .map(name -> new StringBuilder(name))
    .map(sb -> sb.append("太一").toString())
    .forEach(str -> System.out.println(str));
```

优化后

```java
authors.stream()
    .map(author -> author.getName())
    .map(StringBuilder::new)
    .map(sb -> sb.append("太一").toString())
    .forEach(str -> System.out.println(str));
```

再优化

```java
authors.stream()
    .map(Author::getName)
    .map(StringBuilder::new)
    .map(sb -> sb.append("太一").toString())
    .forEach(System.out::println);
```

## 四、高级用法

JDK 的自定装箱和自动拆箱会有时间损耗，为了针对这部分时间损耗进行优化，Stream 提供了专门针对基本数据类型的方法。

mapToInt、mapToLong、mapToDouble、flatMapToInt、flatMapToLong、flatMapToDouble

```java
authors.stream()
    .mapToInt(author -> author.getAge())
    .forEach(System.out::println);
```