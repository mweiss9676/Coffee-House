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

    $('.bean-description-page').on('scroll', function () {
        $('#brand').addClass('title-flip');
    });
});
//$(document).ready(function () {
//    $('.zoom').hover(function () {
//        $(this).addClass('transition');
//    }, function () {
//        $(this).removeClass('transition');
//    });
//});