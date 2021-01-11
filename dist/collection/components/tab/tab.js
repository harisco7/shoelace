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
import { Component, Element, Host, Method, Prop, h } from '@stencil/core';
var id = 0;
/**
 * @since 2.0
 * @status stable
 *
 * @slot - The tab's label.
 *
 * @part base - The component's base wrapper.
 */
var Tab = /** @class */ (function () {
  function Tab() {
    this.componentId = "tab-" + ++id;
    /** The name of the tab panel the tab will control. The panel must be located in the same tab group. */
    this.panel = '';
    /** Set to true to draw the tab in an active state. */
    this.active = false;
    /** Set to true to draw the tab in a disabled state. */
    this.disabled = false;
  }
  /** Sets focus to the tab. */
  Tab.prototype.setFocus = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        this.tab.focus({ preventScroll: true });
        return [2 /*return*/];
      });
    });
  };
  /** Removes focus from the tab. */
  Tab.prototype.removeFocus = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        this.tab.blur();
        return [2 /*return*/];
      });
    });
  };
  Tab.prototype.render = function () {
    var _this = this;
    return (
    // If the user didn't provide an ID, we'll set one so we can link tabs and tab panels with aria labels
    h(Host, { id: this.host.id || this.componentId },
      h("div", { part: "base", ref: function (el) { return (_this.tab = el); }, class: {
          tab: true,
          // States
          'tab--active': this.active,
          'tab--disabled': this.disabled
        }, role: "tab", "aria-disabled": this.disabled ? 'true' : 'false', "aria-selected": this.active ? 'true' : 'false', tabindex: this.disabled || !this.active ? '-1' : '0' },
        h("slot", null))));
  };
  Object.defineProperty(Tab, "is", {
    get: function () { return "sl-tab"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Tab, "encapsulation", {
    get: function () { return "shadow"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Tab, "originalStyleUrls", {
    get: function () { return {
      "$": ["tab.scss"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Tab, "styleUrls", {
    get: function () { return {
      "$": ["tab.css"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Tab, "properties", {
    get: function () { return {
      "panel": {
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
          "text": "The name of the tab panel the tab will control. The panel must be located in the same tab group."
        },
        "attribute": "panel",
        "reflect": true,
        "defaultValue": "''"
      },
      "active": {
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
          "text": "Set to true to draw the tab in an active state."
        },
        "attribute": "active",
        "reflect": true,
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
          "text": "Set to true to draw the tab in a disabled state."
        },
        "attribute": "disabled",
        "reflect": true,
        "defaultValue": "false"
      }
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Tab, "methods", {
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
          "text": "Sets focus to the tab.",
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
          "text": "Removes focus from the tab.",
          "tags": []
        }
      }
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Tab, "elementRef", {
    get: function () { return "host"; },
    enumerable: false,
    configurable: true
  });
  return Tab;
}());
export { Tab };
