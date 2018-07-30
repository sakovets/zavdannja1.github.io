
$(document).ready(function(){


    $('.menuToggle').on('click', function() {
        $('.bigmenu').slideToggle(300, function(){
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');
            }
        });

    });




    $(".b-carousel-button-right").click(function(){
        $(".h-carousel-items").animate({left: "-222px"}, 200);
        setTimeout(function () {
            $(".h-carousel-items .b-carousel-block").eq(0).clone().appendTo(".h-carousel-items");
            $(".h-carousel-items .b-carousel-block").eq(0).remove();
            $(".h-carousel-items").css({"left":"0px"});
        }, 300);
    });

    $(".b-carousel-button-left").click(function(){
        $(".h-carousel-items .b-carousel-block").eq(-1).clone().prependTo(".h-carousel-items");
        $(".h-carousel-items").css({"left":"-222px"});
        $(".h-carousel-items").animate({left: "0px"}, 200);
        $(".h-carousel-items .b-carousel-block").eq(-1).remove();
    });

});