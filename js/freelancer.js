/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


//CHRIS FELDMANN ADDED : NAV BRAND AND SCROLL TOP BUTTON HIDDEN UNTIL SCROLL TO FIRST SECTION
 //when the DOM has loaded
    $(document).ready(function() {

        //attach some code to the scroll event of the window object
        //or whatever element(s) see http://docs.jquery.com/Selectors
        $(window).scroll(function () {
              var height = $('html').height() || $('body').scrollTop();
              var scrollTop = $('html').scrollTop() || $('body').scrollTop();
              var opacity =1;

              // do some math here, by placing some condition or formula
              if(scrollTop > 500) {
                  opacity = 1;
                  
              }

              if (scrollTop < 500){
                opacity = 0;
               
              }

              //set the opacity of div id=".navbar-brand" and ".scroll-top" 
              $('.navbar-brand').css('opacity', opacity);
              $('.scroll-top').css('opacity', opacity);
              

        });
   
   // });

    // CHRIS FELDMANN ADDED : NAV BAR DEFAULT BACKGROUND COLOR ZERO OPACITY UNTIL SCROLL TO FIRST SECTION

    $(document).on('scroll', function (e) {

     var alpha = $(document).scrollTop() / 500;

     // GREEN COLOR PALETTE NAV BAR BELOW
     // $('.navbar-default').css('background-color', 'rgba(104, 159, 56,' + alpha + ')');
     // BLUE GREY COLOR PALETTE NAV BAR BELOW
     $('.navbar-default').css('background-color', 'rgba(38, 50, 56,' + alpha + ')');
});

    });

// CHRIS FELDMANN ADDED: STOP VIDEO WHEN MODAL CLOSES
$(function(){
  $("body").on('hidden.bs.modal', function (e) {
    var $iframes = $(e.target).find("iframe");
    $iframes.each(function(index, iframe){
      $(iframe).attr("src", $(iframe).attr("src"));
    });
  });
});
