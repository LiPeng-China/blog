## 临时挂载

1、查看可用磁盘和分区

```shell
lsblk
```

2、查看磁盘详细信息

```shell
sudo fdosk -l
```

3、创建要挂载的磁盘目录

```shell
sudo mkdir /mnt/mydisk
```

4、将磁盘挂载到目录

```shell
sudo mount /dev/sdb1 /mnt/mydisk
```

## 系统启动自动挂载

```shell
# 在 /etc/fstab 文件中添加如下信息
/dev/sdb1	/mnt/mydisk	ext4	defaults	0	0
```



