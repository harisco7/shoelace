System.register(['./p-351060b9.system.js', './p-6c7dcad3.system.js'], function (e) {
  'use strict';
  var t, r, i, o;
  return {
    setters: [
      function (e) {
        t = e.r;
        r = e.c;
        i = e.h;
      },
      function (e) {
        o = e.c;
      }
    ],
    execute: function () {
      var a =
        ':host{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{--divider-width:2px;--handle-size:2.5rem;display:block;position:relative}.image-comparer{max-width:100%;max-height:100%;overflow:hidden}.image-comparer__before,.image-comparer__after{pointer-events:none}.image-comparer__before ::slotted(img),.image-comparer__before ::slotted(svg),.image-comparer__after ::slotted(img),.image-comparer__after ::slotted(svg){display:block;max-width:100% !important;height:auto}.image-comparer__after{position:absolute;top:0;left:0;height:100%;width:100%}.image-comparer__divider{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;position:absolute;top:0;width:var(--divider-width);height:100%;background-color:var(--sl-color-white);-webkit-transform:translateX(calc(var(--divider-width) / -2));transform:translateX(calc(var(--divider-width) / -2));cursor:ew-resize}.image-comparer__handle{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;position:absolute;top:calc(50% - (var(--handle-size) / 2));width:var(--handle-size);height:var(--handle-size);background-color:var(--sl-color-white);border-radius:var(--sl-border-radius-circle);font-size:calc(var(--handle-size) * 0.5);color:var(--sl-color-gray-500);cursor:inherit;z-index:10}.image-comparer__handle:focus{outline:none;-webkit-box-shadow:0 0 0 1px var(--sl-color-primary-500), 0 0 0 var(--sl-focus-ring-width) var(--sl-focus-ring-color-primary);box-shadow:0 0 0 1px var(--sl-color-primary-500), 0 0 0 var(--sl-focus-ring-width) var(--sl-focus-ring-color-primary)}';
      var n = e(
        'sl_image_comparer',
        (function () {
          function e(e) {
            t(this, e);
            this.slChange = r(this, 'sl-change', 7);
            this.position = 50;
          }
          e.prototype.handlePositionChange = function () {
            this.slChange.emit();
          };
          e.prototype.connectedCallback = function () {
            this.handleDrag = this.handleDrag.bind(this);
            this.handleKeyDown = this.handleKeyDown.bind(this);
          };
          e.prototype.handleDrag = function (e) {
            var t = this;
            var r = this.base.getBoundingClientRect().width;
            function i(e, t, r) {
              var i = function (e) {
                var i = t.getBoundingClientRect();
                var o = i.left + t.ownerDocument.defaultView.pageXOffset;
                var a = i.top + t.ownerDocument.defaultView.pageYOffset;
                var n = (e.changedTouches ? e.changedTouches[0].pageX : e.pageX) - o;
                var s = (e.changedTouches ? e.changedTouches[0].pageY : e.pageY) - a;
                r(n, s);
              };
              i(e);
              var o = function () {
                document.removeEventListener('mousemove', i);
                document.removeEventListener('touchmove', i);
                document.removeEventListener('mouseup', o);
                document.removeEventListener('touchend', o);
              };
              document.addEventListener('mousemove', i);
              document.addEventListener('touchmove', i);
              document.addEventListener('mouseup', o);
              document.addEventListener('touchend', o);
            }
            this.handle.focus();
            e.preventDefault();
            i(e, this.base, function (e) {
              t.position = o((e / r) * 100, 0, 100);
            });
          };
          e.prototype.handleKeyDown = function (e) {
            if (['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)) {
              var t = e.shiftKey ? 10 : 1;
              var r = this.position;
              e.preventDefault();
              if (e.key === 'ArrowLeft') r = r - t;
              if (e.key === 'ArrowRight') r = r + t;
              if (e.key === 'Home') r = 0;
              if (e.key === 'End') r = 100;
              r = o(r, 0, 100);
              this.position = r;
            }
          };
          e.prototype.render = function () {
            var e = this;
            return i(
              'div',
              {
                ref: function (t) {
                  return (e.base = t);
                },
                part: 'base',
                class: 'image-comparer',
                onKeyDown: this.handleKeyDown
              },
              i(
                'div',
                { class: 'image-comparer__image' },
                i('div', { part: 'before', class: 'image-comparer__before' }, i('slot', { name: 'before' })),
                i(
                  'div',
                  {
                    part: 'after',
                    class: 'image-comparer__after',
                    style: { clipPath: 'inset(0 ' + (100 - this.position) + '% 0 0)' }
                  },
                  i('slot', { name: 'after' })
                )
              ),
              i(
                'div',
                {
                  ref: function (t) {
                    return (e.divider = t);
                  },
                  part: 'divider',
                  class: 'image-comparer__divider',
                  style: { left: this.position + '%' },
                  onMouseDown: this.handleDrag,
                  onTouchStart: this.handleDrag
                },
                i(
                  'div',
                  {
                    ref: function (t) {
                      return (e.handle = t);
                    },
                    part: 'handle',
                    class: 'image-comparer__handle',
                    role: 'scrollbar',
                    'aria-valuenow': this.position,
                    'aria-valuemin': '0',
                    'aria-valuemax': '100',
                    tabIndex: 0
                  },
                  i('sl-icon', { class: 'image-comparer__handle-icon', name: 'grip-vertical' })
                )
              )
            );
          };
          Object.defineProperty(e, 'watchers', {
            get: function () {
              return { position: ['handlePositionChange'] };
            },
            enumerable: false,
            configurable: true
          });
          return e;
        })()
      );
      n.style = a;
    }
  };
});
