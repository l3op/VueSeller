webpackJsonp([74],{1055:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n=e(437);o.default={name:"info",data:function(){return{value:0,option:[{label:"-全平台-",value:0},{label:"facebook",value:1},{label:"twitter",value:2},{label:"海关",value:3}],info:{},port:[],fb:[],tw:[],ln:[],key:Number,words:"",params:{}}},created:function(){},mounted:function(){this.words=this.$route.query.searchText,this.params={keywords:this.words,userId:window.localStorage.userId},this.allInfo(this.params)},components:{},methods:{allInfo:function(t){var o=this;n.a.companyList(t).then(function(t){o.info=t.data.data.records})},addCom:function(t){var o=this,e={socialAccountId:t.socialAccountId,name:t.name,url:t.url,platform:t.platform,keywords:this.$route.query.searchText,avatar:t.avatar,location:t.location,mail:t.mail,telephone:t.telephone,homepageType:t.socialAccountType,product:t.product,desc:t.desc,industry:t.industry,domain:t.domain};n.a.addCompany(e).then(function(t){0===t.data.code?o.$message.success("添加成功"):o.$message.error("添加失败")})},change:function(t){var o=this;if(0===t)this.allInfo(this.params);else{1===t&&(this.key=0),2===t&&(this.key=1),3===t&&(this.key=3);var e={keywords:this.$route.query.searchText,userId:window.localStorage.userId,platform:this.key};n.a.companyList(e).then(function(t){o.info=t.data.data.records})}},showDetail:function(t){this.$router.push({path:"/companyDetail",query:{companyId:t}})}}}},1272:function(t,o,e){o=t.exports=e(88)(),o.push([t.i,".info .port[data-v-7ceed760]{width:100%;border:1px solid #ccc;background:#fff;margin-bottom:10px;padding-bottom:20px;cursor:pointer}.info .port .one[data-v-7ceed760]{width:100%;margin:0 auto}","",{version:3,sources:["/Users/kaijieqian/longxiWorkspace/b2b-seller4.0/src/views/explore/cpnts/search.vue"],names:[],mappings:"AACA,6BACE,WAAY,AACZ,sBAAuB,AACvB,gBAAiB,AACjB,mBAAoB,AACpB,oBAAqB,AACrB,cAAgB,CACjB,AACD,kCACE,WAAY,AACZ,aAAe,CAChB",file:"search.vue",sourcesContent:["\n.info .port[data-v-7ceed760] {\n  width: 100%;\n  border: 1px solid #ccc;\n  background: #fff;\n  margin-bottom: 10px;\n  padding-bottom: 20px;\n  cursor: pointer;\n}\n.info .port .one[data-v-7ceed760] {\n  width: 100%;\n  margin: 0 auto;\n}\n"],sourceRoot:""}])},1460:function(t,o,e){var n=e(1272);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e(316)("7a20ef06",n,!0)},1769:function(t,o){t.exports={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"info"},[e("el-select",{on:{change:function(o){t.change(t.value)}},model:{value:t.value,callback:function(o){t.value=o},expression:"value"}},t._l(t.option,function(t,o){return e("el-option",{key:o,attrs:{label:t.label,value:t.value}})})),t._v(" "),t.info.length?t._l(t.info,function(o){return e("div",[3==o.platform?e("div",{staticClass:"port"},[e("div",{staticClass:"one"},[e("div",{staticClass:"img",staticStyle:{width:"64px",height:"64px"},on:{click:function(e){t.showDetail(o.socialAccountId)}}},[e("img",{attrs:{src:o.avatar,alt:""}})]),t._v(" "),e("button",{on:{click:function(e){t.addCom(o)}}},[t._v("添加联系")]),t._v(" "),e("div",{staticClass:"main"},[e("h3",[t._v(t._s(o.name))]),e("span",[t._v("海关")]),t._v(" "),e("p",[t._v(t._s(o.desc))])])])]):t._e(),t._v(" "),0==o.platform?e("div",{staticClass:"fb",staticStyle:{"border-bottom":"1px solid gray","margin-bottom":"10px"}},[e("div",{staticClass:"one"},[e("div",{staticClass:"img",on:{click:function(e){t.showDetail(o.socialAccountId)}}},[e("img",{attrs:{src:o.avatar,alt:""}})]),t._v(" "),e("button",{on:{click:function(e){t.addCom(o)}}},[t._v("添加联系")]),t._v(" "),e("div",{staticClass:"main"},[e("p",[t._v(t._s(o.name))]),t._v(" "),e("p",[e("span",[t._v("链接")]),e("span",[t._v(t._s(o.url))])]),t._v(" "),e("p",[e("span",[t._v("主页类型")]),e("span",[t._v(t._s(o.domain))])])])])]):t._e(),t._v(" "),1==o.platform?e("div",{staticClass:"tw"},[e("div",{staticClass:"one"},[e("div",{staticClass:"img",on:{click:function(e){t.showDetail(o.socialAccountId)}}},[e("img",{attrs:{src:o.avatar,alt:""}})]),t._v(" "),e("button",{on:{click:function(e){t.addCom(o)}}},[t._v("添加联系")]),t._v(" "),e("div",{staticClass:"main"},[e("p",[t._v(t._s(o.name))]),t._v(" "),e("p",[e("span",[t._v("链接")]),e("span",[t._v(t._s(o.url))])]),t._v(" "),e("p",[e("span",[t._v("主页类型")]),e("span",[t._v(t._s(o.domain))])]),t._v(" "),e("p",[t._v("被关注："),e("span",[t._v(t._s(o.followCount))])]),t._v(" "),e("p",[t._v("被点赞："),e("span",[t._v(t._s(o.likeCount))])])])])]):t._e()])}):e("div",[t._v("\n    暂无数据\n  ")])],2)},staticRenderFns:[]}},359:function(t,o,e){e(1460);var n=e(89)(e(1055),e(1769),"data-v-7ceed760",null);t.exports=n.exports},437:function(t,o,e){"use strict";var n=e(10),a={getPpcList:function(t){return n.a.get("https://server.onloon.cc/bshop/purchaser/recommendation/list",t)},addPpc:function(t){return n.a.post("https://server.onloon.cc/bshop/contacts/person/add",t)},getPpcDetail:function(t){return n.a.get("https://server.onloon.cc/bshop/purchaser/recommendation/detail",t)},getLeads:function(t){return n.a.get("https://server.onloon.cc/bshop/client/recommend/list",t)},addLeads:function(t){return n.a.post("https://server.onloon.cc/bshop/explore/recommend/add",t)},removeContact:function(t){return n.a.post("https://server.onloon.cc/bshop/explore/recommend/remove",t)},companyList:function(t){return n.a.get("https://server.onloon.cc/bshop/explore/company/list",t)},addCompany:function(t){return n.a.post("https://server.onloon.cc/bshop/explore/company/add",t)},addCompanyNow:function(t){return n.a.post("https://server.onloon.cc/bshop/contacts/social/add",t)},getCompanyDetail:function(t){return n.a.get("https://server.onloon.cc/bshop/contacts/company/detail",t)},getSearchResult:function(t){return n.a.get("https://server.onloon.cc/bshop/client/search/list",t)},getCountry:function(t){return n.a.post("https://server.onloon.cc/bshop/config/dict/list",t)},getCompany:function(t){return n.a.get("https://server.onloon.cc/bshop/client/company/detail",t)},getStaffList:function(t){return n.a.get("https://server.onloon.cc/bshop/client/company/employee/list",t)},getLeadList:function(t){return n.a.get("https://server.onloon.cc/bshop/purchaser/detailList",t)},getStaffDetail:function(t){return n.a.get("https://server.onloon.cc/bshop/client/employee/detail",t)},getFbRecommend:function(t){return n.a.get("https://server.onloon.cc/bshop/explore/recommend/fbSearch",t)},getEmail:function(t){return n.a.get("https://server.onloon.cc/bshop/client/hunter/findemail",t)},addContact:function(t){return n.a.post("https://server.onloon.cc/bshop/client/contacts/add",t)},searchCompany:function(t){return n.a.get("https://server.onloon.cc/bshop/explore/company/list",t)}};o.a=a}});
//# sourceMappingURL=74.a35fe4b26be84374aab8.js.map