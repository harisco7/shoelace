var __awaiter =
  (this && this.__awaiter) ||
  function (t, r, o, i) {
    function a(t) {
      return t instanceof o
        ? t
        : new o(function (r) {
            r(t);
          });
    }
    return new (o || (o = Promise))(function (o, n) {
      function e(t) {
        try {
          l(i.next(t));
        } catch (t) {
          n(t);
        }
      }
      function s(t) {
        try {
          l(i['throw'](t));
        } catch (t) {
          n(t);
        }
      }
      function l(t) {
        t.done ? o(t.value) : a(t.value).then(e, s);
      }
      l((i = i.apply(t, r || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (t, r) {
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
      a,
      n,
      e;
    return (
      (e = { next: s(0), throw: s(1), return: s(2) }),
      typeof Symbol === 'function' &&
        (e[Symbol.iterator] = function () {
          return this;
        }),
      e
    );
    function s(t) {
      return function (r) {
        return l([t, r]);
      };
    }
    function l(e) {
      if (i) throw new TypeError('Generator is already executing.');
      while (o)
        try {
          if (
            ((i = 1),
            a &&
              (n = e[0] & 2 ? a['return'] : e[0] ? a['throw'] || ((n = a['return']) && n.call(a), 0) : a.next) &&
              !(n = n.call(a, e[1])).done)
          )
            return n;
          if (((a = 0), n)) e = [e[0] & 2, n.value];
          switch (e[0]) {
            case 0:
            case 1:
              n = e;
              break;
            case 4:
              o.label++;
              return { value: e[1], done: false };
            case 5:
              o.label++;
              a = e[1];
              e = [0];
              continue;
            case 7:
              e = o.ops.pop();
              o.trys.pop();
              continue;
            default:
              if (!((n = o.trys), (n = n.length > 0 && n[n.length - 1])) && (e[0] === 6 || e[0] === 2)) {
                o = 0;
                continue;
              }
              if (e[0] === 3 && (!n || (e[1] > n[0] && e[1] < n[3]))) {
                o.label = e[1];
                break;
              }
              if (e[0] === 6 && o.label < n[1]) {
                o.label = n[1];
                n = e;
                break;
              }
              if (n && o.label < n[2]) {
                o.label = n[2];
                o.ops.push(e);
                break;
              }
              if (n[2]) o.ops.pop();
              o.trys.pop();
              continue;
          }
          e = r.call(t, o);
        } catch (t) {
          e = [6, t];
          a = 0;
        } finally {
          i = n = 0;
        }
      if (e[0] & 5) throw e[1];
      return { value: e[0] ? e[1] : void 0, done: true };
    }
  };
System.register(['./p-351060b9.system.js'], function (t) {
  'use strict';
  var r, o, i;
  return {
    setters: [
      function (t) {
        r = t.r;
        o = t.c;
        i = t.h;
      }
    ],
    execute: function () {
      var a =
        ':host{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{--thumb-size:20px;--tooltip-offset-y:10px;--track-color:var(--sl-color-gray-200);--track-height:6px;display:block}.range{position:relative}.range .range__control{-webkit-appearance:none;width:100%;height:var(--sl-input-height-medium);background:transparent;line-height:var(--sl-input-height-medium);vertical-align:middle}.range .range__control::-webkit-slider-runnable-track{width:100%;height:var(--track-height);background-color:var(--track-color);border-radius:3px;border:none}.range .range__control::-webkit-slider-thumb{border:none;width:var(--thumb-size);height:var(--thumb-size);border-radius:50%;background-color:var(--sl-color-primary-500);border:solid var(--sl-input-border-width) var(--sl-color-primary-500);-webkit-appearance:none;margin-top:calc(var(--thumb-size) / -2 + var(--track-height) / 2);-webkit-transition:var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color, var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow, var(--sl-transition-fast) transform;transition:var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color, var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow, var(--sl-transition-fast) transform;cursor:pointer}.range .range__control:not(:disabled)::-webkit-slider-thumb:hover{background-color:var(--sl-color-primary-400);border-color:var(--sl-color-primary-400)}.range .range__control:not(:disabled):focus::-webkit-slider-thumb{background-color:var(--sl-color-primary-400);border-color:var(--sl-color-primary-400);-webkit-box-shadow:0 0 0 var(--sl-focus-ring-width) var(--sl-focus-ring-color-primary);box-shadow:0 0 0 var(--sl-focus-ring-width) var(--sl-focus-ring-color-primary)}.range .range__control:not(:disabled)::-webkit-slider-thumb:active{background-color:var(--sl-color-primary-500);border-color:var(--sl-color-primary-500);cursor:-webkit-grabbing;cursor:grabbing}.range .range__control::-moz-focus-outer{border:0}.range .range__control::-moz-range-track{width:100%;height:var(--track-height);background-color:var(--track-color);border-radius:3px;border:none}.range .range__control::-moz-range-thumb{border:none;height:var(--thumb-size);width:var(--thumb-size);border-radius:50%;background-color:var(--sl-color-primary-500);border-color:var(--sl-color-primary-500);-moz-transition:var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color, var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow, var(--sl-transition-fast) transform;transition:var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color, var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow, var(--sl-transition-fast) transform;cursor:pointer}.range .range__control:not(:disabled)::-moz-range-thumb:hover{background-color:var(--sl-color-primary-400);border-color:var(--sl-color-primary-400)}.range .range__control:not(:disabled):focus::-moz-range-thumb{background-color:var(--sl-color-primary-400);border-color:var(--sl-color-primary-400);box-shadow:0 0 0 var(--sl-focus-ring-width) var(--sl-focus-ring-color-primary)}.range .range__control:not(:disabled)::-moz-range-thumb:active{background-color:var(--sl-color-primary-600);border-color:var(--sl-color-primary-600);cursor:grabbing}.range .range__control:focus{outline:none}.range .range__control:disabled{opacity:0.5}.range .range__control:disabled::-webkit-slider-thumb{cursor:not-allowed}.range .range__control:disabled::-moz-range-thumb{cursor:not-allowed}.range__tooltip{position:absolute;z-index:var(--sl-z-index-tooltip);left:1px;border-radius:var(--sl-tooltip-border-radius);background-color:var(--sl-tooltip-background-color);font-family:var(--sl-tooltip-font-family);font-size:var(--sl-tooltip-font-size);font-weight:var(--sl-tooltip-font-weight);line-height:var(--sl-tooltip-line-height);color:var(--sl-tooltip-color);opacity:0;padding:var(--sl-tooltip-padding);-webkit-transition:var(--sl-transition-fast) opacity;transition:var(--sl-transition-fast) opacity;pointer-events:none}.range__tooltip::after{content:"";position:absolute;width:0;height:0;left:50%;margin-left:calc(-1 * var(--sl-tooltip-arrow-size))}.range--tooltip-visible .range__tooltip{opacity:1}.range--tooltip-top .range__tooltip{top:calc(-1 * var(--thumb-size) - var(--tooltip-offset-y))}.range--tooltip-top .range__tooltip::after{border-top:var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);border-left:var(--sl-tooltip-arrow-size) solid transparent;border-right:var(--sl-tooltip-arrow-size) solid transparent;top:100%}.range--tooltip-bottom .range__tooltip{bottom:calc(-1 * var(--thumb-size) - var(--tooltip-offset-y))}.range--tooltip-bottom .range__tooltip::after{border-bottom:var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);border-left:var(--sl-tooltip-arrow-size) solid transparent;border-right:var(--sl-tooltip-arrow-size) solid transparent;bottom:100%}';
      var n = t(
        'sl_range',
        (function () {
          function t(t) {
            r(this, t);
            this.slChange = o(this, 'sl-change', 7);
            this.slBlur = o(this, 'sl-blur', 7);
            this.slFocus = o(this, 'sl-focus', 7);
            this.hasFocus = false;
            this.hasTooltip = false;
            this.name = '';
            this.disabled = false;
            this.invalid = false;
            this.min = 0;
            this.max = 100;
            this.step = 1;
            this.tooltip = 'top';
            this.tooltipFormatter = function (t) {
              return t.toString();
            };
          }
          t.prototype.connectedCallback = function () {
            this.handleInput = this.handleInput.bind(this);
            this.handleBlur = this.handleBlur.bind(this);
            this.handleFocus = this.handleFocus.bind(this);
            this.handleTouchStart = this.handleTouchStart.bind(this);
          };
          t.prototype.componentWillLoad = function () {
            if (this.value === undefined || this.value === null) this.value = this.min;
            if (this.value < this.min) this.value = this.min;
            if (this.value > this.max) this.value = this.max;
          };
          t.prototype.componentDidLoad = function () {
            var t = this;
            this.syncTooltip();
            this.resizeObserver = new ResizeObserver(function () {
              return t.syncTooltip();
            });
          };
          t.prototype.setFocus = function (t) {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (r) {
                this.input.focus(t);
                return [2];
              });
            });
          };
          t.prototype.removeFocus = function () {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (t) {
                this.input.blur();
                return [2];
              });
            });
          };
          t.prototype.setCustomValidity = function (t) {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (r) {
                this.input.setCustomValidity(t);
                this.invalid = !this.input.checkValidity();
                return [2];
              });
            });
          };
          t.prototype.handleInput = function () {
            var t = this;
            this.value = Number(this.input.value);
            this.slChange.emit();
            requestAnimationFrame(function () {
              return t.syncTooltip();
            });
          };
          t.prototype.handleBlur = function () {
            this.hasFocus = false;
            this.hasTooltip = false;
            this.slBlur.emit();
            this.resizeObserver.unobserve(this.input);
          };
          t.prototype.handleFocus = function () {
            this.hasFocus = true;
            this.hasTooltip = true;
            this.slFocus.emit();
            this.resizeObserver.observe(this.input);
          };
          t.prototype.handleTouchStart = function () {
            this.setFocus();
          };
          t.prototype.syncTooltip = function () {
            if (this.tooltip !== 'none') {
              var t = Math.max(0, (this.value - this.min) / (this.max - this.min));
              var r = this.input.offsetWidth;
              var o = this.output.offsetWidth;
              var i = getComputedStyle(this.input).getPropertyValue('--thumb-size');
              var a = 'calc(' + r * t + 'px - calc(calc(' + t + ' * ' + i + ') - calc(' + i + ' / 2)))';
              this.output.style.transform = 'translateX(' + a + ')';
              this.output.style.marginLeft = '-' + o / 2 + 'px';
            }
          };
          t.prototype.render = function () {
            var t = this;
            return i(
              'div',
              {
                part: 'base',
                class: {
                  range: true,
                  'range--disabled': this.disabled,
                  'range--focused': this.hasFocus,
                  'range--tooltip-visible': this.hasTooltip,
                  'range--tooltip-top': this.tooltip === 'top',
                  'range--tooltip-bottom': this.tooltip === 'bottom'
                },
                onTouchStart: this.handleTouchStart
              },
              i('input', {
                part: 'input',
                ref: function (r) {
                  return (t.input = r);
                },
                type: 'range',
                class: 'range__control',
                name: this.name,
                disabled: this.disabled,
                min: this.min,
                max: this.max,
                step: this.step,
                value: this.value,
                onInput: this.handleInput,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur
              }),
              this.tooltip !== 'none' &&
                i(
                  'output',
                  {
                    part: 'tooltip',
                    ref: function (r) {
                      return (t.output = r);
                    },
                    class: 'range__tooltip'
                  },
                  this.tooltipFormatter(this.value)
                )
            );
          };
          return t;
        })()
      );
      n.style = a;
    }
  };
});
