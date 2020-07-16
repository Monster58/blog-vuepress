---
title: Nginx
lang: zh-CN
---
## Nginx
| 参考 ：https://www.jianshu.com/p/994ba10057cf
### 安装nginx
1. 首先进入/usr/local目录（你也可以找到你自己的软件安装目录，比如我都是放在/opt/soft下的）
```shell
$ cd /usr/local
```
2. 从官网下载最新版的nginx
```shell
$ wget http://nginx.org/download/nginx-1.7.4.tar.gz
```
3. 解压nginx压缩包
```shell
$ tar -zxvf nginx-1.7.4.tar.gz
```
4. 会产生一个nginx-1.7.4 目录，这时进入nginx-1.7.4目录
```shell
$ cd  nginx-1.7.4
```
5. 接下来安装，使用--prefix参数指定nginx安装的目录,make、make install安装
```shell
$ ./configure  （$默认安装在/usr/local/nginx）
$  make  
$  make install
```
6. 如果没有报错，顺利完成后，最好看一下nginx的安装目录
```shell
$ whereis nginx
```
### 启动nginx
1. 进入nginx目录
```shell
$ cd /usr/local/nginx/sbin/
```
2. 启动 nginx
```shell
$ ./nginx
```
3. 停止 nginx(此方式相当于先查出nginx进程id再使用kill命令强制杀掉进程)
```shell
$ ./nginx -s stop
```
4. 停止 nginx(此方式停止步骤是待nginx进程处理任务完毕进行停止)
```shell
$ ./nginx -s quit
```
4. 停止 nginx(此方式停止步骤是待nginx进程处理任务完毕进行停止)
```shell
$ ./nginx -s quit
```
5. 从新加载配置文件(修改配置文件 nginx.conf 可以使用该命令使配置生效)
```shell
$ ./nginx -s reload
```
6. 查询 nginx 进程
```shell
$ ps aux | grep nginx
```