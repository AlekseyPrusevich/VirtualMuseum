$(document).ready(() => {
  let lastScrollTop = 0;
    
  $(window).scroll(function() {
    let currentScrollTop = $(this).scrollTop();

    $('.header').css('height', currentScrollTop > lastScrollTop ? '0px' : '64px');
      
    lastScrollTop = currentScrollTop;
  });

  $('.scroll').click(function () {
    const scrollTargetTop = $($(this).attr('href')).offset().top;
    
    $('html').animate({
      scrollTop: scrollTargetTop
    }, Math.abs(window.pageYOffset - scrollTargetTop) / 4);
  });

  $('.scroll-region').click(function () {
    const scrollTargetTop = $($(this).attr('href')).offset().top;

    $('.regions').animate({
      height: '0px'
    }, Math.abs(window.pageYOffset - scrollTargetTop) / 4);
  });
});