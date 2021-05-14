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
  var id = $(this).data('tooltip');
  $('#region-'+id).css({
  'display':"block"
  });
  $('.Baranovichi').css({
  'display':"none"
  });
  $('.BEaLC').css({
  'display':"none"
  });
});

$('.baranovichi-link').click (function(){
  $('.region-of-Belarus').css({
    'display':"none"
  });
  $('.Baranovichi').css({
    'display':"block"
  });
  $('.BEaLC').css({
    'display':"block"
  });
});

$('.bealc-link').click (function(){
  $('.region-of-Belarus').css({
    'display':"none"
  });
  $('.Baranovichi').css({
    'display':"block"
  });
  $('.BEaLC').css({
    'display':"block"
  });
});

$('.close-region__link').click (function(){
  $('.region-of-Belarus').css({
    'display':"none"
  });
  $('.Baranovichi').css({
    'display':"block"
  });
  $('.BEaLC').css({
    'display':"block"
  });
});




$('.BEaLC__history_img').mousemove(function(e){
  var X = $('.BEaLC__history').width();
  var width = $('.BEaLC__history_big-image').width();
  var top = -10 + '%';
  var left = 3 + '%';
  var id = $(this).data('tooltip');
  $('#tip-'+id).css({
      display:"block",
      top: top,
      left: left
  });
});

$('.BEaLC__history_img').mouseout (function(){
  var id = $(this).data('tooltip');
  $('#tip-'+id).css({
    display:"none"
  });
});




  