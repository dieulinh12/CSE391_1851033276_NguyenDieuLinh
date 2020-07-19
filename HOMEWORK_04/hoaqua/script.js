var jFruit     = document.getElementById('txtFruit')
var jshowFruit = document.getElementById('btnShowFruit')
var jimgFruit  = document.getElementById('imgFruit')
// sự kiện nhấp chuột "click", 
jshowFruit.addEventListener('click',showResult);

function showResult()
{
    var getFruit= jFruit.value ;
    jimgFruit.setAttribute('src','images/'+getFruit+'.jpg');
}
/*
$(document).ready(function(){
    $('btnShowFruit').click(function(){
        let getFruit =  $('txtFruit').val();
        $('imgFruit').attr('src','images/'+getFruit+'.jpg');
    })
})*/