var ids = [];
var count = 0;


$(document).ready(function () {
    UpdateIds();
});



$(window).on("load", function () {

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
        $('.submit-value').val("add");
        ShowShoppingCart();
    });

    $('.remove-from-cart').click(function () {
        UpdateIds();
        $('.submit-value').val("remove");
    });
});


function ShowShoppingCart() {
    $('#carts').addClass('visible');
}

function HideShoppingCart() {
    $('#carts').removeClass('visible');
}

function UpdateIds() {
    var ourRequest = new XMLHttpRequest();
    //var host = 'http://localhost:50031/Home/GetIds'
    var host = 'http://' + window.location.host + '/Home/GetIds';
    ourRequest.open('GET', host);
    ourRequest.onload = function () {
        ids = JSON.parse(ourRequest.responseText);
        UpdateCount();
        if (count > 1) {
            ShowShoppingCart();
        } else {
            HideShoppingCart();
        }
        console.log(ourRequest.responseText);
    };
    ourRequest.send();
}

function UpdateCount() {
    count = ids.length;
}


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
});








