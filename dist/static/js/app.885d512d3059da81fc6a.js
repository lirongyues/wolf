webpackJsonp([1],{"1JIf":function(t,n){},"5OHe":function(t,n){},BJhz:function(t,n){},DTNB:function(t,n){},E9nH:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("xd7I"),i={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var s=e("C7Lr")({name:"App"},i,!1,function(t){e("E9nH")},null,null).exports,c=e("7LQH"),o=e("OTDE"),r=e.n(o),l={name:"HelloWorld",data:function(){return{imdexImg:r.a}},methods:{jump:function(){this.$router.push({path:"/index"})}},created:function(){var t=this;this.$nextTick(function(){setTimeout(function(){t.$refs.btn.classList.add("btnHover")},1e3)})}},u={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"all"},[n("div",{staticClass:"imageBox"},[n("img",{attrs:{src:this.imdexImg}})]),this._v(" "),n("div",{ref:"btn",staticClass:"btn"},[n("span",{on:{click:this.jump}},[this._v("进入应用")])])])},staticRenderFns:[]};var d=e("C7Lr")(l,u,!1,function(t){e("kNKT")},"data-v-99803d4c",null).exports,v={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("van-tabbar",{model:{value:t.active,callback:function(n){t.active=n},expression:"active"}},[e("van-tabbar-item",[e("span",[t._v("首页")]),t._v(" "),e("i",{staticClass:"iconfont icon-shouyeshouye",attrs:{slot:"icon"},slot:"icon"})]),t._v(" "),e("van-tabbar-item",[e("span",[t._v("视频")]),t._v(" "),e("i",{staticClass:"iconfont icon-shipin",attrs:{slot:"icon"},slot:"icon"})]),t._v(" "),e("van-tabbar-item",[e("span",[t._v("社区")]),t._v(" "),e("i",{staticClass:"iconfont icon-shequ-active",attrs:{slot:"icon"},slot:"icon"})])],1)],1)},staticRenderFns:[]};var f=e("C7Lr")({watch:{active:function(t){this.$emit("onChange",t)}},data:function(){return{active:0}}},v,!1,function(t){e("RKoP")},"data-v-d4b94bb0",null).exports,h={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"all"},[n("div",{staticClass:"contentBox"},[n("van-row",this._l(10,function(t){return n("van-col",{staticClass:"vanCol",attrs:{span:"12"}},[n("div",{staticClass:"childBox"},[n("div",{staticClass:"imageBox"},[n("img",{attrs:{src:"http://fuss10.elemecdn.com/1/c5/95c37272d3e554317dcec1e17a9f5jpeg.jpeg"}})])])])}),1)],1)])},staticRenderFns:[]};var p={components:{"my-card":e("C7Lr")({},h,!1,function(t){e("BJhz")},"data-v-cba565b6",null).exports},data:function(){return{keyContent:null}},methods:{onSearch:function(){},onCancel:function(){this.keyContent=null}}},m={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("van-search",{attrs:{placeholder:"请输入搜索关键词","show-action":""},on:{search:t.onSearch,cancel:t.onCancel},model:{value:t.keyContent,callback:function(n){t.keyContent=n},expression:"keyContent"}},[e("div",{attrs:{slot:"action"},on:{click:t.onSearch},slot:"action"},[t._v("搜索")])]),t._v(" "),e("my-card")],1)},staticRenderFns:[]};var _=e("C7Lr")(p,m,!1,function(t){e("1JIf")},"data-v-ba33d1ba",null).exports,C={components:{"my-footer":f,"my-shopListIndex":_},data:function(){return{active:0}},methods:{changes:function(t){this.active=t}}},x={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"all"},[0==this.active?n("my-shopListIndex"):this._e(),this._v(" "),n("my-footer",{on:{onChange:this.changes}})],1)},staticRenderFns:[]};var b=e("C7Lr")(C,x,!1,function(t){e("xi5l")},"data-v-44e87d95",null).exports;a.default.use(c.a);var g=new c.a({routes:[{path:"/",name:"HelloWorld",component:d,meta:{title:"欢迎"}},{path:"/index",name:"Index",component:b,meta:{title:"首页"}},{path:"/shopList",name:"ShopList",component:_,meta:{title:"首页"}}]}),y=e("YtKJ"),k=e("wSez"),L=e.n(k);e("5OHe"),e("DTNB"),e("SxNZ");a.default.use(y.a),a.default.use(L.a),g.beforeEach(function(t,n,e){t.meta.title&&(document.title=t.meta.title),e()}),a.default.config.productionTip=!1,new a.default({el:"#app",router:g,components:{App:s},template:"<App/>"})},OTDE:function(t,n,e){t.exports=e.p+"static/img/index.7facfc3.jpg"},RKoP:function(t,n){},SxNZ:function(t,n){},kNKT:function(t,n){},xi5l:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.885d512d3059da81fc6a.js.map