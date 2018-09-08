 //Slideshow with captions, image indicators and arrows
 var slideIndex = 1;
 showDivs(slideIndex);
 
 function plusDivs(n) {
   showDivs(slideIndex += n);
 }
 function currentDiv(n) {
   showDivs(slideIndex = n);
 }
 function showDivs(n) {
     var t;
     var text = document.getElementsByClassName('w3-display-bottomleft');
   var i;
   var x = document.getElementsByClassName("mySlides");
   var dots = document.getElementsByClassName("demo");
   if (n > x.length) {slideIndex = 1}    
   if (n < 1) {slideIndex = x.length}
   for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
   }
   for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-red", "");
   }
   x[slideIndex-1].style.display = "block";  
   dots[slideIndex-1].className += " w3-red";
   for(t = 0; t < text.length; t++) {
         text[t].style.animation += "textAnimation 2s ease forwards";
      } 
 }

$(document).ready(function() {
  // Add smooth scrolling to all links in navbar + footer link
  $(".slideDown").on('click', function(event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {

          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
              scrollTop: $(hash).offset().top
          }, 900, function() {

              // Add hash (#) to URL when done scrolling (default click behavior)
              window.location.hash = hash;
          });
      } // End if
  });
})

var $animation_elements = $('.animation-element');
var $animation_elements_two = $('.animation-element-two');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });

  $.each($animation_elements_two, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view-two');
    } else {
      $element.removeClass('in-view-two');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');



