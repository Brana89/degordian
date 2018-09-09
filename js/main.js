//Second section smaller screen collapsible sections
var coll = document.getElementsByClassName("title");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

//Function for showing navbar when user starts scrolling up
$(document).ready(function () {
  var previousScroll = 0;
  $(window).scroll(function () {
    var currentScroll = $(this).scrollTop();
    if (currentScroll > 0 && currentScroll < $(document).height() - $(window).height()) {
      if (currentScroll > previousScroll) {
        window.setTimeout(hideNav, 300);
      } else {
        window.setTimeout(showNav, 300);
      }
      previousScroll = currentScroll;
    }
  });
  function hideNav() {
    $("[data-nav-status='toggle']").removeClass("is-visible").addClass("is-hidden");
  }
  function showNav() {
    $("[data-nav-status='toggle']").removeClass("is-hidden").addClass("is-visible");
  }
});

//Function for opening and closing burger menu
$(document).ready(function () {
  $('#nav-icon3').click(function () {
    $(this).toggleClass('open');
  });
});

$(document).ready(function () {
  $('.toggle').click(function () {
    $('.responsive-menu').toggleClass('expand');
  });
});
 
 //Button for smooth scrolling to top of the page
$(document).ready(function () {

  $(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }
  });
  //Click event za scroll ka vrhu
  $('.scrollToTop').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
  });
});
 
 //Character counter in form input fields
$(document).ready(function () {
  var text_max = 30;
  $('#textarea_feedback').html(text_max + ' / 30');

  $('#counter').keyup(function () {
    var text_length = $('#counter').val().length;
    var text_remaining = text_max - text_length;
    $('#textarea_feedback').html(text_remaining + ' / 30');
    if (text_remaining == 0) {
      $('#textarea_feedback').css('color', 'rgb(230,0,40)');
    } else {
      $('#textarea_feedback').css('color', '#000');
    }

  });
});
$(document).ready(function () {
  var text_max = 250;
  $('#textarea_feedback2').html(text_max + ' / 250');

  $('#counter2').keyup(function () {
    var text_length = $('#counter2').val().length;
    var text_remaining = text_max - text_length;

    $('#textarea_feedback2').html(text_remaining + ' / 250');
    if (text_remaining == 0) {
      $('#textarea_feedback2').css('color', 'rgb(230,0,40)');
    } else {
      $('#textarea_feedback2').css('color', '#000');
    }
  });
});
 
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
  $(".slideDown, .main-nav li a").on('click', function(event) {

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
var $animation_elements_three = $('.animation-element-three');
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

  $.each($animation_elements_three, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view-three');
    } else {
      $element.removeClass('in-view-three');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');


// RegExp for form validation
function formValidation(myform) {
  //mail regExp
  let mailRegExp = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;

  // Mandatory fields
  if(myform.email.value == "" || myform.email.value == null) {
    let err = document.querySelector('form h3').textContent = "Oba polja su obavezna";
    return false;
  }
  if(myform.msg.value == "" || myform.msg.value == null) {
    let err = document.querySelector('form h3').textContent = "Oba polja su obavezna";
    return false;
  }

  // Format email in a right way, else issue warning
  if(mailRegExp.test(myform.email.value)){
    return true;
  }
  else{
    let err = document.querySelector('form h3').textContent = "Proverite format email adrese";
    return false;
  }
}
//End of Form Validation




