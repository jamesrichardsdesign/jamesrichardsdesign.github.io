$(document).ready(function(){

    //ARROW SCROLL
    $(".glyphicon").click(function() {
        $('html,body').animate({
            scrollTop: $("#about").offset().top},
                               'slow');    
    })
    
    //ABOUT BUTTON SCROLL
    $(".abt").click(function() {
        $('html,body').animate({
            scrollTop: $("#about").offset().top},
                               'slow');
        })
    //PROJECTS BUTTON SCROLL
    $(".prjcts").click(function() {
        $('html,body').animate({
            scrollTop: $("#projects").offset().top},
                               'slow');
    })
    
    //CONTACT BUTTON SCROLL
    $(".cntct").click(function() {
        $('html,body').animate({
            scrollTop: $("#contact").offset().top},
                               'slow');
    })
    
    //NAV BORDER APPEAR WHEN SCROLL
    $(window).scroll(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class
        if($(this).scrollTop() > 1) { 
            $('.navbar').addClass('solid');
        } else {
            $('.navbar').removeClass('solid');
        }
    })

});
    
