/**
 * Created by Administrator on 2017/10/17.
 */
$(function () {
   $('#shopping_guide .tab li').mouseenter(function () {
      $(this).addClass('linerbtm').siblings().removeClass('linerbtm');
       var index=$(this).index();
       $('#shopping_guide .content .list').eq(index).addClass('current').siblings().removeClass('current');
   });

});