(function(){"use strict";var e={4584:function(e,t,n){var a=n(9242),o=(n(6699),n(3396));function r(e,t,n,a,r,i){const s=(0,o.up)("Header"),l=(0,o.up)("intro"),c=(0,o.up)("router-view"),u=(0,o.up)("Footer");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(s),e.$route.path.includes("plot")?((0,o.wg)(),(0,o.j4)(l,{key:0})):(0,o.kq)("",!0),(0,o.Wm)(c,{class:"wrapbox"}),e.$route.path.includes("detailresult")?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(u,{key:1,class:"footer"}))],64)}const i=e=>((0,o.dD)("data-v-0202c324"),e=e(),(0,o.Cn)(),e),s={class:"wrapper"},l={class:"logo"},c=i((()=>(0,o._)("span",{class:"logo_color"},"    KU ABROAD",-1))),u={class:"li_item"},d=(0,o.Uk)("팀원 소개"),p={class:"li_item"},f=(0,o.Uk)("Univ-Map"),m={class:"li_item"},v=(0,o.Uk)("전체 보기"),h=i((()=>(0,o._)("div",{class:"bar"},null,-1)));function _(e,t,n,a,r,i){const _=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("header",null,[(0,o._)("div",s,[(0,o._)("div",l,[(0,o.Wm)(_,{to:"/"},{default:(0,o.w5)((()=>[c])),_:1})]),(0,o._)("nav",null,[(0,o._)("ul",null,[(0,o._)("span",u,[(0,o.Wm)(_,{to:"intro"},{default:(0,o.w5)((()=>[d])),_:1})]),(0,o._)("span",p,[(0,o.Wm)(_,{to:"plot"},{default:(0,o.w5)((()=>[f])),_:1})]),(0,o._)("span",m,[(0,o.Wm)(_,{to:"alluniv"},{default:(0,o.w5)((()=>[v])),_:1})])])])]),h])}var g={data(){return{headerInfo:["학교 추천","World Map","프로젝트 소개"]}}},b=n(89);const w=(0,b.Z)(g,[["render",_],["__scopeId","data-v-0202c324"]]);var y=w;const k=e=>((0,o.dD)("data-v-7d754cd1"),e=e(),(0,o.Cn)(),e),U=k((()=>(0,o._)("div",{class:"bar"},null,-1))),A={class:"content-info"},O=k((()=>(0,o._)("div",{class:"logo"},"    KU ABROAD",-1))),C={class:"info"},D={class:"li_item"},V=k((()=>(0,o._)("span",{class:"msg"},null,-1))),W=(0,o.Uk)("Home"),j={class:"li_item"},E=k((()=>(0,o._)("span",{class:"msg"},null,-1))),P=(0,o.Uk)("팀원 소개"),S=k((()=>(0,o._)("li",{class:"li_item a"},[(0,o._)("a",{href:"https://studyabroad.korea.ac.kr/studyabroad/index.do"},[(0,o.Uk)("고려대학교"),(0,o._)("br"),(0,o.Uk)("국제처")])],-1))),x=k((()=>(0,o._)("li",{class:"li_item a"},[(0,o._)("a",{href:"https://ic.korea.ac.kr/ic/index.do"},"Data@KU")],-1))),T=k((()=>(0,o._)("div",{class:"icon_container"},[(0,o._)("div",{class:"icon"}),(0,o._)("div",{class:"icon_3"}),(0,o._)("div",{class:"icon_2"})],-1))),I=k((()=>(0,o._)("div",{class:"copyright"},[(0,o._)("span",{class:"copyright_str"},"© 2022 KU Datathon. All Rights Reserved.")],-1)));function N(e,t,n,a,r,i){const s=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("footer",null,[U,(0,o._)("div",A,[O,(0,o._)("div",C,[(0,o._)("ul",null,[(0,o._)("li",D,[(0,o.Wm)(s,{to:"/"},{default:(0,o.w5)((()=>[V,W])),_:1})]),(0,o._)("li",j,[(0,o.Wm)(s,{to:"intro"},{default:(0,o.w5)((()=>[E,P])),_:1})]),S,x])]),T]),I])}var R={data(){return{footerInfo:["Home","About Us","Pricing","Features","Contact","Terms","Privacy"]}},method:{}};const L=(0,b.Z)(R,[["render",N],["__scopeId","data-v-7d754cd1"]]);var F=L;const H={class:"container"},M=(0,o.uE)('<div class="intro" data-v-2292cdea><span class="intro_msg1" data-v-2292cdea><span class="tooltip" data-v-2292cdea>t-SNE 알고리즘<span class="tooltiptext tooltip-top" data-v-2292cdea>t-SNE이란 고차원 공간상의 데이터를 2차원 공간으로 가져와 시각화하는 비선형 차원 축소 기법</span></span>으로 시각화된 학교들의 관계를 살펴보세요 !</span><span class="intro_msg2" data-v-2292cdea>∙ 점을 누르면 해당 학교의 자세한 페이지로 이동합니다.<br data-v-2292cdea> ∙ 대륙 이름을 누르면 해당 대륙은 제외됩니다 !</span></div>',1),B=[M];function K(e,t,n,a,r,i){return(0,o.wg)(),(0,o.iD)("div",H,B)}var Z={components:{},data(){return{sampleData:""}},setup(){},created(){},mounted(){},unmounted(){},methods:{}};const q=(0,b.Z)(Z,[["render",K],["__scopeId","data-v-2292cdea"]]);var $=q,Y={name:"App",components:{Header:y,Footer:F,Intro:$},methods:{}};const z=(0,b.Z)(Y,[["render",r],["__scopeId","data-v-0ee1c98b"]]);var G=z,J=n(2483);const Q=e=>((0,o.dD)("data-v-2764e8a0"),e=e(),(0,o.Cn)(),e),X={class:"container"},ee={class:"intro"},te=Q((()=>(0,o._)("div",{class:"intro_msg"},[(0,o.Uk)("한번뿐인 교환학생 "),(0,o._)("br"),(0,o.Uk)("어디로 떠날까?")],-1))),ne={class:"box"},ae=Q((()=>(0,o._)("span",{class:"box_msg"},"비행기 타러 출발! ✈️",-1))),oe=Q((()=>(0,o._)("div",{class:"passport"},null,-1)));function re(e,t,n,a,r,i){const s=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",X,[(0,o._)("div",ee,[te,(0,o._)("div",ne,[(0,o.Wm)(s,{to:"/worldmap"},{default:(0,o.w5)((()=>[ae])),_:1})])]),oe])}var ie={};const se=(0,b.Z)(ie,[["render",re],["__scopeId","data-v-2764e8a0"]]);var le=se;const ce=[{path:"/",name:"Home",component:le},{path:"/worldmap",name:"Worldmap",component:()=>n.e(192).then(n.bind(n,3970))},{path:"/select",name:"Select",component:()=>n.e(630).then(n.bind(n,7251))},{path:"/result",name:"Result",component:()=>Promise.all([n.e(265),n.e(498)]).then(n.bind(n,6030))},{path:"/language",name:"Language",component:()=>n.e(569).then(n.bind(n,2459))},{path:"/weather",name:"Weather",component:()=>n.e(980).then(n.bind(n,7815))},{path:"/user",name:"User",component:()=>n.e(988).then(n.bind(n,3172))},{path:"/detailresult",name:"detailresult",component:()=>Promise.all([n.e(265),n.e(951)]).then(n.bind(n,7849))},{path:"/alluniv",name:"alluniv",component:()=>Promise.all([n.e(265),n.e(380)]).then(n.bind(n,6485))},{path:"/plot",name:"plot",component:()=>Promise.all([n.e(265),n.e(380)]).then(n.bind(n,4865))},{path:"/intro",name:"intro",component:()=>n.e(192).then(n.bind(n,4897))}],ue=(0,J.p7)({history:(0,J.PO)("/"),routes:ce});var de=ue,pe=n(65),fe=(0,pe.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,a.ri)(G).use(fe).use(de).mount("#app")}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,r){if(!a){var i=1/0;for(u=0;u<e.length;u++){a=e[u][0],o=e[u][1],r=e[u][2];for(var s=!0,l=0;l<a.length;l++)(!1&r||i>=r)&&Object.keys(n.O).every((function(e){return n.O[e](a[l])}))?a.splice(l--,1):(s=!1,r<i&&(i=r));if(s){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[a,o,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+({192:"WorldmapView",380:"AllUnivView",498:"ResultView",569:"LanguageView",630:"SelectView",951:"DetailResultView",980:"WeatherView",988:"UserView"}[e]||e)+"."+{192:"50ef61df",265:"dc37098c",380:"6147bdbe",498:"f5a5c4ce",569:"d990f86c",630:"d4e1172c",951:"c09a2938",980:"73b77443",988:"13a647e9"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+{192:"WorldmapView",380:"AllUnivView",498:"ResultView",569:"LanguageView",630:"SelectView",951:"DetailResultView",980:"WeatherView",988:"UserView"}[e]+"."+{192:"d1e03355",380:"e20157b0",498:"b77622fc",569:"9a677c2a",630:"701fffe3",951:"f9004613",980:"339d1d18",988:"dfdc0cb8"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="demo:";n.l=function(a,o,r,i){if(e[a])e[a].push(o);else{var s,l;if(void 0!==r)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==t+r){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+r),s.src=a),e[a]=[o];var p=function(t,n){s.onerror=s.onload=null,clearTimeout(f);var o=e[a];if(delete e[a],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,a){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var r=function(r){if(o.onerror=o.onload=null,"load"===r.type)n();else{var i=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=s,o.parentNode.removeChild(o),a(l)}};return o.onerror=o.onload=r,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var o=n[a],r=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(r===e||r===t))return o}var i=document.getElementsByTagName("style");for(a=0;a<i.length;a++){o=i[a],r=o.getAttribute("data-href");if(r===e||r===t)return o}},a=function(a){return new Promise((function(o,r){var i=n.miniCssF(a),s=n.p+i;if(t(i,s))return o();e(a,s,o,r)}))},o={143:0};n.f.miniCss=function(e,t){var n={192:1,380:1,498:1,569:1,630:1,951:1,980:1,988:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=a(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,a){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)a.push(o[2]);else{var r=new Promise((function(n,a){o=e[t]=[n,a]}));a.push(o[2]=r);var i=n.p+n.u(t),s=new Error,l=function(a){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var r=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",s.name="ChunkLoadError",s.type=r,s.request=i,o[1](s)}};n.l(i,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,r,i=a[0],s=a[1],l=a[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(l)var u=l(n)}for(t&&t(a);c<i.length;c++)r=i[c],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(u)},a=self["webpackChunkdemo"]=self["webpackChunkdemo"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(4584)}));a=n.O(a)})();
//# sourceMappingURL=app.d1a19138.js.map