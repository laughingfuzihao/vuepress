---
title: 四、Spring Cloud Feign消费者
date: 2020-04-19 12:00:00
tags:
 - Spring Cloud
categories:
 - Spring Cloud
---
&nbsp;&nbsp;&nbsp;&nbsp; Feign是一个伪http客户端，可以以Java接口注解的方式调用，默认继承了Ribbon。

Feign通过处理注解，将请求模板化，当实际调用的时候，传入参数，根据参数再应用到请求上，进而转化成真正的请求<br/> 
&nbsp;&nbsp;&nbsp;&nbsp;   * 1、**pom依赖**<br/> 
  
         
                               <dependency>
                                   <groupId>org.springframework.cloud</groupId>
                                   <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
                               </dependency>
                               <dependency>
                                   <groupId>org.springframework.cloud</groupId>
                                   <artifactId>spring-cloud-starter-openfeign</artifactId>
                               </dependency>

&nbsp;&nbsp;&nbsp;&nbsp;* 2、**application.yml**<br/>
  
         
              spring:
                application:
                  name: spring-cloud-feign
              
                thymeleaf:
                  cache: false
                  prefix: classpath:/templates/
                  suffix: .html
                  encoding: UTF-8
                  servlet:
                    content-type: text/html
                  mode: HTML5
              
              
              server:
                port: 8020
              
              eureka:
                client:
                  service-url:
                    defaultZone: http://localhost:8009/eureka/

                  


&nbsp;&nbsp;&nbsp;&nbsp;   * 3、**服务接口**<br/>
&nbsp;&nbsp;&nbsp;&nbsp;@FeignClient(value="spring-cloud-provider") 指明服务提供者  <br/>

         
              @FeignClient(value="spring-cloud-provider") //服务提供者
              public interface FeignService {
              
                  @RequestMapping(value = "message",method = RequestMethod.GET)
                  public String showMessage(@RequestParam(value = "message") String message);
              
              }


&nbsp;&nbsp;&nbsp;&nbsp;控制类<br/>

         
              @RestController
              public class AdminController {
                  @Autowired
                  private FeignService feignService;
                  @RequestMapping(value = "message",method = RequestMethod.GET)
                  public String showMessage(String message){
              
                      return feignService.showMessage(message);
                  }
              }
&nbsp;&nbsp;&nbsp;&nbsp;效果和ribbon相同<br/>

&nbsp;&nbsp;&nbsp;&nbsp; 本人授权[维权骑士](http://rightknights.com)对我发布文章的版权行为进行追究与维权。未经本人许可，不可擅自转载或用于其他商业用途。


 