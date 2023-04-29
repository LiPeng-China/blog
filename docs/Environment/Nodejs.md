**1、ubuntu 上安装 Nodejs 环境**

```shell
sudo apt purge nodejs
sudo apt autoremove 
sudo apt update
sudo apt install -y curl
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install nodejs build-essential -y
```

**2、查看 Nodejs 版本**

```shell
node --version
# node -v
```

 **3、安装包管理工具**

```shell

# yarn 推荐
sudo corepack enable yarn
yarn --version

# npm
sudo corepack enable npm
npm --version

export NODE_OPTIONS=--openssl-legacy-provider
```

