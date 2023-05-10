## cat：查看

1、查看文件内容

```shell
cat file_path
```

2、查看多个文件内容

```shell
cat file_path01 file_path02
```

3、显示文件内容并显示行号

```shell
cat -n file_path
```

4、创建文件并且写入内容

```shell
cat > file_path
```

运行时，该命令要求在终端上输入信息，完成后，按 `Ctrl + d` 终止并保存

5、文件件内容复制

```shell
# > 覆盖
cat source_file_path > target_file_path

# 追加
cat source_file_path > target_file_path
```

6、突出行尾

```shell
cat -E file_path
```

每行的行尾追加 `$` 符来区分

7、去除重复空行

```shell
cat -s file_path
```

8、仅在非空行上显示行号

```shell
cat -b -T file_path
```

