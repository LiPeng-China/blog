## 一、IDEA 新建项目，重新管理文件

### 1、生成 gitignore 文件
新建项目之后，删除原有的 gitignore 文件，重新生成一份新的。

### 2、删除 git 缓存

```shell
git rm -r -f --cached .
```

### 3、进行版本管理

```shell
git add . 
```

