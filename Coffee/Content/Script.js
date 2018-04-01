var ids = [];
var count = 0;


$(window).on("load", function () {

    if ($(window).width < 451) {
        shrinkHeader();
    }


    if ($(window).width > 450) {
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
    }

    $('.bean-image').click(function () {
        $(this).siblings('.bean-description').toggleClass('bean-description-expand');
        $(this).siblings().children('.bean-about').toggleClass('hid');
    });
    


    $('.add-to-cart').click(function () {

        var thisId = Number($(this).siblings('.itemId').val());

        UpdateIds(thisId, "add");

    });

    $('.remove-from-cart').click(function () {

        var thisId = Number($(this).siblings('.itemId').val());

        UpdateIds(thisId, "remove");

    });
});

function UpdateIds(thisId, addRemove) {

    var getIds = 'http://' + window.location.host + '/Home/GetIds';
    var updateCart = 'http://' + window.location.host + '/Home/UpdateCart';

    $.when(
        $.post(updateCart, { beanId: thisId, addAmount: addRemove }),

        $.get(getIds, function (data) {
            ids = JSON.parse(data);
        })

    ).then(function (data) {

        $('#carts').html(data[0]);

        UpdateCount();
        if (count > 0) {
            ShowShoppingCart();
        } else {
            HideShoppingCart();
        }
    });
}

function UpdateCount() {
    count = ids.length;
}

function shrinkHeader() {
    $('#brand').text("CCC.");
    $('header').css({
        height: '100px',
        top: '0',
        left: '0'
    });
    $('#brand').addClass('title-flip');
}

function expandHeader() {
    $('#brand').text("CLEVELAND COFFEE CO.");
    $('header').css({
        height: 'inherit',
        top: '0',
        left: '0'
    });
    $('#brand').removeClass('title-flip');
}

$(window).scroll(function () {
    let scrollPixels = parseInt($(window).scrollTop());
    let top = 250;

    if (scrollPixels > 150) {
        shrinkHeader();
    } else {
        expandHeader();
    }
});

function ShowShoppingCart() {
    $('#carts').addClass('visible');
}

function HideShoppingCart() {
    $('#carts').removeClass('visible');
}









