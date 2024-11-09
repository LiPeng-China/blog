## 零、Docker 安装

拉取镜像：

```shell
docker pull mongo:5.0
```

创建容器：

```shell
docker run -d -p 27017:27017 --name myMongo mongo:5
```

## 一、MongoDB 介绍

### 1、认识 NoSQL

- NoSQL 最常见的解释是 non-relational，Not Only SQL 也被跟多人接受
- NoSQL 仅仅是一个概念，泛指非关系型数据库，区别于关系型数据库，不保证关系型数据库的 ACID 特性

### 2、常见应用场景

社交场景：

- 聊天消息
- 朋友圈海量数据
- 搜索附近的人

电商场景

- 查询快递位置

金融场景：

- 查询用户征信信息
- 查询用户运营商数据

特点：

- 数据量大
- 读写操作频繁
- 价值较低的数据，对事务要求低

”三高“ 问题：

- High performance：高并发读写需求
- Huge Storge：高效率存储和访问需求
- High Scalability && High Availability：高可扩展和高可用需求

关系型数据库的问题：

- 数据量超过亿级，需要分库分表。但运维复杂，拓展不方便。

### 3、MongoDB 概述

- MongoDB 是基于分布式文件存储的数据库，是一个开源的、高性能、无模式的文档型数据库，是一个介于关系数据库和非关系数据库之间的产品，是非关系数据当中当中功能最丰富，最像关系数据库的。
- MySQL 与 MongoDB 对比
- TODO 图片
- 

### 4、MongoDB 数据模型

- MongoDB 的最小存储单位就是文档（Document）对象。文档对象对应于关系型数据库中的行
- 数据在 MongoDB 中以 BSON（Binary-JSON）文档的格式存储在磁盘上
- BSON 和 JSON 一样，支持内嵌的文档对象和数组对象，但是 BSON 有 JSON 没有的一些数据类型，如定义代码
- BSON 数据类型参考列表（不需要记）：
- TODO 图片

### 5、MongoDB 特点

TODO 扩展解释

- 高性能
- 高可用性：MongoDB提供了复制功能副本集（replica set），提供自动故障转移
- 高扩展性：MongoDB 提供了水平可扩展性，提供了分片集群功能，能实现服务能力水平扩展，实现海量数据的存储
- 丰富的查询支持：MongoDB 支持丰富的查询语言，支持读和写操作（CRUD），比如：数据聚合、文本搜索和地理空间查询
- 其它特点：无模式（动态模式）、灵活的文档模型

### 6、MongoDB 单机版安装

#### 6.1 官网下载安装包

```shell
wget https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-rhel70-6.0.12.tgz
```

#### 6.2 解压

```shell
tar -xvf mongodb-linux-x86_64-rhel70-6.0.12.tgz -C /usr/local/
```

```shell
mv mongodb-linux-x86_64-rhel70-6.0.12/ mongodb
```

#### 6.3 创建目录存放数据和日志文件

```shell
mkdir -p /usr/local/mongodb/single/data/db
```

```shell
mkdir -p /usr/local/mongodb/single/log
```

#### 6.4 创建配置文件

```shell
vim /usr/local/mongodb/single/mongod.conf
```

```properties
systemLog:
  destination: file
  path: "/usr/local/mongodb/single/log/mongod.log"
  logAppend: true
storage:
  dbPath: "/usr/local/mongodb/single/data/db"
  journal:
    enabled: true
processManagement:
  fork: true
net:
  bindIp: 192.168.81.128
  port: 27017
```

#### 6.5 下载安装 mongoDB Shell

下载

```shell
wget https://downloads.mongodb.com/compass/mongosh-2.1.1-linux-x64.tgz
```

解压

```shell
tar -xvf mongosh-2.1.1-linux-x64.tgz -C /usr/local/
```

重命名

```shell
mv mongosh-2.1.1-linux-x64/ mongosh
```

添加命令至环境变量

```shell
vim ~/.bash_profil
```

```shell
PATH=$PATH:$HOME/bin:/usr/local/mongodb/bin:/usr/local/mongosh/bin
```

```shell
source ~/.bash_profile
```

#### 6.6 启动 MongoDB 服务

```shell
mongod -f /usr/local/mongodb/single/mongod.conf
```

```shell
ps -ef | grep mongodb
```

#### 6.7 防火墙打开端口

```shell
firewall-cmd --zone=public --add-port=27017/tcp --permanent
firewall-cmd --reload
```

#### 6.8 Shell 连接 MongoDB 服务

```shell
mongosh --host=192.168.81.128 --port=27017
```

```shell
show dbs
```

```shell
exit
```

#### 6.9 Windows 下载 MongoDB Compass 压缩包解压

## 二、常用操作命令

> 官网文档学习：[MongoDB中文手册](./https://docs.mongoing.com/)

### 1、数据库基本操作

#### 1.1 查看所有数据库

```shell
show dbs
```

```shell
show databases
```

- admin：管理每个数据库用户名密码，权限相关
- config：使用分片的时候保存分片相关信息
- local：集合不会被复制，用来存储本地单台服务器的任意集合

#### 1.2 选择和创建数据库

```shell
use admin
```

> 注意：如果数据库不存在，则新建；只有插入内容之后，才会创建数据库

#### 1.3 查看正在使用的数据库

```shell
db
```

> 注意：MongoDB 默认数据库为 test，如果没有选择数据库，集合将存放在 test 数据库中

#### 1.4 删除数据库

```shell\
db.dropDatabase()
```

> 注意：用来删除已经持久化的数据库

### 2、集合操作

#### 2.1 显示创建集合

```shell
db.createCollection("student")
```

#### 2.2 查看当前数据库中的集合

```shell
show collections
```

```shell
show tables
```

#### 2.3 隐式创建集合

向一个集合中插入一个文档时，如果集合不存在，则会自动创建集合

#### 2.4 删除集合

```shell
db.student.drop()
```

### 3、文档基本 CRUD

#### 3.1 文档插入操作

- 单个文档插入

  ```shell
  db.student.insertOne({"name": "taiyi", "": 18})
  ```

- 多个文档插入

  ```shell
  db.student.insertMany([{"name":"zs", "age":20}, {"name":"ls", "age":22}])
  ```

  > 注意：
  >
  > - 如果该集合当前不存在，则插入操作将创建该集合
  > - 如果文档未指定 _id 字段，则 MongoDB 将具有 ObjectId 值的 _id 字段添加到新文档中

#### 3.2 文档查询操作

插入一些数据

```shell
db.inventory.insertMany([
   { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
   { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "A" },
   { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
   { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
   { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" }
]);
```

- 查询所有

  ```shell
  db.inventory.find( {} )
  ```

- 条件查询

  - 等值查询

    ```shell
    db.inventory.find({"item":"postcard"})
    ```

  - in 操作

    ```shell
    db.inventory.find({status:{$in:["A", "D"]}})
    ```

  - and 操作

    ```shell
    db.inventory.find({status: "A", qty: {$lt: 30}})
    ```

  - or 操作

    ```shell
    db.inventory.find({$or: [{status: "A"}, {qty: {$lt: 30}}]})
    ```

  - 同时 and 和 or

    ```shell
    db.inventory.find({status: "A", $or: [{qty: {$lt: 30}},{item: /^p/}]})
    ```

- 查询时返回指定字段

  ```shell
  db.inventory.find({item: /a/}, {_id: 0, item: 1})
  ```

#### 3.3 文档更新操作

- 全覆盖修改

  ```shell
  db.inventory.replaceOne({_id: ObjectId("659d25d4d2761d6bc8be8b81"), qty: 1})
  ```

- 局部修改

  ```shell
  db.inventory.updateOne({_id: ObjectId("659d25d4d2761d6bc8be8b82")}, {$set: {qty: 49}})
  ```

- 列值增长修改

  ```shell
  db.inventory.updateOne({_id: ObjectId("659d25d4d2761d6bc8be8b82")}, {$inc: {qty: 1}})
  ```

- 更新多个文档

  ```shell
  db.inventory.updateMany({qty: {$gt: 99}}, {$set: {"size.uom": "in", status: "p"}})
  ```

#### 3.4 文档删除操作

- 删除一个文档（条件匹配多个也只删除一个）

  ```shell
  db.inventory.deleteOne({_id: ObjectId("659d25d4d2761d6bc8be8b81")})
  ```

- 删除多个文档

  ```shell
  db.inventory.deleteMany({status: "A"})
  ```

- 删除满足条件的文档（过时）

  ```shell
  db.inventory.remove({status: "p"})
  ```

#### 3.5 文档分页操作

- 查询总条数

  ```shell
  db.inventory.countDocuments()
  ```

- 带条件查询总条数

  ```shell
  db.inventory.countDocuments({status: "A"})
  ```

- 分页查询：使用 limit 做过滤操作，skip 跳过某些条数

  ```shell
  db.inventory.find().limit(2).skip(2)
  ```

#### 3.6 文档排序操作

- 升序查询

  ```shell
  db.inventory.find().sort({qty: 1})
  ```

- 降序查询

  ```shell
  db.inventory.find().sort({qty: -1})
  ```

> 注意：
>
> skip()、limit()、sort() 三个放在一起执行时，执行顺序是 sort() -> skip() -> limit() 和命令编写顺序无关

#### 3.7 文档模糊查询

正则查询

- 以 p 开头

  ```shell
  db.inventory.find({item: /^p/})
  ```

- 包含 a

  ```shell
  db.inventory.find({item: /a/})
  ```

## 三、Index 索引

### 1、索引的概述

TODO

### 2、索引的分类

- 单字段索引
- 复合索引
- 多建索引
- 地理空间索引
- 文本索引
- Hashed 索引

> 注意：
>
> 默认的 Id 索引，在创建集合期间，MongoDB 在 _id 字段上创建唯一索引，该索引可以防止客户端插入两个具有相同值的文档。
>
> 不能将 _id 字段上的 index 删除。

### 3、索引的基本操作

- 查看索引

  ```shell
  db.inventory.getIndexes()
  ```

- 创建索引

  ```shell
  db.inventory.createIndex({qty: 1})
  ```

- 创建复合索引

  ```shell
  db.inventory.createIndex({status: 1, qty: -1})
  ```

- 删除索引

  ```shell
  db.inventory.dropIndex({qty:1})
  ```

  ```shell
  db.inventory.dropIndexes()
  ```

  > 注意：
  >
  > _id 索引不能被删除

### 4、执行计划（面试）

分析查询性能（Analyze Query Performance）通常使用执行计划（解释计划、Explain Plan）来查看查询情况，如查询耗费时间、是否给予索引查询等。

- 查看某条查询执行计划

  ```shell
  db.inventory.find({qty: {$lt: 60}}).explain()
  ```

  ```json
  winningPlan: {
      stage: 'COLLSCAN',
      filter: { qty: { '$lt': 60 } },
      direction: 'forward'
  }
  ```

- 建立索引后观察

  ```shell
  db.inventory.find({qty: {$lt: 60}}).explain()
  ```

  ```shell
  winningPlan: {
      stage: 'FETCH',
      inputStage: {
      stage: 'IXSCAN',
      keyPattern: { qty: 1 },
      indexName: 'qty_1',
      isMultiKey: false,
      multiKeyPaths: { qty: [] },
      isUnique: false,
      isSparse: false,
      isPartial: false,
      indexVersion: 2,
      direction: 'forward',
      indexBounds: { qty: [ '[-inf.0, 60)' ] }
  }
  ```

- 回表查询（面试重点）

  Covered Queries 当查询的字段和查询的投影进包含索引字段时，MongoDB 直接从索引返回结果，而不扫描任何文档或将文档带入内存。

  ```shell
  db.inventory.find({qty: {$lt: 60}}, {_id: 0, qty: 1}).explain()
  ```

  ```json
  winningPlan: {
      stage: 'PROJECTION_COVERED',	// 投影覆盖
      transformBy: { _id: 0, qty: 1 },
      inputStage: {
          stage: 'IXSCAN',
          keyPattern: { qty: 1 },
          indexName: 'qty_1',
          isMultiKey: false,
          multiKeyPaths: { qty: [] },
          isUnique: false,
          isSparse: false,
          isPartial: false,
          indexVersion: 2,
          direction: 'forward',
          indexBounds: { qty: [ '[-inf.0, 60)' ] }
      }
  }
  ```

## 四、SpringBoot 整合 MongoDB

### 1、创建 SpringBoot 项目

#### 1.1 导入相关依赖

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-mongodb</artifactId>
</dependency>
```

#### 1.2 配置文件

```yml
spring:
  data:
    mongodb:
      host: 192.168.81.128
      port: 27017
      database: articleData
      # uri: mongodb://192.168.81.128:27017/articleData
```

### 2、案例说明

模仿实现知乎文章、评论、点赞功能

### 3、功能实现

3.1 新增文章

3.2 文章点赞

3.3 文章评论

3.4 评论评论

3.5 评论点赞

3.6 查看文章的直接评论

3.7 查看评论下的评论

### 4、代码

#### 4.1 application.yml

```yml
spring:
  data:
    mongodb:
      host: 192.168.81.128
      port: 27017
      database: articleData
```

#### 4.2 domain

```java
@Data
public class Article {
    /**
     * 文章id
     */
    @Id
    private String id;
    /**
     * 文章标题
     */
    private String title;
    /**
     * 文章内容
     */
    private String content;
    /**
     * 用户昵称
     */
    private String nickName;
    /**
     * 点赞数
     */
    private Integer totalLikeCount;
    /**
     * 评论数
     */
    private Integer totalReplyCount;
    /**
     * 发布日期
     */
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date createDataTime;
}
```

```java
@Data
public class Comment {
    @Id
    private String id;
    private String content;
    private Date publishTime;
    @Indexed
    private String userId;
    private String nickName;
    private Integer likeCount;
    private Integer replyCount;
    private String parentId;    // 上一条评论ID
    private String articleId;
}
```

#### 4.3 dao

```java
public interface ArticleRepository extends MongoRepository<Article, String> {
}
```

```java
public interface CommentRepository extends MongoRepository<Comment, String> {
    Page<Comment> findByArticleId(String articleId, Pageable pageable);

    Page<Comment> findByParentId(String parentId, Pageable pageable);
}
```

#### 4.4 service

```java
public interface IArticleService {
    /**
     * 保存文章
     *
     * @param article 文章
     */
    void saveArticle(Article article);

    /**
     * 点赞+1
     *
     * @param id 文章ID
     */
    void updateArticleLikeCount(String id);

    /**
     * 文件评论+1
     *
     * @param articleId 文章ID
     */
    void updateArticleReplyCount(String articleId);
}
```

```java
@Service("articleService")
public class ArticleServiceImpl implements IArticleService {
    @Resource
    private ArticleRepository articleRepository;

    @Override
    public void saveArticle(Article article) {
        articleRepository.save(article);
    }

    @Override
    public void updateArticleLikeCount(String id) {
        Article article = articleRepository.findById(id).get();
        article.setTotalLikeCount(article.getTotalLikeCount() + 1);
        articleRepository.save(article);
    }

    @Override
    public void updateArticleReplyCount(String articleId) {
        Article article = articleRepository.findById(articleId).get();
        article.setTotalReplyCount(article.getTotalReplyCount() + 1);
        articleRepository.save(article);
    }
}
```

```java
public interface ICommentService {
    /**
     * 保存评论
     *
     * @param comment 评论
     */
    void saveComment(Comment comment);

    /**
     * 评论点赞+1
     *
     * @param commentId 评论ID
     */
    void updateCommentLikeCount(String commentId);

    /**
     * 分页查看文章下评论
     *
     * @param articleId 文章ID
     * @param pageNum   当前页（0开始）
     * @param pageSize  每页大小
     * @return 分页评论
     */
    Page<Comment> findCommentListByArticleId(String articleId, int pageNum, int pageSize);

    /**
     * 查看评论的评论
     *
     * @param parentId 上级评论ID
     * @param pageNum  当前页
     * @param pageSize 每页大小
     * @return 分页评论
     */
    Page<Comment> findCommentListByParentId(String parentId, int pageNum, int pageSize);

}
```

```java
@Service("commentService")
public class CommentServiceImpl implements ICommentService {
    @Resource
    private CommentRepository commentRepository;

    @Override
    public void saveComment(Comment comment) {
        commentRepository.save(comment);
    }

    @Override
    public void updateCommentLikeCount(String commentId) {
        Comment comment = commentRepository.findById(commentId).get();
        comment.setLikeCount(comment.getLikeCount() + 1);
        commentRepository.save(comment);
    }

    @Override
    public Page<Comment> findCommentListByArticleId(String articleId, int pageNum, int pageSize) {
        return commentRepository.findByArticleId(articleId, PageRequest.of(pageNum, pageSize));
    }

    @Override
    public Page<Comment> findCommentListByParentId(String parentId, int pageNum, int pageSize) {
        return commentRepository.findByParentId(parentId, PageRequest.of(pageNum, pageSize));
    }
}
```

#### 4.5 controller

```java
@RestController
@RequestMapping("/article")
public class ArticleController {
    @Resource
    private IArticleService articleService;

    /**
     * 添加文章
     *
     * @param article 文章参数
     * @return 是否成功
     */
    @PostMapping
    public String saveArticle(@RequestBody Article article) {
        articleService.saveArticle(article);
        return "success";
    }

    /**
     * 点赞+1
     *
     * @param articleId 文章ID
     * @return 是否成功
     */
    @PostMapping("/like")
    public String articleLikeCount(@RequestParam String articleId) {
        articleService.updateArticleLikeCount(articleId);
        return "success";
    }
}
```

```java
@RestController
@RequestMapping("/comment")
public class CommentController {

    @Resource
    private ICommentService commentService;

    @Resource
    private IArticleService articleService;

    /**
     * 添加评论
     *
     * @param comment 评论参数
     * @return 是否成功
     */
    @PostMapping
    public String saveComment(@RequestBody Comment comment) {
        commentService.saveComment(comment);
        articleService.updateArticleReplyCount(comment.getArticleId());
        return "success";
    }

    /**
     * 评论点赞+1
     *
     * @param commentId 评论ID
     * @return 是否成功
     */
    @PostMapping("/like")
    public String commentLikeCount(@RequestParam String commentId) {
        commentService.updateCommentLikeCount(commentId);
        return "success";
    }

    /**
     * 分页查看文章下评论
     *
     * @param articleId 文章ID
     * @param pageNum   当前页（从0开始）
     * @param pageSize  每页大小
     * @return 分页评论
     */
    @GetMapping
    public Page<Comment> listComment(String articleId, int pageNum, int pageSize) {
        return commentService.findCommentListByArticleId(articleId, pageNum, pageSize);
    }

    /**
     * 查看评论的评论
     *
     * @param parentId 上级评论ID
     * @param pageNum  当前页（从0开始）
     * @param pageSize 每页大小
     * @return 分页评论
     */
    @GetMapping("/son")
    public Page<Comment> listCommentSon(String parentId, int pageNum, int pageSize) {
        return commentService.findCommentListByParentId(parentId, pageNum, pageSize);
    }
}
```

## 五、副本集-Replica Sets

### 1、简介

> - MongoDB中的副本集(复制集)是一组维护相同数据集的monhead进程服务.副本集可提供冗余和高可用性，是所有生产部署的基础；
> - 副本集类似于有自动故障恢复功能的主从集群是多台机器进行同一数据的异步同步，从而使多台机器拥有同一数据的多个副本，并且当主库挂掉时在不需要用户干预的情况下自动切换其他备份服务器做主库；
> - 而且还可以利用副本服务器做只读服务器，实现读写分离，提高负载。

- 冗余和数据可用性：

  复制提供了冗余并增加了数据可用性；

  对于不同数据库服务器上的多个数据副本，复制为防止单台数据库服务器故障提供了一定程度的容错能力

- MongoDB 的复制：

  副本集是一组维护相同数据集合的 mongod 实例；

  副本集包含多个数据承载节点和一个可选的仲裁节点，在数据承载节点中，有且仅有一个成员为主节点，其他节点为从节点

### 2、副本集成员

MongoDB 的副本集是一组提供冗余和高可用性的 mongod进程，一个副本集成员有：

- 主节点
- 从节点

TODO 图

### 3、副本集的类型和角色

副本集有看两种类型三种角色：

- 两种类型：
  - 主节点（Primary）类型：数据操作的主要连接点，可读写
  - 次要节点（Secondaries）类型：数据冗余备份节点，可以读或选举
- 三种角色：
  - 主节点（Primary）：主要接受所有写操作
  - 副本成员（Replicate）：从主节点通过复制操作以维护相同的数据集，即备份数据，不可写操作，但可以读操作（需要配置）。是默认的一种从节点类型
  - 仲裁者（Arbiter）：不保留任何数据的副本，值具有投票选举作用。也可以将仲裁服务器维护为副本集的一部分，即副本成员同时也可以是仲裁者，也是一种从节点类型

TODO 图

### 4、副本集的搭建

准备三个 MongoDB 实例：

- 主节点：27017
- 从节点：27018
- 仲裁节点：27019

#### 4.1 创建主节点

- 创建存放数据和日志目录文件

  ```shell
  mkdir -p /usr/local/mongodb/replica_sets/27017/log
  mkdir -p /usr/local/mongodb/replica_sets/27017/data/db
  ```

- 新建配置文件 mongod.conf

  ```shell
  vim /usr/local/mongodb/replica_sets/27017/mongod.conf
  ```

  ```yaml
  systemLog:
    destination: file
    path: "/usr/local/mongodb/replica_sets/27017/log/mongod.log"
    logAppend: true
  storage:
    dbPath: "/usr/local/mongodb/replica_sets/27017/data/db"
    journal:
      enabled: true
  processManagement:
    fork: true
    pidFilePath: "/usr/local/mongodb/replica_sets/27017/log/mongod.pid"
  net:
    bindIp: 192.168.81.128
    port: 27017
  replication:
    replSetName: mongo_rs
  ```

- 启动节点服务

  ```shell
  /usr/local/mongodb/bin/mongod -f /usr/local/mongodb/replica_sets/27017/mongod.conf
  ```

#### 4.2 创建副本节点

- 创建存放数据和日志目录文件

  ```shell
  mkdir -p /usr/local/mongodb/replica_sets/27018/log
  mkdir -p /usr/local/mongodb/replica_sets/27018/data/db
  ```

- 新建配置文件 mongod.conf

  ```shell
  vim /usr/local/mongodb/replica_sets/27018/mongod.conf
  ```

  ```yaml
  systemLog:
    destination: file
    path: "/usr/local/mongodb/replica_sets/27018/log/mongod.log"
    logAppend: true
  storage:
    dbPath: "/usr/local/mongodb/replica_sets/27018/data/db"
    journal:
      enabled: true
  processManagement:
    fork: true
    pidFilePath: "/usr/local/mongodb/replica_sets/27018/log/mongod.pid"
  net:
    bindIp: 192.168.81.128
    port: 27017
  replication:
    replSetName: mongo_rs
  ```

- 启动节点服务

  ```shell
  /usr/local/mongodb/bin/mongod -f /usr/local/mongodb/replica_sets/27018/mongod.conf
  ```

#### 4.3 创建仲裁节点

- 创建存放数据和日志目录文件

  ```shell
  mkdir -p /usr/local/mongodb/replica_sets/27019/log
  mkdir -p /usr/local/mongodb/replica_sets/27019/data/db
  ```

- 新建配置文件 mongod.conf

  ```shell
  vim /usr/local/mongodb/replica_sets/27019/mongod.conf
  ```

  ```yaml
  systemLog:
    destination: file
    path: "/usr/local/mongodb/replica_sets/27019/log/mongod.log"
    logAppend: true
  storage:
    dbPath: "/usr/local/mongodb/replica_sets/27019/data/db"
    journal:
      enabled: true
  processManagement:
    fork: true
    pidFilePath: "/usr/local/mongodb/replica_sets/27019/log/mongod.pid"
  net:
    bindIp: 192.168.81.128
    port: 27017
  replication:
    replSetName: mongo_rs
  ```

- 启动节点服务

  ```shell
  /usr/local/mongodb/bin/mongod -f /usr/local/mongodb/replica_sets/27019/mongod.conf
  ```

#### 4.4 初始化主节点和副本集

- mongosh 连接上主节点

  ```shell
  /usr/local/mongosh/bin/mongosh --host=192.168.222.135 --port 27017
  ```

- 先做副本集初始化（否则很多命令不能用）默认的初始化方式

  ```shell
  rs.initiate()
  ```

#### 4.5 查看副本集的配置内容

```shell
rs.conf(configuration)
rs.conf()
```

TODO：内容

- 配置说明
  - _id:'mongo_rs'：副本集的配置数据存储的主键值，默认就是副本集的名字
  - members：副本集成员数组
    - arbiterOnly:false：该成员不是仲裁节点
    - priority:1 优先级（权重值）
  - settings：副本集参数配置
- rs.conf() 副本集配置的查看命令，本质上是查看 system.replset 表中的数据
- TODO 查看表中数据

#### 4.6 查看副本集的状态

从副本集的其他成员发送的心跳包中获得的数据反映副本集的状态

```shell
rs.status()
```

TODO 内容

- set:'mongo_rs'：副本集名称
- myState:1：状态正常
- members：副本集成员数组
  - name:'192.168.222.135:27017'：成员只有一个
  - health:1：健康节点
  - stateStr:'PRIMARY'：角色

#### 4.7 添加副本从节点

- 从主节点添加从节点，将其他成员加入到副本集（将 27018 添加为从节点）

  ```shell
  # rs.add(host,arbiterOnly)
  rs.add("192.168.222.135:27018")
  ```

  TODO 内容

- 
