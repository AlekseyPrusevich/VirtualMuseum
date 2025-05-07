$(document).ready(() => {
  $('.map__region').click((e) => {
    $('.regions').css('height', '0px');
    $('#' + e.target.id.slice(7)).css('height', 'auto');
  });

  $('.map__region').mousemove((e) => {
    $('#tip-' + e.target.id.slice(7)).css({
      display: "block",
      top: e.pageY + 10 + 'px',
      left: e.pageX + 10 + 'px'
    });
  });

  $('.map__region').mouseout ((e) => {
    $('#tip-' + e.target.id.slice(7)).hide();
  });

  $('.college-history__img').mousemove(function() {
    $('#tip-' + $(this).data('tooltip')).show();
  });
  
  $('.college-history__img').mouseout(function() {
    $('#tip-' + $(this).data('tooltip')).hide();
  });
});







  