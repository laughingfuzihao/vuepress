---
title: 一、ES6学习笔记
date: 2019-10-01 08:00:00
tags:
 - Vue.js
categories:
 - Vue.js
---
![es6](./ES6.png)  
&nbsp;&nbsp;&nbsp;&nbsp;ES6，全称 ECMAScript 6.0，是 JavaScript 的一个版本标准,后来就代指ES2015+以后的版本。它虽然是一个标准，但ES6添加了许多新的语法特性。<br>
   * **1、兼容性与新特性**<br/>
&nbsp;&nbsp;&nbsp;&nbsp;各大浏览器基本上都支持 ES6 ，IE7~11 基本不支持 ES6，chrome、firefox、Node.js、移动端可用。<br>
&nbsp;&nbsp;&nbsp;&nbsp;**为解决兼容问题可使用Bebal**，是一种提前编译的方式，Bebal转码就是将es6代码转化为es5代码的包，用于一些不支持es6的场景，让低版本浏览器看得懂。<br>
&nbsp;&nbsp;&nbsp;&nbsp;我们主要看ES6新增的语法糖，语法特性。比如新的变量、函数用法、promise、generator、模块化等<br>
   * **2、let 与 const**<br/>
&nbsp;&nbsp;&nbsp;&nbsp;**let 是在代码块内有效，var 是在全局范围内有效**<br/>
&nbsp;&nbsp;&nbsp;&nbsp;**let 只能声明一次 var 可以声明多次**<br/>
&nbsp;&nbsp;&nbsp;&nbsp;**let 不存在变量提升 需要先定义，不然会报错**<br/>
         
    console.log(a);  //ReferenceError: a is not defined
    let a = "apple";
     
    console.log(b);  //undefined
    var b = "banana";
    
    let a = 'xxx'
     a = 'yyy' //重新赋值
     
     {
       let a = 0;
       var b = 1;
     }
     a  // ReferenceError: a is not defined
     b  // 1  解决计数器困境
&nbsp;&nbsp;&nbsp;&nbsp;const就相当于static final吧，**不能重复声明**。<br/>
         
    const PI = "3.1415926";
  
   * **3、箭头函数**<br/>
&nbsp;&nbsp;&nbsp;&nbsp;箭头函数就是一种函数的简写，只需记住两点。<br/>
&nbsp;&nbsp;&nbsp;&nbsp;**如果只有一个参数，（ ）可以省略**<br/> 
&nbsp;&nbsp;&nbsp;&nbsp;**如果只有一个return，{ }可省略**<br/> 

         
    let show = function () {
    
    };
    let show = () => {
    
    };
    
    let show = function (a,b) => {
        alert(a+b);
    };    
    let show = (a,b){
        alert(a+b)
    };

    //简写：如果只有一个参数，（）可以省略
    let show = function (a) {
        return a*a
    };
    let show = a => {
        return a*a
    };
    //如果只有一个return，{}可省略
    let show = a => a*a

   * **4、函数参数**<br/>
&nbsp;&nbsp;&nbsp;&nbsp;函数参数扩展,**不定参数**。args必须是最后一个参数<br/>
         
    let show = function (a,b,c ...args){
        alert(args);
    }
    // 数组中 可展开数组
    let show = function (a,b,c){
        alert(a);
        alert(b);
        alert(c);
    }    
    show (1,2,3);
    
    let arr = [1,2,3];
    show(...arr);
&nbsp;&nbsp;&nbsp;&nbsp;**默认参数，在函数不传参数时，可加一个默认值。**<br/>   
          
    let show = function (a,b =5,c=6){
            alert(a，b，c);
    }  
    show(1,7); // 可覆盖默认值
   
   * **5、解构赋值**<br/>
&nbsp;&nbsp;&nbsp;&nbsp;赋值时，左右结构保持一致，且必须首次初始化赋值。<br/> 
         
    let [a, b, c] = [1, 2, 3];
    let {a,b,c} = {a:1,b:2,c:3}
    //注意json合法写法
    let [{a,b},[n1,n2,n3],str] = [{a:1,b:2},[1,2,3].'str']
    let [json,arr,str] = [{a:1,b:2},[1,2,3].'str']
    
    let [a, , b] = [1, 2, 3];
    // a = 1
    // b = 3
    
   * **6、数组**<br/>
&nbsp;&nbsp;&nbsp;&nbsp;**map映射方法**
         
    [1,2,3,4,5]
    [a,b,c,d,e]
    let arr = [12,5,8];  //12,5,5
    let a = arr.map(a => a*2)；  //24，10，10
&nbsp;&nbsp;&nbsp;&nbsp;**reduce汇总方法**
         
    let arr = [1,2,3,4,5];
    arr.reduce(function(tmp,item,index){
    
    });
&nbsp;&nbsp;&nbsp;&nbsp;**filter过滤方法**

    let arr = [1,2,3,4,5,6];
    let result = arr.filter(item => item%3==0); // 3,6

&nbsp;&nbsp;&nbsp;&nbsp;**forEach迭代方法**

    let arr = [1,2,3,4,5,6];
    let result = arr.foreach(item => {
        alert(item);
    });


   * **7、字符串**<br/>
&nbsp;&nbsp;&nbsp;&nbsp;两个新的方法<br/> 

    let str = "xasdafaw"
    str.startwith("x");  //ture
    str.endwith("w");  //false  比如判断扩展名
    
 &nbsp;&nbsp;&nbsp;&nbsp;字符串模板<br/> 

    let x = "b";
    let str = `a${x}c` \\ abc
    
   * **8、json**<br/>
&nbsp;&nbsp;&nbsp;&nbsp;JSON对象<br/> 

    let json = {a:1,b:2};
    json.stringify  //转字符串
    let str = '{"a":1,"b":2}'
    let json = JSON.parse(str) //转json
    ES6提供简写的方式
    let str = {a:a,b:b}; // key和value一致
    let str = {a,b};
   
   
   * **9、面向对象**<br/>

    class User{         // 类似于java
        constructor(name,age){ //构造器
            this.name=name;
            this.age=age;
        }
        showName(){         //构造方法
            return this.name;
        }
    }
    
    let user1 = User("xxx","23");
    user1.showName();
    //  继  承
    class VipUser extends User{
        constructor(name,age,level){ //构造器
            super(name,age); //执行父类构造函数
            this.level=level;
        }    
        showLevel(){         //构造方法
            return this.level;
        }        
    }



   * **10、promise**<br/>
&nbsp;&nbsp;&nbsp;&nbsp;Promise 是一个对象，从它可以获取异步操作的消息。可了解fetch方法解决ajax回调地狱的文章。<br/>    
    
    // Promise 对象
    let p = new promise(function (resolve,reject){ 
          //resolve成功 reject失败

    // ajax 原来的写法
    $("#ajaxTest").click(function () {
      $.ajax({
        url: "/ajax_test/",
        type: "POST",
        data: {username: "laughing", password: 123456},
        success: function (data) {
          resolve(data)；
        }，
        error:(err){
          reject(err);
        }
      })
    })
    // Promise
     p.then(function(value) {
      // success
     }, function(value) {
      // failure
     });
    
     }) 
&nbsp;&nbsp;&nbsp;&nbsp;当有两个Promise对象时，就可解决回调地狱的问题。<br>
    
    // Promise 对象 等两个异步操作都执行完。
    let p1 = new promise(function (resolve,reject){ }
    let p2 = new promise(function (resolve,reject){ }
    
    promise.all([p1,p2]).then(function(arr) {
        // success 全部成功
        let [res1,res2] = arr;
     }, function(value) {
       // failure 至少一个失败
     });
     }) 
     
     promise.race()  // 竞争 读第一个成功的异步请求
     
     
     // axios支持的promise
       axios.all([getUserAccount(), getUserPermissions()])
         .then(axios.spread(function (acct, perms) {
           // Both requests are now complete
         }));     

   
   * **11、generator 生成器**<br/>
   
&nbsp;&nbsp;&nbsp;&nbsp;generator可以通过 yield 关键字，把函数的执行流挂起。可等待异步操作而挂起。<br>
    
    function * show(){
        alert('a');
        yield;  // 放弃执行
        alert('b');
    }

    let genObj = show();
    genObj.next();  // a
    genObj.next();  // b
    
    
    
    


   * **持续更新中**<br/>
















&nbsp;&nbsp;&nbsp;&nbsp; 本人授权[维权骑士](http://rightknights.com)对我发布文章的版权行为进行追究与维权。未经本人许可，不可擅自转载或用于其他商业用途。


 