var __awaiter =
  (this && this.__awaiter) ||
  function (e, t, o, i) {
    function r(e) {
      return e instanceof o
        ? e
        : new o(function (t) {
            t(e);
          });
    }
    return new (o || (o = Promise))(function (o, n) {
      function c(e) {
        try {
          l(i.next(e));
        } catch (e) {
          n(e);
        }
      }
      function s(e) {
        try {
          l(i['throw'](e));
        } catch (e) {
          n(e);
        }
      }
      function l(e) {
        e.done ? o(e.value) : r(e.value).then(c, s);
      }
      l((i = i.apply(e, t || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (e, t) {
    var o = {
        label: 0,
        sent: function () {
          if (n[0] & 1) throw n[1];
          return n[1];
        },
        trys: [],
        ops: []
      },
      i,
      r,
      n,
      c;
    return (
      (c = { next: s(0), throw: s(1), return: s(2) }),
      typeof Symbol === 'function' &&
        (c[Symbol.iterator] = function () {
          return this;
        }),
      c
    );
    function s(e) {
      return function (t) {
        return l([e, t]);
      };
    }
    function l(c) {
      if (i) throw new TypeError('Generator is already executing.');
      while (o)
        try {
          if (
            ((i = 1),
            r &&
              (n = c[0] & 2 ? r['return'] : c[0] ? r['throw'] || ((n = r['return']) && n.call(r), 0) : r.next) &&
              !(n = n.call(r, c[1])).done)
          )
            return n;
          if (((r = 0), n)) c = [c[0] & 2, n.value];
          switch (c[0]) {
            case 0:
            case 1:
              n = c;
              break;
            case 4:
              o.label++;
              return { value: c[1], done: false };
            case 5:
              o.label++;
              r = c[1];
              c = [0];
              continue;
            case 7:
              c = o.ops.pop();
              o.trys.pop();
              continue;
            default:
              if (!((n = o.trys), (n = n.length > 0 && n[n.length - 1])) && (c[0] === 6 || c[0] === 2)) {
                o = 0;
                continue;
              }
              if (c[0] === 3 && (!n || (c[1] > n[0] && c[1] < n[3]))) {
                o.label = c[1];
                break;
              }
              if (c[0] === 6 && o.label < n[1]) {
                o.label = n[1];
                n = c;
                break;
              }
              if (n && o.label < n[2]) {
                o.label = n[2];
                o.ops.push(c);
                break;
              }
              if (n[2]) o.ops.pop();
              o.trys.pop();
              continue;
          }
          c = t.call(e, o);
        } catch (e) {
          c = [6, e];
          r = 0;
        } finally {
          i = n = 0;
        }
      if (c[0] & 5) throw c[1];
      return { value: c[0] ? c[1] : void 0, done: true };
    }
  };
System.register(['./p-351060b9.system.js'], function (e) {
  'use strict';
  var t, o, i;
  return {
    setters: [
      function (e) {
        t = e.r;
        o = e.c;
        i = e.h;
      }
    ],
    execute: function () {
      var r =
        ':host{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{display:inline-block}.checkbox{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;font-family:var(--sl-input-font-family);font-size:var(--sl-input-font-size-medium);font-weight:var(--sl-input-font-weight);color:var(--sl-input-color);vertical-align:middle;cursor:pointer}.checkbox__control{position:relative;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:var(--sl-toggle-size);height:var(--sl-toggle-size);border:solid var(--sl-input-border-width) var(--sl-input-border-color);border-radius:2px;background-color:var(--sl-input-background-color);color:var(--sl-color-white);-webkit-transition:var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color, var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow;transition:var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color, var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow}.checkbox__control input[type=checkbox]{position:absolute;opacity:0;padding:0;margin:0;pointer-events:none}.checkbox__control .checkbox__icon{display:-ms-inline-flexbox;display:inline-flex;width:var(--sl-toggle-size);height:var(--sl-toggle-size)}.checkbox__control .checkbox__icon svg{width:100%;height:100%}.checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover{border-color:var(--sl-input-border-color-hover);background-color:var(--sl-input-background-color-hover)}.checkbox.checkbox--focused:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control{border-color:var(--sl-input-border-color-focus);background-color:var(--sl-input-background-color-focus);-webkit-box-shadow:0 0 0 var(--sl-focus-ring-width) var(--sl-focus-ring-color-primary);box-shadow:0 0 0 var(--sl-focus-ring-width) var(--sl-focus-ring-color-primary)}.checkbox--checked .checkbox__control,.checkbox--indeterminate .checkbox__control{border-color:var(--sl-color-primary-500);background-color:var(--sl-color-primary-500)}.checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,.checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover{border-color:var(--sl-color-primary-400);background-color:var(--sl-color-primary-400)}.checkbox.checkbox--checked:not(.checkbox--disabled).checkbox--focused .checkbox__control,.checkbox.checkbox--indeterminate:not(.checkbox--disabled).checkbox--focused .checkbox__control{border-color:var(--sl-color-primary-400);background-color:var(--sl-color-primary-400);-webkit-box-shadow:0 0 0 var(--sl-focus-ring-width) var(--sl-focus-ring-color-primary);box-shadow:0 0 0 var(--sl-focus-ring-width) var(--sl-focus-ring-color-primary)}.checkbox--disabled{opacity:0.5;cursor:not-allowed}.checkbox__label{line-height:var(--sl-toggle-size);margin-left:0.5em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}';
      var n = 0;
      var c = e(
        'sl_checkbox',
        (function () {
          function e(e) {
            t(this, e);
            this.slBlur = o(this, 'sl-blur', 7);
            this.slChange = o(this, 'sl-change', 7);
            this.slFocus = o(this, 'sl-focus', 7);
            this.inputId = 'checkbox-' + ++n;
            this.labelId = 'checkbox-label-' + n;
            this.hasFocus = false;
            this.disabled = false;
            this.required = false;
            this.checked = false;
            this.indeterminate = false;
            this.invalid = false;
          }
          e.prototype.handleCheckedChange = function () {
            this.input.checked = this.checked;
            this.input.indeterminate = this.indeterminate;
            this.slChange.emit();
          };
          e.prototype.connectedCallback = function () {
            this.handleClick = this.handleClick.bind(this);
            this.handleBlur = this.handleBlur.bind(this);
            this.handleFocus = this.handleFocus.bind(this);
            this.handleMouseDown = this.handleMouseDown.bind(this);
          };
          e.prototype.componentDidLoad = function () {
            this.input.indeterminate = this.indeterminate;
          };
          e.prototype.setFocus = function (e) {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (t) {
                this.input.focus(e);
                return [2];
              });
            });
          };
          e.prototype.removeFocus = function () {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (e) {
                this.input.blur();
                return [2];
              });
            });
          };
          e.prototype.reportValidity = function () {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (e) {
                return [2, this.input.reportValidity()];
              });
            });
          };
          e.prototype.setCustomValidity = function (e) {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (t) {
                this.input.setCustomValidity(e);
                this.invalid = !this.input.checkValidity();
                return [2];
              });
            });
          };
          e.prototype.handleClick = function () {
            this.checked = this.input.checked;
            this.indeterminate = false;
          };
          e.prototype.handleBlur = function () {
            this.hasFocus = false;
            this.slBlur.emit();
          };
          e.prototype.handleFocus = function () {
            this.hasFocus = true;
            this.slFocus.emit();
          };
          e.prototype.handleMouseDown = function (e) {
            e.preventDefault();
            this.input.focus();
          };
          e.prototype.render = function () {
            var e = this;
            return i(
              'label',
              {
                part: 'base',
                class: {
                  checkbox: true,
                  'checkbox--checked': this.checked,
                  'checkbox--disabled': this.disabled,
                  'checkbox--focused': this.hasFocus,
                  'checkbox--indeterminate': this.indeterminate
                },
                htmlFor: this.inputId,
                onMouseDown: this.handleMouseDown
              },
              i(
                'span',
                { part: 'control', class: 'checkbox__control' },
                this.checked &&
                  i(
                    'span',
                    { part: 'checked-icon', class: 'checkbox__icon' },
                    i(
                      'svg',
                      { viewBox: '0 0 16 16' },
                      i(
                        'g',
                        {
                          stroke: 'none',
                          'stroke-width': '1',
                          fill: 'none',
                          'fill-rule': 'evenodd',
                          'stroke-linecap': 'round'
                        },
                        i(
                          'g',
                          { stroke: 'currentColor', 'stroke-width': '2' },
                          i(
                            'g',
                            { transform: 'translate(3.428571, 3.428571)' },
                            i('path', { d: 'M0,5.71428571 L3.42857143,9.14285714' }),
                            i('path', { d: 'M9.14285714,0 L3.42857143,9.14285714' })
                          )
                        )
                      )
                    )
                  ),
                !this.checked &&
                  this.indeterminate &&
                  i(
                    'span',
                    { part: 'indeterminate-icon', class: 'checkbox__icon' },
                    i(
                      'svg',
                      { viewBox: '0 0 16 16' },
                      i(
                        'g',
                        {
                          stroke: 'none',
                          'stroke-width': '1',
                          fill: 'none',
                          'fill-rule': 'evenodd',
                          'stroke-linecap': 'round'
                        },
                        i(
                          'g',
                          { stroke: 'currentColor', 'stroke-width': '2' },
                          i(
                            'g',
                            { transform: 'translate(2.285714, 6.857143)' },
                            i('path', { d: 'M10.2857143,1.14285714 L1.14285714,1.14285714' })
                          )
                        )
                      )
                    )
                  ),
                i('input', {
                  ref: function (t) {
                    return (e.input = t);
                  },
                  id: this.inputId,
                  type: 'checkbox',
                  name: this.name,
                  value: this.value,
                  checked: this.checked,
                  disabled: this.disabled,
                  required: this.required,
                  role: 'checkbox',
                  'aria-checked': this.checked ? 'true' : 'false',
                  'aria-labelledby': this.labelId,
                  onClick: this.handleClick,
                  onBlur: this.handleBlur,
                  onFocus: this.handleFocus
                })
              ),
              i('span', { part: 'label', id: this.labelId, class: 'checkbox__label' }, i('slot', null))
            );
          };
          Object.defineProperty(e, 'watchers', {
            get: function () {
              return { checked: ['handleCheckedChange'], indeterminate: ['handleCheckedChange'] };
            },
            enumerable: false,
            configurable: true
          });
          return e;
        })()
      );
      c.style = r;
    }
  };
});
