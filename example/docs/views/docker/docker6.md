---
title: 五、Docker容器数据卷挂载
date: 2020-06-11 12:00:00
tags:
 - Docker
categories:
 - Docker
---

## 一、容器数据卷

我把镜像直接rm之后，数据就直接清除了。现在用docker 装了mysql的镜像，我把这个镜像删了，mysql的数据就没有了，现在将数据持久化。<br>

**将Docker容器中的数据同步到本地，挂载出来。**<br>

　docker 容器数据卷是容器在运行过程中持久化数据的一种方式，卷是目录或文件，存在于一个或多个容器中，由docker 挂载到容器，但不属于联合文件系统，因此能够绕过Union File System 提供一些用于持续存储或共享数据的特性；卷的设计目的就是数据持久化，完全独立于容器的生命周期，因此docker不会在容器删除时，删除其挂载的数据卷。<br>

　　特点：<br>

1. **数据卷可在容器之间共享或重用数据。**<br>
2. 卷中的更改可以直接生效。<br>
3. 数据卷中的更改，不会包含在镜像中的更新。<br>
4. 数据卷的生命周期一直持续到没有容器使用它为止。<br>



## 二、容器数据卷挂载<br>

```text
docker run -d --name mytomcat -v /home/webapps:/webapps -p 8030:8030 tomcat-laughing-1.0.1

docker run -d -p 8030:8030 --name laughingcat -v /usr/local/dev/docker-tomcat:/usr/local/tomcat/webapps --restart=always tomcat-laughing-1.0.1



-d 后台运行
-v 我把tomcat容器里面的webapps文件挂载到本地/home/webapps目录下
```



**docker inspect 看一下**：<br>



![logo](./10.jpg)



**挂载成功！**<br>

只需要在本地目录 /usr/local/dev/docker-tomcat打war包上去，就会挂载到容器内的webapps里，完成部署；<br>

**且这个是双向绑定的！**<br>



## 三、具名挂载和匿名挂载

```
-v 容器内路径  #匿名

-v 卷名:容器内路径 #具名

-v /宿主路径:/容器内路径 #指定路径
```

**匿名挂载：**<br>

```
-v  省略外部路径


#查看卷

docker volume ls

DRIVER              VOLUME NAME
local               5b8b83422ccdd778bfdb40402d24dc2b5a196fa6248dbc746375cc230f861558
local               1619750e070296910dfb00e7098c2b9b2ea3544a4079a8a0a138d22aefd3efa2
```

**具名挂载：**<br>

```

-v      name:/xxx/xxx:/yyy/yyy/

docker volume inspect	 id或name
```

**docker 工作目录：**<br>

```
/var/lib/docker

cd volumes/     #卷目录
```





&nbsp;&nbsp;&nbsp;&nbsp; 本人授权[维权骑士](http://rightknights.com)对我发布文章的版权行为进行追究与维权。未经本人许可，不可擅自转载或用于其他商业用途。


