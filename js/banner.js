/**
 * Created by Administrator on 2017/10/14.
 */
$(function () {
   var index=0;
    var setInt=null;
    setInt=setInterval(addIndex,6000);

    //鼠标放上去停止轮播
    $('.banner_cent').hover(function () {
       clearInterval(setInt)
    },function () {
        setInt=setInterval(addIndex,6000);
    });

    //点击下一张
    $('.banner_cent .point_gt').click(addIndex);

    //图片跳转
    function addIndex() {
        index++;
       if(index>$('.banner_cent .point_cent li').length-1){
           index=0;
       }
        $('.banner_cent .banner_img li').eq(index).fadeIn(1000).siblings().fadeOut();
        //控制原点跟随跳转
        $('.banner_cent .point_cent li').eq(index).addClass('current').siblings().removeClass('current');
    };

    //点击上一张
    $('.banner_cent .point_lt').click(function () {
       index--
        if(index<0){
            index=$('.banner_cent .point_cent li').length-1;
        }
        $('.banner_cent .banner_img li').eq(index).fadeIn(1000).siblings().fadeOut();
        //控制原点跟随跳转
        $('.banner_cent .point_cent li').eq(index).addClass('current').siblings().removeClass('current');
    });

    //鼠标移入到圆点上
    $('.banner_cent .point_cent li').mouseenter(function () {
      // alert($(this).index())
        index=$(this).index();
        $('.banner_cent .banner_img li').eq(index).fadeIn(1000).siblings().fadeOut();

        $(this).addClass('current').siblings().removeClass('current');
    });


    //右侧新闻切换部分
        $('.news span').mouseenter(function () {
            var index=$(this).index();
            $('.news .content>div').eq(index).show().siblings().hide();
        })
});