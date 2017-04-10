/**
 * Created by IATS on 02.04.17.
 */

$(document).ready(function() {
//
    var page2 = document.getElementById('page2');
    $('a').click(function(){
        $('body').animate({scrollTop:page2.offsetTop}, 'slow');
        return false;
    });


    $(".info-more").click(function(){
        var block = $(this).parent().parent();
        block.find('> div').toggleClass('active').toggleClass('hidden');
    });


    $("#mobMenu, #closeMenu").click(function(){
        var menuFullscreen = document.getElementById('menuFullscreen');

        if(menuFullscreen.style.opacity == 0){
            menuFullscreen.style.opacity = "1";
            menuFullscreen.style.left = "0";

        } else{
            menuFullscreen.style.opacity = "0";
            menuFullscreen.style.left = "-" + window.innerWidth + "px";
        }
    });

});







