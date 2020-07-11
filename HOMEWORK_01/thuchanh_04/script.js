var jFruit     = document.getElementById('txtFruit')
var jshowFruit = document.getElementById('btnShowFruit')
var jimgFruit  = document.getElementById('imgFruit')

jshowFruit.addEventListener("click",showResult);

function showResult()
{
    var getFruit= jFruit.value ;
    jimgFruit.setAttribute('src','images/'+getFruit+'.jpg');
}