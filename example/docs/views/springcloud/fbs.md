---
title: 九、Spring Cloud 分布式配置中心
date: 2020-04-20 16:00:00
tags:
 - Spring Cloud
categories:
 - Spring Cloud
---

&nbsp;&nbsp;&nbsp;&nbsp;为了方便服务的配置文件统一管理，所以需要分布式配置中心来集中管理。
这里有Spring Cloud Config,支持将服务配置放在本地，也可在远程Git仓库。Spring Cloud Config分两个角色Config server和 Config Client<br>
&nbsp;&nbsp;&nbsp;&nbsp;   * 1、**引入pom依赖**<br/> 

  
         
                              <dependency>
                                  <groupId>org.springframework.cloud</groupId>
                                  <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
                              </dependency>
                              <dependency>
                                  <groupId>org.springframework.cloud</groupId>
                                  <artifactId>spring-cloud-config-server</artifactId>
                              </dependency>
                          </dependencies>
&nbsp;&nbsp;&nbsp;&nbsp;   * 2、**yml**<br/> 

         
              spring:
                application:
                  name: spring-cloud-config
                cloud:
                  config:
                    label: master
                    server:
                      git: #git配置
              
              server:
                port: 8888
              
              eureka:
                client:
                  service-url:
                    defaultZone: http://localhost:8009/eureka/


&nbsp;&nbsp;&nbsp;&nbsp;   * 3、**启动类**<br/> 


         
              @EnableConfigServer
              @EnableEurekaClient
              @SpringBootApplication
              public class ConfigApplication {
                  public static void main(String[] args) {
                      SpringApplication.run(ConfigApplication.class , args);
                  }
              }

&nbsp;&nbsp;&nbsp;&nbsp; 本人授权[维权骑士](http://rightknights.com)对我发布文章的版权行为进行追究与维权。未经本人许可，不可擅自转载或用于其他商业用途。


 