---
title: checkbox disable后表单提交value为null
date: 2019-12-06
tags:
 - JavaScript
categories:
 - JavaScript
---
&nbsp;&nbsp;&nbsp;&nbsp;在使用checkbox时，disable后表单提交value为null。有什么方法能让disable的情况下也能拿到
checkbox的数值呢？<br>
&nbsp;&nbsp;&nbsp;&nbsp;想了几种解决方案<br>
&nbsp;&nbsp;&nbsp;&nbsp;换成readonly,但是点击这个checkbox会触发事件，业务要求不能触发 <br>
&nbsp;&nbsp;&nbsp;&nbsp;再写一个hidden的input来提交数值，但是每个checkbox都要改，很麻烦 <br>
         
    <input type="hidden" value="xxxxxx">

&nbsp;&nbsp;&nbsp;&nbsp;来转变一下思路，不一定非要在属性上改 <br>
         
    　　$('#xxxx').on('click',function() {
    　　　　if()
    　　　　　　return false;
    
    　　　　if()
    　　　　　　return true;
    　　});
 也算是曲线救国了。。。。

&nbsp;&nbsp;&nbsp;&nbsp; 本人授权[维权骑士](http://rightknights.com)对我发布文章的版权行为进行追究与维权。未经本人许可，不可擅自转载或用于其他商业用途。


 