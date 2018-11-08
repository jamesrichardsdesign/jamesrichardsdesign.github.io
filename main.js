$(document).ready(function(){
   $(".glyphicon").click(function() {
    $('html,body').animate({
        scrollTop: $("#about").offset().top},
        'slow');    
});
  $(window).scroll(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class
          if($(this).scrollTop() > 1) { 
              $('.navbar').addClass('solid');
          } else {
              $('.navbar').removeClass('solid');
          }
        });
    
});
