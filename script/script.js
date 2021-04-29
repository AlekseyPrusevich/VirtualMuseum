$(function(){
    $('a[href^="#"]').click(function(){
        var target = $(this).attr('href');
        var font_size = $('#text-size').css('font-size').substring(0, $('#text-size').css('font-size').length - 2);
        var posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        var scroll_lenthe = $(target).offset().top - (+font_size / 1.5) * 4 + 2;
    $('html, body').animate({scrollTop: scroll_lenthe}, Math.abs(posTop - scroll_lenthe) / 3);
        return false;
    });
});
    