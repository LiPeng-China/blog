## 一、程序包 `org.slf4j` 不存在

问题描述：

在项目中引入 `lombok` 依赖，报错如上，但是在其他项目中引入依赖却能正常使用。

原因：

在其他项目中引入了别的依赖，这些依赖中包含了 `org.slf4j` 依赖，所以可以正常使用 `@Slf4j` 注解。

解决办法：

在 `pom` 中引入 `org.slf4j` 依赖，注意版本号，与 JDK8 对应

```xml
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <version>1.18.30</version>
</dependency>
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-api</artifactId>
    <version>1.7.30</version>
</dependency>
<dependency>
    <groupId>ch.qos.logback</groupId>
    <artifactId>logback-classic</artifactId>
    <version>1.2.3</version>
</dependency>
```



