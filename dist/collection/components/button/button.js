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
 * @slot - The button's label.
 * @slot prefix - Used to prepend an icon or similar element to the button.
 * @slot suffix - Used to append an icon or similar element to the button.
 *
 * @part base - The component's base wrapper.
 * @part prefix - The prefix container.
 * @part label - The button's label.
 * @part suffix - The suffix container.
 * @part caret - The button's caret.
 */
var Button = /** @class */ (function () {
  function Button() {
    this.hasFocus = false;
    /** The button's type. */
    this.type = 'default';
    /** The button's size. */
    this.size = 'medium';
    /** Set to true to draw the button with a caret for use with dropdowns, popovers, etc. */
    this.caret = false;
    /** Set to true to disable the button. */
    this.disabled = false;
    /** Set to true to draw the button in a loading state. */
    this.loading = false;
    /** Set to true to draw a pill-style button with rounded edges. */
    this.pill = false;
    /** Set to true to draw a circle button. */
    this.circle = false;
    /** Indicates if activating the button should submit the form. Ignored when `href` is set. */
    this.submit = false;
  }
  Button.prototype.connectedCallback = function () {
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleClick = this.handleClick.bind(this);
  };
  /** Sets focus on the button. */
  Button.prototype.setFocus = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        this.button.focus();
        return [2 /*return*/];
      });
    });
  };
  /** Removes focus from the button. */
  Button.prototype.removeFocus = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        this.button.blur();
        return [2 /*return*/];
      });
    });
  };
  Button.prototype.handleBlur = function () {
    this.hasFocus = false;
    this.slBlur.emit();
  };
  Button.prototype.handleFocus = function () {
    this.hasFocus = true;
    this.slFocus.emit();
  };
  Button.prototype.handleClick = function (event) {
    if (this.disabled || this.loading) {
      event.preventDefault();
      event.stopPropagation();
    }
  };
  Button.prototype.render = function () {
    var _this = this;
    var isLink = this.href ? true : false;
    var isButton = !isLink;
    var Button = isLink ? 'a' : 'button';
    return (h(Button, { ref: function (el) { return (_this.button = el); }, part: "base", class: {
        button: true,
        // Types
        'button--default': this.type === 'default',
        'button--primary': this.type === 'primary',
        'button--success': this.type === 'success',
        'button--info': this.type === 'info',
        'button--warning': this.type === 'warning',
        'button--danger': this.type === 'danger',
        'button--text': this.type === 'text',
        // Sizes
        'button--small': this.size === 'small',
        'button--medium': this.size === 'medium',
        'button--large': this.size === 'large',
        // Modifiers
        'button--caret': this.caret,
        'button--circle': this.circle,
        'button--disabled': this.disabled,
        'button--focused': this.hasFocus,
        'button--loading': this.loading,
        'button--pill': this.pill
      }, disabled: isButton ? this.disabled : null, type: isButton ? (this.submit ? 'submit' : 'button') : null, name: isButton ? this.name : null, value: isButton ? this.value : null, href: isLink && this.href, target: isLink && this.target ? this.target : null, download: isLink && this.download ? this.download : null, rel: isLink && this.target ? 'noreferrer noopener' : null, onBlur: this.handleBlur, onFocus: this.handleFocus, onClick: this.handleClick },
      h("span", { part: "prefix", class: "button__prefix" },
        h("slot", { name: "prefix" })),
      h("span", { part: "label", class: "button__label" },
        h("slot", null)),
      h("span", { part: "suffix", class: "button__suffix" },
        h("slot", { name: "suffix" })),
      this.caret && (h("span", { part: "caret", class: "button__caret" },
        h("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
          h("polyline", { points: "6 9 12 15 18 9" })))),
      this.loading && h("sl-spinner", null)));
  };
  Object.defineProperty(Button, "is", {
    get: function () { return "sl-button"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Button, "encapsulation", {
    get: function () { return "shadow"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Button, "originalStyleUrls", {
    get: function () { return {
      "$": ["button.scss"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Button, "styleUrls", {
    get: function () { return {
      "$": ["button.css"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Button, "properties", {
    get: function () { return {
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'text'",
          "resolved": "\"danger\" | \"default\" | \"info\" | \"primary\" | \"success\" | \"text\" | \"warning\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The button's type."
        },
        "attribute": "type",
        "reflect": true,
        "defaultValue": "'default'"
      },
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'small' | 'medium' | 'large'",
          "resolved": "\"large\" | \"medium\" | \"small\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The button's size."
        },
        "attribute": "size",
        "reflect": true,
        "defaultValue": "'medium'"
      },
      "caret": {
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
          "text": "Set to true to draw the button with a caret for use with dropdowns, popovers, etc."
        },
        "attribute": "caret",
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
          "text": "Set to true to disable the button."
        },
        "attribute": "disabled",
        "reflect": true,
        "defaultValue": "false"
      },
      "loading": {
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
          "text": "Set to true to draw the button in a loading state."
        },
        "attribute": "loading",
        "reflect": true,
        "defaultValue": "false"
      },
      "pill": {
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
          "text": "Set to true to draw a pill-style button with rounded edges."
        },
        "attribute": "pill",
        "reflect": true,
        "defaultValue": "false"
      },
      "circle": {
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
          "text": "Set to true to draw a circle button."
        },
        "attribute": "circle",
        "reflect": true,
        "defaultValue": "false"
      },
      "submit": {
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
          "text": "Indicates if activating the button should submit the form. Ignored when `href` is set."
        },
        "attribute": "submit",
        "reflect": true,
        "defaultValue": "false"
      },
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
          "text": "An optional name for the button. Ignored when `href` is set."
        },
        "attribute": "name",
        "reflect": false
      },
      "value": {
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
          "text": "An optional value for the button. Ignored when `href` is set."
        },
        "attribute": "value",
        "reflect": false
      },
      "href": {
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
          "text": "When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`."
        },
        "attribute": "href",
        "reflect": false
      },
      "target": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'_blank' | '_parent' | '_self' | '_top'",
          "resolved": "\"_blank\" | \"_parent\" | \"_self\" | \"_top\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Tells the browser where to open the link. Only used when `href` is set."
        },
        "attribute": "target",
        "reflect": false
      },
      "download": {
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
          "text": "Tells the browser to download the linked file as this filename. Only used when `href` is set."
        },
        "attribute": "download",
        "reflect": false
      }
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Button, "states", {
    get: function () { return {
      "hasFocus": {}
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Button, "events", {
    get: function () { return [{
        "method": "slBlur",
        "name": "sl-blur",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the button loses focus."
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
          "text": "Emitted when the button gains focus."
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
  Object.defineProperty(Button, "methods", {
    get: function () { return {
      "setFocus": {
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
          "text": "Sets focus on the button.",
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
          "text": "Removes focus from the button.",
          "tags": []
        }
      }
    }; },
    enumerable: false,
    configurable: true
  });
  return Button;
}());
export { Button };
