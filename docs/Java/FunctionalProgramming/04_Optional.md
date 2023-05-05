## 一、概述

为了避免出现空指针异常，需要对变量做非空判断。

```java
public static void main(String[] args) {
    Author author = getAuthor();
    if (author != null){
        System.out.println(author.getName() );
    }
}

public static Author getAuthor(){
    Author author = new Author(1L, "蒙多", 33, "一个从菜刀中明悟哲理的祖安人", null);
    return null;
}
```

过道的判断会让代码显得臃肿不堪，JDK8 引入 Optional 更优雅地避免空指针异常。

## 二、创建对象

一般使用 Optional 的静态方法 ofNullable 来把数据封装成一个Optional 对象。

无论传入的参数是否为 null 都不会影响。

源码

```java
public static <T> Optional<T> ofNullable(T value) {
        return value == null ? empty() : of(value);
}
```

```java
Optional<Author> authorOptional = Optional.ofNullable(author);
```

如果确定一个对象不是空的，可以通过 Optional.of 方法

```java
Optional<Author> author2 = Optional.of(author);
```

如果一个方法的返回值类型是 Optional 类型，经过判断发现某次计算得到的返回值为 null 这个时候需要把 null 封装成 Optional 对象返回，使用 Optional.empty() 方法。

```java
Optional.empty()
```

## 三、安全消费值

使用 ifPresent 来消费其中的值。

源码：

```java
public void ifPresent(Consumer<? super T> consumer) {
    if (value != null)
        consumer.accept(value);
}
```

使用

```java
Author author = getAuthor();
Optional<Author> authorOptional = Optional.ofNullable(author);
authorOptional.ifPresent(author1 -> System.out.println(author1.getName()));
```

## 四、获取值

### 4.1、get

获取值进行处理可以使用 get() 方法，但不推荐，因为数据为空时会出现异 `NoSuchElementException` 。

源码

```java
public T get() {
    if (value == null) {
        throw new NoSuchElementException("No value present");
    }
    return value;
}
```



### 4.2、orElseGet

获取数据并且设置数据为空的默认值

源码

```java
public T orElseGet(Supplier<? extends T> other) {
    return value != null ? value : other.get();
}
```

使用

```java
Author author = getAuthor();
Optional<Author> authorOptional = Optional.ofNullable(author);
Author author1 = authorOptional.orElseGet(() -> new Author());
System.out.println(author1);
```

### 4.3、orElseThrow

获取数据，如果为空，则会根据传入的参数来创建抛出的异常

源码

```java
public <X extends Throwable> T orElseThrow(Supplier<? extends X> exceptionSupplier) throws X {
    if (value != null) {
        return value;
    } else {
        throw exceptionSupplier.get();
    }
}
```

使用

```java
Author author = getAuthor();
Optional<Author> authorOptional = Optional.ofNullable(author);
try {
    Author author1 = authorOptional.orElseThrow(() -> new RuntimeException("运行时异常"));
    System.out.println(author1);
} catch (Throwable e) {
    e.printStackTrace();
}
```

## 五、过滤

使用 filter 方法对数据进行过滤

```java
Author author = getAuthor();
Optional<Author> authorOptional = Optional.ofNullable(author);
authorOptional.filter(author1 -> author1.getAge() > 18).ifPresent(author1 -> System.out.println(author1));
```

## 六、判断

通过 isPresent 方法，判断 Optional 中是否存在数据。如果为空，返回 false，否则返回 true 。

```java
Author author = getAuthor();
Optional<Author> authorOptional = Optional.ofNullable(author);
if (authorOptional.isPresent()) {
    System.out.println(authorOptional.get().getName());
}
```

## 七、数据转换

```java
Author author = getAuthor();
Optional<Author> authorOptional = Optional.ofNullable(author);

authorOptional.map(author1 -> author1.getIntro())
        .ifPresent(s -> System.out.println(s));
```
