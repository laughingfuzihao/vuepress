---
title: 三、Spring Security 认证与授权
date: 2020-08-11 10:00:00
tags:
 - Spring Security
categories:
 - Spring Security

---

## 一、Spring Security配置类

Spring Security的config类继承WebSecurityConfigurerAdapter。完成认证、拦截、授权、密码加密等功能。

```
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter{}
```



## 二、认证

在 Spring Security 中，用来处理身份认证的类是 AuthenticationManager，我们也称之为认证管理器。实现类为ProviderManager。

AuthenticationManager 中规范了 Spring Security 的过滤器要如何执行身份认证，并在身份认证成功后返回一个经过认证的 Authentication 对象。

AuthenticationManagerBuilder 为认证管理器构建器。

在配置类中，将userDetailService放入AuthenticationManagerBuilder构建，实现用户身份认证。

![image-20200811114528831](./image-20200811114528831.png)



## 三、授权

授权通过安全拦截机制,继承configure(HttpSecurity http)方法。

![image-20200811115211030](./image-20200811115211030.png)



































