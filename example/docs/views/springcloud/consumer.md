---
title: 三、Spring Cloud Ribbon消费者
date: 2020-04-19 11:00:00
tags:
 - Spring Cloud
categories:
 - Spring Cloud
---
&nbsp;&nbsp;&nbsp;&nbsp;Spring Cloud Ribbon是一个基于HTTP和TCP的客户端负载均衡工具，它基于Netflix Ribbon实现。
通过Spring Cloud的封装，可以让我们轻松地将面向服务的REST模版请求自动转换成客户端负载均衡的服务调用。<br/> 
&nbsp;&nbsp;&nbsp;&nbsp;   * 1、**pom依赖**<br/> 
  
         
                       <dependency>
                          <groupId>org.springframework.cloud</groupId>
                          <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
                      </dependency>
                      <dependency>
                          <groupId>org.springframework.cloud</groupId>
                          <artifactId>spring-cloud-starter-netflix-ribbon</artifactId>
                      </dependency>

&nbsp;&nbsp;&nbsp;&nbsp;* 2、**application.yml**<br/>
  
         
              spring:
                application:
                  name: spring-cloud-consumer-ribbon
              
                thymeleaf:
                  cache: false
                  prefix: classpath:/templates/
                  suffix: .html
                  encoding: UTF-8
                  servlet:
                    content-type: text/html
                  mode: HTML5
              
              
              server:
                port: 8011
              
              eureka:
                client:
                  service-url:
                    defaultZone: http://localhost:8009/eureka/

                  
&nbsp;&nbsp;&nbsp;&nbsp;   * 3、**启动类**<br/>                  
![5](./5.jpg) 

&nbsp;&nbsp;&nbsp;&nbsp;   * 4、**负载均衡**<br/>
&nbsp;&nbsp;&nbsp;&nbsp;注意@LoadBalanced注解实现的负载均衡效果  <br/>
![8](./8.png)
&nbsp;&nbsp;&nbsp;&nbsp;控制类<br/>
  
         
              @RestController
              public class RibbonController {
              
                  @Autowired
                  private ProviderService providerService;
              
                  @RequestMapping(value = "message",method = RequestMethod.GET)
                  public String showMessage(String message) {
                      return providerService.showMessage(message);
                  }
              } 

&nbsp;&nbsp;&nbsp;&nbsp;ProviderService<br/>
 &nbsp;&nbsp;&nbsp;&nbsp;这里直接通过spring-cloud-provider进行调用，不用再关心provider在哪台机器哪个端口。并且
 实现了负载均衡<br/> 
         
              @Service
              public class ProviderService {
              
                  @Autowired
                  private RestTemplate restTemplate;
              
                  public String showMessage(String message) {
                      return restTemplate.getForObject("http://spring-cloud-provider/message?message=" + message, String.class);
                  }
              
              
              }
&nbsp;&nbsp;&nbsp;&nbsp;效果<br/>
![9](./9.png)
![10](./10.png)
![11](./11.png)
&nbsp;&nbsp;&nbsp;&nbsp; 本人授权[维权骑士](http://rightknights.com)对我发布文章的版权行为进行追究与维权。未经本人许可，不可擅自转载或用于其他商业用途。


 