$(document).ready(function() {

  $('.portfolio-item').click(function() {
    $(this).css('height', $(this).outerHeight()); //needed to allow animations to work the first click

    var $portfolioItem = $(this);
    var $innerContent = $portfolioItem.find('.inner-content');

    if ($innerContent.css('display') == 'none') {
      expandTile($portfolioItem, $innerContent);
    } else {
      collapseTile($portfolioItem, $innerContent);
    }
  });

})

/*
 * Expands portfolio tile to reveal inner content
 * $portfolioItem  the .portfolio-item
 * $innerContent   the .inner-content div of the .portfolio-item
 */
expandTile = function($portfolioItem, $innerContent) {
  $innerContent.show();
  var currentHeight = $portfolioItem.find('.all-content').height();
  $innerContent.hide().fadeIn();
  $portfolioItem.css('height', currentHeight);
}

/*
 * Collapses portfolio tile to hide inner content
 * $portfolioItem  the .portfolio-item
 * $innerContent   the .inner-content div of the .portfolio-item
 */
collapseTile = function($portfolioItem, $innerContent) {
  $innerContent.hide();
  var currentHeight = $portfolioItem.find('.all-content').height();
  $portfolioItem.css('height', currentHeight);
}
