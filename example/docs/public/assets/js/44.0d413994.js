(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{459:function(e,n,t){"use strict";t.r(n);var r=t(3),a=Object(r.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("     Feign是一个伪http客户端，可以以Java接口注解的方式调用，默认继承了Ribbon。")]),e._v(" "),t("p",[e._v("Feign通过处理注解，将请求模板化，当实际调用的时候，传入参数，根据参数再应用到请求上，进而转化成真正的请求"),t("br"),e._v("\n       * 1、"),t("strong",[e._v("pom依赖")]),t("br")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("                           <dependency>\n                               <groupId>org.springframework.cloud</groupId>\n                               <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>\n                           </dependency>\n                           <dependency>\n                               <groupId>org.springframework.cloud</groupId>\n                               <artifactId>spring-cloud-starter-openfeign</artifactId>\n                           </dependency>\n")])])]),t("p",[e._v("    * 2、"),t("strong",[e._v("application.yml")]),t("br")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("          spring:\n            application:\n              name: spring-cloud-feign\n          \n            thymeleaf:\n              cache: false\n              prefix: classpath:/templates/\n              suffix: .html\n              encoding: UTF-8\n              servlet:\n                content-type: text/html\n              mode: HTML5\n          \n          \n          server:\n            port: 8020\n          \n          eureka:\n            client:\n              service-url:\n                defaultZone: http://localhost:8009/eureka/\n")])])]),t("p",[e._v("       * 3、"),t("strong",[e._v("服务接口")]),t("br"),e._v('\n    @FeignClient(value="spring-cloud-provider") 指明服务提供者  '),t("br")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('          @FeignClient(value="spring-cloud-provider") //服务提供者\n          public interface FeignService {\n          \n              @RequestMapping(value = "message",method = RequestMethod.GET)\n              public String showMessage(@RequestParam(value = "message") String message);\n          \n          }\n')])])]),t("p",[e._v("    控制类"),t("br")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('          @RestController\n          public class AdminController {\n              @Autowired\n              private FeignService feignService;\n              @RequestMapping(value = "message",method = RequestMethod.GET)\n              public String showMessage(String message){\n          \n                  return feignService.showMessage(message);\n              }\n          }\n')])])]),t("p",[e._v("    效果和ribbon相同"),t("br")]),e._v(" "),t("p",[e._v("     本人授权"),t("a",{attrs:{href:"http://rightknights.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("维权骑士"),t("OutboundLink")],1),e._v("对我发布文章的版权行为进行追究与维权。未经本人许可，不可擅自转载或用于其他商业用途。")])])}),[],!1,null,null,null);n.default=a.exports}}]);