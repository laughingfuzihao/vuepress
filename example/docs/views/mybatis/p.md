---
title: 二、Mybatis Plus - 乐观锁
date: 2020-06-10 23:00:00
tags:
 - Mybatis Plus
categories:
 - Mybatis Plus
---



### 一、乐观锁与悲观锁

**悲观锁:**<br>

​	当我们要对一个数据库中的一条数据进行：修改的时候，为了避免同时被其他人修改，最好的办法就是直接对该数据进行加锁以防止并发。这种借助数据库锁机制，在修改数据之前先锁定，再修改的方式被称之为悲观并发控制（又名“悲观锁”，Pessimistic Concurrency Control）。**他 是由数据库DBMS实现的。**<br>

**乐观锁：**<br>

乐观锁程序实现，不会存在死锁等问题，阻止不了除了程序之外的数据库操作。<br>



### 二、mysql实现悲观锁

要使用悲观锁，我们必须关闭mysql数据库的自动提交属性，因为MySQL默认使用autocommit模式，也就是说，当你执行一个更新操作后，MySQL会立刻将结果进行提交。

```bash
// 关闭mysql数据库的自动提交属性
set autocommit=0;

// 开启事务
BEGIN;

SELECT * FROM tbl_user where id=1 for update;

..... //死锁

.....//直到commit;

commit;
```



### 三、Mybatis Plus乐观锁实现方式

表增加version字段，取出记录时，获取当前 version<br>

更新时，带上这个version<br>

执行更新时， set version = newVersion where version = oldVersion<br>

如果version不对，就更新失败<br>

乐观锁：1、先查询，获得版本号 version = 1 

```
-- A 

update user set name = "laughing", version = version + 1 

where id = 2 and version = 1 

-- B 线程抢先完成，这个时候 version = 2，会导致 A 修改失败！ 

update user set name = "laughing", version = version + 1 

where id = 2 and version = 1
```

在Mybatis Plus实体类中增加Version字段并使用@Version 乐观锁Version注解 ；

```
@Version //乐观锁Version注解 

private Integer version; 
```

注册组件：

```
// 注册乐观锁插件 
@Bean
public OptimisticLockerInterceptor optimisticLockerInterceptor() {
    return new OptimisticLockerInterceptor();
}
```




&nbsp;&nbsp;&nbsp;&nbsp; 本人授权[维权骑士](http://rightknights.com)对我发布文章的版权行为进行追究与维权。未经本人许可，不可擅自转载或用于其他商业用途。


