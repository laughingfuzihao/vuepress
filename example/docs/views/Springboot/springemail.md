---
title: 十五、Spring Boot邮件服务
date: 2020-06-29 12:00:00
tags:
 - Spring Boot
categories:
 - Spring Boot
---

## 一、pom依赖  

    <dependencies>
    	<dependency> 
    	    <groupId>org.springframework.boot</groupId>
    	    <artifactId>spring-boot-starter-mail</artifactId>
    	</dependency> 
    </dependencies>


​    

## 二、邮箱配置  

    spring.mail.host=smtp.qq.com
    spring.mail.username=xxxxxx@qq.com
    spring.mail.password=xxxxxxx
    spring.mail.default-encoding=UTF-8


​    mail.fromMail.addr=xxxxxx@qq.com

## 三、mailService实现类

    @Component
    public class MailServiceImpl implements MailService{
    private final Logger logger = LoggerFactory.getLogger(this.getClass());
    @Autowired
    private JavaMailSender mailSender;
    
    @Value("${mail.fromMail.addr}")
    private String from;
    
    /**
     * 发送文本邮件
     * @param to
     * @param subject
     * @param content
     */
    @Override
    public void sendSimpleMail(String to, String subject, String content) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(from);
        message.setTo(to);
        message.setSubject(subject);
        message.setText(content);
    
        try {
            mailSender.send(message);
            logger.info("简单邮件已经发送。");
        } catch (Exception e) {
            logger.error("发送简单邮件时发生异常！", e);
        }
    
    }  
    }  


​    ## 四、配置文件形式

&nbsp;&nbsp;&nbsp;&nbsp;还加了个不停的发的定时任务，实测QQ发10封一样的会被屏蔽。。。<br>
    @Component
    public class Send {
            @Autowired
            private MailService mailService;    
        
        @Scheduled(cron= "*/10 * * * * ?")
        public void testHtmlMail() throws Exception {
            String content="<html>\n" +
                    "<body>\n" +
                    "    <h3>HI</h3>\n" +
                    "</body>\n" +
                    "</html>";
            mailService.sendHtmlMail("xxxxx@qq.com","hi",content);
        }
    
    }


​    



&nbsp;&nbsp;&nbsp;&nbsp; 本人授权[维权骑士](http://rightknights.com)对我发布文章的版权行为进行追究与维权。未经本人许可，不可擅自转载或用于其他商业用途。


