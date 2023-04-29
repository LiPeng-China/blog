### 1、使用 `root` 用户安装

```shell
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

### 2、将普通用户添加到 `docker` 组

```shell
 #将普通用户username加入到docker组
sudo gpasswd -a username docker

#更新docker组
newgrp docker
```

### 3、验证

```shell
sudo docker run hello-world

# 或者查看 docker 版本
docker --version
```

