---
title: 一、Spring Cloud Eureka搭建与使用
date: 2020-04-19 09:00:00
tags:
 - Spring Cloud
categories:
 - Spring Cloud
---
&nbsp;&nbsp;&nbsp;&nbsp;在dubbo的使用中我们通常使用zookeeper作为注册中心。在这里spring cloud使用Eureka，
用一个标准的spring boot项目就可以快捷的搭建服务注册中心。Spring Cloud Eureka 是对Netflix公司的Eureka的二次封装。这里总结搭建过程。<br/> 
&nbsp;&nbsp;&nbsp;&nbsp;   * 1、**引入pom**<br/> 
  
         
              <dependency>
                  <groupId>org.springframework.cloud</groupId>
                  <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
              </dependency>

&nbsp;&nbsp;&nbsp;&nbsp;   * 2、**指明EurekaApplication入口类位置**<br/>

  
         
                  <build>
                      <plugins>
                          <plugin>
                              <groupId>org.springframework.boot</groupId>
                              <artifactId>spring-boot-maven-plugin</artifactId>
                              <configuration>
                                  <mainClass>com.gwssi.spring.cloud.eureka.EurekaApplication</mainClass>
                              </configuration>
                          </plugin>
                      </plugins>
                  </build>
&nbsp;&nbsp;&nbsp;&nbsp;   * 3、**入口类增加@EnableEurekaServer注解**<br/>
  
         
              @SpringBootApplication
              @EnableEurekaServer
              public class EurekaApplication {
                  public static void main(String[] args) {
                      SpringApplication.run(EurekaApplication.class , args);
                  }
              }
&nbsp;&nbsp;&nbsp;&nbsp;   * 4、**application.yml**<br/>
  
         
              spring:
                application:
                  name: spring-cloud-eureka
              
              server:
                port: 8009
              
              eureka:
                instance:                   #定义Eureka实例
                  hostname: 127.0.0.1 #Eureka实例所在的主机名
              
                #eureka默认情况下,把自己当做客户端来注册自己,所以我们要禁用它 这里是服务端
                  client:
                    register-with-eureka: false #表示是否将自己注册到Eureka Server上，默认为true
                    fetch-registry: false       #表示是否从Eureka Server上获取注册信息，默认为true
                    service-url:
                      defaultZone: http://${eureka.instance.hostname}:${server.port}/eureka/
                  
&nbsp;&nbsp;&nbsp;&nbsp;   * 5、**启动**<br/>                  
![1](./1.jpg)  

&nbsp;&nbsp;&nbsp;&nbsp; 本人授权[维权骑士](http://rightknights.com)对我发布文章的版权行为进行追究与维权。未经本人许可，不可擅自转载或用于其他商业用途。


 