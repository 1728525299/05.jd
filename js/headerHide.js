/**
 * Created by Administrator on 2017/10/18.
 */
$(function () {
    $(window).scroll(function(){
        if($(window).scrollTop()>=600){
            $("#header_hide").show();
        }else {
            $("#header_hide").hide();
        }
    })
});
