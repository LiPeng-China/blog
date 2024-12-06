## Git 更换默认主分支

修改 Ubuntu 默认的 git 主分支为 main

```shell
git config --global init.defaultBranch main
```

## 安装 miniconda

1、下载安装脚本

```shell
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
```

2、执行脚本

```shell
sh Miniconda3-latest-Linux-x86_64.sh
```

3、激活环境

```shell
eval "$(/home/taiyi/Programs/miniconda3/bin/conda shell.bash hook)"
```

全局使用

```shell
conda init
```

4、验证

```shell
conda list
```

## 