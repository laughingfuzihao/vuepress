---
title: 三、Spring 配置文件说明
date: 2020-06-22 10:00:00
tags:
 - SSM
categories:
 - SSM
---

## xml配置文件模板

```
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
        https://www.springframework.org/schema/beans/spring-beans.xsd">
    <!--1、IOC 容器 bean定义-->
    <!--
        不用构造器
        id为bean的唯一标识，context.getBean(id)。
        class为类路径。
        name 为别名 可以有多个别名。
    -->
    <bean id="user" class="com.gwssi.pojo.User" name="user2,user3;user4">
        <!-- collaborators and configuration for this bean go here -->
        <property name="name" value="laughing"/>
        <property name="age" value="1"/>
    </bean>
    <!--2、构造器注入-->
    <bean id="user" class="com.gwssi.pojo.User">
        <constructor-arg name="name" value="laughing"/>
        <constructor-arg name="age" value="1"/>
    </bean>
    <!--3、alias 别名-->
    <alias name="user" alias="useralias"/>
    <!--4、import导入spring多个配置文件-->
    <import resource="application-context2.xml"/>
    <!-- more bean definitions go here -->
</beans>
```









&nbsp;&nbsp; 本人授权[维权骑士](http://rightknights.com)对我发布文章的版权行为进行追究与维权。未经本人许可，不可擅自转载或用于其他商业用途。

