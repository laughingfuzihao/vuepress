---
title: 二、Docker基本使用
date: 2020-06-11 09:00:00
tags:
 - Docker
categories:
 - Docker
---
::: tip 介绍
我们主要学习使用docker的常用命令
:::

## 一、Docker 常用命令

```
docker version 

docker info

docker help 
```

## 镜像：

### 查看镜像
```
#镜像命令：

docker images  # 查看镜像

  -a, --all             Show all images (default hides intermediate images)
      --digests         Show digests
  -f, --filter filter   Filter output based on conditions provided
      --format string   Pretty-print images using a Go template
      --no-trunc        Don't truncate output
  -q, --quiet           Only show numeric IDs

```
### 搜索镜像
```
# 搜索 镜像
docker search tomcat
```
### 下载镜像
```
#下载 镜像
docker pull tomcat   #最新版本
docker pull tomcat:tag
```
### 删除镜像
```
#删除镜像
docker rmi -rf id或name
docker image rm -f bf756fb1ae65
```

## 容器：

### 查看容器

```
#查看容器
docker ps    #运行的容器
docker ps -a #所有容器
docker ps -a -n=1 #最近一个容器
```
### 进入容器
```
#进入容器
docker exec -it b051b96efffa /bin/bash
Ctrl+P+Q 退出容器
```

### 退出容器
```
#退出容器
exit #停止退出
ctrl + p + q #退出不停止
```
### 删除容器
```
#删除
docker rm -f id 删除容器  #你可以先stop再删除
#删除所有的容器
docker rm -f  $(docker ps -aq)
```
### 运行容器
```
#运行容器
docker run
			# 参数
            --name=“Name”  #容器名字
            -d             #后台运行
            -it			   #进入容器内部
            -p             #指定端口


docker run -d id  #后台运行  nginx不能这样 不会启动
docker run -it id #进入运行
docker run -d --name mytomcat -p 8081:8080 tomcat:7
```
### 启动容器
```
#启动容器
docker start   id
docker restart   id
```
### 停止容器
```
#停止容器
docker stop   id
docker kill   id
```
### 日志命令
```
#日志命令
docker logs -tf --tail 100 38f77d36f9f4
#查看容器进程
docker top  38f77d36f9f4
#查看容器元数据信息
docker inspect   38f77d36f9f4
```
### 拷贝文件
```
#cp 拷贝文件
#拷贝需要在容器外
cp进去
docker cp /app.war  38f77d36f9f4:/webapps
#cp出来
docker cp 38f77d36f9f4:/home/test.java test.java
```


&nbsp;&nbsp;&nbsp;&nbsp; 本人授权[维权骑士](http://rightknights.com)对我发布文章的版权行为进行追究与维权。未经本人许可，不可擅自转载或用于其他商业用途。


