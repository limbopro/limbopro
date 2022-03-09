var codeblocks=document.getElementsByTagName("pre")
for(var i=0;i<codeblocks.length;i++){currentCode=codeblocks[i]
currentCode.style="position: relative;"
var copy=document.createElement("div")
copy.style="position: absolute;right: 4px;\
    top: 6px;background-color: black;padding: 2px 10px;\
    margin: 8px;border-radius: 4px;cursor: pointer;\
    box-shadow: 0 2px 4px rgba(125,0,0,0.05), 0 2px 4px rgba(0,0,0,0.05);"
copy.innerHTML="复制"
currentCode.appendChild(copy)
copy.style.visibility="visible"}
for(var i=0;i<codeblocks.length;i++){!function(i){codeblocks[i].onmouseover=function(){codeblocks[i].childNodes[1].style.visibility="visible"}
function copyArticle(event){const range=document.createRange();range.selectNode(codeblocks[i].childNodes[0]);const selection=window.getSelection();if(selection.rangeCount>0)selection.removeAllRanges();selection.addRange(range);document.execCommand('copy');codeblocks[i].childNodes[1].innerHTML="复制成功"
setTimeout(function(){codeblocks[i].childNodes[1].innerHTML="复制"},1000);if(selection.rangeCount>0)selection.removeAllRanges();0}
codeblocks[i].childNodes[1].addEventListener('click',copyArticle,false);}(i);}