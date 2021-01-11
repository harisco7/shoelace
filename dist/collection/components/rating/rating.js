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
import { Component, Element, Event, Method, Prop, State, Watch, h } from '@stencil/core';
import { focusVisible } from '../../utilities/focus-visible';
import { clamp } from '../../utilities/math';
/**
 * @since 2.0
 * @status stable
 *
 * @part base - The component's base wrapper.
 */
var Rating = /** @class */ (function () {
  function Rating() {
    this.hoverValue = 0;
    this.isHovering = false;
    /** The current rating. */
    this.value = 0;
    /** The highest rating to show. */
    this.max = 5;
    /** The minimum increment value allowed by the control. */
    this.precision = 1;
    /** Makes the rating readonly. */
    this.readonly = false;
    /** Disables the rating. */
    this.disabled = false;
    /** A function that returns the symbols to display. Accepts an option `value` parameter you can use to map a specific
     * symbol to a value. */
    // @ts-ignore
    this.getSymbol = function (value) { return '<sl-icon name="star-fill"></sl-icon>'; };
  }
  Rating.prototype.handleValueChange = function () {
    this.slChange.emit();
  };
  Rating.prototype.connectedCallback = function () {
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
  };
  /** Sets focus on the rating. */
  Rating.prototype.setFocus = function (options) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        this.rating.focus(options);
        return [2 /*return*/];
      });
    });
  };
  /** Removes focus from the rating. */
  Rating.prototype.removeFocus = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        this.rating.blur();
        return [2 /*return*/];
      });
    });
  };
  Rating.prototype.componentDidLoad = function () {
    focusVisible.observe(this.rating);
  };
  Rating.prototype.disconnectedCallback = function () {
    focusVisible.unobserve(this.rating);
  };
  Rating.prototype.getValueFromMousePosition = function (event) {
    var containerLeft = this.rating.getBoundingClientRect().left;
    var containerWidth = this.rating.getBoundingClientRect().width;
    return clamp(this.roundToPrecision(((event.clientX - containerLeft) / containerWidth) * this.max, this.precision), 0, this.max);
  };
  Rating.prototype.handleClick = function (event) {
    if (this.disabled || this.readonly) {
      return;
    }
    var newValue = this.getValueFromMousePosition(event);
    this.value = newValue === this.value ? 0 : newValue;
    this.isHovering = false;
  };
  Rating.prototype.handleKeyDown = function (event) {
    if (this.disabled || this.readonly) {
      return;
    }
    if (event.key === 'ArrowLeft') {
      var decrement = event.shiftKey ? 1 : this.precision;
      this.value = Math.max(0, this.value - decrement);
      event.preventDefault();
    }
    if (event.key === 'ArrowRight') {
      var increment = event.shiftKey ? 1 : this.precision;
      this.value = Math.min(this.max, this.value + increment);
      event.preventDefault();
    }
    if (event.key === 'Home') {
      this.value = 0;
      event.preventDefault();
    }
    if (event.key === 'End') {
      this.value = this.max;
      event.preventDefault();
    }
  };
  Rating.prototype.handleMouseEnter = function () {
    this.isHovering = true;
  };
  Rating.prototype.handleMouseLeave = function () {
    this.isHovering = false;
  };
  Rating.prototype.handleMouseMove = function (event) {
    this.hoverValue = this.getValueFromMousePosition(event);
  };
  Rating.prototype.roundToPrecision = function (numberToRound, precision) {
    if (precision === void 0) { precision = 0.5; }
    var multiplier = 1 / precision;
    return Math.ceil(numberToRound * multiplier) / multiplier;
  };
  Rating.prototype.render = function () {
    var _this = this;
    var counter = Array.from(Array(this.max).keys());
    var displayValue = 0;
    if (this.disabled || this.readonly) {
      displayValue = this.value;
    }
    else {
      displayValue = this.isHovering ? this.hoverValue : this.value;
    }
    return (h("div", { ref: function (el) { return (_this.rating = el); }, part: "base", class: {
        rating: true,
        'rating--readonly': this.readonly,
        'rating--disabled': this.disabled
      }, "aria-disabled": this.disabled ? 'true' : 'false', "aria-readonly": this.readonly ? 'true' : 'false', "aria-value": this.value, "aria-valuemin": 0, "aria-valuemax": this.max, tabIndex: this.disabled ? -1 : 0, onClick: this.handleClick, onKeyDown: this.handleKeyDown, onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave, onMouseMove: this.handleMouseMove },
      h("span", { class: "rating__symbols rating__symbols--inactive" }, counter.map(function (index) { return (h("span", { class: {
          rating__symbol: true,
          'rating__symbol--hover': _this.isHovering && Math.ceil(displayValue) === index + 1
        }, role: "presentation", 
        // Users can click the current value to clear the rating. When this happens, we set this.isHovering to
        // false to prevent the hover state from confusing them as they move the mouse out of the control. This
        // extra mouseenter will reinstate it if they happen to mouse over an adjacent symbol.
        onMouseEnter: _this.handleMouseEnter, innerHTML: _this.getSymbol(index + 1) })); })),
      h("span", { class: "rating__symbols rating__symbols--indicator" }, counter.map(function (index) { return (h("span", { class: {
          rating__symbol: true,
          'rating__symbol--hover': _this.isHovering && Math.ceil(displayValue) === index + 1
        }, style: {
          clipPath: displayValue > index + 1 ? null : "inset(0 " + (100 - ((displayValue - index) / 1) * 100) + "% 0 0)"
        }, role: "presentation", innerHTML: _this.getSymbol(index + 1) })); }))));
  };
  Object.defineProperty(Rating, "is", {
    get: function () { return "sl-rating"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Rating, "encapsulation", {
    get: function () { return "shadow"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Rating, "originalStyleUrls", {
    get: function () { return {
      "$": ["rating.scss"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Rating, "styleUrls", {
    get: function () { return {
      "$": ["rating.css"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Rating, "properties", {
    get: function () { return {
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
          "text": "The current rating."
        },
        "attribute": "value",
        "reflect": true,
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
          "text": "The highest rating to show."
        },
        "attribute": "max",
        "reflect": false,
        "defaultValue": "5"
      },
      "precision": {
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
          "text": "The minimum increment value allowed by the control."
        },
        "attribute": "precision",
        "reflect": false,
        "defaultValue": "1"
      },
      "readonly": {
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
          "text": "Makes the rating readonly."
        },
        "attribute": "readonly",
        "reflect": false,
        "defaultValue": "false"
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
          "text": "Disables the rating."
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      },
      "getSymbol": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "(value?: number) => string",
          "resolved": "(value?: number) => string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "A function that returns the symbols to display. Accepts an option `value` parameter you can use to map a specific\nsymbol to a value."
        },
        "defaultValue": "(value?: number) => '<sl-icon name=\"star-fill\"></sl-icon>'"
      }
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Rating, "states", {
    get: function () { return {
      "hoverValue": {},
      "isHovering": {}
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Rating, "events", {
    get: function () { return [{
        "method": "slChange",
        "name": "sl-change",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the rating's value changes."
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
  Object.defineProperty(Rating, "methods", {
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
          "text": "Sets focus on the rating.",
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
          "text": "Removes focus from the rating.",
          "tags": []
        }
      }
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Rating, "elementRef", {
    get: function () { return "host"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Rating, "watchers", {
    get: function () { return [{
        "propName": "value",
        "methodName": "handleValueChange"
      }]; },
    enumerable: false,
    configurable: true
  });
  return Rating;
}());
export { Rating };
