---
title: 一、第一个Spring Boot
date: 2020-02-15 06:00:00
tags:
 - Spring Boot
categories:
 - Spring Boot
---


   * 1、**Spring Boot构建**<br>&nbsp;&nbsp;&nbsp;&nbsp;

&nbsp;&nbsp;&nbsp;&nbsp;Spring Boot官网：[https://spring.io/projects/spring-boot](https://spring.io/projects/spring-boot)<br>
&nbsp;&nbsp;&nbsp;&nbsp;idea可用构建器快速构建<br>
![2](./2.png) 


   * 2、**入口类**<br>&nbsp;&nbsp;&nbsp;&nbsp;
  
    package com.laughing.laughingdemo;
    
    import org.springframework.boot.SpringApplication;
    import org.springframework.boot.autoconfigure.SpringBootApplication;
    
    @SpringBootApplication
    public class LaughingDemoApplication {
    
        public static void main(String[] args) {
            SpringApplication.run(LaughingDemoApplication.class, args);
        }
    
    }
   
   * 3、**常用配置**<br>&nbsp;&nbsp;&nbsp;&nbsp;
  
    #端口，项目上下文根
    server:
      port: 8080
      servlet:
        context-path: /hotel
        
     
    spring:
      datasource:
        driver-class-name: com.mysql.jdbc.Driver
        url: jdbc:mysql://localhost:3306/test?useUnicode=true&characterEncoding=UTF-8&useSSL=false
        username: root
        password: root
      jpa:
        hibernate:
          ddl-auto: update
        show-sql: true
      redis:
        database: 0
        host: localhost
        port: 6379
        password:
        jedis:
          pool:
            max-active: 8
            max-wait: -1
            max-idle: 8
            min-idle: 0
        timeout: 0
    #热部署--静态资源立即生效
    spring:
      #热部署--静态资源立即生效
      thymeleaf:
        cache: false
        encoding: UTF-8
        mode: LEGACYHTML5
        prefix: classpath:/templates/
        suffix: .html
        check-template-location: true
      #热部署生效
      devtools:
        restart:
          enabled: true
    spring:
      resources:
        #指定静态资源路径，默认为classpath:[/META-INF/resources/,/resources/, /static/, /public/]以及context:/
        static-locations: classpath:/META-INF/resources/,classpath:/resources/,classpath:/static/,classpath:/public/}






   * 4、**分环境部署**<br>&nbsp;&nbsp;&nbsp;&nbsp;
    
&nbsp;&nbsp;&nbsp;&nbsp;一般来说系统分为开发，测试，生产三套，那以application.yml来说，那就是 application-dev.yml，
application-test.yml，application-pro.yml 三个文件。加主配置文件 application.yml。

  
    server:
      port: 9002
    #  session:
    #    timeout: 6000
    
    spring:
      profiles:
    # 这个属性就是区分具体加载的什么环境的配置文件，如application-pro.yml
        active: pro
      application:
        name: project_name
    


&nbsp;&nbsp;&nbsp;&nbsp; 本人授权[维权骑士](http://rightknights.com)对我发布文章的版权行为进行追究与维权。未经本人许可，不可擅自转载或用于其他商业用途。


 