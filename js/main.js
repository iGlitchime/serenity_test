/**
 * Created by IATS on 02.04.17.
 */


//var menuFullscreen = document.getElementById('menuFullscreen');
//var mainPage = document.getElementById('page1');
//
//document.getElementById("mobMenu").addEventListener("click", function(){
//
//    menuFullscreen.style.opacity = "1";
//    mainPage.style.opacity = "0";
//
//});
//
//document.getElementById("closeMenu").addEventListener("click", function(){
//
//    menuFullscreen.style.opacity = "0";
//    mainPage.style.opacity = "1";
//
//});


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

//    $("#mobMenu, #closeMenu").click(function(){
//        var menuFullscreen = document.getElementById('menuFullscreen');
//        var mainPage = document.getElementById('#page1');
//
//        if(menuFullscreen.style.opacity == 0){
//            menuFullscreen.style.opacity = "1";
//            mainPage.style.opacity = "0";
//
//            menuFullscreen.style.left = "0";
//            mainPage.style.right = "-" + window.innerWidth + "px";
//
//        } else{
//            menuFullscreen.style.opacity = "0";
//            menuFullscreen.style.left = "-" + window.innerWidth + "px";
//            mainPage.style.opacity = "1";
//            mainPage.style.right = "0";
//        }
//        //$('#menuFullscreen').toggleClass('hide');
//    });
//

});

