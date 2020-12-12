//make snow
jQuery(document).ready(function(){
  var w = $(window).width()
  snowDrop(250, randomInt(1, w), w);
  snow(250, 150);
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
