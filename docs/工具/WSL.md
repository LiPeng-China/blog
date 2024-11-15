## 一、安装 Nala

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

## 二、安装 Gnome 桌面

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

## 三、安装 Xrdp

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

