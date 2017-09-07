$(document).ready(function() {

  $('.portfolio-item').click(function() {
    $(this).css('height', $(this).outerHeight()); //needed to allow animations to work the first click

    var currentHeight = 0;
    var $innerContent = $(this).find('.inner-content');

    if ($innerContent.css('display') == 'none') {
      $innerContent.show();
      currentHeight = $(this).find('.all-content').height();
      $innerContent.hide().fadeIn();
    } else {
      $innerContent.hide();
      currentHeight = $(this).find('.all-content').height();
    }

    $(this).css('height', currentHeight);

  });

})
