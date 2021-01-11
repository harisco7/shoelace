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
var toastStack = Object.assign(document.createElement('div'), { className: 'sl-toast-stack' });
/**
 * @since 2.0
 * @status stable
 *
 * @slot - The alert's content.
 * @slot icon - An icon to show in the alert.
 *
 * @part base - The component's base wrapper.
 * @part icon - The container that wraps the alert icon.
 * @part message - The alert message.
 * @part close-button - The close button.
 */
var Alert = /** @class */ (function () {
  function Alert() {
    this.isVisible = false;
    /** Indicates whether or not the alert is open. You can use this in lieu of the show/hide methods. */
    this.open = false;
    /** Set to true to make the alert closable. */
    this.closable = false;
    /** The type of alert. */
    this.type = 'primary';
    /**
     * The length of time, in milliseconds, the alert will show before closing itself. If the user interacts with the
     * alert before it closes (e.g. moves the mouse over it), the timer will restart.
     */
    this.duration = Infinity;
  }
  Alert.prototype.handleOpenChange = function () {
    this.open ? this.show() : this.hide();
  };
  Alert.prototype.handleDurationChange = function () {
    this.restartAutoHide();
  };
  Alert.prototype.connectedCallback = function () {
    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleTransitionEnd = this.handleTransitionEnd.bind(this);
  };
  Alert.prototype.componentWillLoad = function () {
    // Show on init if open
    if (this.open) {
      this.show();
    }
  };
  /** Shows the alert. */
  Alert.prototype.show = function () {
    return __awaiter(this, void 0, void 0, function () {
      var slShow;
      var _this = this;
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
        this.isVisible = true;
        this.open = true;
        if (this.duration < Infinity) {
          this.autoHideTimeout = setTimeout(function () { return _this.hide(); }, this.duration);
        }
        return [2 /*return*/];
      });
    });
  };
  /** Hides the alert */
  Alert.prototype.hide = function () {
    return __awaiter(this, void 0, void 0, function () {
      var slHide;
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
        clearTimeout(this.autoHideTimeout);
        this.open = false;
        return [2 /*return*/];
      });
    });
  };
  /**
   * Displays the alert as a toast notification. This will move the alert out of its position in the DOM and, when
   * dismissed, it will be removed from the DOM completely. By storing a reference to the alert, you can reuse it by
   * calling this method again. The returned promise will resolve after the alert is hidden.
   */
  Alert.prototype.toast = function () {
    return __awaiter(this, void 0, void 0, function () {
      var _this = this;
      return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve) {
            if (!toastStack.parentElement) {
              document.body.append(toastStack);
            }
            toastStack.append(_this.host);
            requestAnimationFrame(function () { return _this.show(); });
            _this.host.addEventListener('sl-after-hide', function () {
              _this.host.remove();
              resolve();
              // Remove the toast stack from the DOM when there are no more alerts
              if (toastStack.querySelector('sl-alert') === null) {
                toastStack.remove();
              }
            }, { once: true });
          })];
      });
    });
  };
  Alert.prototype.handleCloseClick = function () {
    this.hide();
  };
  Alert.prototype.handleMouseMove = function () {
    this.restartAutoHide();
  };
  Alert.prototype.handleTransitionEnd = function (event) {
    var target = event.target;
    // Ensure we only emit one event when the target element is no longer visible
    if (event.propertyName === 'opacity' && target.classList.contains('alert')) {
      this.isVisible = this.open;
      this.open ? this.slAfterShow.emit() : this.slAfterHide.emit();
    }
  };
  Alert.prototype.restartAutoHide = function () {
    var _this = this;
    clearTimeout(this.autoHideTimeout);
    if (this.open && this.duration < Infinity) {
      this.autoHideTimeout = setTimeout(function () { return _this.hide(); }, this.duration);
    }
  };
  Alert.prototype.render = function () {
    var _this = this;
    return (h("div", { ref: function (el) { return (_this.alert = el); }, part: "base", class: {
        alert: true,
        'alert--open': this.open,
        'alert--visible': this.isVisible,
        'alert--closable': this.closable,
        'alert--primary': this.type === 'primary',
        'alert--success': this.type === 'success',
        'alert--info': this.type === 'info',
        'alert--warning': this.type === 'warning',
        'alert--danger': this.type === 'danger'
      }, role: "alert", "aria-live": "assertive", "aria-atomic": "true", "aria-hidden": this.open ? 'false' : 'true', onMouseMove: this.handleMouseMove, onTransitionEnd: this.handleTransitionEnd },
      h("span", { part: "icon", class: "alert__icon" },
        h("slot", { name: "icon" })),
      h("span", { part: "message", class: "alert__message" },
        h("slot", null)),
      this.closable && (h("span", { class: "alert__close" },
        h("sl-icon-button", { part: "close-button", name: "x", onClick: this.handleCloseClick })))));
  };
  Object.defineProperty(Alert, "is", {
    get: function () { return "sl-alert"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Alert, "encapsulation", {
    get: function () { return "shadow"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Alert, "originalStyleUrls", {
    get: function () { return {
      "$": ["alert.scss"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Alert, "styleUrls", {
    get: function () { return {
      "$": ["alert.css"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Alert, "properties", {
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
          "text": "Indicates whether or not the alert is open. You can use this in lieu of the show/hide methods."
        },
        "attribute": "open",
        "reflect": true,
        "defaultValue": "false"
      },
      "closable": {
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
          "text": "Set to true to make the alert closable."
        },
        "attribute": "closable",
        "reflect": true,
        "defaultValue": "false"
      },
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'primary' | 'success' | 'info' | 'warning' | 'danger'",
          "resolved": "\"danger\" | \"info\" | \"primary\" | \"success\" | \"warning\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The type of alert."
        },
        "attribute": "type",
        "reflect": true,
        "defaultValue": "'primary'"
      },
      "duration": {
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
          "text": "The length of time, in milliseconds, the alert will show before closing itself. If the user interacts with the\nalert before it closes (e.g. moves the mouse over it), the timer will restart."
        },
        "attribute": "duration",
        "reflect": false,
        "defaultValue": "Infinity"
      }
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Alert, "states", {
    get: function () { return {
      "isVisible": {}
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Alert, "events", {
    get: function () { return [{
        "method": "slShow",
        "name": "sl-show",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the alert opens. Calling `event.preventDefault()` will prevent it from being opened."
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
          "text": "Emitted after the alert opens and all transitions are complete."
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
          "text": "Emitted when the alert closes. Calling `event.preventDefault()` will prevent it from being closed."
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
          "text": "Emitted after the alert closes and all transitions are complete."
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
  Object.defineProperty(Alert, "methods", {
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
      },
      "toast": {
        "complexType": {
          "signature": "() => Promise<unknown>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<unknown>"
        },
        "docs": {
          "text": "Displays the alert as a toast notification. This will move the alert out of its position in the DOM and, when\ndismissed, it will be removed from the DOM completely. By storing a reference to the alert, you can reuse it by\ncalling this method again. The returned promise will resolve after the alert is hidden.",
          "tags": []
        }
      }
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Alert, "elementRef", {
    get: function () { return "host"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Alert, "watchers", {
    get: function () { return [{
        "propName": "open",
        "methodName": "handleOpenChange"
      }, {
        "propName": "duration",
        "methodName": "handleDurationChange"
      }]; },
    enumerable: false,
    configurable: true
  });
  return Alert;
}());
export { Alert };
