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
import { Component, Method, Prop, State, h } from '@stencil/core';
/**
 * @since 2.0
 * @status stable
 *
 * @slot - The menu item's label.
 * @slot prefix - Used to prepend an icon or similar element to the menu item.
 * @slot suffix - Used to append an icon or similar element to the menu item.
 *
 * @part base - The component's base wrapper.
 * @part checked-icon - The container that wraps the checked icon.
 * @part prefix - The prefix container.
 * @part label - The menu item label.
 * @part suffix - The suffix container.
 */
var MenuItem = /** @class */ (function () {
  function MenuItem() {
    this.hasFocus = false;
    /** Set to true to draw the item in a checked state. */
    this.checked = false;
    /** A unique value to store in the menu item. This can be used as a way to identify menu items when selected. */
    this.value = '';
    /** Set to true to draw the menu item in a disabled state. */
    this.disabled = false;
  }
  MenuItem.prototype.connectedCallback = function () {
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  };
  /** Sets focus on the button. */
  MenuItem.prototype.setFocus = function (options) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        this.menuItem.focus(options);
        return [2 /*return*/];
      });
    });
  };
  /** Removes focus from the button. */
  MenuItem.prototype.removeFocus = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        this.menuItem.blur();
        return [2 /*return*/];
      });
    });
  };
  MenuItem.prototype.handleBlur = function () {
    this.hasFocus = false;
  };
  MenuItem.prototype.handleFocus = function () {
    this.hasFocus = true;
  };
  MenuItem.prototype.handleMouseEnter = function () {
    this.setFocus();
  };
  MenuItem.prototype.handleMouseLeave = function () {
    this.removeFocus();
  };
  MenuItem.prototype.render = function () {
    var _this = this;
    return (h("div", { ref: function (el) { return (_this.menuItem = el); }, part: "base", class: {
        'menu-item': true,
        'menu-item--checked': this.checked,
        'menu-item--disabled': this.disabled,
        'menu-item--focused': this.hasFocus
      }, role: "menuitem", "aria-disabled": this.disabled ? 'true' : 'false', "aria-checked": this.checked ? 'true' : 'false', tabIndex: !this.disabled ? 0 : null, onFocus: this.handleFocus, onBlur: this.handleBlur, onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave },
      h("span", { part: "checked-icon", class: "menu-item__check" },
        h("sl-icon", { name: "check2", "aria-hidden": "true" })),
      h("span", { part: "prefix", class: "menu-item__prefix" },
        h("slot", { name: "prefix" })),
      h("span", { part: "label", class: "menu-item__label" },
        h("slot", null)),
      h("span", { part: "suffix", class: "menu-item__suffix" },
        h("slot", { name: "suffix" }))));
  };
  Object.defineProperty(MenuItem, "is", {
    get: function () { return "sl-menu-item"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MenuItem, "encapsulation", {
    get: function () { return "shadow"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MenuItem, "originalStyleUrls", {
    get: function () { return {
      "$": ["menu-item.scss"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MenuItem, "styleUrls", {
    get: function () { return {
      "$": ["menu-item.css"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MenuItem, "properties", {
    get: function () { return {
      "checked": {
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
          "text": "Set to true to draw the item in a checked state."
        },
        "attribute": "checked",
        "reflect": true,
        "defaultValue": "false"
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
          "text": "A unique value to store in the menu item. This can be used as a way to identify menu items when selected."
        },
        "attribute": "value",
        "reflect": true,
        "defaultValue": "''"
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
          "text": "Set to true to draw the menu item in a disabled state."
        },
        "attribute": "disabled",
        "reflect": true,
        "defaultValue": "false"
      }
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MenuItem, "states", {
    get: function () { return {
      "hasFocus": {}
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MenuItem, "methods", {
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
  return MenuItem;
}());
export { MenuItem };
