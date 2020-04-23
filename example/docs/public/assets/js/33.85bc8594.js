(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{342:function(t,e,n){t.exports=n.p+"assets/img/t1.499030d9.png"},445:function(t,e,n){"use strict";n.r(e);var r=n(3),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("ul",[r("li",[t._v("1、"),r("strong",[t._v("pom依赖")]),r("br")])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[t._v("<dependencies>\n \t<dependency>\n \t\t<groupId>org.springframework.boot</groupId>\n \t\t<artifactId>spring-boot-starter</artifactId>\n \t</dependency>\n \t<dependency>\n \t\t<groupId>org.springframework.boot</groupId>\n \t\t<artifactId>spring-boot-starter-test</artifactId>\n \t\t<scope>test</scope>\n \t</dependency>\n</dependencies>\n")])])]),r("ul",[r("li",[t._v("2、"),r("strong",[t._v("启动类注解@EnableScheduling")]),r("br")])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[t._v("@EnableScheduling\n")])])]),r("ul",[r("li",[t._v("3、"),r("strong",[t._v("定时任务实现类")]),r("br")])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[t._v('@Scheduled(cron = "0/5 * * * * *")\npublic void cron() {\n    System.out.println(new Date());\n}\n')])])]),r("ul",[r("li",[t._v("4、"),r("strong",[t._v("配置文件形式")]),r("br")])]),t._v(" "),r("p",[t._v("    那我们有多个定时任务且需要经常更改，每次都要找@Scheduled来更改cron表达式很不方便，可改为以配置文件的形式操作"),r("br")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[t._v('@Component\n@PropertySource("classpath:/task-config.properties")\npublic class Scheduler2Task {\n\n    private static final SimpleDateFormat dateFormat = new SimpleDateFormat("HH:mm:ss");\n\n    // @Scheduled(fixedRate = 5000)\n    @Scheduled(cron = "${cron}")\n    public void reportCurrentTime() {\n        System.out.println("现在时间：" + dateFormat.format(new Date()));\n    }\n\n}\n')])])]),r("p",[t._v("    新建配置文件task-config.properties"),r("br"),t._v("\n    cron= */6 * * * * ?"),r("br"),t._v("\n    现在就是6s执行一次"),r("br")]),t._v(" "),r("p",[r("img",{attrs:{src:n(342),alt:"logo"}}),t._v(" "),r("br")]),t._v(" "),r("p",[t._v("     本人授权"),r("a",{attrs:{href:"http://rightknights.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("维权骑士"),r("OutboundLink")],1),t._v("对我发布文章的版权行为进行追究与维权。未经本人许可，不可擅自转载或用于其他商业用途。")])])}),[],!1,null,null,null);e.default=a.exports}}]);