/**
 * Created by Administrator on 2017/10/11.
 */
$(function () {
    /*top部分*/
    //城市部分
    $("#top .top_box .addres").mouseenter(function(){
        $(" #top .top_box .site_nav_city").show();
    });
    $("#top .top_box  #addres").mouseleave(function(){
        $("#top .top_box .site_nav_city").hide();
        // $(this).parent(':first-child').css('background','red')
    });
    $(".site_nav_city li").click(function () {
        $(this).css("backgroundColor","#f10215").children().css("color","#fff");
        $(this).siblings().css("backgroundColor","#fff").children().css("color","#999");

        //处理文字
        var cityName=$(this).text();
        $("#top .top_box .addres").html('<img src="img/addres.png">'+cityName);

    });

      // my_jd
    $("#top .top_ul .prt .my_jd_a").mouseenter(function(){
        $(this).next(".my_jd").show();
    });
    $("#top .top_ul .prt").mouseleave(function(){
        $('#top .top_ul .prt .my_jd_a').next(".my_jd").hide();
    });

    //urlNav
    $(' #top .top_ul #urlNav .url-top .url-a').mouseenter(function () {
        $('#urlNav .url-nav').show();
    });
    $("#urlNav").mouseleave(function(){
        $('#urlNav .url-nav').hide();
    });

    //serve
    $(' #top .top_ul .serve-a').mouseenter(function () {
        $('#top .top_ul .serve').show();
    });
    $("#top .top_ul #serve").mouseleave(function(){
        $('#top .top_ul .serve').hide();
    });
    //jd-phone
    $(' #top .top_ul .jd-phone-a').mouseenter(function () {
        $('#top .top_ul .jd-phone').show();
    });
    $("#top .top_ul #jd-phone").mouseleave(function(){
        $('#top .top_ul .jd-phone').hide();
    });
});