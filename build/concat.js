/*
 The Rocket JavaScript library.

  This library is free software: you can redistribute it and/or modify
  it under the terms of the GNU Lesser General Public License as
  published by the Free Software Foundation, either version 3 of the
  License, or (at your option) any later version.

  This library is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU Lesser General Public License for more details.

  You should have received a copy of the GNU Lesser General Public
  License along with this library.  If not, see
  <http://www.gnu.org/licenses/>.
*/
var rocket={};rocket.reduceRight=function(a,b,c){rocket.reduceRight=Array.prototype.reduceRight?function(a,b,c){return 3===arguments.length?Array.prototype.reduceRight.call(a,b,c):Array.prototype.reduceRight.call(a,b)}:function(a,b,c){var g,h=a.length-1;3===arguments.length?(g=h,h=c):(g=h-1,h=a[h]);for(;-1>g;--g)h=b(h,a[g],g,a);return h};return 3===arguments.length?rocket.reduceRight(a,b,c):rocket.reduceRight(a,b)};rocket.reduce=function(a,b,c){rocket.reduce=Array.prototype.reduce?function(a,b,c){return 3===arguments.length?Array.prototype.reduce.call(a,b,c):Array.prototype.reduce.call(a,b)}:function(a,b,c){var g,h=a.length,k;3===arguments.length?(g=0,k=c):(g=1,k=a[0]);for(;g<h;++g)k=b(k,a[g],g,a);return k};return 3===arguments.length?rocket.reduce(a,b,c):rocket.reduce(a,b)};rocket.ready=function(a){var b,c,e,d,f,g;"complete"===document.readyState?(rocket.ready=function(a){a()},a()):(e=new rocket.Elements([window]),c=!0,b=[a],rocket.ready=function(a){b.push(a)},d=function(){var a,f;if(c)for(c=!1,e.removeEventListener(["load.ready","DOMContentLoaded.ready"],d),g&&clearInterval(g),rocket.ready=function(a){a()},a=0,f=b.length;a<f;++a)b[a]()},e.addEventListener(["load.ready","DOMContentLoaded.ready"],d),document.documentElement&&null===window.frameElement?(f=function(){if(c){try{document.documentElement.doScroll("left")}catch(a){return setTimeout(f,
17)}d()}},setTimeout(f,0)):g=setInterval(function(){"complete"===document.readyState&&d()},17))};rocket.range=function(a,b,c){var e,d,f=c||1;1===arguments.length?(e=0,d=a):(e=a,d=b+1);for(var g=[];e<d;e+=f)g.push(e);return g};rocket.random=function(a,b){return 2===arguments.length?Math.floor(Math.random()*(b-a+1))+a:1===arguments.length?rocket.random(0,a):rocket.random(0,2147483647)};rocket.querySelectorAll=function(a,b){return 2!==arguments.length||b?rocket.querySelectorAll.helper_(a,b):[]};
rocket.querySelectorAll.helper_=function(a,b){rocket.querySelectorAll.helper_=document.querySelectorAll?function(a,b){return(b||document).querySelectorAll(a)}:function(a,b){if(-1!==a.indexOf(",")){for(var d=a.split(","),f=[],g=0;d[g];++g)for(var h=rocket.querySelectorAll.helper_(d[g],b),k=0;h[k];++k)f.push(h[k]);return f}if("#"===a.charAt(0)){if(b&&b!==document){h=b.getElementsByTagName("*");f=[];for(g=0;h[g];++g)h[g].id===a.substr(1)&&f.push(h[g]);return f}return(f=document.getElementById(a.substr(1)))&&
[f]||[]}h=a.indexOf(".");if(-1===h)return(b||document).getElementsByTagName(a);for(var g=a.substr(0,h),d=a.substr(h+1),f=[],l={},h=(b||document).getElementsByTagName(g||"*"),g=0;h[g];++g){var m=h[g].className;if(!(m in l)){var n=rocket.arrayify(m);l[m]=!1;for(k=0;n[k];++k)if(n[k]===d){l[m]=!0;break}}l[m]&&f.push(h[g])}return f};return rocket.querySelectorAll.helper_(a,b)};rocket.post=function(a,b,c,e){var d=new rocket.XMLHttpRequest;d.open("POST",a);d.data=b;d.setRequestHeader("Content-type","application/x-www-form-urlencoded");c&&d.addEventListener("success",function(){c(d.responseText)});e&&d.addEventListener("error",function(){e()});d.send();return d};rocket.pluck=function(a,b){var c=[],e;for(e in a)c.push(a[e][b]);return c};rocket.padRight=function(a,b,c){a+="";b-=a.length;return 0<b?a+Array(b+1).join(c||" ").substr(0,b):a};rocket.padLeft=function(a,b,c){a+="";b-=a.length;return 0<b?Array(b+1).join(c||" ").substr(0,b)+a:a};rocket.object=function(a,b){var c={};c[a]=b;return c};rocket.numberFormat=function(a,b,c,e){var d=b,f=c,g=e;switch(arguments.length){case 1:d=0;case 2:f=".";case 3:g=","}var h;h=0<d?0:2;a=parseFloat(a);var k=0>a;if(0>d){var l=Math.pow(10,Math.abs(d));a=Math.floor(a/l)*l}else a=a.toFixed(d);l=(""+a).split("");"-"===l[0]&&l.splice(0,1);var m=l.length-1-d;0<d?l[m]=f:m+=d;if(g)for(d=m-1;0<d;--d)(m-d)%3===h&&l.splice(d,0,g);return(k?"-":"")+l.join("")};rocket.now=function(){rocket.now=Date.now?Date.now:function(){return(new Date).getTime()};return rocket.now()};rocket.mround=function(a,b){return(a/b).toFixed(0)*b};rocket.map=function(a,b,c){rocket.map=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var g=0,h=a.length,k=[];g<h;++g)k[g]=b.call(c,a[g],g,a);return k};return rocket.map(a,b,c)};rocket.load=function(a,b){var c,e,d,f;c=document.head?document.head:document.getElementsByTagName("head")[0];e=document.createElement("script");e.async=!0;e.type="text/javascript";e.src=a;e.onload=e.onreadystatechange=function(){var a=rocket.load.elements_[f].readyState;a&&"loaded"!==a&&"complete"!==a||(b&&b(),rocket.load.elements_[d].removeChild(rocket.load.elements_[f]),delete rocket.load.elements_[d],delete rocket.load.elements_[f])};c.insertBefore(e,c.firstChild);d=++rocket.load.guid_;f=++rocket.load.guid_;
rocket.load.elements_[d]=c;rocket.load.elements_[f]=e;e=c=null};rocket.load.guid_=0;rocket.load.elements_={};rocket.lexeme=function(a){for(var b=0,c=a.length,e=[],d,f;d=a.charAt(b++);){f=b;if("a"<=d&&"z">=d||"A"<=d&&"Z">=d||"$"===d||"_"===d){do d=a.charAt(b++);while("a"<=d&&"z">=d||"A"<=d&&"Z">=d||"$"===d||"_"===d||"0"<=d&&"9">=d);d="identifier";--b}else if("/"===d)if("*"===a.charAt(b)){do d=a.charAt(b++);while(b<c&&("*"!==d||"/"!==a.charAt(b)));d="comment";++b}else if("/"===a.charAt(b)){do d=a.charAt(b++);while(b<c&&"\n"!==d);d="comment";b!==c&&--b}else{do d=a.charAt(b++);while(b<c&&"\n"!==d&&("/"!==d||
"\\"===a.charAt(b-2)&&"\\"!==a.charAt(b-3)));"\n"===d||b===c?(b=f,d="operator"):d="regexp"}else if(d in rocket.lexeme.operators_)d="operator";else if("'"===d||'"'===d){var g=d;do d=a.charAt(b++);while(b<c&&(d!==g||"\\"===a.charAt(b-2)&&"\\"!==a.charAt(b-3)));d="string"}else{if("0"<=d&&"9">=d||"."===d&&"0"<=a.charAt(b+1)&&"9">=a.charAt(b+1)){do d=a.charAt(b++);while("0"<=d&&"9">=d||"."===d||"x"===d||"e"===d);d="number"}else{do d=a.charAt(b++);while(" "===d||"\t"===d||"\r"===d||"\n"===d);d="whitespace"}--b}f=
a.substr(f-1,b-f+1);e.push({type:"identifier"===d&&f in rocket.lexeme.words_?"word":d,value:f})}return e};rocket.lexeme.operators_={"!":1,"#":1,"%":1,"&":1,"(":1,")":1,"*":1,"+":1,",":1,"-":1,".":1,"/":1,":":1,";":1,"<":1,"=":1,">":1,"?":1,"@":1,"[":1,"]":1,"^":1,"{":1,"|":1,"}":1};
rocket.lexeme.words_={"true":1,"false":1,"break":1,"case":1,"catch":1,"continue":1,"debugger":1,"default":1,"delete":1,"do":1,"else":1,"finally":1,"for":1,"function":1,"if":1,"in":1,"instanceof":1,"new":1,"null":1,"return":1,"switch":1,"this":1,"throw":1,"try":1,"typeof":1,"var":1,"void":1,"while":1,"with":1,undefined:1,prototype:1,arguments:1};rocket.lastIndexOf=function(a,b,c){rocket.lastIndexOf=Array.prototype.lastIndexOf?function(a,b,c){return Array.prototype.lastIndexOf.apply(a,Array.prototype.slice.call(arguments,1))}:function(a,b,c){var g;g=a.length-1;for(g=2===arguments.length?g:Math.min(g,c);-1<g;--g)if(b===a[g])return g;return-1};return rocket.lastIndexOf.apply(window,arguments)};rocket.keys=function(a){rocket.keys=Object.keys?function(a){if(null!==a&&"object"===typeof a)return Object.keys(a);var c=[],e;for(e in a)c.push(e);return c}:function(a){var c=[],e;for(e in a)c.push(e);return c};return rocket.keys(a)};rocket.KEY={backspace:8,tab:9,enter:13,shift:16,ctrl:17,control:17,alt:18,escape:27,space:32,up:38,down:40,left:37,right:39,home:36,end:35,del:46,pageUp:33,pageDown:34};rocket.JSON={};rocket.JSON.parse=function(a){rocket.JSON.parse=window.JSON&&window.JSON.parse?window.JSON.parse:function(a){return eval("("+a+")")};return rocket.JSON.parse(a)};rocket.JSON.quote_=function(a){rocket.JSON.quote_.escapable_.lastIndex=0;return rocket.JSON.quote_.escapable_.test(a)?'"'+a.replace(rocket.JSON.quote_.escapable_,rocket.JSON.quote_.replacer_)+'"':'"'+a+'"'};rocket.JSON.quote_.replacer_=function(a){return rocket.JSON.quote_.meta_[a]||"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)};
rocket.JSON.quote_.escapable_=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;rocket.JSON.quote_.meta_={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};
rocket.JSON.stringify=function(a){rocket.JSON.stringify=window.JSON&&window.JSON.stringify?window.JSON.stringify:function(a){var c,e,d;if(void 0!==a){e=typeof a;if("string"===e)return rocket.JSON.quote_(a);if("number"===e||"boolean"===e||null===a)return""+a;if("number"===typeof a.length){e=a.length;c=0;for(d=[];c<e;++c)d[c]=void 0===a[c]?"null":rocket.JSON.stringify(a[c]);return"["+d.join(",")+"]"}d=[];for(c in a)void 0!==a[c]&&d.push(rocket.JSON.quote_(c)+":"+rocket.JSON.stringify(a[c]));return"{"+
d.join(",")+"}"}};return rocket.JSON.stringify(a)};rocket.isEmpty=function(a){for(var b in a)return!1;return!0};rocket.isArray=function(a){return a&&"number"===typeof a.length&&"object"===typeof a||!1};rocket.insertRule=function(a){var b=document.createElement("style");b.type="text/css";document.head?document.head.appendChild(b):document.getElementsByTagName("head")[0].appendChild(b);var c=document.styleSheets[document.styleSheets.length-1];rocket.insertRule=c.insertRule?function(a){c.insertRule(a,0)}:function(a){var b=a.indexOf("{");c.addRule(a.substr(0,b),a.substr(b+1,a.lastIndexOf("}")-b-1))};rocket.insertRule(a)};rocket.inherits=function(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.prototype.superClass_=b.prototype};rocket.indexOf=function(a,b,c){rocket.indexOf=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=c||0;for(var g=a.length;c<g;++c)if(b===a[c])return c;return-1};return rocket.indexOf(a,b,c)};rocket.htmlEntities=function(a){var b=document.createElement("span");b.innerText=b.textContent=a;return b.innerHTML};rocket.guid=function(a){return a[rocket.expando]||(a[rocket.expando]=++rocket.guid.counter_)};rocket.guid.peek=function(a){return a[rocket.expando]||0};rocket.guid.counter_=0;rocket.forEach=function(a,b,c){rocket.forEach=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var g=0,h=a.length;g<h;++g)b.call(c,a[g],g,a)};rocket.forEach(a,b,c)};rocket.flip=function(a){var b={},c;for(c in a)b[a[c]]=c;return b};rocket.filter=function(a,b,c){rocket.filter=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var g=0,h=a.length,k=[];g<h;++g)b.call(c,a[g],g,a)&&k.push(a[g]);return k};return rocket.filter(a,b,c)};rocket.extend=function(a,b){for(var c,e=1;c=arguments[e];++e)for(var d in c)a[d]=c[d];return a};rocket.every=function(a,b,c){rocket.every=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var g=0,h=a.length;g<h;++g)if(!b.call(c,a[g],g,a))return!1;return!0};return rocket.every(a,b,c)};rocket.EventTarget=function(){};rocket.EventTarget.listener_tree_={};rocket.EventTarget.getListenerTree=function(){return rocket.EventTarget.listener_tree_};rocket.EventTarget.removeAllEventListeners=function(a){var b=rocket.EventTarget.listener_tree_,c;for(c in b)for(var e in b[+c]){for(var d in b[+c][e]){var f=b[+c][e][d][0].get_target();(!a||f.nodeName||f.window&&f.window===f.self)&&rocket.EventTarget.prototype.removeEventListener.call(f);break}break}};
rocket.EventTarget.prototype.addEventListener=function(a,b){var c=rocket.guid(this),e,d=a.indexOf(".");-1!==d?(e=a.substr(d+1),a=a.substr(0,d)):e="";switch(void 0){case rocket.EventTarget.listener_tree_[c]:rocket.EventTarget.listener_tree_[c]={};case rocket.EventTarget.listener_tree_[c][a]:rocket.EventTarget.listener_tree_[c][a]={};case rocket.EventTarget.listener_tree_[c][a][e]:rocket.EventTarget.listener_tree_[c][a][e]=[]}c=rocket.EventTarget.listener_tree_[c][a][e];e=0;for(d=c.length;e<d;++e)if(c[e].handleEvent===
b||c[e].handleEvent===b.handleEvent)return;d=new rocket.EventListener(this,a,b);if(this.nodeName||this.window&&this.window===this.self){var f=d.get_bound(),g=d.get_bound_types();if(this.addEventListener)for(e=0;g[e];++e)this.addEventListener(g[e],f,!1);else for(e=0;g[e];++e)this.attachEvent("on"+g[e],f)}c.push(d)};
rocket.EventTarget.prototype.removeEventListener=function(a,b){var c=rocket.guid.peek(this);if(c){var e=rocket.EventTarget.listener_tree_[c];if(e){var d,f;0!==arguments.length&&-1!==(f=a.indexOf("."))?(d=a.substr(f+1),a=a.substr(0,f)):d="";for(var g in e)if(0===arguments.length||""===a||a===g)for(var h in e[g])if(""===d||h===d)for(f=0;e[g][h][f];++f){var k=e[g][h][f].handleEvent;if(2!==arguments.length||b===k||b.handleEvent===k){if(this.nodeName||this.window&&this.window===this.self){var k=e[g][h][f],
l=k.get_bound(),m=k.get_bound_types();if(this.removeEventListener)for(var n=0;m[n];++n)this.removeEventListener(m[n],l,!1);else for(n=0;m[n];++n)this.detachEvent("on"+m[n],l);k.remove_bound()}e[g][h].splice(f,1);if(rocket.isEmpty(e[g][h])){delete e[g][h];rocket.isEmpty(e[g])&&(delete e[g],rocket.isEmpty(rocket.EventTarget.listener_tree_[c])&&delete rocket.EventTarget.listener_tree_[c]);break}--f}}}}};
rocket.EventTarget.prototype.dispatchEvent=function(a){var b=rocket.guid.peek(this),c;a.type?(c=a,a=a.type):c=new rocket.Event(a);c.target||(c.target=this);if(b){var e,d=a.indexOf(".");-1!==d?(e=a.substr(d+1),a=a.substr(0,d)):e="";if((b=rocket.EventTarget.listener_tree_[b])&&b[a])for(var f in b[a])if(""===e||f===e){for(var d=[],g=0;b[a][f][g];++g)d.push(b[a][f][g]);for(g=0;d[g];++g)if(-1!==rocket.indexOf(b[a][f],d[g])&&(d[g].handleEvent.call(this,c),c.immediatePropagationStopped))return!c.defaultPrevented}}this.nodeName&&
this.parentNode&&!c.propagationStopped&&rocket.EventTarget.prototype.dispatchEvent.call(this.parentNode,c);return!c.defaultPrevented};rocket.EventListener=function(a,b,c){this.target_=a;this.type_=b;this.handleEvent=c.handleEvent||c};rocket.EventListener.listener_key_=0;rocket.EventListener.listeners_={};rocket.EventListener.getListeners=function(){return rocket.EventListener.listeners_};rocket.EventListener.prototype.get_target=function(){return this.target_};
rocket.EventListener.prototype.get_bound=function(){if(!this.bound_handler_){var a=++rocket.EventListener.listener_key_;this.listener_key_=a;rocket.EventListener.listeners_[a]=this;this.bound_handler_=function(b){rocket.EventListener.listeners_[a]&&rocket.EventListener.listeners_[a].handleEvent.call(rocket.EventListener.listeners_[a].target_,new rocket.Event(b))};var b=rocket.EventListener.event_listener_transformers_[this.type_];b&&(this.bound_handler_=b.transformer(this.bound_handler_))}return this.bound_handler_};
rocket.EventListener.prototype.get_bound_types=function(){var a=rocket.EventListener.event_listener_transformers_[this.type_];return a?a.types:[this.type_]};rocket.EventListener.prototype.remove_bound=function(){delete rocket.EventListener.listeners_[this.listener_key_];delete this.bound_handler_;delete this.listener_key_};
rocket.EventListener.event_listener_transformer_after_key_down_=function(a){var b,c,e=function(){b&&(clearInterval(b),b=0);c=0},d,f,g,h=function(){d.value!==f&&(clearInterval(b),b=0,a.call(d,g))};return function(k){a.call(this,k);"keyup"===k.type?b&&(clearInterval(b),b=0,c&&(clearTimeout(c),c=0)):(b||(d=this,f=this.value,g=k,b=setInterval(h,17)),c&&clearTimeout(c),c=setTimeout(e,100))}};
rocket.EventListener.event_listener_transformer_mouse_enter_leave_=function(a){return function(b){var c=b.relatedTarget;if(c)for(;c!==this&&(c=c.parentNode););c||a.call(this,b)}};
rocket.EventListener.event_listener_transformers_={afterkeydown:{transformer:rocket.EventListener.event_listener_transformer_after_key_down_,types:["keydown","keyup"]},mouseenter:{transformer:rocket.EventListener.event_listener_transformer_mouse_enter_leave_,types:["mouseover"]},mouseleave:{transformer:rocket.EventListener.event_listener_transformer_mouse_enter_leave_,types:["mouseout"]}};rocket.Event=function(a,b,c){if(a.type){this.type=a.type;this.originalEvent=a;for(var e,d=0;e=rocket.Event.properties_[d];++d)this[e]=a[e];this.defaultPrevented=!0===this.defaultPrevented||!1===this.returnValue?!0:!1;this.propagationStopped=!0===this.cancelBubble?!0:!1;void 0===this.which&&void 0!==this.keyCode&&(this.which=this.keyCode);void 0===this.target&&void 0!==this.srcElement&&(this.target=this.srcElement);void 0===this.relatedTarget&&void 0!==this.fromElement&&void 0!==this.toElement&&(this.relatedTarget=
this.fromElement===this.target?this.toElement:this.fromElement);void 0===this.pageX&&void 0!==this.clientX&&(this.pageX=this.clientX,e=document.body,(d=document.documentElement)?this.pageX+=d.scrollLeft-d.clientLeft:e&&(this.pageX+=e.scrollLeft-e.clientLeft),this.pageY=this.clientY,d?this.pageY+=d.scrollTop-d.clientTop:e&&(this.pageY+=e.scrollTop-e.clientTop))}else this.type=a;1===arguments.length?this.cancelable=this.bubbles=!0:(this.bubbles=2===arguments.length?!0:b,this.cancelable=c)};
rocket.Event.properties_="which keyCode target srcElement relatedTarget fromElement toElement pageX pageY clientX clientY".split(" ");rocket.Event.prototype.propagationStopped=!1;rocket.Event.prototype.immediatePropagationStopped=!1;rocket.Event.prototype.defaultPrevented=!1;rocket.Event.prototype.stopPropagation=function(){this.originalEvent&&("function"===typeof this.originalEvent.stopPropagation?this.originalEvent.stopPropagation():this.originalEvent.cancelBubble=!0);this.propagationStopped=!0};
rocket.Event.prototype.stopImmediatePropagation=function(){this.originalEvent&&"function"===typeof this.originalEvent.stopImmediatePropagation&&this.originalEvent.stopImmediatePropagation();this.immediatePropagationStopped=!0};rocket.Event.prototype.preventDefault=function(){this.originalEvent&&("function"===typeof this.originalEvent.preventDefault?this.originalEvent.preventDefault():this.originalEvent.returnValue=!1);this.defaultPrevented=!0};rocket.equal=function(a,b){return rocket.equal.equal_(a,b,[],[])};rocket.equal.equal_=function(a,b,c,e){if(a===b)return!0;for(var d=0;c[d];++d)if(c[d]===a&&e[d]===b)return!0;if(null===a||"object"!==typeof a||null===b||"object"!==typeof b)return a===b;if(""+a!==""+b)return!1;var f=rocket.isArray(a),g=rocket.isArray(b);if(f&&!g||!f&&g)return!1;c.push(a);e.push(b);for(d in a)if(!rocket.equal.equal_(a[d],b[d],c,e))return!1;for(d in b)if(!(d in a))return!1;return!0};rocket.Elements=function(a){this.length=a.length;for(var b=0;a[b];++b)this[b]=a[b]};rocket.Elements.prototype.addClass=function(a){a=rocket.arrayify(a);for(var b={},c=0,e=this.length,d,f=a.length,g,h,k=a.join(" ");c<e;++c)if(g=this[c].className,g in b)this[c].className=b[g];else{if(""===g||g===k)h=a;else for(h=rocket.arrayify(g),d=0;d<f;++d)-1===rocket.indexOf(h,a[d])&&h.push(a[d]);this[c].className=b[g]=h.join(" ")}return this};
rocket.Elements.prototype.addEventListener=function(a,b){var c=0,e=this.length;for(a=rocket.arrayify(a);c<e;++c)for(var d=0;a[d];++d)rocket.EventTarget.prototype.addEventListener.call(this[c],a[d],b);return this};rocket.Elements.prototype.appendChild=function(a){var b,c;if(this.length)for(c=a.nodeType?[a]:a,a=0,b=c.length;a<b;++a)this[0].appendChild(c[a]);else c=[];return new rocket.Elements(c)};
rocket.Elements.attribute_map_={acceptcharset:"acceptCharset",accesskey:"accessKey",cellindex:"cellIndex",cellpadding:"cellPadding",cellspacing:"cellSpacing",characterset:"characterSet",classlist:"classList",classname:"className",clientheight:"clientHeight",clientleft:"clientLeft",clienttop:"clientTop",clientwidth:"clientWidth",colspan:"colSpan",contenteditable:"contentEditable",datetime:"dateTime",defaultcharset:"defaultCharset",defaultchecked:"defaultChecked",defaultselected:"defaultSelected",defaultvalue:"defaultValue",
defaultview:"defaultView",documentelement:"documentElement","for":"htmlFor",frameborder:"frameBorder",htmlfor:"htmlFor",innerhtml:"innerHTML",innertext:"innerText",keytype:"keyType",maxlength:"maxLength",noresize:"noResize",offsetheight:"offsetHeight",offsetleft:"offsetLeft",offsetparent:"offsetParent",offsettop:"offsetTop",offsetwidth:"offsetWidth",outerhtml:"outerHTML",outertext:"outerText",readonly:"readOnly",readystate:"readyState",rowindex:"rowIndex",rowspan:"rowSpan",screenleft:"screenLeft",
screentop:"screenTop",scrollheight:"scrollHeight",scrollleft:"scrollLeft",scrolltop:"scrollTop",scrollwidth:"scrollWidth",sectionrowindex:"sectionRowIndex",selectedindex:"selectedIndex",selectionend:"selectionEnd",selectionstart:"selectionStart",sourceindex:"sourceIndex",tabindex:"tabIndex",tagname:"tagName",tbodies:"tBodies",tfoot:"tFoot",thead:"tHead",usemap:"useMap",valign:"vAlign"};rocket.Elements.prototype.blur=function(){this.length&&this[0].blur();return this};
rocket.Elements.prototype.checked=function(a){return 0===arguments.length?this.getAttribute("checked"):this.setAttribute("checked",a)};rocket.Elements.prototype.children=function(){for(var a=0,b=this.length,c=[],e,d,f,g;a<b;++a)for(f=this[a].children,e=0,d=f.length;e<d;++e)g=f[e],1===g.nodeType&&c.push(g);return new rocket.Elements(c)};rocket.Elements.prototype.cloneNode=function(a){for(var b=[],c=0,e=this.length;c<e;++c)b[c]=this[c].cloneNode(a);return new rocket.Elements(b)};
rocket.Elements.prototype.contains=function(a){a=rocket.$(a);for(var b=0,c=this.length,e=a.length;b<c;++b)for(var d=0;d<e;++d)if(!this[b].contains(a[d]))return!1;return!0};rocket.Elements.prototype.dataset=function(a,b){var c,e,d=0,f=this.length;if(1===arguments.length){if("string"===typeof a){if(f)return this.dataset_get_(this[0],a);return}c=a}else c={},c[a]=b;for(;d<f;++d)for(e in c)this.dataset_set_(this[d],e,c[e]);return this};
rocket.Elements.prototype.dataset_get_=function(a,b){rocket.Elements.prototype.dataset_get_=a.dataset?function(a,b){return a.dataset[b]}:function(a,b){return a.getAttribute("data-"+b)};return rocket.Elements.prototype.dataset_get_(a,b)};rocket.Elements.prototype.dataset_set_=function(a,b,c){rocket.Elements.prototype.dataset_set_=a.dataset?function(a,b,c){a.dataset[b]=c}:function(a,b,c){a.setAttribute("data-"+b,c)};rocket.Elements.prototype.dataset_set_(a,b,c)};
rocket.Elements.prototype.disabled=function(a){return 0===arguments.length?this.getAttribute("disabled"):this.setAttribute("disabled",a)};rocket.Elements.prototype.dispatchEvent=function(a){var b=0,c=this.length;for(a=a.type?[a]:rocket.arrayify(a);b<c;++b)for(var e=0;a[e];++e)rocket.EventTarget.prototype.dispatchEvent.call(this[b],a[e]);return this};
rocket.Elements.prototype.every=function(a,b){rocket.Elements.prototype.every=Array.prototype.every?Array.prototype.every:function(a,b){return rocket.every(this,a,b)};return this.every(a,b)};rocket.Elements.prototype.fade=function(a,b,c){var e=0,d=this.length,f=this,g=[],h=[],k=[],l;for(c&&(l=function(){c.call(f)});e<d;++e)k[e]=new rocket.Elements([this[e]]),g[e]=k[e].style("opacity"),h[e]=a-g[e];rocket.step(function(a,b){for(e=0;e<d;++e)k[e].style("opacity",g[e]+b*h[e])},b,l);return this};
rocket.Elements.prototype.filter=function(a,b){return new rocket.Elements(rocket.filter(this,a,b))};
rocket.Elements.prototype.firstElementChild=function(){if(0===this.length)return new rocket.Elements([]);rocket.Elements.prototype.firstElementChild=void 0!==this[0].firstElementChild?function(){for(var a=0,b=this.length,c=[],e;a<b;++a)(e=this[a].firstElementChild)&&c.push(e);return new rocket.Elements(c)}:function(){for(var a=0,b=this.length,c=[],e;a<b;++a){for(e=this[a].firstChild;e&&1!==e.nodeType;)e=e.nextSibling;e&&c.push(e)}return new rocket.Elements(c)};return this.firstElementChild()};
rocket.Elements.prototype.fit=function(a){var b;b=arguments.length?a.getBoundingClientRect():rocket.$("html").getBoundingClientRect();for(var c=0,e=this.length;c<e;++c){var d=this.i(c),f=d.getBoundingClientRect();f.right>b.right&&(d.style("left",d.style("left")-f.right+b.right),f=d.getBoundingClientRect());f.left<b.left&&d.style("left",d.style("left")+b.left-f.left);f.bottom>b.bottom&&(d.style("top",d.style("top")-f.bottom+b.bottom),f=d.getBoundingClientRect());f.top<b.top&&d.style("top",d.style("top")+
b.top-f.top)}return this};rocket.Elements.prototype.focus=function(){this.length&&this[0].focus();return this};rocket.Elements.prototype.forEach=function(a,b){rocket.Elements.prototype.forEach=Array.prototype.forEach?Array.prototype.forEach:function(a,b){return rocket.forEach(this,a,b)};this.forEach(a,b)};
rocket.Elements.prototype.getAttribute=function(a){var b,c,e,d;if(this.length){b=this[0];if("value"===a&&"SELECT"===b.nodeName){if(b.multiple){a=b.options;c=0;e=a.length;for(d=[];c<e;++c)b=a[c],b.selected&&d.push(b.value||b.innerHTML);return d}if(a=b.value)return a;b=b.options[b.selectedIndex];return b.value||b.innerHTML}return b[rocket.Elements.attribute_map_[a]||a]}};
rocket.Elements.prototype.getBoundingClientRect=function(a){if(this.length){var b=this[0].getBoundingClientRect(),c=document.documentElement,e=document.body;a?c=a=0:(a=(0===window.pageYOffset?0:window.pageYOffset||c&&c.scrollTop||e&&e.scrollTop||0)-(c&&c.clientTop||e&&e.clientTop||0),c=(0===window.pageXOffset?0:window.pageXOffset||c&&c.scrollLeft||e&&e.scrollLeft||0)-(c&&c.clientLeft||e&&e.clientLeft||0));return{top:b.top+a,right:b.right+c,bottom:b.bottom+a,left:b.left+c,width:b.width||b.right-b.left,
height:b.height||b.bottom-b.top}}return{top:NaN,right:NaN,bottom:NaN,left:NaN,width:NaN,height:NaN}};rocket.Elements.prototype.getOffset=function(){if(this.length){var a=this.getAttribute("offsetLeft"),b=this.getAttribute("offsetTop"),c=this.getAttribute("offsetHeight"),e=this.getAttribute("offsetWidth"),d=this.getAttribute("offsetParent");return{top:b,right:a+e,bottom:b+c,left:a,width:e,height:c,parent:d}}return{top:NaN,right:NaN,bottom:NaN,left:NaN,width:NaN,height:NaN,parent:null}};
rocket.Elements.prototype.hasClass=function(a){a=rocket.arrayify(a);for(var b=[],c,e=0,d=this.length,f,g=a.length;e<d;++e)for(c=this[e].className,f=0;f<g;++f)if(b[f]||(b[f]=new RegExp("(?:\\s|^)"+a[f]+"(?:\\s|$)")),b[f].test(c))return!0;return!1};rocket.Elements.prototype.hide=function(a){return this.style(a?{visibility:"hidden"}:{display:"none"})};rocket.Elements.prototype.i=function(a){return this[a]?new rocket.Elements([this[a]]):new rocket.Elements([])};
rocket.Elements.prototype.indexOf=function(a,b){return rocket.indexOf(this,a.nodeType?a:a[0],b)};rocket.Elements.prototype.innerHTML=function(a){return 0===arguments.length?this.getAttribute("innerHTML"):this.setAttribute("innerHTML",a)};rocket.Elements.prototype.insertBefore=function(a,b){var c,e,d,f;if(this.length)for(f=a.nodeType?[a]:a,d=b?b.nodeType?b:b[0]:null,c=0,e=f.length;c<e;++c)this[0].insertBefore(f[c],d||null);else f=[];return new rocket.Elements(f)};
rocket.Elements.prototype.lastElementChild=function(){if(0===this.length)return new rocket.Elements([]);rocket.Elements.prototype.lastElementChild=void 0!==this[0].lastElementChild?function(){for(var a=0,b=this.length,c=[],e;a<b;++a)(e=this[a].lastElementChild)&&c.push(e);return new rocket.Elements(c)}:function(){for(var a=0,b=this.length,c=[],e;a<b;++a){for(e=this[a].lastChild;e&&1!==e.nodeType;)e=e.previousSibling;e&&c.push(e)}return new rocket.Elements(c)};return this.lastElementChild()};
rocket.Elements.prototype.lastIndexOf=function(a,b){return rocket.lastIndexOf(this,a.nodeType?a:a[0],b)};rocket.Elements.prototype.live=function(a,b,c){return this.addEventListener(b,function(b){for(var d=b.target;d&&d!==this;)rocket.Elements.matches_helper_(d,a)&&c.call(d,b),d=d.parentNode})};rocket.Elements.prototype.map=function(a,b){rocket.Elements.prototype.map=Array.prototype.map?Array.prototype.map:function(a,b){return rocket.map(this,a,b)};return this.map(a,b)};
rocket.Elements.prototype.matches=function(a){for(var b=0,c=this.length;b<c;++b)if(!rocket.Elements.matches_helper_(this[b],a))return!1;return!0};
rocket.Elements.matches_helper_=function(a,b){rocket.Elements.matches_helper_=document.body.webkitMatchesSelector?function(a,b){return a.webkitMatchesSelector(b)}:document.body.mozMatchesSelector?function(a,b){return a.mozMatchesSelector(b)}:document.body.msMatchesSelector?function(a,b){return a.msMatchesSelector(b)}:document.body.matches?function(a,b){return a.matches(b)}:function(a,b){if("#"===b.charAt(0))return a.id===b.substr(1);var d=b.indexOf(".");if(-1===d)return a.nodeName===b.toUpperCase();
var f=b.substr(0,d).toUpperCase();if(!f||f===a.nodeName)for(var d=b.substr(d+1),f=rocket.arrayify(a.className),g=0;f[g];++g)if(f[g]===d)return!0;return!1};return rocket.Elements.matches_helper_(a,b)};
rocket.Elements.prototype.nextElementSibling=function(){if(0===this.length)return new rocket.Elements([]);rocket.Elements.prototype.nextElementSibling=void 0!==this[0].nextElementSibling?function(){for(var a=0,b=this.length,c=[],e;a<b;++a)(e=this[a].nextElementSibling)&&c.push(e);return new rocket.Elements(c)}:function(){for(var a=0,b=this.length,c=[],e;a<b;++a){for(e=this[a].nextSibling;e&&1!==e.nodeType;)e=e.nextSibling;e&&c.push(e)}return new rocket.Elements(c)};return this.nextElementSibling()};
rocket.Elements.prototype.parentNode=function(){for(var a=0,b=this.length,c,e=[];a<b;++a)(c=this[a].parentNode)&&e.push(c);return new rocket.Elements(e)};rocket.Elements.prototype.pop=function(){if(this.length){var a=this[--this.length];delete this[this.length];return new rocket.Elements([a])}return new rocket.Elements([])};rocket.Elements.prototype.preventSelect=function(){return this.addEventListener(["selectstart.preventSelect","mousedown.preventSelect"],function(a){a.preventDefault()})};
rocket.Elements.prototype.previousElementSibling=function(){if(0===this.length)return new rocket.Elements([]);rocket.Elements.prototype.previousElementSibling=void 0!==this[0].previousElementSibling?function(){for(var a=0,b=this.length,c=[],e;a<b;++a)(e=this[a].previousElementSibling)&&c.push(e);return new rocket.Elements(c)}:function(){for(var a=0,b=this.length,c=[],e;a<b;++a){for(e=this[a].previousSibling;e&&1!==e.nodeType;)e=e.previousSibling;e&&c.push(e)}return new rocket.Elements(c)};return this.previousElementSibling()};
rocket.Elements.prototype.push=function(a){return Array.prototype.push.apply(this,arguments)};rocket.Elements.prototype.reduce=function(a,b){rocket.Elements.prototype.reduce=Array.prototype.reduce?Array.prototype.reduce:function(a,b){return 2===arguments.length?rocket.reduce(this,a,b):rocket.reduce(this,a)};return 2===arguments.length?this.reduce(a,b):this.reduce(a)};
rocket.Elements.prototype.reduceRight=function(a,b){rocket.Elements.prototype.reduceRight=Array.prototype.reduceRight?Array.prototype.reduceRight:function(a,b){return 2===arguments.length?rocket.reduceRight(this,a,b):rocket.reduceRight(this,a)};return 2===arguments.length?this.reduceRight(a,b):this.reduceRight(a)};rocket.Elements.prototype.removeChild=function(a){var b,c;if(this.length)for(c=a.nodeType?[a]:a,a=0,b=c.length;a<b;++a)this[0].removeChild(c[a]);else c=[];return new rocket.Elements(c)};
rocket.Elements.prototype.removeClass=function(a){a=rocket.arrayify(a);for(var b={},c=0,e=this.length,d,f=a.length,g,h,k,l=a.join(" ");c<e;++c)if(g=this[c].className,g in b)this[c].className=b[g];else{if(""===g||g===l)h=[];else for(h=rocket.arrayify(g),d=0;d<f;++d)k=rocket.indexOf(h,a[d]),-1!==k&&h.splice(k,1);this[c].className=b[g]=h.join(" ")}return this};
rocket.Elements.prototype.removeEventListener=function(a,b){var c,e=0,d=this.length;if(0===arguments.length)for(;e<d;++e)rocket.EventTarget.prototype.removeEventListener.call(this[e]);else for(c=rocket.arrayify(a);e<d;++e)for(var f=0;c[f];++f)1===arguments.length?rocket.EventTarget.prototype.removeEventListener.call(this[e],c[f]):rocket.EventTarget.prototype.removeEventListener.call(this[e],c[f],b);return this};
rocket.Elements.prototype.replaceChild=function(a,b){var c,e;return this.length?(c=a.nodeType?a:a[0],e=b.nodeType?b:b[0],this[0].replaceChild(c,e),new rocket.Elements([e])):new rocket.Elements([])};rocket.Elements.prototype.scrollIntoView=function(a){this.length&&(1===arguments.length?this[0].scrollIntoView(a):this[0].scrollIntoView());return this};rocket.Elements.prototype.selected=function(a){return 0===arguments.length?this.getAttribute("selected"):this.setAttribute("selected",a)};
rocket.Elements.prototype.selectionEnd=function(){return this.length?(rocket.Elements.prototype.selectionEnd=void 0!==this[0].selectionEnd?function(){return this.length?this[0].selectionEnd:-1}:function(){if(this.length){var a=document.selection.createRange(),b=this[0].value.length;return b-a.moveEnd("character",b)}return-1},this.selectionEnd()):-1};
rocket.Elements.prototype.selectionStart=function(){return this.length?(rocket.Elements.prototype.selectionStart=void 0!==this[0].selectionStart?function(){return this.length?this[0].selectionStart:-1}:function(){if(this.length){var a=document.selection.createRange();return Math.abs(a.moveStart("character",-this[0].value.length))}return-1},this.selectionStart()):-1};
rocket.Elements.prototype.setAttribute=function(a,b){var c;1===arguments.length?c=a:(c={},c[a]=b);for(var e=0,d=this.length,f,g,h,k,l,m,n,p;e<d;++e)for(var q in c)if("value"===q&&"SELECT"===this[e].nodeName)if(l=this[e].options,f=0,g=l.length,this[e].multiple)for(n=rocket.isArray(c[q])?c[q]:[c[q]],k=n.length;f<g;++f)for(l[f].selected=p=!1,h=0;h<k&&!1===p;++h){if(m=n[h]+"",l[f].value===m||l[f].innerHTML===m)l[f].selected=p=!0}else{for(h=-1;f<g&&-1===h;++f)l[f].value===c[q]+""&&(h=f);if(-1===h)for(f=
0;f<g&&-1===h;++f)l[f].innerHTML===c[q]+""&&(h=f);-1!==h&&(this[e].selectedIndex=h)}else this[e][rocket.Elements.attribute_map_[q]||q]=c[q];return this};
rocket.Elements.prototype.setSelectionRange=function(a,b){return this.length?(rocket.Elements.prototype.setSelectionRange=this[0].setSelectionRange?function(a,b){this.length&&(this[0].setSelectionRange(a,b),this[0].focus());return this}:function(a,b){var d;this.length&&(d=this[0].createTextRange(),d.moveStart("character",a),d.moveEnd("character",b-this[0].value.length),d.select());return this},this.setSelectionRange(a,b)):this};
rocket.Elements.prototype.shift=function(){if(this.length){for(var a=this[0],b=1,c=this.length;b<c;++b)this[b-1]=this[b];delete this[--this.length];return new rocket.Elements([a])}return new rocket.Elements([])};rocket.Elements.prototype.show=function(a){return this.style(a?{visibility:""}:{display:""})};rocket.Elements.prototype.slice=function(a,b){return new rocket.Elements(Array.prototype.slice.apply(this,arguments))};
rocket.Elements.prototype.some=function(a,b){rocket.Elements.prototype.some=Array.prototype.some?Array.prototype.some:function(a,b){return rocket.some(this,a,b)};return this.some(a,b)};rocket.Elements.prototype.splice=function(a,b,c){return new rocket.Elements(Array.prototype.splice.apply(this,arguments))};rocket.Elements.prototype.style_camel_case_=function(a){var b,c;if(-1===a.indexOf("-"))return a;a=a.split("-");b=a.length;for(c=1;c<b;++c)a[c]=a[c].charAt(0).toUpperCase()+a[c].substr(1);return a.join("")};
rocket.Elements.prototype.style=function(a,b){var c;if(1===arguments.length){if("string"===typeof a)return this.style_get_(a);c=a}else c={},c[a]=b;this.style_set_(c);return this};rocket.Elements.prototype.style_get_=function(a){a=this.style_camel_case_(a);var b;if(this.length){if(b=rocket.Elements.style_transformers_[a])return b.get(this[0]);a=this[0].style[a];return a.match(/^\d+(\.\d+)?px$/)?parseFloat(a)||0:a}};
rocket.Elements.prototype.style_set_=function(a){for(var b in a)this.style_set_helper_(b,a[b])};rocket.Elements.prototype.style_set_helper_=function(a,b){for(var c=this.style_camel_case_(a),e=rocket.Elements.style_transformers_[c],d=0,f=this.length;d<f;++d)(e=rocket.Elements.style_transformers_[c])?e.set(this[d],b):this[d].style[c]="number"===typeof b?b+"px":b};rocket.Elements.style_transformer_float_get_=function(a){a=a.style;return a.cssFloat||a.styleFloat||""};
rocket.Elements.style_transformer_float_set_=function(a,b){var c=a.style;c.cssFloat=b;c.styleFloat=b};rocket.Elements.style_transformer_opacity_get_=function(a){rocket.Elements.style_transformer_opacity_get_=void 0===a.style.opacity?function(a){return(a=a.style.filter)?(a=/opacity=(\d+)/.exec(a))?a[1]/100:1:1}:function(a){return parseFloat(a.style.opacity)||""===a.style.opacity&&1||0};return rocket.Elements.style_transformer_opacity_get_(a)};
rocket.Elements.style_transformer_opacity_set_=function(a,b){rocket.Elements.style_transformer_opacity_set_=void 0===a.style.opacity?function(a,b){var d=a.style,f=d.filter,g=/alpha\(opacity=\d+(\.\d+)?\)/,h;d.zoom||(d.zoom=1);1===b?f&&g.test(f)&&((h=f.replace(g,""))?d.filter=h.replace(/^,|,$|,,/,""):d.removeAttribute("filter")):(h="alpha(opacity="+100*b+")",f?g.test(f)?d.filter=f.replace(g,h):d.filter+=","+h:d.filter=h)}:function(a,b){a.style.opacity=b};rocket.Elements.style_transformer_opacity_set_(a,
b)};rocket.Elements.style_transformers_={"float":{get:rocket.Elements.style_transformer_float_get_,set:rocket.Elements.style_transformer_float_set_},opacity:{get:rocket.Elements.style_transformer_opacity_get_,set:rocket.Elements.style_transformer_opacity_set_}};rocket.Elements.prototype.submit=function(){this.length&&this[0].submit();return this};
rocket.Elements.prototype.toggleClass=function(a){a=rocket.arrayify(a);for(var b={},c=0,e=this.length,d,f=a.length,g,h,k,l=a.join(" ");c<e;++c)if(g=this[c].className,g in b)this[c].className=b[g];else{if(""===g)h=a;else if(g===l)h=[];else for(h=rocket.arrayify(g),d=0;d<f;++d)k=rocket.indexOf(h,a[d]),-1===k?h.push(a[d]):h.splice(k,1);this[c].className=b[g]=h.join(" ")}return this};rocket.Elements.prototype.unshift=function(a){return Array.prototype.unshift.apply(this,arguments)||this.length};
rocket.Elements.prototype.value=function(a){return 0===arguments.length?this.getAttribute("value"):this.setAttribute("value",a)};rocket.Disposable=function(){};rocket.Disposable.prototype.dispose=function(){};rocket.debounce=function(a,b){var c;return function(){clearTimeout(c);var e=this,d=arguments;c=setTimeout(function(){b.apply(e,d)},a)}};rocket.dateISOString=function(a){a=a||new Date;rocket.dateISOString=a.toISOString?function(a){return(a||new Date).toISOString()}:function(a){a=a||new Date;return a.getUTCFullYear()+"-"+rocket.padLeft(a.getUTCMonth()+1+"",2,"0")+"-"+rocket.padLeft(a.getUTCDate()+"",2,"0")+"T"+rocket.padLeft(a.getUTCHours()+"",2,"0")+":"+rocket.padLeft(a.getUTCMinutes()+"",2,"0")+":"+rocket.padLeft(a.getUTCSeconds()+"",2,"0")+"."+rocket.padLeft(a.getUTCMilliseconds()+"",3,"0")+"Z"};return rocket.dateISOString(a)};rocket.createElement=function(a){return new rocket.Elements([document.createElement(a)])};rocket.cookie=function(a,b,c){var e,d="";switch(arguments.length){case 3:d="; expires="+(new Date(rocket.now()+864E5*c)).toUTCString();case 2:e={};e[a]=b;break;case 1:if("string"===typeof a)return rocket.cookie.parse_cookie_()[a]||"";e=a}if(e)for(var f in e)document.cookie=encodeURIComponent(f)+"="+encodeURIComponent(e[f])+d;return rocket.cookie.parse_cookie_()};
rocket.cookie.parse_cookie_=function(){var a=document.cookie,b={};if(a)for(var a=a.split("; "),c=0,e=a.length;c<e;++c){var d=a[c].indexOf("=");b[decodeURIComponent(a[c].substr(0,d))]=decodeURIComponent(a[c].substr(d+1))}return b};rocket.construct=function(a,b){function c(){a.apply(this,b)}c.prototype=a.prototype;return new c};rocket.Component=function(){};rocket.inherits(rocket.Component,rocket.EventTarget);rocket.Component.prototype.component_disposed_=!1;rocket.Component.prototype.component_decorated_=!1;rocket.Component.prototype.component_rendered_=!1;rocket.Component.prototype.component_element_created_=!1;rocket.Component.prototype.component_element_referenced_=!1;rocket.Component.prototype.getComponentRendered=function(){return this.component_rendered_};rocket.Component.prototype.getComponentDisposed=function(){return this.component_disposed_};
rocket.Component.prototype.setComponentElement=function(a){this.component_element_=a};rocket.Component.prototype.getComponentElement=function(){return this.component_element_};rocket.Component.prototype.createElement=function(){this.component_element_created_||this.component_element_referenced_||(this.component_element_created_=!0,this.component_element_=this.createElementInternal());return this.component_element_};
rocket.Component.prototype.decorate=function(a){this.component_decorated_||(this.component_element_created_||(this.component_element_referenced_=!0,this.component_element_=a),this.decorateInternal(a),this.component_decorated_=!0)};rocket.Component.prototype.render=function(a){this.component_rendered_=!0;var b=this.createElement();this.decorate(b);arguments.length?a.appendChild(b):(new rocket.Elements([document.body])).appendChild(b)};
rocket.Component.prototype.dispose=function(){this.component_decorated_&&!this.component_disposed_&&(this.disposeInternal(),this.component_disposed_=!0,this.component_rendered_&&this.component_element_.parentNode().removeChild(this.component_element_),delete this.component_element_,this.removeEventListener())};rocket.Component.prototype.createElementInternal=function(){return rocket.createElement("div")};rocket.Component.prototype.decorateInternal=function(a){};
rocket.Component.prototype.disposeInternal=function(){};rocket.Draggable=function(){};rocket.inherits(rocket.Draggable,rocket.Component);rocket.Draggable.z_index_=0;rocket.Draggable.prototype.fixX_=!1;rocket.Draggable.prototype.fixY_=!1;rocket.Draggable.prototype.fill_=!1;rocket.Draggable.prototype.z_index_=!1;rocket.Draggable.prototype.append_child_=!1;rocket.Draggable.prototype.setFixX=function(a){this.fixX_=a};rocket.Draggable.prototype.setFixY=function(a){this.fixY_=a};
rocket.Draggable.prototype.setX=function(a){this.x_=a;this.init_draggable_container_();this.container_&&this.container_.style({left:this.x_})};rocket.Draggable.prototype.setY=function(a){this.y_=a;this.init_draggable_container_();this.container_&&this.container_.style({top:this.y_})};rocket.Draggable.prototype.setFill=function(a){this.fill_=a};rocket.Draggable.prototype.setZIndex=function(a){this.z_index_=a};rocket.Draggable.prototype.setAppendChild=function(a){this.append_child_=a};
rocket.Draggable.prototype.setBounds=function(a){this.bounds_=rocket.$(a)};
rocket.Draggable.prototype.decorateInternal=function(a){this.element_=a;var b=this;void 0===this.x_&&void 0===this.y_?(this.first_mouse_down_handler_=function(c){b.init_draggable_container_();a.removeEventListener(["mousedown","touchstart"],b.first_mouse_down_handler_);b.mouse_down_handler_(c)},a.addEventListener(["mousedown","touchstart"],this.first_mouse_down_handler_)):this.init_draggable_container_();this.mouse_down_handler_=function(a){a.preventDefault();b.offset_rect_=b.container_.getOffset();
b.dragging_rect_=b.element_.getBoundingClientRect();b.bounding_rect_=(b.bounds_||rocket.$("html")).getBoundingClientRect();b.mouse_x_=a.pageX;b.mouse_y_=a.pageY;b.z_index_&&b.container_.style({zIndex:""+ ++rocket.Draggable.z_index_});b.append_child_&&(b.container_.parentNode().appendChild(b.container_),b.mouse_move_handler_(a));(new rocket.Elements([document])).addEventListener(["mousemove","touchmove"],b.mouse_move_handler_).addEventListener(["mouseup","touchend"],b.mouse_up_handler_);b.dispatchEvent("dragstart")};
this.mouse_move_handler_=function(a){"touchmove"===a.type&&a.preventDefault();b.fixX_||b.container_.style({left:rocket.clamp(a.pageX-b.mouse_x_,b.bounding_rect_.left-b.dragging_rect_.left,b.bounding_rect_.right-b.dragging_rect_.right)+b.offset_rect_.left});b.fixY_||b.container_.style({top:rocket.clamp(a.pageY-b.mouse_y_,b.bounding_rect_.top-b.dragging_rect_.top,b.bounding_rect_.bottom-b.dragging_rect_.bottom)+b.offset_rect_.top})};this.mouse_up_handler_=function(){(new rocket.Elements([document])).removeEventListener(["mousemove",
"touchmove"],b.mouse_move_handler_).removeEventListener(["mouseup","touchend"],b.mouse_up_handler_);b.dispatchEvent("dragend")}};
rocket.Draggable.prototype.init_draggable_container_=function(){if(!this.container_&&this.element_){var a=this.element_.getBoundingClientRect(),b,c;void 0===this.x_?""===this.element_.style("left")?b="":(b=0,a.height=0):b=this.x_;void 0===this.y_?""===this.element_.style("top")?c="":(c=0,a.height=0):c=this.y_;this.container_=rocket.createElement("div").preventSelect().style({position:"absolute",width:a.width,height:a.height,left:b,top:c}).addEventListener(["mousedown","touchstart"],this.mouse_down_handler_);
this.setComponentElement(this.container_);b=this.element_.parentNode();b.insertBefore(this.container_,this.element_);this.fill_&&(this.filler_=rocket.createElement("div").style({width:a.width,height:a.height}),b.insertBefore(this.filler_,this.element_));this.container_.appendChild(this.element_)}};
rocket.Draggable.prototype.disposeInternal=function(){this.first_mouse_down_handler_&&this.element_.removeEventListener(["mousedown","touchstart"],this.first_mouse_down_handler_);if(this.container_){var a=this.container_.parentNode();this.getComponentRendered()||a.insertBefore(this.element_,this.container_);this.container_.removeEventListener();this.mouse_up_handler_();a.removeChild(this.container_);this.fill_&&a.removeChild(this.filler_);this.removeEventListener();delete this.container_}};rocket.InfiniScroll=function(){};rocket.inherits(rocket.InfiniScroll,rocket.Component);rocket.InfiniScroll.prototype.row_height_=20;rocket.InfiniScroll.prototype.pad_results_=!1;rocket.InfiniScroll.prototype.no_wrap_=!1;rocket.InfiniScroll.prototype.setPadResults=function(a){this.pad_results_=a;this.init_sizes_()};rocket.InfiniScroll.prototype.setHeight=function(a){this.height_=a;this.init_sizes_()};rocket.InfiniScroll.prototype.setWrap=function(a){this.no_wrap_=a};
rocket.InfiniScroll.prototype.setRowHeight=function(a){this.row_height_=a;this.init_sizes_()};rocket.InfiniScroll.prototype.setLength=function(a){this.length_=a;this.init_sizes_()};rocket.InfiniScroll.prototype.setQuery=function(a){this.query_=a};rocket.InfiniScroll.prototype.data=function(a){var b=this;return this.query_=function(c,e){b.setResults(a.splice(c,e))}};rocket.InfiniScroll.prototype.getTable=function(){return this.table_};rocket.InfiniScroll.prototype.getResult=function(){return this.result_};
rocket.InfiniScroll.prototype.getCell=function(){return this.cell_};rocket.InfiniScroll.prototype.getRow=function(){return this.row_};rocket.InfiniScroll.prototype.getScroller=function(){return this.scrolling_element_};
rocket.InfiniScroll.prototype.decorateInternal=function(a){this.container_=rocket.createElement("div");this.padding_=rocket.createElement("div");this.scrolling_element_=a;this.padding_.style({height:0});this.container_.appendChild(this.padding_);a.appendChild(this.container_);var b=this;this.element_scroller_=function(){var c=a.getAttribute("scrollTop"),e=Math.floor(c/b.row_height_);b.pad_results_&&(e=c<b.scroll_top_?e-Math.ceil(b.query_length_/3):e-Math.ceil(b.query_length_/6),0>e&&(e=0));b.scroll_top_=
c;c=e+b.query_length_-b.length_;0<c&&(e-=c);0>e&&(e=0);c=e+b.query_length_-b.length_;c=b.query_length_-(0<c?c:0);if(e!==b.index_||c!==b.index_length_)b.index_=e,b.index_length_=c,b.query_.call(b,e,c)};a.addEventListener("scroll",this.element_scroller_);this.init_sizes_()};
rocket.InfiniScroll.prototype.init_sizes_=function(){this.getComponentElement()&&(this.getComponentElement().style({height:this.height_,"overflow-y":"scroll"}),this.container_.style({height:this.row_height_*this.length_}),this.query_length_=Math.ceil(this.height_/this.row_height_),this.pad_results_&&(this.query_length_*=2),this.getComponentElement().dispatchEvent("scroll"))};
rocket.InfiniScroll.prototype.setResults=function(a){for(var b=a.length,c=0;c in a[0];)++c;var e=rocket.table(c,b),d=this;e.live("td","click",function(){d.result_=a[this.parentNode.rowIndex];d.cell_=new rocket.Elements([this]);d.row_=new rocket.Elements([this.parentNode]);d.dispatchEvent("select")});for(var f=0;f<b;++f){e.trs[f].style({height:this.row_height_});for(var g=0;g<c;++g)e.trs[f].tds[g].innerHTML(a[f][g]),this.no_wrap_||e.trs[f].tds[g].style({"white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"})}this.table_?
(this.table_.removeEventListener(),this.container_.replaceChild(e,this.table_)):this.container_.appendChild(e);this.table_=e;this.padding_.style({height:this.index_*this.row_height_});this.dispatchEvent("drawresults")};rocket.InfiniScroll.prototype.disposeInternal=function(){this.container_&&(this.table_&&this.table_.removeEventListener(),this.getComponentElement().removeEventListener("scroll",this.element_scroller_),delete this.container_)};rocket.Input=function(){};rocket.inherits(rocket.Input,rocket.Component);rocket.Input.prototype.input_displayed_=!1;rocket.Input.prototype.getInputDisplayed=function(){return this.input_displayed_};rocket.Input.prototype.getInputElement=function(){return this.getComponentElement()};rocket.Input.prototype.createElementInternal=function(){return rocket.createElement("input")};
rocket.Input.prototype.input_add_document_listener_=function(){if(!this.input_document_listener_){var a=this;this.input_document_listener_=function(b){a.hide()}}(new rocket.Elements([document])).addEventListener(["mousedown.Input","touchstart.Input"],this.input_document_listener_)};rocket.Input.prototype.input_remove_document_listener_=function(){(new rocket.Elements([document])).removeEventListener(["mousedown.Input","touchstart.Input"],this.input_document_listener_)};
rocket.Input.prototype.decorateInternal=function(a){var b=this;a.addEventListener("keyup.Input",function(a){a.which===rocket.KEY.tab&&b.show()}).addEventListener(["mousedown.Input","touchstart.Input"],function(a){a.stopPropagation();b.input_displayed_||((new rocket.Elements([document])).dispatchEvent("mousedown").dispatchEvent("touchstart"),b.show())}).addEventListener(["afterkeydown.Input","cut.Input","paste.Input"],function(a){a.which!==rocket.KEY.enter&&a.which!==rocket.KEY.tab&&a.which!==rocket.KEY.shift&&
b.show();"keydown"===a.type&&(a.which===rocket.KEY.down?(b.show(),b.down()):a.which===rocket.KEY.up?(b.show(),b.up()):a.which===rocket.KEY.pageDown?(b.show(),b.pageDown()):a.which===rocket.KEY.pageUp?(b.show(),b.pageUp()):a.which===rocket.KEY.escape?b.hide():a.which===rocket.KEY.enter?(b.enter(),b.hide()):a.which===rocket.KEY.tab&&b.hide())})};rocket.Input.prototype.disposeInternal=function(){this.input_displayed_&&this.hide();this.getInputElement().removeEventListener(".Input");this.input_remove_document_listener_()};
rocket.Input.prototype.show=function(){this.input_displayed_||(this.input_displayed_=!0,this.input_add_document_listener_(),this.showInternal(),this.dispatchEvent("show"));var a=this.getInputElement().value();this.input_value_!==a&&(this.input_value_=a,this.change())};rocket.Input.prototype.hide=function(){this.input_displayed_&&(this.input_displayed_=!1,this.input_remove_document_listener_(),this.hideInternal(),this.dispatchEvent("hide"))};
rocket.Input.prototype.enter=function(){this.enterInternal();this.dispatchEvent("enter")};rocket.Input.prototype.up=function(){this.upInternal()};rocket.Input.prototype.down=function(){this.downInternal()};rocket.Input.prototype.pageUp=function(){this.pageUpInternal()};rocket.Input.prototype.pageDown=function(){this.pageDownInternal()};rocket.Input.prototype.change=function(){this.changeInternal()};rocket.Input.prototype.changeInternal=function(){};rocket.Input.prototype.showInternal=function(){};
rocket.Input.prototype.hideInternal=function(){};rocket.Input.prototype.enterInternal=function(){};rocket.Input.prototype.upInternal=function(){};rocket.Input.prototype.downInternal=function(){};rocket.Input.prototype.pageUpInternal=function(){for(var a=0;5>a;++a)this.up()};rocket.Input.prototype.pageDownInternal=function(){for(var a=0;5>a;++a)this.down()};rocket.DateInput=function(){};rocket.inherits(rocket.DateInput,rocket.Input);
rocket.DateInput.prototype.showInternal=function(){var a=this.getInputElement().getBoundingClientRect(),b,c,e,d=this;this.container_=rocket.createElement("div").style({"border-radius":3,position:"absolute",border:"1px solid #888888",cursor:"pointer",width:300,left:a.left,top:a.bottom-1}).preventSelect().addEventListener(["mousedown","touchstart"],function(a){a.stopPropagation()}).live("td","mouseover",function(){b&&(b.style.backgroundColor=c,b.style.color=e);c=this.style.backgroundColor;e=this.style.color;
this.style.backgroundColor="#D5E2FF";this.style.color="";b=this}).live("td","click",function(){if("&lt;&lt;"===this.innerHTML)--d.calendar_year_,d.draw_calendar_();else if("&lt;"===this.innerHTML)d.calendar_month_?--d.calendar_month_:(d.calendar_month_=11,--d.calendar_year_),d.draw_calendar_();else if("&gt;&gt;"===this.innerHTML)++d.calendar_year_,d.draw_calendar_();else if("&gt;"===this.innerHTML)11>d.calendar_month_?++d.calendar_month_:(d.calendar_month_=0,++d.calendar_year_),d.draw_calendar_();
else{var a=+this.innerHTML;if(a){var b=d.calendar_year_,c=d.calendar_month_;1===this.parentNode.rowIndex&&6<a?0===c&&(--b,c=12):4<this.parentNode.rowIndex&&22>a?(11===c&&++b,c=(c+2)%12||12):++c;d.getInputElement().value(rocket.padLeft(c,2,"0")+"/"+rocket.padLeft(this.innerHTML,2,"0")+"/"+b).setSelectionRange(0,10).focus();d.hide()}}});this.changeInternal();(new rocket.Elements([document.body])).appendChild(this.container_);this.container_.fit()};
rocket.DateInput.prototype.enterInternal=function(){var a=rocket.strToDate(this.getInputElement().value());a&&this.getInputElement().value(rocket.padLeft(a.getMonth()+1,2,"0")+"/"+rocket.padLeft(a.getDate(),2,"0")+"/"+a.getFullYear()).setSelectionRange(0,10)};
rocket.DateInput.prototype.hideInternal=function(){var a=rocket.strToDate(this.getInputElement().value());a&&this.getInputElement().value(rocket.padLeft(a.getMonth()+1,2,"0")+"/"+rocket.padLeft(a.getDate(),2,"0")+"/"+a.getFullYear());this.container_.removeEventListener();(new rocket.Elements([document.body])).removeChild(this.container_);delete this.container_};
rocket.DateInput.prototype.changeInternal=function(){var a=(this.entered_date_=rocket.strToDate(this.getInputElement().value()))||new Date;this.calendar_year_=a.getFullYear();this.calendar_month_=a.getMonth();this.draw_calendar_()};
rocket.DateInput.prototype.draw_calendar_=function(){var a=rocket.createElement("table"),b=rocket.createElement("tbody");a.setAttribute({width:"100%",cellpadding:"5",cellspacing:"1",border:"0"}).style({"table-layout":"fixed","background-color":"#CCCCCC"});b.style({"background-color":"#FFFFFF"});var c=rocket.createElement("tr");this.draw_calendar_header_(c);b.appendChild(c);this.draw_calendar_contents_(b);a.appendChild(b);this.container_.innerHTML("").appendChild(a)};
rocket.DateInput.prototype.draw_calendar_header_=function(a){var b;b=rocket.createElement("td");b.innerHTML("&lt;&lt;").setAttribute({align:"center"});a.appendChild(b);b=rocket.createElement("td");b.innerHTML("&lt;").setAttribute({align:"center"});a.appendChild(b);b=rocket.createElement("td");b.innerHTML("January February March April May June July August September October November December".split(" ")[this.calendar_month_]+" "+this.calendar_year_).setAttribute({colspan:3,align:"center"});a.appendChild(b);
b=rocket.createElement("td");b.innerHTML("&gt;").setAttribute({align:"center"});a.appendChild(b);b=rocket.createElement("td");b.innerHTML("&gt;&gt;").setAttribute({align:"center"});a.appendChild(b)};
rocket.DateInput.prototype.draw_calendar_contents_=function(a){for(var b=32-(new Date(this.calendar_year_,this.calendar_month_,32)).getDate(),c=32-(new Date(this.calendar_year_,this.calendar_month_-1,32)).getDate(),e=(new Date(this.calendar_year_,this.calendar_month_)).getDay(),d=new Date,f=d.getFullYear(),g=d.getMonth(),d=d.getDate(),e=c-(e||7),h=0,k=0,l=0;6>l;++l){for(var m=rocket.createElement("tr"),n=0;7>n;++n){var p=rocket.createElement("td");p.setAttribute({align:"center"});e<c?(++e,p.style({color:"#888888"}),
p.innerHTML(""+e)):h<b?(++h,f===this.calendar_year_&&g===this.calendar_month_&&d===h&&(m.style({"background-color":"#EEEEEE"}),p.style({"background-color":"#DDDDDD"})),this.entered_date_&&this.entered_date_.getFullYear()===this.calendar_year_&&this.entered_date_.getMonth()===this.calendar_month_&&this.entered_date_.getDate()===h&&p.style({"background-color":"#10246A",color:"#FFFFFF"}),p.innerHTML(""+h)):(++k,p.style({color:"#888888"}),p.innerHTML(""+k));m.appendChild(p)}a.appendChild(m)}};rocket.clone=function(a){return rocket.clone.clone_(a,[],[])};rocket.clone.clone_=function(a,b,c){var e;if(null===a||"object"!==typeof a)return a;e=rocket.indexOf(b,a);if(-1!==e)return c[e];if(rocket.isArray(a)){e=[];b.push(a);c.push(e);for(var d=0,f=a.length;d<f;++d)e.push(rocket.clone.clone_(a[d],b,c))}else for(d in e={},b.push(a),c.push(e),a)e[d]=rocket.clone.clone_(a[d],b,c);return e};rocket.clamp=function(a,b,c){return a<b?b:a>c?c:a};rocket.chunk=function(a,b){for(var c=[],e=0,d=a.length;e<d;e+=b)c.push(a.slice(e,e+b));return c};rocket.bind=function(a,b,c){rocket.bind=Function.prototype.bind?function(a,b,c){return Function.prototype.bind.apply(a,Array.prototype.slice.call(arguments,1))}:function(a,b,c){var g;if(2===arguments.length)return function(){return a.apply(b,arguments)};g=Array.prototype.slice.call(arguments,2);return function(){return a.apply(b,g.concat(Array.prototype.slice.call(arguments,0)))}};return rocket.bind.apply(null,arguments)};rocket.AutoTab=function(a){this.elements_=rocket.$(a);this.inputs_=[];this.values_=[];for(a=0;this.elements_[a];++a)this.inputs_.push(this.elements_[a]),this.values_.push(this.elements_[a].value);var b=this;this.listener_=function(a){var e=this.value,d=rocket.indexOf(b.inputs_,this),f=this.maxLength,g=(new rocket.Elements([this])).selectionStart(),h=(new rocket.Elements([this])).selectionEnd(),k,l,m,n;"keydown"===a.type&&g===h&&(a.which===rocket.KEY.left&&b.inputs_[d-1]&&0===g?(k=-1,m=l=b.inputs_[d-
1].value.length):a.which===rocket.KEY.right&&b.inputs_[d+1]&&g===e.length?(k=1,m=l=0):a.which===rocket.KEY.backspace&&b.inputs_[d-1]&&0===g&&(k=-1,l=b.inputs_[d-1].value.length,m=b.inputs_[d-1].value.length));e.length===f&&b.values_[d].length<f&&b.inputs_[d+1]&&g===f&&h===f&&(k=1,n=!0,l=0,m=b.inputs_[d+1].value.length);k&&((new rocket.Elements([b.inputs_[d+k]])).focus().setSelectionRange(l,m),n||a.preventDefault());b.values_[d]=e};this.elements_.addEventListener(["keydown.AutoTab","keyup.AutoTab"],
this.listener_)};rocket.AutoTab.prototype.dispose=function(){this.elements_&&(this.elements_.removeEventListener(["keydown.AutoTab","keyup.AutoTab"],this.listener_),delete this.elements_,delete this.inputs_,delete this.listener_)};rocket.AutoSuggest=function(){};rocket.inherits(rocket.AutoSuggest,rocket.Input);rocket.AutoSuggest.prototype.getContainer=function(){return this.container_};rocket.AutoSuggest.prototype.getTable=function(){return this.table_};rocket.AutoSuggest.prototype.getTBody=function(){return this.tbody_};
rocket.AutoSuggest.prototype.showInternal=function(){this.container_=rocket.createElement("div");this.scroller_=rocket.createElement("div");var a=this.getInputElement().getBoundingClientRect(),b=this;this.results_||(this.results_=[]);this.container_.style({"border-radius":3,position:"absolute","background-color":"#FFFFFF",border:"1px solid #888888",cursor:"pointer",width:a.width-2,top:a.bottom-1,left:a.left}).preventSelect().addEventListener(["mousedown","touchstart"],function(a){a.stopPropagation()}).live("tr",
"mouseover",function(){b.highlight_(new rocket.Elements([this]),!1)}).live("tr","click",function(){this.parentNode===b.tbody_[0]&&(b.enter(),b.hide())});this.scroller_.style({"max-height":200,"overflow-y":"auto","overflow-x":"hidden"});this.draw_results_();this.container_.appendChild(this.scroller_);(new rocket.Elements([document.body])).appendChild(this.container_)};rocket.AutoSuggest.prototype.changeInternal=function(){this.query_(this.getInputElement().value());this.draw_results_()};
rocket.AutoSuggest.prototype.draw_results_=function(){this.highlighted_=new rocket.Elements([]);this.table_=rocket.createElement("table");this.tbody_=rocket.createElement("tbody");this.table_.setAttribute({width:"100%",cellpadding:"1",cellspacing:"0",border:"0"}).style({"table-layout":"fixed"});for(var a=0;this.results_[a];++a){for(var b=rocket.createElement("tr"),c=0;this.results_[a][c];++c)b.appendChild(rocket.createElement("td").innerHTML(this.results_[a][c]).style({"white-space":"nowrap",overflow:"hidden",
"text-overflow":"ellipsis"}));this.tbody_.appendChild(b)}this.table_.appendChild(this.tbody_);this.scroller_.innerHTML("").appendChild(this.table_);this.dispatchEvent("drawresults")};rocket.AutoSuggest.prototype.setResults=function(a){this.results_=a;this.draw_results_()};rocket.AutoSuggest.prototype.setQuery=function(a){this.query_=a};
rocket.AutoSuggest.prototype.data=function(a){a.sort(function(a,b){for(var d=0;a[d];++d){if(a[d]<b[d])return-1;if(a[d]>b[d])return 1}return 0});var b=this;this.query_=function(c){var e=[];c=c.toLowerCase();for(var d=0;a[d];++d)for(var f=0;a[d][f];++f)if(-1!==a[d][f].toLowerCase().replace(/<[^>]+>/g,"").indexOf(c)){e.push(a[d]);break}b.setResults(e)}};
rocket.AutoSuggest.prototype.highlight_=function(a,b){this.highlighted_.style({backgroundColor:""});this.highlighted_=a;this.highlighted_.style({backgroundColor:"#D5E2FF"});if(b){var c=this.highlighted_.getBoundingClientRect(),e=this.scroller_.getBoundingClientRect();c.bottom>e.bottom?this.scroller_.setAttribute({scrollTop:this.scroller_.getAttribute("scrollTop")+c.bottom-e.bottom}):c.top<e.top&&this.scroller_.setAttribute({scrollTop:this.scroller_.getAttribute("scrollTop")-e.top+c.top})}};
rocket.AutoSuggest.prototype.setResult=function(a){this.result_=a;this.getInputElement().value(a[0].replace(/<[^>]+>/g,""))};rocket.AutoSuggest.prototype.getResult=function(){return this.result_};
rocket.AutoSuggest.prototype.enterInternal=function(){var a;this.highlighted_.length?a=this.results_[this.highlighted_.getAttribute("rowIndex")]:1===this.results_.length&&(a=this.results_[0]);a&&(this.setResult(a),(new rocket.Elements([document.body])).contains(this.getInputElement())&&this.getInputElement().setSelectionRange(0,a[0].length).focus(),this.dispatchEvent("select"))};
rocket.AutoSuggest.prototype.hideInternal=function(){this.container_.removeEventListener();(new rocket.Elements([document.body])).removeChild(this.container_);delete this.container_};rocket.AutoSuggest.prototype.upInternal=function(){var a=this.tbody_.children(),b=this.highlighted_.getAttribute("rowIndex");b?this.highlight_(a.i(b-1),!0):this.highlight_(a.i(a.length-1),!0)};
rocket.AutoSuggest.prototype.downInternal=function(){var a=this.tbody_.children(),b=this.highlighted_.getAttribute("rowIndex");a[b+1]?this.highlight_(a.i(b+1),!0):this.highlight_(a.i(0),!0)};rocket.AutoSelect=function(){this.addEventListener("show",function(){if(this.getResult()){this.place_holder_=rocket.createElement("div");this.getInputElement().value("");var a=this.getInputElement().getBoundingClientRect();this.place_holder_.style({"border-radius":3,position:"absolute","background-color":"#FFFFFF",border:"1px solid #888888",top:0,width:a.width-2,left:a.left}).innerHTML(this.getResult()[0]);(new rocket.Elements([document.body])).appendChild(this.place_holder_);var b=this.place_holder_.getBoundingClientRect();
this.place_holder_.style({top:a.top-b.height+1})}});this.addEventListener("hide",function(){this.place_holder_&&(this.getInputElement().value(this.getResult()[0]),(new rocket.Elements([document.body])).removeChild(this.place_holder_),delete this.place_holder_)})};rocket.inherits(rocket.AutoSelect,rocket.AutoSuggest);rocket.AutoSelect.prototype.getPlaceHolder=function(){return this.place_holder_};rocket.arrayify=function(a){if("string"!==typeof a)return a||[];a=rocket.trim(a);return""===a?[]:-1===a.indexOf(",")?-1===a.indexOf("  ")&&-1===a.indexOf("\r")&&-1===a.indexOf("\n")&&-1===a.indexOf("\t")?a.split(" "):a.split(/\s+/):a.split(/[\s,]+/)};rocket.$=function(a,b){var c;if("string"===typeof a)c=1===arguments.length?"#"===a.charAt(0)&&a.match(/^#[\w\d]+$/)?(c=document.getElementById(a.substr(1)))?[c]:[]:rocket.querySelectorAll(a,document):"string"===typeof b?rocket.querySelectorAll(a,rocket.querySelectorAll(b)[0]):b.nodeType?rocket.querySelectorAll(a,b):rocket.querySelectorAll(a,b[0]);else if(a)if(a.nodeType||a===window)c=[a];else if(rocket.isArray(a[0])){c=[];for(var e=0;a[e];++e)for(var d=0;a[e][d];++d)c.push(a[e][d])}else c=a;else c=
[];return new rocket.Elements(c)};rocket.round=function(a,b){if(0>b){var c=Math.pow(10,Math.abs(b));return Math.floor(a/c)*c}return parseFloat((+a).toFixed(b))};rocket.setInterval=function(a,b,c){rocket.setInterval=function(a,b,c){if(3>arguments.length)return setInterval(a,b);var g=Array.prototype.slice.call(arguments,2);return setInterval(function(){a.apply(window,g)},b)};window.setTimeout(function(a){!0===a&&(rocket.setInterval=setInterval)},0,!0);return rocket.setInterval.apply(window,arguments)};rocket.setTimeout=function(a,b,c){rocket.setTimeout=function(a,b,c){if(3>arguments.length)return setTimeout(a,b);var g=Array.prototype.slice.call(arguments,2);return setTimeout(function(){a.apply(window,g)},b)};window.setTimeout(function(a){!0===a&&(rocket.setTimeout=setTimeout)},0,!0);return rocket.setTimeout.apply(window,arguments)};rocket.some=function(a,b,c){rocket.some=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var g=0,h=a.length;g<h;++g)if(b.call(c,a[g],g,a))return!0;return!1};return rocket.some(a,b,c)};rocket.sort=function(a,b){for(var c=[],e=1;arguments[e];++e)if(rocket.isArray(arguments[e]))for(var d=0;arguments[e][d];++d)"string"===typeof arguments[e][d]||"number"===typeof arguments[e][d]?c.push({key:arguments[e][d]}):c.push(arguments[e][d]);else"string"===typeof arguments[e]||"number"===typeof arguments[e]?c.push({key:arguments[e]}):c.push(arguments[e]);var f=c.length;a.sort(function(a,b){for(var e=0;e<f;++e){var d=c[e],m=a[d.key],n=b[d.key];if(d["null"])if(null===m&&null===n)break;else{if(null===
m)return d.desc?1:-1;if(null===n)return d.desc?-1:1}"number"===d.type?(m=+m,n=+n):"money"===d.type?(m=+m.replace("(","-").replace(/[\$,\)]/g,""),n=+n.replace("(","-").replace(/[\$,\)]/g,"")):"date"===d.type?(m=m.split(/\D/)[2]+m.split(/\D/)[0]+m.split(/\D/)[1],n=n.split(/\D/)[2]+n.split(/\D/)[0]+n.split(/\D/)[1]):"static"!==d.type&&(m=""+m,n=""+n);if(m>n)return d.desc?-1:1;if(m<n)return d.desc?1:-1}return 0});return a};rocket.step=function(a,b,c,e){e=e||rocket.step.fps_;var d=b||rocket.step.duration_,f=rocket.now(),g=setInterval(function(){var b=(rocket.now()-f)/d;1<b&&(b=1);a(b,.5-Math.cos(Math.PI*b)/2);1===b&&(clearInterval(g),c&&c())},1E3/e);return g};rocket.step.duration_=300;rocket.step.fps_=20;rocket.strToDate=function(a){var b,c,e,d=new Date,f=a.length;a===a.replace(/\D+/g,"")?3>f?e=a:3===f||5===f||7===f?(c=a.substr(0,1),e=a.substr(1,2),b=a.substr(3,4)):9>f&&(c=a.substr(0,2),e=a.substr(2,2),b=a.substr(4,4)):(f=a.replace(/^\D+|\D+$/g,"").split(/\D+/),4>f.length&&(-1===a.indexOf("-")?(c=f[0],e=f[1],b=f[2]):(b=f[0],c=f[1],e=f[2])));if(!e)return null;b?100>b&&(b=b<rocket.strToDate.century_divider_?"20"+b:"19"+b):b=d.getFullYear();c||(c=d.getMonth()+1);return new Date(b,c-1,e)};
rocket.strToDate.century_divider_=(new Date).getFullYear()-2E3+10;rocket.strToTime=function(a){var b,c,e;-1!==a.indexOf("p")?e="pm":-1!==a.indexOf("a")&&(e="am");a=a.replace(/[^\d\:]/g,"");if(-1!==a.indexOf(":"))b=a.split(":")[0],c=a.split(":")[1];else{var d=a.length;if(1===d||3===d)b=a.substr(0,1),c=a.substr(1);else if(2===d||4===d)b=a.substr(0,2),c=a.substr(2)}return b?(e||(e=11<b||6>b?"pm":"am"),b=rocket.padLeft(""+(b%12||12),2,"0"),c=rocket.padLeft(""+c,2,"0"),b+":"+c+" "+e):null};rocket.sum=function(a){for(var b=arguments.length,c=0;b--;)c+=arguments[b];return c};rocket.table=function(a,b){var c,e;2===arguments.length?(c=a,e=b):(e=1,c=1===arguments.length?a:1);var d=rocket.createElement("table"),f=rocket.createElement("tbody");d.setAttribute({width:"100%",cellpadding:"0",cellspacing:"0",border:"0"});d.style({"table-layout":"fixed"});d.trs=[];d.tds=[];for(var g=0;g<e;++g){var h=rocket.createElement("tr");d.trs.push(h);h.tds=[];for(var k=0;k<c;++k){var l=rocket.createElement("td");h.appendChild(l);h.tds.push(l)}0===g&&(d.tds=h.tds);f.appendChild(h)}d.appendChild(f);
d.tbody=f;return d};rocket.table.Table_=function(){};rocket.table.Table_.Tr_=function(){};rocket.throttle=function(a,b){var c=!1,e,d,f=!1,g=function(){c=!1;f&&(f=!1,b.apply(e,d))};return function(){c?f=!0:(c=!0,setTimeout(g,a),e=this,d=arguments,b.apply(this,arguments))}};rocket.TimeInput=function(){};rocket.inherits(rocket.TimeInput,rocket.Input);
rocket.TimeInput.prototype.showInternal=function(){var a=this.getInputElement().getBoundingClientRect(),b,c,e,d={},f=this;this.container_=rocket.createElement("div").style({"border-radius":3,position:"absolute",border:"1px solid #888888",cursor:"pointer",width:400,left:a.left,top:a.bottom-1}).preventSelect().addEventListener(["mousedown","touchstart"],function(a){a.stopPropagation()}).live("td","mouseover",function(){b&&(b.style.backgroundColor=c,b.style.color=e);c=this.style.backgroundColor;e=this.style.color;
this.style.backgroundColor="#D5E2FF";this.style.color="";b=this}).live("td","click",function(){var a=this.parentNode.rowIndex;d[a]&&(d[a].style.backgroundColor="",d[a].style.color="");b=null;d[a]=this;this.style.backgroundColor="#10246A";this.style.color="#FFFFFF";var a=d[0],c=d[1],e=d[2];a&&c&&e&&(f.getInputElement().value(rocket.padLeft(a.innerHTML,2,"0")+":"+c.innerHTML+" "+e.innerHTML).focus().setSelectionRange(0,8),f.hide())});this.draw_times_();(new rocket.Elements([document.body])).appendChild(this.container_);
this.container_.fit()};
rocket.TimeInput.prototype.draw_times_=function(){var a=rocket.createElement("table"),b=rocket.createElement("tbody"),c,e;a.setAttribute({width:"100%",cellpadding:"5",cellspacing:"1",border:"0"}).style({"table-layout":"fixed","background-color":"#CCCCCC"});b.style({"background-color":"#FFFFFF"});c=rocket.createElement("tr");for(var d=0;12>d;++d)e=rocket.createElement("td"),e.setAttribute({align:"center"}),e.innerHTML(""+(d||12)),c.appendChild(e);b.appendChild(c);c=rocket.createElement("tr");for(d=
0;4>d;++d)e=rocket.createElement("td"),e.setAttribute({align:"center",colspan:3}),e.innerHTML(""+(15*d||"00")),c.appendChild(e);b.appendChild(c);c=rocket.createElement("tr");e=rocket.createElement("td");e.setAttribute({align:"center",colspan:6});e.innerHTML("am");c.appendChild(e);e=rocket.createElement("td");e.setAttribute({align:"center",colspan:6});e.innerHTML("pm");c.appendChild(e);b.appendChild(c);a.appendChild(b);this.container_.appendChild(a)};
rocket.TimeInput.prototype.enterInternal=function(){var a=rocket.strToTime(this.getInputElement().value());a&&this.getInputElement().value(a)};rocket.TimeInput.prototype.hideInternal=function(){var a=rocket.strToTime(this.getInputElement().value());a&&this.getInputElement().value(a);this.container_.removeEventListener();(new rocket.Elements([document.body])).removeChild(this.container_);delete this.container_};rocket.trim=function(a){rocket.trim=String.trim?String.trim:function(a){return a&&a.replace(/^\s+|\s+$/g,"")};return rocket.trim(a)};rocket.trimLeft=function(a){rocket.trimLeft=String.trimLeft?String.trimLeft:function(a){return a&&a.replace(/^\s+/,"")};return rocket.trimLeft(a)};rocket.trimRight=function(a){rocket.trimRight=String.trimRight?String.trimRight:function(a){return a&&a.replace(/\s+$/,"")};return rocket.trimRight(a)};rocket.unique=function(a){for(var b=[],c=0,e=a.length;c<e;++c)-1===rocket.indexOf(b,a[c])&&b.push(a[c]);return b};rocket.values=function(a){var b=[],c;for(c in a)b.push(a[c]);return b};rocket.version=15.01;rocket.expando="rocket_"+rocket.version;rocket.XMLHttpRequest=function(a){this.request_=a||new XMLHttpRequest;this.headers_={}};rocket.inherits(rocket.XMLHttpRequest,rocket.EventTarget);rocket.XMLHttpRequest.prototype.readyState=0;rocket.XMLHttpRequest.prototype.status=0;rocket.XMLHttpRequest.prototype.responseText="";rocket.XMLHttpRequest.prototype.uri_encode_=function(a){if("string"===typeof a)return a;var b=[],c;for(c in a)b.push(encodeURIComponent(c)+"="+encodeURIComponent(a[c]));return b.join("&").replace(/%20/g,"+")};
rocket.XMLHttpRequest.prototype.open=function(a,b){this.method_=a;this.url_=b;var c="GET"===a.toUpperCase();c&&this.init_data_();this.request_.open(a,b+(c&&this.saved_data_?(-1===b.indexOf("?")?"?":"&")+this.saved_data_:""),!0);this.init_ready_state_change_();this.headers_={};this.readyState=1;this.status=0;this.responseText="";this.removeEventListener();delete this.onreadystatechange;delete this.onabort};
rocket.XMLHttpRequest.prototype.send=function(a){this.method_&&this.method_.toUpperCase();a?this.request_.send(a):this.request_.send("POST"===this.method_.toUpperCase()?this.init_data_():"");if(this.onreadystatechange)this.onreadystatechange();this.dispatchEvent("readystatechange")};rocket.XMLHttpRequest.prototype.setRequestHeader=function(a,b){this.headers_[a]=b;this.request_.setRequestHeader(a,b)};
rocket.XMLHttpRequest.prototype.abort=function(){if(this.readyState){this.request_&&"function"===typeof this.request_.abort&&this.request_.abort();if(this.onabort)this.onabort();this.dispatchEvent("abort");this.removeEventListener();delete this.onreadystatechange;delete this.onabort;this.headers_={};this.status=this.readyState=0;this.responseText=""}};
rocket.XMLHttpRequest.prototype.init_data_=function(){var a;this.data?"string"===typeof this.data?this.saved_data_=this.data:(a="function"===typeof this.data?this.data():this.data,this.saved_data_=this.uri_encode_(a)):this.saved_data_="";return this.saved_data_};
rocket.XMLHttpRequest.prototype.init_ready_state_change_=function(){var a=++rocket.XMLHttpRequest.request_key_;rocket.XMLHttpRequest.requests_[a]=this;this.request_.onreadystatechange=function(){var b=rocket.XMLHttpRequest.requests_[a];if(b){b.readyState=b.request_.readyState;4===b.readyState&&(b.status=b.request_.status,200===b.status?(b.responseText=b.request_.responseText,"function"===typeof b.data&&b.saved_data_!==b.uri_encode_(b.data())?b.dispatchEvent("change"):b.dispatchEvent("nochange"),b.dispatchEvent("success")):
0!==b.status&&b.dispatchEvent("error"),b.dispatchEvent("complete"));if(b.onreadystatechange)b.onreadystatechange();b.dispatchEvent("readystatechange");4===b.readyState&&(b.removeEventListener(),delete b.onreadystatechange,delete b.onabort,delete rocket.XMLHttpRequest.requests_[a])}}};rocket.XMLHttpRequest.request_key_=0;rocket.XMLHttpRequest.requests_={};


var css = function(){};

/**
 * Set the CSS of an element
 * Replaces only what is sent in
 */

css.prototype.apply = function(ele, options){
  if ( // check if you be passing in what I need bish
    ele &&
    ele.nodeType &&
    options
  ) {
    // split the css properties and value into arrays
    var prop_values_pair = Object.entries(options);
    for (var i in prop_values_pair){ // apply each css prop
      ele.style[prop_values_pair[i][0]] = prop_values_pair[i][1];
    }
  }
};

css.prototype.color = function(color, opt_shade){
  // stores the current theme
  // will somehow store this in the state somehow
  var theme = this.get_theme('dark');

  /**
   * All colors
   * Also has the theme's color palette built in
   */
  var colors = {
    'primary': theme.primary,
    'secondary': theme.secondary,
    'secondary_focus': 'rgba(0, 227, 227, 0.1)',
    'gray': {
      '100': '#484848',
      '200': '#1c1c1c',
      '300': '#0f0f0f',
    },
    'black': {
      '200': '#000000',
    },
    'blue_gray': {
      '100': '#62727b',
      '200': '#37474f',
      '300': '#102027',
    },
    'cyan': {
      '100': '#76ffff',
      '200': '#18ffff',
      '300': '#00cbcc',
    },
    'white': {
      '100': '#ffffff',
      '200': '#ffffff',
      '300': '#e1e1e1',
    },
    'error': '#CF6679',
  };

  if (
    colors[color] &&
    opt_shade
  ) {
    return colors[color][opt_shade];
  } else if (
    colors[color] &&
    Object.prototype.hasOwnProperty.call(colors[color], 200)
  ) { // default to 200 shade level
    return colors[color][200];
  }
  // this only happens if its a secondary or primary color
  return colors[color];
};

css.prototype.get_theme = function(theme){
  var theme_palettes = {
    'dark': {
      'primary': '#121212',
      'secondary': '#18ffff',
    },
    'forest': {
      'primary': '#363030',
      'secondary': '#547980',
    },
    'beach': {
      'primary': '#355C7D',
      'secondary': '#6C5B7B',
    },
  };

  return theme_palettes[theme];
};



/**
 * Forge is used to make various elements
 * Mostly little things like buttons, links, icons
 * Will most likely blow this up later
 */

var forge = function() {};

forge.prototype.make = function(element, element_type) {
  var forgery = null;

  if (
    element &&
    typeof element === 'string' &&
    element_type &&
    typeof element_type === 'object'
  ) {
    forgery = this['get_' + element + '_'](element_type);
  }

  return forgery;
};

forge.prototype.get_button_ = function(button_args) {
  var button = document.createElement('button');
  button.classList.add('button');

  if (
    button_args &&
    typeof button_args === 'object'
  ) {
    button.innerHTML = button_args.name || 'Button';
    if (button_args.type){
      button.classList.add(button_args.type);
    }
  }

  return button;
};

forge.prototype.get_icon_ = function(icon_args) {
  var icon = document.createElement('img');
  icon.classList.add('icon');
  var theme = '';

  if (
    icon_args &&
    icon_args.file_name
  ) {
    if (icon_args.theme === 'light'){
      icon.setAttribute('src', 'img/icons/' + icon_args.file_name + '_light.svg');
    } else {
      icon.setAttribute('src', 'img/icons/' + icon_args.file_name + '_dark.svg');
    }
  } else {
    console.error('No icon name was given');
    return;
  }
  
  return icon;
};

// global vars
var $ = rocket.extend(rocket.$, rocket);
var css = new css();
var forge = new forge();

var callback = function(){
  // instantiate default components and layers
  (new component.navigation()
    .render(document.getElementsByTagName('nav')[0])
  );
  (new layer.home().render());
};

if (
  document.readyState === "complete" ||
  (
    document.readyState !== "loading" &&
    !document.documentElement.doScroll
  )
) {
  callback();
} else {
  document.addEventListener("DOMContentLoaded", callback);
}

var layer = function(){};

layer.prototype.render = function(opt_parent){
  var root = document.getElementsByTagName('main')[0];

  // clear and add new class
  root.removeAttribute('class');

  this.get_class().forEach(function(class_name){
    root.classList.add(class_name);
  });

  if (
    opt_parent &&
    opt_parent.nodeType
  ){
    this.decorate(opt_parent);
  } else { // otherwise render to <main>
    root.innerHTML = '';

    css.apply(root, {
      'background-color': css.color('primary'),
      'height': '100vh',
      'width': '100%',
      'padding': '60px 20px 0px 20px',
    });
    this.decorate(root);
  }

  // clear state for each layer
  this.state = {};
};

layer.prototype.decorate = function(parent) {
  // overwrite
};

layer.prototype.get_class = function() {
  return ['layer'];
};

var component = function() {};

component.prototype.render = function(parent) {
  if (
    parent &&
    parent.nodeType
  ){
    // clear and add new class
    parent.removeAttribute('class');

    this.get_class().forEach(function(class_name){
      parent.classList.add(class_name);
    });

    this.decorate(parent);
  } else { // otherwise append to the document body
    console.error('no parent was specified');
  }
};

/**
 * Main decorate function
 * Must be overriden by child components
 */

component.prototype.decorate = function(parent) {
  // overwrite me
};

component.prototype.get_class = function(parent) {
  return ['component'];
};

layer.about = function(){
  layer.apply(this, arguments);
};
$.inherits(layer.about, layer);

layer.about.prototype.decorate = function(parent) {
  var container = document.createElement('div');
  container.innerHTML = ('About page!');

  parent.appendChild(container);
};

layer.about.prototype.get_class = function(){
  return ['layer', 'about'];
};
layer.blog = function(){
  layer.apply(this, arguments);
};
$.inherits(layer.blog, layer);

layer.blog.prototype.decorate = function(parent) {
  var container = document.createElement('div');
  container.innerHTML = ('Blog page!');

  parent.appendChild(container);
};

layer.blog.prototype.get_class = function(){
  return ['layer', 'blog'];
};
layer.home = function(){
  layer.apply(this, arguments);
};
$.inherits(layer.home, layer);

layer.home.prototype.decorate = function(parent) {
  // nothing here
};

layer.home.prototype.get_class = function(){
  return ['layer', 'home'];
};

layer.projects = function(){
  layer.apply(this, arguments);
};
$.inherits(layer.projects, layer);

layer.projects.prototype.decorate = function(parent) {
  var container = document.createElement('div');
  container.innerHTML = ('Projects page!');

  parent.appendChild(container);
};

layer.projects.prototype.get_class = function(){
  return ['layer', 'projects'];
};
layer.sentence_generator = function(){
  layer.apply(this, arguments);
};
$.inherits(layer.sentence_generator, layer);

layer.sentence_generator.prototype.decorate = function(parent) {
  var self = this;
  this.inputs_ = {};
  var paper = new component.paper({
    'title': 'Sentence generator',
    'header': 'Type a letter and length to use, or check random for either',
  });

  // paper container
  var container = paper.get_container();

  // letter input
  var letter = new component.input.text({
    'label': 'What letter?',
    'update': function() {
      self.inputs_.letter = letter.value;
    },
  });
  letter.render(container);

  // random letter checkbox
  var letter_random = new component.input.check_box({
    'label': 'Random letter',
    'click': function() {
      self.inputs_.random_letter = letter_random.checked;
    },
  });
  letter_random.render(container);

  // word length input
  var word_length = new component.input.text({
    'label': 'How many words?',
    'update': function() {
      self.inputs_.word_length = word_length.value;
    },
  });
  word_length.render(container);

  // random word length input
  var word_length_random = new component.input.check_box({
    'label': 'Random word length',
    'click': function() {
      self.inputs_.random_length = word_length_random.checked;
    },
  });
  word_length_random.render(container);

  // submit button
  var submit_button = forge.make('button', {
    'name': 'Generate'
  });
  container.appendChild(submit_button);

  submit_button.addEventListener('click', function() {
    console.log(self.inputs_);
  });

  paper.render(parent);
};

layer.sentence_generator.prototype.get_class = function(){
  return ['layer', 'sentence_generator'];
};


component.chip = function(){
  component.apply(this, arguments);
};
$.inherits(component.chip, component);



component.input = function(settings){
  component.apply(this, arguments);
  this.settings = settings;
};
$.inherits(component.input, component);

component.input.prototype.decorate = function(parent){
  var container = document.createElement('div');
  this.decorate_contents(container);
  parent.appendChild(container);
};

/**
 * Override this with child classes
 * Main decorate contents function
 */

component.input.prototype.decorate_contents = function(type){
  console.warn('override decorate_contents()');
  this.decorate_blank();
};

/**
 * Render a blank, disabled input
 * This is just a fallback to avoid any crashing
 */
component.input.prototype.decorate_blank_ = function(){
  // todo
};

/**
 * Disable the input
 * boolean
 */
component.input.prototype.disable = function(disable){
  if (
    disable &&
    typeof disable === 'boolean'
  ) {
    this.disabled = true;
  } else {
    this.disabled = false;
  }
};


component.list = function(){
  component.apply(this, arguments);
};
$.inherits(component.list, component);

component.list.prototype.decorate = function(parent) {
  var list_container = document.createElement('div');

  var list = this.get_contents_();
  if (!list) {
    console.warn('no list items given');
    return;
  }

  list.forEach(function(list_item) {
    var container = document.createElement('div');
    var height = '30px';
    var line_height = '33px';

    css.apply(container, {
      'height': 'auto',
      'line-height': line_height,
      'cursor': 'pointer',
      'display': 'flex',
      'width': '95%',
      'margin': '0 auto',
      'padding': '10px',
      'transition': 'background .3s, border .3s',
      'border-radius': '0px 5px 5px 0px',
      'border-left': '3px solid transparent',
    });


    container.addEventListener('click', function(){
      if ( // call action if a function is passed
        list_item &&
        Object.prototype.hasOwnProperty.call(list_item, 'action') &&
        (typeof list_item.action === 'function')
      ) {
        list_item.action();
      } else {
        console.warn(list_item.name + ' list_item has not been assigned an action');
      }
    });


    // add the icon if available
    if (list_item.icon) {
      var icon = forge.make('icon', {
        'file_name': list_item.icon,
        'theme': 'dark',
      });

      css.apply(icon, {
        'margin-right': '20px',
      });
      container.appendChild(icon);
    }

    // add the text
    var text = document.createElement('span');
    text.innerHTML = list_item.name;

    css.apply(text, {
      'display': 'block',
      'font-size': '15px',
      'color': css.color('white', '300'),
      'transition': 'color .3s',
    });

    container.appendChild(text);

    // container events

    container.addEventListener('mouseenter', function(){
      css.apply(container, {
        'background': css.color('secondary_focus'),
        'border-left': '3px solid ' + css.color('secondary'),
      });
    });

    container.addEventListener('mouseleave', function(){
      css.apply(container, {
        'background': css.color('gray', '200'),
        'border-left': '3px solid transparent',
      });
    });

    list_container.appendChild(container);
  });

  parent.appendChild(list_container);
};

component.list.prototype.set_contents = function(list) {
  this.list_ = list;
};

component.list.prototype.get_contents_ = function() {
  return this.list_;
};

component.navigation = function(){
  component.apply(this, arguments);
};
$.inherits(component.navigation, component);

component.navigation.prototype.decorate = function(parent) {
  var container = document.createElement('div');
  var drawer_container = document.getElementsByTagName('body')[0];
  var nav_drawer = new component.side_drawer.navigation();

  // decorate the logo
  this.decorate_logo_(container);

  var menu_icon = forge.make('icon', {
    'file_name': 'menu',
    'theme': 'dark',
  });

  css.apply(menu_icon, {
    'height': '60px',
    'position': 'absolute',
    'top': '0',
    'left': '10px',
    'cursor': 'pointer',
  });
  container.appendChild(menu_icon);

  menu_icon.addEventListener('click', function(){
    nav_drawer.show();
  });

  css.apply(container, {
    'position': 'fixed',
    'top': '0',
    'left': '0',
    'backgroundColor': css.color('gray', '200'),
    'box-shadow': '0px 2px 8px rgba(0,0,0,0.3)',
    'height': '60px',
    'width': '100%',
    'line-height': '75px',
    'z-index': 10,
  });

  parent.appendChild(container);
  nav_drawer.render(drawer_container);
};

component.navigation.prototype.get_class = function() {
  return ['component', 'navigation'];
};

component.navigation.prototype.decorate_logo_ = function(parent) {
  var logo_container = document.createElement('div');

  parent.appendChild(logo_container);
};


component.paper = function(args){
  component.apply(this, arguments);
  this.title_ = args.title;
  this.header_ = args.header;
  this.init_();
};
$.inherits(component.paper, component);

component.paper.prototype.decorate = function(parent){
  this.decorate_contents(this.container_);
  parent.appendChild(this.top_container_);
};

/**
 * Override this with child classes
 * Main decorate contents function
 */

component.paper.prototype.decorate_contents = function(type){
  console.warn('override decorate_contents()');
};

component.paper.prototype.get_container = function(parent){
  return this.container_;
};

component.paper.prototype.decorate_title_ = function(parent){
  if (this.title_) {
    var title_element = document.createElement('h2');
    title_element.innerHTML = this.title_;

    css.apply(title_element, {
      'padding': '10px 5px',
      'color': css.color('white', '300'),
      'font-weight': '100',
    });

    parent.appendChild(title_element);
  }
};

component.paper.prototype.decorate_header_ = function(parent){
  if (this.header_) {
    var header_element = document.createElement('p');
    header_element.innerHTML = this.header_;

    css.apply(header_element, {
      'padding': '10px 5px 20px 5px',
      'color': css.color('white', '300'),
      'border-bottom': '0.5px solid ' + css.color('gray', '100'),
    });

    parent.appendChild(header_element);
  }
};

component.paper.prototype.apply_paper_styles_ = function(container){
  css.apply(container, {
    'background': css.color('gray', '200'),
    'box-shadow': '0px 2px 8px rgba(0,0,0,0.6)',
    'min-height': '100px',
    'padding': '20px',
    'border-radius': '5px',
  });
};

component.paper.prototype.apply_container_styles_ = function(container){
  css.apply(container, {
    'max-width': '1000px',
    'margin': '20px auto',
  });
};

component.paper.prototype.init_ = function(){
  var top_container = document.createElement('div');
  var paper_container = document.createElement('div');

  this.apply_paper_styles_(paper_container);
  this.apply_container_styles_(top_container);

  this.decorate_title_(top_container);
  this.decorate_header_(paper_container);

  top_container.appendChild(paper_container);

  this.container_ = paper_container;
  this.top_container_ = top_container;
};

component.paper.prototype.set_title = function(title){
  this.title_ = title;
};


component.side_drawer = function(){
  component.apply(this, arguments);
};
$.inherits(component.side_drawer, component);

/**
 * Main decorate
 * Called automatically
 */

component.side_drawer.prototype.decorate = function(parent) {
  var self = this;
  // set which side it will render on
  this.side_ = this.set_side();

  /**
   * Build out each section
   * Header, body, footer
   * Each needs overriden
   */

  var main_container = document.createElement('div');

  // add close button
  var close_icon = forge.make('icon', {
    'file_name': 'close',
    'theme': 'dark',
  });

  css.apply(close_icon, {
    'position': 'absolute',
    'top': '10px',
    'left': this.get_side() === 'right' ? '10px' : null,
    'right': this.get_side() === 'left' ? '10px' : null,
    'cursor': 'pointer',
  });

  close_icon.addEventListener('click', function(){
    self.hide();
  });
  main_container.appendChild(close_icon);

  this.set_default_styles_(main_container);
  this.main_container_ = main_container;
  parent.appendChild(main_container);
};

/**
 * Side drawer will contain 3 sections
 * The header, body, and footer
 * All three functions need overridden
 */

component.side_drawer.prototype.set_default_styles_ = function(container) {
  this.set_side();
  this.drawer_width_ = '320';
  // set styles of container

  css.apply(container, {
    'height': '100%',
    'width': this.drawer_width_ + 'px',
    'background': css.color('gray', '200'),
    'display': 'flex',
    'flex-direction': 'column',
    'position': 'fixed',
    'top': '0px',
    'left': this.get_side() === 'left' ? '-' + this.drawer_width_ + 'px' : null,
    'right': this.get_side() === 'right' ? '-' + this.drawer_width_ + 'px' : null,
    'transition': 'right .3s, left .3s',
    'z-index': 9999,
  });

  // build sections
  var header_container = document.createElement('div');

  css.apply(header_container, {
    'flex': '0 1 20%',
    'border-bottom': '1px solid ' + css.color('gray', 100),
    'padding': '10px 0px',
  });
  this.decorate_header(header_container);
  container.appendChild(header_container);

  var body_container = document.createElement('div');

  css.apply(body_container, {
    'flex': '1 1 auto',
    'padding': '10px 0px',
  });
  this.decorate_body(body_container);
  container.appendChild(body_container);

  var footer_container = document.createElement('div');

  css.apply(footer_container, {
    'flex': '0 1 15%',
    'border-top': '1px solid ' + css.color('gray', 100),
    'padding': '10px 0px',
  });
  this.decorate_footer(footer_container);
  container.appendChild(footer_container);

  // hide drawer on render
  this.hide();
};

component.side_drawer.prototype.decorate_header = function(parent){
  console.warn('todo override decorate_header');
};

component.side_drawer.prototype.decorate_body = function(parent){
  console.warn('todo override decorate_body');
};

component.side_drawer.prototype.decorate_footer = function(parent){
  console.warn('todo override decorate_footer');
};

/**
 * Which side of the container to render on
 * Default will be left
 */

component.side_drawer.prototype.set_side = function() {
  return 'left';
};

component.side_drawer.prototype.get_side = function() {
  return this.side_;
};

/**
 * Used to slide the drawer in and out of view
 */

component.side_drawer.prototype.show = function() {
  if (this.hidden_) {
    css.apply(this.main_container_, {
      'left': this.get_side() === 'left' ? '0px' : null,
      'right': this.get_side() === 'right' ? '0px' : null,
      'box-shadow': '0px 2px 12px black',
    });
  }
  this.hidden_ = false;
};

component.side_drawer.prototype.hide = function() {
  if (!this.hidden_) {
    css.apply(this.main_container_, {
      'left': this.get_side() === 'left' ? '-' + this.drawer_width_ + 'px' : null,
      'right': this.get_side() === 'right' ? '-' + this.drawer_width_ + 'px' : null,
      'box-shadow': 'none',
    });
  }
  this.hidden_ = true;
};

/**
 * Simple checbox with label
 */
component.input.check_box = function(){
  component.input.apply(this, arguments);
};
$.inherits(component.input.check_box, component.input);

component.input.check_box.prototype.decorate_contents = function(parent){
  var self = this;
  this.checked = false;
  // container stuff
  var container = document.createElement('div');
  var height = '24px';

  css.apply(container, {
    'display': 'flex',
    'width': '250px',
    'margin': '20px 10px',
    'height': height,
    'line-height': height,
    'outline': 'none',
  });

  var icon_container = document.createElement('div');

  css.apply(icon_container, {
    'position': 'relative',
    'display': 'inline-block',
    'height': height,
    'width': height,
  });

  var icon = forge.make('icon', {
    'file_name': 'check',
    'theme': 'dark',
  });

  css.apply(icon, {
    'height': height,
  });

  var icon_cover = document.createElement('div');

  css.apply(icon_cover, {
    'position': 'absolute',
    'top': '0px',
    'left': '0px',
    'height': height,
    'width': height,
    'background': css.color('gray', '200'),
    'border-radius': '4px',
    'border': '1px solid ' + css.color('gray', '100'),
    'transition': 'background .3s, border .3s',
    'z-index': '999',
  });


  icon_container.appendChild(icon_cover);
  icon_container.appendChild(icon);


  container.appendChild(icon_container);

  var label = document.createElement('label');

  if (
    this.settings &&
    this.settings.label
  ) {
    label.innerText = this.settings.label;
  }

  css.apply(label, {
    'color': this.disabled ? css.color('gray', '100') : css.color('white', '300'),
    'font-size': '15px',
    'outline': 'none',
    'margin': '0 auto',
    'width': '100%',
    'text-align': 'left',
    'padding-left': '15px',
    'transition': 'color .3s',
  });

  container.addEventListener('mouseover', function() {
    css.apply(this, {
      'cursor': 'pointer',
    });
  });

  container.addEventListener('mouseleave', function() {
    css.apply(this, {
      'cursor': 'default',
    });
  });

  container.addEventListener('click', function() {
    self.checked = !self.checked;

    css.apply(label, {
      'color': self.checked ? css.color('secondary') : css.color('white', '300'),
    });

    css.apply(icon_cover, {
      'background': self.checked ? 'transparent' : css.color('gray', '200'),
      'border': '1px solid ' + (self.checked ? 'transparent' : css.color('gray', '100')),
    });

    if (
      self.settings &&
      self.settings.click &&
      typeof self.settings.click === 'function'
    ) {
      self.settings.click();
    }
  });

  container.appendChild(label);
  parent.appendChild(container);
};

/**
 * Free text input
 */
component.input.text = function(){
  component.input.apply(this, arguments);
};
$.inherits(component.input.text, component.input);

component.input.text.prototype.decorate_contents = function(parent){
  var self = this;
  // container stuff
  var container = document.createElement('div');

  console.log(this.settings);

  css.apply(container, {
    'display': 'flex',
    'flex-direction': 'column',
    'width': '250px',
    'margin': '20px 10px',
  });

  // main input object
  var input = document.createElement('input');
  var label = document.createElement('label');

  if (
    this.settings &&
    this.settings.label
  ) {
    label.innerText = this.settings.label;
  }

  css.apply(label, {
    'background': 'transparent',
    'padding-bottom': '5px',
    'color': this.disabled ? css.color('gray', '100') : css.color('white', '300'),
    'font-size': '15px',
    'outline': 'none',
    'transition': 'color .5s',
  });

  css.apply(input, {
    'background': this.disabled ? css.color('primary') : 'transparent',
    'padding': '12px 15px',
    'border': '1px solid ' + (this.disabled ? 'transparent' : css.color('gray', '100')),
    'color': css.color('white', '300'),
    'border-radius': '5px',
    'transition': 'border .2s, background .2s',
  });

  input.addEventListener('focus', function() {
    css.apply(this, {
      'background': css.color('secondary_focus'),
      'outline': 'none',
      'border': '1px solid ' + css.color('secondary'),
    });

    css.apply(label, {
      'color': css.color('secondary'),
    });
  });

  input.addEventListener('blur', function() {
    css.apply(this, {
      'background': 'transparent',
      'outline': 'none',
      'border': '1px solid ' + css.color('gray', '100'),
    });

    css.apply(label, {
      'color': css.color('white', '300'),
    });
  });

  input.addEventListener('input', function() {
    self.value = input.value;
    if (
      self.settings &&
      self.settings.update &&
      typeof self.settings.update === 'function'
    ) {
      self.settings.update();
    }
  });

  if (this.disabled) {
    input.disabled = true;
  }

  container.appendChild(label);
  container.appendChild(input);
  parent.appendChild(container);
};


component.side_drawer.navigation = function(){
  component.apply(this, arguments);
};
$.inherits(component.side_drawer.navigation, component.side_drawer);

/**
 * Set contents
 * Header, Body, and Footer
 */

component.side_drawer.navigation.prototype.decorate_header = function(parent){
  // todo
};

component.side_drawer.navigation.prototype.decorate_body = function(parent){
  var nav_list = new component.list();

  var list_contents = [
    {
      'name': 'Projects',
      'icon': 'memory',
      'action': (function() {
        new layer.projects().render();
      }),
    },
    {
      'name': 'Blog',
      'icon': 'dashboard',
      'action': (function() {
        new layer.blog().render();
      }),
    },
    {
      'name': 'About',
      'icon': 'person',
      'action': (function() {
        new layer.about().render();
      }),
    },
    {
      'name': 'Sentence Generator',
      'icon': 'message',
      'action': (function() {
        new layer.sentence_generator().render();
      }),
    },
  ];

  nav_list.set_contents(list_contents);
  nav_list.render(parent);
};

component.side_drawer.navigation.prototype.decorate_footer = function(parent){
  // todo
};
