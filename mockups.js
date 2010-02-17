/*globals Drupal,$ */

Drupal.behaviors.mockupOverlay = function (context) {
  var $slider;
  $slider = $('<div id="mockup-slider"></div>').css({
    height: '100px',
    width: '10px',
    position: 'fixed',
    top: '30px'
  });
  $('#block-bangpoundthemer-mockups .item-list a', context).click(
    function() {
      var $anchor, $image;
      $anchor = $(this);
      $image = $('<img/>')
        .attr('src', $anchor.attr('href'))
        .appendTo('body')
        .draggable({
          zIndex: 10000
        })
        .css({
          position: 'absolute',
          top: 0,
          left: 0
        });
      $slider
        .prependTo('body')
        .slider({
          min: 0,
          max: 100,
          value: 60,
          slide: function(event, ui) {
            $image.css('opacity', (100 - ui.value) / 100);
          }
        });
      return false;
    }
  );
};
