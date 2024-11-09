## 一、简介

### 1、什么是 MyBatis？

- 官网学习：[MyBatis中文网](./https://mybatis.net.cn/)
- 概述：MyBatis 是一款优秀的持久层框架，它支持自定义 SQL、存储过程以及高级映射。MyBatis 免除了几乎所有的 JDBC 代码以及设置参数和获取结果集的工作。MyBatis 可以通过简单的 XML 或注解来配置和映射原始类型、接口和 Java POJO（Plain Old Java Objects，普通老式 Java 对象）为数据库中的记录。

### 2、和 JDBC 对比

- JDBC 缺点：
  - 需要手动封装结果集
  - 需要手动处理参数
  - 没有共用性
  - SQL 与 Java 代码耦合度高
  - ...

## 二、入门使用

### 1、引入相关依赖

```xml
<dependency>
    <groupId>org.mybatis</groupId>
    <artifactId>mybatis</artifactId>
    <version>3.5.10</version>
</dependency>
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>8.0.30</version>
</dependency>
<dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.13.1</version>
    <scope>test</scope>
</dependency>
```

### 2、创建 MyBatis 核心配置文件

- 概述：XML 配置文件中包含了对 MyBatis 系统的核心设置，包括获取数据库连接实例的数据源（DataSource）以及决定事务作用域和控制方式的事务管理器（TransactionManager）

- mybatis-config.xml

  ```xml
  <?xml version="1.0" encoding="UTF-8" ?>
  <!DOCTYPE configuration
    PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
    "http://mybatis.org/dtd/mybatis-3-config.dtd">
  <configuration>
    <environments default="development">
      <environment id="development">
        <transactionManager type="JDBC"/>
        <dataSource type="POOLED">
          <property name="driver" value="${driver}"/>
          <property name="url" value="${url}"/>
          <property name="username" value="${username}"/>
          <property name="password" value="${password}"/>
        </dataSource>
      </environment>
    </environments>
    <mappers>
      <mapper resource="org/mybatis/example/BlogMapper.xml"/>
    </mappers>
  </configuration>
  ```

### 3、创建 MyBatis 映射文件

- domain 实体类

  ```java
  @Data
  public class Employee {
      private Long id;
      private String name;
      private int age;
      private String address;
  }
  ```

- mapper 接口

  ```java
  public interface EmployeeMapper {
      /**
       * 根据 ID 员工信息
       *
       * @param id ID
       * @return 员工信息
       */
      Employee selectEmployee(@Param("id") Long id);
  }
  ```

- mapper 映射文件

  ```xml
  <?xml version="1.0" encoding="UTF-8" ?>
  <!DOCTYPE mapper
          PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
          "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
  <mapper namespace="org.taiyi.mapper.EmployeeMapper">
      <select id="selectEmployee" resultType="org.taiyi.domain.Employee">
          select * from employee where id = #{id}
      </select>
  </mapper>
  ```

### 4、测试

```java
@Test
public void quickStartTest01() throws IOException {
    // 1 获取 MyBatis 核心配置文件
    String resource = "mybatis-config.xml";
    InputStream inputStream = Resources.getResourceAsStream(resource);
    // 2 通过配置文件获取 SqlSessionFactory 工厂类
    SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);
    // 3 从 SqlSessionFactory 中获取 SqlSession 实例
    try (SqlSession sqlSession = sqlSessionFactory.openSession()) {
        // 4 通过 XXXMapper 字节码获取 mapper 对象
        EmployeeMapper employeeMapper = sqlSession.getMapper(EmployeeMapper.class);
        // 5 通过 mapper 对象执行其中定义的方法
        Employee employee = employeeMapper.selectEmployee(1L);
        // 6 打印结果
        System.out.println(employee);
    }
}
```

## 三、XML 配置

### 1、概述

- 概述：MyBatis 的配置文件包含了会深深影响 MyBatis 行为的设置和属性信息
- 配置文档的顶层结构如下：
  - configuration（配置）
    - [properties（属性）](./https://mybatis.net.cn/configuration.html#properties)
    - [settings（设置）](./https://mybatis.net.cn/configuration.html#settings)
    - [typeAliases（类型别名）](./https://mybatis.net.cn/configuration.html#typeAliases)
    - [typeHandlers（类型处理器）](./https://mybatis.net.cn/configuration.html#typeHandlers)
    - [objectFactory（对象工厂）](./https://mybatis.net.cn/configuration.html#objectFactory)
    - [plugins（插件）](./https://mybatis.net.cn/configuration.html#plugins)
    - environments（环境配置）
      - environment（环境变量）
        - transactionManager（事务管理器）
        - dataSource（数据源）
    - [databaseIdProvider（数据库厂商标识）](./https://mybatis.net.cn/configuration.html#databaseIdProvider)
    - [mappers（映射器）](./https://mybatis.net.cn/configuration.html#mappers)

### 2、属性 properties

- 这些属性可以在外部进行配置，并可以进行动态替换

- 编写 db.properties 配置文件

  ```properties
  driver=com.mysql.cj.jdbc.Driver
  url=jdbc:mysql://localhost:3306/mybatis
  username=root
  password=123456
  ```

- 在 mybatis-config.xml 文件中引入

  ```xml
  <!-- 引入 db.properties 文件 -->
  <properties resource="db.properties">
      <property name="org.apache.ibatis.parsing.PropertyParser.enable-default-value" value="true"/> <!-- 启用默认值特性 -->
  </properties>
  ```

- 通过 ${} 将 db.properties 文件中的值取出来

  ```xml
  <environments default="development">
      <environment id="development">
          <transactionManager type="JDBC"/>
          <!-- 配置数据库连接 -->
          <dataSource type="POOLED">
              <property name="driver" value="${driver}"/>
              <property name="url" value="${url}"/>
              <property name="username" value="${username}"/>
              <property name="password" value="${password}"/>
          </dataSource>
      </environment>
  </environments>
  ```

- 启用默认值之后，可以采用如下方式配置：

  ```xml
  <environments default="development">
      <environment id="development">
          <transactionManager type="JDBC"/>
          <!-- 配置数据库连接 -->
          <dataSource type="POOLED">
              <property name="driver" value="${driver:com.mysql.cj.jdbc.Driver}"/>
              <property name="url" value="${url}"/>
              <property name="username" value="${username}"/>
              <property name="password" value="${password}"/>
          </dataSource>
      </environment>
  </environments>
  ```

### 3、设置 setting

- 作用：改变 MyBatis 运行时的行为

- 常用设置

  | 设置名                   | 描述                                                         | 有效值        | 默认值 |
  | ------------------------ | ------------------------------------------------------------ | ------------- | ------ |
  | cacheEnabled             | 全局性地开启或关闭所有映射器配置文件中已配置的任何缓存。     | true \| false | true   |
  | lazyLoadingEnabled       | 延迟加载的全局开关。当开启时，所有关联对象都会延迟加载。 特定关联关系中可通过设置 `fetchType` 属性来覆盖该项的开关状态。 | true \| false | false  |
  | mapUnderscoreToCamelCase | 是否开启驼峰命名自动映射，即从经典数据库列名 A_COLUMN 映射到经典 Java 属性名 aColumn。 | true \| false | False  |

- 在核心配置文件中设置下划线转驼峰命名

  ```xml
  <settings>
      <setting name="mapUnderscoreToCamelCase" value="true"/>
  </settings>
  ```

### 4、类型别名 typeAliases

- 作用：类型别名可为 Java 类型设置一个缩写名字。 它仅用于 XML 配置，意在降低冗余的全限定类名书写

- 使用全限定类名配置

  ```xml
  <typeAliases>
  	<typeAlias type="org.taiyi.domain.Employee" alias="Employee"></typeAlias>
  </typeAliases>
  ```

- 使用包名配置

  ```xml
  <typeAliases>
      <package name="org.taiyi.domain"/>
  </typeAliases>
  ```

- 使用注解方式

  ```java
  @Alias("author")
  public class Author {
      // ...
  }
  ```

- 常见的 Java 类型内建的类型别名

  - 基本数据类型前添加下划线
  - 引用数据类型首字母小写

### 5、环境配置 environments

- 作用：可以获取多数据源，可以选用适合要求的数据源。开发、测试和生产环境需要有不同的配置；或者想在具有相同 Schema 的多个生产数据库中使用相同的 SQL 映射

- 注意：尽管可以配置多个环境，但每个 SqlSessionFactory 实例只能选择一种环境

- 案例

  ```xml
  <!-- environments -->
  <environments default="development">
      <environment id="development">
          <transactionManager type="JDBC"/>
          <!-- 配置数据库连接 -->
          <dataSource type="POOLED">
              <property name="driver" value="${driver}"/>
              <property name="url" value="${url}"/>
              <property name="username" value="${username}"/>
              <property name="password" value="${password}"/>
          </dataSource>
      </environment>
      <environment id="test">
          <transactionManager type="JDBC"></transactionManager>
          <dataSource type="POOLED">
              <property name="driver" value="${driver}"/>
              <property name="url" value="${url}"/>
              <property name="username" value="${username}"/>
              <property name="password" value="${password}"/>
          </dataSource>
      </environment>
  ```

#### 5.1 事务管理配置 transactionManager

MyBatis 中有两种类型的事务管理器：JDBC、MANAGED

- JDBC： 这个配置直接使用了 JDBC 的提交和回滚设置

- MANAGED ：这个配置几乎没做什么，它从不提交或回滚一个连接； 默认情况下它会关闭连接，通过设置关闭该功能：

  ```xml
  <transactionManager type="MANAGED">
    <property name="closeConnection" value="false"/>
  </transactionManager>
  ```

#### 5.2 数据源 dataSource

dataSource 元素使用标准的 JDBC 数据源接口来配置 JDBC 连接对象的资源

三种内建的数据源类型：

- **UNPOOLED**：不使用数据库连接池工具，每次操作数据库都需要获取连接；
- **POOLED**：使用数据库连接池；
  - `poolMaximumActiveConnections` – 在任意时间可存在的活动（正在使用）连接数量，默认值：10
  - `poolMaximumIdleConnections` – 任意时间可能存在的空闲连接数
- **JNDI** ：满足 EJB 或应用服务器这类容器中使用需求，可以调用上下文中的数据源；

### 6、映射器 mappers

- 作用：告诉 MyBatis 到哪里去找映射文件

- 配置方式

  ```xml
  <!-- 使用相对于类路径的资源引用 -->
  <mappers>
      <mapper resource="org/taiyi/mapper/EmployeeMapper.xml"/>
  </mappers>
  ```

  ```xml
  <!-- 使用映射器接口实现类的完全限定类名 -->
  <mappers>
      <mapper class="org.taiyi.mapper.EmployeeMapper"/>
  </mappers>
  ```

  ```xml
  <!-- 将包内的映射器接口实现全部注册为映射器 -->
  <mappers>
      <package name="org.taiyi.mapper"/>
  </mappers>
  ```

## 四、日志

### 1、概述

- MyBatis 通过内置的日志工厂提供日志功能，具体实现：

  - SLF4J
  - Apache Commons Logging
  - Log4j 2
  - Log4j
  - JDK logging

- 使用前添加配置

  ```xml
  <configuration>
    <settings>
      <setting name="logImpl" value="LOG4J"/>
    </settings>
  </configuration>
  ```

- 可选的值有：SLF4J、LOG4J、LOG4J2、JDK_LOGGING、COMMONS_LOGGING、STDOUT_LOGGING、NO_LOGGING

### 2、日志配置

1. 导入依赖

   ```xml
   <dependency>
       <groupId>log4j</groupId>
       <artifactId>log4j</artifactId>
       <version>1.2.17</version>
   </dependency>
   ```

2. 创建 log4j.properties

   ```properties
   # 全局日志配置
   log4j.rootLogger=ERROR, stdout
   # MyBatis 日志配置
   log4j.logger.org.taiyi.mapper.EmployeeMapper=TRACE
   # 控制台输出
   log4j.appender.stdout=org.apache.log4j.ConsoleAppender
   log4j.appender.stdout.layout=org.apache.log4j.PatternLayout
   log4j.appender.stdout.layout.ConversionPattern=%5p [%t] - %m%n
   ```

3. 设置 mybatis-config.xml

   ```xml
   <settings>
       <setting name="logImpl" value="LOG4J"/>
   </settings>
   ```

   注意：没有配置 setting 也可以生效，看源码

- 日志级别：ERROR、WARN、INFO、DEBUG

## 五、使用 MyBatis 增删改查

### 1、新增

1. 添加接口方法

   ```java
   void insert(@Param("emp") Employee emp);
   ```

2. 添加 xml 配置 SQL 语句

   ```xml
   <insert id="insert">
       insert into employee value(null,#{emp.name},#{emp.age},#{emp.address},#{emp.empDetail});
   </insert>
   ```

### 2、删除

1. 添加接口方法

   ```java
   int delete(@Param("id") Long id);
   ```

2. 添加 xml 配置 SQL 语句

   ```xml
   <delete id="delete">
       delete from employee where id = #{id}
   </delete>
   ```

### 3、修改

1. 添加接口方法

   ```java
   void update(@Param("employee") Employee employee);
   ```

2. 添加 xml 配置 SQL 语句

   ```xml
   <update id="update">
       update employee set name=#{employee.name} where id=#{employee.id}
   </update>
   ```

## 六、XML 映射器

### 1、概述

- 使用 XML 文件配置 SQL 文件，比传统 JDBC 方便简单；能够减少使用成本，让用户专注于 SQL 代码；
- XML 映射文件中的顶级元素：
  - `cache` – 该命名空间的缓存配置。
  - `cache-ref` – 引用其它命名空间的缓存配置。
  - `resultMap` – 描述如何从数据库结果集中加载对象，是最复杂也是最强大的元素。
  - `parameterMap（废弃）` – 老式风格的参数映射。此元素已被废弃，并可能在将来被移除！请使用行内参数映射。文档中不会介绍此元素。
  - `sql` – 可被其它语句引用的可重用语句块。
  - `insert` – 映射插入语句。
  - `update` – 映射更新语句。
  - `delete` – 映射删除语句。
  - `select` – 映射查询语句。

### 2、selelct

- Selelct 元素属性

  | 属性                 | 描述                                                         | 使用目的               |
  | -------------------- | ------------------------------------------------------------ | ---------------------- |
  | `id`                 | 在命名空间中唯一的标识符，可以被用来引用这条语句。           | 和Mapper中的接口名对应 |
  | `parameterType`      | 将会传入这条语句的参数的类全限定名或别名。这个属性是可选的，因为 MyBatis 可以通过类型处理器（TypeHandler）推断出具体传入语句的参数，默认值为未设置（unset）。 |                        |
  | parameterMap（废弃） | 用于引用外部 parameterMap 的属性，目前已被废弃。请使用行内参数映射和 parameterType 属性。 |                        |
  | `resultType`         | 期望从这条语句中返回结果的类全限定名或别名。 注意，如果返回的是集合，那应该设置为集合包含的类型，而不是集合本身的类型。 resultType 和 resultMap 之间只能同时使用一个。 | 返回结果集             |
  | `resultMap`          | 对外部 resultMap 的命名引用。结果映射是 MyBatis 最强大的特性，如果你对其理解透彻，许多复杂的映射问题都能迎刃而解。 resultType 和 resultMap 之间只能同时使用一个。 | 返回结果集             |
  | `flushCache`         | 将其设置为 true 后，只要语句被调用，都会导致本地缓存和二级缓存被清空，默认值：false。 |                        |
  | `useCache`           | 将其设置为 true 后，将会导致本条语句的结果被二级缓存缓存起来，默认值：对 select 元素为 true。 | 用于开启缓存           |
  | `timeout`            | 这个设置是在抛出异常之前，驱动程序等待数据库返回请求结果的秒数。默认值为未设置（unset）（依赖数据库驱动）。 |                        |
  | `fetchSize`          | 这是一个给驱动的建议值，尝试让驱动程序每次批量返回的结果行数等于这个设置值。 默认值为未设置（unset）（依赖驱动）。 |                        |
  | `statementType`      | 可选 STATEMENT，PREPARED 或 CALLABLE。这会让 MyBatis 分别使用 Statement，PreparedStatement 或 CallableStatement。 | 默认值：PREPARED       |
  | `resultSetType`      | FORWARD_ONLY，SCROLL_SENSITIVE, SCROLL_INSENSITIVE 或 DEFAULT（等价于 unset） 中的一个，默认值为 unset （依赖数据库驱动）。 |                        |
  | `databaseId`         | 如果配置了数据库厂商标识（databaseIdProvider），MyBatis 会加载所有不带 databaseId 或匹配当前 databaseId 的语句；如果带和不带的语句都有，则不带的会被忽略。 |                        |
  | `resultOrdered`      | 这个设置仅针对嵌套结果 select 语句：如果为 true，将会假设包含了嵌套结果集或是分组，当返回一个主结果行时，就不会产生对前面结果集的引用。 这就使得在获取嵌套结果集的时候不至于内存不够用。默认值：`false`。 |                        |
  | `resultSets`         | 这个设置仅适用于多结果集的情况。它将列出语句执行后返回的结果集并赋予每个结果集一个名称，多个名称之间以逗号分隔。 | 适用于多结果集         |

### 3、insert、update 和 delete

- 属性

  | 属性                   | 描述                                                         | 使用目的                            |
  | ---------------------- | ------------------------------------------------------------ | ----------------------------------- |
  | `id`                   | 在命名空间中唯一的标识符，可以被用来引用这条语句。           | 关联 mapper 中的方法和 xml 中的 SQL |
  | `parameterType`        | 将会传入这条语句的参数的类全限定名或别名。这个属性是可选的，因为 MyBatis 可以通过类型处理器（TypeHandler）推断出具体传入语句的参数，默认值为未设置（unset）。 |                                     |
  | `parameterMap`（废弃） | 用于引用外部 parameterMap 的属性，目前已被废弃。请使用行内参数映射和 parameterType 属性。 |                                     |
  | `flushCache`           | 将其设置为 true 后，只要语句被调用，都会导致本地缓存和二级缓存被清空，默认值：（对 insert、update 和 delete 语句）true。 | 默认使用                            |
  | `timeout`              | 这个设置是在抛出异常之前，驱动程序等待数据库返回请求结果的秒数。默认值为未设置（unset）（依赖数据库驱动）。 |                                     |
  | `statementType`        | 可选 STATEMENT，PREPARED 或 CALLABLE。这会让 MyBatis 分别使用 Statement，PreparedStatement 或 CallableStatement。 | 默认值：PREPARED                    |
  | `useGeneratedKeys`     | （仅适用于 insert 和 update）这会令 MyBatis 使用 JDBC 的 getGeneratedKeys 方法来取出由数据库内部生成的主键（比如：像 MySQL 和 SQL Server 这样的关系型数据库管理系统的自动递增字段），默认值：false。 | 获取数据库生成的主键 ID             |
  | `keyProperty`          | （仅适用于 insert 和 update）指定能够唯一识别对象的属性，MyBatis 会使用 getGeneratedKeys 的返回值或 insert 语句的 selectKey 子元素设置它的值，默认值：未设置（`unset`）。如果生成列不止一个，可以用逗号分隔多个属性名称。 | keyProperty="id"                    |
  | `keyColumn`            | （仅适用于 insert 和 update）设置生成键值在表中的列名，在某些数据库（像 PostgreSQL）中，当主键列不是表中的第一列的时候，是必须设置的。如果生成列不止一个，可以用逗号分隔多个属性名称。 |                                     |
  | `databaseId`           | 如果配置了数据库厂商标识（databaseIdProvider），MyBatis 会加载所有不带 databaseId 或匹配当前 databaseId 的语句；如果带和不带的语句都有，则不带的会被忽略。 |                                     |

- selectKey

  | 属性            | 描述                                                         |
  | --------------- | ------------------------------------------------------------ |
  | `keyProperty`   | `selectKey` 语句结果应该被设置到的目标属性。如果生成列不止一个，可以用逗号分隔多个属性名称。 |
  | `keyColumn`     | 返回结果集中生成列属性的列名。如果生成列不止一个，可以用逗号分隔多个属性名称。 |
  | `resultType`    | 结果的类型。通常 MyBatis 可以推断出来，但是为了更加准确，写上也不会有什么问题。MyBatis 允许将任何简单类型用作主键的类型，包括字符串。如果生成列不止一个，则可以使用包含期望属性的 Object 或 Map。 |
  | `order`         | 可以设置为 `BEFORE` 或 `AFTER`。如果设置为 `BEFORE`，那么它首先会生成主键，设置 `keyProperty` 再执行插入语句。如果设置为 `AFTER`，那么先执行插入语句，然后是 `selectKey` 中的语句 - 这和 Oracle 数据库的行为相似，在插入语句内部可能有嵌入索引调用。 |
  | `statementType` | 和前面一样，MyBatis 支持 `STATEMENT`，`PREPARED` 和 `CALLABLE` 类型的映射语句，分别代表 `Statement`, `PreparedStatement` 和 `CallableStatement` 类型。 |

### 4、sql

- 概述：可以用来定义可重用的 SQL 代码片段；

- 使用

  ```xml
  <sql id="basicSelect">
      id, name, age, address, emp_detail
  </sql>
  <select id="selectSQL" resultType="employee">
      select
      <include refid="basicSelect"></include>
      from employee t
      where t.id=#{id};
  </select>
  ```


### 5、参数

- #{}
  - 原理：使用 `#{}`参数语法时，MyBatis 会创建 `PreparedStatement`参数占位符，并通过占位符安全地设置参数（JDBC 使用 ? ）
  - 特点：安全、迅速、首选做法
- ${}
  - 原理：`${}` 会被直接替换，而 `#{value}` 会使用 `?` 预处理
  - 特点：表名拼接、更加灵活方便
- 面试：说说 MyBatis # 取参和 $ 取参的区别？
  - `${value}` 会被直接替换，而 `#{value}` 会使用 `?` 预处理
- 补充
  - 使用 @Param 底层自动转换成一个 map 来传参

### 6、结果映射

#### 6.1 ResultType 映射

1. 查询单个 Map 对象

   ```xml
   <select id="selectUsers" resultType="map">
     select id, username, hashedPassword
     from some_table
     where id = #{id}
   </select>
   ```

   ```java
   Map selectUsers(Long id);
   ```

2. 查询具体单个对象

   ```xml
   <select id="selectEmpById" resultType="org.taiyi.domain.Employee">
       select id,name,age,address,emp_detail
       from employee  where id = #{id}
   </select>
   ```

   ```java
   Employee selectEmpById(Long id);
   ```

3. 查询集合对象

   ```xml
   <select id="selectEmp" resultType="org.taiyi.domain.Employee">
       select id,name,age,address,emp_detail
       from employee
       where id = #{id}
   </select>
   ```

   ```java
   List<Employee> selectEmp(Long id);
   ```

4. 查询单个值

   ```xml
   <select id="selectCount" resultType="java.lang.Integer">
       select count(*) from employee
   </select>
   ```

   ```java
   Integer selectCount();
   ```

#### 6.2 ResultMap 映射

1. 使用 ResultType 的问题

   数据库表中字段和 Java 实体类中的字段不一致时，在映射时赋值为 null 

2. ResultMap 的使用

   - 应用场景：实体类属性和数据库列名不匹配的时候（比如，数据库采用经典命名法，java 使用驼峰命名法的时候）

     解决方式1

     ```xml
     <resultMap id="basicMap" type="cn.sycoder.domain.Employee">
         <id property="id" column="id"></id>
         <result property="empDetail" column="emp_detail"></result>
     </resultMap>
     ```

     解决方式2

     ```xml
     <settings>
         <setting name="mapUnderscoreToCamelCase" value="true"/>
     </settings>
     ```

   - id & result 属性

     | 属性       | 描述                                                         |
     | ---------- | ------------------------------------------------------------ |
     | `property` | 映射到列结果的字段或属性。如果 JavaBean 有这个名字的属性（property），会先使用该属性。否则 MyBatis 将会寻找给定名称的字段（field）。 无论是哪一种情形，你都可以使用常见的点式分隔形式进行复杂属性导航。 比如，你可以这样映射一些简单的东西：“username”，或者映射到一些复杂的东西上：“address.street.number”。 |
     | `column`   | 数据库中的列名，或者是列的别名。一般情况下，这和传递给 `resultSet.getString(columnName)` 方法的参数一样。 |
     | `javaType` | 一个 Java 类的全限定名，或一个类型别名（关于内置的类型别名，可以参考上面的表格）。 如果你映射到一个 JavaBean，MyBatis 通常可以推断类型。然而，如果你映射到的是 HashMap，那么你应该明确地指定 javaType 来保证行为与期望的相一致。 |

3. 一对多处理

   collection：可以获取多个结果集对象

   一个班级对应多个学生

   ```java
   MyClass getClassById(Long id);
   ```

   ```xml
   <resultMap id="basicMap" type="MyClass">
       <id property="id" column="id"></id>
       <result property="name" column="name"></result>
       <collection property="students" ofType="Student">
           <id property="id" column="sId"></id>
           <result property="name" column="sName"></result>
           <result property="age" column="sAge"></result>
           <result property="classId" column="class_id"></result>
       </collection>
   </resultMap>
   
   <select id="getClassById" resultMap="basicMap">
       select class.*, s.id sId, s.name sName, s.age sAge, s.class_id
       from class left join student s on class.id = s.class_id where class.id = #{id};
   </select>
   ```
   
4. 多对一处理

   association：如果类里面有其他类的关联关系，可以使用 association 

   association 属性

   | 属性       | 描述                                                         |
   | ---------- | ------------------------------------------------------------ |
   | `property` | 映射到列结果的字段或属性。如果用来匹配的 JavaBean 存在给定名字的属性，那么它将会被使用。否则 MyBatis 将会寻找给定名称的字段。 无论是哪一种情形，你都可以使用通常的点式分隔形式进行复杂属性导航。 比如，你可以这样映射一些简单的东西：“username”，或者映射到一些复杂的东西上：“address.street.number”。 |
   | `javaType` | 一个 Java 类的完全限定名，或一个类型别名（关于内置的类型别名，可以参考上面的表格）。 如果你映射到一个 JavaBean，MyBatis 通常可以推断类型。然而，如果你映射到的是 HashMap，那么你应该明确地指定 javaType 来保证行为与期望的相一致。 |

   多个学生对应一个班级

   方案1：级联方式

   ```java
   List<Student> listAllStudents ();
   ```

   ```xml
   <resultMap id="basicMap" type="Student">
       <id property="id" column="id"></id>
       <result property="name" column="name"></result>
       <result property="age" column="age"></result>
       <result property="classId" column="class_id"></result>
   
       <result property="cls.id" column="cId"></result>
       <result property="cls.name" column="cName"></result>
   </resultMap>
   
   <select id="listAllStudents" resultMap="basicMap">
       select stu.*, c.id cId, c.name cName
       from student stu left join class c on c.id = stu.class_id
   </select>
   ```

   方案2：association 方式

   ```java
   List<Student> listAllStudentsByAssociation ();
   ```

   ```xml
   <resultMap id="associationMap" type="Student">
       <id property="id" column="id"></id>
       <result property="name" column="name"></result>
       <result property="age" column="age"></result>
       <result property="classId" column="class_id"></result>
       <association property="cls" javaType="MyClass">
           <id property="id" column="cId"></id>
           <result property="name" column="cName"></result>
       </association>
   </resultMap>
   <select id="listAllStudentsByAssociation" resultMap="associationMap">
       select stu.*, c.id cId, c.name cName
       from student stu
       left join class c on c.id = stu.class_id
   </select>
   ```

#### 6.3 嵌套 select 查询

- assciation select

  ```xml
  <resultMap id="AssociationSelectMap" type="cn.sycoder.domain.Student">
      <id property="id" column="id"></id>
      <result property="name" column="name"></result>
      <result property="age" column="age"></result>
      <result property="classId" column="class_id"></result>
      <association property="cls" column="class_id"
                   select="org.taiyi.mapper.StudentMapper.getClassById"/>
  </resultMap>
  
  <select id="listAllStusByAssociationSelect" resultMap="AssociationSelectMap">
      select * from student
  </select>
  
  <select id="getClassById" resultType="cn.sycoder.domain.MyClass">
      select * from class where id = #{id}
  </select>
  ```

- collection select

  ```xml
  <resultMap id="collectionSelect" type="cn.sycoder.domain.MyClass">
      <id property="id" column="id"></id>
      <result property="name" column="name"></result>
      <!--获取学生信息信息-->
      <collection property="stus" ofType="cn.sycoder.domain.Student"
                  select="getStudentByClassId" column="id"/>
  </resultMap>
  
  <select id="getByClassId" resultMap="collectionSelect">
      select * from class where id = #{id}
  </select>
  
  <select id="getStudentByClassId" resultType="org.taiyi.domain.Student">
      select * from student where class_id = #{id}
  </select>
  ```

- 如果关联的是多个结果集使用 resultSet

  | 属性            | 描述                                                         |
  | --------------- | ------------------------------------------------------------ |
  | `column`        | 当使用多个结果集时，该属性指定结果集中用于与 `foreignColumn` 匹配的列（多个列名以逗号隔开），以识别关系中的父类型与子类型。 |
  | `foreignColumn` | 指定外键对应的列名，指定的列将与父类型中 `column` 的给出的列进行匹配。 |
  | `resultSet`     | 指定用于加载复杂类型的结果集名字。                           |

  ```xml
  <resultMap id="blogResult" type="Blog">
    <id property="id" column="id" />
    <result property="title" column="title"/>
    <association property="author" javaType="Author" resultSet="authors" column="author_id" foreignColumn="id">
      <id property="id" column="id"/>
      <result property="username" column="username"/>
      <result property="password" column="password"/>
      <result property="email" column="email"/>
      <result property="bio" column="bio"/>
    </association>
  </resultMap>
  ```

- 关联查询的总结

  - 优点：
    - 可以实现延迟加载，前提是需要配置
    - SQL 写起来更简单
  - 缺点：
    - 发起多条 SQL ，正常查询只发起一条 SQL

### 7、自动映射

- 自动映射：将列名与结果集映射

  ```xml
  <resultMap id="userResultMap" type="User">
    <result property="password" column="hashed_password"/>
  </resultMap>
  
  <select id="selectUsers" resultMap="userResultMap">
    select
      user_id             as "id",
      user_name           as "userName",
      hashed_password
    from some_table
    where id = #{id}
  </select>
  ```

- 通过全局配置将经典列名转换成驼峰命名

- 映射等级分类：

  - `NONE` - 禁用自动映射。仅对手动映射的属性进行映射。          
  - `PARTIAL` - 对除在内部定义了嵌套结果映射（也就是连接的属性）以外的属性进行映射          
  - `FULL` - 自动映射所有属性。   

### 8、缓存

#### 8.1 概述

- MyBatis 缓存：MyBatis 内置了一个强大的事务性查询缓存机制，可以非常便利的配置和定制

#### 8.2 一级缓存——会话缓存

- sqlSession 级别：使用同一个 sqlSession 查询同一 sql 时，直接从缓存数据中取，不需要操作数据库；
- 失效情况：
  - 同一 sqlSession ，但条件不同（SQL 不同）
  - 同一 sqlSession ，两条相同查询 SQL 之间执行了 **增删改** 操作
  - 手动清缓存

#### 8.3 二级缓存

- 使用之前，在 XxxMapper.xml 文件中添加 `<cache\>`

- 二级缓存：sqlSessionFactory 级别的，只要使用同一个 sqlSessionFactory 创建的 sqlSession 查询同一 sql 都可以使用缓存

- 失效情况：

  - 相关类必须实现序列化接口（原理就是把对象信息写进一个序列化文件中，通过对象流）
  - 两次查询之间添加了任何 **增删改** 操作（insert、update 和 delete 语句会刷新缓存）

- 二级缓存清除策略：

  - `LRU` – （Least Recently Used）最近最少使用：移除最长时间不被使用的对象。**默认使用方式**   
  - `FIFO` – 先进先出：按对象进入缓存的顺序来移除它们。          
  - `SOFT` – 软引用：基于垃圾回收器状态和软引用规则移除对象。          
  - `WEAK` – 弱引用：更积极地基于垃圾收集器状态和弱引用规则移除对象。

- cache 属性：

  - flushInterval:刷新间隔，单位毫秒

  - size:引用数目，默认是1024

  - readOnly:只读操作默认是 false

    - true,会给调用的地方返回相同实例，对象不能修改
    - false:可以修改，返回实例的拷贝

    ```xml
    <cache
      eviction="FIFO"
      flushInterval="60000"
      size="512"
      readOnly="true"/>
    ```

#### 8.4 缓存查询顺序

1. 先查二级缓存（范围比较大，可能会有其他会话缓存的信息）
2. 再查一级缓存
3. 查数据库

- 如果 sqlSession 关闭会把一级缓存信息缓存到二级缓存

## 七、动态 SQL

### 1、概述

- 动态 SQL：MyBatis 的特性之一，解决动态拼接 SQL 的难题，提高开发效率
- 分类：
  - if
  - choose(when,otherwise)
  - trim(where,set)
  - foreach

### 2、if

where 语句后面的条件查询，if 可以拼接多条

```java
List<Student> selectLikeName(String name);
```

```xml
<select id="selectLikeName" resultType="org.taiyi.domain.Student">
    select id, name, age from student
    where age=19
    <if test="name != null">
        and name like concat(#{name}, '%')
    </if>
</select>
```

### 3、choose、when、otherwise

- 概述：从多个条件中选择一个执行；相当于 if...else if...else

- 需求：id 不空 id查，name 不空 name 查找，class_id 不空 class_id 查找

  ```java
  List<Student> selectChoose(@Param("id") Long id, @Param("name") String name, @Param("classId") Long classId);
  ```

  ```xml
  <select id="selectChoose" resultType="org.taiyi.domain.Student">
      select id, name, age, class_id from student
      where 1=1
      <choose>
          <when test="id != null">
              and id = #{id}
          </when>
          <when test="name != null">
              and name like concat(#{name}, '%')
          </when>
          <otherwise>
              and class_id = #{classId}
          </otherwise>
      </choose>
  </select>
  ```

### 4、trim、where、set

- trim：用于去掉或者添加标签中的内容

  - prefix：可以在 trim 标签内容最前面添加指定内容

  - prefixOverrides：覆盖前缀值的设置，并且自定义前缀值

  - suffix：在 trim 标签内容最后面添加指定内容

  - suffixOverrides：去除 trim 标签内容最后面指定的内容

    ```java
    List<Student> selectTrim(@Param("age") Integer age, @Param("name") String name, @Param("classId") Long classId);
    ```

    ```xml
    <select id="selectTrim" resultType="org.taiyi.domain.Student">
        select * from student
        <trim prefix="where" prefixOverrides="and">
            <if test="name != null">
                and name = #{name}
            </if>
            <if test="age != null">
                and age = #{age}
            </if>
        </trim>
    </select>
    ```

- where

  ```java
  List<Student> selectSelect(@Param("age") Integer age, @Param("name") String name, @Param("classId") Long classId);
  ```

  ```xml
      <select id="selectSelect" resultType="org.taiyi.domain.Student">
          select * from student
          <where>
              <if test="age != null">
                  and age = #{age}
              </if>
          </where>
      </select>
  ```

- set

  ```java
  void updateSet(@Param("age") Integer age, @Param("name") String name, @Param("classId") Long classId, @Param("id") Long id);
  ```

  ```xml
  <update id="updateSet">
      update student
      <set>
          <if test="name != null">name = #{name},</if>
          <if test="age != null">age = #{age},</if>
          <if test="classId != null">class_id = #{classId},</if>
      </set>
      where id = #{id}
  </update>
  ```

### 5、foreach

- foreach：动态 SQL 的另一个常见使用场景是对集合进行遍历（尤其是在构建 IN 条件语句的时候）

- 需求：查询 id 在 [1, 2, 3] 内的记录

  ```java
  List<Student> selectForeach(@Param("ids") List<Long> ids);
  ```

  ```xml
  <select id="selectForeach" resultType="org.taiyi.domain.Student">
      select * from student
      <where>
          <foreach collection="ids" item="id" index="i" open="id in (" close=")" separator=",">
              #{id}
          </foreach>
      </where>
  </select>
  ```

  - collection：传参的数组结合
  - item：遍历拿到的每一个元素
  - index：索引
  - open：foreach 标签内容的开始符
  - close：foreach 标签内容的结束符
  - separator：分隔符

- 注意：当使用 Map 对象（或者 Map.Entry 对象的集合）时，index 是键，item 是值

### 6、script

- 要在带注解的映射器接口类中使用动态 SQL

- 使用注解操作 MyBatis

  ```java
  @Select("select * from student")
  List<Student> selectAll();
  ```

  ```java
  @Update({"<script>",
           "update student",
           "  <set>",
           "    <if test='name != null'>name=#{name},</if>",
           "    <if test='age != null'>age=#{age},</if>",
           "    <if test='classId != null'>class_id=#{classId}</if>",
           "  </set>",
           "where id=#{id}",
           "</script>"})
  void updateStudent(@Param("age") Integer age, @Param("name") String name, @Param("classId") Long classId, @Param("id") Long id);
  ```

### 7、bind

- bind 元素允许你在 OGNL 表达式以外创建一个变量，并将其绑定到当前的上下文

  ```java
  List<Student> listLike(String name);
  ```

  ```xml
  <select id="listLike" resultType="org.taiyi.domain.Student">
      <bind name="ret" value="'%' + name + '%'"/>
      select * from student
      where name like #{ret}
  </select>
  ```

## 八、MyBatis API

### 1、SqlSession 概述

- 概述：通过这个接口来执行命令，获取映射器示例和管理事务；
- SqlSession 是由 SqlSessionFactory 实例创建的。SqlSessionFactory 对象包含创建 SqlSession 实例的各种方法。而 SqlSessionFactory 本身是由 SqlSessionFactoryBuilder 创建的，它可以从 XML、注解或 Java 配置代码来创建 SqlSessionFactory。

### 2、SqlSessionFactoryBuilder 

5个 build 方法

```java
SqlSessionFactory build(InputStream inputStream)	// 常用
SqlSessionFactory build(InputStream inputStream, String environment)
SqlSessionFactory build(InputStream inputStream, Properties properties)
SqlSessionFactory build(InputStream inputStream, String env, Properties props)
SqlSessionFactory build(Configuration config)
```

### 3、SqlSessionFactory

获取方式

```java
String resource = "mybatis-config.xml";
InputStream inputStream = Resources.getResourceAsStream(resource);
SqlSessionFactoryBuilder builder = new SqlSessionFactoryBuilder();
SqlSessionFactory factory = builder.build(inputStream);
```

- 最终会将 xml 或者 properties 配置文件转换成一个 Configuration
- 最后一个 build 方法接受一个 Configuration 实例。Configuration 类包含了对一个 SqlSessionFactory 实例你可能关心的所有内容。

SqlSessionFactory 提供了 6 个方法创建 SqlSession 实例

```java
SqlSession openSession()
SqlSession openSession(boolean autoCommit)											// 开启事务自动提交
SqlSession openSession(Connection connection)
SqlSession openSession(TransactionIsolationLevel level)		 						 // 提供数据隔离级别：枚举类获取
SqlSession openSession(ExecutorType execType, TransactionIsolationLevel level)
SqlSession openSession(ExecutorType execType)						// 修改执行类型：
SqlSession openSession(ExecutorType execType, boolean autoCommit)
SqlSession openSession(ExecutorType execType, Connection connection)
Configuration getConfiguration();
```

考虑如下几点：

- **事务处理**：你希望在 session 作用域中使用事务作用域，还是使用自动提交（auto-commit）？（对很多数据库和/或 JDBC 驱动来说，等同于关闭事务支持）
- 数据库连接：你希望 MyBatis 帮你从已配置的数据源获取连接，还是使用自己提供的连接？
- 语句执行：你希望 MyBatis 复用 PreparedStatement 和/或批量更新语句（包括插入语句和删除语句）吗？

默认的 openSession() 方法没有参数，它会创建具备如下特性的 SqlSession：

- 事务作用域将会开启（也就是不自动提交）。
- 将由当前环境配置的 DataSource 实例中获取 Connection 对象。
- 事务隔离级别将会使用驱动或数据源的默认设置（MySQL 默认 REPEATABLE_READ）。
- 预处理语句不会被复用，也不会批量处理更新。

修改执行类型：

- `ExecutorType.SIMPLE`：该类型的执行器没有特别的行为。它为每个语句的执行创建一个新的预处理语句。

- `ExecutorType.REUSE`：该类型的执行器会复用预处理语句。

- `ExecutorType.BATCH`：该类型的执行器会批量执行所有更新语句，如果 SELECT 在多个更新中间执行，将在必要时将多条更新语句分隔开来，以方便理解。

  批处理需要执行：`session.flushStatements()`

### 4、SqlSession

- **语句执行方法**：这些方法被用来执行定义在 SQL 映射 XML 文件中的 SELECT、INSERT、UPDATE 和 DELETE 语句

  ```java
  <T> T selectOne(String statement, Object parameter)
  <E> List<E> selectList(String statement, Object parameter)
  <T> Cursor<T> selectCursor(String statement, Object parameter)
  <K,V> Map<K,V> selectMap(String statement, Object parameter, String mapKey)
  int insert(String statement, Object parameter)
  int update(String statement, Object parameter)
  int delete(String statement, Object parameter)
  ```

- RowBounds 

  ```java
  int offset = 100;
  int limit = 25;
  RowBounds rowBounds = new RowBounds(offset, limit);
  ```

- **立即批量更新方法**（不调用该方法，批处理不执行，只是保存在缓存中）

  ```java
  List<BatchResult> flushStatements()
  ```

- 事务控制

  ```java
  void commit()
  void commit(boolean force)
  void rollback()
  void rollback(boolean force)
  ```

- 本地缓存：Mybatis 使用到了两种缓存：

  - 本地缓存（local cache）：每当一个新 session 被创建，MyBatis 就会创建一个与之相关联的本地缓存
  - 二级缓存（second level cache）

  清空本地缓存：

  ```java
  void clearCache()
  ```

- 确保 sqlSession 被关闭

  ```java
  void close()
  ```

### 5、使用映射器

- 方法

  ```java
  <T> T getMapper(Class<T> type)
  ```

- 自定义方法执行最终都是调用 MyBatis 的方法实现

  ```java
  public interface AuthorMapper {
    // (Author) selectOne("selectAuthor",5);
    Author selectAuthor(int id);
    // (List<Author>) selectList(“selectAuthors”)
    List<Author> selectAuthors();
    // (Map<Integer,Author>) selectMap("selectAuthors", "id")
    @MapKey("id")
    Map<Integer, Author> selectAuthors();
    // insert("insertAuthor", author)
    int insertAuthor(Author author);
    // updateAuthor("updateAuthor", author)
    int updateAuthor(Author author);
    // delete("deleteAuthor",5)
    int deleteAuthor(int id);
  }
  ```

- 你可以传递多个参数给一个映射器方法。在多个参数的情况下，默认它们将会以 param 加上它们在参数列表中的位置来命名，比如：#{param1}、#{param2}等。如果你想（在有多个参数时）自定义参数的名称，那么你可以在参数上使用 @Param("paramName") 注解

- 注解

  | 注解                                 | 使用对象 | XML 等价形式                             | 描述                                                         |
  | ------------------------------------ | -------- | ---------------------------------------- | ------------------------------------------------------------ |
  | `@Results`                           | 方法     | `<resultMap>`                            | 一组结果映射，指定了对某个特定结果列，映射到某个属性或字段的方式。属性：`value`、`id`。value 属性是一个 `Result` 注解的数组。而 id 属性则是结果映射的名称。从版本 3.5.4 开始，该注解变为可重复注解。 |
  | `@Result`                            | N/A      | `<result>``<id>`                         | 在列和属性或字段之间的单个结果映射。属性：`id`、`column`、`javaType`、`jdbcType`、`typeHandler`、`one`、`many`。id 属性和 XML 元素 `<id>` 相似，它是一个布尔值，表示该属性是否用于唯一标识和比较对象。one 属性是一个关联，和 `<association>` 类似，而 many 属性则是集合关联，和 `<collection>` 类似。这样命名是为了避免产生名称冲突。 |
  | `@Insert``@Update``@Delete``@Select` | 方法     | `<insert>``<update>``<delete>``<select>` | 每个注解分别代表将会被执行的 SQL 语句。它们用字符串数组（或单个字符串）作为参数。如果传递的是字符串数组，字符串数组会被连接成单个完整的字符串，每个字符串之间加入一个空格。这有效地避免了用 Java 代码构建 SQL 语句时产生的“丢失空格”问题。当然，你也可以提前手动连接好字符串。属性：`value`，指定用来组成单个 SQL 语句的字符串数组。 |
  | `@ResultMap`                         | 方法     | N/A                                      | 这个注解为 `@Select` 或者 `@SelectProvider` 注解指定 XML 映射中 `<resultMap>` 元素的 id。这使得注解的 select 可以复用已在 XML 中定义的 ResultMap。如果标注的 select 注解中存在 `@Results` 或者 `@ConstructorArgs` 注解，这两个注解将被此注解覆盖。 |


## 九、分页查询

### 1、概述

- MyBatis 分页插件：PageHelper

### 2、开始使用

1. 引入分页插件

   ```xml
   <dependency>
       <groupId>com.github.pagehelper</groupId>
       <artifactId>pagehelper</artifactId>
       <version>5.3.2</version>
   </dependency>
   ```

2. 在 MyBatis 配置文件中配置拦截器插件

   ```xml
   <plugins>
       <!-- com.github.pagehelper为PageHelper类所在包名 -->
       <plugin interceptor="com.github.pagehelper.PageInterceptor">
           <!-- 使用下面的方式配置参数，后面会有所有的参数介绍 -->
           <property name="param1" value="value1"/>
       </plugin>
   </plugins>
   ```

   ```xml
   <!-- Spring 中的配置 -->
   <bean id="sqlSessionFactory" class="org.mybatis.spring.SqlSessionFactoryBean">
     <!-- 注意其他配置 -->
     <property name="plugins">
       <array>
         <bean class="com.github.pagehelper.PageInterceptor">
           <property name="properties">
             <!--使用下面的方式配置参数，一行配置一个 -->
             <value>
               params=value1
             </value>
           </property>
         </bean>
       </array>
     </property>
   </bean>
   ```

3. 分页插件参数介绍

   - pageNum：当前页码
   - pageSize：每页显示数量
   - list：分页后的集合数据
   - total：总记录数
   - pages：总页数
   - prePage：上一页
   - nextPage：下 一页

4. 代码中使用

   - 开启分页拦截 参数：pageNum, pageSize

     ```java
     PageHelper.startPage(1, 2);
     ```

   - 执行查询

     ```java
     List<Student> students = mapper.selectAll();
     Page page = (Page) students;	// 方式1
     PageInfo<Student> pageInfo = new PageInfo<>(students);		// 方式2
     ```

   - page 中的属性

     ```java
     private int pageNum;
     private int pageSize;
     private long total;
     private int pages;
     ```

## 十、实战 SQL 常用操作

### 1、插入时获取主键

#### 1.1 注解

```java
@Options(useGeneratedKeys = true, keyProperty = "id", keyColumn = "id")
@Insert("insert into student(id, name, age, class_id) VALUES(null, #{name}, #{age}, #{classId})")
void insert(Student student);
```

#### 1.2 XML 配置

```java
void insertXml(Student student);
```

```xml
<insert id="insertXml" useGeneratedKeys="true" keyProperty="id" keyColumn="id">
    insert into student(id, name, age, class_id) VALUES (null, #{name}, #{age}, #{classId})
</insert>
```

### 2、模糊查询

```xml
<select id="selectLikeName" resultType="org.taiyi.domain.Student">
    select id, name, age from student
    where name like concat('%', #{name}, '%')
</select>
```

### 3、批量操作

#### 3.1 批量插入

- SqlSession 开启批处理

  ```java
  try (SqlSession session = sqlSessionFactory.openSession(ExecutorType.BATCH,true)) {
      StudentMapper mapper = session.getMapper(StudentMapper.class);
      Student student = new Student();
      mapper.insert(student);
      Student student1 = new Student();
      mapper.insert(student1);
      List<BatchResult> batchResults = session.flushStatements();
  } catch (Exception e) {
      e.printStackTrace();
  }
  ```

- 使用 foreach

  ```java
  int batchInsert(@Param("students") List<Student> students);
  ```

  ```xml
  <insert id="batchInsert" useGeneratedKeys="true" keyColumn="id" keyProperty="id">
      insert into student(name, age, class_id) VALUES
      <foreach collection="students" item="student" index="i" separator=",">
          (#{student.name}, #{student.age}, #{student.classId})
      </foreach>
  </insert>
  ```

#### 3.2 批量删除

- ${ids}：SQL 注入风险

  ```java
      @Delete("delete from student where id in (${ids})")
      int deleteBatch(String ids);
  ```

- foreach

  ```xml
  <delete id="del">
      delete from student 
      <where>
          <foreach collection="ids"  item="id" index="i" open="id in(" close=")" separator=",">
              #{id}
          </foreach>
      </where>
  </delete>
  ```

#### 3.3 批量更新（了解）

- 如果是给某一堆id 修改相同属性值，可以使用 foreach

## 十一、部署上线

1、修改对应的数据库配置

2、Maven 打包方式 pom 中查看

3、使用 Maven 插件打包 package

4、上传 war 包到 Linux 服务器 到 tomcat 目录下的 webapps 文件夹下

5、重启 tomcat 服务器

