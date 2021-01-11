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
import { Component, Event, Method, Prop, Watch, h } from '@stencil/core';
import { focusVisible } from '../../utilities/focus-visible';
var id = 0;
/**
 * @since 2.0
 * @status stable
 *
 * @slot - The details' content.
 * @slot summary - The details' summary. Alternatively, you can use the summary prop.
 *
 * @part base - The component's base wrapper.
 * @part header - The summary header.
 * @part summary - The details summary.
 * @part summary-icon - The expand/collapse summary icon.
 * @part content - The details content.
 */
var Details = /** @class */ (function () {
  function Details() {
    this.componentId = "details-" + ++id;
    this.isVisible = false;
    /** Indicates whether or not the details is open. You can use this in lieu of the show/hide methods. */
    this.open = false;
    /** The summary to show in the details header. If you need to display HTML, use the `summary` slot instead. */
    this.summary = '';
    /** Set to true to prevent the user from toggling the details. */
    this.disabled = false;
  }
  Details.prototype.handleOpenChange = function () {
    this.open ? this.show() : this.hide();
  };
  Details.prototype.connectedCallback = function () {
    this.handleBodyTransitionEnd = this.handleBodyTransitionEnd.bind(this);
    this.handleSummaryClick = this.handleSummaryClick.bind(this);
    this.handleSummaryKeyDown = this.handleSummaryKeyDown.bind(this);
  };
  Details.prototype.componentDidLoad = function () {
    focusVisible.observe(this.details);
    // Show on init if open
    if (this.open) {
      this.show();
    }
  };
  Details.prototype.disconnectedCallback = function () {
    focusVisible.unobserve(this.details);
  };
  /** Shows the alert. */
  Details.prototype.show = function () {
    return __awaiter(this, void 0, void 0, function () {
      var slShow;
      return __generator(this, function (_a) {
        // Prevent subsequent calls to the method, whether manually or triggered by the `open` watcher
        if (this.isVisible) {
          return [2 /*return*/];
        }
        slShow = this.slShow.emit();
        if (slShow.defaultPrevented) {
          this.open = false;
          return [2 /*return*/];
        }
        if (this.body.scrollHeight === 0) {
          // When the scroll height can't be measured, use auto. This prevents a borked open state when the details is open
          // intiially, but not immediately visible (i.e. in a tab panel).
          this.body.style.height = 'auto';
          this.body.style.overflow = 'visible';
        }
        else {
          this.body.style.height = this.body.scrollHeight + "px";
          this.body.style.overflow = 'hidden';
        }
        this.isVisible = true;
        this.open = true;
        return [2 /*return*/];
      });
    });
  };
  /** Hides the alert */
  Details.prototype.hide = function () {
    return __awaiter(this, void 0, void 0, function () {
      var slHide;
      var _this = this;
      return __generator(this, function (_a) {
        // Prevent subsequent calls to the method, whether manually or triggered by the `open` watcher
        if (!this.isVisible) {
          return [2 /*return*/];
        }
        slHide = this.slHide.emit();
        if (slHide.defaultPrevented) {
          this.open = true;
          return [2 /*return*/];
        }
        // We can't transition out of `height: auto`, so let's set it to the current height first
        this.body.style.height = this.body.scrollHeight + "px";
        this.body.style.overflow = 'hidden';
        requestAnimationFrame(function () {
          _this.body.clientWidth; // force a reflow
          _this.body.style.height = '0';
        });
        this.isVisible = false;
        this.open = false;
        return [2 /*return*/];
      });
    });
  };
  Details.prototype.handleBodyTransitionEnd = function (event) {
    var target = event.target;
    // Ensure we only emit one event when the target element is no longer visible
    if (event.propertyName === 'height' && target.classList.contains('details__body')) {
      this.body.style.overflow = this.open ? 'visible' : 'hidden';
      this.body.style.height = this.open ? 'auto' : '0';
      this.open ? this.slAfterShow.emit() : this.slAfterHide.emit();
    }
  };
  Details.prototype.handleSummaryClick = function () {
    if (!this.disabled) {
      this.open ? this.hide() : this.show();
      this.header.focus();
    }
  };
  Details.prototype.handleSummaryKeyDown = function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.open ? this.hide() : this.show();
    }
    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      event.preventDefault();
      this.hide();
    }
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      event.preventDefault();
      this.show();
    }
  };
  Details.prototype.render = function () {
    var _this = this;
    return (h("div", { ref: function (el) { return (_this.details = el); }, part: "base", class: {
        details: true,
        'details--open': this.open,
        'details--disabled': this.disabled
      } },
      h("header", { ref: function (el) { return (_this.header = el); }, part: "header", id: this.componentId + "-header", class: "details__header", role: "button", "aria-expanded": this.open ? 'true' : 'false', "aria-controls": this.componentId + "-content", "aria-disabled": this.disabled ? 'true' : 'false', tabIndex: this.disabled ? -1 : 0, onClick: this.handleSummaryClick, onKeyDown: this.handleSummaryKeyDown },
        h("div", { part: "summary", class: "details__summary" },
          h("slot", { name: "summary" }, this.summary)),
        h("span", { part: "summary-icon", class: "details__summary-icon" },
          h("sl-icon", { name: "chevron-right" }))),
      h("div", { ref: function (el) { return (_this.body = el); }, class: "details__body", onTransitionEnd: this.handleBodyTransitionEnd },
        h("div", { part: "content", id: this.componentId + "-content", class: "details__content", role: "region", "aria-labelledby": this.componentId + "-header" },
          h("slot", null)))));
  };
  Object.defineProperty(Details, "is", {
    get: function () { return "sl-details"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Details, "encapsulation", {
    get: function () { return "shadow"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Details, "originalStyleUrls", {
    get: function () { return {
      "$": ["details.scss"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Details, "styleUrls", {
    get: function () { return {
      "$": ["details.css"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Details, "properties", {
    get: function () { return {
      "open": {
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
          "text": "Indicates whether or not the details is open. You can use this in lieu of the show/hide methods."
        },
        "attribute": "open",
        "reflect": true,
        "defaultValue": "false"
      },
      "summary": {
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
          "text": "The summary to show in the details header. If you need to display HTML, use the `summary` slot instead."
        },
        "attribute": "summary",
        "reflect": false,
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
          "text": "Set to true to prevent the user from toggling the details."
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      }
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Details, "events", {
    get: function () { return [{
        "method": "slShow",
        "name": "sl-show",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the details opens. Calling `event.preventDefault()` will prevent it from being opened."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "slAfterShow",
        "name": "sl-after-show",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted after the details opens and all transitions are complete."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "slHide",
        "name": "sl-hide",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the details closes. Calling `event.preventDefault()` will prevent it from being closed."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "slAfterHide",
        "name": "sl-after-hide",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted after the details closes and all transitions are complete."
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
  Object.defineProperty(Details, "methods", {
    get: function () { return {
      "show": {
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
          "text": "Shows the alert.",
          "tags": []
        }
      },
      "hide": {
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
          "text": "Hides the alert",
          "tags": []
        }
      }
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Details, "watchers", {
    get: function () { return [{
        "propName": "open",
        "methodName": "handleOpenChange"
      }]; },
    enumerable: false,
    configurable: true
  });
  return Details;
}());
export { Details };
