webpackJsonp([1],{56:function(t,e,n){"use strict";(function(t,e){function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function i(e,n){if(t.localStorage){var o;t.localStorage.setItem("rgl-8",JSON.stringify((o={},o[e]=n,o)))}}var s=function(){var t="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(e,n,o,r){var a=e&&e.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s]);else n||(n=a||{});if(1===i)n.children=r;else if(i>1){for(var u=Array(i),l=0;l<i;l++)u[l]=arguments[l+3];n.children=u}return{$$typeof:t,type:e,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),u=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),l=n(0),c=function(t){return t&&t.__esModule?t:{default:t}}(l),f=n(3),y=(0,f.WidthProvider)(f.Responsive),p=function(e){var n={};if(t.localStorage)try{n=JSON.parse(t.localStorage.getItem("rgl-8"))||{}}catch(t){}return n[e]}("layouts")||{},d=function(t){function e(n){o(this,e);var a=r(this,t.call(this,n));return a.state={layouts:JSON.parse(JSON.stringify(p))},a}return a(e,t),e.prototype.resetLayout=function(){this.setState({layouts:{}})},e.prototype.onLayoutChange=function(t,e){i("layouts",e),this.setState({layouts:e})},e.prototype.render=function(){var t=this;return s("div",{},void 0,s("button",{onClick:function(){return t.resetLayout()}},void 0,"Reset Layout"),s(y,{className:"layout",cols:{lg:12,md:10,sm:6,xs:4,xxs:2},rowHeight:30,layouts:this.state.layouts,onLayoutChange:function(e,n){return t.onLayoutChange(e,n)}},void 0,s("div",{"data-grid":{w:2,h:3,x:0,y:0,minW:2,minH:3}},"1",s("span",{className:"text"},void 0,"1")),s("div",{"data-grid":{w:2,h:3,x:2,y:0,minW:2,minH:3}},"2",s("span",{className:"text"},void 0,"2")),s("div",{"data-grid":{w:2,h:3,x:4,y:0,minW:2,minH:3}},"3",s("span",{className:"text"},void 0,"3")),s("div",{"data-grid":{w:2,h:3,x:6,y:0,minW:2,minH:3}},"4",s("span",{className:"text"},void 0,"4")),s("div",{"data-grid":{w:2,h:3,x:8,y:0,minW:2,minH:3}},"5",s("span",{className:"text"},void 0,"5"))))},u(e,null,[{key:"defaultProps",get:function(){return{className:"layout",cols:{lg:12,md:10,sm:6,xs:4,xxs:2},rowHeight:30}}}]),e}(c.default.PureComponent);e.exports=d,n.c[n.s]===e&&n(4)(e.exports)}).call(e,n(7),n(2)(t))}},[56]);