/**
 * Created by Administrator on 2017/10/18.
 */
$(function () {
    //滚动弹出
   $(window).scroll(function () {
       if ($(window).scrollTop()>600){
            $('#leftsidebar').show();
       }else {
           $('#leftsidebar').hide();
       }
   });

    //li鼠标滑过事件
    $('#leftsidebar li').mouseenter(function () {
        $(this).addClass('current').siblings().removeClass('current');
    });
    //点击回到顶部
    $('#leftsidebar .toTop').on('click',function () {
        //缓慢上去
        $("html,body").animate({scrollTop:0},2000,"swing");
    })
});