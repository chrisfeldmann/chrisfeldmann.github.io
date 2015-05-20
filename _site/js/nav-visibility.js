$(function(){
    $(window).scroll(function() { 
        if ($(this).scrollTop() > 75) { 
            $("#navbar-fixed-top .navbar-brand:hidden").css('visibility','visible');   
            $("#navbar-fixed-top .navbar-brand:hidden").fadeIn('slow');  
        } 
        else {     
            $("#navbar-fixed-top .navbar-brand:visible").fadeOut("slow"); 
        }  
    });
});