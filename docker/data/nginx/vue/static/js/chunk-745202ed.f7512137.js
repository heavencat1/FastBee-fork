(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-745202ed"],{"6b20":function(t,i,e){"use strict";e.r(i);var o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return t.pageflag?e("div",{staticStyle:{overflow:"hidden",width:"100%",height:"250px","font-size":"12px","line-height":"24px"}},[e("vue-seamless-scroll",{attrs:{data:t.deviceLogList,"class-option":t.defaultOption}},t._l(t.deviceLogList,(function(i,o){return e("div",{key:o,staticStyle:{display:"flex","margin-bottom":"10px","border-bottom":"2px dashed #23cdd8",color:"#bbb"}},[e("span",{staticStyle:{width:"50px",color:"#23cdd8","font-size":"16px","line-height":"48px","font-weight":"bolder"}},[t._v(t._s(o+1))]),e("div",{staticStyle:{display:"flex","flex-wrap":"wrap"}},[e("div",{staticStyle:{width:"200px"}},[e("span",[t._v("设备编号：")]),e("span",{staticStyle:{color:"#23cdd8"}},[t._v(t._s(i.serialNumber))])]),e("div",{staticStyle:{width:"150px","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[e("span",[t._v("标识符：")]),e("span",{staticStyle:{color:"#fff"}},[t._v(t._s(i.identity))])]),e("div",{staticStyle:{width:"60px","align-items":"flex-end","text-align":"right"}},[1==i.logType?e("span",{staticStyle:{color:"#ffdb5c"}},[t._v("属性上报")]):2==i.logType?e("span",{staticStyle:{color:"#ffdb5c"}},[t._v("功能调用")]):3==i.logType?e("span",{staticStyle:{color:"#fb7293"}},[t._v("事件上报")]):4==i.logType?e("span",{staticStyle:{color:"#ffdb5c"}},[t._v("设备升级")]):5==i.logType?e("span",{staticStyle:{color:"#9fe6b8"}},[t._v("设备上线")]):6==i.logType?e("span",{staticStyle:{color:"#ff9f7f"}},[t._v("设备离线")]):t._e()]),e("div",{staticStyle:{width:"200px","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[e("span",[t._v("上报时间：")]),e("span",{staticStyle:{color:"#fff"}},[t._v(t._s(i.createTime))])]),e("div",{staticStyle:{"margin-bottom":"10px",width:"210px","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[e("span",[t._v("上报值：")]),e("span",{staticStyle:{color:"#fff"}},[t._v(t._s(i.logValue))])])])])})),0)],1):e("Reacquire",{staticStyle:{"line-height":"200px",color:"#23cdd8","margin-left":"210px"},on:{onclick:t.getData}},[t._v(" 重新获取 ")])},n=[],s=e("a939"),r=e.n(s),a=e("a035"),l={components:{vueSeamlessScroll:r.a},data:function(){return{deviceLogList:[],pageflag:!0,defaultOption:{step:2,limitMoveNum:4,hoverStop:!0,singleHeight:280,openWatch:!0,waitTime:3e3},queryParams:{pageNum:1,pageSize:20}}},created:function(){this.getData()},beforeDestroy:function(){this.clearData()},methods:{getData:function(){var t=this;Object(a["a"])(this.queryParams).then((function(i){t.deviceLogList=i.rows,t.switper()}))},clearData:function(){this.timer&&(clearInterval(this.timer),this.timer=null)},switper:function(){var t=this;if(!this.timer){var i=function(i){t.getData()};this.timer=setInterval(i,6e4)}}}},c=l,h=e("2877"),u=Object(h["a"])(c,o,n,!1,null,null,null);i["default"]=u.exports},a035:function(t,i,e){"use strict";e.d(i,"a",(function(){return n})),e.d(i,"b",(function(){return s}));var o=e("b775");function n(t){return Object(o["a"])({url:"/iot/deviceLog/list",method:"get",params:t})}function s(t){return Object(o["a"])({url:"/iot/deviceLog/history",method:"get",params:t})}},a939:function(t,i,e){!function(i,e){t.exports=e()}("undefined"!=typeof self&&self,(function(){return function(t){function i(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,i),n.l=!0,n.exports}var e={};return i.m=t,i.c=e,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},i.p="",i(i.s=1)}([function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),e(4)();var o=e(5),n=e(6);i.default={name:"vue-seamless-scroll",data:function(){return{xPos:0,yPos:0,delay:0,copyHtml:"",height:0,width:0,realBoxWidth:0}},props:{data:{type:Array,default:function(){return[]}},classOption:{type:Object,default:function(){return{}}}},computed:{leftSwitchState:function(){return this.xPos<0},rightSwitchState:function(){return Math.abs(this.xPos)<this.realBoxWidth-this.width},leftSwitchClass:function(){return this.leftSwitchState?"":this.options.switchDisabledClass},rightSwitchClass:function(){return this.rightSwitchState?"":this.options.switchDisabledClass},leftSwitch:function(){return{position:"absolute",margin:this.height/2+"px 0 0 -"+this.options.switchOffset+"px",transform:"translate(-100%,-50%)"}},rightSwitch:function(){return{position:"absolute",margin:this.height/2+"px 0 0 "+(this.width+this.options.switchOffset)+"px",transform:"translateY(-50%)"}},float:function(){return this.isHorizontal?{float:"left",overflow:"hidden"}:{overflow:"hidden"}},pos:function(){return{transform:"translate("+this.xPos+"px,"+this.yPos+"px)",transition:"all "+this.ease+" "+this.delay+"ms",overflow:"hidden"}},defaultOption:function(){return{step:1,limitMoveNum:5,hoverStop:!0,direction:1,openTouch:!0,singleHeight:0,singleWidth:0,waitTime:1e3,switchOffset:30,autoPlay:!0,navigation:!1,switchSingleStep:134,switchDelay:400,switchDisabledClass:"disabled",isSingleRemUnit:!1}},options:function(){return n({},this.defaultOption,this.classOption)},navigation:function(){return this.options.navigation},autoPlay:function(){return!this.navigation&&this.options.autoPlay},scrollSwitch:function(){return this.data.length>=this.options.limitMoveNum},hoverStopSwitch:function(){return this.options.hoverStop&&this.autoPlay&&this.scrollSwitch},canTouchScroll:function(){return this.options.openTouch},isHorizontal:function(){return this.options.direction>1},baseFontSize:function(){return this.options.isSingleRemUnit?parseInt(window.getComputedStyle(document.documentElement,null).fontSize):1},realSingleStopWidth:function(){return this.options.singleWidth*this.baseFontSize},realSingleStopHeight:function(){return this.options.singleHeight*this.baseFontSize},step:function(){var t=this.options.step;return this.isHorizontal?this.realSingleStopWidth:this.realSingleStopHeight,t}},methods:{reset:function(){this._cancle(),this._initMove()},leftSwitchClick:function(){if(this.leftSwitchState)return Math.abs(this.xPos)<this.options.switchSingleStep?void(this.xPos=0):void(this.xPos+=this.options.switchSingleStep)},rightSwitchClick:function(){if(this.rightSwitchState)return this.realBoxWidth-this.width+this.xPos<this.options.switchSingleStep?void(this.xPos=this.width-this.realBoxWidth):void(this.xPos-=this.options.switchSingleStep)},_cancle:function(){cancelAnimationFrame(this.reqFrame||"")},touchStart:function(t){var i=this;if(this.canTouchScroll){var e=void 0,o=t.targetTouches[0],n=this.options,s=n.waitTime,r=n.singleHeight,a=n.singleWidth;this.startPos={x:o.pageX,y:o.pageY},this.startPosY=this.yPos,this.startPosX=this.xPos,r&&a?(e&&clearTimeout(e),e=setTimeout((function(){i._cancle()}),s+20)):this._cancle()}},touchMove:function(t){if(!(!this.canTouchScroll||t.targetTouches.length>1||t.scale&&1!==t.scale)){var i=t.targetTouches[0],e=this.options.direction;this.endPos={x:i.pageX-this.startPos.x,y:i.pageY-this.startPos.y},event.preventDefault();var o=Math.abs(this.endPos.x)<Math.abs(this.endPos.y)?1:0;1===o&&e<2?this.yPos=this.startPosY+this.endPos.y:0===o&&e>1&&(this.xPos=this.startPosX+this.endPos.x)}},touchEnd:function(){var t=this;if(this.canTouchScroll){var i=void 0,e=this.options.direction;if(this.delay=50,1===e)this.yPos>0&&(this.yPos=0);else if(0===e){var o=this.realBoxHeight/2*-1;this.yPos<o&&(this.yPos=o)}else if(2===e)this.xPos>0&&(this.xPos=0);else if(3===e){var n=-1*this.realBoxWidth;this.xPos<n&&(this.xPos=n)}i&&clearTimeout(i),i=setTimeout((function(){t.delay=0,t._move()}),this.delay)}},enter:function(){this.hoverStopSwitch&&this._stopMove()},leave:function(){this.hoverStopSwitch&&this._startMove()},_move:function(){this.isHover||(this._cancle(),this.reqFrame=requestAnimationFrame(function(){var t=this,i=this.realBoxHeight/2,e=this.realBoxWidth/2,o=this.options,n=o.direction,s=o.waitTime,r=this.step;1===n?(Math.abs(this.yPos)>=i&&(this.$emit("ScrollEnd"),this.yPos=0),this.yPos-=r):0===n?(this.yPos>=0&&(this.$emit("ScrollEnd"),this.yPos=-1*i),this.yPos+=r):2===n?(Math.abs(this.xPos)>=e&&(this.$emit("ScrollEnd"),this.xPos=0),this.xPos-=r):3===n&&(this.xPos>=0&&(this.$emit("ScrollEnd"),this.xPos=-1*e),this.xPos+=r),this.singleWaitTime&&clearTimeout(this.singleWaitTime),this.realSingleStopHeight?Math.abs(this.yPos)%this.realSingleStopHeight<r?this.singleWaitTime=setTimeout((function(){t._move()}),s):this._move():this.realSingleStopWidth&&Math.abs(this.xPos)%this.realSingleStopWidth<r?this.singleWaitTime=setTimeout((function(){t._move()}),s):this._move()}.bind(this)))},_initMove:function(){var t=this;this.$nextTick((function(){var i=t.options.switchDelay,e=t.autoPlay,o=t.isHorizontal;if(t._dataWarm(t.data),t.copyHtml="",o){t.height=t.$refs.wrap.offsetHeight,t.width=t.$refs.wrap.offsetWidth;var n=t.$refs.slotList.offsetWidth;e&&(n=2*n+1),t.$refs.realBox.style.width=n+"px",t.realBoxWidth=n}if(!e)return t.ease="linear",void(t.delay=i);t.ease="ease-in",t.delay=0,t.scrollSwitch?(t.copyHtml=t.$refs.slotList.innerHTML,setTimeout((function(){t.realBoxHeight=t.$refs.realBox.offsetHeight,t._move()}),0)):(t._cancle(),t.yPos=t.xPos=0)}))},_dataWarm:function(t){t.length},_startMove:function(){this.isHover=!1,this._move()},_stopMove:function(){this.isHover=!0,this.singleWaitTime&&clearTimeout(this.singleWaitTime),this._cancle()}},mounted:function(){this._initMove()},watch:{data:function(t,i){this._dataWarm(t),o(t,i)||this.reset()},autoPlay:function(t){t?this.reset():this._stopMove()}},beforeCreate:function(){this.reqFrame=null,this.singleWaitTime=null,this.isHover=!1,this.ease="ease-in"},beforeDestroy:function(){this._cancle(),clearTimeout(this.singleWaitTime)}}},function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var o=e(2),n=function(t){return t&&t.__esModule?t:{default:t}}(o);n.default.install=function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.component(i.componentName||n.default.name,n.default)},"undefined"!=typeof window&&window.Vue&&Vue.component(n.default.name,n.default),i.default=n.default},function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var o=e(0),n=e.n(o);for(var s in o)"default"!==s&&function(t){e.d(i,t,(function(){return o[t]}))}(s);var r=e(7),a=e(3),l=a(n.a,r.a,!1,null,null,null);i.default=l.exports},function(t,i){t.exports=function(t,i,e,o,n,s){var r,a=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(r=t,a=t.default);var c,h="function"==typeof a?a.options:a;if(i&&(h.render=i.render,h.staticRenderFns=i.staticRenderFns,h._compiled=!0),e&&(h.functional=!0),n&&(h._scopeId=n),s?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},h._ssrRegister=c):o&&(c=o),c){var u=h.functional,f=u?h.render:h.beforeCreate;u?(h._injectStyles=c,h.render=function(t,i){return c.call(i),f(t,i)}):h.beforeCreate=f?[].concat(f,c):[c]}return{esModule:r,exports:a,options:h}}},function(t,i){var e=function(){window.cancelAnimationFrame=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(t){return window.clearTimeout(t)}}(),window.requestAnimationFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)}}()};t.exports=e},function(t,i){var e=function(t,i){if(t===i)return!0;if(t.length!==i.length)return!1;for(var e=0;e<t.length;++e)if(t[e]!==i[e])return!1;return!0};t.exports=e},function(t,i){function e(){Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)});var t=void 0,i=void 0,n=void 0,s=void 0,r=void 0,a=void 0,l=1,c=arguments[0]||{},h=!1,u=arguments.length;if("boolean"==typeof c&&(h=c,c=arguments[1]||{},l++),"object"!==(void 0===c?"undefined":o(c))&&"function"!=typeof c&&(c={}),l===u)return c;for(;l<u;l++)if(null!=(i=arguments[l]))for(t in i)n=c[t],s=i[t],r=Array.isArray(s),h&&s&&("object"===(void 0===s?"undefined":o(s))||r)?(r?(r=!1,a=n&&Array.isArray(n)?n:[]):a=n&&"object"===(void 0===n?"undefined":o(n))?n:{},c[t]=e(h,a,s)):void 0!==s&&(c[t]=s);return c}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};t.exports=e},function(t,i,e){"use strict";var o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{ref:"wrap"},[t.navigation?e("div",{class:t.leftSwitchClass,style:t.leftSwitch,on:{click:t.leftSwitchClick}},[t._t("left-switch")],2):t._e(),t._v(" "),t.navigation?e("div",{class:t.rightSwitchClass,style:t.rightSwitch,on:{click:t.rightSwitchClick}},[t._t("right-switch")],2):t._e(),t._v(" "),e("div",{ref:"realBox",style:t.pos,on:{mouseenter:t.enter,mouseleave:t.leave,touchstart:t.touchStart,touchmove:t.touchMove,touchend:t.touchEnd}},[e("div",{ref:"slotList",style:t.float},[t._t("default")],2),t._v(" "),e("div",{style:t.float,domProps:{innerHTML:t._s(t.copyHtml)}})])])},n=[],s={render:o,staticRenderFns:n};i.a=s}]).default}))}}]);