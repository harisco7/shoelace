System.register(['./p-351060b9.system.js'], function (r) {
  'use strict';
  var e, i;
  return {
    setters: [
      function (r) {
        e = r.r;
        i = r.h;
      }
    ],
    execute: function () {
      var t =
        ':host{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{display:block}.menu-divider{border-top:solid 1px var(--sl-panel-border-color);margin:var(--sl-spacing-x-small) 0}';
      var o = r(
        'sl_menu_divider',
        (function () {
          function r(r) {
            e(this, r);
          }
          r.prototype.render = function () {
            return i('div', { part: 'base', class: 'menu-divider', role: 'separator', 'aria-hidden': 'true' });
          };
          return r;
        })()
      );
      o.style = t;
    }
  };
});
