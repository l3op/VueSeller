webpackJsonp([60],{1051:function(a,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(408),t=e.n(i),o=e(437);n.default={name:"explore",data:function(){return{ppcData:{records:[]},leadData:[],allList:[],telphone:[],mails:"",sociaes:[],display:!0,nowIndex:12,showReturn:!1,searchText:""}},components:{exploreAPI:o.a},mounted:function(){var a={type:1,page:1,size:10};this.ppcList(a),this.leadsList({userId:window.localStorage.userId})},methods:{ppcList:function(a){var n=this;o.a.getPpcList(a).then(function(a){0===a.data.code&&(n.ppcData=a.data.data)})},leadsList:function(a){var n=this;o.a.getLeads(a).then(function(a){if(0===a.data.code&&null!==a.data.data){for(var e=0;e<a.data.data.length;e++)0===a.data.data[e].isAdded&&n.allList.push(a.data.data[e]);n.allList.length>12?n.leadData=n.allList.slice(0,12):n.leadData=a.data.data}})},addPerson:function(a){var n=this;if(null!==a.phone&&""!==a.phone){var e={type:8,telephone:a.phone};this.telphone.push(e)}if(null!==a.telephone&&""!==a.telephone){var i={type:2,telephone:a.telephone};this.telphone.push(i)}if(null!==a.fax&&""!==a.fax){var p={type:7,telephone:a.fax};this.telphone.push(p)}if(this.telphone.length>0&&(this.telphone=t()(this.telphone)),null!==a.email&&""!==a.email){var d={type:0,telephone:a.email};this.mails=t()([d])}if(null!==a.facebookHomepage&&""!==a.facebookHomepage){var l={platform:0,url:a.facebookHomepage};this.sociaes.push(l)}if(null!==a.twitterHomepage&&""!==a.twitterHomepage){var s={platform:1,url:a.twitterHomepage};this.sociaes.push(s)}if(null!==a.linkedInHomepage&&""!==a.linkedInHomepage){var A={platform:2,url:a.linkedInHomepage};this.sociaes.push(A)}this.sociaes.length>0&&(this.sociaes=t()(this.sociaes));var r={purchaserId:a.purchaerId,firstName:a.name,department:a.department,companyName:a.companyName,position:a.position,telephones:this.telphone,mails:this.mails,sociaes:this.sociaes,createSource:"ppc_create"};o.a.addPpc(r).then(function(a){1===a.data.code&&n.$message.success("添加成功")})},addContact:function(a,n){var e=this,i={recommendForUserId:a,socialAccountType:n};o.a.addLeads(i).then(function(a){0===a.data.code?e.$message.success("添加成功"):e.$message.error("添加失败")})},removePerson:function(a,n){var e=this,i={recommendForUserId:a,userId:window.localStorage.userId};o.a.removeContact(i).then(function(a){0===a.data.code?(e.nowIndex<e.allList.length-1?(e.leadData.splice(n,1,e.allList[e.nowIndex]),e.nowIndex++):e.leadData.splice(n,1),e.$message.success("移除成功")):e.$message.error("移除失败")})},jump:function(){this.$router.push({path:"/ppcList"})},search:function(){""===this.searchText?this.$message.warning("请输入内容"):this.$router.push({path:"/search",query:{searchText:this.searchText}})},portSea:function(a){alert(111)}}}},1146:function(a,n,e){n=a.exports=e(88)(),n.push([a.i,"body[data-v-1257835a]{margin:0 auto}body .ppcContainer .head[data-v-1257835a]{padding-left:20px;height:60px;line-height:60px;font-weight:700;background-color:#fff;border-bottom:1px solid #e4e4e4;font-size:14px}body .ppcContainer .search[data-v-1257835a]{margin:10px auto;background:#fff;border:1px solid #d8d8d8;width:1000px}body .ppcContainer .search .in-text[data-v-1257835a]{width:880px;height:50px;border:none}body .ppcContainer .search .en-search[data-v-1257835a]{display:inline-block;height:52px;width:120px;background:#f0f0f0;padding:0;border:none}body .ppcContainer .main[data-v-1257835a]{width:100%;height:3000px;background:#f0f0f0;padding:10px 20px 0}body .ppcContainer .main .ppc-main[data-v-1257835a]{margin-top:0;position:relative;height:200px}body .ppcContainer .main ul[data-v-1257835a]{list-style:none;padding:0}body .ppcContainer .main .ppc-main .ppcUl li[data-v-1257835a]{width:24%;float:left;height:100%;box-shadow:1px 1px 2px #ccc;padding-bottom:20px;background:#fff;margin-right:.5%;margin-left:.5%;margin-bottom:22px;position:relative;overflow:hidden}body .ppcContainer .main .ppc-main .ppcUl li .icon-new[data-v-1257835a]{position:absolute;color:#83c94a;font-size:38px}body .ppcContainer .main .ppc-main .ppcUl li .cards[data-v-1257835a]{margin:20px 20px 0;overflow:hidden;position:relative}body .ppcContainer .main .ppc-main .ppcUl li .cards .img-box[data-v-1257835a]{width:40px;height:40px;overflow:hidden;cursor:pointer;vertical-align:top;background:pink;position:absolute}body .ppcContainer .main .ppc-main .ppcUl li .cards .info-box[data-v-1257835a]{display:inline-block;padding-left:56px;font-size:12px}body .ppcContainer .main .ppc-main .ppcUl li .cards .info-box p[data-v-1257835a]{height:14px}body .ppcContainer .main .ppc-main .ppcUl li .cards .info-box .one-line[data-v-1257835a]{margin-top:0;font-weight:600}body .ppcContainer .main .ppc-main .ppcUl li .cards .info-box .one-line .name[data-v-1257835a]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:19px;cursor:pointer}body .ppcContainer .main .ppc-main .ppcUl li .cards .info-box .one-line .add[data-v-1257835a]{position:absolute;right:0;top:1px;font-size:20px;color:red;cursor:pointer}body .ppcContainer .main .ppc-main .ppcUl li .cards .info-box .char-limit[data-v-1257835a]{width:80%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}body .ppcContainer .main .ppc-main .ppcUl li .cards .info-box .describe[data-v-1257835a]{margin-top:10px;word-break:break-all;width:94%;max-height:50px;overflow:hidden;min-height:50px;display:-webkit-box}body .ppcContainer .main .ppc-main .ppcUl li .cards .info-box .describe .ppc-icon[data-v-1257835a]{color:#3b5998;vertical-align:middle}body .ppcContainer .main .leads-title[data-v-1257835a]{margin-top:0;position:relative}body .ppcContainer .main .leads-main .leadsUl li[data-v-1257835a]{width:24%;float:left;height:100%;box-shadow:1px 1px 2px #ccc;padding-bottom:20px;background:#fff;margin-right:.5%;margin-left:.5%;margin-bottom:22px;position:relative;overflow:hidden}body .ppcContainer .main .leads-main .leadsUl li .lead-card[data-v-1257835a]{margin:20px 20px 0;overflow:hidden;position:relative}body .ppcContainer .main .leads-main .leadsUl li .lead-card .lead-img[data-v-1257835a]{width:40px;vertical-align:top;position:absolute;height:40px;cursor:pointer;overflow:hidden;background:pink}body .ppcContainer .main .leads-main .leadsUl li .lead-card .lead-img img[data-v-1257835a]{width:100%}body .ppcContainer .main .leads-main .leadsUl li .lead-card .lead-img .lead-icon[data-v-1257835a]{position:absolute;bottom:0;right:0;background:#fff;z-index:22;color:#3b5998}body .ppcContainer .main .leads-main .leadsUl li .lead-card .lead-info[data-v-1257835a]{display:inline-block;padding-left:56px}body .ppcContainer .main .leads-main .leadsUl li .lead-card .lead-info .first[data-v-1257835a]{font-size:12px;font-weight:600;margin-top:0}body .ppcContainer .main .leads-main .leadsUl li .lead-card .lead-info .first .name[data-v-1257835a]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:19px;cursor:pointer}body .ppcContainer .main .leads-main .leadsUl li .lead-card .lead-info .first .port[data-v-1257835a]{width:20px;height:12px;background:orange;border-radius:6px}body .ppcContainer .main .leads-main .leadsUl li .lead-card .lead-info .first .operation[data-v-1257835a]{position:absolute;right:0;top:1px}body .ppcContainer .main .leads-main .leadsUl li .lead-card .lead-info .first .operation .del[data-v-1257835a]{font-size:19px;box-sizing:border-box;cursor:pointer;color:gray}body .ppcContainer .main .leads-main .leadsUl li .lead-card .lead-info .first .operation .add[data-v-1257835a]{font-size:19px;box-sizing:border-box;color:red;cursor:pointer}body .ppcContainer .main .leads-main .leadsUl li .lead-card .lead-info .describe[data-v-1257835a]{font-size:12px;margin-top:10px;word-break:break-all;width:94%;max-height:50px;overflow:hidden;min-height:50px;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3}body .ppcContainer .main .leads-main .leadsUl li .lead-card .lead-foot[data-v-1257835a]{font-size:12px;border-top:1px dotted #d8d8d8;margin-top:10px;padding-top:10px}body .ppcContainer .main .leads-main .leadsUl li .lead-card .lead-foot .title[data-v-1257835a]{display:block;float:left;width:20%}body .ppcContainer .main .leads-main .leadsUl li .lead-card .lead-foot .keyword[data-v-1257835a]{display:block;float:left;width:80%}","",{version:3,sources:["/Users/kaijieqian/longxiWorkspace/b2b-seller4.0/src/views/explore/Explore.vue"],names:[],mappings:"AACA,sBACE,aAAe,CAChB,AACD,0CACE,kBAAmB,AACnB,YAAa,AACb,iBAAkB,AAClB,gBAAkB,AAClB,sBAA0B,AAC1B,gCAAiC,AACjC,cAAgB,CAKjB,AACD,4CACE,iBAAuB,AACvB,gBAAoB,AACpB,yBAA0B,AAC1B,YAAc,CACf,AACD,qDACE,YAAa,AACb,YAAa,AACb,WAAa,CACd,AACD,uDACE,qBAAsB,AACtB,YAAa,AACb,YAAa,AACb,mBAAoB,AACpB,UAAW,AACX,WAAa,CACd,AACD,0CACE,WAAY,AACZ,cAAe,AACf,mBAAoB,AACpB,mBAAqB,CACtB,AACD,oDACE,aAAc,AACd,kBAAmB,AACnB,YAAc,CACf,AACD,6CACE,gBAAiB,AACjB,SAAW,CACZ,AAKD,8DACE,UAAW,AACX,WAAY,AACZ,YAAa,AACb,4BAA6B,AAC7B,oBAAqB,AACrB,gBAAiB,AACjB,iBAAmB,AACnB,gBAAkB,AAClB,mBAAoB,AACpB,kBAAmB,AACnB,eAAiB,CAElB,AACD,wEACE,kBAAmB,AACnB,cAAe,AACf,cAAgB,CACjB,AACD,qEACE,mBAAyB,AACzB,gBAAiB,AACjB,iBAAmB,CACpB,AACD,8EACE,WAAY,AACZ,YAAa,AACb,gBAAiB,AACjB,eAAgB,AAChB,mBAAoB,AACpB,gBAAiB,AACjB,iBAAmB,CACpB,AAID,+EACE,qBAAsB,AACtB,kBAAmB,AACnB,cAAgB,CACjB,AACD,iFACE,WAAa,CACd,AACD,yFACE,aAAc,AACd,eAAiB,CAClB,AACD,+FACE,gBAAiB,AACjB,uBAAwB,AACxB,mBAAoB,AACpB,iBAAkB,AAClB,cAAgB,CACjB,AACD,8FACE,kBAAmB,AACnB,QAAW,AACX,QAAS,AACT,eAAgB,AAChB,UAAW,AACX,cAAgB,CACjB,AACD,2FACE,UAAW,AACX,gBAAiB,AACjB,mBAAoB,AACpB,sBAAwB,CACzB,AACD,yFACE,gBAAiB,AACjB,qBAAsB,AACtB,UAAW,AACX,gBAAiB,AACjB,gBAAiB,AACjB,gBAAiB,AACjB,mBAAqB,CAGtB,AACD,mGACE,cAAe,AACf,qBAAuB,CACxB,AACD,uDACE,aAAc,AACd,iBAAmB,CACpB,AACD,kEACE,UAAW,AACX,WAAY,AACZ,YAAa,AACb,4BAA6B,AAC7B,oBAAqB,AACrB,gBAAiB,AACjB,iBAAmB,AACnB,gBAAkB,AAClB,mBAAoB,AACpB,kBAAmB,AACnB,eAAiB,CAClB,AACD,6EACE,mBAAyB,AACzB,gBAAiB,AACjB,iBAAmB,CACpB,AACD,uFACE,WAAY,AACZ,mBAAoB,AACpB,kBAAmB,AACnB,YAAa,AACb,eAAgB,AAChB,gBAAiB,AACjB,eAAiB,CAClB,AACD,2FACE,UAAY,CACb,AACD,kGACE,kBAAmB,AACnB,SAAY,AACZ,QAAW,AACX,gBAAiB,AACjB,WAAY,AACZ,aAAe,CAChB,AACD,wFACE,qBAAsB,AACtB,iBAAmB,CACpB,AACD,+FACE,eAAgB,AAChB,gBAAiB,AACjB,YAAc,CACf,AACD,qGACE,gBAAiB,AACjB,uBAAwB,AACxB,mBAAoB,AACpB,iBAAkB,AAClB,cAAgB,CACjB,AACD,qGACE,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,iBAAmB,CACpB,AACD,0GACE,kBAAmB,AACnB,QAAW,AACX,OAAS,CACV,AACD,+GACE,eAAgB,AAChB,sBAAuB,AACvB,eAAgB,AAChB,UAAY,CACb,AACD,+GACE,eAAgB,AAChB,sBAAuB,AACvB,UAAW,AACX,cAAgB,CACjB,AACD,kGACE,eAAgB,AAChB,gBAAiB,AACjB,qBAAsB,AACtB,UAAW,AACX,gBAAiB,AACjB,gBAAiB,AACjB,gBAAiB,AACjB,oBAAqB,AACrB,4BAA6B,AAC7B,oBAAsB,CACvB,AACD,wFACE,eAAgB,AAChB,8BAA+B,AAC/B,gBAAiB,AACjB,gBAAkB,CACnB,AACD,+FACE,cAAe,AACf,WAAY,AACZ,SAAW,CACZ,AACD,iGACE,cAAe,AACf,WAAY,AACZ,SAAW,CAQZ",file:"Explore.vue",sourcesContent:["\nbody[data-v-1257835a] {\n  margin: 0 auto;\n}\nbody .ppcContainer .head[data-v-1257835a] {\n  padding-left: 20px;\n  height: 60px;\n  line-height: 60px;\n  font-weight: bold;\n  background-color: #ffffff;\n  border-bottom: 1px solid #e4e4e4;\n  font-size: 14px;\n  /*position: fixed;*/\n  /*top: 0;*/\n  /*width: 100%;*/\n  /*z-index: 100;*/\n}\nbody .ppcContainer .search[data-v-1257835a] {\n  margin: 10px auto 10px;\n  background: #FFFFFF;\n  border: 1px solid #D8D8D8;\n  width: 1000px;\n}\nbody .ppcContainer .search .in-text[data-v-1257835a] {\n  width: 880px;\n  height: 50px;\n  border: none;\n}\nbody .ppcContainer .search .en-search[data-v-1257835a] {\n  display: inline-block;\n  height: 52px;\n  width: 120px;\n  background: #F0F0F0;\n  padding: 0;\n  border: none;\n}\nbody .ppcContainer .main[data-v-1257835a] {\n  width: 100%;\n  height: 3000px;\n  background: #f0f0f0;\n  padding: 10px 20px 0;\n}\nbody .ppcContainer .main .ppc-main[data-v-1257835a] {\n  margin-top: 0;\n  position: relative;\n  height: 200px;\n}\nbody .ppcContainer .main ul[data-v-1257835a] {\n  list-style: none;\n  padding: 0;\n}\nbody .ppcContainer .main .ppc-main .ppcUl[data-v-1257835a] {\n  /*list-style: none;*/\n  /*padding: 0;*/\n}\nbody .ppcContainer .main .ppc-main .ppcUl li[data-v-1257835a] {\n  width: 24%;\n  float: left;\n  height: 100%;\n  box-shadow: 1px 1px 2px #ccc;\n  padding-bottom: 20px;\n  background: #fff;\n  margin-right: 0.5%;\n  margin-left: 0.5%;\n  margin-bottom: 22px;\n  position: relative;\n  overflow: hidden;\n  /*height: 160px;*/\n}\nbody .ppcContainer .main .ppc-main .ppcUl li .icon-new[data-v-1257835a] {\n  position: absolute;\n  color: #83c94a;\n  font-size: 38px;\n}\nbody .ppcContainer .main .ppc-main .ppcUl li .cards[data-v-1257835a] {\n  margin: 20px 20px 0 20px;\n  overflow: hidden;\n  position: relative;\n}\nbody .ppcContainer .main .ppc-main .ppcUl li .cards .img-box[data-v-1257835a] {\n  width: 40px;\n  height: 40px;\n  overflow: hidden;\n  cursor: pointer;\n  vertical-align: top;\n  background: pink;\n  position: absolute;\n}\nbody .ppcContainer .main .ppc-main .ppcUl li .cards .img-box img[data-v-1257835a] {\n  /*width: 100%;*/\n}\nbody .ppcContainer .main .ppc-main .ppcUl li .cards .info-box[data-v-1257835a] {\n  display: inline-block;\n  padding-left: 56px;\n  font-size: 12px;\n}\nbody .ppcContainer .main .ppc-main .ppcUl li .cards .info-box p[data-v-1257835a] {\n  height: 14px;\n}\nbody .ppcContainer .main .ppc-main .ppcUl li .cards .info-box .one-line[data-v-1257835a] {\n  margin-top: 0;\n  font-weight: 600;\n}\nbody .ppcContainer .main .ppc-main .ppcUl li .cards .info-box .one-line .name[data-v-1257835a] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  line-height: 19px;\n  cursor: pointer;\n}\nbody .ppcContainer .main .ppc-main .ppcUl li .cards .info-box .one-line .add[data-v-1257835a] {\n  position: absolute;\n  right: 0px;\n  top: 1px;\n  font-size: 20px;\n  color: red;\n  cursor: pointer;\n}\nbody .ppcContainer .main .ppc-main .ppcUl li .cards .info-box .char-limit[data-v-1257835a] {\n  width: 80%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\nbody .ppcContainer .main .ppc-main .ppcUl li .cards .info-box .describe[data-v-1257835a] {\n  margin-top: 10px;\n  word-break: break-all;\n  width: 94%;\n  max-height: 50px;\n  overflow: hidden;\n  min-height: 50px;\n  display: -webkit-box;\n  /*-webkit-box-orient: vertical;*/\n  /*-webkit-line-clamp: 3;*/\n}\nbody .ppcContainer .main .ppc-main .ppcUl li .cards .info-box .describe .ppc-icon[data-v-1257835a] {\n  color: #3B5998;\n  vertical-align: middle;\n}\nbody .ppcContainer .main .leads-title[data-v-1257835a] {\n  margin-top: 0;\n  position: relative;\n}\nbody .ppcContainer .main .leads-main .leadsUl li[data-v-1257835a] {\n  width: 24%;\n  float: left;\n  height: 100%;\n  box-shadow: 1px 1px 2px #ccc;\n  padding-bottom: 20px;\n  background: #fff;\n  margin-right: 0.5%;\n  margin-left: 0.5%;\n  margin-bottom: 22px;\n  position: relative;\n  overflow: hidden;\n}\nbody .ppcContainer .main .leads-main .leadsUl li .lead-card[data-v-1257835a] {\n  margin: 20px 20px 0 20px;\n  overflow: hidden;\n  position: relative;\n}\nbody .ppcContainer .main .leads-main .leadsUl li .lead-card .lead-img[data-v-1257835a] {\n  width: 40px;\n  vertical-align: top;\n  position: absolute;\n  height: 40px;\n  cursor: pointer;\n  overflow: hidden;\n  background: pink;\n}\nbody .ppcContainer .main .leads-main .leadsUl li .lead-card .lead-img img[data-v-1257835a] {\n  width: 100%;\n}\nbody .ppcContainer .main .leads-main .leadsUl li .lead-card .lead-img .lead-icon[data-v-1257835a] {\n  position: absolute;\n  bottom: 0px;\n  right: 0px;\n  background: #fff;\n  z-index: 22;\n  color: #3B5998;\n}\nbody .ppcContainer .main .leads-main .leadsUl li .lead-card .lead-info[data-v-1257835a] {\n  display: inline-block;\n  padding-left: 56px;\n}\nbody .ppcContainer .main .leads-main .leadsUl li .lead-card .lead-info .first[data-v-1257835a] {\n  font-size: 12px;\n  font-weight: 600;\n  margin-top: 0;\n}\nbody .ppcContainer .main .leads-main .leadsUl li .lead-card .lead-info .first .name[data-v-1257835a] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  line-height: 19px;\n  cursor: pointer;\n}\nbody .ppcContainer .main .leads-main .leadsUl li .lead-card .lead-info .first .port[data-v-1257835a] {\n  width: 20px;\n  height: 12px;\n  background: orange;\n  border-radius: 6px;\n}\nbody .ppcContainer .main .leads-main .leadsUl li .lead-card .lead-info .first .operation[data-v-1257835a] {\n  position: absolute;\n  right: 0px;\n  top: 1px;\n}\nbody .ppcContainer .main .leads-main .leadsUl li .lead-card .lead-info .first .operation .del[data-v-1257835a] {\n  font-size: 19px;\n  box-sizing: border-box;\n  cursor: pointer;\n  color: gray;\n}\nbody .ppcContainer .main .leads-main .leadsUl li .lead-card .lead-info .first .operation .add[data-v-1257835a] {\n  font-size: 19px;\n  box-sizing: border-box;\n  color: red;\n  cursor: pointer;\n}\nbody .ppcContainer .main .leads-main .leadsUl li .lead-card .lead-info .describe[data-v-1257835a] {\n  font-size: 12px;\n  margin-top: 10px;\n  word-break: break-all;\n  width: 94%;\n  max-height: 50px;\n  overflow: hidden;\n  min-height: 50px;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 3;\n}\nbody .ppcContainer .main .leads-main .leadsUl li .lead-card .lead-foot[data-v-1257835a] {\n  font-size: 12px;\n  border-top: 1px dotted #d8d8d8;\n  margin-top: 10px;\n  padding-top: 10px;\n}\nbody .ppcContainer .main .leads-main .leadsUl li .lead-card .lead-foot .title[data-v-1257835a] {\n  display: block;\n  float: left;\n  width: 20%;\n}\nbody .ppcContainer .main .leads-main .leadsUl li .lead-card .lead-foot .keyword[data-v-1257835a] {\n  display: block;\n  float: left;\n  width: 80%;\n  /*span{*/\n  /*max-width: 80px;*/\n  /*overflow: hidden;*/\n  /*display: inline-block;*/\n  /*white-space: nowrap;*/\n  /*text-overflow: ellipsis;*/\n  /*}*/\n}\n"],sourceRoot:""}])},1334:function(a,n,e){var i=e(1146);"string"==typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);e(316)("69f9562a",i,!0)},1655:function(a,n){a.exports={render:function(){var a=this,n=a.$createElement,e=a._self._c||n;return e("div",[e("div",{staticClass:"ppcContainer"},[e("div",{staticClass:"head"},[a._v("探索")]),a._v(" "),e("div",{staticClass:"search"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.searchText,expression:"searchText"}],staticClass:"in-text",attrs:{type:"text",placeholder:"请输入要搜索的内容"},domProps:{value:a.searchText},on:{input:function(n){n.target.composing||(a.searchText=n.target.value)}}}),e("button",{staticClass:"en-search",on:{click:a.search}},[a._v("搜索")])]),a._v(" "),e("div",{staticClass:"main"},[e("div",{staticClass:"ppc-title"},[e("h3",{staticStyle:{display:"inline-block"},on:{click:a.jump}},[a._v("PPC:")]),a._v(" "),e("router-link",{attrs:{to:{name:"ppcList"}}},[e("button",[a._v("更多")])])],1),a._v(" "),e("div",{staticClass:"ppc-main"},[e("ul",{staticClass:"ppcUl"},a._l(a.ppcData.records.slice(0,4),function(n){return e("li",[0==n.hasRead?e("span",{staticClass:"icon-font icon-new"},[a._v("")]):a._e(),a._v(" "),e("div",{staticClass:"cards"},[a._m(0,!0),a._v(" "),e("div",{staticClass:"info-box"},[e("p",{staticClass:"one-line sty"},[e("span",{staticClass:"name"},[a._v(a._s(n.name))]),a._v(" "),e("span",{staticClass:"add",on:{click:function(e){a.addPerson(n)}}},[a._v("+")])]),a._v(" "),e("p",{staticClass:"sty char-limit"},[e("span",[a._v(a._s(n.position))]),e("span",[a._v(a._s(n.department))])]),a._v(" "),e("p",{staticClass:"sty char-limit"},[a._v(a._s(n.companyName))]),a._v(" "),e("p",{staticClass:"describe"},[a._v(a._s(n.showTitle)+"\n                 "),n.type>=0&&n.type<=4?e("span",{staticClass:"icon-font ppc-icon"},[a._v("")]):a._e(),a._v(" "),5==n.type?e("span",{staticClass:"icon-font ppc-icon"},[a._v("")]):a._e(),a._v(" "),6==n.type?e("span",{staticClass:"icon-font ppc-icon"},[a._v("")]):a._e(),a._v(" "),-1==n.type&&null!=n.facebookUrl&&""!=n.facebookUrl?e("span",{staticClass:"icon-font ppc-icon"},[a._v("")]):a._e(),a._v(" "),-1==n.type&&null!=n.twitterUrl&&""!=n.twitterUrl?e("span",{staticClass:"icon-font ppc-icon"},[a._v("")]):a._e(),a._v(" "),-1==n.type&&null!=n.linkedinUrl&&""!=n.linkedinUrl?e("span",{staticClass:"icon-font ppc-icon"},[a._v("")]):a._e(),a._v(" "),-1==n.type&&null!=n.pinterestUrl&&""!=n.pinterestUrl?e("span",{staticClass:"icon-font ppc-icon"},[a._v("")]):a._e()])])])])}))]),a._v(" "),a._m(1),a._v(" "),e("div",{staticClass:"leads-main"},[e("ul",{staticClass:"leadsUl"},a._l(a.leadData,function(n,i){return e("li",{class:"li"+i},[e("div",{staticClass:"lead-card"},[e("div",{staticClass:"lead-img"},[5==n.socialAccountType?e("img",{attrs:{src:n.avatar,alt:""},on:{click:function(e){a.portSea(n.recommendedName)}}}):e("img",{attrs:{src:n.avatar,alt:""}}),a._v(" "),0==n.socialAccountType||1==n.socialAccountType?e("i",{staticClass:"icon-font lead-icon"},[a._v("")]):a._e(),a._v(" "),2==n.socialAccountType?e("i",{staticClass:"icon-font lead-icon"},[a._v("")]):a._e(),a._v(" "),3==n.socialAccountType||4==n.socialAccountType?e("i",{staticClass:"icon-font lead-icon"},[a._v("")]):a._e()]),a._v(" "),e("div",{staticClass:"lead-info"},[e("p",{staticClass:"first"},[e("span",{staticClass:"name"},[a._v(a._s(n.recommendedName))]),5==n.socialAccountType?e("span",{staticClass:"port"},[a._v("海关")]):a._e(),a._v(" "),e("span",{staticClass:"operation"},[e("span",{staticClass:"del",on:{click:function(e){a.removePerson(n.recommendForUserId,i)}}},[a._v("✖")]),a._v(" "),e("span",{staticClass:"add",on:{click:function(e){a.addContact(n.recommendForUserId,n.socialAccountType)}}},[a._v("✚")])])]),a._v(" "),e("p",{staticClass:"describe"},[a._v(a._s(n.content))])]),a._v(" "),e("div",{staticClass:"lead-foot"},[e("div",{staticClass:"title"},[a._v("关键字")]),a._v(" "),e("div",{staticClass:"keyword"},[e("span",[a._v(a._s(n.keywords))])])])])])}))])])]),a._v(" "),e("div",{staticClass:"kind-dialog"})])},staticRenderFns:[function(){var a=this,n=a.$createElement,e=a._self._c||n;return e("div",{staticClass:"img-box"},[e("img",{attrs:{src:"",alt:""}})])},function(){var a=this,n=a.$createElement,e=a._self._c||n;return e("div",{staticClass:"leads-title"},[e("h3",[a._v("LEADS:")])])}]}},355:function(a,n,e){e(1334);var i=e(89)(e(1051),e(1655),"data-v-1257835a",null);a.exports=i.exports},408:function(a,n,e){a.exports={default:e(415),__esModule:!0}},415:function(a,n,e){var i=e(11),t=i.JSON||(i.JSON={stringify:JSON.stringify});a.exports=function(a){return t.stringify.apply(t,arguments)}},437:function(a,n,e){"use strict";var i=e(10),t={getPpcList:function(a){return i.a.get("https://server.onloon.cc/bshop/purchaser/recommendation/list",a)},addPpc:function(a){return i.a.post("https://server.onloon.cc/bshop/contacts/person/add",a)},getPpcDetail:function(a){return i.a.get("https://server.onloon.cc/bshop/purchaser/recommendation/detail",a)},getLeads:function(a){return i.a.get("https://server.onloon.cc/bshop/client/recommend/list",a)},addLeads:function(a){return i.a.post("https://server.onloon.cc/bshop/explore/recommend/add",a)},removeContact:function(a){return i.a.post("https://server.onloon.cc/bshop/explore/recommend/remove",a)},companyList:function(a){return i.a.get("https://server.onloon.cc/bshop/explore/company/list",a)},addCompany:function(a){return i.a.post("https://server.onloon.cc/bshop/explore/company/add",a)},addCompanyNow:function(a){return i.a.post("https://server.onloon.cc/bshop/contacts/social/add",a)},getCompanyDetail:function(a){return i.a.get("https://server.onloon.cc/bshop/contacts/company/detail",a)},getSearchResult:function(a){return i.a.get("https://server.onloon.cc/bshop/client/search/list",a)},getCountry:function(a){return i.a.post("https://server.onloon.cc/bshop/config/dict/list",a)},getCompany:function(a){return i.a.get("https://server.onloon.cc/bshop/client/company/detail",a)},getStaffList:function(a){return i.a.get("https://server.onloon.cc/bshop/client/company/employee/list",a)},getLeadList:function(a){return i.a.get("https://server.onloon.cc/bshop/purchaser/detailList",a)},getStaffDetail:function(a){return i.a.get("https://server.onloon.cc/bshop/client/employee/detail",a)},getFbRecommend:function(a){return i.a.get("https://server.onloon.cc/bshop/explore/recommend/fbSearch",a)},getEmail:function(a){return i.a.get("https://server.onloon.cc/bshop/client/hunter/findemail",a)},addContact:function(a){return i.a.post("https://server.onloon.cc/bshop/client/contacts/add",a)},searchCompany:function(a){return i.a.get("https://server.onloon.cc/bshop/explore/company/list",a)}};n.a=t}});
//# sourceMappingURL=60.515cfb622cf01209f896.js.map