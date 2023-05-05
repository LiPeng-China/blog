## 并行流

`parallel()` 方法可以把串行刘转换成并行流。

```java
Stream<Integer> stream = Stream.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

Integer integer = stream.parallel()
    .peek(integer1 -> System.out.println(integer1 + Thread.currentThread().getName()))
    .filter(num -> num > 5)
    .reduce((res, ele) -> res + ele)
    .get();
System.out.println(integer);
```

通过 `parallelStream()` 得到并行流。

```java
authors.parallelStream()
    .map(Author::getName)
    .map(StringBuilder::new)
    .map(sb -> sb.append("太一").toString())
    .forEach(System.out::println);
```

