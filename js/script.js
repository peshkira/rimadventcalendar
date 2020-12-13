//make snow
jQuery(document).ready(function(){
  $("#player")[0].volume = 0.1

  var w = $(window).width()
  snowDrop(250, randomInt(1, w), w);
  snow(250, 150);

  $('#ball1, #ball2, #ball3, #ball4, #ball5, #ball6, #ball7, #ball8, #ball9, #ball10, #ball11, #ball12, #ball13, #ball14, #ball15, #ball16, #ball17, #ball18, #ball19, #ball20, #ball21, #ball22, #ball23, #ball24  ').click(function() {
    var player = $("#player")[0]
    var paused = player.paused
    if (!paused) {
      player.pause()
    }
    var clicked = $(this);
    var dayNumber = clicked.attr('id').replace('ball', '')
    var day = $('#day' + dayNumber);
    var popup = day.children()
    var close = popup.children('#close')
    close.click(function() {
      $(this).off("click")
      $(this).parent().parent().fadeOut(300);
      if (!paused) {
        $("#player")[0].play()
      }
    });
    day.fadeIn(300);
  });
});

function snow(num, speed) {
  if (num > 0) {
    setTimeout(function () {
      $('#drop_' + randomInt(1, 250)).addClass('animate');
      num--;
      snow(num, speed);
    }, speed);
  }
};

function snowDrop(num, position, width) {
  if (num > 0) {
    var drop = '<div class="drop snow" id="drop_' + num + '"></div>';
    $('body').append(drop);
    $('#drop_' + num).css('left', position);
    num--;
    snowDrop(num, randomInt(1, width), width);
  }
};

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
