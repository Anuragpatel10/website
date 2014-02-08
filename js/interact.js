/* interact.js v1.0.5 | https://raw.github.com/taye/interact.js/master/LICENSE */
!function(e){"use strict";function t(){}function n(e){q=e.pageX,L=e.pageY,N=e.clientX,$=e.clientY}function i(e,t){var n,i,r;return e=e||"page",t.touches?(n=t.touches.length?t.touches[0]:t.changedTouches[0],i=n[e+"X"],r=n[e+"Y"]):(i=t[e+"X"],r=t[e+"Y"]),{x:i,y:r}}function r(t){if(zt){var n=i("screen",t);return n.x+=e.scrollX,n.y+=e.scrollY,n}return i("page",t)}function o(e){return i(zt?"screen":"client",e)}function s(){return{x:e.scrollX||I.documentElement.scrollLeft,y:e.scrollY||I.documentElement.scrollTop}}function a(e){var t,n=e.touches,i=0,r=0,o=0,s=0;for(t=0;t<n.length;t++)i+=n[t].pageX/n.length,r+=n[t].pageY/n.length,o+=n[t].clientX/n.length,s+=n[t].clientY/n.length;return{pageX:i,pageY:r,clientX:o,clientY:s}}function l(e){if(e.touches.length){var t,n=e.touches,i=e.touches[0].pageX,r=e.touches[0].pageY,o=i,s=r;for(t=1;t<n.length;t++)i=i>e.touches[t].pageX?i:e.touches[t].pageX,r=i>e.touches[t].pageX?r:e.touches[t].pageY;return{left:i,top:r,width:o-i,height:s-r}}}function c(e){var t=(tt&&tt.options||rt).deltaSource,n=t+"X",i=t+"Y",r=e.touches[0][n],o=e.touches[0][i];return"touchend"===e.type&&1===e.touches.length?(r-=e.changedTouches[0][n],o-=e.changedTouches[0][i]):(r-=e.touches[1][n],o-=e.touches[1][i]),Math.sqrt(r*r+o*o)}function h(e,t){var n=(tt&&tt.options||rt).deltaSource,i=n+"X",r=n+"Y",o=e.touches[0][i],s=e.touches[0][r];"touchend"===e.type&&1===e.touches.length?(o-=e.changedTouches[0][i],s-=e.changedTouches[0][r]):(o-=e.touches[1][i],s-=e.touches[1][r]);var a=180*Math.atan(s/o)/Math.PI;if("number"==typeof t){var l=a-t,c=l%360;c>315?a-=360+a/360|0:c>135?a-=180+a/360|0:-315>c?a+=360+a/360|0:-135>c&&(a+=180+a/360|0)}return a}function u(e){e=e||tt;var t=e?e.options.origin:rt.origin;return t instanceof Element?(t=Y(t).getRect(),t.x=t.left,t.y=t.top):"function"==typeof t&&(t=t(e&&e._element)),t}function p(e){for(var t=0,n=e.length;n>t;t++)e[t].rect=e[t].getRect()}function d(e){if(e.length){var t,n,i,r,o,s=e[0],a=[],l=[];for(r=1;r<e.length;r++){if(t=e[r],!a.length)for(n=s;n.parentNode!==I;)a.unshift(n),n=n.parentNode;if(s instanceof P&&t instanceof k&&!(t instanceof D)){if(t===s.parentNode)continue;n=t.ownerSVGElement}else n=t;for(l=[];n.parentNode!==I;)l.unshift(n),n=n.parentNode;for(o=0;l[o]&&l[o]===a[o];)o++;var c=[l[o-1],l[o],a[o]];for(i=c[0].lastChild;i;){if(i===c[1]){s=t,a=[];break}if(i===c[2])break;i=i.previousSibling}}return{element:s,index:e.indexOf(s)}}}function g(e){if(W.length||Z.length){var t,n,i=[],r=[],o=[],s=[];for(t=0;t<W.length;t++)W[t].dropCheck(e)&&(i.push(W[t]),r.push(W[t]._element));if(n=d(r),nt=n?W[n.index]:null,Z.length){var a=tt._element;for(t=0;t<Z.length;t++)for(var l=Z[t],c=I.querySelectorAll(l.selector),h=0,u=c.length;u>h;h++)l._element=c[h],l.rect=l.getRect(),l._element!==a&&-1===r.indexOf(l._element)&&s.indexOf(-1===l._element)&&l.dropCheck(e)&&(o.push(l),s.push(l._element));s.length&&(nt&&(o.push(nt),s.push(nt._element)),n=d(s),n&&(nt=o[n.index],nt.selector&&(nt._element=s[n.index])))}return nt}}function f(e,t,n,i,s){var p,d,g=(tt&&tt.options||rt).deltaSource,f=tt?tt.options:rt,y=u(tt);if(i=i||tt._element,"gesture"===t){var m=a(e);d={x:m.pageX-y.x,y:m.pageY-y.y},p={x:m.clientX-y.x,y:m.clientY-y.y}}else if(d=r(e),p=o(e),d.x-=y.x,d.y-=y.y,p.x-=y.x,p.y-=y.y,tt.options.snapEnabled&&-1!==tt.options.snap.actions.indexOf(t)){var v=f.snap;this.snap={mode:v.mode,anchors:ot.anchors,range:ot.range,locked:ot.locked,x:ot.x,y:ot.y,realX:ot.realX,realY:ot.realY,dx:ot.dx,dy:ot.dy},ot.locked&&("path"===v.mode?(ot.xInRange&&(d.x+=ot.dx,p.x+=ot.dx),ot.yInRange&&(d.y+=ot.dy,p.y+=ot.dy)):(d.x+=ot.dx,d.y+=ot.dy,p.x+=ot.dx,p.y+=ot.dy))}if(tt.options.restrictions[t]){var x,b=tt.options.restrictions[t],E=d.x,S=d.y;b instanceof Element?x=Y(b).getRect():("function"==typeof b&&(b=b(d.x,d.y,tt._element)),x=b,"x"in b&&"y"in b&&(x={left:b.x,top:b.y,right:b.x+b.width,bottom:b.y+b.height})),d.x=Math.max(Math.min(x.right,d.x),x.left),d.y=Math.max(Math.min(x.bottom,d.y),x.top);var O=d.x-E,z=d.y-S;p.x+=O,p.y+=z}this.x0=B,this.y0=K,this.clientX0=G,this.clientY0=V,this.pageX=d.x,this.pageY=d.y,this.clientX=p.x,this.clientY=p.y,this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.button=e.button,this.target=i,this.timeStamp=(new Date).getTime(),this.type=t+(n||""),s&&(this.relatedTarget=s),"end"===n||"drop"===t?"client"===g?(this.dx=p.x-B,this.dy=p.y-K):(this.dx=d.x-B,this.dy=d.y-K):"client"===g?(this.dx=p.x-N,this.dy=p.y-$):(this.dx=d.x-q,this.dy=d.y-L),"resize"===t?f.squareResize||e.shiftKey?("y"===yt?this.dx=this.dy:this.dy=this.dx,this.axes="xy"):(this.axes=yt,"x"===yt?this.dy=0:"y"===yt&&(this.dx=0)):"gesture"===t&&(this.touches=e.touches,this.distance=c(e),this.box=l(e),"start"===n?(this.scale=1,this.ds=0,this.angle=h(e),this.da=0):(this.scale=this.distance/F.startDistance,this.angle=h(e,F.prevAngle),"end"===n?(this.da=this.angle-F.startAngle,this.ds=this.scale-1):(this.da=this.angle-F.prevAngle,this.ds=this.scale-F.prevScale)))}function y(e,t){if("string"!=typeof e)return null;t=t||tt;var n=-1!==e.indexOf("resize")?"resize":e,i=(t||tt).options;return("resize"===n&&i.resizeable||"drag"===e&&i.draggable||"gesture"===e&&i.gestureable)&&vt[n]?(("resize"===e||"resizeyx"===e)&&(e="resizexy"),e):null}function m(e){var t;if(!(dt||ft||pt)){if(et.length&&"mousedown"===e.type)t=O(e,et);else for(var n,i,r=e.target instanceof j?e.target.correspondingUseElement:e.target;r!==I.documentElement&&!t;){et=[];for(n in Q)i=Element.prototype[_t]===M?I.querySelectorAll(n):void 0,r[_t](n,i)&&(Q[n]._element=r,et.push(Q[n]));t=O(e,et),r=r.parentNode}return t?(ct=!0,v(e,t)):void 0}}function v(e,t){if(e.touches&&e.touches.length<2&&!tt||!ct){var n=At.useAttachEvent?e.currentTarget:this;tt=H.get(n)}var i=tt&&tt.options;if(tt&&!(dt||ft||pt)){var s,l,c,h=y(t||tt.getAction(e)),p=u(tt);if(e.touches?(s=a(e),l={x:s.pageX,y:s.pageY},c={x:s.clientX,y:s.clientY}):(l=r(e),c=o(e)),!h)return e;ct=!0,ht=!1,i.styleCursor&&(I.documentElement.style.cursor=mt[h].cursor),yt="resizexy"===h?"xy":"resizex"===h?"x":"resizey"===h?"y":"",xt=h,B=l.x-p.x,K=l.y-p.y,G=c.x-p.x,V=c.y-p.y,ot.x=null,ot.y=null,e.preventDefault(),U=e}}function x(e){if(ct&&(B===q&&K===L&&(ht=!0),xt&&tt))if(tt.options.snapEnabled&&-1!==tt.options.snap.actions.indexOf(xt)){var t,n,i,s,a,l,c,h,p,d=tt.options.snap,g=r(e),f=u(tt);if(ot.realX=g.x,ot.realY=g.y,g.x-=f.x,g.y-=f.y,d.range<0&&(d.range=1/0),"anchor"===d.mode&&d.anchors.length){for(t={anchor:null,distance:0,range:0,distX:0,distY:0},h=0,p=d.anchors.length;p>h;h++){var y=d.anchors[h];n="number"==typeof y.range?y.range:d.range,a=y.x-g.x,l=y.y-g.y,c=Math.sqrt(a*a+l*l),i=n>c,1/0===n&&t.inRange&&1/0!==t.range&&(i=!1),(!t.anchor||(i?t.inRange&&1/0!==n?c/n<t.distance/t.range:c<t.distance:!t.inRange&&c<t.distance))&&(1/0===n&&(i=!0),t.anchor=y,t.distance=c,t.range=n,t.inRange=i,t.distX=a,t.distY=l,ot.range=n)}i=t.inRange,s=t.anchor.x!==ot.x||t.anchor.y!==ot.y,ot.x=t.anchor.x,ot.y=t.anchor.y,ot.dx=t.distX,ot.dy=t.distY,tt.options.snap.anchors.closest=ot.anchors.closest=t.anchor}else if("grid"===d.mode){var m=Math.round((g.x-d.gridOffset.x)/d.grid.x),v=Math.round((g.y-d.gridOffset.y)/d.grid.y),x=m*d.grid.x+d.gridOffset.x,b=v*d.grid.y+d.gridOffset.y;a=x-g.x,l=b-g.y,c=Math.sqrt(a*a+l*l),i=c<d.range,s=x!==ot.x||b!==ot.y,ot.x=x,ot.y=b,ot.dx=a,ot.dy=l,ot.range=d.range}if("path"===d.mode&&d.paths.length){for(t={path:{},distX:0,distY:0,range:0},h=0,p=d.paths.length;p>h;h++){var E,S,O=d.paths[h],z=!1,_=!1,R=O;"function"==typeof O&&(R=O(g.x,g.y)),"number"==typeof R.x?(E=R.x,z=!0):E=g.x,"number"==typeof R.y?(S=R.y,_=!0):S=g.y,n="number"==typeof R.range?R.range:d.range,a=E-g.x,l=S-g.y;var w=Math.abs(a)<n&&z,X=Math.abs(l)<n&&_;1/0===n&&t.xInRange&&1/0!==t.range&&(w=!1),"x"in t.path&&!(w?t.xInRange&&1/0!==n?c/n<t.distX/t.range:Math.abs(a)<Math.abs(t.distX):!t.xInRange&&Math.abs(a)<Math.abs(t.distX))||(1/0===n&&(w=!0),t.path.x=E,t.distX=a,t.xInRange=w,t.range=n,ot.range=n),1/0===n&&t.yInRange&&1/0!==t.range&&(X=!1),"y"in t.path&&!(X?t.yInRange&&1/0!==n?c/n<t.distY/t.range:Math.abs(l)<Math.abs(t.distY):!t.yInRange&&Math.abs(l)<Math.abs(t.distY))||(1/0===n&&(X=!0),t.path.y=S,t.distY=l,t.yInRange=X,t.range=n,ot.range=n)}i=t.xInRange||t.yInRange,s=!t.xInRange||!t.yInRange||ot.xInRange&&ot.yInRange?!t.xInRange||!t.yInRange||t.path.x!==ot.x||t.path.y!==ot.y:!0,ot.x=t.path.x,ot.y=t.path.y,ot.dx=t.distX,ot.dy=t.distY,ot.xInRange=t.xInRange,ot.yInRange=t.yInRange,tt.options.snap.paths.closest=ot.paths.closest=t.path}if(!s&&ot.locked||!i)(s||!i)&&(ot.locked=!1,mt[xt].moveListener(e));else{if(ot.locked=!0,!(dt||ft||pt)){var Y=r(e),A=o(e);B=Y.x-f.x+ot.dx,K=Y.y-f.y+ot.dy,G=A.x-f.x+ot.dx,V=A.y-f.y+ot.dy}mt[xt].moveListener(e)}}else mt[xt].moveListener(e);(dt||ft)&&st.edgeMove(e)}function b(e){e.preventDefault();var t,i,r,o,s;if(!dt){if(t=new f(U,"drag","start"),dt=!0,tt.fire(t),!gt){p(W);for(var a=0;a<Z.length;a++)Z[a]._elements=I.querySelectorAll(Z[a].selector)}n(t)}var l=tt._element,c=o?o._element:null;t=new f(e,"drag","move"),o=g(e,tt),tt._element=l,o!==it&&(it&&(r=new f(e,"drag","leave",c,l),t.dragLeave=it._element,s=it,it=null),o&&(i=new f(e,"drag","enter",c,l),t.dragEnter=o._element,it=o)),tt.fire(t),r&&s.fire(r),i&&o.fire(i),n(t)}function E(e){e.preventDefault();var t;ft||(t=new f(U,"resize","start"),tt.fire(t),tt.fire(t),ft=!0,n(t)),t=new f(e,"resize","move"),tt.fire(t),n(t)}function S(e){if(e.touches&&!(e.touches.length<2)){e.preventDefault();var t;if(!pt){var t=new f(U,"gesture","start");t.ds=0,F.startDistance=F.prevDistance=t.distance,F.startAngle=F.prevAngle=t.angle,F.scale=1,pt=!0,tt.fire(t),n(t)}t=new f(e,"gesture","move"),t.ds=t.scale-F.scale,tt.fire(t),n(t),F.prevAngle=t.angle,F.prevDistance=t.distance,1/0===t.scale||null===t.scale||void 0===t.scale||isNaN(t.scale)||(F.scale=t.scale)}}function O(e,t){for(var n=0,i=t.length;i>n;n++){var r=t[n],o=y(r.getAction(e,r),r);if(o)return tt=r,o}}function z(e){if(!(ct||dt||ft||pt)){var t=[],n=tt&&tt._element,i=e.target instanceof j?e.target.correspondingUseElement:e.target;for(var r in Q)Q.hasOwnProperty(r)&&Q[r]&&i[_t](r)&&(Q[r]._element=i,t.push(Q[r]));{var o=H.get(i);o&&y(o.getAction(e,o),o)}if(!o||!y(o.getAction(e),o))if(O(e,t))et=t,R(e,et),At.addToElement(i,"mousemove",R);else if(tt){var s=n.querySelectorAll("*");if(-1!==Array.prototype.indexOf.call(s,i)){for(var a=0;a<et.length;a++)et[a]._element=n;R(e,et),At.addToElement(tt._element,"mousemove",R)}else tt=null,et=[]}}}function _(e){var t=e.target instanceof j?e.target.correspondingUseElement:e.target;H.get(t)||At.removeFromElement(t,R),tt&&tt.options.styleCursor&&!(dt||ft||pt)&&(I.documentElement.style.cursor="")}function R(e,t){if(ct||dt||ft||pt)e.preventDefault();else{var n;t?n=O(e,t):tt&&(n=y(tt.getAction(e))),tt&&tt.options.styleCursor&&(I.documentElement.style.cursor=n?mt[n].cursor:"")}}function w(e){var t;if(!(e.touches&&e.touches.length>=2)){if(dt){t=new f(e,"drag","end");var n,i=tt._element,r=g(e,tt),o=r?r._element:null;if(tt._element=i,r)n=new f(e,"drop",null,o,i),t.dropzone=o;else if(it){var s=new f(e,"drag","leave",o,i);it.fire(s,i),t.dragLeave=it._element}tt.fire(t),n&&nt.fire(n)}else if(ft)t=new f(e,"resize","end"),tt.fire(t);else if(pt)t=new f(e,"gesture","end"),t.ds=t.scale,tt.fire(t);else if(("mouseup"===e.type||"touchend"===e.type)&&tt&&ct&&!ht){var a={};for(var l in e)e.hasOwnProperty(l)&&(a[l]=e[l]);a.type="tap",tt.fire(a)}return Y.stop(),e}}function X(){tt.selector||(tt=null),nt=it=null}function Y(e){return H.get(e)||new T(e)}function A(e){for(var t in rt)e.hasOwnProperty(t)&&typeof e[t]==typeof rt[t]&&(this[t]=e[t])}function T(e,t){this._element=e,this._iEvents=this._iEvents||{},"string"==typeof e?(I.querySelector(e),Q[e]=this,this.selector=e):(e instanceof Element&&(At.add(this,"mousemove",R),At.add(this,"mousedown",v),At.add(this,"touchmove",R),At.add(this,"touchstart",v)),J.push(this)),H.push(this),this.set(t)}var M,I=e.document,C=e.console,k=e.SVGElement||t,D=e.SVGSVGElement||t,j=e.SVGElementInstance||t,P=e.HTMLElement||e.Element,q=0,L=0,N=0,$=0,B=0,K=0,G=0,V=0,U=null,F={start:{x:0,y:0},startDistance:0,prevDistance:0,distance:0,scale:1,startAngle:0,prevAngle:0},H=[],W=[],J=[],Q={},Z=[],et=[],tt=null,nt=null,it=null,rt={draggable:!1,dropzone:!1,resizeable:!1,squareResize:!1,gestureable:!1,styleCursor:!0,snap:{mode:"grid",actions:["drag"],range:1/0,grid:{x:100,y:100},gridOffset:{x:0,y:0},anchors:[],paths:[],arrayTypes:/^anchors$|^paths$|^actions$/,objectTypes:/^grid$|^gridOffset$/,stringTypes:/^mode$/,numberTypes:/^range$/},snapEnabled:!1,restrictions:{},autoScroll:{container:e,margin:60,interval:20,distance:10,elementTypes:/^container$/,numberTypes:/^range$|^interval$|^distance$/},autoScrollEnabled:!1,origin:{x:0,y:0},deltaSource:"page"},ot={locked:!1,x:0,y:0,dx:0,dy:0,realX:0,realY:0,anchors:[],paths:[]},st={margin:60,interval:20,i:null,distance:10,x:0,y:0,scroll:function(){var t=tt.options.autoScroll.container;t===e?e.scrollBy(st.x,st.y):t&&(t.scrollLeft+=st.x,t.scrollTop+=st.y)},edgeMove:function(t){if(tt&&tt.options.autoScrollEnabled&&(dt||ft)){var n,i,r,o,s=tt.options.autoScroll;if(s.container===e)o=t.clientX<st.margin,n=t.clientY<st.margin,i=t.clientX>e.innerWidth-st.margin,r=t.clientY>e.innerHeight-st.margin;else{var a=Y(s.container).getRect();o=t.clientX<a.left+st.margin,n=t.clientY<a.top+st.margin,i=t.clientX>a.right-st.margin,r=t.clientY>a.bottom-st.margin}st.x=st.distance*(i?1:o?-1:0),st.y=st.distance*(r?1:n?-1:0),st.isScrolling||(st.margin=s.margin,st.distance=s.distance,st.interval=s.interval,st.start())}},isScrolling:!1,start:function(){st.isScrolling=!0,e.clearInterval(st.i),st.i=e.setInterval(st.scroll,st.interval)},stop:function(){e.clearInterval(st.i),st.isScrolling=!1}},at="createTouch"in I,lt=at?20:10,ct=!1,ht=!1,ut=!1,pt=!1,dt=!1,gt=!1,ft=!1,yt="xy",mt={drag:{cursor:"move",moveListener:b},resizex:{cursor:"e-resize",moveListener:E},resizey:{cursor:"s-resize",moveListener:E},resizexy:{cursor:"se-resize",moveListener:E},gesture:{cursor:"",moveListener:S}},vt={drag:!0,resize:!0,gesture:!0},xt=null,bt="onmousewheel"in I?"mousewheel":"wheel",Et=["resizestart","resizemove","resizeend","dragstart","dragmove","dragend","dragenter","dragleave","drop","gesturestart","gesturemove","gestureend","tap"],St={},Ot={onevent:0,directBind:1,globalBind:2},zt="Opera"==navigator.appName&&at&&navigator.userAgent.match("Presto"),_t="matchesSelector"in Element.prototype?"matchesSelector":"webkitMatchesSelector"in Element.prototype?"webkitMatchesSelector":"mozMatchesSelector"in Element.prototype?"mozMatchesSelector":"oMatchesSelector"in Element.prototype?"oMatchesSelector":"msMatchesSelector",Rt={_element:e,events:{}},wt={_element:I,events:{}},Xt={_element:e.parent,events:{}},Yt={_element:null,events:{}},At=function(){function t(e,t,n,i){var s=c[l.indexOf(e)];if(s||(s={events:{},typeCount:0},l.push(e),c.push(s)),t in s.events||(s.events[t]=[],s.typeCount++),-1===s.events[t].indexOf(n)){var h;return h=r?e[o](a+t,function(t){t.immediatePropagationStopped||(t.target=t.srcElement,t.currentTarget=e,/mouse|click/.test(t.type)&&(t.pageX=t.clientX+I.documentElement.scrollLeft,t.pageY=t.clientY+I.documentElement.scrollTop),n(t))},n,i||!1):e[o](t,n,i||!1),s.events[t].push(n),h}}function n(e,t,i,r){var o,h=c[l.indexOf(e)];if(h&&h.events)if("all"!==t){if(h.events[t]){var u=h.events[t].length;if("all"===i){for(o=0;u>o;o++)e[s](a+t,h.events[t][o],r||!1);h.events[t]=null,h.typeCount--}else for(o=0;u>o;o++)if(h.events[t][o]===i){e[s](a+t,h.events[t][o],r||!1),h.events[t].splice(o,1);break}h.events[t]&&0===h.events[t].length&&(h.events[t]=null,h.typeCount--)}h.typeCount||(c.splice(c.indexOf(h),1),l.splice(l.indexOf(e),1))}else for(t in h.events)h.events.hasOwnProperty(t)&&n(e,t,"all")}var i=e.Event,r="attachEvent"in e&&!("addEventListener"in e),o=r?"attachEvent":"addEventListener",s=r?"detachEvent":"removeEventListener",a=r?"on":"",l=[],c=[];return"indexOf"in Array.prototype||(Array.prototype.indexOf=function(e){var t=this.length>>>0,n=Number(arguments[1])||0;for(n=0>n?Math.ceil(n):Math.floor(n),0>n&&(n+=t);t>n;n++)if(n in this&&this[n]===e)return n;return-1}),"stopPropagation"in i.prototype||(i.prototype.stopPropagation=function(){this.cancelBubble=!0},i.prototype.stopImmediatePropagation=function(){this.cancelBubble=!0,this.immediatePropagationStopped=!0}),"preventDefault"in i.prototype||(i.prototype.preventDefault=function(){this.returnValue=!1}),"hasOwnProperty"in i.prototype||(i.prototype.hasOwnProperty=Object.prototype.hasOwnProperty),{add:function(e,n,i,r){t(e._element,n,i,r)},remove:function(e,t,i,r){n(e._element,t,i,r)},addToElement:t,removeFromElement:n,useAttachEvent:r}}();f.prototype={preventDefault:t,stopImmediatePropagation:function(){ut=!0},stopPropagation:t},H.indexOfElement=W.indexOfElement=function(e){for(var t=0;t<this.length;t++){var n=this[t];if(n.selector===e||!n.selector&&n._element===e)return t}return-1},H.get=function(e){return"string"==typeof e?Q[e]:this[this.indexOfElement(e)]},W.get=function(e){return this[this.indexOfElement(e)]},A.prototype=rt,T.prototype={setOnEvents:function(e,t){var n=t.onstart||t.onStart,i=t.onmove||t.onMove,r=t.onend||t.onEnd;e="on"+e,"function"==typeof n&&(this[e+"start"]=n),"function"==typeof i&&(this[e+"move"]=i),"function"==typeof r&&(this[e+"end"]=r)},draggable:function(e){return e instanceof Object?(this.options.draggable=!0,this.setOnEvents("drag",e),this):"boolean"==typeof e?(this.options.draggable=e,this):null===e?(delete this.options.draggable,this):this.options.draggable},dropzone:function(e){if(e instanceof Object){var t=e.ondrop||e.onDrop;return"function"==typeof t&&(this.ondrop=t),this.options.dropzone=!0,(this.selector?Z:W).push(this),gt||this.selector||(this.rect=this.getRect()),this}if("boolean"==typeof e){if(e)(this.selector?Z:W).push(this),gt||this.selector||(this.rect=this.getRect());else{var n=this.selector?Z:W,i=n.indexOf(this);-1!==i&&n.splice(i,1)}return this.options.dropzone=e,this}return null===e?(delete this.options.dropzone,this):this.options.dropzone},dropCheck:function(e){var t,n,i=r(e);return gt&&(this.rect=this.getRect()),t=i.x>this.rect.left&&i.x<this.rect.right,n=i.y>this.rect.top&&i.y<this.rect.bottom,t&&n},dropChecker:function(e){return"function"==typeof e?(this.dropCheck=e,this):this.dropCheck},resizeable:function(e){return e instanceof Object?(this.options.resizeable=!0,this.setOnEvents("resize",e),this):"boolean"==typeof e?(this.options.resizeable=e,this):this.options.resizeable},squareResize:function(e){return"boolean"==typeof e?(this.options.squareResize=e,this):null===e?(delete this.options.squareResize,this):this.options.squareResize},gestureable:function(e){return e instanceof Object?(this.options.gestureable=!0,this.setOnEvents("gesture",e),this):"boolean"==typeof e?(this.options.gestureable=e,this):null===e?(delete this.options.gestureable,this):this.options.gestureable},autoScroll:function(e){var t=rt.autoScroll;if(e instanceof Object){var n=this.options.autoScroll;return n===t&&(n=this.options.autoScroll={margin:t.margin,distance:t.distance,interval:t.interval,container:t.container}),n.margin=this.validateSetting("autoScroll","margin",e.margin),n.distance=this.validateSetting("autoScroll","distance",e.distance),n.interval=this.validateSetting("autoScroll","interval",e.interval),n.container=this.validateSetting("autoScroll","container",e.container),this.options.autoScrollEnabled=!0,this.options.autoScroll=n,this}return"boolean"==typeof e?(this.options.autoScrollEnabled=e,this):null===e?(delete this.options.autoScrollEnabled,delete this.options.autoScroll,this):this.options.autoScrollEnabled?this.options.autoScroll:!1},snap:function(e){var t=rt.snap;if(e instanceof Object){var n=this.options.snap;return n===t&&(n=this.options.snap={mode:t.mode,range:t.range,grid:t.grid,gridOffset:t.gridOffset,anchors:t.anchors}),n.mode=this.validateSetting("snap","mode",e.mode),n.actions=this.validateSetting("snap","actions",e.actions),n.range=this.validateSetting("snap","range",e.range),n.paths=this.validateSetting("snap","paths",e.paths),n.grid=this.validateSetting("snap","grid",e.grid),n.gridOffset=this.validateSetting("snap","gridOffset",e.gridOffset),n.anchors=this.validateSetting("snap","anchors",e.anchors),this.options.snapEnabled=!0,this.options.snap=n,this}return"boolean"==typeof e?(this.options.snapEnabled=e,this):null===e?(delete this.options.snapEnabled,delete this.options.snap,this):this.options.snapEnabled?this.options.snap:!1},getAction:function(e){var t,n,i,o=this.getRect(),s=r(e),a=this.options;return vt.resize&&a.resizeable&&(t=s.x>o.right-lt,n=s.y>o.bottom-lt),vt.gesture&&e.touches&&e.touches.length>=2&&!dt&&!ft?i="gesture":(yt=(t?"x":"")+(n?"y":""),i=yt?"resize"+yt:vt.drag&&a.draggable?"drag":null),i},actionChecker:function(e){return"function"==typeof e?(this.getAction=e,this):null===e?(delete this.options.getAction,this):this.getAction},getRect:function(){!this.selector||this._element instanceof Element||(this._element=I.querySelector(this.selector));var e=s(),t=this._element instanceof k?this._element.getBoundingClientRect():this._element.getClientRects()[0];return{left:t.left+e.x,right:t.right+e.x,top:t.top+e.y,bottom:t.bottom+e.y,width:t.width||t.right-t.left,height:t.heigh||t.bottom-t.top}},rectChecker:function(e){return"function"==typeof e?(this.getRect=e,this):null===e?(delete this.options.getRect,this):this.getRect},styleCursor:function(e){return"boolean"==typeof e?(this.options.styleCursor=e,this):null===e?(delete this.options.styleCursor,this):this.options.styleCursor},origin:function(e){return e instanceof Object?(this.options.origin=e,this):null===e?(delete this.options.origin,this):this.options.origin},deltaSource:function(e){return"page"===e||"client"===e?(this.options.deltaSource=e,this):null===e?(delete this.options.deltaSource,this):this.options.deltaSource},restrict:function(e){return void 0===e?this.options.restrictions:(e instanceof Object?this.options.restrictions=e:null===e&&delete this.options.restrictions,this)},validateSetting:function(e,t,n){var i=rt[e],r=this.options[e];if(void 0!==i&&void 0!==i[t]){if("objectTypes"in i&&i.objectTypes.test(t))return n instanceof Object?n:t in r&&r[t]instanceof Object?r[t]:i[t];if("arrayTypes"in i&&i.arrayTypes.test(t))return n instanceof Array?n:t in r&&r[t]instanceof Array?r[t]:i[t];if("stringTypes"in i&&i.stringTypes.test(t))return"string"==typeof n?n:t in r&&"string"==typeof r[t]?r[t]:i[t];if("numberTypes"in i&&i.numberTypes.test(t))return"number"==typeof n?n:t in r&&"number"==typeof r[t]?r[t]:i[t];if("elementTypes"in i&&i.elementTypes.test(t))return n instanceof Element?n:t in r&&r[t]instanceof Element?r[t]:i[t]}return null},element:function(){return this._element},fire:function(e){if(!e||!e.type||-1===Et.indexOf(e.type))return this;for(var t,n,i=0,r=0,o="on"+e.type;3>i;)try{switch(i){case Ot.onevent:"function"==typeof this[o]&&this[o](e);break;case Ot.directBind:if(e.type in this._iEvents){for(t=this._iEvents[e.type],n=t.length;n>r&&!ut;r++)t[r](e);break}break;case Ot.globalBind:if(e.type in St&&(t=St[e.type]))for(t=St[e.type],n=t.length;n>r&&!ut;r++)t[r](e)}r=0,i++}catch(s){C.error("Error thrown from "+e.type+" listener"),C.error(s),r++,i===Ot.onevent&&i++}return ut=!1,this},on:function(e,t,n){if("wheel"===e&&(e=bt),-1!==Et.indexOf(e))e in this._iEvents?-1===this._iEvents[e].indexOf(t)&&this._iEvents[e].push(t):this._iEvents[e]=[t];else if(this.selector)for(var i=I.querySelectorAll(this.selector),r=0,o=i.length;o>r;r++)At.addToElement(i[r],e,t,n);else At.add(this,e,t,n);return this},off:function(e,t,n){if("wheel"===e&&(e=bt),-1!==Et.indexOf(e)){var i,r=this._iEvents[e];r&&-1!==(i=r.indexOf(t))&&this._iEvents[e].splice(i,1)}else if(this.selector)for(var o=I.querySelectorAll(this.selector),s=0,a=o.length;a>s;s++)At.removeFromElement(o[s],e,t,n);else At.remove(this._element,t,n);return this},set:function(e){return e&&"object"==typeof e||(e={}),this.options=new A(e),this.draggable("draggable"in e?e.draggable:this.options.draggable),this.dropzone("dropzone"in e?e.dropzone:this.options.dropzone),this.resizeable("resizeable"in e?e.resizeable:this.options.resizeable),this.gestureable("gestureable"in e?e.gestureable:this.options.gestureable),"autoScroll"in e&&this.autoScroll(e.autoScroll),this},unset:function(){return At.remove(this,"all"),"string"==typeof this.selector?delete Q[this.selector]:(At.remove(this,"all"),this.options.styleCursor&&(this._element.style.cursor=""),J.splice(J.indexOf(this.element()))),this.dropzone(!1),H.splice(H.indexOf(this),1),Y}},Y.isSet=function(e){return-1!==H.indexOfElement(e)},Y.on=function(e,t){return-1!==Et.indexOf(e)&&(St[e]?-1===St[e].indexOf(t)&&St[e].push(t):St[e]=[t]),Y},Y.off=function(e,t){var n=St[e].indexOf(t);return-1!==n&&St[e].splice(n,1),Y},Y.simulate=function(e,n,i){var r,o,s={};if("resize"===e&&(e="resizexy"),!(e in mt))return Y;if(i)for(r in i)i.hasOwnProperty(r)&&(s[r]=i[r]);else o=tt._element instanceof k?n.getBoundingClientRect():o=n.getClientRects()[0],"drag"===e?(s.pageX=o.left+o.width/2,s.pageY=o.top+o.height/2):(s.pageX=o.right,s.pageY=o.bottom);return s.target=s.currentTarget=n,s.preventDefault=s.stopPropagation=t,v(s,e),Y},Y.enableDragging=function(e){return null!==e&&void 0!==e?(vt.drag=e,Y):vt.drag},Y.enableResizing=function(e){return null!==e&&void 0!==e?(vt.resize=e,Y):vt.resize},Y.enableGesturing=function(e){return null!==e&&void 0!==e?(vt.gesture=e,Y):vt.gesture},Y.eventTypes=Et,Y.debug=function(){return{target:tt,dragging:dt,resizing:ft,gesturing:pt,prevX:q,prevY:L,x0:B,y0:K,Interactable:T,IOptions:A,interactables:H,dropzones:W,pointerIsDown:ct,supportsTouch:at,defaultOptions:rt,defaultActionChecker:T.prototype.getAction,dragMove:b,resizeMove:E,gestureMove:S,pointerUp:w,pointerDown:v,pointerHover:R,events:At,globalEvents:St,log:function(){C.log("target         :  "+tt),C.log("prevX, prevY   :  "+q,L),C.log("x0, y0         :  "+B,K),C.log("supportsTouch  :  "+at),C.log("pointerIsDown  :  "+ct),C.log("currentAction  :  "+Y.currentAction())}}},Y.margin=function(e){return"number"==typeof e?(lt=e,Y):lt},Y.styleCursor=function(e){return"boolean"==typeof e?(rt.styleCursor=e,Y):rt.styleCursor},Y.autoScroll=function(e){var t=rt.autoScroll;return e instanceof Object?(rt.autoScrollEnabled=!0,"number"==typeof e.margin&&(t.margin=e.margin),"number"==typeof e.distance&&(t.distance=e.distance),"number"==typeof e.interval&&(t.interval=e.interval),t.container=e.container instanceof Element?e.container:t.container,Y):"boolean"==typeof e?(rt.autoScrollEnabled=e,Y):rt.autoScrollEnabled?t:!1},Y.snap=function(e){var t=rt.snap;return e instanceof Object?(rt.snapEnabled=!0,"string"==typeof e.mode&&(t.mode=e.mode),"number"==typeof e.range&&(t.range=e.range),e.actions instanceof Array&&(t.actions=e.actions),e.anchors instanceof Array&&(t.anchors=e.anchors),e.grid instanceof Object&&(t.grid=e.grid),e.gridOffset instanceof Object&&(t.gridOffset=e.gridOffset),Y):"boolean"==typeof e?(rt.snapEnabled=e,Y):{enabled:rt.snapEnabled,mode:t.mode,actions:t.actions,grid:t.grid,gridOffset:t.gridOffset,anchors:t.anchors,paths:t.paths,range:t.range,locked:ot.locked,x:ot.x,y:ot.y,realX:ot.realX,realY:ot.realY,dx:ot.dx,dy:ot.dy}},Y.supportsTouch=function(){return at},Y.currentAction=function(){return dt&&"drag"||ft&&"resize"||pt&&"gesture"||null},Y.stop=function(e){if(dt||ft||pt){st.stop(),et=[],tt.options.styleCursor&&(I.documentElement.style.cursor=""),X();for(var t=0;t<Z.length;t++)Z._elements=[];e&&"function"==typeof e.preventDefault&&e.preventDefault()}return ct=ot.locked=dt=ft=pt=!1,ht=!0,xt=U=null,Y},Y.dynamicDrop=function(e){return"boolean"==typeof e?(dt&&gt!==e&&!e&&p(W),gt=e,Y):gt},Y.deltaSource=function(e){return"page"===e||"client"===e?(rt.deltaSource=e,this):rt.deltaSource},Y.restrict=function(e){return void 0===e?rt.restrictions:(e instanceof Object?rt.restrictions=e:null===e&&(rt.restrictions={}),this)},At.add(wt,"mousedown",m),At.add(wt,"touchstart",m),At.add(wt,"mousemove",x),At.add(wt,"touchmove",x),At.add(wt,"mouseover",z),At.add(wt,"mouseout",_),At.add(wt,"mouseup",w),At.add(wt,"touchend",w),At.add(wt,"touchcancel",w),At.add(Rt,"blur",w);try{e.frameElement&&(Yt._element=e.frameElement.ownerDocument,At.add(Yt,"mouseup",w),At.add(Yt,"touchend",w),At.add(Yt,"touchcancel",w),At.add(Xt,"blur",w))}catch(Tt){Y.windowParentError=Tt}At.add(wt,"selectstart",function(e){(dt||ft||pt)&&e.preventDefault()}),_t in Element.prototype&&"function"==typeof Element.prototype[_t]||(Element.prototype[_t]=M=function(e,t){t=t||this.parentNode.querySelectorAll(e),count=t.length;for(var n=0;count>n;n++)if(t[n]===this)return!0;return!1}),"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=Y),exports.interact=Y):e.interact=Y}(this);
