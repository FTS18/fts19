var objectFitVideos=function(t){"use strict";function e(t){for(var e=getComputedStyle(t).fontFamily,o=null,i={};null!==(o=l.exec(e));)i[o[1]]=o[2];return i["object-position"]?n(i):i}function o(t){var o=-1;t?"length"in t||(t=[t]):t=document.querySelectorAll("video");for(;t[++o];){var n=e(t[o]);(n["object-fit"]||n["object-position"])&&(n["object-fit"]=n["object-fit"]||"fill",i(t[o],n))}}function i(t,e){function o(){var o=t.videoWidth,n=t.videoHeight,d=o/n,a=r.clientWidth,c=r.clientHeight,p=a/c,l=0,s=0;i.marginLeft=i.marginTop=0,(d<p?"contain"===e["object-fit"]:"cover"===e["object-fit"])?(l=c*d,s=a/d,i.width=Math.round(l)+"px",i.height=c+"px","left"===e["object-position-x"]?i.marginLeft=0:"right"===e["object-position-x"]?i.marginLeft=Math.round(a-l)+"px":i.marginLeft=Math.round((a-l)/2)+"px"):(s=a/d,i.width=a+"px",i.height=Math.round(s)+"px","top"===e["object-position-y"]?i.marginTop=0:"bottom"===e["object-position-y"]?i.marginTop=Math.round(c-s)+"px":i.marginTop=Math.round((c-s)/2)+"px"),t.autoplay&&t.play()}if("fill"!==e["object-fit"]){var i=t.style,n=window.getComputedStyle(t),r=document.createElement("object-fit");r.appendChild(t.parentNode.replaceChild(r,t));var d={height:"100%",width:"100%",boxSizing:"content-box",display:"inline-block",overflow:"hidden"};"backgroundColor backgroundImage borderColor borderStyle borderWidth bottom fontSize lineHeight left opacity margin position right top visibility".replace(/\w+/g,function(t){d[t]=n[t]});for(var a in d)r.style[a]=d[a];i.border=i.margin=i.padding=0,i.display="block",i.opacity=1,t.addEventListener("loadedmetadata",o),window.addEventListener("optimizedResize",o),t.readyState>=1&&(t.removeEventListener("loadedmetadata",o),o())}}function n(t){return~t["object-position"].indexOf("left")?t["object-position-x"]="left":~t["object-position"].indexOf("right")?t["object-position-x"]="right":t["object-position-x"]="center",~t["object-position"].indexOf("top")?t["object-position-y"]="top":~t["object-position"].indexOf("bottom")?t["object-position-y"]="bottom":t["object-position-y"]="center",t}function r(t,e,o){o=o||window;var i=!1,n=null;try{n=new CustomEvent(e)}catch(t){n=document.createEvent("Event"),n.initEvent(e,!0,!0)}var r=function(){i||(i=!0,requestAnimationFrame(function(){o.dispatchEvent(n),i=!1}))};o.addEventListener(t,r)}var d=navigator.userAgent.indexOf("Edge/")>=0,a=new Image,c="object-fit"in a.style&&!d,p="object-position"in a.style&&!d,l=/(object-fit|object-position)\s*:\s*([-\w\s%]+)/g;c&&p||(o(t),r("resize","optimizedResize"))};"undefined"!=typeof module&&"undefined"!=typeof module.exports&&(module.exports=objectFitVideos);;
