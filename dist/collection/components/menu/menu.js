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
var __spreadArrays = (this && this.__spreadArrays) || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
      r[k] = a[j];
  return r;
};
import { Component, Element, Event, Method, State, h } from '@stencil/core';
import { getTextContent } from '../../utilities/slot';
/**
 * @since 2.0
 * @status stable
 *
 * @slot - The menu's content, including menu items, menu dividers, and menu labels.
 *
 * @part base - The component's base wrapper.
 */
var Menu = /** @class */ (function () {
  function Menu() {
    this.typeToSelectString = '';
    this.hasFocus = false;
  }
  Menu.prototype.connectedCallback = function () {
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  };
  /** Sets focus on the menu. */
  Menu.prototype.setFocus = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        this.hasFocus = true;
        this.menu.focus();
        return [2 /*return*/];
      });
    });
  };
  /** Removes focus from the menu. */
  Menu.prototype.removeFocus = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        this.hasFocus = false;
        this.menu.blur();
        return [2 /*return*/];
      });
    });
  };
  /**
   * Initiates type-to-select logic, which automatically selects an option based on what the user is currently typing.
   * The key passed will be appended to the internal query and the selection will be updated. After a brief period, the
   * internal query is cleared automatically. This method is intended to be used with the keydown event. Useful for
   * enabling type-to-select when the menu doesn't have focus.
   */
  Menu.prototype.typeToSelect = function (key) {
    return __awaiter(this, void 0, void 0, function () {
      var items, _i, items_1, item, slot, label;
      var _this = this;
      return __generator(this, function (_a) {
        clearTimeout(this.typeToSelectTimeout);
        this.typeToSelectTimeout = setTimeout(function () { return (_this.typeToSelectString = ''); }, 750);
        this.typeToSelectString += key.toLowerCase();
        items = this.getItems();
        for (_i = 0, items_1 = items; _i < items_1.length; _i++) {
          item = items_1[_i];
          slot = item.shadowRoot.querySelector('slot:not([name])');
          label = getTextContent(slot).toLowerCase().trim();
          if (label.substring(0, this.typeToSelectString.length) === this.typeToSelectString) {
            item.setFocus();
            break;
          }
        }
        return [2 /*return*/];
      });
    });
  };
  Menu.prototype.getItems = function () {
    var slot = this.menu.querySelector('slot');
    return __spreadArrays(slot.assignedElements({ flatten: true })).filter(function (el) { return el.tagName.toLowerCase() === 'sl-menu-item' && !el.disabled; });
  };
  Menu.prototype.getActiveItem = function () {
    return this.getItems().find(function (i) { return i === document.activeElement; });
  };
  Menu.prototype.setActiveItem = function (item) {
    item.setFocus();
  };
  Menu.prototype.handleClick = function (event) {
    var target = event.target;
    var item = target.closest('sl-menu-item');
    if (item && !item.disabled) {
      this.slSelect.emit({ item: item });
    }
  };
  Menu.prototype.handleKeyDown = function (event) {
    // Make a selection when pressing enter
    if (event.key === 'Enter') {
      var item = this.getActiveItem();
      event.preventDefault();
      if (item) {
        this.slSelect.emit({ item: item });
      }
    }
    // Prevent scrolling when space is pressed
    if (event.key === ' ') {
      event.preventDefault();
    }
    // Move the selection when pressing down or up
    if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
      var items = this.getItems();
      var selectedItem = this.getActiveItem();
      var index = items.indexOf(selectedItem);
      if (items.length) {
        event.preventDefault();
        if (event.key === 'ArrowDown') {
          index++;
        }
        else if (event.key === 'ArrowUp') {
          index--;
        }
        else if (event.key === 'Home') {
          index = 0;
        }
        else if (event.key === 'End') {
          index = items.length - 1;
        }
        if (index < 0)
          index = 0;
        if (index > items.length - 1)
          index = items.length - 1;
        this.setActiveItem(items[index]);
        return;
      }
    }
    this.typeToSelect(event.key);
  };
  Menu.prototype.render = function () {
    var _this = this;
    return (h("div", { ref: function (el) { return (_this.menu = el); }, part: "base", class: {
        menu: true,
        'menu--has-focus': this.hasFocus
      }, role: "menu", onClick: this.handleClick, onKeyDown: this.handleKeyDown },
      h("slot", null)));
  };
  Object.defineProperty(Menu, "is", {
    get: function () { return "sl-menu"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Menu, "encapsulation", {
    get: function () { return "shadow"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Menu, "originalStyleUrls", {
    get: function () { return {
      "$": ["menu.scss"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Menu, "styleUrls", {
    get: function () { return {
      "$": ["menu.css"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Menu, "states", {
    get: function () { return {
      "hasFocus": {}
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Menu, "events", {
    get: function () { return [{
        "method": "slFocus",
        "name": "sl-focus",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the menu gains focus."
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
          "text": "Emitted when the menu loses focus."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "slSelect",
        "name": "sl-select",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when a menu item is selected."
        },
        "complexType": {
          "original": "{ item: HTMLSlMenuItemElement }",
          "resolved": "{ item: HTMLSlMenuItemElement; }",
          "references": {
            "HTMLSlMenuItemElement": {
              "location": "global"
            }
          }
        }
      }]; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Menu, "methods", {
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
          "text": "Sets focus on the menu.",
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
          "text": "Removes focus from the menu.",
          "tags": []
        }
      },
      "typeToSelect": {
        "complexType": {
          "signature": "(key: string) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            },
            "HTMLSlotElement": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Initiates type-to-select logic, which automatically selects an option based on what the user is currently typing.\nThe key passed will be appended to the internal query and the selection will be updated. After a brief period, the\ninternal query is cleared automatically. This method is intended to be used with the keydown event. Useful for\nenabling type-to-select when the menu doesn't have focus.",
          "tags": []
        }
      }
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Menu, "elementRef", {
    get: function () { return "host"; },
    enumerable: false,
    configurable: true
  });
  return Menu;
}());
export { Menu };
