let w="square",x="button",y="game",z="div",s=document.getElementById(w),b=document.querySelector(x),g=document.getElementById(y),o=document.createElement(z),ss=s.style,oo=o.style,p=o.parentNode;function cc(){let e=parseInt(ss.left.replace("px","")),t=parseInt(ss.top.replace("px",""));if(o.parentNode){p=o.parentNode;let n=parseInt(oo.left.replace("px","")),r=parseInt(oo.top.replace("px",""));e>=n-50&&e<=n+50&&t<=r+50&&t>=r-50&&p.removeChild(o)}}function cs(){oo.top=Math.floor(300*Math.random())+"px",oo.left=Math.floor(300*Math.random())+"px",g.appendChild(o)}function ml(){var e=ss.left.replace("px",""),o=parseInt(e);o>0&&(ss.left=`${o-10}px`)}function mr(){var e=ss.left.replace("px",""),o=parseInt(e);o<300&&(ss.left=`${o+10}px`)}function md(){var e=ss.top.replace("px",""),o=parseInt(e);o<300&&(ss.top=`${o+10}px`)}function mu(){var e=ss.top.replace("px",""),o=parseInt(e);o>0&&(ss.top=`${o-10}px`)}oo.backgroundColor="white",oo.position="absolute",oo.width="50px",oo.height="50px",b.addEventListener("click",function(){cs()}),s.addEventListener("click",function(){ss.backgroundColor="#"+Math.floor(16777215*Math.random()).toString(16)}),document.addEventListener("keydown",function(e){"ArrowLeft"===e.key?ml():"ArrowRight"===e.key?mr():"ArrowDown"===e.key?md():"ArrowUp"===e.key&&mu(),cc()});