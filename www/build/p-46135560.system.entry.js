var __awaiter =
  (this && this.__awaiter) ||
  function (t, e, i, r) {
    function n(t) {
      return t instanceof i
        ? t
        : new i(function (e) {
            e(t);
          });
    }
    return new (i || (i = Promise))(function (i, a) {
      function o(t) {
        try {
          l(r.next(t));
        } catch (t) {
          a(t);
        }
      }
      function s(t) {
        try {
          l(r['throw'](t));
        } catch (t) {
          a(t);
        }
      }
      function l(t) {
        t.done ? i(t.value) : n(t.value).then(o, s);
      }
      l((r = r.apply(t, e || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (t, e) {
    var i = {
        label: 0,
        sent: function () {
          if (a[0] & 1) throw a[1];
          return a[1];
        },
        trys: [],
        ops: []
      },
      r,
      n,
      a,
      o;
    return (
      (o = { next: s(0), throw: s(1), return: s(2) }),
      typeof Symbol === 'function' &&
        (o[Symbol.iterator] = function () {
          return this;
        }),
      o
    );
    function s(t) {
      return function (e) {
        return l([t, e]);
      };
    }
    function l(o) {
      if (r) throw new TypeError('Generator is already executing.');
      while (i)
        try {
          if (
            ((r = 1),
            n &&
              (a = o[0] & 2 ? n['return'] : o[0] ? n['throw'] || ((a = n['return']) && a.call(n), 0) : n.next) &&
              !(a = a.call(n, o[1])).done)
          )
            return a;
          if (((n = 0), a)) o = [o[0] & 2, a.value];
          switch (o[0]) {
            case 0:
            case 1:
              a = o;
              break;
            case 4:
              i.label++;
              return { value: o[1], done: false };
            case 5:
              i.label++;
              n = o[1];
              o = [0];
              continue;
            case 7:
              o = i.ops.pop();
              i.trys.pop();
              continue;
            default:
              if (!((a = i.trys), (a = a.length > 0 && a[a.length - 1])) && (o[0] === 6 || o[0] === 2)) {
                i = 0;
                continue;
              }
              if (o[0] === 3 && (!a || (o[1] > a[0] && o[1] < a[3]))) {
                i.label = o[1];
                break;
              }
              if (o[0] === 6 && i.label < a[1]) {
                i.label = a[1];
                a = o;
                break;
              }
              if (a && i.label < a[2]) {
                i.label = a[2];
                i.ops.push(o);
                break;
              }
              if (a[2]) i.ops.pop();
              i.trys.pop();
              continue;
          }
          o = e.call(t, i);
        } catch (t) {
          o = [6, t];
          n = 0;
        } finally {
          r = a = 0;
        }
      if (o[0] & 5) throw o[1];
      return { value: o[0] ? o[1] : void 0, done: true };
    }
  };
System.register(
  ['./p-351060b9.system.js', './p-ae00c24d.system.js', './p-4ebc54b7.system.js', './p-9be1ad03.system.js'],
  function (t) {
    'use strict';
    var e, i, r, n, a, o, s, l, h;
    return {
      setters: [
        function (t) {
          e = t.r;
          i = t.c;
          r = t.h;
          n = t.g;
        },
        function (t) {
          a = t.h;
        },
        function (t) {
          o = t.u;
          s = t.l;
        },
        function (t) {
          l = t.i;
          h = t.M;
        }
      ],
      execute: function () {
        var d =
          ':host{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{--size:25rem;display:contents}.drawer{top:0;left:0;width:100%;height:100%;pointer-events:none;overflow:hidden}.drawer:not(.drawer--visible){position:absolute;width:1px;height:1px;clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);overflow:hidden;pointer-events:none;visibility:hidden}.drawer--contained{position:absolute;z-index:initial}.drawer--fixed{position:fixed;z-index:var(--sl-z-index-drawer)}.drawer__panel{position:absolute;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;z-index:2;max-width:100%;max-height:100%;background-color:var(--sl-panel-background-color);-webkit-box-shadow:var(--sl-shadow-x-large);box-shadow:var(--sl-shadow-x-large);-webkit-transition:var(--sl-transition-medium) transform;transition:var(--sl-transition-medium) transform;overflow:auto;pointer-events:all}.drawer__panel:focus{outline:none}.drawer--top .drawer__panel{top:0;right:auto;bottom:auto;left:0;width:100%;height:var(--size);-webkit-transform:translate(0, -100%);transform:translate(0, -100%)}.drawer--right .drawer__panel{top:0;right:0;bottom:auto;left:auto;width:var(--size);height:100%;-webkit-transform:translate(100%, 0);transform:translate(100%, 0)}.drawer--bottom .drawer__panel{top:auto;right:auto;bottom:0;left:0;width:100%;height:var(--size);-webkit-transform:translate(0, 100%);transform:translate(0, 100%)}.drawer--left .drawer__panel{top:0;right:auto;bottom:auto;left:0;width:var(--size);height:100%;-webkit-transform:translate(-100%, 0);transform:translate(-100%, 0)}.drawer--open .drawer__panel{-webkit-transform:translate(0, 0);transform:translate(0, 0)}.drawer__header{display:-ms-flexbox;display:flex}.drawer__title{-ms-flex:1 1 auto;flex:1 1 auto;font-size:var(--sl-font-size-large);line-height:var(--sl-line-height-dense);padding:var(--sl-spacing-large)}.drawer__close{-ms-flex:0 0 auto;flex:0 0 auto;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;font-size:var(--sl-font-size-x-large);padding:0 var(--sl-spacing-large)}.drawer__body{-ms-flex:1 1 auto;flex:1 1 auto;padding:var(--sl-spacing-large);overflow:auto;-webkit-overflow-scrolling:touch}.drawer__footer{text-align:right;padding:var(--sl-spacing-large)}.drawer__footer ::slotted(sl-button:not(:last-of-type)){margin-right:var(--sl-spacing-x-small)}.drawer:not(.drawer--has-footer) .drawer__footer{display:none}.drawer__overlay{display:block;position:fixed;top:0;right:0;bottom:0;left:0;background-color:var(--sl-overlay-background-color);opacity:0;-webkit-transition:var(--sl-transition-medium) opacity;transition:var(--sl-transition-medium) opacity;pointer-events:all}.drawer--contained .drawer__overlay{position:absolute}.drawer--open .drawer__overlay{opacity:1}';
        var f = l();
        var c = 0;
        var u = t(
          'sl_drawer',
          (function () {
            function t(t) {
              e(this, t);
              this.slShow = i(this, 'sl-show', 7);
              this.slAfterShow = i(this, 'sl-after-show', 7);
              this.slHide = i(this, 'sl-hide', 7);
              this.slAfterHide = i(this, 'sl-after-hide', 7);
              this.slInitialFocus = i(this, 'sl-initial-focus', 7);
              this.slOverlayDismiss = i(this, 'sl-overlay-dismiss', 7);
              this.componentId = 'drawer-' + ++c;
              this.willShow = false;
              this.willHide = false;
              this.hasFooter = false;
              this.isVisible = false;
              this.open = false;
              this.label = '';
              this.placement = 'right';
              this.contained = false;
              this.noHeader = false;
            }
            t.prototype.handleOpenChange = function () {
              this.open ? this.show() : this.hide();
            };
            t.prototype.connectedCallback = function () {
              var t = this;
              this.handleCloseClick = this.handleCloseClick.bind(this);
              this.handleTransitionEnd = this.handleTransitionEnd.bind(this);
              this.handleKeyDown = this.handleKeyDown.bind(this);
              this.handleOverlayClick = this.handleOverlayClick.bind(this);
              this.handleSlotChange = this.handleSlotChange.bind(this);
              this.modal = new h(this.host, {
                onFocusOut: function () {
                  return t.contained ? null : t.panel.focus();
                }
              });
            };
            t.prototype.componentWillLoad = function () {
              this.handleSlotChange();
              if (this.open) {
                this.show();
              }
            };
            t.prototype.disconnectedCallback = function () {
              o(this.host);
            };
            t.prototype.show = function () {
              return __awaiter(this, void 0, void 0, function () {
                var t;
                var e = this;
                return __generator(this, function (i) {
                  if (this.willShow) {
                    return [2];
                  }
                  t = this.slShow.emit();
                  if (t.defaultPrevented) {
                    this.open = false;
                    return [2];
                  }
                  this.willShow = true;
                  this.isVisible = true;
                  this.open = true;
                  if (!this.contained) {
                    this.modal.activate();
                    s(this.host);
                  }
                  if (this.open) {
                    if (f) {
                      requestAnimationFrame(function () {
                        var t = e.slInitialFocus.emit();
                        if (!t.defaultPrevented) {
                          e.panel.focus({ preventScroll: true });
                        }
                      });
                    } else {
                      setTimeout(function () {
                        var t = e.slInitialFocus.emit();
                        if (!t.defaultPrevented) {
                          e.panel.focus();
                        }
                      }, 250);
                    }
                  }
                  return [2];
                });
              });
            };
            t.prototype.hide = function () {
              return __awaiter(this, void 0, void 0, function () {
                var t;
                return __generator(this, function (e) {
                  if (this.willHide) {
                    return [2];
                  }
                  t = this.slHide.emit();
                  if (t.defaultPrevented) {
                    this.open = true;
                    return [2];
                  }
                  this.willHide = true;
                  this.open = false;
                  this.modal.deactivate();
                  o(this.host);
                  return [2];
                });
              });
            };
            t.prototype.handleCloseClick = function () {
              this.hide();
            };
            t.prototype.handleKeyDown = function (t) {
              if (t.key === 'Escape') {
                this.hide();
              }
            };
            t.prototype.handleOverlayClick = function () {
              var t = this.slOverlayDismiss.emit();
              if (!t.defaultPrevented) {
                this.hide();
              }
            };
            t.prototype.handleSlotChange = function () {
              this.hasFooter = a(this.host, 'footer');
            };
            t.prototype.handleTransitionEnd = function (t) {
              var e = t.target;
              if (t.propertyName === 'transform' && e.classList.contains('drawer__panel')) {
                this.isVisible = this.open;
                this.willShow = false;
                this.willHide = false;
                this.open ? this.slAfterShow.emit() : this.slAfterHide.emit();
              }
            };
            t.prototype.render = function () {
              var t = this;
              return r(
                'div',
                {
                  ref: function (e) {
                    return (t.drawer = e);
                  },
                  part: 'base',
                  class: {
                    drawer: true,
                    'drawer--open': this.open,
                    'drawer--visible': this.isVisible,
                    'drawer--top': this.placement === 'top',
                    'drawer--right': this.placement === 'right',
                    'drawer--bottom': this.placement === 'bottom',
                    'drawer--left': this.placement === 'left',
                    'drawer--contained': this.contained,
                    'drawer--fixed': !this.contained,
                    'drawer--has-footer': this.hasFooter
                  },
                  onKeyDown: this.handleKeyDown,
                  onTransitionEnd: this.handleTransitionEnd
                },
                r('div', { part: 'overlay', class: 'drawer__overlay', onClick: this.handleOverlayClick }),
                r(
                  'div',
                  {
                    ref: function (e) {
                      return (t.panel = e);
                    },
                    part: 'panel',
                    class: 'drawer__panel',
                    role: 'dialog',
                    'aria-modal': 'true',
                    'aria-hidden': this.open ? 'false' : 'true',
                    'aria-label': this.noHeader ? this.label : null,
                    'aria-labelledby': !this.noHeader ? this.componentId + '-title' : null,
                    tabIndex: 0
                  },
                  !this.noHeader &&
                    r(
                      'header',
                      { part: 'header', class: 'drawer__header' },
                      r(
                        'span',
                        { part: 'title', class: 'drawer__title', id: this.componentId + '-title' },
                        r('slot', { name: 'label' }, this.label || String.fromCharCode(65279))
                      ),
                      r('sl-icon-button', {
                        exportparts: 'base:close-button',
                        class: 'drawer__close',
                        name: 'x',
                        onClick: this.handleCloseClick
                      })
                    ),
                  r('div', { part: 'body', class: 'drawer__body' }, r('slot', null)),
                  r(
                    'footer',
                    { part: 'footer', class: 'drawer__footer' },
                    r('slot', { name: 'footer', onSlotchange: this.handleSlotChange })
                  )
                )
              );
            };
            Object.defineProperty(t.prototype, 'host', {
              get: function () {
                return n(this);
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(t, 'watchers', {
              get: function () {
                return { open: ['handleOpenChange'] };
              },
              enumerable: false,
              configurable: true
            });
            return t;
          })()
        );
        u.style = d;
      }
    };
  }
);
