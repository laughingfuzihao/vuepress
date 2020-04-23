---
title: 五、Spring Cloud 熔断器
date: 2020-04-19 13:00:00
tags:
 - Spring Cloud
categories:
 - Spring Cloud
---

&nbsp;&nbsp;&nbsp;&nbsp;   * 1、**微服务的服务雪崩**<br/> 
&nbsp;&nbsp;&nbsp;&nbsp;由于微服务架构的多服务组成和网络层通信的复杂性，使得一旦一个微服务发生了故障，由于服务于服务之前的依赖性很强，会造成系统级的伤害，
也就是级联故障，也叫雪崩效应，会导致全部系统的不可用。所以微服务需要疏通这些故障以保证整个系统的安全，从而引入了熔断机制。<br/> 
&nbsp;&nbsp;&nbsp;&nbsp;简单理解一些就是假如B服务调用了A，返回一个结果，C继续调用了B这个结果，组成一个链式调用。如果A服务调用失败，会让后面跟着的所有链式服务失败。
此时就需要一个熔断的机制，B调用A失败的话。C就停止调用B。<br/> 


&nbsp;&nbsp;&nbsp;&nbsp;* 2、**Hystrix**<br/>
&nbsp;&nbsp;&nbsp;&nbsp;Hystrix是由Netflix开源的一个延迟和容错库，用于隔离访问远程系统、
服务或者第三方库，防止级联失败，从而提升系统的可用性、容错性与局部应用的弹性，是一个实现了超市机制和断路器模式的工具类库。<br/>
  



&nbsp;&nbsp;&nbsp;&nbsp;   * 3、**Ribbon使用熔断器**<br/>
&nbsp;&nbsp;&nbsp;&nbsp;**3.1、在pom文件中添加依赖**<br/>

         
                      <dependency>
                          <groupId>org.springframework.cloud</groupId>
                          <artifactId>spring-cloud-starter-netflix-hystrix</artifactId>
                      </dependency>


&nbsp;&nbsp;&nbsp;&nbsp;**3.2、启动类增加@EnableHystrix注解，开启熔断器**<br/>

         
              @RestController
              public class AdminController {
                  @Autowired
                  private FeignService feignService;
                  @RequestMapping(value = "message",method = RequestMethod.GET)
                  public String showMessage(String message){
              
                      return feignService.showMessage(message);
                  }
              }
              
&nbsp;&nbsp;&nbsp;&nbsp;**3.3、服务类**<br/>

         
              @Service
              public class ProviderService {
              
                  @Autowired
                  private RestTemplate restTemplate;
                  @HystrixCommand(fallbackMethod = "showMessageError")  // 如果出错 返回熔断方法showMessageError
                  public String showMessage(String message) {
                      return restTemplate.getForObject("http://spring-cloud-provider/message?message=" + message, String.class);
                  }
              
                  public String showMessageError(String message){
                      return  String.format("your message is: %s but request bad",message);
              
                  }
              
              
              }          
              
 &nbsp;&nbsp;&nbsp;&nbsp;   * 4、**feign使用熔断器**<br/>
 
&nbsp;&nbsp;&nbsp;&nbsp;**4.1、feign已经集成了熔断器,只需在yml中开启**<br/> 
 
         
              feign:
                hystrix:
                  enabled: true #开启Feign Hystrix 支持
&nbsp;&nbsp;&nbsp;&nbsp;**4.2、Service实现类**<br/>  
 
         
              @Component
              public class FeignServiceHystrix implements FeignService {
              
                  @Override
                  public String showMessage(String message) {
                      return  String.format("your message is: %s but request bad",message);
                  }
              }

&nbsp;&nbsp;&nbsp;&nbsp;**4.3、增加fallback**<br/>  

 
         
              @FeignClient(value="spring-cloud-provider" ,fallback = FeignServiceHystrix.class) //服务提供者
              public interface FeignService {
              
                  @RequestMapping(value = "message",method = RequestMethod.GET)
                  public String showMessage(@RequestParam(value = "message") String message);
              
              }


          

&nbsp;&nbsp;&nbsp;&nbsp; 本人授权[维权骑士](http://rightknights.com)对我发布文章的版权行为进行追究与维权。未经本人许可，不可擅自转载或用于其他商业用途。


 