$(document).ready(function(){
    $("#select").change(function(){
        var sq_num=$('this').val();
        $(".sq_b").html("");
        /*for(let i=0; i<sq_num; i++){
            $(".sq_b").append('.square')
            /*$('.div').addClass(".square")*/
        if(sq_num=="1")
          {
              $('.sq_b').addclass(".square")
          }
    });
});
