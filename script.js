$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll < 160) {
        $('.fixed-top').css('background', 'transparent');
        $('.navbar').css('margin', '0px');
        $('.navbar').css('transition', 'all 0.2s');
        $('.arrow').css('transition', 'all 0.2s');
        $('.arrow').css('display', 'none')
    } else {
        $('.fixed-top').css('background', '#0066ffd8');
        $('.navbar').css('margin', '8px')
        $('.arrow').css('display', 'block')
    }
});


// pre loader 
$(window).on("load", function () {
    $(".preloader").fadeOut("slow");;
})





