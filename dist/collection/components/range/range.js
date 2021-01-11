var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
    function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
    function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0: case 1: t = op; break;
        case 4: _.label++; return { value: op[1], done: false };
        case 5: _.label++; y = op[1]; op = [0]; continue;
        case 7: op = _.ops.pop(); _.trys.pop(); continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
          if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
          if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
          if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
          if (t[2]) _.ops.pop();
          _.trys.pop(); continue;
      }
      op = body.call(thisArg, _);
    } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
    if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
};
import { Component, Event, Method, Prop, State, h } from '@stencil/core';
/**
 * @since 2.0
 * @status stable
 *
 * @part base - The component's base wrapper.
 * @part input - The native range input.
 * @part tooltip - The range tooltip.
 */
var Range = /** @class */ (function () {
  function Range() {
    this.hasFocus = false;
    this.hasTooltip = false;
    /** The input's name attribute. */
    this.name = '';
    /** Set to true to disable the input. */
    this.disabled = false;
    /**
     * This will be true when the control is in an invalid state. Validity in range inputs is determined by the message
     * provided by the `setCustomValidity` method.
     */
    this.invalid = false;
    /** The input's min attribute. */
    this.min = 0;
    /** The input's max attribute. */
    this.max = 100;
    /** The input's step attribute. */
    this.step = 1;
    /** The preferred placedment of the tooltip. */
    this.tooltip = 'top';
    /** A function used to format the tooltip's value. */
    this.tooltipFormatter = function (value) { return value.toString(); };
  }
  Range.prototype.connectedCallback = function () {
    this.handleInput = this.handleInput.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);
  };
  Range.prototype.componentWillLoad = function () {
    if (this.value === undefined || this.value === null)
      this.value = this.min;
    if (this.value < this.min)
      this.value = this.min;
    if (this.value > this.max)
      this.value = this.max;
  };
  Range.prototype.componentDidLoad = function () {
    var _this = this;
    this.syncTooltip();
    this.resizeObserver = new ResizeObserver(function () { return _this.syncTooltip(); });
  };
  /** Sets focus on the input. */
  Range.prototype.setFocus = function (options) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        this.input.focus(options);
        return [2 /*return*/];
      });
    });
  };
  /** Removes focus from the input. */
  Range.prototype.removeFocus = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        this.input.blur();
        return [2 /*return*/];
      });
    });
  };
  /** Sets a custom validation message. If `message` is not empty, the field will be considered invalid. */
  Range.prototype.setCustomValidity = function (message) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        this.input.setCustomValidity(message);
        this.invalid = !this.input.checkValidity();
        return [2 /*return*/];
      });
    });
  };
  Range.prototype.handleInput = function () {
    var _this = this;
    this.value = Number(this.input.value);
    this.slChange.emit();
    requestAnimationFrame(function () { return _this.syncTooltip(); });
  };
  Range.prototype.handleBlur = function () {
    this.hasFocus = false;
    this.hasTooltip = false;
    this.slBlur.emit();
    this.resizeObserver.unobserve(this.input);
  };
  Range.prototype.handleFocus = function () {
    this.hasFocus = true;
    this.hasTooltip = true;
    this.slFocus.emit();
    this.resizeObserver.observe(this.input);
  };
  Range.prototype.handleTouchStart = function () {
    this.setFocus();
  };
  Range.prototype.syncTooltip = function () {
    if (this.tooltip !== 'none') {
      var percent = Math.max(0, (this.value - this.min) / (this.max - this.min));
      var inputWidth = this.input.offsetWidth;
      var tooltipWidth = this.output.offsetWidth;
      var thumbSize = getComputedStyle(this.input).getPropertyValue('--thumb-size');
      var x = "calc(" + inputWidth * percent + "px - calc(calc(" + percent + " * " + thumbSize + ") - calc(" + thumbSize + " / 2)))";
      this.output.style.transform = "translateX(" + x + ")";
      this.output.style.marginLeft = "-" + tooltipWidth / 2 + "px";
    }
  };
  Range.prototype.render = function () {
    var _this = this;
    return (h("div", { part: "base", class: {
        range: true,
        // States
        'range--disabled': this.disabled,
        'range--focused': this.hasFocus,
        'range--tooltip-visible': this.hasTooltip,
        'range--tooltip-top': this.tooltip === 'top',
        'range--tooltip-bottom': this.tooltip === 'bottom'
      }, onTouchStart: this.handleTouchStart },
      h("input", { part: "input", ref: function (el) { return (_this.input = el); }, type: "range", class: "range__control", name: this.name, disabled: this.disabled, min: this.min, max: this.max, step: this.step, value: this.value, onInput: this.handleInput, onFocus: this.handleFocus, onBlur: this.handleBlur }),
      this.tooltip !== 'none' && (h("output", { part: "tooltip", ref: function (el) { return (_this.output = el); }, class: "range__tooltip" }, this.tooltipFormatter(this.value)))));
  };
  Object.defineProperty(Range, "is", {
    get: function () { return "sl-range"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Range, "encapsulation", {
    get: function () { return "shadow"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Range, "originalStyleUrls", {
    get: function () { return {
      "$": ["range.scss"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Range, "styleUrls", {
    get: function () { return {
      "$": ["range.css"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Range, "properties", {
    get: function () { return {
      "name": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The input's name attribute."
        },
        "attribute": "name",
        "reflect": false,
        "defaultValue": "''"
      },
      "value": {
        "type": "number",
        "mutable": true,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The input's value attribute."
        },
        "attribute": "value",
        "reflect": false
      },
      "disabled": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Set to true to disable the input."
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      },
      "invalid": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "This will be true when the control is in an invalid state. Validity in range inputs is determined by the message\nprovided by the `setCustomValidity` method."
        },
        "attribute": "invalid",
        "reflect": true,
        "defaultValue": "false"
      },
      "min": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The input's min attribute."
        },
        "attribute": "min",
        "reflect": false,
        "defaultValue": "0"
      },
      "max": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The input's max attribute."
        },
        "attribute": "max",
        "reflect": false,
        "defaultValue": "100"
      },
      "step": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The input's step attribute."
        },
        "attribute": "step",
        "reflect": false,
        "defaultValue": "1"
      },
      "tooltip": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'top' | 'bottom' | 'none'",
          "resolved": "\"bottom\" | \"none\" | \"top\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The preferred placedment of the tooltip."
        },
        "attribute": "tooltip",
        "reflect": false,
        "defaultValue": "'top'"
      },
      "tooltipFormatter": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "(value: number) => string",
          "resolved": "(value: number) => string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "A function used to format the tooltip's value."
        },
        "defaultValue": "(value: number) => value.toString()"
      }
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Range, "states", {
    get: function () { return {
      "hasFocus": {},
      "hasTooltip": {}
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Range, "events", {
    get: function () { return [{
        "method": "slChange",
        "name": "sl-change",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the control's value changes."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "slBlur",
        "name": "sl-blur",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the control loses focus."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "slFocus",
        "name": "sl-focus",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the control gains focus."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }]; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Range, "methods", {
    get: function () { return {
      "setFocus": {
        "complexType": {
          "signature": "(options?: FocusOptions) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            },
            "FocusOptions": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Sets focus on the input.",
          "tags": []
        }
      },
      "removeFocus": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Removes focus from the input.",
          "tags": []
        }
      },
      "setCustomValidity": {
        "complexType": {
          "signature": "(message: string) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Sets a custom validation message. If `message` is not empty, the field will be considered invalid.",
          "tags": []
        }
      }
    }; },
    enumerable: false,
    configurable: true
  });
  return Range;
}());
export { Range };
