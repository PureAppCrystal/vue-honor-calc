(function(t){function e(e){for(var o,r,l=e[0],c=e[1],i=e[2],p=0,v=[];p<l.length;p++)r=l[p],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&v.push(s[r][0]),s[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(v.length)v.shift()();return n.push.apply(n,i||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],o=!0,l=1;l<a.length;l++){var c=a[l];0!==s[c]&&(o=!1)}o&&(n.splice(e--,1),t=r(r.s=a[0]))}return t}var o={},s={app:0},n=[];function r(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=o,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(a,o,function(e){return t[e]}.bind(null,o));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var i=0;i<l.length;i++)e(l[i]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"25df":function(t,e,a){t.exports=a.p+"img/grade.0fe6e9d5.png"},"56d7":function(t,e,a){"use strict";a.r(e);var o=a("2b0e"),s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("div",{attrs:{id:"content"}},[o("div",{staticClass:"main-title"},[t._v("WOW Classic Honor RP Calculator")]),o("v-container",[o("v-row",[o("v-col",{attrs:{cols:"12",md:"12",id:"content-top"}}),o("v-col",{attrs:{cols:"12",md:"6",id:"content-left"}},[o("v-row",{staticStyle:{display:"flex","justify-content":"center"}},[o("v-col",{staticClass:"content-box",attrs:{cols:"12",sm:"7",md:"12"}},[o("div",{staticClass:"box-title"},[t._v(" 기본정보")]),o("v-row",[o("v-col",{staticClass:"label",attrs:{cols:"4"}},[t._v("서버인구")]),o("v-col",{attrs:{cols:"8"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.totalPeople,expression:"totalPeople"}],staticClass:"value-input",attrs:{type:"number"},domProps:{value:t.totalPeople},on:{keyup:function(e){return t.checkNumber(e)},change:function(e){return t.saveTotalPeople()},input:function(e){e.target.composing||(t.totalPeople=e.target.value)}}})]),o("v-col",{staticClass:"label",attrs:{cols:"4"}},[t._v("진영")]),o("v-col",{attrs:{cols:"8"}},[o("v-select",{staticClass:"value-select",attrs:{items:t.campList,"item-text":"CODE_NAME","return-object":"",change:t.campClick(t.selectCamp)},model:{value:t.selectCamp,callback:function(e){t.selectCamp=e},expression:"selectCamp"}})],1)],1)],1),o("v-col",{staticClass:"content-box",attrs:{cols:"12",sm:"7",md:"12"}},[o("div",{staticClass:"box-title"},[t._v("예상결과")]),o("v-row",[o("v-col",{staticClass:"label",attrs:{cols:"4"}},[t._v("순위")]),o("v-col",{attrs:{cols:"4"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.expectRank,expression:"expectRank"}],staticClass:"value-input",attrs:{type:"number"},domProps:{value:t.expectRank},on:{keyup:function(e){return t.checkNumber(e)},input:function(e){e.target.composing||(t.expectRank=e.target.value)}}})]),o("v-col",{attrs:{cols:"4"}},[o("v-switch",{staticClass:"value-switch tooltip",attrs:{label:""},model:{value:t.nextGetAuto,callback:function(e){t.nextGetAuto=e},expression:"nextGetAuto"}})],1)],1),o("v-row",[o("v-col",{staticClass:"result",attrs:{cols:"4"}},[t._v("점수")]),o("v-col",{staticClass:"result",attrs:{cols:"4"}},[t._v(t._s(t.expectResult.exp))]),o("v-col",{staticClass:"braket",attrs:{cols:"4"}},[t._v(t._s(t.expectResult.braket))])],1)],1),o("v-col",{staticClass:"content-box",attrs:{cols:"12",sm:"7",md:"12"}},[o("div",{staticClass:"box-title"},[t._v("결과 확인")]),o("v-row",[o("v-col",{staticClass:"label",attrs:{cols:"4"}},[t._v("현재 경험치")]),o("v-col",{attrs:{cols:"4"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.nextNow,expression:"nextNow"}],staticClass:"value-input",attrs:{type:"number"},domProps:{value:t.nextNow},on:{keyup:function(e){return t.checkNumber(e)},input:function(e){e.target.composing||(t.nextNow=e.target.value)}}})]),o("v-col",{staticClass:"grade",attrs:{cols:"4"}},[t._v(t._s(t.nextNowGrade))])],1),o("v-row",[o("v-col",{staticClass:"label",attrs:{cols:"4"}},[t._v("획득 경험치")]),o("v-col",{attrs:{cols:"8"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.nextGet,expression:"nextGet"}],staticClass:"value-input",attrs:{type:"number"},domProps:{value:t.nextGet},on:{keyup:function(e){return t.checkNumber(e)},input:function(e){e.target.composing||(t.nextGet=e.target.value)}}})])],1),o("v-row",[o("v-col",{staticClass:"result",attrs:{cols:"4"}},[t._v("결과 경험치")]),o("v-col",{staticClass:"result",attrs:{cols:"2"}},[t._v(t._s(t.nextExp))]),o("v-col",{attrs:{cols:"2"}},[o("button",{staticClass:"value-button",on:{click:function(e){return t.setToNow()}}},[t._v("갱신")])]),o("v-col",{staticClass:"grade",attrs:{cols:"4"}},[t._v(t._s(t.nextExpGrade))])],1)],1),o("v-col",{staticClass:"content-box",attrs:{cols:"12",sm:"7",md:"12"}},[o("div",{staticClass:"box-title"},[t._v(" 필요 경험치 계산")]),o("v-row",[o("v-col",{staticClass:"label",attrs:{cols:"4"}},[t._v("현재 경험치")]),o("v-col",{attrs:{cols:"4"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.needNow,expression:"needNow"}],staticClass:"value-input",attrs:{type:"number"},domProps:{value:t.needNow},on:{keyup:function(e){return t.checkNumber(e)},input:function(e){e.target.composing||(t.needNow=e.target.value)}}})]),o("v-col",{staticClass:"grade",attrs:{cols:"4"}},[t._v(t._s(t.needNowGrade))])],1),o("v-row",[o("v-col",{staticClass:"label",attrs:{cols:"4"}},[t._v("목표 경험치")]),o("v-col",{attrs:{cols:"4"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.needTarget,expression:"needTarget"}],staticClass:"value-input",attrs:{type:"number"},domProps:{value:t.needTarget},on:{keyup:function(e){return t.checkNumber(e)},input:function(e){e.target.composing||(t.needTarget=e.target.value)}}})]),o("v-col",{staticClass:"grade",attrs:{cols:"4"}},[t._v(t._s(t.needTargetGrade))])],1),o("v-row",[o("v-col",{staticClass:"result",attrs:{cols:"4"}},[t._v("필요 경험치")]),o("v-col",{staticClass:"result",attrs:{cols:"8"}},[t._v(t._s(t.needExp))])],1)],1)],1)],1),o("v-col",{attrs:{cols:"12",md:"6",id:"content-right"}},[o("v-row",[o("v-col",{staticClass:"content-box",attrs:{cols:"12"}},[o("div",{staticClass:"box-title"},[t._v(" 계급도")]),o("img",{staticClass:"value-img",attrs:{alt:"Vue logo",src:a("25df")}})]),o("v-col",{staticClass:"content-box",attrs:{cols:"12"}},[o("div",{staticClass:"box-title"},[t._v(" Braket")]),o("img",{staticClass:"value-img",attrs:{alt:"Vue logo",src:a("72de")}})]),o("v-col",{staticClass:"value-noti",attrs:{cols:"12"}},[t._v(" 이미지 출처 : "),o("a",{attrs:{href:"http://www.inven.co.kr/webzine/news/?news=231067&site=wow"}},[t._v("http://www.inven.co.kr/webzine/news/?news=231067&site=wow")])])],1)],1),o("v-col",{attrs:{cols:"12",md:"12",id:"content-bottom"}})],1)],1),o("div",{staticClass:"main-footer"},[o("div",[t._v("v1.0.0")]),o("div",[t._v("2019-12-28")]),o("div",[t._v("라그나로스 호드 Sinaly")])])],1)])},n=[],r={name:"App",components:{},data(){return{totalPeople:4e3,selectCamp:{CODE_CD:2,CODE_NAME:"호드"},campList:[{CODE_CD:1,CODE_NAME:"얼라이언스"},{CODE_CD:2,CODE_NAME:"호드"}],expectRank:1,expectBraket:0,needNow:0,needTarget:0,nextNow:0,nextGet:0,nextGetAuto:!0}},computed:{expectResult:function(){const{totalPeople:t,expectRank:e}=this;if(t<1||e<1)return 0;let a=e/t*100;return a=Math.ceil(100*a)/100,this.getBraket(a)},needNowGrade:function(){return this.getGrade(this.needNow)},needTargetGrade:function(){return this.getGrade(this.needTarget)},needExp:function(){const{needNow:t,needTarget:e}=this,a=parseInt(e)-.8*t;return isNaN(a)?0:Math.ceil(a)},nextNowGrade:function(){return this.getGrade(this.nextNow)},nextExp:function(){const{nextNow:t,nextGet:e}=this,a=.8*t+parseInt(e);return isNaN(a)?0:Math.ceil(a)},nextExpGrade:function(){return this.getGrade(this.nextExp)}},methods:{test(){},checkNumber(t){const e=parseInt(t.target.value);t.target.value=isNaN(e)?0:e},getGrade(t){const e=this.selectCamp.CODE_CD;let a;return a=t>=6e4?1===e?"최고사령관":"대장군":t>=55e3?1===e?"야전사령관":"장군":t>=5e4?1===e?"작전사령관":"전투사령관":t>=45e3?"사령관":t>=4e4?"부사령관":t>=35e3?1===e?"기사단장":"백인대장":t>=3e4?1===e?"기사대장":"용사":t>=25e3?1===e?"상급기사":"혈투사":t>=2e4?1===e?"기사":"투사":t>=15e3?1===e?"하급기사":"하급투사":t>=1e4?1===e?"정예근위병":"정예수호병":t>=5e3?1===e?"근위병":"수호병":t>=2e3?1===e?"파수병":"그런트":1===e?"정찰병":"척후병",a},getBraket:function(t){const{totalPeople:e,expectRank:a}=this;let o={exp:0,braket:"-"};if(t<=.3)o.braket="braket14",o.exp=13e3-Math.floor(1e3/(.003*e))*a;else if(t<=.8){o.braket="braket13";const t=.003*e;o.exp=12e3-Math.floor(1e3/(.008*e-t))*(a-t)}else if(t<=2){o.braket="braket12";const t=.008*e;o.exp=11e3-Math.floor(1e3/(.02*e-t))*(a-t)}else if(t<=3.5){o.braket="braket11";const t=.02*e;o.exp=1e4-Math.floor(1e3/(.035*e-t))*(a-t)}else if(t<=6){o.braket="braket10";const t=.035*e;o.exp=9e3-Math.floor(1e3/(.06*e-t))*(a-t)}else if(t<=10){o.braket="braket9";const t=.06*e;o.exp=8e3-Math.floor(1e3/(.1*e-t))*(a-t)}else if(t<=15.9){o.braket="braket8";const t=.1*e;o.exp=7e3-Math.floor(1e3/(.159*e-t))*(a-t)}else if(t<=22.8){o.braket="braket7";const t=.159*e;o.exp=6e3-Math.floor(1e3/(.228*e-t))*(a-t)}else if(t<=32.7){o.braket="braket6";const t=.228*e;o.exp=5e3-Math.floor(1e3/(.327*e-t))*(a-t)}else if(t<=43.6){o.braket="braket5";const t=.327*e;o.exp=4e3-Math.floor(1e3/(.436*e-t))*(a-t)}else if(t<=56.6){o.braket="braket4";const t=.436*e;o.exp=3e3-Math.floor(1e3/(.566*e-t))*(a-t)}else if(t<=69.7){o.braket="braket3";const t=.566*e;o.exp=2e3-Math.floor(1e3/(.697*e-t))*(a-t)}else if(t<=84.5){o.braket="braket2";const t=.697*e;o.exp=1e3-Math.floor(600/(.845*e-t))*(a-t)}else o.braket="braket1",o.exp=0;return 1==a&&(o.exp=13e3),o.exp=Math.floor(o.exp),this.nextGetAuto&&(this.nextGet=o.exp),o},setToNow:function(){this.nextNow=this.nextExp},saveTotalPeople:function(){const t=""===this.totalPeople?0:this.totalPeople;localStorage.setItem("honorCalc_tp",t)},campClick:function(t){localStorage.setItem("honorCalc_camp",JSON.stringify(t))}},created(){let t=localStorage.getItem("honorCalc_tp");null!==t&&0!==t&&""!==t||(t=4e3),this.totalPeople=t;let e=JSON.parse(localStorage.getItem("honorCalc_camp"));null!==e&&""!==e||(e={CODE_CD:2,CODE_NAME:"호드"}),this.selectCamp=e}},l=r,c=a("2877"),i=a("6544"),u=a.n(i),p=a("7496"),v=a("62ad"),d=a("a523"),f=a("0fd9"),m=a("b974"),x=a("b73d"),b=Object(c["a"])(l,s,n,!1,null,null,null),h=b.exports;u()(b,{VApp:p["a"],VCol:v["a"],VContainer:d["a"],VRow:f["a"],VSelect:m["a"],VSwitch:x["a"]});var C=a("f309");o["a"].use(C["a"]);var g=new C["a"]({});a("5aea");o["a"].config.productionTip=!1,new o["a"]({vuetify:g,render:t=>t(h)}).$mount("#app")},"5aea":function(t,e,a){},"72de":function(t,e,a){t.exports=a.p+"img/braket.129d442f.png"}});