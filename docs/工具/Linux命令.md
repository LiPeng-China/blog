## 一、磁盘挂载 `mount`

### 1、查看 U盘 所在分区

```shell
sudo fdisk -lu
```

### 2、创建挂载目录

```shell
sudo mkdir /mnt/usb
```

### 3、将 U盘 挂在至目录

```shell
sudo mount /dev/sdc1 /mnt/usb/
```

### 4、卸载

```shell
sudo umount /mnt/usb
```

## 二、进度条 `progress`

### 1、安装

```shell
sudo apt install progress
```

### 2、查看支持的命令

```shell
progress
```

### 3、查看进度

```shell
progress -M -w
```

### 4、指定命令

```shell
progress -M -c ffmpeg
```

### 5、指定进程

```shell
progress -M -p 进程号
```

### 6、组合使用

```shell
cp bigfile newfile & progress -mp $!
```

```shell
tar czf images.tar.gz linuxmint-18-cinnamon-64bit.iso CentOS-7.0-1406-x86_64-DVD.iso CubLinux-1.0RC-amd64.iso | progress  -m  $!
```

