## 1、概述

Java8 中的 Stream 使用的是函数式编程模式，他可以用来对集合和数组进行链状流式操作。 

## 2、案例准备

author.java

```java
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode//用于后期的去重使用
public class Author implements Comparable<Author> {
    //id
    private Long id;
    //姓名
    private String name;
    //年龄
    private Integer age;
    //简介
    private String intro;
    //作品
    private List<Book> books;

    @Override
    public int compareTo(Author o) {
        return o.getAge() - this.getAge();
    }
}
```

Book.java

```java
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode//用于后期的去重使用
public class Book {
    //id
    private Long id;
    //书名
    private String name;

    //分类
    private String category;//"哲学,小说"

    //评分
    private Integer score;

    //简介
    private String intro;

}
```

getAuthors() 方法

```java
private static List<Author> getAuthors() {
        //数据初始化
        Author author = new Author(1L, "蒙多", 33, "一个从菜刀中明悟哲理的祖安人", null);
        Author author2 = new Author(2L, "亚拉索", 15, "狂风也追逐不上他的思考速度", null);
        Author author3 = new Author(3L, "易", 14, "是这个世界在限制他的思维", null);
        Author author4 = new Author(3L, "易", 14, "是这个世界在限制他的思维", null);

        //书籍列表
        List<Book> books1 = new ArrayList<>();
        List<Book> books2 = new ArrayList<>();
        List<Book> books3 = new ArrayList<>();

        books1.add(new Book(1L, "刀的两侧是光明与黑暗", "哲学,爱情", 88, "用一把刀划分了爱恨"));
        books1.add(new Book(2L, "一个人不能死在同一把刀下", "个人成长,爱情", 99, "讲述如何从失败中明悟真理"));

        books2.add(new Book(3L, "那风吹不到的地方", "哲学", 85, "带你用思维去领略世界的尽头"));
        books2.add(new Book(3L, "那风吹不到的地方", "哲学", 85, "带你用思维去领略世界的尽头"));
        books2.add(new Book(4L, "吹或不吹", "爱情,个人传记", 56, "一个哲学家的恋爱观注定很难把他所在的时代理解"));

        books3.add(new Book(5L, "你的剑就是我的剑", "爱情", 56, "无法想象一个武者能对他的伴侣这么的宽容"));
        books3.add(new Book(6L, "风与剑", "个人传记", 100, "两个哲学家灵魂和肉体的碰撞会激起怎么样的火花呢？"));
        books3.add(new Book(6L, "风与剑", "个人传记", 100, "两个哲学家灵魂和肉体的碰撞会激起怎么样的火花呢？"));

        author.setBooks(books1);
        author2.setBooks(books2);
        author3.setBooks(books3);
        author4.setBooks(books3);

        List<Author> authorList = new ArrayList<>(Arrays.asList(author, author2, author3, author4));
        return authorList;
    }
```

## 3、快速入门

### 3.1、需求

打印年龄小于18的作者的名字，注意去重

### 3.2、实现

```java
public static void main(String[] args) {
        List<Author> authors = getAuthors();
        authors.stream()
                .distinct()
                .filter(author -> author.getAge() < 18)
                .forEach(author -> System.out.println(author.getName()));
    }
```

## 4、常用操作

### 4.1、创建流

单列集合：`集合对象.stream()`

```java
List<Author> authors = getAuthors();
Stream<Author> authorStream = authors.stream();
```

数组：`Arrays.stream(数组)` 或者 `Stream.of()`

```java
Integer[] arr = {1, 2, 3, 4, 5};

// 方法一
Stream<Integer> integerStream = Arrays.stream(arr);

// 方法二
Stream<Integer> integerStream = Stream.of(arr);
```

双列集合：转换成单列集合再创建流

```java
Map<String, Integer> map = new HashMap<>();
map.put("蜡笔小新", 19);
map.put("黑子", 17);
map.put("日向翔阳", 16);

Stream<Map.Entry<String, Integer>> stream = map.entrySet().stream();
```

### 4.2、中间操作

#### 4.2.1、filter

```java
List<Author> authors = getAuthors();
// 打印所有姓名长度大于1的作家姓名
authors.stream()
        .filter(author -> author.getName().length() > 1)
        .forEach(author -> System.out.println(author.getName()));
```

#### 4.2.2、map

对流中的元素进行计算和转换

```java
authors.stream()
        .map(author -> author.getAge())
        .map(integer -> integer + 10)
        .forEach(integer -> System.out.println(integer));
```

#### 4.2.3、distinct

去除流中重复元素

底层依靠 `Object#equals()` 方法，需要重写 `equals()`

```java
// 打印所以的作家名称，并且不同有重复
authors.stream()
        .map(author -> author.getName())
        .distinct()
        .forEach(s -> System.out.println(s));
```

#### 4.2.4、sorted

对流中的元素进行排序

```java
// 对流中元素按照年龄进行排序，并且要求不能有重复
authors.stream()
        .distinct()
        .sorted((o1, o2) -> o1.getAge() - o2.getAge())
        .forEach(author -> System.out.println(author.getAge()));
```

> 注：如果调用空参的 sorted() 排序，需要类实现 Comparable 接口

#### 4.2.4、limit

设置流的最大长度，超出部分将被抛弃

```java
// 对流中年龄进行降序排序，不能有重复元素，打印年龄最大的两个作家名字
authors.stream()
        .distinct()
        .sorted((o1, o2) -> o2.getAge() - o1.getAge())
        .limit(2)
        .forEach(author -> System.out.println(author.getName()));
```

#### 4.2.5、skip

跳过流中的前 n 个元素，返回剩下的元素

```java
// 去除年两最大作家外的其他作家，不能重复，年龄降序排序
authors.stream()
        .distinct()
        .sorted((o1, o2) -> o2.getAge() - o1.getAge())
        .skip(1)
        .forEach(author -> System.out.println(author.getAge()));

```

#### 4.2.6、flatMap

把一个对象转换成多个对象作为流中的元素

```java
// 打印所有书籍的名字，要求对重复元素去重
authors.stream()
        .flatMap(author -> author.getBooks().stream())
        .distinct()
        .forEach(book -> System.out.println(book.getName()));

// 打印现有的书籍的所有分类，对分类去重
authors.stream()
        .flatMap(author -> author.getBooks().stream())
        .distinct()
        .flatMap(book -> Arrays.stream(book.getCategory().split(",")))
        .distinct()
        .forEach(category -> System.out.println(category));
```

### 4.3、终结操作

#### 4.3.1、forEach

对流中的元素进行遍历

```java
// 输出所有作家的名字
authors.stream()
        .map(author -> author.getName())
        .distinct()
        .forEach(name -> System.out.println(name));
```

#### 4.3.2、count

获取当前流中元素的个数

```java
// 打印作家所出书籍的数目，注意去重
long count = authors.stream()
                .flatMap(author -> author.getBooks().stream())
                .distinct()
                .count();
        System.out.println(count);
```

#### 4.3.3、max&min

获取流中的最值

```java
// 分别获取作家所处书籍的最高分和最低分
ptional<Integer> max = authors.stream()
                .flatMap(author -> author.getBooks().stream())
                .map(book -> book.getScore())
                .max((o1, o2) -> o1 - o2);
System.out.println(max.get());

Optional<Integer> min = authors.stream()
                .flatMap(author -> author.getBooks().stream())
                .map(book -> book.getScore())
                .min(((o1, o2) -> o1 - o2));
System.out.println(min.get());
```

#### 4.3.4、collect

 把当前流转换成集合

1、获取一个存放所有作者名字的集合

```java
List<String> list = authors.stream()
                .distinct()
                .map(author -> author.getName())
                .collect(Collectors.toList());
System.out.println(list);
```

2、获取所有书名 set 集合

```java
Set<String> set = authors.stream()
                .distinct()
                .flatMap(author -> author.getBooks().stream())
                .map(book -> book.getName())
                .collect(Collectors.toSet());
System.out.println(set);
```

3、获取一个 map 集合，key 为作者名，value 为  `List<Book>`

```java
Map<String, List<Book>> map = authors.stream()
                .distinct()
                .collect(Collectors.toMap(author -> author.getName(), author -> author.getBooks()));
System.out.println(map);
```

#### 4.3.5、anyMatch

用来判断是否有任意符合匹配条件的元素，结果为 boolean 类型

```java
// 判断是否有年龄在 29 岁以上的作家
boolean flag = authors.stream()
                .anyMatch(author -> author.getAge() > 29);
System.out.println(flag);
```

#### 4.3.6、allMatch

用来判断是否都符合条件

```java
// 判断是否所有作家都是成年人
boolean flag = authors.stream()
                .allMatch(author -> author.getAge() >= 18);
        System.out.println(flag)
```

#### 4.3.7、noneMatch

判断流中元素是否都不符合

```java
// 判断作家是否都没有超过 100 岁
boolean flag = authors.stream()
                .noneMatch(author -> author.getAge() > 100);
System.out.println(flag);
```

#### 4.3.8、findAny

获取流中的任意一个元素

```java
// 获取任意一个年龄大于 18 的作家，如果存在就输出它的名字
Optional<Author> any = authors.stream()
                .filter(author -> author.getAge() > 18)
                .findAny();
System.out.println(any.get());
```

#### 4.3.9、findFirst

获取流中的第一个元素

```java
// 获取年龄最小的作家，并输出他的姓名
Optional<Author> first = authors.stream()
                .sorted(((o1, o2) -> o1.getAge() - o2.getAge()))
                .findFirst();
first.ifPresent(author -> System.out.println(author.getName()));
```

#### 4.3.10、reduce

对流中的元素按照指定的计算方式计算一个结果

1、源码：内部计算方式

```java
// 三个参数
R result = supplier.get();   
for (T element : this stream)       
    accumulator.accept(result, element);   
return result;

//一个参数
boolean foundAny = false;   
T result = null;   
for (T element : this stream) {       
    if (!foundAny) {           
        foundAny = true;           
        result = element;       
    }else           
        result = accumulator.apply(result, element);   
}   
return foundAny ? Optional.of(result) : Optional.empty()

// 两个参数
U result = identity;   
for (T element : this stream)       
    result = accumulator.apply(result, element)   
return result;
```

2、使用 reduce 求所有作者年龄之和

```java
Integer sum = authors.stream()
                .map(author -> author.getAge())
                .reduce(0, ((result, element) -> result += element));
System.out.println(sum);
```

3、使用 reduce 求所哟陼年龄中的最大值

```java
Optional<Integer> max = authors.stream()
                .map(author -> author.getAge())
                .reduce(((integer, integer2) -> integer > integer2 ? integer : integer2));
System.out.println(max);
```

4、使用 reduce 求所哟陼年龄中的最小值

```java
Optional<Integer> min = authors.stream()
                .map(author -> author.getAge())
                .reduce(((integer, integer2) -> integer > integer2 ? integer2 : integer));
min.ifPresent(integer -> System.out.println(integer));
```

### 4.4、注意事项

- 惰性求值（如果没有终结操作，中间操作不会执行）
- 流是一次性（一旦一个流经过一个终结操作后，这个流就不能再被使用）
- 不会影响原数据（期望可以不改变，在 forEach 中使用 set 函数式可以改变的）
