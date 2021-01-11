var __awaiter =
  (this && this.__awaiter) ||
  function (r, t, e, o) {
    function i(r) {
      return r instanceof e
        ? r
        : new e(function (t) {
            t(r);
          });
    }
    return new (e || (e = Promise))(function (e, n) {
      function s(r) {
        try {
          l(o.next(r));
        } catch (r) {
          n(r);
        }
      }
      function a(r) {
        try {
          l(o['throw'](r));
        } catch (r) {
          n(r);
        }
      }
      function l(r) {
        r.done ? e(r.value) : i(r.value).then(s, a);
      }
      l((o = o.apply(r, t || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (r, t) {
    var e = {
        label: 0,
        sent: function () {
          if (n[0] & 1) throw n[1];
          return n[1];
        },
        trys: [],
        ops: []
      },
      o,
      i,
      n,
      s;
    return (
      (s = { next: a(0), throw: a(1), return: a(2) }),
      typeof Symbol === 'function' &&
        (s[Symbol.iterator] = function () {
          return this;
        }),
      s
    );
    function a(r) {
      return function (t) {
        return l([r, t]);
      };
    }
    function l(s) {
      if (o) throw new TypeError('Generator is already executing.');
      while (e)
        try {
          if (
            ((o = 1),
            i &&
              (n = s[0] & 2 ? i['return'] : s[0] ? i['throw'] || ((n = i['return']) && n.call(i), 0) : i.next) &&
              !(n = n.call(i, s[1])).done)
          )
            return n;
          if (((i = 0), n)) s = [s[0] & 2, n.value];
          switch (s[0]) {
            case 0:
            case 1:
              n = s;
              break;
            case 4:
              e.label++;
              return { value: s[1], done: false };
            case 5:
              e.label++;
              i = s[1];
              s = [0];
              continue;
            case 7:
              s = e.ops.pop();
              e.trys.pop();
              continue;
            default:
              if (!((n = e.trys), (n = n.length > 0 && n[n.length - 1])) && (s[0] === 6 || s[0] === 2)) {
                e = 0;
                continue;
              }
              if (s[0] === 3 && (!n || (s[1] > n[0] && s[1] < n[3]))) {
                e.label = s[1];
                break;
              }
              if (s[0] === 6 && e.label < n[1]) {
                e.label = n[1];
                n = s;
                break;
              }
              if (n && e.label < n[2]) {
                e.label = n[2];
                e.ops.push(s);
                break;
              }
              if (n[2]) e.ops.pop();
              e.trys.pop();
              continue;
          }
          s = t.call(r, e);
        } catch (r) {
          s = [6, r];
          i = 0;
        } finally {
          o = n = 0;
        }
      if (s[0] & 5) throw s[1];
      return { value: s[0] ? s[1] : void 0, done: true };
    }
  };
var __spreadArrays =
  (this && this.__spreadArrays) ||
  function () {
    for (var r = 0, t = 0, e = arguments.length; t < e; t++) r += arguments[t].length;
    for (var o = Array(r), i = 0, t = 0; t < e; t++)
      for (var n = arguments[t], s = 0, a = n.length; s < a; s++, i++) o[i] = n[s];
    return o;
  };
System.register(['./p-351060b9.system.js'], function (r) {
  'use strict';
  var t, e, o, i;
  return {
    setters: [
      function (r) {
        t = r.r;
        e = r.c;
        o = r.h;
        i = r.g;
      }
    ],
    execute: function () {
      var n =
        ':host{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{display:inline-block}.radio{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;font-family:var(--sl-input-font-family);font-size:var(--sl-input-font-size-medium);font-weight:var(--sl-input-font-weight);color:var(--sl-input-color);vertical-align:middle;cursor:pointer}.radio__icon{display:-ms-inline-flexbox;display:inline-flex;width:var(--sl-toggle-size);height:var(--sl-toggle-size)}.radio__icon svg{width:100%;height:100%}.radio__control{position:relative;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:var(--sl-toggle-size);height:var(--sl-toggle-size);border:solid var(--sl-input-border-width) var(--sl-input-border-color);border-radius:50%;background-color:var(--sl-input-background-color);color:transparent;-webkit-transition:var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color, var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow;transition:var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color, var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow}.radio__control input[type=radio]{position:absolute;opacity:0;padding:0;margin:0;pointer-events:none}.radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover{border-color:var(--sl-input-border-color-hover);background-color:var(--sl-input-background-color-hover)}.radio.radio--focused:not(.radio--checked):not(.radio--disabled) .radio__control{border-color:var(--sl-input-border-color-focus);background-color:var(--sl-input-background-color-focus);-webkit-box-shadow:0 0 0 var(--sl-focus-ring-width) var(--sl-focus-ring-color-primary);box-shadow:0 0 0 var(--sl-focus-ring-width) var(--sl-focus-ring-color-primary)}.radio--checked .radio__control{color:var(--sl-color-white);border-color:var(--sl-color-primary-500);background-color:var(--sl-color-primary-500)}.radio.radio--checked:not(.radio--disabled) .radio__control:hover{border-color:var(--sl-color-primary-400);background-color:var(--sl-color-primary-400)}.radio.radio--checked:not(.radio--disabled).radio--focused .radio__control{border-color:var(--sl-color-primary-400);background-color:var(--sl-color-primary-400);-webkit-box-shadow:0 0 0 var(--sl-focus-ring-width) var(--sl-focus-ring-color-primary);box-shadow:0 0 0 var(--sl-focus-ring-width) var(--sl-focus-ring-color-primary)}.radio--disabled{opacity:0.5;cursor:not-allowed}.radio__label{line-height:var(--sl-toggle-size);margin-left:0.5em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}';
      var s = 0;
      var a = r(
        'sl_radio',
        (function () {
          function r(r) {
            t(this, r);
            this.slBlur = e(this, 'sl-blur', 7);
            this.slChange = e(this, 'sl-change', 7);
            this.slFocus = e(this, 'sl-focus', 7);
            this.inputId = 'radio-' + ++s;
            this.labelId = 'radio-label-' + s;
            this.hasFocus = false;
            this.disabled = false;
            this.checked = false;
            this.invalid = false;
          }
          r.prototype.handleCheckedChange = function () {
            if (this.checked) {
              this.getSiblingRadios().map(function (r) {
                return (r.checked = false);
              });
            }
            this.input.checked = this.checked;
            this.slChange.emit();
          };
          r.prototype.connectedCallback = function () {
            this.handleClick = this.handleClick.bind(this);
            this.handleBlur = this.handleBlur.bind(this);
            this.handleFocus = this.handleFocus.bind(this);
            this.handleKeyDown = this.handleKeyDown.bind(this);
            this.handleMouseDown = this.handleMouseDown.bind(this);
          };
          r.prototype.setFocus = function (r) {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (t) {
                this.input.focus(r);
                return [2];
              });
            });
          };
          r.prototype.removeFocus = function () {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (r) {
                this.input.blur();
                return [2];
              });
            });
          };
          r.prototype.reportValidity = function () {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (r) {
                return [2, this.input.reportValidity()];
              });
            });
          };
          r.prototype.setCustomValidity = function (r) {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (t) {
                this.input.setCustomValidity(r);
                this.invalid = !this.input.checkValidity();
                return [2];
              });
            });
          };
          r.prototype.getAllRadios = function () {
            var r = this;
            var t = this.host.closest('sl-form, form') || document.body;
            if (!this.name) return [];
            return __spreadArrays(t.querySelectorAll('sl-radio')).filter(function (t) {
              return t.name === r.name;
            });
          };
          r.prototype.getSiblingRadios = function () {
            var r = this;
            return this.getAllRadios().filter(function (t) {
              return t !== r.host;
            });
          };
          r.prototype.handleClick = function () {
            this.checked = this.input.checked;
          };
          r.prototype.handleBlur = function () {
            this.hasFocus = false;
            this.slBlur.emit();
          };
          r.prototype.handleFocus = function () {
            this.hasFocus = true;
            this.slFocus.emit();
          };
          r.prototype.handleKeyDown = function (r) {
            if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(r.key)) {
              var t = this.getAllRadios().filter(function (r) {
                return !r.disabled;
              });
              var e = ['ArrowUp', 'ArrowLeft'].includes(r.key) ? -1 : 1;
              var o = t.indexOf(this.host) + e;
              if (o < 0) o = t.length - 1;
              if (o > t.length - 1) o = 0;
              this.getAllRadios().map(function (r) {
                return (r.checked = false);
              });
              t[o].setFocus();
              t[o].checked = true;
              r.preventDefault();
            }
          };
          r.prototype.handleMouseDown = function (r) {
            r.preventDefault();
            this.input.focus();
          };
          r.prototype.render = function () {
            var r = this;
            return o(
              'label',
              {
                part: 'base',
                class: {
                  radio: true,
                  'radio--checked': this.checked,
                  'radio--disabled': this.disabled,
                  'radio--focused': this.hasFocus
                },
                htmlFor: this.inputId,
                onKeyDown: this.handleKeyDown,
                onMouseDown: this.handleMouseDown
              },
              o(
                'span',
                { part: 'control', class: 'radio__control' },
                o(
                  'span',
                  { part: 'checked-icon', class: 'radio__icon' },
                  o(
                    'svg',
                    { viewBox: '0 0 16 16' },
                    o(
                      'g',
                      { stroke: 'none', 'stroke-width': '1', fill: 'none', 'fill-rule': 'evenodd' },
                      o('g', { fill: 'currentColor' }, o('circle', { cx: '8', cy: '8', r: '3.42857143' }))
                    )
                  )
                ),
                o('input', {
                  ref: function (t) {
                    return (r.input = t);
                  },
                  id: this.inputId,
                  type: 'radio',
                  name: this.name,
                  value: this.value,
                  checked: this.checked,
                  disabled: this.disabled,
                  role: 'radio',
                  'aria-checked': this.checked ? 'true' : 'false',
                  'aria-labelledby': this.labelId,
                  onClick: this.handleClick,
                  onBlur: this.handleBlur,
                  onFocus: this.handleFocus
                })
              ),
              o('span', { part: 'label', id: this.labelId, class: 'radio__label' }, o('slot', null))
            );
          };
          Object.defineProperty(r.prototype, 'host', {
            get: function () {
              return i(this);
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(r, 'watchers', {
            get: function () {
              return { checked: ['handleCheckedChange'] };
            },
            enumerable: false,
            configurable: true
          });
          return r;
        })()
      );
      a.style = n;
    }
  };
});
