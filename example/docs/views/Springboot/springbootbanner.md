---
title: 二、Spring Boot banner
date: 2020-02-15 07:00:00
tags:
 - Spring Boot
categories:
 - Spring Boot
---


   * 1、**Spring Boot banner**<br>&nbsp;&nbsp;&nbsp;&nbsp;

&nbsp;&nbsp;&nbsp;&nbsp;在springboot的resource中创建一个banner.txt文件，在启动时就会替换springboot默认的输出<br>
  
    ${AnsiColor.BRIGHT_RED}
    ////////////////////////////////////////////////////////////////////
    //                          _ooOoo_                               //
    //                         o8888888o                              //
    //                         88" . "88                              //
    //                         (| ^_^ |)                              //
    //                         O\  =  /O                              //
    //                      ____/`---'\____                           //
    //                    .'  \\|     |//  `.                         //
    //                   /  \\|||  :  |||//  \                        //
    //                  /  _||||| -:- |||||-  \                       //
    //                  |   | \\\  -  /// |   |                       //
    //                  | \_|  ''\---/''  |   |                       //
    //                  \  .-\__  `-`  ___/-. /                       //
    //                ___`. .'  /--.--\  `. . ___                     //
    //              ."" '<  `.___\_<|>_/___.'  >'"".                  //
    //            | | :  `- \`.;`\ _ /`;.`/ - ` : | |                 //
    //            \  \ `-.   \_ __\ /__ _/   .-` /  /                 //
    //      ========`-.____`-.___\_____/___.-`____.-'========         //
    //                           `=---='                              //
    //      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^        //
    //            佛祖保佑       永不宕机     永无BUG                  //
    ////////////////////////////////////////////////////////////////////


&nbsp;&nbsp;&nbsp;&nbsp;banner定制网站：<br>
　　[http://patorjk.com/software/taag](http://patorjk.com/software/taag)<br>
　　[http://www.network-science.de/ascii/](http://www.network-science.de/ascii/)<br>
　　[http://www.degraeve.com/img2txt.php](http://www.degraeve.com/img2txt.php)<br>
&nbsp;&nbsp;&nbsp;&nbsp;图片转换：<br>
    [https://www.fontke.com/tool/image2ascii/](https://www.fontke.com/tool/image2ascii/)<br>
    
    
&nbsp;&nbsp;&nbsp;&nbsp;${AnsiColor.BRIGHT_RED}：设置控制台中输出内容的颜色
&nbsp;&nbsp;&nbsp;&nbsp;${application.version}：用来获取 MANIFEST.MF 文件中的版本号
&nbsp;&nbsp;&nbsp;&nbsp;${application.formatted-version}：格式化后的 ${application.version} 版本信息
&nbsp;&nbsp;&nbsp;&nbsp;${spring-boot.version}：Spring Boot 的版本号
&nbsp;&nbsp;&nbsp;&nbsp;${spring-boot.formatted-version}：格式化后的 ${spring-boot.version} 版本信息

&nbsp;&nbsp;&nbsp;&nbsp; 本人授权[维权骑士](http://rightknights.com)对我发布文章的版权行为进行追究与维权。未经本人许可，不可擅自转载或用于其他商业用途。


 