/**
 * Created by Administrator on 2017/10/15.
 */
window.onload=function () {
    var d2=new Date("01/23/2018");
   setInterval(function () {
       var now=new Date();
       var second=d2.getTime()-now.getTime();
       //second是毫秒，要换算成秒
       second=parseInt(second/1000);
       var s=parseInt(second%60);//秒
       var h=parseInt(second/3600%60);//时
       var d=parseInt(second/(3600*24));//天
       if (s<10){
           s='0'+s;
       }
       if (h<10){
           h='0'+h;
       } if (d<10){
           d='0'+d;
       }
       var day=document.getElementById('day');
       day.innerHTML=d;
       var hours=document.getElementById('hours');
       hours.innerHTML=h;
       var second=document.getElementById('second');
       second.innerHTML=s;
   },500)
};

//动画部分
$(function () {
   $('#seckill .content_lt').hover(function () {
        $(this).children('span').show();
   },function () {
       $(this).children('span').hide();
   });

    //content_lt
    var index=0;
    $('#jd_seckill .pointer_rgt').click(addIndex);
    //进入下一组函数
    function addIndex(){
        index +=1;
        if (index>3) {
            index=3;
        }
        $('#jd_seckill .btm ul').animate({left:(-index*1000)}, 1000,"swing");
        return index;
    };

    //上一组函数
    $('#jd_seckill .pointer_lt').click(function () {
        index -=1;
        if (index<0) {
           index=0
        }
        $('#jd_seckill .btm ul').animate({left:(-index*1000)}, 1000,"swing");
    });

});
$(function () {
    //content_rgt
    var num=0;
    //鼠标移入到圆点上
    $('#jd_seckill .btm span').mouseenter(function () {
        // alert($(this).index())
        num=$(this).index();
        // alert(num)
        $('#jd_seckill .content_rgt li').eq(num).fadeIn(1000).siblings().fadeOut();
        $(this).addClass('curent').siblings().removeClass('curent');
    });
    //自动跳转
    var timer2=null;
    timer2=setInterval(addIndex,1500);
    function addIndex(){
        num++;
        if (num>$("#jd_seckill .content_rgt li").length-1) {
            num=0;
        }
        //控制图片
        $("#jd_seckill .content_rgt li").eq(num).fadeIn(1000).siblings().fadeOut();
        //控制原点
        $('#jd_seckill .content_rgt span').eq(num).addClass('curent').siblings().removeClass('curent');
        return num;
    }
    //鼠标放上去停止跳转
    $("#jd_seckill .content_rgt").hover(function () {
        clearInterval(timer2)
    },function () {
        timer2=setInterval(addIndex,1500);
    });
});