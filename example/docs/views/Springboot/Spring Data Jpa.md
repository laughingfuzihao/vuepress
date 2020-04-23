---
title: 九、Spring Data Jpa
date: 2020-02-15 14:00:00
tags:
 - Spring Boot
categories:
 - Spring Boot
---

    
   * 1、**配置信息**<br/>



         spring.jpa.properties.hibernate.hbm2ddl.auto=upadte # 详细看下面
         spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL5InnoDBDialect
         spring.jpa.show-sql=true
         spring.jpa.properties.hibernate.format_sql=true
         create：每次运行程序时，都会重新创建表，故而数据会丢失
         create-drop：每次运行程序时会先创建表结构，然后待程序结束时清空表
         upadte：每次运行程序，没有表时会创建表，如果对象发生改变会更新表结构，原有数据不会清空，只会更新（推荐使用）
         validate：运行程序会校验数据与数据库的字段类型是否相同，字段不同会报错
         none: 禁用DDL处理
   * 2、**entity类**<br/>         


       
         @Entity  
         //@Entity(name="EntityName") 必须，用来标注一个数据库对应的实体，数据库中创建的表名默认和类名一致。
         // 其中，name 为可选，对应数据库中一个表，使用此注解标记 Pojo 是一个 JPA 实体。
         public class User  {
             @Id    //@Id 定义了映射到数据库表的主键的属性
             //@GeneratedValue(strategy=GenerationType.AUTO，generator="") 可选
             //strategy: 表示主键生成策略，有 AUTO、INDENTITY(id自增长)、SEQUENCE 和 TABLE 4 种
             //generator: 表示主键生成器的名称。             
             @GeneratedValue
             private Long id;
             // nullable 是否允许为 null，默认为 true
             // unique: 表示该字段是否是唯一标识，默认为 false
             //@Transient 表示该属性并非一个到数据库表的字段的映射 ORM 框架将忽略该属性
             @Column(nullable = false, unique = true)
             private String userName;
             @Column(nullable = false)
             private String passWord;
             @Column(nullable = false, unique = true)
             private String email;
             @Column(nullable = true, unique = true)
             private String nickName;
             @Column(nullable = false)
             private String regTime; 
             // get  set
             }    
     
       
   * 3、**UserRepository接口类**<br/>

    public interface UserRepository extends JpaRepository<User, Long> {
            
     }
   * 4、**JpaRepository提供默认方法**<br/>

    
    @Test
      public void testBaseQuery() {
       	Date date = new Date();
       	DateFormat dateFormat = DateFormat.getDateTimeInstance(DateFormat.LONG, DateFormat.LONG);
       	String formattedDate = dateFormat.format(date);
       	User user=new User("ff", "ff123456","ff@126.com", "ff",  formattedDate);
       	userRepository.findAll();
       	userRepository.findById(3L);
       	userRepository.save(user);
       	user.setId(2L);
       	userRepository.delete(user);
       	userRepository.count();
       	userRepository.existsById(3L);
       	}
   * 5、**分页查询**<br/>

    
    int page=1,size=5;
	Sort sort = new Sort(Sort.Direction.DESC, "id");
	Pageable pageable = PageRequest.of(page, size, sort);
	userRepository.findALL(pageable);      
		
   * 6、**自定义SQL查询**<br/>		
		

&nbsp;&nbsp;&nbsp;&nbsp;@Query来指定hql语句<br>

    
    @Query("select u from User u where u.email = ?1")
    User findByEmail(String email);  // 返回实体类
    List findByEmail2(String email); // 以list返回

&nbsp;&nbsp;&nbsp;&nbsp;如涉及到删除和修改在需要加上@Modifying.也可以根据需要添加 @Transactional对事物的支持，查询超时的设置等。<br>
    
    
        @Transactional(timeout = 10)
        @Modifying
        @Query("update User set userName = ?1 where id = ?2")
        int modifyById(String  userName, Long id);


   * 7、**多表查询**<br/>




&nbsp;&nbsp;&nbsp;&nbsp; 本人授权[维权骑士](http://rightknights.com)对我发布文章的版权行为进行追究与维权。未经本人许可，不可擅自转载或用于其他商业用途。


 