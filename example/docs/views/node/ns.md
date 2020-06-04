---
title: npm install失败的处理方法汇总
date: 2020-06-03 21:00:00
tags:
 - node.js
categories:
 - node.js
---


### 一、权限问题
使用管理员身份运行cmd，不要使用idea的Terminal或者power shell<br>
### 二、问题缓存

提示：

```
npm ERR! Remove the existing file and try again, or run npm
npm ERR! with --force to overwrite files recklessly.
```

**清理缓存**：<br>

```
npm cache clean --force
```

**删除依赖**：<br>
删除node modules中的全部文件<br>

### 三、npm 镜像问题

国内网络环境问题：<br>

**原npm地址**：

```
npm config set registry http://registry.npmjs.org
```

**查看当前地址：**

```
npm config ls
```

**配置成淘宝的：**

```
npm config set registry https://registry.npm.taobao.org
```

**使用cnpm**(cnpm：是一个完整 npmjs.org 镜像，可以用此代替官方版本(只读)，同步频率目前为 10分钟 一次以保证尽量与官方服务同步。):

```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

**查看版本**

```
npm -v
cnpm -v

```








&nbsp;&nbsp;&nbsp;&nbsp; 本人授权[维权骑士](http://rightknights.com)对我发布文章的版权行为进行追究与维权。未经本人许可，不可擅自转载或用于其他商业用途。


