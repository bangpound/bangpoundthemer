/*globals Drupal,$ */

Drupal.behaviors.mockupOverlay = function (context) {
  var $slider;
  $slider = $('<div id="mockup-slider"></div>');
  $('#block-bangpoundthemer-mockups .item-list a', context).click(
    function() {
      var $anchor, $image;
      $anchor = $(this);
      $image = $('<img/>')
        .attr('id', 'mockup-overlay')
        .attr('src', $anchor.attr('href'))
        .appendTo('body')
        .draggable({
          zIndex: 10000
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
