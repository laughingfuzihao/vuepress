(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{337:function(e,t,n){e.exports=n.p+"assets/img/el1.e8ccf5b6.png"},338:function(e,t,n){e.exports=n.p+"assets/img/page1.2c8c432f.png"},339:function(e,t,n){e.exports=n.p+"assets/img/page2.6f485354.png"},440:function(e,t,n){"use strict";n.r(t);var a=n(3),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("    之前写了一个微博热搜的数据抓取工具，把微博热搜存到mysql数据库中，为了方便查询大量的列表数据，就做了\n一个Element-ui（vue）+Springboot+Pagehelper简单的前后端分离分页查询的页面。这样就可以这个月最高的热搜是什么之类的。"),a("br"),e._v("\n    效果如图："),a("br"),e._v(" "),a("img",{attrs:{src:n(337),alt:"logo"}}),e._v(" "),a("br"),e._v("\n    首先看Element-ui的table写法："),a("br")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('<el-table\n  id="xxx"\n  stripe\n  height="450"    //锁死高度\n  :data="list"    //绑定data数据\n  @sort-change=\'sortChange\' //升降序改变用到的方法\n  style="width: 100%">\n<el-table-column\n  sortable="custom"  //可以升降排序\n  prop="xxx"\n  width="180">\n</el-table-column>\n</el-table>\n')])])]),a("p",[e._v("    首先看Element-ui分页器el-pagination："),a("br")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('<el-pagination\n  style="margin-top:15px;"\n  background\n  layout="prev, pager, next"\n  :current-page.sync="pagination.page" //第几页\n  :page-size.sync="pagination.size" //一页显示几条\n  :total="pagination.count"        //数据总条数\n  @current-change="handleCurrentChange">\n</el-pagination>\n')])])]),a("p",[e._v("    需要绑定的data："),a("br")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("            currentPage: 1, //初始页\n            pagesize: 5,    //    每页的数据\n            pagination: {\n                page: 1,\n                size: 5,\n                count: 0,\n                orderby: ''  //升降序\n            },\n")])])]),a("p",[e._v("    发起axios的post请求："),a("br")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('            this.axios.post(this.HOME2 + "/ipa/weibo/list", this.qs.stringify(this.pagination))\n                .then(res => {\n                    this.list = res.data.data.list;\n                    this.pagination.count = res.data.data.total;\n                })\n')])])]),a("p",[e._v("    Springboot后台："),a("br")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('@PostMapping("/list")\npublic Result list(@RequestParam(defaultValue = "0") Integer page, @RequestParam(defaultValue = "0") Integer size,@RequestParam(defaultValue = "")String orderby) {\n    PageHelper.startPage(page, size ,orderby);\n    List<Weibo> list = weiboService.findAll();\n    PageInfo pageInfo = new PageInfo(list);\n    return ResultGenerator.genSuccessResult(pageInfo);\n}\n')])])]),a("p",[e._v("    我们看看pageInfo返回的分页数据，比如我现在请求第三页："),a("br"),e._v("\n    传入数据page=3 size=5"),a("br"),e._v(" "),a("img",{attrs:{src:n(338),alt:"logo"}}),e._v(" "),a("br"),e._v("\n    前台返回数据："),a("br"),e._v(" "),a("img",{attrs:{src:n(339),alt:"logo"}}),e._v(" "),a("br"),a("br"),a("br")]),e._v(" "),a("p",[e._v("    到这里还没完，我们要实现order by按字段排序，首先\n在el-table-column中加一个属性sortable=\"custom\"，再声明table里升降序方法@sort-change='sortChange'"),a("br")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("        sortChange(column, prop, order) {\n            if (column.order == \"ascending\") {\n                    this.pagination.orderby = column.prop + ' ' + 'ASC';\n            } else {\n\n                    this.pagination.orderby = column.prop + ' ' + 'DESC';\n            }\n            this.weibo.length = 0;\n            this.axios.post(this.HOME2 + \"/weibo/list\", this.qs.stringify(this.pagination))\n                .then(res => {\n                    this.list = res.data.data.list;\n                    this.pagination.count = res.data.data.total;\n                })\n        },\n")])])]),a("p",[e._v("    后台"),a("code",[e._v("PageHelper.startPage(page, size ,orderby);")]),e._v("传入的orderby\n字段的格式为  xxxx ASC或 xxxx DESC,而element-ui table 生成的是ascending这种，注意转换一下。\n即可完成查询。")]),e._v(" "),a("p",[e._v("     本人授权"),a("a",{attrs:{href:"http://rightknights.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("维权骑士"),a("OutboundLink")],1),e._v("对我发布文章的版权行为进行追究与维权。未经本人许可，不可擅自转载或用于其他商业用途。")])])}),[],!1,null,null,null);t.default=s.exports}}]);