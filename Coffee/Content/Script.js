let count = 0;


//function cartUpdate() {
//    document.querySelector("#carts").classList.add("visible");
//}

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
    $('.bean-image').click(function () {
        $(this).siblings('.bean-description').toggleClass('bean-description-expand');
        $(this).siblings().children('.bean-about').toggleClass('hid');
    });
    $('.add-to-cart').click(function () {
        count++;
        $('.submit-value').val("add");
        if (count > 0) {
            document.querySelector("#carts").classList.add("visible");
        }
    });
    $('.remove-from-cart').click(function () {
        if (count != 0) {
            count--;
        }
        $('.submit-value').val("remove");
        if (count < 1) {
            document.querySelector("#carts").classList.remove("visible");
        }
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




