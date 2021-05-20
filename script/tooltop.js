$('.map__region').mousemove(function(e){
  var X = e.pageX;
  var Y = e.pageY;
  var top = Y  + 10 + 'px';
  var left = X  + 10 + 'px';
  let id = $(this).data('tooltip');

$('#tip-'+id).css({
      display:"block",
      top: top,
      left: left
  });
});

$('.map__region').mouseout (function(){
  var id = $(this).data('tooltip');
  $('#tip-'+id).css({
    display:"none"
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




$('.map__region').click(function(e){
  $('.region-of-Belarus').css({
    'display':"none"
  });
  let id = $(this).data('tooltip');
  $('#region-'+id).css({
  'display':"block"
  });
});

$('.baranovichi-link').click (function(){
  $('.region-of-Belarus').css({
    'display':"none"
  });
});

$('.bealc-link').click (function(){
  $('.region-of-Belarus').css({
    'display':"none"
  });
});

$('.close-region__link').click (function(){
  $('.region-of-Belarus').css({
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




  