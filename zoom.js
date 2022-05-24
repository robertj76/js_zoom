$('.zoom').hover(function() {
  $(this).animate({
    'width': '356px',
    'height': '126px',
    'left': '44%',
    'top': '44%'
  }, 900);
}, function() {
  $(this).animate({
    'width': '316px',
    'height': '108px',
    'left': '45%',
    'top': '45%'
  }, 900);
});