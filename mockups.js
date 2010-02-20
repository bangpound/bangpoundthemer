/*globals Drupal,$ */

Drupal.behaviors.mockupOverlay = function (context) {
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
      $('<div/>').css({
          height: '100px'
        })
        .prependTo('body')
        .wrap('<div id="mockup-slider"/>')
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
