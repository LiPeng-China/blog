## Rust 编译报错

1、报错

```shell
   Compiling ch-01 v0.1.0 (/home/taiyi/Code/rust/ch-01)
error: linker `cc` not found
  |
  = note: No such file or directory (os error 2)

error: could not compile `ch-01` (bin "ch-01") due to 1 previous error
```

2、分析原因

缺少 gcc 编译器和其他必要的编译工具

3、解决

```shell
sudo apt update
```

```shell
sudo apt install build-essential
```



