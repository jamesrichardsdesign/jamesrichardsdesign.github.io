/*
to do- 9/24/18:
    1.make sections for about, projects, contacts
    2.make scroll button work
    3.make navigation buttons scroll to their respective sections

to do- 10/15/18
    1. fill out sections
    2. make scroll button work, scroll to about, draw circle animation when hovered
    3. make nav buttons scroll to their respective sections
    4. make nav bar border appear when it gets to about section
    5. border animation when hovered
    6. make text fade out on scroll

to do- 10/16/18
    1. fuck scroll arrow circle animation, make it jump or shimmer or something. CHECK
    2. NAV BAR CHECK
    3. Make scroll arrow  work CHECK
    4. make js, html, and css icons appear in about section when scrolled to first time
    5.make contact info work
    6.make everything look good when window is resized
    7. tweak and fit for mobile
    8. "coming soon" text appear from sides when scrolled to first time
*/

$(document).ready(function(){
   $(".glyphicon").click(function() {
    $('html,body').animate({
        scrollTop: $("#about").offset().top},
        'slow');    
});
  $(window).scroll(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class
          if($(this).scrollTop() > 900) { 
              $('.navbar').addClass('solid');
          } else {
              $('.navbar').removeClass('solid');
          }
        });
    
});