## 一、配置信息

1、显示当前的配置信息

```shell
git config --list
```

2、设置提交代码的用户信息

```shell
git config --global user.name "taiyi"
git config --global user.email your_email@taiyi.com
```

## 二、生成秘钥

1、生成 SSH Key

```shell
ssh-keygen -t rsa -C "your_email@taiyi.com"
```

2、将生成的公钥 `id_rsa.pub` ，配置在 `github` 账号上

3、验证是否成功

```shell
ssh -T git@github.com
```

4、在 `Github` 上新建仓库

## 三、初始化

1、添加 README

```shell
 echo "# Note" >> README.md
```

2、git 初始化

```shell
git init
```

3、添加文件

```shell
git add .
```

4、提交

```shell
git commit -m "初始化"
```

## 四、添加远程仓库

1、添加远程仓库地址

```shell
git remote add origin git@github.com:LiPeng-China/notes.git
```

2、查看远程仓库

```shell
git remote -v
```

3、删除远程仓库

```shell
git remote rm origin
```

## 五、查看分支

1、查看当前项目分支

```shell
git branch -v
```

2、拉取新的分支

```shell
git branch branch_new_name
```

3、切换到新的分支

```shell
git checkout branch_new_name
```

4、拉取新的分支并切换 `-b`

```shell
git branch -b branch_new_name
```

5、删除分支

```shell
git branch -d branch_name
```

6、合并到主分支

```shell
git merge branch_new_name
```

## 六、提交远程仓库

1、提交到远程仓库

```shell
git push -u origin master
```

