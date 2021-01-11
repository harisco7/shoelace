System.register(['./p-351060b9.system.js'], function (e) {
  'use strict';
  var t, s, r, n;
  return {
    setters: [
      function (e) {
        t = e.r;
        s = e.c;
        r = e.h;
        n = e.g;
      }
    ],
    execute: function () {
      var o =
        ':host{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{display:contents}';
      var i = e(
        'sl_resize_observer',
        (function () {
          function e(e) {
            t(this, e);
            this.slResize = s(this, 'sl-resize', 7);
            this.observedElements = [];
          }
          e.prototype.connectedCallback = function () {
            var e = this;
            this.resizeObserver = new ResizeObserver(function (t) {
              return e.slResize.emit(t);
            });
            this.handleSlotChange = this.handleSlotChange.bind(this);
          };
          e.prototype.disconnectedCallback = function () {
            this.resizeObserver.disconnect();
          };
          e.prototype.handleSlotChange = function () {
            var e = this;
            var t = this.host.shadowRoot.querySelector('slot');
            var s = t.assignedElements({ flatten: true });
            this.observedElements.map(function (t) {
              return e.resizeObserver.unobserve(t);
            });
            this.observedElements = [];
            s.map(function (t) {
              e.resizeObserver.observe(t);
              e.observedElements.push(t);
            });
          };
          e.prototype.render = function () {
            return r('slot', { onSlotchange: this.handleSlotChange });
          };
          Object.defineProperty(e.prototype, 'host', {
            get: function () {
              return n(this);
            },
            enumerable: false,
            configurable: true
          });
          return e;
        })()
      );
      i.style = o;
    }
  };
});
