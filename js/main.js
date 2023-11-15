$(function(){

    $('.go-top').click(function(e){
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop : 0
        }, 500)
    });



})