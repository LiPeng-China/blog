## 一、安装 SDK

### 1、安装

```shell
curl -s "https://get.sdkman.io" | bash
```

### 2、修改环境变量

```shell
source "$HOME/.sdkman/bin/sdkman-init.sh"
```

### 3、验证

```shell
sdk version
```

## 二、安装 JDK

### 1、查看 Java 版本

```shell
sdk list java
```

### 2、安装 JDK8

```shell
sdk install java 8.0.422-albba
```

### 3、指定默认版本

```shell
sdk default java 8.0.422-albba
```

### 4、卸载 JDK

```shell
sdk uninstall java 8.0.422-albba
```

### 5、查看当前 JDK

```shell
sdk current java
```

### 6、切换 JDK 版本

```shell
sdk use java 8.0.422-albba
```

