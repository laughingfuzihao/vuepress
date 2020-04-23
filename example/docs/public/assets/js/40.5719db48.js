(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{436:function(n,t,l){"use strict";l.r(t);var e=l(3),s=Object(e.a)({},(function(){var n=this,t=n.$createElement,l=n._self._c||t;return l("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[l("p",[n._v("    如果前后端打包部署在一个Server里，就不存在跨域。前端与后端分开部署在两个机器上或者使用了不同的端口号，\n例如服务器端部署在8080端口，前端部署在80端口，就存在跨域。当前端访问后端服务时会401。控制台类似：")]),n._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",[n._v("Access to XMLHttpRequest at 'http://localhost:8080' from origin 'http://localhost:8081' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.\n")])])]),l("ul",[l("li",[l("p",[n._v("1、"),l("strong",[n._v("浏览器同源策略")]),l("br"),n._v("    \n     同源策略是浏览器最核心也是最基本的安全功能。出于安全考虑，浏览器限制从JS脚本发起的跨源HTTP请求。XMLHttpRequest和Fetch API都遵循同源策略。\n所以禁止 Ajax 直接发起跨域HTTP请求（结果被浏览器拦截），同时 Ajax 请求不能携带与本网站不同源的 Cookie。"),l("br"),n._v("\n     注意，域名、协议、端口有一个不同就不是同源，三者均相同，这两个网站才是同源。但等带有src属性的标签可以从不同的域加载和执行资源。所以跨域请求不直接响应。\n本文记录如何解决跨域请求"),l("br")])]),n._v(" "),l("li",[l("p",[n._v("2、"),l("strong",[n._v("JSONP")]),l("br"),n._v("    \n    JSON with Padding"),l("br"),n._v("\n    script标签没有跨域限制，标签src属性，发送带有callback参数的GET请求，服务端将接口返回数据拼凑到callback函数中，返回给浏览器，浏览器解析执行，从而前端拿到callback函数返回的数据。")])])]),n._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",[n._v("this.$http = axios;\n  this.$http.jsonp('http://www.domain2.com:8080/login', {\n      params: {},\n      jsonp: 'handleCallback'\n  }).then((res) => {\n      console.log(res); \n  })\n")])])]),l("ul",[l("li",[n._v("3、"),l("strong",[n._v("跨域资源共享（CORS）")]),l("br"),n._v("    \n    比如在springboot项目中加入@CrossOrigin，前端代码不做任何修改，就可以实现跨域"),l("br")])]),n._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",[n._v('@RestController\npublic class HelloController {\n    @CrossOrigin(value = "http://localhost:8081")\n    @GetMapping("/hello")\n    public String hello() {\n        return "hello";\n    }\n\n    @CrossOrigin(value = "http://localhost:8081")\n    @PostMapping("/hello")\n    public String hello2() {\n        return "post hello";\n    }\n}\n')])])]),l("p",[n._v("    如果想全局配置："),l("br")]),n._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",[n._v('@Configuration\npublic class WebMvcConfig implements WebMvcConfigurer {\n    @Override\n    public void addCorsMappings(CorsRegistry registry) {\n        registry.addMapping("/**")\n        .allowedOrigins("http://localhost:8081")\n        .allowedMethods("*")\n        .allowedHeaders("*");\n    }\n}\n')])])]),l("ul",[l("li",[n._v("4、"),l("strong",[n._v("Nginx解决")]),l("br"),n._v("    \n    前端的所有请求都直接指向Nginx地址，而由Nginx去具体请求后端服务。这样对于前端来说，它所有的请求都是在本域下发起的，就没有跨域的问题了。在nginx的学习中已经写过。"),l("br")])])])}),[],!1,null,null,null);t.default=s.exports}}]);