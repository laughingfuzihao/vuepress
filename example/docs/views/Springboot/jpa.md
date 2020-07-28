---
title: 十三、Spring Boot+Data JPA
date: 2020-06-29 10:00:00
tags:
 - Spring Boot
categories:
 - Spring Boot
---

::: tip JPA
JPA全称为Java Persistence API（Java持久层API），它是Sun公司在JavaEE 5中提出的Java持久化规范。它为Java开发人员提供了一种对象/关联映射工具，来管理Java应用中的关系数据，JPA吸取了目前Java持久化技术的优点，旨在规范、简化Java对象的持久化工作。很多ORM框架都是实现了JPA的规范，如：Hibernate、EclipseLink。

:::

::: tip Spring Data JPA 

Spring Data JPA 是 Spring 基于 ORM 框架、JPA 规范的基础上封装的一套JPA应用框架，可使开发者用极简的代码即可实现对数据的访问和操作。它提供了包括增删改查等在内的常用功能，且易于扩展！学习并使用 Spring Data JPA 可以极大提高开发效率！

:::

## 一、依赖

```
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <scope>runtime</scope>
</dependency>

```

```
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
```

## 二、配置

```
jpa:
  database: mysql
  show-sql: true
  hibernate:
    # 初始化数据库结构
    ddl-auto: update
    #create：每次运行程序时，都会重新创建表，故而数据会丢失
    #create-drop：每次运行程序时会先创建表结构，然后待程序结束时清空表
    #update：每次运行程序，没有表时会创建表，如果对象发生改变会更新表结构，原有数据不会清空，只会更新（推荐使用）
    #validate：运行程序会校验数据与数据库的字段类型是否相同，字段不同会报错
    #none: 禁用DDL处理

    #将默认的存储引擎切换为 InnoDB
  database-platform: org.hibernate.dialect.MySQL5InnoDBDialect
```

## 三、实体类

```
@Data
@NoArgsConstructor
@AllArgsConstructor
@Repository
@Entity // @Entity 是一个必选的注解，声明这个类对应了一个数据库表。用此注解标记 Pojo 是一个 JPA 实体。
@Table(name = "user") ////如果@Table 没有指定，则表名和实体的名称保持一致
public class User {
    @Id
    //strategy: 表示主键生成策略，有 AUTO、INDENTITY(id自增长)、SEQUENCE 和 TABLE 4 种
    @GeneratedValue(strategy = GenerationType.IDENTITY)  //按照主键自增
    private int id;
    // 默认长度255
    // nullable 是否允许为 null，默认为 true
    // unique: 表示该字段是否是唯一标识，默认为 false
    //@Transient 表示该属性并非一个到数据库表的字段的映射 ORM 框架将忽略该属性
    @Column(nullable = false, unique = true)
    private String name;
    private int age;
    @Column(length = 32)
    private String email;
    @Column(name = "create_time") //对应列名
    private Date create_time;
    private Date update_time;
    private int version;

}
```

## 四、Repository接口

```
@Repository
public interface  UserDao extends JpaRepository<User, Integer> {

}
```

## 五、服务层接口与实现类

```
public interface UserService {
    /**
     * 查询所有用户信息
     *
     * @return
     */
    List<User> findAll();

    /**
     * 通过ID查询用户
     *
     * @param id
     * @return
     */
    User findById(Integer id);

    /**
     * 添加用户
     *
     * @param user
     */
    void add(User user);

    /**
     * 通过用户ID删除用户
     *
     * @param id
     */
    void deleteById(Integer id);


}
```

```
@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserDao userDao;
    @Override
    public List<User> findAll() {
        return userDao.findAll();
    }

    @Override
    public User findById(Integer id) {
        return userDao.findById(id).get();
    }

    @Override
    public void add(User user) {
        userDao.save(user);
    }

    @Override
    public void deleteById(Integer id) {
        userDao.deleteById(id);
    }


}
```

## 六、控制层

```
@RestController
public class UserController {
    @Autowired
    private UserService userService;
    @GetMapping("/getall")
    public List<User> getALL(){
        return userService.findAll();
    }
}
```





&nbsp;&nbsp;&nbsp; 本人授权[维权骑士](http://rightknights.com)对我发布文章的版权行为进行追究与维权。未经本人许可，不可擅自转载或用于其他商业用途。


