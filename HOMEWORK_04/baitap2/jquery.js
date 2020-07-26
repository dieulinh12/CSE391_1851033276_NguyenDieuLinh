$(document).ready(function(){
    $("#sltScaleTime").on('change',function(){
        var sq_num=$('this').val();
        $(".scale-time-detail").html("");
        for(let i=0; i<sq_num; i++){
            $(".scale-time-detail").append("<div class='scale-time-time1'></div>")
        }
    });
});
