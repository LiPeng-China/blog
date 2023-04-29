## 一、卸载

1.1、检查安装了哪个 `JDK` 包

```shell
dpkg --list | grep -i jdk
```

1.2、移除 `jdk` 包

```shell
sudo apt-get purge openjdk*
```

1.3、卸载 `jdk` 相关包

```shell
sudo apt-get purge icedtea-* openjdk-*
```

1.4、检查所有 `JDK` 包是否都已卸载完毕

```shell
dpkg --list | grep -i jdk
```

## 二、安装

2.1、官网下载 jdk

2.2、解压到指定目录

```shell
sudo tar -zxvf jdk-8u361-linux-x64.tar.gz -C /usr/local/java
```

2.3、配置环境变量

```shell
# /etc/profile

export JAVA_HOME=/usr/local/java/jdk1.8.0_361
export JRE_HOME=${JAVA_HOME}/jre  
export CLASSPATH=.:${JAVA_HOME}/lib:${JRE_HOME}/lib  
export PATH=${JAVA_HOME}/bin:$PATH
```

2.4、初始化 profile 文件

```shell
source /etc/profile
```

2.5、查看版本

```shell
java -version
```

