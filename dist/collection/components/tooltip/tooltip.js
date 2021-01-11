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
import { Component, Element, Event, Host, Method, Prop, Watch, h } from '@stencil/core';
import Popover from '../../utilities/popover';
var id = 0;
/**
 * @since 2.0
 * @status stable
 *
 * @slot - The tooltip's target element. Only the first element will be used as the target.
 *
 * @part base - The component's base wrapper.
 */
var Tooltip = /** @class */ (function () {
  function Tooltip() {
    this.componentId = "tooltip-" + ++id;
    this.isVisible = false;
    /** The tooltip's content. */
    this.content = '';
    /**
     * The preferred placement of the tooltip. Note that the actual placement may vary as needed to keep the tooltip
     * inside of the viewport.
     */
    this.placement = 'top';
    /** Set to true to disable the tooltip so it won't show when triggered. */
    this.disabled = false;
    /** The distance in pixels from which to offset the tooltip away from its target. */
    this.distance = 10;
    /** Indicates whether or not the tooltip is open. You can use this in lieu of the show/hide methods. */
    this.open = false;
    /** The distance in pixels from which to offset the tooltip along its target. */
    this.skidding = 0;
    /**
     * Controls how the tooltip is activated. Possible options include `click`, `hover`, `focus`, and `manual`. Multiple
     * options can be passed by separating them with a space. When manual is used, the tooltip must be activated
     * programmatically.
     */
    this.trigger = 'hover focus';
  }
  Tooltip.prototype.handleOpenChange = function () {
    this.open ? this.show() : this.hide();
  };
  Tooltip.prototype.connectedCallback = function () {
    this.handleBlur = this.handleBlur.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleSlotChange = this.handleSlotChange.bind(this);
  };
  Tooltip.prototype.componentDidLoad = function () {
    this.target = this.getTarget();
    this.popover = new Popover(this.target, this.tooltipPositioner);
    this.syncOptions();
    this.host.addEventListener('blur', this.handleBlur, true);
    this.host.addEventListener('click', this.handleClick, true);
    this.host.addEventListener('focus', this.handleFocus, true);
    // Show on init if open
    this.tooltipPositioner.hidden = !this.open;
    if (this.open) {
      this.show();
    }
  };
  Tooltip.prototype.componentDidUpdate = function () {
    this.syncOptions();
  };
  Tooltip.prototype.disconnectedCallback = function () {
    this.popover.destroy();
    this.host.removeEventListener('blur', this.handleBlur, true);
    this.host.removeEventListener('click', this.handleClick, true);
    this.host.removeEventListener('focus', this.handleFocus, true);
  };
  /** Shows the tooltip. */
  Tooltip.prototype.show = function () {
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
        this.isVisible = true;
        this.open = true;
        this.popover.show();
        return [2 /*return*/];
      });
    });
  };
  /** Shows the tooltip. */
  Tooltip.prototype.hide = function () {
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
        this.isVisible = false;
        this.open = false;
        this.popover.hide();
        return [2 /*return*/];
      });
    });
  };
  Tooltip.prototype.getTarget = function () {
    var target = this.host.querySelector('*:not(style)');
    if (!target) {
      throw new Error('Invalid tooltip target: no child element was found.');
    }
    return target;
  };
  Tooltip.prototype.handleBlur = function () {
    if (this.hasTrigger('focus')) {
      this.hide();
    }
  };
  Tooltip.prototype.handleClick = function () {
    if (this.hasTrigger('click')) {
      this.open ? this.hide() : this.show();
    }
  };
  Tooltip.prototype.handleFocus = function () {
    if (this.hasTrigger('focus')) {
      this.show();
    }
  };
  Tooltip.prototype.handleMouseOver = function () {
    if (this.hasTrigger('hover')) {
      this.show();
    }
  };
  Tooltip.prototype.handleMouseOut = function () {
    if (this.hasTrigger('hover')) {
      this.hide();
    }
  };
  Tooltip.prototype.handleSlotChange = function () {
    var oldTarget = this.target;
    var newTarget = this.getTarget();
    if (newTarget !== oldTarget) {
      if (oldTarget) {
        oldTarget.removeAttribute('aria-describedby');
      }
      newTarget.setAttribute('aria-describedby', this.componentId);
    }
  };
  Tooltip.prototype.hasTrigger = function (triggerType) {
    var triggers = this.trigger.split(' ');
    return triggers.includes(triggerType);
  };
  Tooltip.prototype.syncOptions = function () {
    var _this = this;
    this.popover.setOptions({
      placement: this.placement,
      distance: this.distance,
      skidding: this.skidding,
      transitionElement: this.tooltip,
      onAfterHide: function () { return _this.slAfterHide.emit(); },
      onAfterShow: function () { return _this.slAfterShow.emit(); }
    });
  };
  Tooltip.prototype.render = function () {
    var _this = this;
    return (h(Host, { onMouseOver: this.handleMouseOver, onMouseOut: this.handleMouseOut },
      h("slot", { onSlotchange: this.handleSlotChange }),
      !this.disabled && (h("div", { ref: function (el) { return (_this.tooltipPositioner = el); }, class: "tooltip-positioner" },
        h("div", { part: "base", ref: function (el) { return (_this.tooltip = el); }, id: this.componentId, class: {
            tooltip: true,
            'tooltip--open': this.open
          }, role: "tooltip", "aria-hidden": this.open ? 'false' : 'true' }, this.content)))));
  };
  Object.defineProperty(Tooltip, "is", {
    get: function () { return "sl-tooltip"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Tooltip, "encapsulation", {
    get: function () { return "shadow"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Tooltip, "originalStyleUrls", {
    get: function () { return {
      "$": ["tooltip.scss"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Tooltip, "styleUrls", {
    get: function () { return {
      "$": ["tooltip.css"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Tooltip, "properties", {
    get: function () { return {
      "content": {
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
          "text": "The tooltip's content."
        },
        "attribute": "content",
        "reflect": false,
        "defaultValue": "''"
      },
      "placement": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "| 'top'\n    | 'top-start'\n    | 'top-end'\n    | 'right'\n    | 'right-start'\n    | 'right-end'\n    | 'bottom'\n    | 'bottom-start'\n    | 'bottom-end'\n    | 'left'\n    | 'left-start'\n    | 'left-end'",
          "resolved": "\"bottom\" | \"bottom-end\" | \"bottom-start\" | \"left\" | \"left-end\" | \"left-start\" | \"right\" | \"right-end\" | \"right-start\" | \"top\" | \"top-end\" | \"top-start\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The preferred placement of the tooltip. Note that the actual placement may vary as needed to keep the tooltip\ninside of the viewport."
        },
        "attribute": "placement",
        "reflect": false,
        "defaultValue": "'top'"
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
          "text": "Set to true to disable the tooltip so it won't show when triggered."
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      },
      "distance": {
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
          "text": "The distance in pixels from which to offset the tooltip away from its target."
        },
        "attribute": "distance",
        "reflect": false,
        "defaultValue": "10"
      },
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
          "text": "Indicates whether or not the tooltip is open. You can use this in lieu of the show/hide methods."
        },
        "attribute": "open",
        "reflect": true,
        "defaultValue": "false"
      },
      "skidding": {
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
          "text": "The distance in pixels from which to offset the tooltip along its target."
        },
        "attribute": "skidding",
        "reflect": false,
        "defaultValue": "0"
      },
      "trigger": {
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
          "text": "Controls how the tooltip is activated. Possible options include `click`, `hover`, `focus`, and `manual`. Multiple\noptions can be passed by separating them with a space. When manual is used, the tooltip must be activated\nprogrammatically."
        },
        "attribute": "trigger",
        "reflect": false,
        "defaultValue": "'hover focus'"
      }
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Tooltip, "events", {
    get: function () { return [{
        "method": "slShow",
        "name": "sl-show",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the tooltip begins to show. Calling `event.preventDefault()` will prevent it from being shown."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "slAfterShow",
        "name": "sl-aftershow",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted after the tooltip has shown and all transitions are complete."
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
          "text": "Emitted when the tooltip begins to hide. Calling `event.preventDefault()` will prevent it from being hidden."
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
          "text": "Emitted after the tooltip has hidden and all transitions are complete."
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
  Object.defineProperty(Tooltip, "methods", {
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
          "text": "Shows the tooltip.",
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
          "text": "Shows the tooltip.",
          "tags": []
        }
      }
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Tooltip, "elementRef", {
    get: function () { return "host"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Tooltip, "watchers", {
    get: function () { return [{
        "propName": "open",
        "methodName": "handleOpenChange"
      }]; },
    enumerable: false,
    configurable: true
  });
  return Tooltip;
}());
export { Tooltip };
