var __awaiter =
  (this && this.__awaiter) ||
  function (e, t, i, o) {
    function n(e) {
      return e instanceof i
        ? e
        : new i(function (t) {
            t(e);
          });
    }
    return new (i || (i = Promise))(function (i, a) {
      function s(e) {
        try {
          r(o.next(e));
        } catch (e) {
          a(e);
        }
      }
      function l(e) {
        try {
          r(o['throw'](e));
        } catch (e) {
          a(e);
        }
      }
      function r(e) {
        e.done ? i(e.value) : n(e.value).then(s, l);
      }
      r((o = o.apply(e, t || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (e, t) {
    var i = {
        label: 0,
        sent: function () {
          if (a[0] & 1) throw a[1];
          return a[1];
        },
        trys: [],
        ops: []
      },
      o,
      n,
      a,
      s;
    return (
      (s = { next: l(0), throw: l(1), return: l(2) }),
      typeof Symbol === 'function' &&
        (s[Symbol.iterator] = function () {
          return this;
        }),
      s
    );
    function l(e) {
      return function (t) {
        return r([e, t]);
      };
    }
    function r(s) {
      if (o) throw new TypeError('Generator is already executing.');
      while (i)
        try {
          if (
            ((o = 1),
            n &&
              (a = s[0] & 2 ? n['return'] : s[0] ? n['throw'] || ((a = n['return']) && a.call(n), 0) : n.next) &&
              !(a = a.call(n, s[1])).done)
          )
            return a;
          if (((n = 0), a)) s = [s[0] & 2, a.value];
          switch (s[0]) {
            case 0:
            case 1:
              a = s;
              break;
            case 4:
              i.label++;
              return { value: s[1], done: false };
            case 5:
              i.label++;
              n = s[1];
              s = [0];
              continue;
            case 7:
              s = i.ops.pop();
              i.trys.pop();
              continue;
            default:
              if (!((a = i.trys), (a = a.length > 0 && a[a.length - 1])) && (s[0] === 6 || s[0] === 2)) {
                i = 0;
                continue;
              }
              if (s[0] === 3 && (!a || (s[1] > a[0] && s[1] < a[3]))) {
                i.label = s[1];
                break;
              }
              if (s[0] === 6 && i.label < a[1]) {
                i.label = a[1];
                a = s;
                break;
              }
              if (a && i.label < a[2]) {
                i.label = a[2];
                i.ops.push(s);
                break;
              }
              if (a[2]) i.ops.pop();
              i.trys.pop();
              continue;
          }
          s = t.call(e, i);
        } catch (e) {
          s = [6, e];
          n = 0;
        } finally {
          o = a = 0;
        }
      if (s[0] & 5) throw s[1];
      return { value: s[0] ? s[1] : void 0, done: true };
    }
  };
System.register(
  ['./p-351060b9.system.js', './p-ae00c24d.system.js', './p-4ebc54b7.system.js', './p-9be1ad03.system.js'],
  function (e) {
    'use strict';
    var t, i, o, n, a, s, l, r, h;
    return {
      setters: [
        function (e) {
          t = e.r;
          i = e.c;
          o = e.h;
          n = e.g;
        },
        function (e) {
          a = e.h;
        },
        function (e) {
          s = e.u;
          l = e.l;
        },
        function (e) {
          r = e.i;
          h = e.M;
        }
      ],
      execute: function () {
        var d =
          ':host{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{--width:31rem;display:contents}.dialog{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;position:fixed;top:0;right:0;bottom:0;left:0;z-index:var(--sl-z-index-dialog)}.dialog:not(.dialog--visible){position:absolute;width:1px;height:1px;clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);overflow:hidden;pointer-events:none;visibility:hidden}.dialog__panel{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;z-index:2;width:var(--width);max-width:calc(100% - var(--sl-spacing-xx-large));max-height:calc(100% - var(--sl-spacing-xx-large));background-color:var(--sl-panel-background-color);border-radius:var(--sl-border-radius-medium);-webkit-box-shadow:var(--sl-shadow-x-large);box-shadow:var(--sl-shadow-x-large);opacity:0;-webkit-transform:scale(0.8);transform:scale(0.8);-webkit-transition:var(--sl-transition-medium) opacity, var(--sl-transition-medium) transform;transition:var(--sl-transition-medium) opacity, var(--sl-transition-medium) transform}.dialog__panel:focus{outline:none}@media screen and (max-width: 420px){.dialog__panel{max-height:80vh}}.dialog--open .dialog__panel{display:-ms-flexbox;display:flex;opacity:1;-webkit-transform:none;transform:none}.dialog__header{-ms-flex:0 0 auto;flex:0 0 auto;display:-ms-flexbox;display:flex}.dialog__title{-ms-flex:1 1 auto;flex:1 1 auto;font-size:var(--sl-font-size-large);line-height:var(--sl-line-height-dense);padding:var(--sl-spacing-large)}.dialog__close{-ms-flex:0 0 auto;flex:0 0 auto;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;font-size:var(--sl-font-size-x-large);padding:0 var(--sl-spacing-large)}.dialog__body{-ms-flex:1 1 auto;flex:1 1 auto;padding:var(--sl-spacing-large);overflow:auto;-webkit-overflow-scrolling:touch}.dialog__footer{-ms-flex:0 0 auto;flex:0 0 auto;text-align:right;padding:var(--sl-spacing-large)}.dialog__footer ::slotted(sl-button:not(:first-of-type)){margin-left:var(--sl-spacing-x-small)}.dialog:not(.dialog--has-footer) .dialog__footer{display:none}.dialog__overlay{position:fixed;top:0;right:0;bottom:0;left:0;background-color:var(--sl-overlay-background-color);opacity:0;-webkit-transition:var(--sl-transition-medium) opacity;transition:var(--sl-transition-medium) opacity}.dialog--open .dialog__overlay{opacity:1}';
        var c = r();
        var f = 0;
        var u = e(
          'sl_dialog',
          (function () {
            function e(e) {
              t(this, e);
              this.slShow = i(this, 'sl-show', 7);
              this.slAfterShow = i(this, 'sl-after-show', 7);
              this.slHide = i(this, 'sl-hide', 7);
              this.slAfterHide = i(this, 'sl-after-hide', 7);
              this.slInitialFocus = i(this, 'sl-initial-focus', 7);
              this.slOverlayDismiss = i(this, 'sl-overlay-dismiss', 7);
              this.componentId = 'dialog-' + ++f;
              this.willShow = false;
              this.willHide = false;
              this.hasFooter = false;
              this.isVisible = false;
              this.open = false;
              this.label = '';
              this.noHeader = false;
            }
            e.prototype.handleOpenChange = function () {
              this.open ? this.show() : this.hide();
            };
            e.prototype.connectedCallback = function () {
              var e = this;
              this.handleCloseClick = this.handleCloseClick.bind(this);
              this.handleTransitionEnd = this.handleTransitionEnd.bind(this);
              this.handleKeyDown = this.handleKeyDown.bind(this);
              this.handleOverlayClick = this.handleOverlayClick.bind(this);
              this.handleSlotChange = this.handleSlotChange.bind(this);
              this.modal = new h(this.host, {
                onFocusOut: function () {
                  return e.panel.focus();
                }
              });
            };
            e.prototype.componentWillLoad = function () {
              this.handleSlotChange();
              if (this.open) {
                this.show();
              }
            };
            e.prototype.disconnectedCallback = function () {
              s(this.host);
            };
            e.prototype.show = function () {
              return __awaiter(this, void 0, void 0, function () {
                var e;
                var t = this;
                return __generator(this, function (i) {
                  if (this.willShow) {
                    return [2];
                  }
                  e = this.slShow.emit();
                  if (e.defaultPrevented) {
                    this.open = false;
                    return [2];
                  }
                  this.willShow = true;
                  this.isVisible = true;
                  this.open = true;
                  this.modal.activate();
                  l(this.host);
                  if (this.open) {
                    if (c) {
                      requestAnimationFrame(function () {
                        var e = t.slInitialFocus.emit();
                        if (!e.defaultPrevented) {
                          t.panel.focus({ preventScroll: true });
                        }
                      });
                    } else {
                      setTimeout(function () {
                        var e = t.slInitialFocus.emit();
                        if (!e.defaultPrevented) {
                          t.panel.focus();
                        }
                      }, 250);
                    }
                  }
                  return [2];
                });
              });
            };
            e.prototype.hide = function () {
              return __awaiter(this, void 0, void 0, function () {
                var e;
                return __generator(this, function (t) {
                  if (this.willHide) {
                    return [2];
                  }
                  e = this.slHide.emit();
                  if (e.defaultPrevented) {
                    this.open = true;
                    return [2];
                  }
                  this.willHide = true;
                  this.open = false;
                  this.modal.deactivate();
                  s(this.host);
                  return [2];
                });
              });
            };
            e.prototype.handleCloseClick = function () {
              this.hide();
            };
            e.prototype.handleKeyDown = function (e) {
              if (e.key === 'Escape') {
                this.hide();
              }
            };
            e.prototype.handleOverlayClick = function () {
              var e = this.slOverlayDismiss.emit();
              if (!e.defaultPrevented) {
                this.hide();
              }
            };
            e.prototype.handleSlotChange = function () {
              this.hasFooter = a(this.host, 'footer');
            };
            e.prototype.handleTransitionEnd = function (e) {
              var t = e.target;
              if (e.propertyName === 'opacity' && t.classList.contains('dialog__panel')) {
                this.isVisible = this.open;
                this.willShow = false;
                this.willHide = false;
                this.open ? this.slAfterShow.emit() : this.slAfterHide.emit();
              }
            };
            e.prototype.render = function () {
              var e = this;
              return o(
                'div',
                {
                  ref: function (t) {
                    return (e.dialog = t);
                  },
                  part: 'base',
                  class: {
                    dialog: true,
                    'dialog--open': this.open,
                    'dialog--visible': this.isVisible,
                    'dialog--has-footer': this.hasFooter
                  },
                  onKeyDown: this.handleKeyDown,
                  onTransitionEnd: this.handleTransitionEnd
                },
                o('div', { part: 'overlay', class: 'dialog__overlay', onClick: this.handleOverlayClick }),
                o(
                  'div',
                  {
                    ref: function (t) {
                      return (e.panel = t);
                    },
                    part: 'panel',
                    class: 'dialog__panel',
                    role: 'dialog',
                    'aria-modal': 'true',
                    'aria-hidden': this.open ? 'false' : 'true',
                    'aria-label': this.noHeader ? this.label : null,
                    'aria-labelledby': !this.noHeader ? this.componentId + '-title' : null,
                    tabIndex: 0
                  },
                  !this.noHeader &&
                    o(
                      'header',
                      { part: 'header', class: 'dialog__header' },
                      o(
                        'span',
                        { part: 'title', class: 'dialog__title', id: this.componentId + '-title' },
                        o('slot', { name: 'label' }, this.label || String.fromCharCode(65279))
                      ),
                      o('sl-icon-button', {
                        exportparts: 'base:close-button',
                        class: 'dialog__close',
                        name: 'x',
                        onClick: this.handleCloseClick
                      })
                    ),
                  o('div', { part: 'body', class: 'dialog__body' }, o('slot', null)),
                  o(
                    'footer',
                    { part: 'footer', class: 'dialog__footer' },
                    o('slot', { name: 'footer', onSlotchange: this.handleSlotChange })
                  )
                )
              );
            };
            Object.defineProperty(e.prototype, 'host', {
              get: function () {
                return n(this);
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e, 'watchers', {
              get: function () {
                return { open: ['handleOpenChange'] };
              },
              enumerable: false,
              configurable: true
            });
            return e;
          })()
        );
        u.style = d;
      }
    };
  }
);
