(window.webpackJsonp=window.webpackJsonp||[]).push([[14,5,7,8,9,11,12,13],{284:function(t,e,n){var content=n(288);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(84).default)("33d7484e",content,!0,{sourceMap:!1})},285:function(t,e,n){"use strict";n.r(e);var l={name:"BlogVMenu",data:function(){return{}},mounted:function(){},methods:{}},o=n(47),component=Object(o.a)(l,(function(){var t=this;return(0,t._self._c)("div",{staticClass:"text-black text-xl"},[t._t("default",(function(){return[t._v(" menu(big) ")]}))],2)}),[],!1,null,"5299d348",null);e.default=component.exports},286:function(t,e,n){"use strict";n.r(e);var l={name:"BlogVMenuSmall",data:function(){return{}},mounted:function(){},methods:{}},o=n(47),component=Object(o.a)(l,(function(){var t=this;return(0,t._self._c)("div",{staticClass:"text-neutral-500 text-md"},[t._t("default",(function(){return[t._v(" menu(small) ")]}))],2)}),[],!1,null,"30e784af",null);e.default=component.exports},287:function(t,e,n){"use strict";n(284)},288:function(t,e,n){var l=n(83)((function(i){return i[1]}));l.push([t.i,".nuxt-logo{height:90px}",""]),l.locals={},t.exports=l},289:function(t,e,n){var content=n(295);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(84).default)("8f4254e6",content,!0,{sourceMap:!1})},290:function(t,e,n){"use strict";n.r(e);var l={name:"BlogVMenu",data:function(){return{}},props:{bigMenu:String,smallMenu:Array},mounted:function(){},methods:{}},o=n(47),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("div",[e("VMenuBig",[t._v(t._s(t.bigMenu))])],1),t._v(" "),t._l(t.smallMenu,(function(menu,i){return e("div",{key:i,staticClass:"pl-4"},[e("VMenuSmall",[t._v(t._s(menu))])],1)}))],2)}),[],!1,null,"4e002ad6",null);e.default=component.exports;installComponents(component,{VMenuBig:n(285).default,VMenuSmall:n(286).default})},291:function(t,e,n){"use strict";n.r(e);n(287);var l=n(47),component=Object(l.a)({},(function(){var t=this._self._c;return t("svg",{staticClass:"nuxt-logo",attrs:{viewBox:"0 0 45 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M24.7203 29.704H41.1008C41.6211 29.7041 42.1322 29.5669 42.5828 29.3061C43.0334 29.0454 43.4075 28.6704 43.6675 28.2188C43.9275 27.7672 44.0643 27.2549 44.0641 26.7335C44.0639 26.2121 43.9266 25.6999 43.6662 25.2485L32.6655 6.15312C32.4055 5.70162 32.0315 5.32667 31.581 5.06598C31.1305 4.8053 30.6195 4.66805 30.0994 4.66805C29.5792 4.66805 29.0682 4.8053 28.6177 5.06598C28.1672 5.32667 27.7932 5.70162 27.5332 6.15312L24.7203 11.039L19.2208 1.48485C18.9606 1.03338 18.5864 0.658493 18.1358 0.397853C17.6852 0.137213 17.1741 0 16.6538 0C16.1336 0 15.6225 0.137213 15.1719 0.397853C14.7213 0.658493 14.3471 1.03338 14.0868 1.48485L0.397874 25.2485C0.137452 25.6999 0.000226653 26.2121 2.8053e-07 26.7335C-0.000226092 27.2549 0.136554 27.7672 0.396584 28.2188C0.656614 28.6704 1.03072 29.0454 1.48129 29.3061C1.93185 29.5669 2.44298 29.7041 2.96326 29.704H13.2456C17.3195 29.704 20.3239 27.9106 22.3912 24.4118L27.4102 15.7008L30.0986 11.039L38.1667 25.0422H27.4102L24.7203 29.704ZM13.0779 25.0374L5.9022 25.0358L16.6586 6.36589L22.0257 15.7008L18.4322 21.9401C17.0593 24.2103 15.4996 25.0374 13.0779 25.0374Z",fill:"#00DC82"}})])}),[],!1,null,null,null);e.default=component.exports},292:function(t,e,n){"use strict";n.r(e);var l={name:"BlogMainHeader",data:function(){return{}},mounted:function(){},methods:{}},o=n(47),component=Object(o.a)(l,(function(){var t=this._self._c;return t("div",{staticClass:"flex justify-center items-center p-2"},[t("NuxtLogo")],1)}),[],!1,null,"270b7b3d",null);e.default=component.exports;installComponents(component,{NuxtLogo:n(291).default})},293:function(t,e,n){"use strict";n.r(e);var l={name:"BlogSideBar",data:function(){return{contentList:[],menuList:[{bigMenu:"Python",smallMenu:["python1","python2","python3"]},{bigMenu:"About",smallMenu:["me","you","we","all"]}]}},mounted:function(){var t=this;this.$content("posts",{deep:!0}).only(["title"]).fetch().then((function(e){t.contentList=e}))},methods:{}},o=n(47),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-white border p-4 h-screen"},[t._l(t.menuList,(function(menu,i){return e("div",{key:i,staticClass:"mb-4"},[e("VMenu",{attrs:{bigMenu:menu.bigMenu,smallMenu:menu.smallMenu}})],1)})),t._v(" "),t._l(t.contentList,(function(content,i){return e("div",{key:i,staticClass:"mb-4"},[t._v("\n    "+t._s(content.title)+"\n  ")])}))],2)}),[],!1,null,"a74ee75a",null);e.default=component.exports;installComponents(component,{VMenu:n(290).default})},294:function(t,e,n){"use strict";n(289)},295:function(t,e,n){var l=n(83)((function(i){return i[1]}));l.push([t.i,"@import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);"]),l.push([t.i,'.font{font-family:"Spoqa Han Sans Neo","sans-serif"}',""]),l.locals={},t.exports=l},296:function(t,e,n){"use strict";n.r(e);var l={},o=(n(294),n(47)),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"grid grid-cols-12 font"},[e("div",{staticClass:"col-span-1 bg-zinc-400 text-center"},[t._v("hello")]),t._v(" "),e("div",{staticClass:"col-span-1 bg-slate-700 text-white text-center"},[t._v("world")]),t._v(" "),e("div",{staticClass:"col-span-1 bg-zinc-400 text-center"},[t._v("hello")]),t._v(" "),e("div",{staticClass:"col-span-1 bg-slate-700 text-white text-center"},[t._v("world")]),t._v(" "),e("div",{staticClass:"col-span-1 bg-zinc-400 text-center"},[t._v("hello")]),t._v(" "),e("div",{staticClass:"col-span-1 bg-slate-700 text-white text-center"},[t._v("world")]),t._v(" "),e("div",{staticClass:"col-span-1 bg-zinc-400 text-center"},[t._v("hello")]),t._v(" "),e("div",{staticClass:"col-span-1 bg-slate-700 text-white text-center"},[t._v("world")]),t._v(" "),e("div",{staticClass:"col-span-1 bg-zinc-400 text-center"},[t._v("hello")]),t._v(" "),e("div",{staticClass:"col-span-1 bg-slate-700 text-white text-center"},[t._v("world")]),t._v(" "),e("div",{staticClass:"col-span-1 bg-zinc-400 text-center"},[t._v("hello")]),t._v(" "),e("div",{staticClass:"col-span-1 bg-slate-700 text-white text-center"},[t._v("world")]),t._v(" "),e("div",{staticClass:"col-span-12"},[e("MainHeader")],1),t._v(" "),e("div",{staticClass:"col-span-3"},[e("SideBar")],1),t._v(" "),e("div",{staticClass:"col-start-4 col-end-10 2xl:col-start-5 2xl:col-end-9"},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MainHeader:n(292).default,SideBar:n(293).default})},297:function(t,e,n){var content=n(299);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(84).default)("33d2941b",content,!0,{sourceMap:!1})},298:function(t,e,n){"use strict";n(297)},299:function(t,e,n){var l=n(83)((function(i){return i[1]}));l.push([t.i,"@import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);"]),l.push([t.i,'.nuxt-content{font-family:"Spoqa Han Sans Neo","sans-serif";word-break:break-all;line-height:2rem;color:#383839;font-weight:300}.nuxt-content h2{font-size:1.5rem;font-weight:600;margin:1rem 0}',""]),l.locals={},t.exports=l},316:function(t,e,n){"use strict";n.r(e);var l=n(11),o=(n(49),{asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var n,l,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,l=t.route,e.next=3,n("posts",l.fullPath,{deep:!0}).fetch();case 3:return o=e.sent,e.abrupt("return",{page:o});case 5:case"end":return e.stop()}}),e)})))()}}),r=(n(298),n(47)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("MainPage",[e("article",[e("div",{staticClass:"my-2 md:my-16"},[e("h1",{staticClass:"font-bold text-xl text-center sm:text-5xl"},[t._v("\n        "+t._s(t.page.title)+"\n      ")]),t._v(" "),e("div",{staticClass:"flex justify-center"},t._l(t.page.tag,(function(n,i){return e("div",{key:i,staticClass:"px-2 py-1 m-0.5 mt-2 bg-slate-700 text-white text-xs rounded-full"},[t._v("\n          #"+t._s(n)+"\n        ")])})),0)]),t._v(" "),e("nuxt-content",{attrs:{document:t.page}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MainPage:n(296).default})}}]);