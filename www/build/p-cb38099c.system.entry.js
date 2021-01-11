System.register(['./p-351060b9.system.js', './p-ae00c24d.system.js'], function (r) {
  'use strict';
  var a, e, o, t;
  return {
    setters: [
      function (r) {
        a = r.r;
        e = r.h;
        o = r.g;
      },
      function (r) {
        t = r.h;
      }
    ],
    execute: function () {
      var d =
        ':host{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{--border-color:var(--sl-color-gray-200);--border-radius:var(--sl-border-radius-medium);--border-width:1px;--padding:var(--sl-spacing-large);display:inline-block}.card{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;background-color:var(--sl-color-white);-webkit-box-shadow:var(--sl-shadow-x-small);box-shadow:var(--sl-shadow-x-small);border:solid var(--border-width) var(--border-color);border-radius:var(--border-radius)}.card__image{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);margin:calc(-1 * var(--border-width));overflow:hidden}.card__image ::slotted(img){display:block;width:100%}.card:not(.card--has-image) .card__image{display:none}.card__header{border-bottom:solid var(--border-width) var(--border-color);padding:calc(var(--padding) / 2) var(--padding)}.card:not(.card--has-header) .card__header{display:none}.card__body{padding:var(--padding)}.card--has-footer .card__footer{border-top:solid var(--border-width) var(--border-color);padding:var(--padding)}.card:not(.card--has-footer) .card__footer{display:none}';
      var s = r(
        'sl_card',
        (function () {
          function r(r) {
            a(this, r);
            this.hasFooter = false;
            this.hasImage = false;
            this.hasHeader = false;
          }
          r.prototype.connectedCallback = function () {
            this.handleSlotChange = this.handleSlotChange.bind(this);
          };
          r.prototype.componentWillLoad = function () {
            this.handleSlotChange();
          };
          r.prototype.handleSlotChange = function () {
            this.hasFooter = t(this.host, 'footer');
            this.hasImage = t(this.host, 'image');
            this.hasHeader = t(this.host, 'header');
          };
          r.prototype.render = function () {
            return e(
              'div',
              {
                part: 'base',
                class: {
                  card: true,
                  'card--has-footer': this.hasFooter,
                  'card--has-image': this.hasImage,
                  'card--has-header': this.hasHeader
                }
              },
              e(
                'div',
                { part: 'image', class: 'card__image' },
                e('slot', { name: 'image', onSlotchange: this.handleSlotChange })
              ),
              e(
                'div',
                { part: 'header', class: 'card__header' },
                e('slot', { name: 'header', onSlotchange: this.handleSlotChange })
              ),
              e('div', { part: 'body', class: 'card__body' }, e('slot', null)),
              e(
                'div',
                { part: 'footer', class: 'card__footer' },
                e('slot', { name: 'footer', onSlotchange: this.handleSlotChange })
              )
            );
          };
          Object.defineProperty(r.prototype, 'host', {
            get: function () {
              return o(this);
            },
            enumerable: false,
            configurable: true
          });
          return r;
        })()
      );
      s.style = d;
    }
  };
});
