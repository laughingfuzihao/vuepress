---
title: 四、前后端分离的跨域请求解决
date: 2019-10-01 11:00:00
tags:
 - Vue.js
categories:
 - Vue.js
---
&nbsp;&nbsp;&nbsp;&nbsp;如果前后端打包部署在一个Server里，就不存在跨域。前端与后端分开部署在两个机器上或者使用了不同的端口号，
例如服务器端部署在8080端口，前端部署在80端口，就存在跨域。当前端访问后端服务时会401。控制台类似：



         
    Access to XMLHttpRequest at 'http://localhost:8080' from origin 'http://localhost:8081' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.


   * 1、**浏览器同源策略**<br>&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp; 同源策略是浏览器最核心也是最基本的安全功能。出于安全考虑，浏览器限制从JS脚本发起的跨源HTTP请求。XMLHttpRequest和Fetch API都遵循同源策略。
所以禁止 Ajax 直接发起跨域HTTP请求（结果被浏览器拦截），同时 Ajax 请求不能携带与本网站不同源的 Cookie。<br>
&nbsp;&nbsp;&nbsp;&nbsp; 注意，域名、协议、端口有一个不同就不是同源，三者均相同，这两个网站才是同源。但等带有src属性的标签可以从不同的域加载和执行资源。所以跨域请求不直接响应。
本文记录如何解决跨域请求<br>


   * 2、**JSONP**<br>&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;JSON with Padding<br>
&nbsp;&nbsp;&nbsp;&nbsp;script标签没有跨域限制，标签src属性，发送带有callback参数的GET请求，服务端将接口返回数据拼凑到callback函数中，返回给浏览器，浏览器解析执行，从而前端拿到callback函数返回的数据。
         
    this.$http = axios;
      this.$http.jsonp('http://www.domain2.com:8080/login', {
          params: {},
          jsonp: 'handleCallback'
      }).then((res) => {
          console.log(res); 
      })

   * 3、**跨域资源共享（CORS）**<br>&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;比如在springboot项目中加入@CrossOrigin，前端代码不做任何修改，就可以实现跨域<br>
         
    @RestController
    public class HelloController {
        @CrossOrigin(value = "http://localhost:8081")
        @GetMapping("/hello")
        public String hello() {
            return "hello";
        }
    
        @CrossOrigin(value = "http://localhost:8081")
        @PostMapping("/hello")
        public String hello2() {
            return "post hello";
        }
    }
&nbsp;&nbsp;&nbsp;&nbsp;如果想全局配置：<br>
         
    @Configuration
    public class WebMvcConfig implements WebMvcConfigurer {
        @Override
        public void addCorsMappings(CorsRegistry registry) {
            registry.addMapping("/**")
            .allowedOrigins("http://localhost:8081")
            .allowedMethods("*")
            .allowedHeaders("*");
        }
    }

   * 4、**Nginx解决**<br>&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;前端的所有请求都直接指向Nginx地址，而由Nginx去具体请求后端服务。这样对于前端来说，它所有的请求都是在本域下发起的，就没有跨域的问题了。在nginx的学习中已经写过。<br>


