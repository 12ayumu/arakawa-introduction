$(function(){
    $(".nav-p").hover(function(){
        $(this).children("ul").stop().slideToggle(300);
    });
    
    $(".howtop").click(function(){
        $("html, body").animate({scrollTop : 0}, 200);
        return false;
    });
    
    $(window).scroll(function(){
        $(".howtop").animate({"top" : $(window).scrollTop() + 20},0);
    });
    
    AOS.init();
});