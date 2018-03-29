//$(document).ready(() => {
//    let leftImages = Array.from(document.querySelectorAll("#left-main > img"));
//    setInterval(() => {
//        //$("#cs-1").animate({ top: '-100%' }),
//        //$("#cs-1").animate({ top: '100%' });
//        let temp = leftImages.shift();
//        $(temp).animate({ top: '-100%' });
//        $(temp).animate({ top: '100%' });
//        leftImages.push(temp);
//    }, 4000);
//});
$(document).ready(() => {
    $('.bean-info-box').hover(function () {
        $(this).addClass('transition');
        $(this).css({
            boxShadow: '0 28px 15px -15px rgba(50, 20, 20, .4)'
        });
    }, function () {
        $(this).removeClass('transition');
        $(this).css({
            boxShadow: '0 5px 10px -5px rgba(50, 20, 20, .8)'
        });
        });
    $('.bean-info-box').click(function () {
        $(this).find('.bean-description').toggleClass('bean-description-expand');
        $(this).find('.bean-about').toggleClass('hid');
    });
    $('.add-to-cart').click(function () {
        var hey = $(this).siblings('.submit-value');
        hey.val("add");
    });
    $('.remove-from-cart').click(function () {
        $('.submit-value').val("remove");
    });
});



$(window).scroll(function () {
    let scrollPixels = parseInt($(window).scrollTop());
    let top = 250;

    if (scrollPixels > 150) {
        $('#brand').text("CCC.");
        $('header').css({
            height: '100px',
            top: '0',
            left: '0'
        });
        $('#brand').addClass('title-flip');
    } else {
        $('#brand').text("CLEVELAND COFFEE CO.");
        $('header').css({
            height: 'inherit',
            top: '0',
            left: '0'
        });
        $('#brand').removeClass('title-flip');
    }

    if (top <= $(window).scrollTop()) {

    }
});




