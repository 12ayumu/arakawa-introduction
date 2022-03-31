$(function(){
    
    $(".nav-p").hover(function(){
        $(this).children("ul").stop().slideToggle(300);
    });
    
    /*表示・非表示*/

    /*
    $(".startBtn").click(function(){
        $(this).hide();
        //alert($("#msg").attr("class"));
        if($("#msg").hasClass("hide")){
            $("#msg").fadeIn(1000);
            $("#msg").removeClass("hide");
            $("#msg").addClass("show");
        }else if($("#msg").hasClass("show")){
            $("#msg").fadeOut(300);;
            $("#msg").removeClass("show");
            $("#msg").addClass("hide");
        }
    });
    */
    
    /*
    $.when(
        
        console.log($("#msg").fadeIn(4000)),
        console.log($("#msg").fadeOut(3000))
        
    ).done(function(){
        
        alert("aaaaa");
        console.log($("#introduce").fadeIn(4000));
        console.log($("#introduce").fadeOut(3000));
        
    });
    */
    
    var a = 500;
    var b = 500;
    $("#msg").fadeIn(a);
    $("#msg").fadeOut(b,
    function(){
        $("#introduce").fadeIn(a);
        $("#introduce").fadeOut(b,
        function(){
            

            //var hito = $(".main-contents h1").offset().top;
            
            $(".main-contents").fadeIn(1000);
            $(".top").fadeIn(2000);
            
        });
    });
    
    $(".top").click(function(){
        $("html, body").animate({scrollTop : 0}, 200);
        return false;
    });
    
    //alert($(window).height());
    
    /*スクロール時の処理*/
    var topCrt = $(".top").offset().top;
    /*フローチャート*/
    $(window).scroll(function(){
        var elemPos1 = 910;
        var elemPos2 = 1612;
        var elemPos3 = 2314;
        var elemPos4 = 3016;
        var elemPos5 = 3718;
        var elemPos6 = 4404;
        var elemPos7 = 5122;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        
        $(".top").animate({"top" : $(window).scrollTop() + 20},0);
        
        $(".hito").animate({"top" : $(window).scrollTop() + 10},10);
        
        if($(window).scrollTop() + 500 >= 1000 && $(window).scrollTop() + 500 < 1300 && $(".hito").hasClass("show")){
            $(".hito").fadeOut(200);
            $(".hito").addClass("hide");
            $(".hito").removeClass("show");
        }else if($(window).scrollTop() + 500 < 1000 && $(window).scrollTop() + 500 >= 700 && $(".hito").hasClass("hide")){
            $(".hito").fadeIn(200);
            $(".hito").addClass("show");
            $(".hito").removeClass("hide");
        }
        
        if($(window).scrollTop() + 500 >= 1300 && $(window).scrollTop() + 500 < 1700 && $(".hito").hasClass("hide")){
            $(".hito").fadeIn(200);
            $(".hito").addClass("show");
            $(".hito").removeClass("hide");
        }else if($(window).scrollTop() + 500 >= 1750 && $(window).scrollTop() + 500 < 1800 && $(".hito").hasClass("show")){
            $(".hito").fadeOut(200);
            $(".hito").addClass("hide");
            $(".hito").removeClass("show");
        }
        
        if($(window).scrollTop() + 500 >= 2050 && $(window).scrollTop() + 500 < 2100 && $(".hito").hasClass("hide")){
            $(".hito").fadeIn(200);
            $(".hito").addClass("show");
            $(".hito").removeClass("hide");
        }else if($(window).scrollTop() + 500 >= 1950 && $(window).scrollTop() + 500 < 2000 && $(".hito").hasClass("show")){
            $(".hito").fadeOut(200);
            $(".hito").addClass("hide");
            $(".hito").removeClass("show");
        }
        
        if($(window).scrollTop() + 500 >= 2450 &&$(window).scrollTop() + 500 < 2500 && $(".hito").hasClass("show")){
            $(".hito").fadeOut(200);
            $(".hito").addClass("hide");
            $(".hito").removeClass("show");
        }else if($(window).scrollTop() + 500 >= 2400 &&$(window).scrollTop() + 500 < 2450 && $(".hito").hasClass("hide")){
            $(".hito").fadeIn(200);
            $(".hito").addClass("show");
            $(".hito").removeClass("hide");
        }
        
        if($(window).scrollTop() + 500 >= 2750 && $(window).scrollTop() + 500 < 2800 && $(".hito").hasClass("hide")){
            $(".hito").fadeIn(200);
            $(".hito").addClass("show");
            $(".hito").removeClass("hide");
        }else if($(window).scrollTop() + 500 >= 2700 && $(window).scrollTop() + 500 < 2750 && $(".hito").hasClass("show")){
            $(".hito").fadeOut(200);
            $(".hito").addClass("hide");
            $(".hito").removeClass("show");
        }
        
        if($(window).scrollTop() + 500 >= 3150 &&$(window).scrollTop() + 500 < 3200 && $(".hito").hasClass("show")){
            $(".hito").fadeOut(200);
            $(".hito").addClass("hide");
            $(".hito").removeClass("show");
        }else if($(window).scrollTop() + 500 >= 3100 &&$(window).scrollTop() + 500 < 3150 && $(".hito").hasClass("hide")){
            $(".hito").fadeIn(200);
            $(".hito").addClass("show");
            $(".hito").removeClass("hide");
        }
        
        if($(window).scrollTop() + 500 >= 3450 && $(window).scrollTop() + 500 < 3500 && $(".hito").hasClass("hide")){
            $(".hito").fadeIn(200);
            $(".hito").addClass("show");
            $(".hito").removeClass("hide");
        }else if($(window).scrollTop() + 500 >= 3400 && $(window).scrollTop() + 500 < 3450 && $(".hito").hasClass("show")){
            $(".hito").fadeOut(200);
            $(".hito").addClass("hide");
            $(".hito").removeClass("show");
        }
        
        if($(window).scrollTop() + 500 >= 3900 &&$(window).scrollTop() + 500 < 3950 && $(".hito").hasClass("show")){
            $(".hito").fadeOut(200);
            $(".hito").addClass("hide");
            $(".hito").removeClass("show");
        }else if($(window).scrollTop() + 500 >= 3850 && $(window).scrollTop() + 500 < 3900 && $(".hito").hasClass("hide")){
            $(".hito").fadeIn(200);
            $(".hito").addClass("show");
            $(".hito").removeClass("hide");
        }
        
        if($(window).scrollTop() + 500 >= 4200 && $(window).scrollTop() + 500 < 4250 && $(".hito").hasClass("hide")){
            $(".hito").fadeIn(200);
            $(".hito").addClass("show");
            $(".hito").removeClass("hide");
        }else if($(window).scrollTop() + 500 >= 4150 && $(window).scrollTop() + 500 < 4200 && $(".hito").hasClass("show")){
            $(".hito").fadeOut(200);
            $(".hito").addClass("hide");
            $(".hito").removeClass("show");
        }
        
        if($(window).scrollTop() + 500 >= 4625 &&$(window).scrollTop() + 500 < 4675 && $(".hito").hasClass("show")){
            $(".hito").fadeOut(200);
            $(".hito").addClass("hide");
            $(".hito").removeClass("show");
        }else if($(window).scrollTop() + 500 >= 4575 && $(window).scrollTop() + 500 < 4625 && $(".hito").hasClass("hide")){
            $(".hito").fadeIn(200);
            $(".hito").addClass("show");
            $(".hito").removeClass("hide");
        }
        
        if($(window).scrollTop() + 500 >= 4925 && $(window).scrollTop() + 500 < 4975 && $(".hito").hasClass("hide")){
            $(".hito").fadeIn(200);
            $(".hito").addClass("show");
            $(".hito").removeClass("hide");
        }else if($(window).scrollTop() + 500 >= 4875 && $(window).scrollTop() + 500 < 4925 && $(".hito").hasClass("show")){
            $(".hito").fadeOut(200);
            $(".hito").addClass("hide");
            $(".hito").removeClass("show");
        }
        
        if($(window).scrollTop() + 500 >= 5300 &&$(window).scrollTop() + 500 < 5350 && $(".hito").hasClass("show")){
            $(".hito").fadeOut(200);
            $(".hito").addClass("hide");
            $(".hito").removeClass("show");
        }else if($(window).scrollTop() + 500 >= 5250 && $(window).scrollTop() + 500 < 5300 && $(".hito").hasClass("hide")){
            $(".hito").fadeIn(200);
            $(".hito").addClass("show");
            $(".hito").removeClass("hide");
        }
        
        if($(window).scrollTop() + 500 >= 5600 && $(window).scrollTop() + 500 < 5650 && $(".hito").hasClass("hide")){
            $(".hito").fadeIn(200);
            $(".hito").addClass("show");
            $(".hito").removeClass("hide");
        }else if($(window).scrollTop() + 500 >= 5550 && $(window).scrollTop() + 500 < 5600 && $(".hito").hasClass("show")){
            $(".hito").fadeOut(200);
            $(".hito").addClass("hide");
            $(".hito").removeClass("show");
        }
        
        if($(window).scrollTop() + 500 >= 6200 &&$(window).scrollTop() + 500 < 6250 && $(".hito").hasClass("show")){
            $(".hito").fadeOut(200);
            $(".hito").addClass("hide");
            $(".hito").removeClass("show");
        }else if($(window).scrollTop() + 500 >= 6150 && $(window).scrollTop() + 500 < 6200 && $(".hito").hasClass("hide")){
            $(".hito").fadeIn(200);
            $(".hito").addClass("show");
            $(".hito").removeClass("hide");
        }
        
        if(elemPos7 > 0){
            if(scroll >= elemPos1 - windowHeight / 2){
                $('#hide1').hide();
                $('#content1').animate({width: 'show'},1000);
            }
            if(scroll >= elemPos2 - windowHeight / 2){
                $('#hide2').hide();
                $('#content2').animate({width: 'show'},1000);
            }
            if(scroll >= elemPos3 - windowHeight / 2){
                $('#hide3').hide();
                $('#content3').animate({width: 'show'},1000);
            }
            if(scroll >= elemPos4 - windowHeight / 2){
                $('#hide4').hide();
                $('#content4').animate({width: 'show'},1000);
            }
            if(scroll >= elemPos5 - windowHeight / 2){
                $('#hide5').hide();
                $('#content5').animate({width: 'show'},1000);
            }
            if(scroll >= elemPos6 - windowHeight / 2){
                $('#hide6').hide();
                $('#content6').animate({width: 'show'},1000);
            }
            if(scroll >= elemPos7 - windowHeight / 2){
                $('#hide7').hide();
                $('#content7').animate({width: 'show'},1000);
            }
        }
    });
    
    var count = 0;
    $('#id-btn').click(function(){
        if($('#id-img1').hasClass('appear')){
            count++;
            $('#id-img1').hide();
            $('#id-img2').show();
            $('#id-img1').removeClass('appear');
            $('#id-img1').addClass('hidden');
            $('.count').text(count + "回");
        }else if($('#id-img1').hasClass('hidden')){
            $('#id-img2').hide();
            $('#id-img1').show();
            $('#id-img1').removeClass('hidden');
            $('#id-img1').addClass('appear');
        }
    });
    
    
});