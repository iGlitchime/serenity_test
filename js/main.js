/**
 * Created by IATS on 02.04.17.
 */

//$(document).ready(function(){
//    $('a[href*=#]').bind("click", function(e){
//        var anchor = $(this);
//        var offsetTop = $(anchor.attr('href')).offset().top;
//        $('html, body').stop().animate({
//            scrollTop: offsetTop
//        }, 1000);
//        e.preventDefault();
//    });
//    return false;
//});

$(document).ready(function() {

    var page2 = document.getElementById('page-2');
    $('a').click(function(){
        $('body').animate({scrollTop:page2.offsetTop}, 'slow');
        return false;
    });


    $(".info-more").click(function(){
        var block = $(this).parent().parent();
        block.find('> div').toggleClass('active').toggleClass('hidden');
    });

    $("#mobMenu, #closeMenu").click(function(){
        $('#menuFullscreen').toggleClass('hide');
    });



})
