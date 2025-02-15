$(document).ready(function () {
    var currentUrl = window.location.href;
    $('nav a').each(function () {
        if (this.href === currentUrl) {
            $(this).addClass('active');
        }
    });

    $('.hamburger-icon').click(function () {
        $('nav').toggleClass('show');
    });

});