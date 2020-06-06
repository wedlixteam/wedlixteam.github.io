$(window).scroll(function () {
    const menu = $(".header");
    const height = $("html").scrollTop();

    if (height > 100) {
        menu.addClass("fixed");
    } else {
        menu.removeClass("fixed");
    }
})