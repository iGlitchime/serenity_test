/**
 * Created by IATS on 02.04.17.
 */

//$(document).ready(function(){
//    $('a[href*=#]').bind("click", function(e){
//        var anchor = $(this);
//        $('html, body').stop().animate({
//            scrollTop: $(anchor.attr('href')).offset().top
//        }, 1000);
//        e.preventDefault();
//    });
//    return false;
//});

//$("#myCarousel").carousel();
//$("#xsCarousel").carousel(); //сократить загрузку, если не девайс




/* ---- begin change block ---- */
$(document).ready(function(){
    $(".info-more").click(function(){
        var block = $(this).parent().parent();
        block.find('> div').toggleClass('active').toggleClass('hidden');
    });
});