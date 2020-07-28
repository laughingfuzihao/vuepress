---
title: 九、Spring Boot使用JDBC
date: 2020-06-27 14:00:00
tags:
 - Spring Boot
categories:
 - Spring Boot
---

::: tip Sping boot
Sping boot底层都是通过Spring Data实现的，虽然不会直接用JDBC，

但是需要了解一下jdbcTemplate
:::

## 一、引入依赖

```
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-jdbc</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <scope>runtime</scope>
</dependency>
```

##  二、配置yml

```
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/edu?serverTimezone=GMT%2B8&useUnicode=true&characterEncoding=utf-8
    username: root
    password: gwssi
    #com.mysql.jdbc.Driver 是5版本的驱动
    #com.mysql.cj.jdbc.Driver 是8版本的驱动
    driver-class-name: com.mysql.cj.jdbc.Driver

```

yml配置的信息会注入到DataSourceProperties类中，**DataSourceAutoConfiguration**实现自动配置





## 三、编写CRUD代码



在JdbcTemplateAutoConfiguration中JdbcProperties已经注入了一个模板bean.

![image-20200627154554964](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20200627154554964.png)



就可以直接用jdbcTemplate：

```
@RestController
public class JdbcController {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping("/getjdbc")
    public List<UserDao> getjdbc(){
        List<UserDao> userDaoList = new ArrayList<UserDao>();
        jdbcTemplate.queryForList("SELECT * from user");
        return userDaoList;

    }
}
```









































