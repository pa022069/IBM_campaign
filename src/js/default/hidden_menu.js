$(function () {
    var prev;
    scrollboolean = true;
    $(".wrap").on('scroll', function () {
        if (scrollboolean && isOpen) {
            var scrollTop = $(".wrap").scrollTop();
            if (scrollTop > 20) {
                $(".header__bg").addClass('header__bg--active');
            } else {
                $(".header__bg").removeClass('header__bg--active');
            }
            // if (scrollTop > 0) {
            //     $(".header__bg").toggleClass('header__bg--active', scrollTop > prev);
            //     prev = scrollTop;
            // }
        }
    });
});