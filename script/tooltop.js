$(document).ready(() => {
  $('.map__region').click((e) => {
    $('.regions').hide();
    $('#' + e.target.id.slice(7)).show();
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
});


$('.main-map__city').mousemove(function(e){
  var X = e.pageX;
  var Y = e.pageY;
  var top = Y  + 10 + 'px';
  var left = X  + 10 + 'px';
  var id = $(this).data('tooltip');
  $('#tip-'+id).css({
      display:"block",
      top: top,
      left: left
  });
});

$('.main-map__city').mouseout (function(){
  var id = $(this).data('tooltip');
  $('#tip-'+id).css({
    display:"none"
  });
});

$('.baranovichi-link').click (function(){
  $('.regions').css({
    'display':"none"
  });
});

$('.bealc-link').click (function(){
  $('.regions').css({
    'display':"none"
  });
});

$('.close-region__link').click (function(){
  $('.regions').css({
    'display':"none"
  });
});


$('.BEaLC__history_img').mousemove(function(e){
  let X = $('.BEaLC__history').width();
  let width = $('.BEaLC__history_big-image').width();
  let top = -10 + '%';
  let left = 3 + '%';
  let id = $(this).data('tooltip');
  $('#tip-'+id).css({
      display:"block",
      top: top,
      left: left
  });
});

$('.BEaLC__history_img').mouseout (function(){
  let id = $(this).data('tooltip');
  $('#tip-'+id).css({
    display:"none"
  });
});






  