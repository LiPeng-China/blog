1、官网下载

```shell
# https://maven.apache.org/download.cgi
wget https://dlcdn.apache.org/maven/maven-3/3.9.1/binaries/apache-maven-3.9.1-bin.tar.gz
```

2、解压文件

```shell
sudo tar -zxvf apache-maven-3.9.1-bin.tar.gz -C /usr/local/maven/
```

3、配置 Maven环境变量

```shell
# vim /etc/profile

export MAVEN_HOME=/usr/local/maven/apache-maven-3.9.1
export CLASSPATH=${MAVEN_HOME}/lib:$CLASSPATH
export PATH=${MAVEN_HOME}/bin:$PATH
```

4、配置文件生效

```shell
source /etc/profile
```

5、查看版本

```shell
mvn -v
```

