
$(document).ready (function() {


    // Loading
    $(window).on ("load", function() {

        $(".bodyloading").hide();

    });
    // WOW

    new WOW().init();

    ////////////////////////////////////////////////////////////////////

    // Tilt.js

    $('.box-items').tilt();
    $('.about .left').tilt();
    $('.bctm .right').tilt();
    $('button').tilt();
    $(".worry .row div").tilt();

    ///////////////////////////////////////////////////////////////////

    document.onclick = animateCircles;

    var colors = ['#ffa602'];

    var animate = document.getElementById("animate");
    
    function animateCircles (event) {
    
        var circle = document.createElement('div');
        circle.setAttribute('class', 'circle');
        animate.appendChild(circle);
    
        circle.style.left = event.clientX + 'px';
        circle.style.top = event.clientY + 'px';
    
        circle.style.borderColor = colors;
    
        circle.style.transition = "all .6s linear 0s";
        circle.style.left = circle.offsetLeft - 20 + 'px';
        circle.style.top = circle.offsetTop - 20 + 'px';
    
        circle.style.opacity = .5;
        circle.style.height = '40px';
        circle.style.width = '40px';
        circle.style.borderRadius = '10px'
        circle.style.borderWidth = '5px';
        circle.style.opacity = 0;
        circle.style.zIndex = -1;

    }

    //////////////////////////////////////////////////////////////////////////////////////

    // NavBar On Click

    $("nav ul li").click(function () {
       
        $(this).addClass("active").siblings().removeClass("active");

    });

    ///////////////////////////////////////////////////////////////////////////////////////

    // Box-Search

    $("nav ul .search").click(function (){
       
        $(".box-search").css({

            transform: "scale(1)"

        });

        $(".box-search input").focus();

    });

    $(".box-search i").click(function () {
        
        $(".box-search").css({

            transform: "scale(0)"

        });

    });

    //////////////////////////////////////////////////////////////////////////////////////////

    // Carousel

    $(".carousel, .carousel-inner").height( $(window).height() - ( $(".upper-bar").innerHeight() + $("nav").innerHeight() ) );

    $(window).resize(function () {
        
        $(".carousel, .carousel-inner").height( $(window).height() - ( $(".upper-bar").innerHeight() + $("nav").innerHeight() ) );

    });















});