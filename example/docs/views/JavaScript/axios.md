---
title: 二、Ajax、fetch、Axios总结
date: 2019-10-01 09:00:00
tags:
 - Vue.js
categories:
 - Vue.js
---
![AJAX](./AJAX.png)  
&nbsp;&nbsp;&nbsp;&nbsp;   * 1.1、**Ajax**<br/> 
&nbsp;&nbsp;&nbsp;&nbsp;Asynchronous JavaScript and XML，功能：不重新加载整个页面的情况下，可以与服务器交换数据并更新部分网页内容。
运用JavaScript操作DOM（Document Object Model）来执行动态效果<br/> 

&nbsp;&nbsp;&nbsp;&nbsp;XMLHttpRequest 对象<br/> 
         
      // js 原生写法
          var xmlHttp = new XMLHttpRequest();
          xmlHttp.open("POST", "/ajax_test/", true);
          xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
          xmlHttp.send("username=q1mi&password=123456");
          xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
              alert(xmlHttp.responseText);
            }
          };
&nbsp;&nbsp;&nbsp;&nbsp;   * 1.2、**ajax()**<br/> 
&nbsp;&nbsp;&nbsp;&nbsp;ajax异步很好理解，刷新是为了刷新浏览器局部地区，异步可保证其他地方可以正常渲染。改为同步，在请求后台的时候浏览器会挂起，等待响应。<br/> 
&nbsp;&nbsp;&nbsp;&nbsp;原生的js写法不方便，于是我们用jQuery 的 ajax() 方法，对XMLHttpRequest进行封装，一般的写法：<br/> 


        $("#ajaxTest").click(function () {
          $.ajax({
            url: "/ajax_test/",
            type: "POST",
            data: {username: "laughing", password: 123456},
            success: function (data) {
              alert(data)
            }
          })
        })
        
        $.ajax({
        	//发送请求地址（默认当前页地址）
        	url      : String,
        	//请求方式(默认get) 可选：get/post/put(部分)/delete(部分)
        	type     : String,
        	//延迟毫秒数
        	timeout  : Number,
        	//发送至服务器的数据
        	data     : Object/String,
        	//预期服务器返回类型 可选：xml/html/script/json/jsonp/text
        	dataType : String,
        	//发送前修改XMLHttpRequest对象函数
                //以下this均为本次调用Ajax传递的options参数
        	beforeSend : function(XMLHttpRequest){ this; },
        	//完成后的回调函数
        	complete : function(XMLHttpRequest,textStatus){ this; },
        	//调用成功的回调函数  data可能是html/text/.. 
        	success : function(data,textStatus){ this; }
        	//请求失败时返回的函数 通常后两个参数只有一个包含信息 
        	error : function(XMLHttpRequest,textStatus,errorThrown){ this;}
        	//是否出发全局Ajax事件
        	global: Boolean
        })


&nbsp;&nbsp;&nbsp;&nbsp;   * 2、**ES6 promise对象解决回调地狱**<br/>
 
&nbsp;&nbsp;&nbsp;&nbsp;在学习fetch、axios之前先学一下promise，用ajax异步的方法如果多层嵌套callback就很丑陋，你而promise对象是ES6异步编程的一种解决方案。<br/>
        
        $.ajax({
        success : function(res){ 
                 $.ajax({
                 success : function(res){ 
                        $.ajax({
                        success : function(res){   
                         }
                              })
                   }
                       })
          }
              })
                 //这样写就很难看 

&nbsp;&nbsp;&nbsp;&nbsp;Promise 对象代表一个异步操作，有三种状态：Pending（进行中）、Resolved（已完成，Fulfilled）和 Rejected（已失败）。<br/>

         var promise = new Promise(function(resolve, reject) {
          if (/* 异步操作成功 */){
          resolve(value);
          } else {
          reject(error);
          }
         });
         
         promise.then(function(value) {
          // success
         }, function(value) {
          // failure
         });
         //  嵌套
         const p = new Promise(function(resolve,reject){
           resolve(1);
         }).then(function(value){ // 第一个then // 1
           console.log(value);
           return value * 2;
         }).then(function(value){ // 第二个then // 2
           console.log(value);
         })
then 方法接收两个函数作为参数，第一个参数是 Promise 执行成功时的回调，第二个参数是 Promise 执行失败时的回调，两个函数只会有一个被调用。通过 .then 形式添加的回调函数，不论什么时候，都会被调用。<br/>
 
&nbsp;&nbsp;&nbsp;&nbsp;   * 3、**fetch**<br/>
&nbsp;&nbsp;&nbsp;&nbsp;fetch是基于promise设计的,不是ajax的进一步封装，而是原生js，没有使用XMLHttpRequest对象。<br/>


         fetch('https://xxxxxxxxx', {
             method: 'POST',
             body: JSON.stringify({
                 name: "ceido",
                 age: 100
             }),
             headers: {
               "Content-type": "application/json; charset=UTF-8"
             }
           })
           .then(response => response.json())
           .then(json => console.log(json))






&nbsp;&nbsp;&nbsp;&nbsp;   * 4、**axios**<br/>
&nbsp;&nbsp;&nbsp;&nbsp; axios还是从浏览器中创建 XMLHttpRequest，支持 Promise API，能客户端支持防止CSRF/XSRF，在vue中已经学过。<br/>

         axios.get('/xxxxxxxxxxx')
           .then(function (response) {
             console.log(response);
           })
           .catch(function (error) {
             console.log(error);
           });
           
           axios({
             method: 'post',
             url: '/user/12345',
             data: {
               firstName: 'Fred',
               lastName: 'Flintstone'
             }
           });
           //  并发请求
           function getUserAccount() {
             return axios.get('/xxxxxxxxxx1');
           }
           
           function getUserPermissions() {
             return axios.get('/xxxxxxxxxxx2');
           }
           
           axios.all([getUserAccount(), getUserPermissions()])
             .then(axios.spread(function (acct, perms) {
               // Both requests are now complete
             }));



























&nbsp;&nbsp;&nbsp;&nbsp; 本人授权[维权骑士](http://rightknights.com)对我发布文章的版权行为进行追究与维权。未经本人许可，不可擅自转载或用于其他商业用途。


 