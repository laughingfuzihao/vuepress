---
title: 七、Spring Boot使用jetty
date: 2020-06-27 12:00:00
tags:
 - Spring Boot
categories:
 - Spring Boot
---

    
   * 1、**jetty**<br/>

&nbsp;&nbsp;&nbsp;&nbsp;Jetty可以同时处理大量连接而且可以长时间保持连接，适合于web聊天应用等等。<br/>
&nbsp;&nbsp;&nbsp;&nbsp;Jetty的架构简单，因此作为服务器，Jetty可以按需加载组件，减少不需要的组件，减少了服务器内存开销，从而提高服务器性能。<br/>
&nbsp;&nbsp;&nbsp;&nbsp;Jetty默认采用NIO结束在处理I/O请求上更占优势，在处理静态资源时，性能较高。<br/>
&nbsp;&nbsp;&nbsp;&nbsp;我们使用jetty的原因是开发中用jetty部署启动的速度比tomcat快。<br/>

   * 2、**pom**<br/>         


       
                 <dependency>
                     <groupId>org.springframework.boot</groupId>
                     <artifactId>spring-boot-starter-web</artifactId>
                     <exclusions>
                         <exclusion>
                             <groupId>org.springframework.boot</groupId>
                             <artifactId>spring-boot-starter-tomcat</artifactId>
                         </exclusion>
                     </exclusions>
                 </dependency>
                 <dependency>
                     <groupId>org.springframework.boot</groupId>
                     <artifactId>spring-boot-starter-jetty</artifactId>
                 </dependency>

&nbsp;&nbsp;&nbsp;&nbsp; 本人授权[维权骑士](http://rightknights.com)对我发布文章的版权行为进行追究与维权。未经本人许可，不可擅自转载或用于其他商业用途。


 