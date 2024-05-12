// dropdown hover 

const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function () {
    if (this.matchMedia("(min-width: 768px)").matches) {
        $dropdown.hover(
            function () {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function () {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
        );
    } else {
        $dropdown.off("mouseenter mouseleave");
    }
});


$(function () {

    "use strict";

    var wind = $(window);



    // scrollIt
    $.scrollIt({
        upKey: 38,                // key code to navigate to the next section
        downKey: 40,              // key code to navigate to the previous section
        easing: 'swing',          // the easing function for animation
        scrollTime: 600,          // how long (in ms) the animation takes
        activeClass: 'active',    // class given to the active nav element
        onPageChange: null,       // function(pageIndex) that is called when page is changed
        topOffset: -70            // offste (in px) for fixed top navigation
    });



    // navbar scrolling background
    wind.on("scroll", function () {

        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar"),
            logo = $(".navbar .logo> img");

        if (bodyScroll > 100) {

            navbar.addClass("nav-scroll");
            logo.attr('src', 'img/logo.png');

        } else {

            navbar.removeClass("nav-scroll");
            logo.attr('src', 'img/logo.png');
        }
    });


    // close navbar-collapse when a  clicked
    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });


    // underline effect
    $(".underline").on("click", ".nav-item", function () {

        $(this).addClass("active").siblings().removeClass("active");

    });



    var c4 = $('.circle');
    var myVal = $(this).attr('data-value');

    $(".sk-progress .circle").each(function () {

        c4.circleProgress({
            startAngle: -Math.PI / 2 * 1,
            value: myVal,
            thickness: 4,
            fill: {
                gradient: ["#000", "#999"]
            }
        });

    });



    // sections background image from data background
    var pageSection = $(".bg-img, section");
    pageSection.each(function (indx) {

        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });


    // === owl-carousel === //

    // Testimonials owlCarousel
    $('.testimonials .owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        margin: 15,
        mouseDrag: false,
        autoplay: true,
        smartSpeed: 500
    });

    // Featurse img
    $('.fimg .owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        margin: 0,
        animateOut: 'fadeOut',
        mouseDrag: false,
        autoplay: true,
        dots: false,
        smartSpeed: 500
    });

    // Services owlCarousel
    $('.services .owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        mouseDrag: true,
        autoplay: true,
        dotsEach: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    // === End owl-carousel === //


    // magnificPopup
    $('.gallery').magnificPopup({
        delegate: '.popimg',
        type: 'image',
        gallery: {
            enabled: true
        }
    });


    // countUp
    $('.numbers .count').countUp({
        delay: 10,
        time: 1500
    });

    // YouTubePopUp
    $("a.vid").YouTubePopUp();


});


// === window When Loading === //

$(window).on("load", function () {

    var wind = $(window);

    // Preloader
    $(".loading").fadeOut(500);


    // stellar
    //wind.stellar();

    // isotope
    $('.gallery').isotope({
        // options
        itemSelector: '.items',
        percentPosition: true,
        masonry: {
            // use element for option
            columnWidth: '.width2'
        }
    });

    var $gallery = $('.gallery').isotope({
        // options
    });

    // filter items on button click
    $('.filtering').on('click', 'span', function () {

        var filterValue = $(this).attr('data-filter');

        $gallery.isotope({ filter: filterValue });

    });

    $('.filtering').on('click', 'span', function () {

        $(this).addClass('active').siblings().removeClass('active');

    });


    // contact form validator
    $('#contact-form').validator();

    $('#contact-form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data) {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form').find('.messages').html(alertBox);
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    });

});

// Slider 
$(document).ready(function () {

    var owl = $('.header .owl-carousel');

    // Slider owlCarousel
    $('.slider-fade .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        autoplay: true,
        smartSpeed: 500,
        animateOut: 'fadeOut'
    });

    owl.on('changed.owl.carousel', function (event) {
        var item = event.item.index - 2;     // Position of the current item
        $('h4').removeClass('animated fadeInLeft');
        $('h1').removeClass('animated fadeInRight');
        $('p').removeClass('animated fadeInUp');
        $('.butn').removeClass('animated zoomIn');
        $('.owl-item').not('.cloned').eq(item).find('h4').addClass('animated fadeInLeft');
        $('.owl-item').not('.cloned').eq(item).find('h1').addClass('animated fadeInRight');
        $('.owl-item').not('.cloned').eq(item).find('p').addClass('animated fadeInUp');
        $('.owl-item').not('.cloned').eq(item).find('.butn').addClass('animated zoomIn');
    });

});

$(document).ready(function () {
    var d = new Date();
    var n = d.getFullYear();
    document.getElementById("footerYear").innerHTML = n;
});

