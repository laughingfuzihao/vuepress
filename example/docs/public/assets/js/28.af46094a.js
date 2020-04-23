(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{334:function(n,t,e){n.exports=e.p+"assets/img/AJAX.c43df5c7.png"},434:function(n,t,e){"use strict";e.r(t);var s=e(3),a=Object(s.a)({},(function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("p",[s("img",{attrs:{src:e(334),alt:"AJAX"}}),s("br"),n._v("\n       * 1.1、"),s("strong",[n._v("Ajax")]),s("br"),n._v("\n    Asynchronous JavaScript and XML，功能：不重新加载整个页面的情况下，可以与服务器交换数据并更新部分网页内容。\n运用JavaScript操作DOM（Document Object Model）来执行动态效果"),s("br")]),n._v(" "),s("p",[n._v("    XMLHttpRequest 对象"),s("br")]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[n._v('  // js 原生写法\n      var xmlHttp = new XMLHttpRequest();\n      xmlHttp.open("POST", "/ajax_test/", true);\n      xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");\n      xmlHttp.send("username=q1mi&password=123456");\n      xmlHttp.onreadystatechange = function () {\n        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {\n          alert(xmlHttp.responseText);\n        }\n      };\n')])])]),s("p",[n._v("       * 1.2、"),s("strong",[n._v("ajax()")]),s("br"),n._v("\n    ajax异步很好理解，刷新是为了刷新浏览器局部地区，异步可保证其他地方可以正常渲染。改为同步，在请求后台的时候浏览器会挂起，等待响应。"),s("br"),n._v("\n    原生的js写法不方便，于是我们用jQuery 的 ajax() 方法，对XMLHttpRequest进行封装，一般的写法："),s("br")]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[n._v('    $("#ajaxTest").click(function () {\n      $.ajax({\n        url: "/ajax_test/",\n        type: "POST",\n        data: {username: "laughing", password: 123456},\n        success: function (data) {\n          alert(data)\n        }\n      })\n    })\n    \n    $.ajax({\n    \t//发送请求地址（默认当前页地址）\n    \turl      : String,\n    \t//请求方式(默认get) 可选：get/post/put(部分)/delete(部分)\n    \ttype     : String,\n    \t//延迟毫秒数\n    \ttimeout  : Number,\n    \t//发送至服务器的数据\n    \tdata     : Object/String,\n    \t//预期服务器返回类型 可选：xml/html/script/json/jsonp/text\n    \tdataType : String,\n    \t//发送前修改XMLHttpRequest对象函数\n            //以下this均为本次调用Ajax传递的options参数\n    \tbeforeSend : function(XMLHttpRequest){ this; },\n    \t//完成后的回调函数\n    \tcomplete : function(XMLHttpRequest,textStatus){ this; },\n    \t//调用成功的回调函数  data可能是html/text/.. \n    \tsuccess : function(data,textStatus){ this; }\n    \t//请求失败时返回的函数 通常后两个参数只有一个包含信息 \n    \terror : function(XMLHttpRequest,textStatus,errorThrown){ this;}\n    \t//是否出发全局Ajax事件\n    \tglobal: Boolean\n    })\n')])])]),s("p",[n._v("       * 2、"),s("strong",[n._v("ES6 promise对象解决回调地狱")]),s("br")]),n._v(" "),s("p",[n._v("    在学习fetch、axios之前先学一下promise，用ajax异步的方法如果多层嵌套callback就很丑陋，你而promise对象是ES6异步编程的一种解决方案。"),s("br")]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[n._v("    $.ajax({\n    success : function(res){ \n             $.ajax({\n             success : function(res){ \n                    $.ajax({\n                    success : function(res){   \n                     }\n                          })\n               }\n                   })\n      }\n          })\n             //这样写就很难看 \n")])])]),s("p",[n._v("    Promise 对象代表一个异步操作，有三种状态：Pending（进行中）、Resolved（已完成，Fulfilled）和 Rejected（已失败）。"),s("br")]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[n._v("     var promise = new Promise(function(resolve, reject) {\n      if (/* 异步操作成功 */){\n      resolve(value);\n      } else {\n      reject(error);\n      }\n     });\n     \n     promise.then(function(value) {\n      // success\n     }, function(value) {\n      // failure\n     });\n     //  嵌套\n     const p = new Promise(function(resolve,reject){\n       resolve(1);\n     }).then(function(value){ // 第一个then // 1\n       console.log(value);\n       return value * 2;\n     }).then(function(value){ // 第二个then // 2\n       console.log(value);\n     })\n")])])]),s("p",[n._v("then 方法接收两个函数作为参数，第一个参数是 Promise 执行成功时的回调，第二个参数是 Promise 执行失败时的回调，两个函数只会有一个被调用。通过 .then 形式添加的回调函数，不论什么时候，都会被调用。"),s("br")]),n._v(" "),s("p",[n._v("       * 3、"),s("strong",[n._v("fetch")]),s("br"),n._v("\n    fetch是基于promise设计的,不是ajax的进一步封装，而是原生js，没有使用XMLHttpRequest对象。"),s("br")]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[n._v('     fetch(\'https://xxxxxxxxx\', {\n         method: \'POST\',\n         body: JSON.stringify({\n             name: "ceido",\n             age: 100\n         }),\n         headers: {\n           "Content-type": "application/json; charset=UTF-8"\n         }\n       })\n       .then(response => response.json())\n       .then(json => console.log(json))\n')])])]),s("p",[n._v("       * 4、"),s("strong",[n._v("axios")]),s("br"),n._v("\n     axios还是从浏览器中创建 XMLHttpRequest，支持 Promise API，能客户端支持防止CSRF/XSRF，在vue中已经学过。"),s("br")]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[n._v("     axios.get('/xxxxxxxxxxx')\n       .then(function (response) {\n         console.log(response);\n       })\n       .catch(function (error) {\n         console.log(error);\n       });\n       \n       axios({\n         method: 'post',\n         url: '/user/12345',\n         data: {\n           firstName: 'Fred',\n           lastName: 'Flintstone'\n         }\n       });\n       //  并发请求\n       function getUserAccount() {\n         return axios.get('/xxxxxxxxxx1');\n       }\n       \n       function getUserPermissions() {\n         return axios.get('/xxxxxxxxxxx2');\n       }\n       \n       axios.all([getUserAccount(), getUserPermissions()])\n         .then(axios.spread(function (acct, perms) {\n           // Both requests are now complete\n         }));\n")])])]),s("p",[n._v("     本人授权"),s("a",{attrs:{href:"http://rightknights.com",target:"_blank",rel:"noopener noreferrer"}},[n._v("维权骑士"),s("OutboundLink")],1),n._v("对我发布文章的版权行为进行追究与维权。未经本人许可，不可擅自转载或用于其他商业用途。")])])}),[],!1,null,null,null);t.default=a.exports}}]);