/*globals Drupal,$ */

"use strict";

Drupal.behaviors.mockupOverlay = function (context) {
  $('#block-bangpoundthemer-mockups .item-list a', context).click(
    function () {
      var $anchor, $image, $slider;
      $anchor = $(this);
      $image = $('<img/>')
        .attr('id', 'mockup-overlay')
        .attr('src', $anchor.attr('href'))
        .appendTo('body')
        .draggable({
          opacity: 0.5,
          zIndex: 10000
        });
      $slider = $('<div/>').css({
          height: '100px'
        })
        .prependTo('body')
        .wrap('<div id="mockup-slider"/>')
        .slider({
          min: 0,
          max: 100,
          value: 60,
          slide: function (event, ui) {
            $image.css('opacity', (100 - ui.value) / 100);
          }
        });
      $('<a>X</a>').click(function () {
        $slider
          .slider('destroy')
          .remove();
        $image
          .draggable('destroy')
          .remove();
        $(this)
          .remove();
      })
      .appendTo($slider.parent());
      return false;
    }
  );
};

/*jslint white: true, onevar: true, undef: true, nomen: true, eqeqeq: true, plusplus: true, bitwise: true, regexp: true, strict: true, newcap: true, immed: true, indent: 2 */
