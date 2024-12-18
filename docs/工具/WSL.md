## 一、换源

### 1、备份

```shell
sudo cp /etc/apt/sources.list.d/ubuntu.sources  /etc/apt/sources.list.d/ubuntu.sources.bak
```

### 2、打开 ubuntu.source

```shell
sudo vim /etc/apt/sources.list.d/ubuntu.sources
```

### 3、更新内容

```shell
# 阿里云
Types: deb
URIs: http://mirrors.aliyun.com/ubuntu/
Suites: noble noble-updates noble-security
Components: main restricted universe multiverse
Signed-By: /usr/share/keyrings/ubuntu-archive-keyring.gpg

# 清华
Types: deb
URIs: http://mirrors.tuna.tsinghua.edu.cn/ubuntu/
Suites: noble noble-updates noble-security
Components: main restricted universe multiverse
Signed-By: /usr/share/keyrings/ubuntu-archive-keyring.gpg

# 中科大
Types: deb
URIs: http://mirrors.ustc.edu.cn/ubuntu/
Suites: noble noble-updates noble-security
Components: main restricted universe multiverse
Signed-By: /usr/share/keyrings/ubuntu-archive-keyring.gpg

# 网易 163
Types: deb
URIs: http://mirrors.163.com/ubuntu/
Suites: noble noble-updates noble-security
Components: main restricted universe multiverse
Signed-By: /usr/share/keyrings/ubuntu-archive-keyring.gpg
```

### 4、更新

```shell
sudo apt update
sudo apt upgrade
```

## 二、移除 Snap

### 1、查看 snap 已安装的软件包

```shell
snap list
```

### 2、移除软件

```shell
snap remove --purge snap-store
snap remove --purge gtk-common-theme
snap remove --purge gnome-42-2204
snap remove --purge bare
snap remove --purge core22
snap remove --purge thunderbird
snap remove --purge snapd
```

### 3、锁住 snap 包

```shell
sudo gedit /etc/apt/preferences.d/nosnap.pref
```

```shell
# To prevent repository packages from triggering the installation of snap,
# this file forbids snapd from being installed by APT.

Package: snapd
Pin: release a=*
Pin-Priority: -10
```

### 4、apt 移除 snapd

```shell
sudo apt remove --autoremove snapd
```

### 5、删除 snap 文件

```shell
sudo rm -rf ~/snap /snap /var/snap /var/cache/snapd /var/lib/snapd
```

## 三、安装 Nala

### 1、更新

```shell
sudo apt update & sudo apt upgrade
```

### 2、安装 nala

```shell
sudo apt install nala
```

### 3、更新源

```shell
sudo nala fetch
```

### 4、更新软件

```shell
sudo nala update
sudo nala upgrade
```

## 四、安装 Gnome 桌面

### 1、前提条件

```shell
sudo apt update & sudo apt upgrade
sudo apt purge -y acpid acpi-support modemmanager
sudo apt-mark hold acpid acpi-support modemmanager
```

不执行该命令的会在步骤3报错：

```shell
Setting up acpi-support (0.144) ...
Failed to restart acpid.service: Transport endpoint is not connected
See system logs and 'systemctl status acpid.service' for details.
Failed to get properties: Transport endpoint is not connected
```

### 2、安装桌面

```shell
sudo apt install -y ubuntu-desktop
```

## 五、安装 Xrdp

### 1、安装 xrdp

```shell
sudo apt install -y xrdp
```

### 2、查看服务状态

```shell
sudo systemctl status xrdp
```

### 3、添加 xrdp 用户 至 ssl-cert 组

```shell
sudo adduser xrdp ssl-cert
```

### 4、重启 xrdp 服务

```shell
sudo systemctl restart xrdp
```

### 5、查看服务状态

```shell
sudo systemctl status xrdp
```

### 6、查看匹配文件中的端口：3389

```shell
vim /etc/xrdp/xrdp.ini
```

### 7、配置防火墙

```shell
sudo ufw allow 3389
```

### 8、配置 xrdp 服务开机自启动

```shell
sudo systemctl enable xrdp
```

## 六、VcXsrv 桌面连接

### 1、下载安装 VcXsrv

### 2、打开 Launch

- One large window、-1
- Disable access control

### 3、添加配置文件

```shell
vim ~/.bashrc
```

```shell
# VcXsrv 连接配置
export DISPLAY=$(grep -m 1 nameserver /etc/resolv.conf | awk '{print $2}'):0
export WAYLAND_DISPLAY=$DISPLAY
export XDG_SESSION_TYPE=x11
```

```shell
source ~/.bashrc
```

### 4、UIbuntu 中测试连通

```shell
xeyes
```

### 5、启动 Gnome 会话

> 注意：下面的命令如果使用 sudo 执行会报错！

```shell
gnome-session
```

## 七、安装 Rust 环境

### 1、下载

```shell
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

### 2、重启

```shell
sudo reboot
```

### 3、查看版本

```shell
rustc -Vv
```

```shell
cargo --version
```

## 八、WSL 命令

### 1、更换默认发新版

```shell
wsl --set-default Ubuntu-24.04
```

### 2、删除发行版

```shell
 wsl --unregister Ubuntu-22.04
```

## 
