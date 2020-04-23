(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{336:function(e,n,r){e.exports=r.p+"assets/img/m1.175ead90.png"},439:function(e,n,r){"use strict";r.r(n);var s=r(3),a=Object(s.a)({},(function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("    MyBatis 是支持定制化 SQL、存储过程以及高级映射的持久层ORM框架,对JDBC进行封装,MyBatis 直接使用原生SQL 语句，优化空间比较大。本文用Springboot集成，数据库用mysql。")]),e._v(" "),s("ul",[s("li",[e._v("1、"),s("strong",[e._v("pom文件引入")]),s("br")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("<dependency>\n\t<groupId>org.mybatis.spring.boot</groupId>\n\t<artifactId>mybatis-spring-boot-starter</artifactId>\n\t<version>1.3.2</version>\n</dependency>\n<dependency>\n\t<groupId>mysql</groupId>\n\t<artifactId>mysql-connector-java</artifactId>\n\t<scope>runtime</scope>\n</dependency>\n")])])]),s("ul",[s("li",[e._v("2、"),s("strong",[e._v("application.yml源文件配置")]),s("br")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("#配置服务器信息\nserver:\n  port: 8080\nspring:\n  #mysql数据库相关配置\n  datasource:\n    url: jdbc:mysql://localhost:3306/xxxx?useUnicode=true&characterEncoding=utf-8&useSSL=true&serverTimezone=UTC\n    username: root\n    password: ******\n    driver-class-name: com.mysql.jdbc.Driver   #mysql驱动\n#mybatis依赖\nmybatis:\n  mapper-locations: classpath:mapping/*Mapper.xml\n  type-aliases-package: com.gwssi.mybatis.dao\n\n#showSql\nlogging:\n  level:\n    com:\n      gwssi:\n        mybatis:\n          mapper : debug  \n")])])]),s("ul",[s("li",[s("p",[e._v("3、"),s("strong",[e._v("目录结构")]),s("br"),s("br"),e._v(" "),s("img",{attrs:{src:r(336),alt:"logo"}}),e._v(" "),s("br")])]),e._v(" "),s("li",[s("p",[e._v("4、"),s("strong",[e._v("DAO层")]),s("br")])])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("package com.gwssi.mybatis.dao;\n\n/**\n * Created with IntelliJ IDEA\n *\n * @version 1.0.0\n * @author: ZIHAO FU\n * @create: 2020/4/14 16:59\n * @description:\n */\npublic class User {\n    private Integer id;\n    private String userName;\n    private String passWord;\n    private String realName;\n\n    public Integer getId() {\n        return id;\n    }\n\n    public void setId(Integer id) {\n        this.id = id;\n    }\n\n    public String getUserName() {\n        return userName;\n    }\n\n    public void setUserName(String userName) {\n        this.userName = userName;\n    }\n\n    public String getPassWord() {\n        return passWord;\n    }\n\n    public void setPassWord(String passWord) {\n        this.passWord = passWord;\n    }\n\n    public String getRealName() {\n        return realName;\n    }\n\n    public void setRealName(String realName) {\n        this.realName = realName;\n    }\n\n    @Override\n    public String toString() {\n        return \"User{\" +\n                \"id=\" + id +\n                \", userName='\" + userName + '\\'' +\n                \", passWord='\" + passWord + '\\'' +\n                \", realName='\" + realName + '\\'' +\n                '}';\n    }\n\n}\n")])])]),s("ul",[s("li",[e._v("5、"),s("strong",[e._v("接口API UserService")]),s("br")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("@Repository\npublic interface UserMapper {\n    User Sel(int id);\n}\n")])])]),s("ul",[s("li",[e._v("6、"),s("strong",[e._v("接口实现类")]),s("br")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("@Service\npublic class UserService {\n    @Autowired\n    UserMapper userMapper;\n    public User Sel(int id){\n        return userMapper.Sel(id);\n    }\n}   \n")])])]),s("ul",[s("li",[e._v("7、"),s("strong",[e._v("Mapping.xml")]),s("br")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v('<?xml version="1.0" encoding="UTF-8"?>\n        <!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">\n        <mapper namespace="com.gwssi.mybatis.mapper.UserMapper">\n            <resultMap id="BaseResultMap" type="com.gwssi.mybatis.dao.User">\n                <result column="id" jdbcType="INTEGER" property="id" />\n                <result column="userName" jdbcType="VARCHAR" property="userName" />\n                <result column="passWord" jdbcType="VARCHAR" property="passWord" />\n                <result column="realName" jdbcType="VARCHAR" property="realName" />\n            </resultMap>\n            <select id="Sel" resultType="com.gwssi.mybatis.dao.User">\n                select * from user where id = #{id}\n            </select>\n        </mapper>\n')])])]),s("p",[e._v("     本人授权"),s("a",{attrs:{href:"http://rightknights.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("维权骑士"),s("OutboundLink")],1),e._v("对我发布文章的版权行为进行追究与维权。未经本人许可，不可擅自转载或用于其他商业用途。")])])}),[],!1,null,null,null);n.default=a.exports}}]);