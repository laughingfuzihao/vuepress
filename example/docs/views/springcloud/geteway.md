---
title: 十、Gateway网关
date: 2020-07-03 11:00:00
tags:
 - Spring Cloud
categories:
 - Spring Cloud
---
::: tip  Spring Cloud Gateway
 Spring Cloud Gateway 是 Spring Cloud 新推出的网关框架， Netflix出的网关是 Zuul，Gateway 是Zuul 1.x的替代方案。

Spring cloud gateway是spring官方基于Spring 5.0、Spring Boot2.0和Project Reactor等技术开发的网关，Spring Cloud Gateway旨在为微服务架构提供简单、有效和统一的API路由管理方式，Spring Cloud Gateway作为Spring Cloud生态系统中的网关，目标是替代Netflix Zuul，其不仅提供统一的路由方式，并且还基于Filer链的方式提供了网关基本的功能，例如：安全、监控/埋点、限流等。
Spring cloud gateway是居于WebFlux框架实现的，底层netty实现。

:::

## 一、Gateway的特性

动态路由

支持断言和过滤器

建立在spring framework 5、spring boot 2.0

使用非阻塞的API

支持websocket

底层使用非阻塞异步Wbeflux

## 二、基本概念

### 路由Route

网关转发匹配

### 断言Predicate

匹配HTTP的请求头和参数，如果请求与断言匹配则进行路由

### 过滤filter

Gateway的过滤器实例

客户端向spring cloud Gateway发送请求，在Gateway Handler Mapping 中匹配路由再发给Gateway web Handler 

## 三、Gateway网关搭建

之前有两个provider的服务，provider1的端口是8001，现在不暴露8001，从gateway的9527提供服务

### 1、pom

```
    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-actuator</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-gateway</artifactId>
        </dependency>
    </dependencies>
```

### 2、yml


























&nbsp;&nbsp;&nbsp;&nbsp; 本人授权[维权骑士](http://rightknights.com)对我发布文章的版权行为进行追究与维权。未经本人许可，不可擅自转载或用于其他商业用途。


