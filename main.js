$(document).ready(function(){

    //ARROW SCROLL
    $(".glyphicon").click(function() {
        $('html,body').animate({
            scrollTop: $("#about").offset().top},
                               'slow');    
    })

    //NAV BORDER APPEAR WHEN SCROLL
    function navBorder() { 
     if (window.matchMedia("(min-width: 600px)").matches) {
        $(window).scroll(function() {
            // checks if window is scrolled more than 500px, adds/removes solid class
            if($(this).scrollTop() > 1) { 
                $('.navbar').addClass('solid');
            } else {
                $('.navbar').removeClass('solid');
            }
        });
     }
    }
    navBorder();
    
    //NAV BAR BUTTON SCROLL
    function scrollNav() {
        $('.navbar a').click(function(){  
            //Toggle Class
            $(".actived").removeClass("actived");      
            $(this).closest('li').addClass("actived");
            var theClass = $(this).attr("class");
            $('.'+theClass).parent('li').addClass('actived');
            //Animate
            $('html, body').stop().animate({
                scrollTop: $( $(this).attr('href') ).offset().top - 160
            }, 400);
            return false;
        });
    //$('.scrollTop a').scrollTop();
    }
    scrollNav(); 
    
    //HAMBURGER MENU TOGGLE
    function hamburgerToggle() {
        if (window.matchMedia("(max-width: 600px)").matches) {
            $('.navbar').hide();
        }
        $('#burger').click(function(){
            $('.navbar').addClass('mobileSolid');
            $('.navbar, .mobileSolid').slideToggle("fast");
        });
    }
    hamburgerToggle();
    
});
