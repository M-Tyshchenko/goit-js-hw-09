!function(){var t=document.querySelector("body"),e=document.querySelector("button[data-start]"),d=document.querySelector("button[data-stop]"),a=null;e.style.fontSize="20px",e.style.padding="10px 20px",e.style.textTransform="uppercase",d.style.fontSize="20px",d.style.padding="10px 20px",d.style.textTransform="uppercase",d.setAttribute("disabled","disabled"),e.addEventListener("click",(function(r){e.setAttribute("disabled","disabled"),d.removeAttribute("disabled"),a=setInterval((function(){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),d.addEventListener("click",(function(t){d.setAttribute("disabled","disabled"),e.removeAttribute("disabled"),clearInterval(a)}))}();
//# sourceMappingURL=01-color-switcher.e67e7735.js.map