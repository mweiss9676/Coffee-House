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
    }, function () {
        $(this).removeClass('transition');
        });

});
//$(document).ready(function () {
//    $('.zoom').hover(function () {
//        $(this).addClass('transition');
//    }, function () {
//        $(this).removeClass('transition');
//    });
//});

$(window).scroll(function () {
    let scrollPixels = parseInt($(window).scrollTop());

    if (scrollPixels > 150) {
        $('#brand').text("CCC.");
        $('header').css({
            height: '100px',
            //position: 'fixed',
            top: '0',
            left: '0'
            //backgroundPosition: 'center 13%'
        });
        $('#brand').addClass('title-flip');
    } else {
        $('#brand').text("CLEVELAND COFFEE CO.");
        $('header').css({
            height: 'inherit',
            //position: 'inherit',
            top: '0',
            left: '0'
            //backgroundPosition: 'inherit'
        });
        $('#brand').removeClass('title-flip');
    }
});


//$("div#container").scroll(function () {
//    var screenheight = parseInt($(document).height());
//    var scrolledpx = parseInt($("div#container").scrollTop());
//    var sum = screenheight + scrolledpx;
//    console.log($("div#container").scrollTop());
//    console.log("screen: " + screenheight);
//    console.log("sum=" + sum);
//    $("div.content").height(sum);
//})

