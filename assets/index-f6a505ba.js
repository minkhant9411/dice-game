(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function yi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?yi(Object(n),!0).forEach(function(r){ve(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function or(e){"@babel/helpers - typeof";return or=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},or(e)}function Il(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function xi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Nl(e,t,n){return t&&xi(e.prototype,t),n&&xi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ve(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Sa(e,t){return Fl(e)||$l(e,t)||Us(e,t)||Dl()}function Ln(e){return Ml(e)||Ll(e)||Us(e)||jl()}function Ml(e){if(Array.isArray(e))return Zr(e)}function Fl(e){if(Array.isArray(e))return e}function Ll(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function $l(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,s,o;try{for(n=n.call(e);!(a=(s=n.next()).done)&&(r.push(s.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,o=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw o}}return r}}function Us(e,t){if(e){if(typeof e=="string")return Zr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Zr(e,t)}}function Zr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function jl(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Dl(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var _i=function(){},Ta={},Ks={},Ys=null,Ws={mark:_i,measure:_i};try{typeof window<"u"&&(Ta=window),typeof document<"u"&&(Ks=document),typeof MutationObserver<"u"&&(Ys=MutationObserver),typeof performance<"u"&&(Ws=performance)}catch{}var zl=Ta.navigator||{},wi=zl.userAgent,ki=wi===void 0?"":wi,wt=Ta,se=Ks,Ei=Ys,zn=Ws;wt.document;var ct=!!se.documentElement&&!!se.head&&typeof se.addEventListener=="function"&&typeof se.createElement=="function",Vs=~ki.indexOf("MSIE")||~ki.indexOf("Trident/"),Bn,Hn,Un,Kn,Yn,st="___FONT_AWESOME___",ea=16,qs="fa",Gs="svg-inline--fa",Dt="data-fa-i2svg",ta="data-fa-pseudo-element",Bl="data-fa-pseudo-element-pending",Ra="data-prefix",Ia="data-icon",Ai="fontawesome-i2svg",Hl="async",Ul=["HTML","HEAD","STYLE","SCRIPT"],Xs=function(){try{return!0}catch{return!1}}(),ie="classic",ce="sharp",Na=[ie,ce];function $n(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[ie]}})}var An=$n((Bn={},ve(Bn,ie,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ve(Bn,ce,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Bn)),Cn=$n((Hn={},ve(Hn,ie,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ve(Hn,ce,{solid:"fass",regular:"fasr",light:"fasl"}),Hn)),On=$n((Un={},ve(Un,ie,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ve(Un,ce,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Un)),Kl=$n((Kn={},ve(Kn,ie,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ve(Kn,ce,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Kn)),Yl=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Qs="fa-layers-text",Wl=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Vl=$n((Yn={},ve(Yn,ie,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ve(Yn,ce,{900:"fass",400:"fasr",300:"fasl"}),Yn)),Js=[1,2,3,4,5,6,7,8,9,10],ql=Js.concat([11,12,13,14,15,16,17,18,19,20]),Gl=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Mt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Pn=new Set;Object.keys(Cn[ie]).map(Pn.add.bind(Pn));Object.keys(Cn[ce]).map(Pn.add.bind(Pn));var Xl=[].concat(Na,Ln(Pn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Mt.GROUP,Mt.SWAP_OPACITY,Mt.PRIMARY,Mt.SECONDARY]).concat(Js.map(function(e){return"".concat(e,"x")})).concat(ql.map(function(e){return"w-".concat(e)})),bn=wt.FontAwesomeConfig||{};function Ql(e){var t=se.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Jl(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(se&&typeof se.querySelector=="function"){var Zl=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Zl.forEach(function(e){var t=Sa(e,2),n=t[0],r=t[1],a=Jl(Ql(n));a!=null&&(bn[r]=a)})}var Zs={styleDefault:"solid",familyDefault:"classic",cssPrefix:qs,replacementClass:Gs,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};bn.familyPrefix&&(bn.cssPrefix=bn.familyPrefix);var en=R(R({},Zs),bn);en.autoReplaceSvg||(en.observeMutations=!1);var F={};Object.keys(Zs).forEach(function(e){Object.defineProperty(F,e,{enumerable:!0,set:function(n){en[e]=n,yn.forEach(function(r){return r(F)})},get:function(){return en[e]}})});Object.defineProperty(F,"familyPrefix",{enumerable:!0,set:function(t){en.cssPrefix=t,yn.forEach(function(n){return n(F)})},get:function(){return en.cssPrefix}});wt.FontAwesomeConfig=F;var yn=[];function ef(e){return yn.push(e),function(){yn.splice(yn.indexOf(e),1)}}var mt=ea,Qe={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function tf(e){if(!(!e||!ct)){var t=se.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=se.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=i)}return se.head.insertBefore(t,r),e}}var nf="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Sn(){for(var e=12,t="";e-- >0;)t+=nf[Math.random()*62|0];return t}function on(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ma(e){return e.classList?on(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function eo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function rf(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(eo(e[n]),'" ')},"").trim()}function yr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Fa(e){return e.size!==Qe.size||e.x!==Qe.x||e.y!==Qe.y||e.rotate!==Qe.rotate||e.flipX||e.flipY}function af(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),o="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(s," ").concat(o)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function sf(e){var t=e.transform,n=e.width,r=n===void 0?ea:n,a=e.height,i=a===void 0?ea:a,s=e.startCentered,o=s===void 0?!1:s,l="";return o&&Vs?l+="translate(".concat(t.x/mt-r/2,"em, ").concat(t.y/mt-i/2,"em) "):o?l+="translate(calc(-50% + ".concat(t.x/mt,"em), calc(-50% + ").concat(t.y/mt,"em)) "):l+="translate(".concat(t.x/mt,"em, ").concat(t.y/mt,"em) "),l+="scale(".concat(t.size/mt*(t.flipX?-1:1),", ").concat(t.size/mt*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var of=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function to(){var e=qs,t=Gs,n=F.cssPrefix,r=F.replacementClass,a=of;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(o,".".concat(r))}return a}var Ci=!1;function Lr(){F.autoAddCss&&!Ci&&(tf(to()),Ci=!0)}var lf={mixout:function(){return{dom:{css:to,insertCss:Lr}}},hooks:function(){return{beforeDOMElementCreation:function(){Lr()},beforeI2svg:function(){Lr()}}}},ot=wt||{};ot[st]||(ot[st]={});ot[st].styles||(ot[st].styles={});ot[st].hooks||(ot[st].hooks={});ot[st].shims||(ot[st].shims=[]);var Be=ot[st],no=[],ff=function e(){se.removeEventListener("DOMContentLoaded",e),lr=1,no.map(function(t){return t()})},lr=!1;ct&&(lr=(se.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(se.readyState),lr||se.addEventListener("DOMContentLoaded",ff));function cf(e){ct&&(lr?setTimeout(e,0):no.push(e))}function jn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?eo(e):"<".concat(t," ").concat(rf(r),">").concat(i.map(jn).join(""),"</").concat(t,">")}function Oi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var uf=function(t,n){return function(r,a,i,s){return t.call(n,r,a,i,s)}},$r=function(t,n,r,a){var i=Object.keys(t),s=i.length,o=a!==void 0?uf(n,a):n,l,f,c;for(r===void 0?(l=1,c=t[i[0]]):(l=0,c=r);l<s;l++)f=i[l],c=o(c,t[f],f,t);return c};function df(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function na(e){var t=df(e);return t.length===1?t[0].toString(16):null}function mf(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Pi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function ra(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Pi(t);typeof Be.hooks.addPack=="function"&&!a?Be.hooks.addPack(e,Pi(t)):Be.styles[e]=R(R({},Be.styles[e]||{}),i),e==="fas"&&ra("fa",t)}var Wn,Vn,qn,Yt=Be.styles,pf=Be.shims,hf=(Wn={},ve(Wn,ie,Object.values(On[ie])),ve(Wn,ce,Object.values(On[ce])),Wn),La=null,ro={},ao={},io={},so={},oo={},gf=(Vn={},ve(Vn,ie,Object.keys(An[ie])),ve(Vn,ce,Object.keys(An[ce])),Vn);function vf(e){return~Xl.indexOf(e)}function bf(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!vf(a)?a:null}var lo=function(){var t=function(i){return $r(Yt,function(s,o,l){return s[l]=$r(o,i,{}),s},{})};ro=t(function(a,i,s){if(i[3]&&(a[i[3]]=s),i[2]){var o=i[2].filter(function(l){return typeof l=="number"});o.forEach(function(l){a[l.toString(16)]=s})}return a}),ao=t(function(a,i,s){if(a[s]=s,i[2]){var o=i[2].filter(function(l){return typeof l=="string"});o.forEach(function(l){a[l]=s})}return a}),oo=t(function(a,i,s){var o=i[2];return a[s]=s,o.forEach(function(l){a[l]=s}),a});var n="far"in Yt||F.autoFetchSvg,r=$r(pf,function(a,i){var s=i[0],o=i[1],l=i[2];return o==="far"&&!n&&(o="fas"),typeof s=="string"&&(a.names[s]={prefix:o,iconName:l}),typeof s=="number"&&(a.unicodes[s.toString(16)]={prefix:o,iconName:l}),a},{names:{},unicodes:{}});io=r.names,so=r.unicodes,La=xr(F.styleDefault,{family:F.familyDefault})};ef(function(e){La=xr(e.styleDefault,{family:F.familyDefault})});lo();function $a(e,t){return(ro[e]||{})[t]}function yf(e,t){return(ao[e]||{})[t]}function Ft(e,t){return(oo[e]||{})[t]}function fo(e){return io[e]||{prefix:null,iconName:null}}function xf(e){var t=so[e],n=$a("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function kt(){return La}var ja=function(){return{prefix:null,iconName:null,rest:[]}};function xr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?ie:n,a=An[r][e],i=Cn[r][e]||Cn[r][a],s=e in Be.styles?e:null;return i||s||null}var Si=(qn={},ve(qn,ie,Object.keys(On[ie])),ve(qn,ce,Object.keys(On[ce])),qn);function _r(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},ve(t,ie,"".concat(F.cssPrefix,"-").concat(ie)),ve(t,ce,"".concat(F.cssPrefix,"-").concat(ce)),t),s=null,o=ie;(e.includes(i[ie])||e.some(function(f){return Si[ie].includes(f)}))&&(o=ie),(e.includes(i[ce])||e.some(function(f){return Si[ce].includes(f)}))&&(o=ce);var l=e.reduce(function(f,c){var d=bf(F.cssPrefix,c);if(Yt[c]?(c=hf[o].includes(c)?Kl[o][c]:c,s=c,f.prefix=c):gf[o].indexOf(c)>-1?(s=c,f.prefix=xr(c,{family:o})):d?f.iconName=d:c!==F.replacementClass&&c!==i[ie]&&c!==i[ce]&&f.rest.push(c),!a&&f.prefix&&f.iconName){var p=s==="fa"?fo(f.iconName):{},g=Ft(f.prefix,f.iconName);p.prefix&&(s=null),f.iconName=p.iconName||g||f.iconName,f.prefix=p.prefix||f.prefix,f.prefix==="far"&&!Yt.far&&Yt.fas&&!F.autoFetchSvg&&(f.prefix="fas")}return f},ja());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&o===ce&&(Yt.fass||F.autoFetchSvg)&&(l.prefix="fass",l.iconName=Ft(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||s==="fa")&&(l.prefix=kt()||"fas"),l}var _f=function(){function e(){Il(this,e),this.definitions={}}return Nl(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var s=a.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(o){n.definitions[o]=R(R({},n.definitions[o]||{}),s[o]),ra(o,s[o]);var l=On[ie][o];l&&ra(l,s[o]),lo()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var s=a[i],o=s.prefix,l=s.iconName,f=s.icon,c=f[2];n[o]||(n[o]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[o][d]=f)}),n[o][l]=f}),n}}]),e}(),Ti=[],Wt={},qt={},wf=Object.keys(qt);function kf(e,t){var n=t.mixoutsTo;return Ti=e,Wt={},Object.keys(qt).forEach(function(r){wf.indexOf(r)===-1&&delete qt[r]}),Ti.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(s){typeof a[s]=="function"&&(n[s]=a[s]),or(a[s])==="object"&&Object.keys(a[s]).forEach(function(o){n[s]||(n[s]={}),n[s][o]=a[s][o]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(s){Wt[s]||(Wt[s]=[]),Wt[s].push(i[s])})}r.provides&&r.provides(qt)}),n}function aa(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Wt[e]||[];return i.forEach(function(s){t=s.apply(null,[t].concat(r))}),t}function zt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Wt[e]||[];a.forEach(function(i){i.apply(null,n)})}function lt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return qt[e]?qt[e].apply(null,t):void 0}function ia(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||kt();if(t)return t=Ft(n,t)||t,Oi(co.definitions,n,t)||Oi(Be.styles,n,t)}var co=new _f,Ef=function(){F.autoReplaceSvg=!1,F.observeMutations=!1,zt("noAuto")},Af={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ct?(zt("beforeI2svg",t),lt("pseudoElements2svg",t),lt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;F.autoReplaceSvg===!1&&(F.autoReplaceSvg=!0),F.observeMutations=!0,cf(function(){Of({autoReplaceSvgRoot:n}),zt("watch",t)})}},Cf={icon:function(t){if(t===null)return null;if(or(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Ft(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=xr(t[0]);return{prefix:r,iconName:Ft(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(F.cssPrefix,"-"))>-1||t.match(Yl))){var a=_r(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||kt(),iconName:Ft(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=kt();return{prefix:i,iconName:Ft(i,t)||t}}}},Me={noAuto:Ef,config:F,dom:Af,parse:Cf,library:co,findIconDefinition:ia,toHtml:jn},Of=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?se:n;(Object.keys(Be.styles).length>0||F.autoFetchSvg)&&ct&&F.autoReplaceSvg&&Me.dom.i2svg({node:r})};function wr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return jn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(ct){var r=se.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Pf(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,s=e.transform;if(Fa(s)&&n.found&&!r.found){var o=n.width,l=n.height,f={x:o/l/2,y:.5};a.style=yr(R(R({},i),{},{"transform-origin":"".concat(f.x+s.x/16,"em ").concat(f.y+s.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Sf(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,s=i===!0?"".concat(t,"-").concat(F.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:R(R({},a),{},{id:s}),children:r}]}]}function Da(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,s=e.transform,o=e.symbol,l=e.title,f=e.maskId,c=e.titleId,d=e.extra,p=e.watchable,g=p===void 0?!1:p,C=r.found?r:n,A=C.width,L=C.height,b=a==="fak",x=[F.replacementClass,i?"".concat(F.cssPrefix,"-").concat(i):""].filter(function(V){return d.classes.indexOf(V)===-1}).filter(function(V){return V!==""||!!V}).concat(d.classes).join(" "),I={children:[],attributes:R(R({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:x,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(A," ").concat(L)})},O=b&&!~d.classes.indexOf("fa-fw")?{width:"".concat(A/L*16*.0625,"em")}:{};g&&(I.attributes[Dt]=""),l&&(I.children.push({tag:"title",attributes:{id:I.attributes["aria-labelledby"]||"title-".concat(c||Sn())},children:[l]}),delete I.attributes.title);var H=R(R({},I),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:s,symbol:o,styles:R(R({},O),d.styles)}),X=r.found&&n.found?lt("generateAbstractMask",H)||{children:[],attributes:{}}:lt("generateAbstractIcon",H)||{children:[],attributes:{}},te=X.children,U=X.attributes;return H.children=te,H.attributes=U,o?Sf(H):Pf(H)}function Ri(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,s=e.extra,o=e.watchable,l=o===void 0?!1:o,f=R(R(R({},s.attributes),i?{title:i}:{}),{},{class:s.classes.join(" ")});l&&(f[Dt]="");var c=R({},s.styles);Fa(a)&&(c.transform=sf({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=yr(c);d.length>0&&(f.style=d);var p=[];return p.push({tag:"span",attributes:f,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function Tf(e){var t=e.content,n=e.title,r=e.extra,a=R(R(R({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=yr(r.styles);i.length>0&&(a.style=i);var s=[];return s.push({tag:"span",attributes:a,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var jr=Be.styles;function sa(e){var t=e[0],n=e[1],r=e.slice(4),a=Sa(r,1),i=a[0],s=null;return Array.isArray(i)?s={tag:"g",attributes:{class:"".concat(F.cssPrefix,"-").concat(Mt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(Mt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(Mt.PRIMARY),fill:"currentColor",d:i[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:s}}var Rf={found:!1,width:512,height:512};function If(e,t){!Xs&&!F.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function oa(e,t){var n=t;return t==="fa"&&F.styleDefault!==null&&(t=kt()),new Promise(function(r,a){if(lt("missingIconAbstract"),n==="fa"){var i=fo(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&jr[t]&&jr[t][e]){var s=jr[t][e];return r(sa(s))}If(e,t),r(R(R({},Rf),{},{icon:F.showMissingIcons&&e?lt("missingIconAbstract")||{}:{}}))})}var Ii=function(){},la=F.measurePerformance&&zn&&zn.mark&&zn.measure?zn:{mark:Ii,measure:Ii},hn='FA "6.4.2"',Nf=function(t){return la.mark("".concat(hn," ").concat(t," begins")),function(){return uo(t)}},uo=function(t){la.mark("".concat(hn," ").concat(t," ends")),la.measure("".concat(hn," ").concat(t),"".concat(hn," ").concat(t," begins"),"".concat(hn," ").concat(t," ends"))},za={begin:Nf,end:uo},tr=function(){};function Ni(e){var t=e.getAttribute?e.getAttribute(Dt):null;return typeof t=="string"}function Mf(e){var t=e.getAttribute?e.getAttribute(Ra):null,n=e.getAttribute?e.getAttribute(Ia):null;return t&&n}function Ff(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(F.replacementClass)}function Lf(){if(F.autoReplaceSvg===!0)return nr.replace;var e=nr[F.autoReplaceSvg];return e||nr.replace}function $f(e){return se.createElementNS("http://www.w3.org/2000/svg",e)}function jf(e){return se.createElement(e)}function mo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?$f:jf:n;if(typeof e=="string")return se.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(s){a.setAttribute(s,e.attributes[s])});var i=e.children||[];return i.forEach(function(s){a.appendChild(mo(s,{ceFn:r}))}),a}function Df(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var nr={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(mo(a),n)}),n.getAttribute(Dt)===null&&F.keepOriginalSource){var r=se.createComment(Df(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Ma(n).indexOf(F.replacementClass))return nr.replace(t);var a=new RegExp("".concat(F.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(o,l){return l===F.replacementClass||l.match(a)?o.toSvg.push(l):o.toNode.push(l),o},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var s=r.map(function(o){return jn(o)}).join(`
`);n.setAttribute(Dt,""),n.innerHTML=s}};function Mi(e){e()}function po(e,t){var n=typeof t=="function"?t:tr;if(e.length===0)n();else{var r=Mi;F.mutateApproach===Hl&&(r=wt.requestAnimationFrame||Mi),r(function(){var a=Lf(),i=za.begin("mutate");e.map(a),i(),n()})}}var Ba=!1;function ho(){Ba=!0}function fa(){Ba=!1}var fr=null;function Fi(e){if(Ei&&F.observeMutations){var t=e.treeCallback,n=t===void 0?tr:t,r=e.nodeCallback,a=r===void 0?tr:r,i=e.pseudoElementsCallback,s=i===void 0?tr:i,o=e.observeMutationsRoot,l=o===void 0?se:o;fr=new Ei(function(f){if(!Ba){var c=kt();on(f).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Ni(d.addedNodes[0])&&(F.searchPseudoElements&&s(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&F.searchPseudoElements&&s(d.target.parentNode),d.type==="attributes"&&Ni(d.target)&&~Gl.indexOf(d.attributeName))if(d.attributeName==="class"&&Mf(d.target)){var p=_r(Ma(d.target)),g=p.prefix,C=p.iconName;d.target.setAttribute(Ra,g||c),C&&d.target.setAttribute(Ia,C)}else Ff(d.target)&&a(d.target)})}}),ct&&fr.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function zf(){fr&&fr.disconnect()}function Bf(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),s=i[0],o=i.slice(1);return s&&o.length>0&&(r[s]=o.join(":").trim()),r},{})),n}function Hf(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=_r(Ma(e));return a.prefix||(a.prefix=kt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=yf(a.prefix,e.innerText)||$a(a.prefix,na(e.innerText))),!a.iconName&&F.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Uf(e){var t=on(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return F.autoA11y&&(n?t["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(r||Sn()):(t["aria-hidden"]="true",t.focusable="false")),t}function Kf(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Qe,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Li(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Hf(e),r=n.iconName,a=n.prefix,i=n.rest,s=Uf(e),o=aa("parseNodeAttributes",{},e),l=t.styleParser?Bf(e):[];return R({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Qe,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:s}},o)}var Yf=Be.styles;function go(e){var t=F.autoReplaceSvg==="nest"?Li(e,{styleParser:!1}):Li(e);return~t.extra.classes.indexOf(Qs)?lt("generateLayersText",e,t):lt("generateSvgReplacementMutation",e,t)}var Et=new Set;Na.map(function(e){Et.add("fa-".concat(e))});Object.keys(An[ie]).map(Et.add.bind(Et));Object.keys(An[ce]).map(Et.add.bind(Et));Et=Ln(Et);function $i(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ct)return Promise.resolve();var n=se.documentElement.classList,r=function(d){return n.add("".concat(Ai,"-").concat(d))},a=function(d){return n.remove("".concat(Ai,"-").concat(d))},i=F.autoFetchSvg?Et:Na.map(function(c){return"fa-".concat(c)}).concat(Object.keys(Yf));i.includes("fa")||i.push("fa");var s=[".".concat(Qs,":not([").concat(Dt,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(Dt,"])")})).join(", ");if(s.length===0)return Promise.resolve();var o=[];try{o=on(e.querySelectorAll(s))}catch{}if(o.length>0)r("pending"),a("complete");else return Promise.resolve();var l=za.begin("onTree"),f=o.reduce(function(c,d){try{var p=go(d);p&&c.push(p)}catch(g){Xs||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,d){Promise.all(f).then(function(p){po(p,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(p){l(),d(p)})})}function Wf(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;go(e).then(function(n){n&&po([n],t)})}function Vf(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ia(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:ia(a||{})),e(r,R(R({},n),{},{mask:a}))}}var qf=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Qe:r,i=n.symbol,s=i===void 0?!1:i,o=n.mask,l=o===void 0?null:o,f=n.maskId,c=f===void 0?null:f,d=n.title,p=d===void 0?null:d,g=n.titleId,C=g===void 0?null:g,A=n.classes,L=A===void 0?[]:A,b=n.attributes,x=b===void 0?{}:b,I=n.styles,O=I===void 0?{}:I;if(t){var H=t.prefix,X=t.iconName,te=t.icon;return wr(R({type:"icon"},t),function(){return zt("beforeDOMElementCreation",{iconDefinition:t,params:n}),F.autoA11y&&(p?x["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(C||Sn()):(x["aria-hidden"]="true",x.focusable="false")),Da({icons:{main:sa(te),mask:l?sa(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:H,iconName:X,transform:R(R({},Qe),a),symbol:s,title:p,maskId:c,titleId:C,extra:{attributes:x,styles:O,classes:L}})})}},Gf={mixout:function(){return{icon:Vf(qf)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=$i,n.nodeCallback=Wf,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?se:r,i=n.callback,s=i===void 0?function(){}:i;return $i(a,s)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,s=r.titleId,o=r.prefix,l=r.transform,f=r.symbol,c=r.mask,d=r.maskId,p=r.extra;return new Promise(function(g,C){Promise.all([oa(a,o),c.iconName?oa(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(A){var L=Sa(A,2),b=L[0],x=L[1];g([n,Da({icons:{main:b,mask:x},prefix:o,iconName:a,transform:l,symbol:f,maskId:d,title:i,titleId:s,extra:p,watchable:!0})])}).catch(C)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,s=n.transform,o=n.styles,l=yr(o);l.length>0&&(a.style=l);var f;return Fa(s)&&(f=lt("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},Xf={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return wr({type:"layer"},function(){zt("beforeDOMElementCreation",{assembler:n,params:r});var s=[];return n(function(o){Array.isArray(o)?o.map(function(l){s=s.concat(l.abstract)}):s=s.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(F.cssPrefix,"-layers")].concat(Ln(i)).join(" ")},children:s}]})}}}},Qf={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,s=r.classes,o=s===void 0?[]:s,l=r.attributes,f=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return wr({type:"counter",content:n},function(){return zt("beforeDOMElementCreation",{content:n,params:r}),Tf({content:n.toString(),title:i,extra:{attributes:f,styles:d,classes:["".concat(F.cssPrefix,"-layers-counter")].concat(Ln(o))}})})}}}},Jf={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Qe:a,s=r.title,o=s===void 0?null:s,l=r.classes,f=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,p=r.styles,g=p===void 0?{}:p;return wr({type:"text",content:n},function(){return zt("beforeDOMElementCreation",{content:n,params:r}),Ri({content:n,transform:R(R({},Qe),i),title:o,extra:{attributes:d,styles:g,classes:["".concat(F.cssPrefix,"-layers-text")].concat(Ln(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,s=r.extra,o=null,l=null;if(Vs){var f=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();o=c.width/f,l=c.height/f}return F.autoA11y&&!a&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,Ri({content:n.innerHTML,width:o,height:l,transform:i,title:a,extra:s,watchable:!0})])}}},Zf=new RegExp('"',"ug"),ji=[1105920,1112319];function ec(e){var t=e.replace(Zf,""),n=mf(t,0),r=n>=ji[0]&&n<=ji[1],a=t.length===2?t[0]===t[1]:!1;return{value:na(a?t[0]:t),isSecondary:r||a}}function Di(e,t){var n="".concat(Bl).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=on(e.children),s=i.filter(function(te){return te.getAttribute(ta)===t})[0],o=wt.getComputedStyle(e,t),l=o.getPropertyValue("font-family").match(Wl),f=o.getPropertyValue("font-weight"),c=o.getPropertyValue("content");if(s&&!l)return e.removeChild(s),r();if(l&&c!=="none"&&c!==""){var d=o.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?ce:ie,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Cn[p][l[2].toLowerCase()]:Vl[p][f],C=ec(d),A=C.value,L=C.isSecondary,b=l[0].startsWith("FontAwesome"),x=$a(g,A),I=x;if(b){var O=xf(A);O.iconName&&O.prefix&&(x=O.iconName,g=O.prefix)}if(x&&!L&&(!s||s.getAttribute(Ra)!==g||s.getAttribute(Ia)!==I)){e.setAttribute(n,I),s&&e.removeChild(s);var H=Kf(),X=H.extra;X.attributes[ta]=t,oa(x,g).then(function(te){var U=Da(R(R({},H),{},{icons:{main:te,mask:ja()},prefix:g,iconName:I,extra:X,watchable:!0})),V=se.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(V,e.firstChild):e.appendChild(V),V.outerHTML=U.map(function(Q){return jn(Q)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function tc(e){return Promise.all([Di(e,"::before"),Di(e,"::after")])}function nc(e){return e.parentNode!==document.head&&!~Ul.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ta)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function zi(e){if(ct)return new Promise(function(t,n){var r=on(e.querySelectorAll("*")).filter(nc).map(tc),a=za.begin("searchPseudoElements");ho(),Promise.all(r).then(function(){a(),fa(),t()}).catch(function(){a(),fa(),n()})})}var rc={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=zi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?se:r;F.searchPseudoElements&&zi(a)}}},Bi=!1,ac={mixout:function(){return{dom:{unwatch:function(){ho(),Bi=!0}}}},hooks:function(){return{bootstrap:function(){Fi(aa("mutationObserverCallbacks",{}))},noAuto:function(){zf()},watch:function(n){var r=n.observeMutationsRoot;Bi?fa():Fi(aa("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Hi=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),s=i[0],o=i.slice(1).join("-");if(s&&o==="h")return r.flipX=!0,r;if(s&&o==="v")return r.flipY=!0,r;if(o=parseFloat(o),isNaN(o))return r;switch(s){case"grow":r.size=r.size+o;break;case"shrink":r.size=r.size-o;break;case"left":r.x=r.x-o;break;case"right":r.x=r.x+o;break;case"up":r.y=r.y-o;break;case"down":r.y=r.y+o;break;case"rotate":r.rotate=r.rotate+o;break}return r},n)},ic={mixout:function(){return{parse:{transform:function(n){return Hi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Hi(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,s=n.iconWidth,o={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(f," ").concat(c)},p={transform:"translate(".concat(s/2*-1," -256)")},g={outer:o,inner:d,path:p};return{tag:"g",attributes:R({},g.outer),children:[{tag:"g",attributes:R({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:R(R({},r.icon.attributes),g.path)}]}]}}}},Dr={x:0,y:0,width:"100%",height:"100%"};function Ui(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function sc(e){return e.tag==="g"?e.children:[e]}var oc={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?_r(a.split(" ").map(function(s){return s.trim()})):ja();return i.prefix||(i.prefix=kt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,s=n.mask,o=n.maskId,l=n.transform,f=i.width,c=i.icon,d=s.width,p=s.icon,g=af({transform:l,containerWidth:d,iconWidth:f}),C={tag:"rect",attributes:R(R({},Dr),{},{fill:"white"})},A=c.children?{children:c.children.map(Ui)}:{},L={tag:"g",attributes:R({},g.inner),children:[Ui(R({tag:c.tag,attributes:R(R({},c.attributes),g.path)},A))]},b={tag:"g",attributes:R({},g.outer),children:[L]},x="mask-".concat(o||Sn()),I="clip-".concat(o||Sn()),O={tag:"mask",attributes:R(R({},Dr),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[C,b]},H={tag:"defs",children:[{tag:"clipPath",attributes:{id:I},children:sc(p)},O]};return r.push(H,{tag:"rect",attributes:R({fill:"currentColor","clip-path":"url(#".concat(I,")"),mask:"url(#".concat(x,")")},Dr)}),{children:r,attributes:a}}}},lc={provides:function(t){var n=!1;wt.matchMedia&&(n=wt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:R(R({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=R(R({},i),{},{attributeName:"opacity"}),o={tag:"circle",attributes:R(R({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||o.children.push({tag:"animate",attributes:R(R({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:R(R({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(o),r.push({tag:"path",attributes:R(R({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:R(R({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:R(R({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:R(R({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},fc={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},cc=[lf,Gf,Xf,Qf,Jf,rc,ac,ic,oc,lc,fc];kf(cc,{mixoutsTo:Me});Me.noAuto;Me.config;var uc=Me.library;Me.dom;var ca=Me.parse;Me.findIconDefinition;Me.toHtml;var dc=Me.icon;Me.layer;Me.text;Me.counter;function Ha(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const fe={},Gt=[],Ke=()=>{},mc=()=>!1,pc=/^on[^a-z]/,kr=e=>pc.test(e),Ua=e=>e.startsWith("onUpdate:"),pe=Object.assign,Ka=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},hc=Object.prototype.hasOwnProperty,q=(e,t)=>hc.call(e,t),B=Array.isArray,Xt=e=>Er(e)==="[object Map]",vo=e=>Er(e)==="[object Set]",Y=e=>typeof e=="function",he=e=>typeof e=="string",Ya=e=>typeof e=="symbol",oe=e=>e!==null&&typeof e=="object",bo=e=>oe(e)&&Y(e.then)&&Y(e.catch),yo=Object.prototype.toString,Er=e=>yo.call(e),gc=e=>Er(e).slice(8,-1),xo=e=>Er(e)==="[object Object]",Wa=e=>he(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,rr=Ha(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ar=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},vc=/-(\w)/g,Ze=Ar(e=>e.replace(vc,(t,n)=>n?n.toUpperCase():"")),bc=/\B([A-Z])/g,ln=Ar(e=>e.replace(bc,"-$1").toLowerCase()),Cr=Ar(e=>e.charAt(0).toUpperCase()+e.slice(1)),zr=Ar(e=>e?`on${Cr(e)}`:""),Tn=(e,t)=>!Object.is(e,t),Br=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},cr=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},yc=e=>{const t=parseFloat(e);return isNaN(t)?e:t},xc=e=>{const t=he(e)?Number(e):NaN;return isNaN(t)?e:t};let Ki;const ua=()=>Ki||(Ki=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Va(e){if(B(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=he(r)?Ec(r):Va(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(he(e))return e;if(oe(e))return e}}const _c=/;(?![^(]*\))/g,wc=/:([^]+)/,kc=/\/\*[^]*?\*\//g;function Ec(e){const t={};return e.replace(kc,"").split(_c).forEach(n=>{if(n){const r=n.split(wc);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function tn(e){let t="";if(he(e))t=e;else if(B(e))for(let n=0;n<e.length;n++){const r=tn(e[n]);r&&(t+=r+" ")}else if(oe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ac="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Cc=Ha(Ac);function _o(e){return!!e||e===""}const Oc=e=>he(e)?e:e==null?"":B(e)||oe(e)&&(e.toString===yo||!Y(e.toString))?JSON.stringify(e,wo,2):String(e),wo=(e,t)=>t&&t.__v_isRef?wo(e,t.value):Xt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:vo(t)?{[`Set(${t.size})`]:[...t.values()]}:oe(t)&&!B(t)&&!xo(t)?String(t):t;let De;class Pc{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=De,!t&&De&&(this.index=(De.scopes||(De.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=De;try{return De=this,t()}finally{De=n}}}on(){De=this}off(){De=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Sc(e,t=De){t&&t.active&&t.effects.push(e)}function Tc(){return De}const qa=e=>{const t=new Set(e);return t.w=0,t.n=0,t},ko=e=>(e.w&At)>0,Eo=e=>(e.n&At)>0,Rc=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=At},Ic=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];ko(a)&&!Eo(a)?a.delete(e):t[n++]=a,a.w&=~At,a.n&=~At}t.length=n}},da=new WeakMap;let gn=0,At=1;const ma=30;let ze;const Lt=Symbol(""),pa=Symbol("");class Ga{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Sc(this,r)}run(){if(!this.active)return this.fn();let t=ze,n=xt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=ze,ze=this,xt=!0,At=1<<++gn,gn<=ma?Rc(this):Yi(this),this.fn()}finally{gn<=ma&&Ic(this),At=1<<--gn,ze=this.parent,xt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ze===this?this.deferStop=!0:this.active&&(Yi(this),this.onStop&&this.onStop(),this.active=!1)}}function Yi(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let xt=!0;const Ao=[];function fn(){Ao.push(xt),xt=!1}function cn(){const e=Ao.pop();xt=e===void 0?!0:e}function Te(e,t,n){if(xt&&ze){let r=da.get(e);r||da.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=qa()),Co(a)}}function Co(e,t){let n=!1;gn<=ma?Eo(e)||(e.n|=At,n=!ko(e)):n=!e.has(ze),n&&(e.add(ze),ze.deps.push(e))}function ft(e,t,n,r,a,i){const s=da.get(e);if(!s)return;let o=[];if(t==="clear")o=[...s.values()];else if(n==="length"&&B(e)){const l=Number(r);s.forEach((f,c)=>{(c==="length"||c>=l)&&o.push(f)})}else switch(n!==void 0&&o.push(s.get(n)),t){case"add":B(e)?Wa(n)&&o.push(s.get("length")):(o.push(s.get(Lt)),Xt(e)&&o.push(s.get(pa)));break;case"delete":B(e)||(o.push(s.get(Lt)),Xt(e)&&o.push(s.get(pa)));break;case"set":Xt(e)&&o.push(s.get(Lt));break}if(o.length===1)o[0]&&ha(o[0]);else{const l=[];for(const f of o)f&&l.push(...f);ha(qa(l))}}function ha(e,t){const n=B(e)?e:[...e];for(const r of n)r.computed&&Wi(r);for(const r of n)r.computed||Wi(r)}function Wi(e,t){(e!==ze||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Nc=Ha("__proto__,__v_isRef,__isVue"),Oo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ya)),Mc=Xa(),Fc=Xa(!1,!0),Lc=Xa(!0),Vi=$c();function $c(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=G(this);for(let i=0,s=this.length;i<s;i++)Te(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(G)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){fn();const r=G(this)[t].apply(this,n);return cn(),r}}),e}function jc(e){const t=G(this);return Te(t,"has",e),t.hasOwnProperty(e)}function Xa(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?eu:Io:t?Ro:To).get(r))return r;const s=B(r);if(!e){if(s&&q(Vi,a))return Reflect.get(Vi,a,i);if(a==="hasOwnProperty")return jc}const o=Reflect.get(r,a,i);return(Ya(a)?Oo.has(a):Nc(a))||(e||Te(r,"get",a),t)?o:xe(o)?s&&Wa(a)?o:o.value:oe(o)?e?Mo(o):Pr(o):o}}const Dc=Po(),zc=Po(!0);function Po(e=!1){return function(n,r,a,i){let s=n[r];if(nn(s)&&xe(s)&&!xe(a))return!1;if(!e&&(!ur(a)&&!nn(a)&&(s=G(s),a=G(a)),!B(n)&&xe(s)&&!xe(a)))return s.value=a,!0;const o=B(n)&&Wa(r)?Number(r)<n.length:q(n,r),l=Reflect.set(n,r,a,i);return n===G(i)&&(o?Tn(a,s)&&ft(n,"set",r,a):ft(n,"add",r,a)),l}}function Bc(e,t){const n=q(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&ft(e,"delete",t,void 0),r}function Hc(e,t){const n=Reflect.has(e,t);return(!Ya(t)||!Oo.has(t))&&Te(e,"has",t),n}function Uc(e){return Te(e,"iterate",B(e)?"length":Lt),Reflect.ownKeys(e)}const So={get:Mc,set:Dc,deleteProperty:Bc,has:Hc,ownKeys:Uc},Kc={get:Lc,set(e,t){return!0},deleteProperty(e,t){return!0}},Yc=pe({},So,{get:Fc,set:zc}),Qa=e=>e,Or=e=>Reflect.getPrototypeOf(e);function Gn(e,t,n=!1,r=!1){e=e.__v_raw;const a=G(e),i=G(t);n||(t!==i&&Te(a,"get",t),Te(a,"get",i));const{has:s}=Or(a),o=r?Qa:n?ei:Rn;if(s.call(a,t))return o(e.get(t));if(s.call(a,i))return o(e.get(i));e!==a&&e.get(t)}function Xn(e,t=!1){const n=this.__v_raw,r=G(n),a=G(e);return t||(e!==a&&Te(r,"has",e),Te(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function Qn(e,t=!1){return e=e.__v_raw,!t&&Te(G(e),"iterate",Lt),Reflect.get(e,"size",e)}function qi(e){e=G(e);const t=G(this);return Or(t).has.call(t,e)||(t.add(e),ft(t,"add",e,e)),this}function Gi(e,t){t=G(t);const n=G(this),{has:r,get:a}=Or(n);let i=r.call(n,e);i||(e=G(e),i=r.call(n,e));const s=a.call(n,e);return n.set(e,t),i?Tn(t,s)&&ft(n,"set",e,t):ft(n,"add",e,t),this}function Xi(e){const t=G(this),{has:n,get:r}=Or(t);let a=n.call(t,e);a||(e=G(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&ft(t,"delete",e,void 0),i}function Qi(){const e=G(this),t=e.size!==0,n=e.clear();return t&&ft(e,"clear",void 0,void 0),n}function Jn(e,t){return function(r,a){const i=this,s=i.__v_raw,o=G(s),l=t?Qa:e?ei:Rn;return!e&&Te(o,"iterate",Lt),s.forEach((f,c)=>r.call(a,l(f),l(c),i))}}function Zn(e,t,n){return function(...r){const a=this.__v_raw,i=G(a),s=Xt(i),o=e==="entries"||e===Symbol.iterator&&s,l=e==="keys"&&s,f=a[e](...r),c=n?Qa:t?ei:Rn;return!t&&Te(i,"iterate",l?pa:Lt),{next(){const{value:d,done:p}=f.next();return p?{value:d,done:p}:{value:o?[c(d[0]),c(d[1])]:c(d),done:p}},[Symbol.iterator](){return this}}}}function pt(e){return function(...t){return e==="delete"?!1:this}}function Wc(){const e={get(i){return Gn(this,i)},get size(){return Qn(this)},has:Xn,add:qi,set:Gi,delete:Xi,clear:Qi,forEach:Jn(!1,!1)},t={get(i){return Gn(this,i,!1,!0)},get size(){return Qn(this)},has:Xn,add:qi,set:Gi,delete:Xi,clear:Qi,forEach:Jn(!1,!0)},n={get(i){return Gn(this,i,!0)},get size(){return Qn(this,!0)},has(i){return Xn.call(this,i,!0)},add:pt("add"),set:pt("set"),delete:pt("delete"),clear:pt("clear"),forEach:Jn(!0,!1)},r={get(i){return Gn(this,i,!0,!0)},get size(){return Qn(this,!0)},has(i){return Xn.call(this,i,!0)},add:pt("add"),set:pt("set"),delete:pt("delete"),clear:pt("clear"),forEach:Jn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Zn(i,!1,!1),n[i]=Zn(i,!0,!1),t[i]=Zn(i,!1,!0),r[i]=Zn(i,!0,!0)}),[e,n,t,r]}const[Vc,qc,Gc,Xc]=Wc();function Ja(e,t){const n=t?e?Xc:Gc:e?qc:Vc;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(q(n,a)&&a in r?n:r,a,i)}const Qc={get:Ja(!1,!1)},Jc={get:Ja(!1,!0)},Zc={get:Ja(!0,!1)},To=new WeakMap,Ro=new WeakMap,Io=new WeakMap,eu=new WeakMap;function tu(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function nu(e){return e.__v_skip||!Object.isExtensible(e)?0:tu(gc(e))}function Pr(e){return nn(e)?e:Za(e,!1,So,Qc,To)}function No(e){return Za(e,!1,Yc,Jc,Ro)}function Mo(e){return Za(e,!0,Kc,Zc,Io)}function Za(e,t,n,r,a){if(!oe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const s=nu(e);if(s===0)return e;const o=new Proxy(e,s===2?r:n);return a.set(e,o),o}function Qt(e){return nn(e)?Qt(e.__v_raw):!!(e&&e.__v_isReactive)}function nn(e){return!!(e&&e.__v_isReadonly)}function ur(e){return!!(e&&e.__v_isShallow)}function Fo(e){return Qt(e)||nn(e)}function G(e){const t=e&&e.__v_raw;return t?G(t):e}function Lo(e){return cr(e,"__v_skip",!0),e}const Rn=e=>oe(e)?Pr(e):e,ei=e=>oe(e)?Mo(e):e;function $o(e){xt&&ze&&(e=G(e),Co(e.dep||(e.dep=qa())))}function jo(e,t){e=G(e);const n=e.dep;n&&ha(n)}function xe(e){return!!(e&&e.__v_isRef===!0)}function $t(e){return Do(e,!1)}function ru(e){return Do(e,!0)}function Do(e,t){return xe(e)?e:new au(e,t)}class au{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:G(t),this._value=n?t:Rn(t)}get value(){return $o(this),this._value}set value(t){const n=this.__v_isShallow||ur(t)||nn(t);t=n?t:G(t),Tn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Rn(t),jo(this))}}function Ce(e){return xe(e)?e.value:e}const iu={get:(e,t,n)=>Ce(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return xe(a)&&!xe(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function zo(e){return Qt(e)?e:new Proxy(e,iu)}class su{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ga(t,()=>{this._dirty||(this._dirty=!0,jo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=G(this);return $o(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function ou(e,t,n=!1){let r,a;const i=Y(e);return i?(r=e,a=Ke):(r=e.get,a=e.set),new su(r,a,i||!a,n)}function _t(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Sr(i,t,n)}return a}function Le(e,t,n,r){if(Y(e)){const i=_t(e,t,n,r);return i&&bo(i)&&i.catch(s=>{Sr(s,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Le(e[i],t,n,r));return a}function Sr(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const s=t.proxy,o=n;for(;i;){const f=i.ec;if(f){for(let c=0;c<f.length;c++)if(f[c](e,s,o)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){_t(l,null,10,[e,s,o]);return}}lu(e,n,a,r)}function lu(e,t,n,r=!0){console.error(e)}let In=!1,ga=!1;const we=[];let Xe=0;const Jt=[];let rt=null,Rt=0;const Bo=Promise.resolve();let ti=null;function Ho(e){const t=ti||Bo;return e?t.then(this?e.bind(this):e):t}function fu(e){let t=Xe+1,n=we.length;for(;t<n;){const r=t+n>>>1;Nn(we[r])<e?t=r+1:n=r}return t}function ni(e){(!we.length||!we.includes(e,In&&e.allowRecurse?Xe+1:Xe))&&(e.id==null?we.push(e):we.splice(fu(e.id),0,e),Uo())}function Uo(){!In&&!ga&&(ga=!0,ti=Bo.then(Yo))}function cu(e){const t=we.indexOf(e);t>Xe&&we.splice(t,1)}function uu(e){B(e)?Jt.push(...e):(!rt||!rt.includes(e,e.allowRecurse?Rt+1:Rt))&&Jt.push(e),Uo()}function Ji(e,t=In?Xe+1:0){for(;t<we.length;t++){const n=we[t];n&&n.pre&&(we.splice(t,1),t--,n())}}function Ko(e){if(Jt.length){const t=[...new Set(Jt)];if(Jt.length=0,rt){rt.push(...t);return}for(rt=t,rt.sort((n,r)=>Nn(n)-Nn(r)),Rt=0;Rt<rt.length;Rt++)rt[Rt]();rt=null,Rt=0}}const Nn=e=>e.id==null?1/0:e.id,du=(e,t)=>{const n=Nn(e)-Nn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Yo(e){ga=!1,In=!0,we.sort(du);const t=Ke;try{for(Xe=0;Xe<we.length;Xe++){const n=we[Xe];n&&n.active!==!1&&_t(n,null,14)}}finally{Xe=0,we.length=0,Ko(),In=!1,ti=null,(we.length||Jt.length)&&Yo()}}function mu(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||fe;let a=n;const i=t.startsWith("update:"),s=i&&t.slice(7);if(s&&s in r){const c=`${s==="modelValue"?"model":s}Modifiers`,{number:d,trim:p}=r[c]||fe;p&&(a=n.map(g=>he(g)?g.trim():g)),d&&(a=n.map(yc))}let o,l=r[o=zr(t)]||r[o=zr(Ze(t))];!l&&i&&(l=r[o=zr(ln(t))]),l&&Le(l,e,6,a);const f=r[o+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,Le(f,e,6,a)}}function Wo(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let s={},o=!1;if(!Y(e)){const l=f=>{const c=Wo(f,t,!0);c&&(o=!0,pe(s,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!o?(oe(e)&&r.set(e,null),null):(B(i)?i.forEach(l=>s[l]=null):pe(s,i),oe(e)&&r.set(e,s),s)}function Tr(e,t){return!e||!kr(t)?!1:(t=t.slice(2).replace(/Once$/,""),q(e,t[0].toLowerCase()+t.slice(1))||q(e,ln(t))||q(e,t))}let ke=null,Vo=null;function dr(e){const t=ke;return ke=e,Vo=e&&e.type.__scopeId||null,t}function Zt(e,t=ke,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&cs(-1);const i=dr(t);let s;try{s=e(...a)}finally{dr(i),r._d&&cs(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function Hr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[s],slots:o,attrs:l,emit:f,render:c,renderCache:d,data:p,setupState:g,ctx:C,inheritAttrs:A}=e;let L,b;const x=dr(e);try{if(n.shapeFlag&4){const O=a||r;L=Ge(c.call(O,O,d,i,g,p,C)),b=l}else{const O=t;L=Ge(O.length>1?O(i,{attrs:l,slots:o,emit:f}):O(i,null)),b=t.props?l:pu(l)}}catch(O){kn.length=0,Sr(O,e,1),L=ue($e)}let I=L;if(b&&A!==!1){const O=Object.keys(b),{shapeFlag:H}=I;O.length&&H&7&&(s&&O.some(Ua)&&(b=hu(b,s)),I=Ct(I,b))}return n.dirs&&(I=Ct(I),I.dirs=I.dirs?I.dirs.concat(n.dirs):n.dirs),n.transition&&(I.transition=n.transition),L=I,dr(x),L}const pu=e=>{let t;for(const n in e)(n==="class"||n==="style"||kr(n))&&((t||(t={}))[n]=e[n]);return t},hu=(e,t)=>{const n={};for(const r in e)(!Ua(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function gu(e,t,n){const{props:r,children:a,component:i}=e,{props:s,children:o,patchFlag:l}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Zi(r,s,f):!!s;if(l&8){const c=t.dynamicProps;for(let d=0;d<c.length;d++){const p=c[d];if(s[p]!==r[p]&&!Tr(f,p))return!0}}}else return(a||o)&&(!o||!o.$stable)?!0:r===s?!1:r?s?Zi(r,s,f):!0:!!s;return!1}function Zi(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Tr(n,i))return!0}return!1}function vu({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const bu=e=>e.__isSuspense;function yu(e,t){t&&t.pendingBranch?B(e)?t.effects.push(...e):t.effects.push(e):uu(e)}const er={};function xn(e,t,n){return qo(e,t,n)}function qo(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:s}=fe){var o;const l=Tc()===((o=be)==null?void 0:o.scope)?be:null;let f,c=!1,d=!1;if(xe(e)?(f=()=>e.value,c=ur(e)):Qt(e)?(f=()=>e,r=!0):B(e)?(d=!0,c=e.some(O=>Qt(O)||ur(O)),f=()=>e.map(O=>{if(xe(O))return O.value;if(Qt(O))return Vt(O);if(Y(O))return _t(O,l,2)})):Y(e)?t?f=()=>_t(e,l,2):f=()=>{if(!(l&&l.isUnmounted))return p&&p(),Le(e,l,3,[g])}:f=Ke,t&&r){const O=f;f=()=>Vt(O())}let p,g=O=>{p=x.onStop=()=>{_t(O,l,4)}},C;if(Fn)if(g=Ke,t?n&&Le(t,l,3,[f(),d?[]:void 0,g]):f(),a==="sync"){const O=hd();C=O.__watcherHandles||(O.__watcherHandles=[])}else return Ke;let A=d?new Array(e.length).fill(er):er;const L=()=>{if(x.active)if(t){const O=x.run();(r||c||(d?O.some((H,X)=>Tn(H,A[X])):Tn(O,A)))&&(p&&p(),Le(t,l,3,[O,A===er?void 0:d&&A[0]===er?[]:A,g]),A=O)}else x.run()};L.allowRecurse=!!t;let b;a==="sync"?b=L:a==="post"?b=()=>Se(L,l&&l.suspense):(L.pre=!0,l&&(L.id=l.uid),b=()=>ni(L));const x=new Ga(f,b);t?n?L():A=x.run():a==="post"?Se(x.run.bind(x),l&&l.suspense):x.run();const I=()=>{x.stop(),l&&l.scope&&Ka(l.scope.effects,x)};return C&&C.push(I),I}function xu(e,t,n){const r=this.proxy,a=he(e)?e.includes(".")?Go(r,e):()=>r[e]:e.bind(r,r);let i;Y(t)?i=t:(i=t.handler,n=t);const s=be;rn(this);const o=qo(a,i.bind(r),n);return s?rn(s):jt(),o}function Go(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function Vt(e,t){if(!oe(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),xe(e))Vt(e.value,t);else if(B(e))for(let n=0;n<e.length;n++)Vt(e[n],t);else if(vo(e)||Xt(e))e.forEach(n=>{Vt(n,t)});else if(xo(e))for(const n in e)Vt(e[n],t);return e}function Ot(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let s=0;s<a.length;s++){const o=a[s];i&&(o.oldValue=i[s].value);let l=o.dir[r];l&&(fn(),Le(l,n,8,[e.el,o,e,t]),cn())}}function _u(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ai(()=>{e.isMounted=!0}),tl(()=>{e.isUnmounting=!0}),e}const Fe=[Function,Array],Xo={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Fe,onEnter:Fe,onAfterEnter:Fe,onEnterCancelled:Fe,onBeforeLeave:Fe,onLeave:Fe,onAfterLeave:Fe,onLeaveCancelled:Fe,onBeforeAppear:Fe,onAppear:Fe,onAfterAppear:Fe,onAppearCancelled:Fe},wu={name:"BaseTransition",props:Xo,setup(e,{slots:t}){const n=od(),r=_u();let a;return()=>{const i=t.default&&Jo(t.default(),!0);if(!i||!i.length)return;let s=i[0];if(i.length>1){for(const A of i)if(A.type!==$e){s=A;break}}const o=G(e),{mode:l}=o;if(r.isLeaving)return Ur(s);const f=es(s);if(!f)return Ur(s);const c=va(f,o,r,n);ba(f,c);const d=n.subTree,p=d&&es(d);let g=!1;const{getTransitionKey:C}=f.type;if(C){const A=C();a===void 0?a=A:A!==a&&(a=A,g=!0)}if(p&&p.type!==$e&&(!It(f,p)||g)){const A=va(p,o,r,n);if(ba(p,A),l==="out-in")return r.isLeaving=!0,A.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},Ur(s);l==="in-out"&&f.type!==$e&&(A.delayLeave=(L,b,x)=>{const I=Qo(r,p);I[String(p.key)]=p,L._leaveCb=()=>{b(),L._leaveCb=void 0,delete c.delayedLeave},c.delayedLeave=x})}return s}}},ku=wu;function Qo(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function va(e,t,n,r){const{appear:a,mode:i,persisted:s=!1,onBeforeEnter:o,onEnter:l,onAfterEnter:f,onEnterCancelled:c,onBeforeLeave:d,onLeave:p,onAfterLeave:g,onLeaveCancelled:C,onBeforeAppear:A,onAppear:L,onAfterAppear:b,onAppearCancelled:x}=t,I=String(e.key),O=Qo(n,e),H=(U,V)=>{U&&Le(U,r,9,V)},X=(U,V)=>{const Q=V[1];H(U,V),B(U)?U.every(ge=>ge.length<=1)&&Q():U.length<=1&&Q()},te={mode:i,persisted:s,beforeEnter(U){let V=o;if(!n.isMounted)if(a)V=A||o;else return;U._leaveCb&&U._leaveCb(!0);const Q=O[I];Q&&It(e,Q)&&Q.el._leaveCb&&Q.el._leaveCb(),H(V,[U])},enter(U){let V=l,Q=f,ge=c;if(!n.isMounted)if(a)V=L||l,Q=b||f,ge=x||c;else return;let $=!1;const ee=U._enterCb=Ee=>{$||($=!0,Ee?H(ge,[U]):H(Q,[U]),te.delayedLeave&&te.delayedLeave(),U._enterCb=void 0)};V?X(V,[U,ee]):ee()},leave(U,V){const Q=String(e.key);if(U._enterCb&&U._enterCb(!0),n.isUnmounting)return V();H(d,[U]);let ge=!1;const $=U._leaveCb=ee=>{ge||(ge=!0,V(),ee?H(C,[U]):H(g,[U]),U._leaveCb=void 0,O[Q]===e&&delete O[Q])};O[Q]=e,p?X(p,[U,$]):$()},clone(U){return va(U,t,n,r)}};return te}function Ur(e){if(Rr(e))return e=Ct(e),e.children=null,e}function es(e){return Rr(e)?e.children?e.children[0]:void 0:e}function ba(e,t){e.shapeFlag&6&&e.component?ba(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Jo(e,t=!1,n){let r=[],a=0;for(let i=0;i<e.length;i++){let s=e[i];const o=n==null?s.key:String(n)+String(s.key!=null?s.key:i);s.type===Ie?(s.patchFlag&128&&a++,r=r.concat(Jo(s.children,t,o))):(t||s.type!==$e)&&r.push(o!=null?Ct(s,{key:o}):s)}if(a>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function ri(e,t){return Y(e)?(()=>pe({name:e.name},t,{setup:e}))():e}const _n=e=>!!e.type.__asyncLoader,Rr=e=>e.type.__isKeepAlive;function Eu(e,t){Zo(e,"a",t)}function Au(e,t){Zo(e,"da",t)}function Zo(e,t,n=be){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Ir(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Rr(a.parent.vnode)&&Cu(r,t,n,a),a=a.parent}}function Cu(e,t,n,r){const a=Ir(t,e,r,!0);nl(()=>{Ka(r[t],a)},n)}function Ir(e,t,n=be,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...s)=>{if(n.isUnmounted)return;fn(),rn(n);const o=Le(t,n,e,s);return jt(),cn(),o});return r?a.unshift(i):a.push(i),i}}const ut=e=>(t,n=be)=>(!Fn||e==="sp")&&Ir(e,(...r)=>t(...r),n),Ou=ut("bm"),ai=ut("m"),Pu=ut("bu"),el=ut("u"),tl=ut("bum"),nl=ut("um"),Su=ut("sp"),Tu=ut("rtg"),Ru=ut("rtc");function Iu(e,t=be){Ir("ec",e,t)}const rl="components";function al(e,t){return Mu(rl,e,!0,t)||e}const Nu=Symbol.for("v-ndc");function Mu(e,t,n=!0,r=!1){const a=ke||be;if(a){const i=a.type;if(e===rl){const o=dd(i,!1);if(o&&(o===t||o===Ze(t)||o===Cr(Ze(t))))return i}const s=ts(a[e]||i[e],t)||ts(a.appContext[e],t);return!s&&r?i:s}}function ts(e,t){return e&&(e[t]||e[Ze(t)]||e[Cr(Ze(t))])}function Fu(e,t,n,r){let a;const i=n&&n[r];if(B(e)||he(e)){a=new Array(e.length);for(let s=0,o=e.length;s<o;s++)a[s]=t(e[s],s,void 0,i&&i[s])}else if(typeof e=="number"){a=new Array(e);for(let s=0;s<e;s++)a[s]=t(s+1,s,void 0,i&&i[s])}else if(oe(e))if(e[Symbol.iterator])a=Array.from(e,(s,o)=>t(s,o,void 0,i&&i[o]));else{const s=Object.keys(e);a=new Array(s.length);for(let o=0,l=s.length;o<l;o++){const f=s[o];a[o]=t(e[f],f,o,i&&i[o])}}else a=[];return n&&(n[r]=a),a}function Lu(e,t,n={},r,a){if(ke.isCE||ke.parent&&_n(ke.parent)&&ke.parent.isCE)return t!=="default"&&(n.name=t),ue("slot",n,r&&r());let i=e[t];i&&i._c&&(i._d=!1),Ne();const s=i&&il(i(n)),o=oi(Ie,{key:n.key||s&&s.key||`_${t}`},s||(r?r():[]),s&&e._===1?64:-2);return!a&&o.scopeId&&(o.slotScopeIds=[o.scopeId+"-s"]),i&&i._c&&(i._d=!0),o}function il(e){return e.some(t=>hr(t)?!(t.type===$e||t.type===Ie&&!il(t.children)):!0)?e:null}const ya=e=>e?gl(e)?ci(e)||e.proxy:ya(e.parent):null,wn=pe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ya(e.parent),$root:e=>ya(e.root),$emit:e=>e.emit,$options:e=>ii(e),$forceUpdate:e=>e.f||(e.f=()=>ni(e.update)),$nextTick:e=>e.n||(e.n=Ho.bind(e.proxy)),$watch:e=>xu.bind(e)}),Kr=(e,t)=>e!==fe&&!e.__isScriptSetup&&q(e,t),$u={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:s,type:o,appContext:l}=e;let f;if(t[0]!=="$"){const g=s[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(Kr(r,t))return s[t]=1,r[t];if(a!==fe&&q(a,t))return s[t]=2,a[t];if((f=e.propsOptions[0])&&q(f,t))return s[t]=3,i[t];if(n!==fe&&q(n,t))return s[t]=4,n[t];xa&&(s[t]=0)}}const c=wn[t];let d,p;if(c)return t==="$attrs"&&Te(e,"get",t),c(e);if((d=o.__cssModules)&&(d=d[t]))return d;if(n!==fe&&q(n,t))return s[t]=4,n[t];if(p=l.config.globalProperties,q(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return Kr(a,t)?(a[t]=n,!0):r!==fe&&q(r,t)?(r[t]=n,!0):q(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},s){let o;return!!n[s]||e!==fe&&q(e,s)||Kr(t,s)||(o=i[0])&&q(o,s)||q(r,s)||q(wn,s)||q(a.config.globalProperties,s)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:q(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function ns(e){return B(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let xa=!0;function ju(e){const t=ii(e),n=e.proxy,r=e.ctx;xa=!1,t.beforeCreate&&rs(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:s,watch:o,provide:l,inject:f,created:c,beforeMount:d,mounted:p,beforeUpdate:g,updated:C,activated:A,deactivated:L,beforeDestroy:b,beforeUnmount:x,destroyed:I,unmounted:O,render:H,renderTracked:X,renderTriggered:te,errorCaptured:U,serverPrefetch:V,expose:Q,inheritAttrs:ge,components:$,directives:ee,filters:Ee}=t;if(f&&Du(f,r,null),s)for(const re in s){const J=s[re];Y(J)&&(r[re]=J.bind(n))}if(a){const re=a.call(n,n);oe(re)&&(e.data=Pr(re))}if(xa=!0,i)for(const re in i){const J=i[re],tt=Y(J)?J.bind(n,n):Y(J.get)?J.get.bind(n,n):Ke,dt=!Y(J)&&Y(J.set)?J.set.bind(n):Ke,We=ye({get:tt,set:dt});Object.defineProperty(r,re,{enumerable:!0,configurable:!0,get:()=>We.value,set:Oe=>We.value=Oe})}if(o)for(const re in o)sl(o[re],r,n,re);if(l){const re=Y(l)?l.call(n):l;Reflect.ownKeys(re).forEach(J=>{ar(J,re[J])})}c&&rs(c,e,"c");function de(re,J){B(J)?J.forEach(tt=>re(tt.bind(n))):J&&re(J.bind(n))}if(de(Ou,d),de(ai,p),de(Pu,g),de(el,C),de(Eu,A),de(Au,L),de(Iu,U),de(Ru,X),de(Tu,te),de(tl,x),de(nl,O),de(Su,V),B(Q))if(Q.length){const re=e.exposed||(e.exposed={});Q.forEach(J=>{Object.defineProperty(re,J,{get:()=>n[J],set:tt=>n[J]=tt})})}else e.exposed||(e.exposed={});H&&e.render===Ke&&(e.render=H),ge!=null&&(e.inheritAttrs=ge),$&&(e.components=$),ee&&(e.directives=ee)}function Du(e,t,n=Ke){B(e)&&(e=_a(e));for(const r in e){const a=e[r];let i;oe(a)?"default"in a?i=it(a.from||r,a.default,!0):i=it(a.from||r):i=it(a),xe(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:s=>i.value=s}):t[r]=i}}function rs(e,t,n){Le(B(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function sl(e,t,n,r){const a=r.includes(".")?Go(n,r):()=>n[r];if(he(e)){const i=t[e];Y(i)&&xn(a,i)}else if(Y(e))xn(a,e.bind(n));else if(oe(e))if(B(e))e.forEach(i=>sl(i,t,n,r));else{const i=Y(e.handler)?e.handler.bind(n):t[e.handler];Y(i)&&xn(a,i,e)}}function ii(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:s}}=e.appContext,o=i.get(t);let l;return o?l=o:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(f=>mr(l,f,s,!0)),mr(l,t,s)),oe(t)&&i.set(t,l),l}function mr(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&mr(e,i,n,!0),a&&a.forEach(s=>mr(e,s,n,!0));for(const s in t)if(!(r&&s==="expose")){const o=zu[s]||n&&n[s];e[s]=o?o(e[s],t[s]):t[s]}return e}const zu={data:as,props:is,emits:is,methods:vn,computed:vn,beforeCreate:Ae,created:Ae,beforeMount:Ae,mounted:Ae,beforeUpdate:Ae,updated:Ae,beforeDestroy:Ae,beforeUnmount:Ae,destroyed:Ae,unmounted:Ae,activated:Ae,deactivated:Ae,errorCaptured:Ae,serverPrefetch:Ae,components:vn,directives:vn,watch:Hu,provide:as,inject:Bu};function as(e,t){return t?e?function(){return pe(Y(e)?e.call(this,this):e,Y(t)?t.call(this,this):t)}:t:e}function Bu(e,t){return vn(_a(e),_a(t))}function _a(e){if(B(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ae(e,t){return e?[...new Set([].concat(e,t))]:t}function vn(e,t){return e?pe(Object.create(null),e,t):t}function is(e,t){return e?B(e)&&B(t)?[...new Set([...e,...t])]:pe(Object.create(null),ns(e),ns(t??{})):t}function Hu(e,t){if(!e)return t;if(!t)return e;const n=pe(Object.create(null),e);for(const r in t)n[r]=Ae(e[r],t[r]);return n}function ol(){return{app:null,config:{isNativeTag:mc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Uu=0;function Ku(e,t){return function(r,a=null){Y(r)||(r=pe({},r)),a!=null&&!oe(a)&&(a=null);const i=ol(),s=new Set;let o=!1;const l=i.app={_uid:Uu++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:gd,get config(){return i.config},set config(f){},use(f,...c){return s.has(f)||(f&&Y(f.install)?(s.add(f),f.install(l,...c)):Y(f)&&(s.add(f),f(l,...c))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,c){return c?(i.components[f]=c,l):i.components[f]},directive(f,c){return c?(i.directives[f]=c,l):i.directives[f]},mount(f,c,d){if(!o){const p=ue(r,a);return p.appContext=i,c&&t?t(p,f):e(p,f,d),o=!0,l._container=f,f.__vue_app__=l,ci(p.component)||p.component.proxy}},unmount(){o&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,c){return i.provides[f]=c,l},runWithContext(f){pr=l;try{return f()}finally{pr=null}}};return l}}let pr=null;function ar(e,t){if(be){let n=be.provides;const r=be.parent&&be.parent.provides;r===n&&(n=be.provides=Object.create(r)),n[e]=t}}function it(e,t,n=!1){const r=be||ke;if(r||pr){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:pr._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&Y(t)?t.call(r&&r.proxy):t}}function Yu(e,t,n,r=!1){const a={},i={};cr(i,Mr,1),e.propsDefaults=Object.create(null),ll(e,t,a,i);for(const s in e.propsOptions[0])s in a||(a[s]=void 0);n?e.props=r?a:No(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Wu(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:s}}=e,o=G(a),[l]=e.propsOptions;let f=!1;if((r||s>0)&&!(s&16)){if(s&8){const c=e.vnode.dynamicProps;for(let d=0;d<c.length;d++){let p=c[d];if(Tr(e.emitsOptions,p))continue;const g=t[p];if(l)if(q(i,p))g!==i[p]&&(i[p]=g,f=!0);else{const C=Ze(p);a[C]=wa(l,o,C,g,e,!1)}else g!==i[p]&&(i[p]=g,f=!0)}}}else{ll(e,t,a,i)&&(f=!0);let c;for(const d in o)(!t||!q(t,d)&&((c=ln(d))===d||!q(t,c)))&&(l?n&&(n[d]!==void 0||n[c]!==void 0)&&(a[d]=wa(l,o,d,void 0,e,!0)):delete a[d]);if(i!==o)for(const d in i)(!t||!q(t,d))&&(delete i[d],f=!0)}f&&ft(e,"set","$attrs")}function ll(e,t,n,r){const[a,i]=e.propsOptions;let s=!1,o;if(t)for(let l in t){if(rr(l))continue;const f=t[l];let c;a&&q(a,c=Ze(l))?!i||!i.includes(c)?n[c]=f:(o||(o={}))[c]=f:Tr(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,s=!0)}if(i){const l=G(n),f=o||fe;for(let c=0;c<i.length;c++){const d=i[c];n[d]=wa(a,l,d,f[d],e,!q(f,d))}}return s}function wa(e,t,n,r,a,i){const s=e[n];if(s!=null){const o=q(s,"default");if(o&&r===void 0){const l=s.default;if(s.type!==Function&&!s.skipFactory&&Y(l)){const{propsDefaults:f}=a;n in f?r=f[n]:(rn(a),r=f[n]=l.call(null,t),jt())}else r=l}s[0]&&(i&&!o?r=!1:s[1]&&(r===""||r===ln(n))&&(r=!0))}return r}function fl(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,s={},o=[];let l=!1;if(!Y(e)){const c=d=>{l=!0;const[p,g]=fl(d,t,!0);pe(s,p),g&&o.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!l)return oe(e)&&r.set(e,Gt),Gt;if(B(i))for(let c=0;c<i.length;c++){const d=Ze(i[c]);ss(d)&&(s[d]=fe)}else if(i)for(const c in i){const d=Ze(c);if(ss(d)){const p=i[c],g=s[d]=B(p)||Y(p)?{type:p}:pe({},p);if(g){const C=fs(Boolean,g.type),A=fs(String,g.type);g[0]=C>-1,g[1]=A<0||C<A,(C>-1||q(g,"default"))&&o.push(d)}}}const f=[s,o];return oe(e)&&r.set(e,f),f}function ss(e){return e[0]!=="$"}function os(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function ls(e,t){return os(e)===os(t)}function fs(e,t){return B(t)?t.findIndex(n=>ls(n,e)):Y(t)&&ls(t,e)?0:-1}const cl=e=>e[0]==="_"||e==="$stable",si=e=>B(e)?e.map(Ge):[Ge(e)],Vu=(e,t,n)=>{if(t._n)return t;const r=Zt((...a)=>si(t(...a)),n);return r._c=!1,r},ul=(e,t,n)=>{const r=e._ctx;for(const a in e){if(cl(a))continue;const i=e[a];if(Y(i))t[a]=Vu(a,i,r);else if(i!=null){const s=si(i);t[a]=()=>s}}},dl=(e,t)=>{const n=si(t);e.slots.default=()=>n},qu=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=G(t),cr(t,"_",n)):ul(t,e.slots={})}else e.slots={},t&&dl(e,t);cr(e.slots,Mr,1)},Gu=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,s=fe;if(r.shapeFlag&32){const o=t._;o?n&&o===1?i=!1:(pe(a,t),!n&&o===1&&delete a._):(i=!t.$stable,ul(t,a)),s=t}else t&&(dl(e,t),s={default:1});if(i)for(const o in a)!cl(o)&&!(o in s)&&delete a[o]};function ka(e,t,n,r,a=!1){if(B(e)){e.forEach((p,g)=>ka(p,t&&(B(t)?t[g]:t),n,r,a));return}if(_n(r)&&!a)return;const i=r.shapeFlag&4?ci(r.component)||r.component.proxy:r.el,s=a?null:i,{i:o,r:l}=e,f=t&&t.r,c=o.refs===fe?o.refs={}:o.refs,d=o.setupState;if(f!=null&&f!==l&&(he(f)?(c[f]=null,q(d,f)&&(d[f]=null)):xe(f)&&(f.value=null)),Y(l))_t(l,o,12,[s,c]);else{const p=he(l),g=xe(l);if(p||g){const C=()=>{if(e.f){const A=p?q(d,l)?d[l]:c[l]:l.value;a?B(A)&&Ka(A,i):B(A)?A.includes(i)||A.push(i):p?(c[l]=[i],q(d,l)&&(d[l]=c[l])):(l.value=[i],e.k&&(c[e.k]=l.value))}else p?(c[l]=s,q(d,l)&&(d[l]=s)):g&&(l.value=s,e.k&&(c[e.k]=s))};s?(C.id=-1,Se(C,n)):C()}}}const Se=yu;function Xu(e){return Qu(e)}function Qu(e,t){const n=ua();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:s,createText:o,createComment:l,setText:f,setElementText:c,parentNode:d,nextSibling:p,setScopeId:g=Ke,insertStaticContent:C}=e,A=(u,m,h,v=null,_=null,w=null,T=!1,E=null,P=!!m.dynamicChildren)=>{if(u===m)return;u&&!It(u,m)&&(v=y(u),Oe(u,_,w,!0),u=null),m.patchFlag===-2&&(P=!1,m.dynamicChildren=null);const{type:k,ref:D,shapeFlag:M}=m;switch(k){case Nr:L(u,m,h,v);break;case $e:b(u,m,h,v);break;case Yr:u==null&&x(m,h,v,T);break;case Ie:$(u,m,h,v,_,w,T,E,P);break;default:M&1?H(u,m,h,v,_,w,T,E,P):M&6?ee(u,m,h,v,_,w,T,E,P):(M&64||M&128)&&k.process(u,m,h,v,_,w,T,E,P,S)}D!=null&&_&&ka(D,u&&u.ref,w,m||u,!m)},L=(u,m,h,v)=>{if(u==null)r(m.el=o(m.children),h,v);else{const _=m.el=u.el;m.children!==u.children&&f(_,m.children)}},b=(u,m,h,v)=>{u==null?r(m.el=l(m.children||""),h,v):m.el=u.el},x=(u,m,h,v)=>{[u.el,u.anchor]=C(u.children,m,h,v,u.el,u.anchor)},I=({el:u,anchor:m},h,v)=>{let _;for(;u&&u!==m;)_=p(u),r(u,h,v),u=_;r(m,h,v)},O=({el:u,anchor:m})=>{let h;for(;u&&u!==m;)h=p(u),a(u),u=h;a(m)},H=(u,m,h,v,_,w,T,E,P)=>{T=T||m.type==="svg",u==null?X(m,h,v,_,w,T,E,P):V(u,m,_,w,T,E,P)},X=(u,m,h,v,_,w,T,E)=>{let P,k;const{type:D,props:M,shapeFlag:z,transition:K,dirs:W}=u;if(P=u.el=s(u.type,w,M&&M.is,M),z&8?c(P,u.children):z&16&&U(u.children,P,null,v,_,w&&D!=="foreignObject",T,E),W&&Ot(u,null,v,"created"),te(P,u,u.scopeId,T,v),M){for(const ne in M)ne!=="value"&&!rr(ne)&&i(P,ne,null,M[ne],w,u.children,v,_,_e);"value"in M&&i(P,"value",null,M.value),(k=M.onVnodeBeforeMount)&&qe(k,v,u)}W&&Ot(u,null,v,"beforeMount");const ae=(!_||_&&!_.pendingBranch)&&K&&!K.persisted;ae&&K.beforeEnter(P),r(P,m,h),((k=M&&M.onVnodeMounted)||ae||W)&&Se(()=>{k&&qe(k,v,u),ae&&K.enter(P),W&&Ot(u,null,v,"mounted")},_)},te=(u,m,h,v,_)=>{if(h&&g(u,h),v)for(let w=0;w<v.length;w++)g(u,v[w]);if(_){let w=_.subTree;if(m===w){const T=_.vnode;te(u,T,T.scopeId,T.slotScopeIds,_.parent)}}},U=(u,m,h,v,_,w,T,E,P=0)=>{for(let k=P;k<u.length;k++){const D=u[k]=E?bt(u[k]):Ge(u[k]);A(null,D,m,h,v,_,w,T,E)}},V=(u,m,h,v,_,w,T)=>{const E=m.el=u.el;let{patchFlag:P,dynamicChildren:k,dirs:D}=m;P|=u.patchFlag&16;const M=u.props||fe,z=m.props||fe;let K;h&&Pt(h,!1),(K=z.onVnodeBeforeUpdate)&&qe(K,h,m,u),D&&Ot(m,u,h,"beforeUpdate"),h&&Pt(h,!0);const W=_&&m.type!=="foreignObject";if(k?Q(u.dynamicChildren,k,E,h,v,W,w):T||J(u,m,E,null,h,v,W,w,!1),P>0){if(P&16)ge(E,m,M,z,h,v,_);else if(P&2&&M.class!==z.class&&i(E,"class",null,z.class,_),P&4&&i(E,"style",M.style,z.style,_),P&8){const ae=m.dynamicProps;for(let ne=0;ne<ae.length;ne++){const me=ae[ne],je=M[me],Ut=z[me];(Ut!==je||me==="value")&&i(E,me,je,Ut,_,u.children,h,v,_e)}}P&1&&u.children!==m.children&&c(E,m.children)}else!T&&k==null&&ge(E,m,M,z,h,v,_);((K=z.onVnodeUpdated)||D)&&Se(()=>{K&&qe(K,h,m,u),D&&Ot(m,u,h,"updated")},v)},Q=(u,m,h,v,_,w,T)=>{for(let E=0;E<m.length;E++){const P=u[E],k=m[E],D=P.el&&(P.type===Ie||!It(P,k)||P.shapeFlag&70)?d(P.el):h;A(P,k,D,null,v,_,w,T,!0)}},ge=(u,m,h,v,_,w,T)=>{if(h!==v){if(h!==fe)for(const E in h)!rr(E)&&!(E in v)&&i(u,E,h[E],null,T,m.children,_,w,_e);for(const E in v){if(rr(E))continue;const P=v[E],k=h[E];P!==k&&E!=="value"&&i(u,E,k,P,T,m.children,_,w,_e)}"value"in v&&i(u,"value",h.value,v.value)}},$=(u,m,h,v,_,w,T,E,P)=>{const k=m.el=u?u.el:o(""),D=m.anchor=u?u.anchor:o("");let{patchFlag:M,dynamicChildren:z,slotScopeIds:K}=m;K&&(E=E?E.concat(K):K),u==null?(r(k,h,v),r(D,h,v),U(m.children,h,D,_,w,T,E,P)):M>0&&M&64&&z&&u.dynamicChildren?(Q(u.dynamicChildren,z,h,_,w,T,E),(m.key!=null||_&&m===_.subTree)&&ml(u,m,!0)):J(u,m,h,D,_,w,T,E,P)},ee=(u,m,h,v,_,w,T,E,P)=>{m.slotScopeIds=E,u==null?m.shapeFlag&512?_.ctx.activate(m,h,v,T,P):Ee(m,h,v,_,w,T,P):et(u,m,P)},Ee=(u,m,h,v,_,w,T)=>{const E=u.component=sd(u,v,_);if(Rr(u)&&(E.ctx.renderer=S),ld(E),E.asyncDep){if(_&&_.registerDep(E,de),!u.el){const P=E.subTree=ue($e);b(null,P,m,h)}return}de(E,u,m,h,_,w,T)},et=(u,m,h)=>{const v=m.component=u.component;if(gu(u,m,h))if(v.asyncDep&&!v.asyncResolved){re(v,m,h);return}else v.next=m,cu(v.update),v.update();else m.el=u.el,v.vnode=m},de=(u,m,h,v,_,w,T)=>{const E=()=>{if(u.isMounted){let{next:D,bu:M,u:z,parent:K,vnode:W}=u,ae=D,ne;Pt(u,!1),D?(D.el=W.el,re(u,D,T)):D=W,M&&Br(M),(ne=D.props&&D.props.onVnodeBeforeUpdate)&&qe(ne,K,D,W),Pt(u,!0);const me=Hr(u),je=u.subTree;u.subTree=me,A(je,me,d(je.el),y(je),u,_,w),D.el=me.el,ae===null&&vu(u,me.el),z&&Se(z,_),(ne=D.props&&D.props.onVnodeUpdated)&&Se(()=>qe(ne,K,D,W),_)}else{let D;const{el:M,props:z}=m,{bm:K,m:W,parent:ae}=u,ne=_n(m);if(Pt(u,!1),K&&Br(K),!ne&&(D=z&&z.onVnodeBeforeMount)&&qe(D,ae,m),Pt(u,!0),M&&Z){const me=()=>{u.subTree=Hr(u),Z(M,u.subTree,u,_,null)};ne?m.type.__asyncLoader().then(()=>!u.isUnmounted&&me()):me()}else{const me=u.subTree=Hr(u);A(null,me,h,v,u,_,w),m.el=me.el}if(W&&Se(W,_),!ne&&(D=z&&z.onVnodeMounted)){const me=m;Se(()=>qe(D,ae,me),_)}(m.shapeFlag&256||ae&&_n(ae.vnode)&&ae.vnode.shapeFlag&256)&&u.a&&Se(u.a,_),u.isMounted=!0,m=h=v=null}},P=u.effect=new Ga(E,()=>ni(k),u.scope),k=u.update=()=>P.run();k.id=u.uid,Pt(u,!0),k()},re=(u,m,h)=>{m.component=u;const v=u.vnode.props;u.vnode=m,u.next=null,Wu(u,m.props,v,h),Gu(u,m.children,h),fn(),Ji(),cn()},J=(u,m,h,v,_,w,T,E,P=!1)=>{const k=u&&u.children,D=u?u.shapeFlag:0,M=m.children,{patchFlag:z,shapeFlag:K}=m;if(z>0){if(z&128){dt(k,M,h,v,_,w,T,E,P);return}else if(z&256){tt(k,M,h,v,_,w,T,E,P);return}}K&8?(D&16&&_e(k,_,w),M!==k&&c(h,M)):D&16?K&16?dt(k,M,h,v,_,w,T,E,P):_e(k,_,w,!0):(D&8&&c(h,""),K&16&&U(M,h,v,_,w,T,E,P))},tt=(u,m,h,v,_,w,T,E,P)=>{u=u||Gt,m=m||Gt;const k=u.length,D=m.length,M=Math.min(k,D);let z;for(z=0;z<M;z++){const K=m[z]=P?bt(m[z]):Ge(m[z]);A(u[z],K,h,null,_,w,T,E,P)}k>D?_e(u,_,w,!0,!1,M):U(m,h,v,_,w,T,E,P,M)},dt=(u,m,h,v,_,w,T,E,P)=>{let k=0;const D=m.length;let M=u.length-1,z=D-1;for(;k<=M&&k<=z;){const K=u[k],W=m[k]=P?bt(m[k]):Ge(m[k]);if(It(K,W))A(K,W,h,null,_,w,T,E,P);else break;k++}for(;k<=M&&k<=z;){const K=u[M],W=m[z]=P?bt(m[z]):Ge(m[z]);if(It(K,W))A(K,W,h,null,_,w,T,E,P);else break;M--,z--}if(k>M){if(k<=z){const K=z+1,W=K<D?m[K].el:v;for(;k<=z;)A(null,m[k]=P?bt(m[k]):Ge(m[k]),h,W,_,w,T,E,P),k++}}else if(k>z)for(;k<=M;)Oe(u[k],_,w,!0),k++;else{const K=k,W=k,ae=new Map;for(k=W;k<=z;k++){const Re=m[k]=P?bt(m[k]):Ge(m[k]);Re.key!=null&&ae.set(Re.key,k)}let ne,me=0;const je=z-W+1;let Ut=!1,gi=0;const un=new Array(je);for(k=0;k<je;k++)un[k]=0;for(k=K;k<=M;k++){const Re=u[k];if(me>=je){Oe(Re,_,w,!0);continue}let Ve;if(Re.key!=null)Ve=ae.get(Re.key);else for(ne=W;ne<=z;ne++)if(un[ne-W]===0&&It(Re,m[ne])){Ve=ne;break}Ve===void 0?Oe(Re,_,w,!0):(un[Ve-W]=k+1,Ve>=gi?gi=Ve:Ut=!0,A(Re,m[Ve],h,null,_,w,T,E,P),me++)}const vi=Ut?Ju(un):Gt;for(ne=vi.length-1,k=je-1;k>=0;k--){const Re=W+k,Ve=m[Re],bi=Re+1<D?m[Re+1].el:v;un[k]===0?A(null,Ve,h,bi,_,w,T,E,P):Ut&&(ne<0||k!==vi[ne]?We(Ve,h,bi,2):ne--)}}},We=(u,m,h,v,_=null)=>{const{el:w,type:T,transition:E,children:P,shapeFlag:k}=u;if(k&6){We(u.component.subTree,m,h,v);return}if(k&128){u.suspense.move(m,h,v);return}if(k&64){T.move(u,m,h,S);return}if(T===Ie){r(w,m,h);for(let M=0;M<P.length;M++)We(P[M],m,h,v);r(u.anchor,m,h);return}if(T===Yr){I(u,m,h);return}if(v!==2&&k&1&&E)if(v===0)E.beforeEnter(w),r(w,m,h),Se(()=>E.enter(w),_);else{const{leave:M,delayLeave:z,afterLeave:K}=E,W=()=>r(w,m,h),ae=()=>{M(w,()=>{W(),K&&K()})};z?z(w,W,ae):ae()}else r(w,m,h)},Oe=(u,m,h,v=!1,_=!1)=>{const{type:w,props:T,ref:E,children:P,dynamicChildren:k,shapeFlag:D,patchFlag:M,dirs:z}=u;if(E!=null&&ka(E,null,h,u,!0),D&256){m.ctx.deactivate(u);return}const K=D&1&&z,W=!_n(u);let ae;if(W&&(ae=T&&T.onVnodeBeforeUnmount)&&qe(ae,m,u),D&6)Dn(u.component,h,v);else{if(D&128){u.suspense.unmount(h,v);return}K&&Ot(u,null,m,"beforeUnmount"),D&64?u.type.remove(u,m,h,_,S,v):k&&(w!==Ie||M>0&&M&64)?_e(k,m,h,!1,!0):(w===Ie&&M&384||!_&&D&16)&&_e(P,m,h),v&&Bt(u)}(W&&(ae=T&&T.onVnodeUnmounted)||K)&&Se(()=>{ae&&qe(ae,m,u),K&&Ot(u,null,m,"unmounted")},h)},Bt=u=>{const{type:m,el:h,anchor:v,transition:_}=u;if(m===Ie){Ht(h,v);return}if(m===Yr){O(u);return}const w=()=>{a(h),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(u.shapeFlag&1&&_&&!_.persisted){const{leave:T,delayLeave:E}=_,P=()=>T(h,w);E?E(u.el,w,P):P()}else w()},Ht=(u,m)=>{let h;for(;u!==m;)h=p(u),a(u),u=h;a(m)},Dn=(u,m,h)=>{const{bum:v,scope:_,update:w,subTree:T,um:E}=u;v&&Br(v),_.stop(),w&&(w.active=!1,Oe(T,u,m,h)),E&&Se(E,m),Se(()=>{u.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},_e=(u,m,h,v=!1,_=!1,w=0)=>{for(let T=w;T<u.length;T++)Oe(u[T],m,h,v,_)},y=u=>u.shapeFlag&6?y(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el),N=(u,m,h)=>{u==null?m._vnode&&Oe(m._vnode,null,null,!0):A(m._vnode||null,u,m,null,null,null,h),Ji(),Ko(),m._vnode=u},S={p:A,um:Oe,m:We,r:Bt,mt:Ee,mc:U,pc:J,pbc:Q,n:y,o:e};let j,Z;return t&&([j,Z]=t(S)),{render:N,hydrate:j,createApp:Ku(N,j)}}function Pt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function ml(e,t,n=!1){const r=e.children,a=t.children;if(B(r)&&B(a))for(let i=0;i<r.length;i++){const s=r[i];let o=a[i];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=a[i]=bt(a[i]),o.el=s.el),n||ml(s,o)),o.type===Nr&&(o.el=s.el)}}function Ju(e){const t=e.slice(),n=[0];let r,a,i,s,o;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(a=n[n.length-1],e[a]<f){t[r]=a,n.push(r);continue}for(i=0,s=n.length-1;i<s;)o=i+s>>1,e[n[o]]<f?i=o+1:s=o;f<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,s=n[i-1];i-- >0;)n[i]=s,s=t[s];return n}const Zu=e=>e.__isTeleport,Ie=Symbol.for("v-fgt"),Nr=Symbol.for("v-txt"),$e=Symbol.for("v-cmt"),Yr=Symbol.for("v-stc"),kn=[];let He=null;function Ne(e=!1){kn.push(He=e?null:[])}function ed(){kn.pop(),He=kn[kn.length-1]||null}let Mn=1;function cs(e){Mn+=e}function pl(e){return e.dynamicChildren=Mn>0?He||Gt:null,ed(),Mn>0&&He&&He.push(e),e}function Je(e,t,n,r,a,i){return pl(Ue(e,t,n,r,a,i,!0))}function oi(e,t,n,r,a){return pl(ue(e,t,n,r,a,!0))}function hr(e){return e?e.__v_isVNode===!0:!1}function It(e,t){return e.type===t.type&&e.key===t.key}const Mr="__vInternal",hl=({key:e})=>e??null,ir=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?he(e)||xe(e)||Y(e)?{i:ke,r:e,k:t,f:!!n}:e:null);function Ue(e,t=null,n=null,r=0,a=null,i=e===Ie?0:1,s=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&hl(t),ref:t&&ir(t),scopeId:Vo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:ke};return o?(li(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=he(n)?8:16),Mn>0&&!s&&He&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&He.push(l),l}const ue=td;function td(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Nu)&&(e=$e),hr(e)){const o=Ct(e,t,!0);return n&&li(o,n),Mn>0&&!i&&He&&(o.shapeFlag&6?He[He.indexOf(e)]=o:He.push(o)),o.patchFlag|=-2,o}if(md(e)&&(e=e.__vccOpts),t){t=nd(t);let{class:o,style:l}=t;o&&!he(o)&&(t.class=tn(o)),oe(l)&&(Fo(l)&&!B(l)&&(l=pe({},l)),t.style=Va(l))}const s=he(e)?1:bu(e)?128:Zu(e)?64:oe(e)?4:Y(e)?2:0;return Ue(e,t,n,r,a,s,i,!0)}function nd(e){return e?Fo(e)||Mr in e?pe({},e):e:null}function Ct(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:s}=e,o=t?rd(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:o,key:o&&hl(o),ref:t&&t.ref?n&&a?B(a)?a.concat(ir(t)):[a,ir(t)]:ir(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ie?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ct(e.ssContent),ssFallback:e.ssFallback&&Ct(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function sr(e=" ",t=0){return ue(Nr,null,e,t)}function Ea(e="",t=!1){return t?(Ne(),oi($e,null,e)):ue($e,null,e)}function Ge(e){return e==null||typeof e=="boolean"?ue($e):B(e)?ue(Ie,null,e.slice()):typeof e=="object"?bt(e):ue(Nr,null,String(e))}function bt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ct(e)}function li(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(B(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),li(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Mr in t)?t._ctx=ke:a===3&&ke&&(ke.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Y(t)?(t={default:t,_ctx:ke},n=32):(t=String(t),r&64?(n=16,t=[sr(t)]):n=8);e.children=t,e.shapeFlag|=n}function rd(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=tn([t.class,r.class]));else if(a==="style")t.style=Va([t.style,r.style]);else if(kr(a)){const i=t[a],s=r[a];s&&i!==s&&!(B(i)&&i.includes(s))&&(t[a]=i?[].concat(i,s):s)}else a!==""&&(t[a]=r[a])}return t}function qe(e,t,n,r=null){Le(e,t,7,[n,r])}const ad=ol();let id=0;function sd(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||ad,i={uid:id++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Pc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:fl(r,a),emitsOptions:Wo(r,a),emit:null,emitted:null,propsDefaults:fe,inheritAttrs:r.inheritAttrs,ctx:fe,data:fe,props:fe,attrs:fe,slots:fe,refs:fe,setupState:fe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=mu.bind(null,i),e.ce&&e.ce(i),i}let be=null;const od=()=>be||ke;let fi,Kt,us="__VUE_INSTANCE_SETTERS__";(Kt=ua()[us])||(Kt=ua()[us]=[]),Kt.push(e=>be=e),fi=e=>{Kt.length>1?Kt.forEach(t=>t(e)):Kt[0](e)};const rn=e=>{fi(e),e.scope.on()},jt=()=>{be&&be.scope.off(),fi(null)};function gl(e){return e.vnode.shapeFlag&4}let Fn=!1;function ld(e,t=!1){Fn=t;const{props:n,children:r}=e.vnode,a=gl(e);Yu(e,n,a,t),qu(e,r);const i=a?fd(e,t):void 0;return Fn=!1,i}function fd(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Lo(new Proxy(e.ctx,$u));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?ud(e):null;rn(e),fn();const i=_t(r,e,0,[e.props,a]);if(cn(),jt(),bo(i)){if(i.then(jt,jt),t)return i.then(s=>{ds(e,s,t)}).catch(s=>{Sr(s,e,0)});e.asyncDep=i}else ds(e,i,t)}else vl(e,t)}function ds(e,t,n){Y(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:oe(t)&&(e.setupState=zo(t)),vl(e,n)}let ms;function vl(e,t,n){const r=e.type;if(!e.render){if(!t&&ms&&!r.render){const a=r.template||ii(e).template;if(a){const{isCustomElement:i,compilerOptions:s}=e.appContext.config,{delimiters:o,compilerOptions:l}=r,f=pe(pe({isCustomElement:i,delimiters:o},s),l);r.render=ms(a,f)}}e.render=r.render||Ke}rn(e),fn(),ju(e),cn(),jt()}function cd(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return Te(e,"get","$attrs"),t[n]}}))}function ud(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return cd(e)},slots:e.slots,emit:e.emit,expose:t}}function ci(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(zo(Lo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in wn)return wn[n](e)},has(t,n){return n in t||n in wn}}))}function dd(e,t=!0){return Y(e)?e.displayName||e.name:e.name||t&&e.__name}function md(e){return Y(e)&&"__vccOpts"in e}const ye=(e,t)=>ou(e,t,Fn);function Fr(e,t,n){const r=arguments.length;return r===2?oe(t)&&!B(t)?hr(t)?ue(e,null,[t]):ue(e,t):ue(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&hr(n)&&(n=[n]),ue(e,t,n))}const pd=Symbol.for("v-scx"),hd=()=>it(pd),gd="3.3.4",vd="http://www.w3.org/2000/svg",Nt=typeof document<"u"?document:null,ps=Nt&&Nt.createElement("template"),bd={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?Nt.createElementNS(vd,e):Nt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>Nt.createTextNode(e),createComment:e=>Nt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Nt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const s=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{ps.innerHTML=r?`<svg>${e}</svg>`:e;const o=ps.content;if(r){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function yd(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function xd(e,t,n){const r=e.style,a=he(n);if(n&&!a){if(t&&!he(t))for(const i in t)n[i]==null&&Aa(r,i,"");for(const i in n)Aa(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const hs=/\s*!important$/;function Aa(e,t,n){if(B(n))n.forEach(r=>Aa(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=_d(e,t);hs.test(n)?e.setProperty(ln(r),n.replace(hs,""),"important"):e[r]=n}}const gs=["Webkit","Moz","ms"],Wr={};function _d(e,t){const n=Wr[t];if(n)return n;let r=Ze(t);if(r!=="filter"&&r in e)return Wr[t]=r;r=Cr(r);for(let a=0;a<gs.length;a++){const i=gs[a]+r;if(i in e)return Wr[t]=i}return t}const vs="http://www.w3.org/1999/xlink";function wd(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(vs,t.slice(6,t.length)):e.setAttributeNS(vs,t,n);else{const i=Cc(t);n==null||i&&!_o(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function kd(e,t,n,r,a,i,s){if(t==="innerHTML"||t==="textContent"){r&&s(r,a,i),e[t]=n??"";return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){e._value=n;const f=o==="OPTION"?e.getAttribute("value"):e.value,c=n??"";f!==c&&(e.value=c),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const f=typeof e[t];f==="boolean"?n=_o(n):n==null&&f==="string"?(n="",l=!0):f==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function Ed(e,t,n,r){e.addEventListener(t,n,r)}function Ad(e,t,n,r){e.removeEventListener(t,n,r)}function Cd(e,t,n,r,a=null){const i=e._vei||(e._vei={}),s=i[t];if(r&&s)s.value=r;else{const[o,l]=Od(t);if(r){const f=i[t]=Td(r,a);Ed(e,o,f,l)}else s&&(Ad(e,o,s,l),i[t]=void 0)}}const bs=/(?:Once|Passive|Capture)$/;function Od(e){let t;if(bs.test(e)){t={};let r;for(;r=e.match(bs);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):ln(e.slice(2)),t]}let Vr=0;const Pd=Promise.resolve(),Sd=()=>Vr||(Pd.then(()=>Vr=0),Vr=Date.now());function Td(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Le(Rd(r,n.value),t,5,[r])};return n.value=e,n.attached=Sd(),n}function Rd(e,t){if(B(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const ys=/^on[a-z]/,Id=(e,t,n,r,a=!1,i,s,o,l)=>{t==="class"?yd(e,r,a):t==="style"?xd(e,n,r):kr(t)?Ua(t)||Cd(e,t,n,r,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Nd(e,t,r,a))?kd(e,t,r,i,s,o,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),wd(e,t,r,a))};function Nd(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&ys.test(t)&&Y(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ys.test(t)&&he(n)?!1:t in e}const ht="transition",dn="animation",ui=(e,{slots:t})=>Fr(ku,Md(e),t);ui.displayName="Transition";const bl={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};ui.props=pe({},Xo,bl);const St=(e,t=[])=>{B(e)?e.forEach(n=>n(...t)):e&&e(...t)},xs=e=>e?B(e)?e.some(t=>t.length>1):e.length>1:!1;function Md(e){const t={};for(const $ in e)$ in bl||(t[$]=e[$]);if(e.css===!1)return t;const{name:n="v",type:r,duration:a,enterFromClass:i=`${n}-enter-from`,enterActiveClass:s=`${n}-enter-active`,enterToClass:o=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:f=s,appearToClass:c=o,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=e,C=Fd(a),A=C&&C[0],L=C&&C[1],{onBeforeEnter:b,onEnter:x,onEnterCancelled:I,onLeave:O,onLeaveCancelled:H,onBeforeAppear:X=b,onAppear:te=x,onAppearCancelled:U=I}=t,V=($,ee,Ee)=>{Tt($,ee?c:o),Tt($,ee?f:s),Ee&&Ee()},Q=($,ee)=>{$._isLeaving=!1,Tt($,d),Tt($,g),Tt($,p),ee&&ee()},ge=$=>(ee,Ee)=>{const et=$?te:x,de=()=>V(ee,$,Ee);St(et,[ee,de]),_s(()=>{Tt(ee,$?l:i),gt(ee,$?c:o),xs(et)||ws(ee,r,A,de)})};return pe(t,{onBeforeEnter($){St(b,[$]),gt($,i),gt($,s)},onBeforeAppear($){St(X,[$]),gt($,l),gt($,f)},onEnter:ge(!1),onAppear:ge(!0),onLeave($,ee){$._isLeaving=!0;const Ee=()=>Q($,ee);gt($,d),jd(),gt($,p),_s(()=>{$._isLeaving&&(Tt($,d),gt($,g),xs(O)||ws($,r,L,Ee))}),St(O,[$,Ee])},onEnterCancelled($){V($,!1),St(I,[$])},onAppearCancelled($){V($,!0),St(U,[$])},onLeaveCancelled($){Q($),St(H,[$])}})}function Fd(e){if(e==null)return null;if(oe(e))return[qr(e.enter),qr(e.leave)];{const t=qr(e);return[t,t]}}function qr(e){return xc(e)}function gt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function Tt(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function _s(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Ld=0;function ws(e,t,n,r){const a=e._endId=++Ld,i=()=>{a===e._endId&&r()};if(n)return setTimeout(i,n);const{type:s,timeout:o,propCount:l}=$d(e,t);if(!s)return r();const f=s+"end";let c=0;const d=()=>{e.removeEventListener(f,p),i()},p=g=>{g.target===e&&++c>=l&&d()};setTimeout(()=>{c<l&&d()},o+1),e.addEventListener(f,p)}function $d(e,t){const n=window.getComputedStyle(e),r=C=>(n[C]||"").split(", "),a=r(`${ht}Delay`),i=r(`${ht}Duration`),s=ks(a,i),o=r(`${dn}Delay`),l=r(`${dn}Duration`),f=ks(o,l);let c=null,d=0,p=0;t===ht?s>0&&(c=ht,d=s,p=i.length):t===dn?f>0&&(c=dn,d=f,p=l.length):(d=Math.max(s,f),c=d>0?s>f?ht:dn:null,p=c?c===ht?i.length:l.length:0);const g=c===ht&&/\b(transform|all)(,|$)/.test(r(`${ht}Property`).toString());return{type:c,timeout:d,propCount:p,hasTransform:g}}function ks(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>Es(n)+Es(e[r])))}function Es(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function jd(){return document.body.offsetHeight}const Dd=pe({patchProp:Id},bd);let As;function zd(){return As||(As=Xu(Dd))}const Bd=(...e)=>{const t=zd().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Hd(r);if(!a)return;const i=t._component;!Y(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const s=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),s},t};function Hd(e){return he(e)?document.querySelector(e):e}function Cs(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function at(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Cs(Object(n),!0).forEach(function(r){Pe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Cs(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function gr(e){"@babel/helpers - typeof";return gr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},gr(e)}function Pe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ud(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Kd(e,t){if(e==null)return{};var n=Ud(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var Yd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},yl={exports:{}};(function(e){(function(t){var n=function(b,x,I){if(!f(x)||d(x)||p(x)||g(x)||l(x))return x;var O,H=0,X=0;if(c(x))for(O=[],X=x.length;H<X;H++)O.push(n(b,x[H],I));else{O={};for(var te in x)Object.prototype.hasOwnProperty.call(x,te)&&(O[b(te,I)]=n(b,x[te],I))}return O},r=function(b,x){x=x||{};var I=x.separator||"_",O=x.split||/(?=[A-Z])/;return b.split(O).join(I)},a=function(b){return C(b)?b:(b=b.replace(/[\-_\s]+(.)?/g,function(x,I){return I?I.toUpperCase():""}),b.substr(0,1).toLowerCase()+b.substr(1))},i=function(b){var x=a(b);return x.substr(0,1).toUpperCase()+x.substr(1)},s=function(b,x){return r(b,x).toLowerCase()},o=Object.prototype.toString,l=function(b){return typeof b=="function"},f=function(b){return b===Object(b)},c=function(b){return o.call(b)=="[object Array]"},d=function(b){return o.call(b)=="[object Date]"},p=function(b){return o.call(b)=="[object RegExp]"},g=function(b){return o.call(b)=="[object Boolean]"},C=function(b){return b=b-0,b===b},A=function(b,x){var I=x&&"process"in x?x.process:x;return typeof I!="function"?b:function(O,H){return I(O,b,H)}},L={camelize:a,decamelize:s,pascalize:i,depascalize:s,camelizeKeys:function(b,x){return n(A(a,x),b)},decamelizeKeys:function(b,x){return n(A(s,x),b,x)},pascalizeKeys:function(b,x){return n(A(i,x),b)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=L:t.humps=L})(Yd)})(yl);var Wd=yl.exports,Vd=["class","style"];function qd(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Wd.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Gd(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function xl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return xl(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,f){var c=e.attributes[f];switch(f){case"class":l.class=Gd(c);break;case"style":l.style=qd(c);break;default:l.attrs[f]=c}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,s=i===void 0?{}:i,o=Kd(n,Vd);return Fr(e.tag,at(at(at({},t),{},{class:a.class,style:at(at({},a.style),s)},a.attrs),o),r)}var _l=!1;try{_l=!0}catch{}function Xd(){if(!_l&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Gr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Pe({},e,t):{}}function Qd(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},Pe(t,"fa-".concat(e.size),e.size!==null),Pe(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),Pe(t,"fa-pull-".concat(e.pull),e.pull!==null),Pe(t,"fa-swap-opacity",e.swapOpacity),Pe(t,"fa-bounce",e.bounce),Pe(t,"fa-shake",e.shake),Pe(t,"fa-beat",e.beat),Pe(t,"fa-fade",e.fade),Pe(t,"fa-beat-fade",e.beatFade),Pe(t,"fa-flash",e.flash),Pe(t,"fa-spin-pulse",e.spinPulse),Pe(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Os(e){if(e&&gr(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(ca.icon)return ca.icon(e);if(e===null)return null;if(gr(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Jd=ri({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=ye(function(){return Os(t.icon)}),i=ye(function(){return Gr("classes",Qd(t))}),s=ye(function(){return Gr("transform",typeof t.transform=="string"?ca.transform(t.transform):t.transform)}),o=ye(function(){return Gr("mask",Os(t.mask))}),l=ye(function(){return dc(a.value,at(at(at(at({},i.value),s.value),o.value),{},{symbol:t.symbol,title:t.title}))});xn(l,function(c){if(!c)return Xd("Could not find one or more icon(s)",a.value,o.value)},{immediate:!0});var f=ye(function(){return l.value?xl(l.value.abstract[0],{},r):null});return function(){return f.value}}}),Zd={prefix:"fas",iconName:"user-secret",icon:[448,512,[128373],"f21b","M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.8 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"]};const di=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},em={},tm={class:"flex justify-between items-center mt-1"},nm={class:"mx-auto flex justify-between mt-3"};function rm(e,t){const n=al("router-link");return Ne(),Je("nav",tm,[Ue("ul",nm,[Ue("li",null,[ue(n,{to:"/",class:"nav-link"},{default:Zt(()=>[sr(" Home ")]),_:1})]),Ue("li",null,[ue(n,{to:"/",class:"nav-link"},{default:Zt(()=>[sr(" About Us ")]),_:1})]),Ue("li",null,[ue(n,{to:{name:"playDice"},class:"nav-link"},{default:Zt(()=>[sr(" Let's Roll ")]),_:1})])])])}const am=di(em,[["render",rm]]),im={class:"h-screen overflow-x-hidden bg-gray-200"},sm={__name:"App",setup(e){return(t,n)=>{const r=al("RouterView");return Ne(),Je("div",im,[ue(am),ue(r)])}}};/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const mn=typeof window<"u";function om(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const le=Object.assign;function Xr(e,t){const n={};for(const r in t){const a=t[r];n[r]=Ye(a)?a.map(e):e(a)}return n}const En=()=>{},Ye=Array.isArray;function Qr(e,t,n="/"){let r,a={},i="",s="";const o=t.indexOf("#");let l=t.indexOf("?");return o<l&&o>=0&&(l=-1),l>-1&&(r=t.slice(0,l),i=t.slice(l+1,o>-1?o:t.length),a=e(i)),o>-1&&(r=r||t.slice(0,o),s=t.slice(o,t.length)),r=um(r??t,n),{fullPath:r+(i&&"?")+i+s,path:r,query:a,hash:s}}function lm(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function fm(e,t,n){const r=t.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&an(t.matched[r],n.matched[a])&&wl(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function an(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function wl(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!cm(e[n],t[n]))return!1;return!0}function cm(e,t){return Ye(e)?Ps(e,t):Ye(t)?Ps(t,e):e===t}function Ps(e,t){return Ye(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function um(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),a=r[r.length-1];(a===".."||a===".")&&r.push("");let i=n.length-1,s,o;for(s=0;s<r.length;s++)if(o=r[s],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var vr;(function(e){e.pop="pop",e.push="push"})(vr||(vr={}));var Ss;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Ss||(Ss={}));function dm(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const mm=()=>({left:window.pageXOffset,top:window.pageYOffset});function pm(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=dm(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Ts(e,t){return(history.state?history.state.position-t:-1)+e}const Ca=new Map;function hm(e,t){Ca.set(e,t)}function gm(e){const t=Ca.get(e);return Ca.delete(e),t}function vm(e){return typeof e=="string"||e&&typeof e=="object"}function kl(e){return typeof e=="string"||typeof e=="symbol"}const vt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},El=Symbol("");var Rs;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Rs||(Rs={}));function sn(e,t){return le(new Error,{type:e,[El]:!0},t)}function nt(e,t){return e instanceof Error&&El in e&&(t==null||!!(e.type&t))}const Is="[^/]+?",bm={sensitive:!1,strict:!1,start:!0,end:!0},ym=/[.+*?^${}()[\]/\\]/g;function xm(e,t){const n=le({},bm,t),r=[];let a=n.start?"^":"";const i=[];for(const f of e){const c=f.length?[]:[90];n.strict&&!f.length&&(a+="/");for(let d=0;d<f.length;d++){const p=f[d];let g=40+(n.sensitive?.25:0);if(p.type===0)d||(a+="/"),a+=p.value.replace(ym,"\\$&"),g+=40;else if(p.type===1){const{value:C,repeatable:A,optional:L,regexp:b}=p;i.push({name:C,repeatable:A,optional:L});const x=b||Is;if(x!==Is){g+=10;try{new RegExp(`(${x})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${C}" (${x}): `+O.message)}}let I=A?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;d||(I=L&&f.length<2?`(?:/${I})`:"/"+I),L&&(I+="?"),a+=I,g+=20,L&&(g+=-8),A&&(g+=-20),x===".*"&&(g+=-50)}c.push(g)}r.push(c)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const s=new RegExp(a,n.sensitive?"":"i");function o(f){const c=f.match(s),d={};if(!c)return null;for(let p=1;p<c.length;p++){const g=c[p]||"",C=i[p-1];d[C.name]=g&&C.repeatable?g.split("/"):g}return d}function l(f){let c="",d=!1;for(const p of e){(!d||!c.endsWith("/"))&&(c+="/"),d=!1;for(const g of p)if(g.type===0)c+=g.value;else if(g.type===1){const{value:C,repeatable:A,optional:L}=g,b=C in f?f[C]:"";if(Ye(b)&&!A)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const x=Ye(b)?b.join("/"):b;if(!x)if(L)p.length<2&&(c.endsWith("/")?c=c.slice(0,-1):d=!0);else throw new Error(`Missing required param "${C}"`);c+=x}}return c||"/"}return{re:s,score:r,keys:i,parse:o,stringify:l}}function _m(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function wm(e,t){let n=0;const r=e.score,a=t.score;for(;n<r.length&&n<a.length;){const i=_m(r[n],a[n]);if(i)return i;n++}if(Math.abs(a.length-r.length)===1){if(Ns(r))return 1;if(Ns(a))return-1}return a.length-r.length}function Ns(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const km={type:0,value:""},Em=/[a-zA-Z0-9_]/;function Am(e){if(!e)return[[]];if(e==="/")return[[km]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${f}": ${g}`)}let n=0,r=n;const a=[];let i;function s(){i&&a.push(i),i=[]}let o=0,l,f="",c="";function d(){f&&(n===0?i.push({type:0,value:f}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:f,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),f="")}function p(){f+=l}for(;o<e.length;){if(l=e[o++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(f&&d(),s()):l===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:Em.test(l)?p():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=3:c+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&o--,c="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),d(),s(),a}function Cm(e,t,n){const r=xm(Am(e.path),n),a=le(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function Om(e,t){const n=[],r=new Map;t=Ls({strict:!1,end:!0,sensitive:!1},t);function a(c){return r.get(c)}function i(c,d,p){const g=!p,C=Pm(c);C.aliasOf=p&&p.record;const A=Ls(t,c),L=[C];if("alias"in c){const I=typeof c.alias=="string"?[c.alias]:c.alias;for(const O of I)L.push(le({},C,{components:p?p.record.components:C.components,path:O,aliasOf:p?p.record:C}))}let b,x;for(const I of L){const{path:O}=I;if(d&&O[0]!=="/"){const H=d.record.path,X=H[H.length-1]==="/"?"":"/";I.path=d.record.path+(O&&X+O)}if(b=Cm(I,d,A),p?p.alias.push(b):(x=x||b,x!==b&&x.alias.push(b),g&&c.name&&!Fs(b)&&s(c.name)),C.children){const H=C.children;for(let X=0;X<H.length;X++)i(H[X],b,p&&p.children[X])}p=p||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&l(b)}return x?()=>{s(x)}:En}function s(c){if(kl(c)){const d=r.get(c);d&&(r.delete(c),n.splice(n.indexOf(d),1),d.children.forEach(s),d.alias.forEach(s))}else{const d=n.indexOf(c);d>-1&&(n.splice(d,1),c.record.name&&r.delete(c.record.name),c.children.forEach(s),c.alias.forEach(s))}}function o(){return n}function l(c){let d=0;for(;d<n.length&&wm(c,n[d])>=0&&(c.record.path!==n[d].record.path||!Al(c,n[d]));)d++;n.splice(d,0,c),c.record.name&&!Fs(c)&&r.set(c.record.name,c)}function f(c,d){let p,g={},C,A;if("name"in c&&c.name){if(p=r.get(c.name),!p)throw sn(1,{location:c});A=p.record.name,g=le(Ms(d.params,p.keys.filter(x=>!x.optional).map(x=>x.name)),c.params&&Ms(c.params,p.keys.map(x=>x.name))),C=p.stringify(g)}else if("path"in c)C=c.path,p=n.find(x=>x.re.test(C)),p&&(g=p.parse(C),A=p.record.name);else{if(p=d.name?r.get(d.name):n.find(x=>x.re.test(d.path)),!p)throw sn(1,{location:c,currentLocation:d});A=p.record.name,g=le({},d.params,c.params),C=p.stringify(g)}const L=[];let b=p;for(;b;)L.unshift(b.record),b=b.parent;return{name:A,path:C,params:g,matched:L,meta:Tm(L)}}return e.forEach(c=>i(c)),{addRoute:i,resolve:f,removeRoute:s,getRoutes:o,getRecordMatcher:a}}function Ms(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Pm(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Sm(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Sm(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Fs(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Tm(e){return e.reduce((t,n)=>le(t,n.meta),{})}function Ls(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Al(e,t){return t.children.some(n=>n===e||Al(e,n))}const Cl=/#/g,Rm=/&/g,Im=/\//g,Nm=/=/g,Mm=/\?/g,Ol=/\+/g,Fm=/%5B/g,Lm=/%5D/g,Pl=/%5E/g,$m=/%60/g,Sl=/%7B/g,jm=/%7C/g,Tl=/%7D/g,Dm=/%20/g;function mi(e){return encodeURI(""+e).replace(jm,"|").replace(Fm,"[").replace(Lm,"]")}function zm(e){return mi(e).replace(Sl,"{").replace(Tl,"}").replace(Pl,"^")}function Oa(e){return mi(e).replace(Ol,"%2B").replace(Dm,"+").replace(Cl,"%23").replace(Rm,"%26").replace($m,"`").replace(Sl,"{").replace(Tl,"}").replace(Pl,"^")}function Bm(e){return Oa(e).replace(Nm,"%3D")}function Hm(e){return mi(e).replace(Cl,"%23").replace(Mm,"%3F")}function Um(e){return e==null?"":Hm(e).replace(Im,"%2F")}function br(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Km(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<r.length;++a){const i=r[a].replace(Ol," "),s=i.indexOf("="),o=br(s<0?i:i.slice(0,s)),l=s<0?null:br(i.slice(s+1));if(o in t){let f=t[o];Ye(f)||(f=t[o]=[f]),f.push(l)}else t[o]=l}return t}function $s(e){let t="";for(let n in e){const r=e[n];if(n=Bm(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Ye(r)?r.map(i=>i&&Oa(i)):[r&&Oa(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Ym(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Ye(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}const Wm=Symbol(""),js=Symbol(""),pi=Symbol(""),Rl=Symbol(""),Pa=Symbol("");function pn(){let e=[];function t(r){return e.push(r),()=>{const a=e.indexOf(r);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function yt(e,t,n,r,a){const i=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((s,o)=>{const l=d=>{d===!1?o(sn(4,{from:n,to:t})):d instanceof Error?o(d):vm(d)?o(sn(2,{from:t,to:d})):(i&&r.enterCallbacks[a]===i&&typeof d=="function"&&i.push(d),s())},f=e.call(r&&r.instances[a],t,n,l);let c=Promise.resolve(f);e.length<3&&(c=c.then(l)),c.catch(d=>o(d))})}function Jr(e,t,n,r){const a=[];for(const i of e)for(const s in i.components){let o=i.components[s];if(!(t!=="beforeRouteEnter"&&!i.instances[s]))if(Vm(o)){const f=(o.__vccOpts||o)[t];f&&a.push(yt(f,n,r,i,s))}else{let l=o();a.push(()=>l.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${s}" at "${i.path}"`));const c=om(f)?f.default:f;i.components[s]=c;const p=(c.__vccOpts||c)[t];return p&&yt(p,n,r,i,s)()}))}}return a}function Vm(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ds(e){const t=it(pi),n=it(Rl),r=ye(()=>t.resolve(Ce(e.to))),a=ye(()=>{const{matched:l}=r.value,{length:f}=l,c=l[f-1],d=n.matched;if(!c||!d.length)return-1;const p=d.findIndex(an.bind(null,c));if(p>-1)return p;const g=zs(l[f-2]);return f>1&&zs(c)===g&&d[d.length-1].path!==g?d.findIndex(an.bind(null,l[f-2])):p}),i=ye(()=>a.value>-1&&Qm(n.params,r.value.params)),s=ye(()=>a.value>-1&&a.value===n.matched.length-1&&wl(n.params,r.value.params));function o(l={}){return Xm(l)?t[Ce(e.replace)?"replace":"push"](Ce(e.to)).catch(En):Promise.resolve()}return{route:r,href:ye(()=>r.value.href),isActive:i,isExactActive:s,navigate:o}}const qm=ri({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ds,setup(e,{slots:t}){const n=Pr(Ds(e)),{options:r}=it(pi),a=ye(()=>({[Bs(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Bs(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Fr("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},i)}}}),Gm=qm;function Xm(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Qm(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(!Ye(a)||a.length!==r.length||r.some((i,s)=>i!==a[s]))return!1}return!0}function zs(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Bs=(e,t,n)=>e??t??n,Jm=ri({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=it(Pa),a=ye(()=>e.route||r.value),i=it(js,0),s=ye(()=>{let f=Ce(i);const{matched:c}=a.value;let d;for(;(d=c[f])&&!d.components;)f++;return f}),o=ye(()=>a.value.matched[s.value]);ar(js,ye(()=>s.value+1)),ar(Wm,o),ar(Pa,a);const l=$t();return xn(()=>[l.value,o.value,e.name],([f,c,d],[p,g,C])=>{c&&(c.instances[d]=f,g&&g!==c&&f&&f===p&&(c.leaveGuards.size||(c.leaveGuards=g.leaveGuards),c.updateGuards.size||(c.updateGuards=g.updateGuards))),f&&c&&(!g||!an(c,g)||!p)&&(c.enterCallbacks[d]||[]).forEach(A=>A(f))},{flush:"post"}),()=>{const f=a.value,c=e.name,d=o.value,p=d&&d.components[c];if(!p)return Hs(n.default,{Component:p,route:f});const g=d.props[c],C=g?g===!0?f.params:typeof g=="function"?g(f):g:null,L=Fr(p,le({},C,t,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(d.instances[c]=null)},ref:l}));return Hs(n.default,{Component:L,route:f})||L}}});function Hs(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Zm=Jm;function ep(e){const t=Om(e.routes,e),n=e.parseQuery||Km,r=e.stringifyQuery||$s,a=e.history,i=pn(),s=pn(),o=pn(),l=ru(vt);let f=vt;mn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=Xr.bind(null,y=>""+y),d=Xr.bind(null,Um),p=Xr.bind(null,br);function g(y,N){let S,j;return kl(y)?(S=t.getRecordMatcher(y),j=N):j=y,t.addRoute(j,S)}function C(y){const N=t.getRecordMatcher(y);N&&t.removeRoute(N)}function A(){return t.getRoutes().map(y=>y.record)}function L(y){return!!t.getRecordMatcher(y)}function b(y,N){if(N=le({},N||l.value),typeof y=="string"){const h=Qr(n,y,N.path),v=t.resolve({path:h.path},N),_=a.createHref(h.fullPath);return le(h,v,{params:p(v.params),hash:br(h.hash),redirectedFrom:void 0,href:_})}let S;if("path"in y)S=le({},y,{path:Qr(n,y.path,N.path).path});else{const h=le({},y.params);for(const v in h)h[v]==null&&delete h[v];S=le({},y,{params:d(h)}),N.params=d(N.params)}const j=t.resolve(S,N),Z=y.hash||"";j.params=c(p(j.params));const u=lm(r,le({},y,{hash:zm(Z),path:j.path})),m=a.createHref(u);return le({fullPath:u,hash:Z,query:r===$s?Ym(y.query):y.query||{}},j,{redirectedFrom:void 0,href:m})}function x(y){return typeof y=="string"?Qr(n,y,l.value.path):le({},y)}function I(y,N){if(f!==y)return sn(8,{from:N,to:y})}function O(y){return te(y)}function H(y){return O(le(x(y),{replace:!0}))}function X(y){const N=y.matched[y.matched.length-1];if(N&&N.redirect){const{redirect:S}=N;let j=typeof S=="function"?S(y):S;return typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=x(j):{path:j},j.params={}),le({query:y.query,hash:y.hash,params:"path"in j?{}:y.params},j)}}function te(y,N){const S=f=b(y),j=l.value,Z=y.state,u=y.force,m=y.replace===!0,h=X(S);if(h)return te(le(x(h),{state:typeof h=="object"?le({},Z,h.state):Z,force:u,replace:m}),N||S);const v=S;v.redirectedFrom=N;let _;return!u&&fm(r,j,S)&&(_=sn(16,{to:v,from:j}),We(j,j,!0,!1)),(_?Promise.resolve(_):Q(v,j)).catch(w=>nt(w)?nt(w,2)?w:dt(w):J(w,v,j)).then(w=>{if(w){if(nt(w,2))return te(le({replace:m},x(w.to),{state:typeof w.to=="object"?le({},Z,w.to.state):Z,force:u}),N||v)}else w=$(v,j,!0,m,Z);return ge(v,j,w),w})}function U(y,N){const S=I(y,N);return S?Promise.reject(S):Promise.resolve()}function V(y){const N=Ht.values().next().value;return N&&typeof N.runWithContext=="function"?N.runWithContext(y):y()}function Q(y,N){let S;const[j,Z,u]=tp(y,N);S=Jr(j.reverse(),"beforeRouteLeave",y,N);for(const h of j)h.leaveGuards.forEach(v=>{S.push(yt(v,y,N))});const m=U.bind(null,y,N);return S.push(m),_e(S).then(()=>{S=[];for(const h of i.list())S.push(yt(h,y,N));return S.push(m),_e(S)}).then(()=>{S=Jr(Z,"beforeRouteUpdate",y,N);for(const h of Z)h.updateGuards.forEach(v=>{S.push(yt(v,y,N))});return S.push(m),_e(S)}).then(()=>{S=[];for(const h of u)if(h.beforeEnter)if(Ye(h.beforeEnter))for(const v of h.beforeEnter)S.push(yt(v,y,N));else S.push(yt(h.beforeEnter,y,N));return S.push(m),_e(S)}).then(()=>(y.matched.forEach(h=>h.enterCallbacks={}),S=Jr(u,"beforeRouteEnter",y,N),S.push(m),_e(S))).then(()=>{S=[];for(const h of s.list())S.push(yt(h,y,N));return S.push(m),_e(S)}).catch(h=>nt(h,8)?h:Promise.reject(h))}function ge(y,N,S){o.list().forEach(j=>V(()=>j(y,N,S)))}function $(y,N,S,j,Z){const u=I(y,N);if(u)return u;const m=N===vt,h=mn?history.state:{};S&&(j||m?a.replace(y.fullPath,le({scroll:m&&h&&h.scroll},Z)):a.push(y.fullPath,Z)),l.value=y,We(y,N,S,m),dt()}let ee;function Ee(){ee||(ee=a.listen((y,N,S)=>{if(!Dn.listening)return;const j=b(y),Z=X(j);if(Z){te(le(Z,{replace:!0}),j).catch(En);return}f=j;const u=l.value;mn&&hm(Ts(u.fullPath,S.delta),mm()),Q(j,u).catch(m=>nt(m,12)?m:nt(m,2)?(te(m.to,j).then(h=>{nt(h,20)&&!S.delta&&S.type===vr.pop&&a.go(-1,!1)}).catch(En),Promise.reject()):(S.delta&&a.go(-S.delta,!1),J(m,j,u))).then(m=>{m=m||$(j,u,!1),m&&(S.delta&&!nt(m,8)?a.go(-S.delta,!1):S.type===vr.pop&&nt(m,20)&&a.go(-1,!1)),ge(j,u,m)}).catch(En)}))}let et=pn(),de=pn(),re;function J(y,N,S){dt(y);const j=de.list();return j.length?j.forEach(Z=>Z(y,N,S)):console.error(y),Promise.reject(y)}function tt(){return re&&l.value!==vt?Promise.resolve():new Promise((y,N)=>{et.add([y,N])})}function dt(y){return re||(re=!y,Ee(),et.list().forEach(([N,S])=>y?S(y):N()),et.reset()),y}function We(y,N,S,j){const{scrollBehavior:Z}=e;if(!mn||!Z)return Promise.resolve();const u=!S&&gm(Ts(y.fullPath,0))||(j||!S)&&history.state&&history.state.scroll||null;return Ho().then(()=>Z(y,N,u)).then(m=>m&&pm(m)).catch(m=>J(m,y,N))}const Oe=y=>a.go(y);let Bt;const Ht=new Set,Dn={currentRoute:l,listening:!0,addRoute:g,removeRoute:C,hasRoute:L,getRoutes:A,resolve:b,options:e,push:O,replace:H,go:Oe,back:()=>Oe(-1),forward:()=>Oe(1),beforeEach:i.add,beforeResolve:s.add,afterEach:o.add,onError:de.add,isReady:tt,install(y){const N=this;y.component("RouterLink",Gm),y.component("RouterView",Zm),y.config.globalProperties.$router=N,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Ce(l)}),mn&&!Bt&&l.value===vt&&(Bt=!0,O(a.location).catch(Z=>{}));const S={};for(const Z in vt)Object.defineProperty(S,Z,{get:()=>l.value[Z],enumerable:!0});y.provide(pi,N),y.provide(Rl,No(S)),y.provide(Pa,l);const j=y.unmount;Ht.add(y),y.unmount=function(){Ht.delete(y),Ht.size<1&&(f=vt,ee&&ee(),ee=null,l.value=vt,Bt=!1,re=!1),j()}}};function _e(y){return y.reduce((N,S)=>N.then(()=>V(S)),Promise.resolve())}return Dn}function tp(e,t){const n=[],r=[],a=[],i=Math.max(t.matched.length,e.matched.length);for(let s=0;s<i;s++){const o=t.matched[s];o&&(e.matched.find(f=>an(f,o))?r.push(o):n.push(o));const l=e.matched[s];l&&(t.matched.find(f=>an(f,l))||a.push(l))}return[n,r,a]}const np={};function rp(e,t){return null}const ap=di(np,[["render",rp]]),ip={class:"font-Press-Start mx-auto flex flex-col justify-center items-center"},sp={key:0,class:"max-md:text-base text-2xl mt-8 drop-shadow-[5px_0_#7a7a7a]"},op=["src"],lp={__name:"Dice",props:{show:Boolean,guess:Number},emits:["show"],setup(e,{emit:t}){const n=e;let r=$t(!0),a=()=>{},i=setInterval(()=>{r.value=!r.value,n.guess&&(clearInterval(i),r.value=!0)},1e3);const s=()=>{t("show")};return(o,l)=>(Ne(),Je("div",ip,[Ue("h1",{onClick:s,class:tn(["font-Press-Start max-md:text-2xl text-4xl mb-2 inline-block cursor-pointer hover:text-white hover:drop-shadow-[5px_0_#000]",Ce(r)?"text-black drop-shadow-[5px_0_#7a7a7a]":" text-white drop-shadow-[5px_0_#000]"])},Oc(n.guess?"Let's Roll!":"Click Here To Guess!"),3),e.guess?(Ne(),Je("h1",sp," You Guess!! ")):Ea("",!0),Ue("img",{src:n.guess?`./images/dice${n.guess}.png`:"./images/rolling.gif",class:"h-[10rem] w-[10rem] mx-auto m-8"},null,8,op),n.guess?(Ne(),Je("button",{key:1,onClick:l[0]||(l[0]=(...f)=>Ce(a)&&Ce(a)(...f)),class:"border border-black bg-white drop-shadow-[5px_0_#000] py-5 rounded hover:[text-shadow:4px_0_#7a7a7a] hover:drop-shadow-[5px_0_#7a7a7a] hover:text-white hover:bg-black transition-all duration-100 ease-linear px-2",disabled:""}," Roll the Dice ")):Ea("",!0)]))}};const fp={key:0,class:"opacity-100 absolute left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%] max-w-lg w-full h-2/5 bg-gray-200 border rounded-lg shadow-lg px-16"},cp={__name:"Modal",props:{show:Boolean},setup(e){return(t,n)=>(Ne(),Je("div",{class:tn(["absolute w-screen h-screen left-0 top-0",{hidden:!e.show}])},[Ue("div",{class:tn(["absolute w-screen h-screen left-0 top-0",{"bg-black/50":e.show}])},[ue(ui,{name:"fade"},{default:Zt(()=>[e.show?(Ne(),Je("div",fp,[Lu(t.$slots,"default",{},void 0,!0)])):Ea("",!0)]),_:3})],2)],2))}},up=di(cp,[["__scopeId","data-v-6f8fb1eb"]]),dp=Ue("h1",{class:"text-center font-Press-Start mt-2 p-2 text-black text-lg drop-shadow-[3px_0_#7a7a7a]"}," Guess The Number ",-1),mp={class:"grid gap-3 my-12 grid-cols-3"},pp=["onClick","src"],hp={__name:"GuessNumber",props:{show:Boolean},emits:["show","guessnum"],setup(e,{emit:t}){const n=e;let r=$t(n.show),a=$t("");const i=o=>{a.value=o,r.value=!1,t("show"),t("guessnum",o)};ai(()=>{r.value=!0}),el(()=>{r.value=n.show});let s=$t([1,2,3,4,5,6]);return(o,l)=>(Ne(),oi(up,{show:Ce(r)},{default:Zt(()=>[dp,Ue("div",mp,[(Ne(!0),Je(Ie,null,Fu(Ce(s),f=>(Ne(),Je("img",{onClick:c=>i(f),class:"h-12 shadow-black w-12 shadow-md mx-auto cursor-pointer hover:scale-110",src:`/images/dice${f}.png`,key:f},null,8,pp))),128))])]),_:1},8,["show"]))}},gp={class:"flex justify-between mx-auto max-w-6xl items-center overflow-x-hidden h-[calc(100%-100px)]"},vp={__name:"PlayingDice",setup(e){let t=$t(),n=$t(),r=i=>{n.value=i},a=()=>{t.value=!0};return(i,s)=>(Ne(),Je("div",gp,[ue(lp,{onShow:Ce(a),guess:Ce(n)},null,8,["onShow","guess"]),ue(hp,{class:"",onShow:s[0]||(s[0]=o=>xe(t)?t.value=!1:t=!1),onGuessnum:Ce(r),show:Ce(t)},null,8,["onGuessnum","show"])]))}},bp=ep({mode:"hash",routes:[{path:"/",name:"home",component:ap},{path:"/playdice",name:"playDice",component:vp}]});uc.add(Zd);const hi=Bd(sm);hi.use(bp);hi.component("font-awesome-icon",Jd);hi.mount("#app");
