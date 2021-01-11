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
import { lockBodyScrolling, unlockBodyScrolling } from '../../utilities/scroll';
import { hasSlot } from '../../utilities/slot';
import { isPreventScrollSupported } from '../../utilities/support';
import Modal from '../../utilities/modal';
var hasPreventScroll = isPreventScrollSupported();
var id = 0;
/**
 * @since 2.0
 * @status stable
 *
 * @slot - The dialog's content.
 * @slot label - The dialog's label. Alternatively, you can use the label prop.
 * @slot footer - The dialog's footer, usually one or more buttons representing various options.
 *
 * @part base - The component's base wrapper.
 * @part overlay - The overlay.
 * @part panel - The dialog panel (where the dialog and its content is rendered).
 * @part header - The dialog header.
 * @part title - The dialog title.
 * @part close-button - The close button.
 * @part body - The dialog body.
 * @part footer - The dialog footer.
 *
 */
var Dialog = /** @class */ (function () {
  function Dialog() {
    this.componentId = "dialog-" + ++id;
    this.willShow = false;
    this.willHide = false;
    this.hasFooter = false;
    this.isVisible = false;
    /** Indicates whether or not the dialog is open. You can use this in lieu of the show/hide methods. */
    this.open = false;
    /**
     * The dialog's label as displayed in the header. You should always include a relevant label even when using
     * `no-header`, as it is required for proper accessibility.
     */
    this.label = '';
    /**
     * Set to true to disable the header. This will also remove the default close button, so please ensure you provide an
     * easy, accessible way for users to dismiss the dialog.
     */
    this.noHeader = false;
  }
  Dialog.prototype.handleOpenChange = function () {
    this.open ? this.show() : this.hide();
  };
  Dialog.prototype.connectedCallback = function () {
    var _this = this;
    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.handleTransitionEnd = this.handleTransitionEnd.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleOverlayClick = this.handleOverlayClick.bind(this);
    this.handleSlotChange = this.handleSlotChange.bind(this);
    this.modal = new Modal(this.host, {
      onFocusOut: function () { return _this.panel.focus(); }
    });
  };
  Dialog.prototype.componentWillLoad = function () {
    this.handleSlotChange();
    // Show on init if open
    if (this.open) {
      this.show();
    }
  };
  Dialog.prototype.disconnectedCallback = function () {
    unlockBodyScrolling(this.host);
  };
  /** Shows the dialog */
  Dialog.prototype.show = function () {
    return __awaiter(this, void 0, void 0, function () {
      var slShow;
      var _this = this;
      return __generator(this, function (_a) {
        if (this.willShow) {
          return [2 /*return*/];
        }
        slShow = this.slShow.emit();
        if (slShow.defaultPrevented) {
          this.open = false;
          return [2 /*return*/];
        }
        this.willShow = true;
        this.isVisible = true;
        this.open = true;
        this.modal.activate();
        lockBodyScrolling(this.host);
        if (this.open) {
          if (hasPreventScroll) {
            // Wait for the next frame before setting initial focus so the dialog is technically visible
            requestAnimationFrame(function () {
              var slInitialFocus = _this.slInitialFocus.emit();
              if (!slInitialFocus.defaultPrevented) {
                _this.panel.focus({ preventScroll: true });
              }
            });
          }
          else {
            // Once Safari supports { preventScroll: true } we can remove this nasty little hack, but until then we need to
            // wait for the transition to complete before setting focus, otherwise the panel may render in a buggy way its
            // out of view initially.
            //
            // Fiddle: https://jsfiddle.net/g6buoafq/1/
            // Safari: https://bugs.webkit.org/show_bug.cgi?id=178583
            //
            setTimeout(function () {
              var slInitialFocus = _this.slInitialFocus.emit();
              if (!slInitialFocus.defaultPrevented) {
                _this.panel.focus();
              }
            }, 250);
          }
        }
        return [2 /*return*/];
      });
    });
  };
  /** Hides the dialog */
  Dialog.prototype.hide = function () {
    return __awaiter(this, void 0, void 0, function () {
      var slHide;
      return __generator(this, function (_a) {
        if (this.willHide) {
          return [2 /*return*/];
        }
        slHide = this.slHide.emit();
        if (slHide.defaultPrevented) {
          this.open = true;
          return [2 /*return*/];
        }
        this.willHide = true;
        this.open = false;
        this.modal.deactivate();
        unlockBodyScrolling(this.host);
        return [2 /*return*/];
      });
    });
  };
  Dialog.prototype.handleCloseClick = function () {
    this.hide();
  };
  Dialog.prototype.handleKeyDown = function (event) {
    if (event.key === 'Escape') {
      this.hide();
    }
  };
  Dialog.prototype.handleOverlayClick = function () {
    var slOverlayDismiss = this.slOverlayDismiss.emit();
    if (!slOverlayDismiss.defaultPrevented) {
      this.hide();
    }
  };
  Dialog.prototype.handleSlotChange = function () {
    this.hasFooter = hasSlot(this.host, 'footer');
  };
  Dialog.prototype.handleTransitionEnd = function (event) {
    var target = event.target;
    // Ensure we only emit one event when the target element is no longer visible
    if (event.propertyName === 'opacity' && target.classList.contains('dialog__panel')) {
      this.isVisible = this.open;
      this.willShow = false;
      this.willHide = false;
      this.open ? this.slAfterShow.emit() : this.slAfterHide.emit();
    }
  };
  Dialog.prototype.render = function () {
    var _this = this;
    return (h("div", { ref: function (el) { return (_this.dialog = el); }, part: "base", class: {
        dialog: true,
        'dialog--open': this.open,
        'dialog--visible': this.isVisible,
        'dialog--has-footer': this.hasFooter
      }, onKeyDown: this.handleKeyDown, onTransitionEnd: this.handleTransitionEnd },
      h("div", { part: "overlay", class: "dialog__overlay", onClick: this.handleOverlayClick }),
      h("div", { ref: function (el) { return (_this.panel = el); }, part: "panel", class: "dialog__panel", role: "dialog", "aria-modal": "true", "aria-hidden": this.open ? 'false' : 'true', "aria-label": this.noHeader ? this.label : null, "aria-labelledby": !this.noHeader ? this.componentId + "-title" : null, tabIndex: 0 },
        !this.noHeader && (h("header", { part: "header", class: "dialog__header" },
          h("span", { part: "title", class: "dialog__title", id: this.componentId + "-title" },
            h("slot", { name: "label" }, this.label || String.fromCharCode(65279))),
          h("sl-icon-button", { exportparts: "base:close-button", class: "dialog__close", name: "x", onClick: this.handleCloseClick }))),
        h("div", { part: "body", class: "dialog__body" },
          h("slot", null)),
        h("footer", { part: "footer", class: "dialog__footer" },
          h("slot", { name: "footer", onSlotchange: this.handleSlotChange })))));
  };
  Object.defineProperty(Dialog, "is", {
    get: function () { return "sl-dialog"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Dialog, "encapsulation", {
    get: function () { return "shadow"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Dialog, "originalStyleUrls", {
    get: function () { return {
      "$": ["dialog.scss"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Dialog, "styleUrls", {
    get: function () { return {
      "$": ["dialog.css"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Dialog, "properties", {
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
          "text": "Indicates whether or not the dialog is open. You can use this in lieu of the show/hide methods."
        },
        "attribute": "open",
        "reflect": true,
        "defaultValue": "false"
      },
      "label": {
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
          "text": "The dialog's label as displayed in the header. You should always include a relevant label even when using\n`no-header`, as it is required for proper accessibility."
        },
        "attribute": "label",
        "reflect": false,
        "defaultValue": "''"
      },
      "noHeader": {
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
          "text": "Set to true to disable the header. This will also remove the default close button, so please ensure you provide an\neasy, accessible way for users to dismiss the dialog."
        },
        "attribute": "no-header",
        "reflect": false,
        "defaultValue": "false"
      }
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Dialog, "states", {
    get: function () { return {
      "hasFooter": {},
      "isVisible": {}
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Dialog, "events", {
    get: function () { return [{
        "method": "slShow",
        "name": "sl-show",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the dialog opens. Calling `event.preventDefault()` will prevent it from being opened."
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
          "text": "Emitted after the dialog opens and all transitions are complete."
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
          "text": "Emitted when the dialog closes. Calling `event.preventDefault()` will prevent it from being closed."
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
          "text": "Emitted after the dialog closes and all transitions are complete."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "slInitialFocus",
        "name": "sl-initial-focus",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the dialog opens and the panel gains focus. Calling `event.preventDefault()` will prevent focus and\nallow you to set it on a different element in the dialog, such as an input or button."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "slOverlayDismiss",
        "name": "sl-overlay-dismiss",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the overlay is clicked. Calling `event.preventDefault()` will prevent the dialog from closing."
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
  Object.defineProperty(Dialog, "methods", {
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
          "text": "Shows the dialog",
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
          "text": "Hides the dialog",
          "tags": []
        }
      }
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Dialog, "elementRef", {
    get: function () { return "host"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Dialog, "watchers", {
    get: function () { return [{
        "propName": "open",
        "methodName": "handleOpenChange"
      }]; },
    enumerable: false,
    configurable: true
  });
  return Dialog;
}());
export { Dialog };
