### 1、安装依赖

```shell
sudo apt update
```

```shell
sudo apt install curl apt-transport-https ca-certificates software-properties-common
```

### 2、下载 Docker GPG 密钥

```shell
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```

### 3、将 Docker APT 存储库添加到您的系统中

```shell
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

### 4、更新本地软件包索引，以通知系统新添加的存储库

```shell
sudo apt update
```

### 5、安装 Docker 社区版

```shell
sudo apt install docker-ce -y
```

### 6、验证

```shell
docker -v
```

### 7、移除 Docker 软件源

```shell
sudo mv /etc/apt/sources.list.d/docker.list /etc/apt/sources.list.d/docker.list.bak
```

