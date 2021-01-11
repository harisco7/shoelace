var __awaiter =
  (this && this.__awaiter) ||
  function (e, t, r, i) {
    function n(e) {
      return e instanceof r
        ? e
        : new r(function (t) {
            t(e);
          });
    }
    return new (r || (r = Promise))(function (r, a) {
      function l(e) {
        try {
          s(i.next(e));
        } catch (e) {
          a(e);
        }
      }
      function o(e) {
        try {
          s(i['throw'](e));
        } catch (e) {
          a(e);
        }
      }
      function s(e) {
        e.done ? r(e.value) : n(e.value).then(l, o);
      }
      s((i = i.apply(e, t || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (e, t) {
    var r = {
        label: 0,
        sent: function () {
          if (a[0] & 1) throw a[1];
          return a[1];
        },
        trys: [],
        ops: []
      },
      i,
      n,
      a,
      l;
    return (
      (l = { next: o(0), throw: o(1), return: o(2) }),
      typeof Symbol === 'function' &&
        (l[Symbol.iterator] = function () {
          return this;
        }),
      l
    );
    function o(e) {
      return function (t) {
        return s([e, t]);
      };
    }
    function s(l) {
      if (i) throw new TypeError('Generator is already executing.');
      while (r)
        try {
          if (
            ((i = 1),
            n &&
              (a = l[0] & 2 ? n['return'] : l[0] ? n['throw'] || ((a = n['return']) && a.call(n), 0) : n.next) &&
              !(a = a.call(n, l[1])).done)
          )
            return a;
          if (((n = 0), a)) l = [l[0] & 2, a.value];
          switch (l[0]) {
            case 0:
            case 1:
              a = l;
              break;
            case 4:
              r.label++;
              return { value: l[1], done: false };
            case 5:
              r.label++;
              n = l[1];
              l = [0];
              continue;
            case 7:
              l = r.ops.pop();
              r.trys.pop();
              continue;
            default:
              if (!((a = r.trys), (a = a.length > 0 && a[a.length - 1])) && (l[0] === 6 || l[0] === 2)) {
                r = 0;
                continue;
              }
              if (l[0] === 3 && (!a || (l[1] > a[0] && l[1] < a[3]))) {
                r.label = l[1];
                break;
              }
              if (l[0] === 6 && r.label < a[1]) {
                r.label = a[1];
                a = l;
                break;
              }
              if (a && r.label < a[2]) {
                r.label = a[2];
                r.ops.push(l);
                break;
              }
              if (a[2]) r.ops.pop();
              r.trys.pop();
              continue;
          }
          l = t.call(e, r);
        } catch (e) {
          l = [6, e];
          n = 0;
        } finally {
          i = a = 0;
        }
      if (l[0] & 5) throw l[1];
      return { value: l[0] ? l[1] : void 0, done: true };
    }
  };
var __spreadArrays =
  (this && this.__spreadArrays) ||
  function () {
    for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
    for (var i = Array(e), n = 0, t = 0; t < r; t++)
      for (var a = arguments[t], l = 0, o = a.length; l < o; l++, n++) i[n] = a[l];
    return i;
  };
System.register(['./p-351060b9.system.js', './p-ae00c24d.system.js'], function (e) {
  'use strict';
  var t, r, i, n, a;
  return {
    setters: [
      function (e) {
        t = e.r;
        r = e.c;
        i = e.h;
        n = e.g;
      },
      function (e) {
        a = e.g;
      }
    ],
    execute: function () {
      var l =
        ':host{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{display:block}.menu{padding:var(--sl-spacing-x-small) 0}.menu:focus{outline:none}';
      var o = e(
        'sl_menu',
        (function () {
          function e(e) {
            t(this, e);
            this.slSelect = r(this, 'sl-select', 7);
            this.typeToSelectString = '';
          }
          e.prototype.connectedCallback = function () {
            this.handleClick = this.handleClick.bind(this);
            this.handleKeyDown = this.handleKeyDown.bind(this);
          };
          e.prototype.typeToSelect = function (e) {
            return __awaiter(this, void 0, void 0, function () {
              var t, r, i, n, l, o;
              var s = this;
              return __generator(this, function (c) {
                clearTimeout(this.typeToSelectTimeout);
                this.typeToSelectTimeout = setTimeout(function () {
                  return (s.typeToSelectString = '');
                }, 750);
                this.typeToSelectString += e.toLowerCase();
                t = this.getItems();
                for (r = 0, i = t; r < i.length; r++) {
                  n = i[r];
                  l = n.shadowRoot.querySelector('slot:not([name])');
                  o = a(l).toLowerCase().trim();
                  if (o.substring(0, this.typeToSelectString.length) === this.typeToSelectString) {
                    n.setFocus();
                    break;
                  }
                }
                return [2];
              });
            });
          };
          e.prototype.getItems = function () {
            var e = this.menu.querySelector('slot');
            return __spreadArrays(e.assignedElements({ flatten: true })).filter(function (e) {
              return e.tagName.toLowerCase() === 'sl-menu-item' && !e.disabled;
            });
          };
          e.prototype.getActiveItem = function () {
            return this.getItems().find(function (e) {
              return e === document.activeElement;
            });
          };
          e.prototype.setActiveItem = function (e) {
            e.setFocus();
          };
          e.prototype.handleClick = function (e) {
            var t = e.target;
            var r = t.closest('sl-menu-item');
            if (r && !r.disabled) {
              this.slSelect.emit({ item: r });
            }
          };
          e.prototype.handleKeyDown = function (e) {
            if (e.key === 'Enter') {
              var t = this.getActiveItem();
              e.preventDefault();
              if (t) {
                this.slSelect.emit({ item: t });
              }
            }
            if (e.key === ' ') {
              e.preventDefault();
            }
            if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(e.key)) {
              var r = this.getItems();
              var i = this.getActiveItem();
              var n = r.indexOf(i);
              if (r.length) {
                e.preventDefault();
                if (e.key === 'ArrowDown') {
                  n++;
                } else if (e.key === 'ArrowUp') {
                  n--;
                } else if (e.key === 'Home') {
                  n = 0;
                } else if (e.key === 'End') {
                  n = r.length - 1;
                }
                if (n < 0) n = 0;
                if (n > r.length - 1) n = r.length - 1;
                this.setActiveItem(r[n]);
                return;
              }
            }
            this.typeToSelect(e.key);
          };
          e.prototype.render = function () {
            var e = this;
            return i(
              'div',
              {
                ref: function (t) {
                  return (e.menu = t);
                },
                part: 'base',
                class: 'menu',
                role: 'menu',
                onClick: this.handleClick,
                onKeyDown: this.handleKeyDown,
                tabIndex: 0
              },
              i('slot', null)
            );
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
      o.style = l;
      var s =
        ':host{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{display:inline-block}.tag{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;border:solid 1px;line-height:1;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.tag__clear::part(base){color:inherit;padding:0}.tag--primary{background-color:var(--sl-color-primary-100);border-color:var(--sl-color-primary-200);color:var(--sl-color-primary-700)}.tag--success{background-color:var(--sl-color-success-100);border-color:var(--sl-color-success-200);color:var(--sl-color-success-700)}.tag--info{background-color:var(--sl-color-info-100);border-color:var(--sl-color-info-200);color:var(--sl-color-info-700)}.tag--warning{background-color:var(--sl-color-warning-100);border-color:var(--sl-color-warning-200);color:var(--sl-color-warning-700)}.tag--danger{background-color:var(--sl-color-danger-100);border-color:var(--sl-color-danger-200);color:var(--sl-color-danger-700)}.tag--small{font-size:var(--sl-button-font-size-small);height:calc(var(--sl-input-height-small) * 0.8);line-height:calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);border-radius:var(--sl-input-border-radius-small);padding:0 var(--sl-spacing-x-small)}.tag--small .tag__clear{margin-left:var(--sl-spacing-xx-small);margin-right:calc(-1 * var(--sl-spacing-xxx-small))}.tag--medium{font-size:var(--sl-button-font-size-medium);height:calc(var(--sl-input-height-medium) * 0.8);line-height:calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);border-radius:var(--sl-input-border-radius-medium);padding:0 var(--sl-spacing-small)}.tag--medium .tag__clear{margin-left:var(--sl-spacing-xx-small);margin-right:calc(-1 * var(--sl-spacing-xx-small))}.tag--large{font-size:var(--sl-button-font-size-large);height:calc(var(--sl-input-height-large) * 0.8);line-height:calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);border-radius:var(--sl-input-border-radius-large);padding:0 var(--sl-spacing-medium)}.tag--large .tag__clear{margin-left:var(--sl-spacing-xx-small);margin-right:calc(-1 * var(--sl-spacing-x-small))}.tag--pill{border-radius:var(--sl-border-radius-pill)}';
      var c = e(
        'sl_tag',
        (function () {
          function e(e) {
            t(this, e);
            this.slClear = r(this, 'sl-clear', 7);
            this.type = 'primary';
            this.size = 'medium';
            this.pill = false;
            this.clearable = false;
          }
          e.prototype.connectedCallback = function () {
            this.handleClearClick = this.handleClearClick.bind(this);
          };
          e.prototype.handleClearClick = function () {
            this.slClear.emit();
          };
          e.prototype.render = function () {
            var e = this;
            return i(
              'span',
              {
                ref: function (t) {
                  return (e.tag = t);
                },
                part: 'base',
                class: {
                  tag: true,
                  'tag--primary': this.type === 'primary',
                  'tag--success': this.type === 'success',
                  'tag--info': this.type === 'info',
                  'tag--warning': this.type === 'warning',
                  'tag--danger': this.type === 'danger',
                  'tag--text': this.type === 'text',
                  'tag--small': this.size === 'small',
                  'tag--medium': this.size === 'medium',
                  'tag--large': this.size === 'large',
                  'tag--pill': this.pill,
                  'tag--clearable': this.clearable
                }
              },
              i('span', { part: 'content', class: 'tag__content' }, i('slot', null)),
              this.clearable &&
                i('sl-icon-button', {
                  exportparts: 'base:clear-button',
                  name: 'x',
                  class: 'tag__clear',
                  onClick: this.handleClearClick
                })
            );
          };
          return e;
        })()
      );
      c.style = s;
    }
  };
});
