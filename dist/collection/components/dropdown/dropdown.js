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
import { Component, Element, Event, Method, Prop, Watch, h } from '@stencil/core';
import { scrollIntoView } from '../../utilities/scroll';
import { getNearestTabbableElement } from '../../utilities/tabbable';
import Popover from '../../utilities/popover';
var id = 0;
/**
 * @since 2.0
 * @status stable
 *
 * @slot trigger - The dropdown's trigger, usually a `<sl-button>` element.
 * @slot - The dropdown's content.
 *
 * @part base - The component's base wrapper.
 * @part trigger - The container that wraps the trigger.
 * @part panel - The panel that gets shown when the dropdown is open.
 */
var Dropdown = /** @class */ (function () {
  function Dropdown() {
    this.componentId = "dropdown-" + ++id;
    this.isVisible = false;
    /** Indicates whether or not the dropdown is open. You can use this in lieu of the show/hide methods. */
    this.open = false;
    /**
     * The preferred placement of the dropdown panel. Note that the actual placement may vary as needed to keep the panel
     * inside of the viewport.
     */
    this.placement = 'bottom-start';
    /** Determines whether the dropdown should hide when a menu item is selected. */
    this.closeOnSelect = true;
    /** The distance in pixels from which to offset the panel away from its trigger. */
    this.distance = 2;
    /** The distance in pixels from which to offset the panel along its trigger. */
    this.skidding = 0;
    /**
     * Enable this option to prevent the panel from being clipped when the component is placed inside a container with
     * `overflow: auto|scroll`.
     */
    this.hoist = false;
  }
  Dropdown.prototype.handleOpenChange = function () {
    this.open ? this.show() : this.hide();
    this.updateAccessibleTrigger();
  };
  Dropdown.prototype.handlePopoverOptionsChange = function () {
    this.popover.setOptions({
      strategy: this.hoist ? 'fixed' : 'absolute',
      placement: this.placement,
      distance: this.distance,
      skidding: this.skidding
    });
  };
  Dropdown.prototype.connectedCallback = function () {
    if (!this.containingElement) {
      this.containingElement = this.host;
    }
    this.handleDocumentKeyDown = this.handleDocumentKeyDown.bind(this);
    this.handleDocumentMouseDown = this.handleDocumentMouseDown.bind(this);
    this.handleMenuItemActivate = this.handleMenuItemActivate.bind(this);
    this.handlePanelSelect = this.handlePanelSelect.bind(this);
    this.handleTriggerClick = this.handleTriggerClick.bind(this);
    this.handleTriggerKeyDown = this.handleTriggerKeyDown.bind(this);
    this.handleTriggerKeyUp = this.handleTriggerKeyUp.bind(this);
    this.handleTriggerSlotChange = this.handleTriggerSlotChange.bind(this);
  };
  Dropdown.prototype.componentDidLoad = function () {
    var _this = this;
    this.popover = new Popover(this.trigger, this.positioner, {
      strategy: this.hoist ? 'fixed' : 'absolute',
      placement: this.placement,
      distance: this.distance,
      skidding: this.skidding,
      transitionElement: this.panel,
      onAfterHide: function () { return _this.slAfterHide.emit(); },
      onAfterShow: function () { return _this.slAfterShow.emit(); },
      onTransitionEnd: function () {
        if (!_this.open) {
          _this.panel.scrollTop = 0;
        }
      }
    });
    // Show on init if open
    if (this.open) {
      this.show();
    }
  };
  Dropdown.prototype.disconnectedCallback = function () {
    this.hide();
    this.popover.destroy();
  };
  /** Shows the dropdown panel */
  Dropdown.prototype.show = function () {
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
        this.panel.addEventListener('sl-activate', this.handleMenuItemActivate);
        this.panel.addEventListener('sl-select', this.handlePanelSelect);
        document.addEventListener('keydown', this.handleDocumentKeyDown);
        document.addEventListener('mousedown', this.handleDocumentMouseDown);
        this.isVisible = true;
        this.open = true;
        this.popover.show();
        return [2 /*return*/];
      });
    });
  };
  /** Hides the dropdown panel */
  Dropdown.prototype.hide = function () {
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
        this.panel.removeEventListener('sl-activate', this.handleMenuItemActivate);
        this.panel.removeEventListener('sl-select', this.handlePanelSelect);
        document.addEventListener('keydown', this.handleDocumentKeyDown);
        document.removeEventListener('mousedown', this.handleDocumentMouseDown);
        this.isVisible = false;
        this.open = false;
        this.popover.hide();
        return [2 /*return*/];
      });
    });
  };
  Dropdown.prototype.focusOnTrigger = function () {
    var slot = this.trigger.querySelector('slot');
    var trigger = slot.assignedElements({ flatten: true })[0];
    if (trigger) {
      if (typeof trigger.setFocus === 'function') {
        trigger.setFocus();
      }
      else if (typeof trigger.focus === 'function') {
        trigger.focus();
      }
    }
  };
  Dropdown.prototype.getMenu = function () {
    return this.panel
      .querySelector('slot')
      .assignedElements({ flatten: true })
      .filter(function (el) { return el.tagName.toLowerCase() === 'sl-menu'; })[0];
  };
  Dropdown.prototype.handleDocumentKeyDown = function (event) {
    var _this = this;
    var _a;
    // Close when escape is pressed
    if (event.key === 'Escape') {
      this.hide();
      this.focusOnTrigger();
      return;
    }
    // Handle tabbing
    if (event.key === 'Tab') {
      // Tabbing within an open menu should close the dropdown and refocus the trigger
      if (this.open && ((_a = document.activeElement) === null || _a === void 0 ? void 0 : _a.tagName.toLowerCase()) === 'sl-menu-item') {
        event.preventDefault();
        this.hide();
        this.focusOnTrigger();
        return;
      }
      // Tabbing outside of the containing element closes the panel
      //
      // If the dropdown is used within a shadow DOM, we need to obtain the activeElement within that shadowRoot,
      // otherwise `document.activeElement` will only return the name of the parent shadow DOM element.
      setTimeout(function () {
        var _a;
        var activeElement = _this.containingElement.getRootNode() instanceof ShadowRoot
          ? (_a = document.activeElement.shadowRoot) === null || _a === void 0 ? void 0 : _a.activeElement : document.activeElement;
        if ((activeElement === null || activeElement === void 0 ? void 0 : activeElement.closest(_this.containingElement.tagName.toLowerCase())) !== _this.containingElement) {
          _this.hide();
          return;
        }
      });
    }
  };
  Dropdown.prototype.handleDocumentMouseDown = function (event) {
    // Close when clicking outside of the containing element
    var path = event.composedPath();
    if (!path.includes(this.containingElement)) {
      this.hide();
      return;
    }
  };
  Dropdown.prototype.handleMenuItemActivate = function (event) {
    var item = event.target;
    scrollIntoView(item, this.panel);
  };
  Dropdown.prototype.handlePanelSelect = function (event) {
    var target = event.target;
    // Hide the dropdown when a menu item is selected
    if (this.closeOnSelect && target.tagName.toLowerCase() === 'sl-menu') {
      this.hide();
      this.focusOnTrigger();
    }
  };
  Dropdown.prototype.handleTriggerClick = function () {
    this.open ? this.hide() : this.show();
  };
  Dropdown.prototype.handleTriggerKeyDown = function (event) {
    var menu = this.getMenu();
    var menuItems = menu ? __spreadArrays(menu.querySelectorAll('sl-menu-item')) : null;
    var firstMenuItem = menuItems[0];
    var lastMenuItem = menuItems[menuItems.length - 1];
    // Close when escape or tab is pressed
    if (event.key === 'Escape') {
      this.focusOnTrigger();
      this.hide();
      return;
    }
    // When spacebar/enter is pressed, show the panel but don't focus on the menu. This let's the user press the same
    // key again to hide the menu in case they don't want to make a selection.
    if ([' ', 'Enter'].includes(event.key)) {
      event.preventDefault();
      this.open ? this.hide() : this.show();
      return;
    }
    // When up/down is pressed, we make the assumption that the user is familiar with the menu and plans to make a
    // selection. Rather than toggle the panel, we focus on the menu (if one exists) and activate the first item for
    // faster navigation.
    if (['ArrowDown', 'ArrowUp'].includes(event.key)) {
      event.preventDefault();
      // Show the menu if it's not already open
      if (!this.open) {
        this.show();
      }
      // Focus on a menu item
      if (event.key === 'ArrowDown' && firstMenuItem) {
        firstMenuItem.setFocus();
        return;
      }
      if (event.key === 'ArrowUp' && lastMenuItem) {
        lastMenuItem.setFocus();
        return;
      }
    }
    // Other keys bring focus to the menu and initiate type-to-select behavior
    var ignoredKeys = ['Tab', 'Shift', 'Meta', 'Ctrl', 'Alt'];
    if (this.open && menu && !ignoredKeys.includes(event.key)) {
      menu.typeToSelect(event.key);
      return;
    }
  };
  Dropdown.prototype.handleTriggerKeyUp = function (event) {
    // Prevent space from triggering a click event in Firefox
    if (event.key === ' ') {
      event.preventDefault();
    }
  };
  Dropdown.prototype.handleTriggerSlotChange = function () {
    this.updateAccessibleTrigger();
  };
  //
  // Slotted triggers can be arbitrary content, but we need to link them to the dropdown panel with `aria-haspopup` and
  // `aria-expanded`. These must be applied to the "accessible trigger" (the tabbable portion of the trigger element
  // that gets slotted in) so screen readers will understand them. The accessible trigger could be the slotted element,
  // a child of the slotted element, or an element in the slotted element's shadow root.
  //
  // For example, the accessible trigger of an <sl-button> is a <button> located inside its shadow root.
  //
  // To determine this, we assume the first tabbable element in the trigger slot is the "accessible trigger."
  //
  Dropdown.prototype.updateAccessibleTrigger = function () {
    var slot = this.trigger.querySelector('slot');
    var assignedElements = slot.assignedElements({ flatten: true });
    var accessibleTrigger = assignedElements.map(getNearestTabbableElement)[0];
    if (accessibleTrigger) {
      accessibleTrigger.setAttribute('aria-haspopup', 'true');
      accessibleTrigger.setAttribute('aria-expanded', this.open ? 'true' : 'false');
    }
  };
  Dropdown.prototype.render = function () {
    var _this = this;
    return (h("div", { part: "base", id: this.componentId, class: {
        dropdown: true,
        'dropdown--open': this.open
      } },
      h("span", { part: "trigger", class: "dropdown__trigger", ref: function (el) { return (_this.trigger = el); }, onClick: this.handleTriggerClick, onKeyDown: this.handleTriggerKeyDown, onKeyUp: this.handleTriggerKeyUp },
        h("slot", { name: "trigger", onSlotchange: this.handleTriggerSlotChange })),
      h("div", { ref: function (el) { return (_this.positioner = el); }, class: "dropdown__positioner" },
        h("div", { ref: function (el) { return (_this.panel = el); }, part: "panel", class: "dropdown__panel", role: "menu", "aria-hidden": this.open ? 'false' : 'true', "aria-labelledby": this.componentId },
          h("slot", null)))));
  };
  Object.defineProperty(Dropdown, "is", {
    get: function () { return "sl-dropdown"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Dropdown, "encapsulation", {
    get: function () { return "shadow"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Dropdown, "originalStyleUrls", {
    get: function () { return {
      "$": ["dropdown.scss"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Dropdown, "styleUrls", {
    get: function () { return {
      "$": ["dropdown.css"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Dropdown, "properties", {
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
          "text": "Indicates whether or not the dropdown is open. You can use this in lieu of the show/hide methods."
        },
        "attribute": "open",
        "reflect": true,
        "defaultValue": "false"
      },
      "placement": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "| 'top'\n    | 'top-start'\n    | 'top-end'\n    | 'bottom'\n    | 'bottom-start'\n    | 'bottom-end'\n    | 'right'\n    | 'right-start'\n    | 'right-end'\n    | 'left'\n    | 'left-start'\n    | 'left-end'",
          "resolved": "\"bottom\" | \"bottom-end\" | \"bottom-start\" | \"left\" | \"left-end\" | \"left-start\" | \"right\" | \"right-end\" | \"right-start\" | \"top\" | \"top-end\" | \"top-start\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The preferred placement of the dropdown panel. Note that the actual placement may vary as needed to keep the panel\ninside of the viewport."
        },
        "attribute": "placement",
        "reflect": false,
        "defaultValue": "'bottom-start'"
      },
      "closeOnSelect": {
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
          "text": "Determines whether the dropdown should hide when a menu item is selected."
        },
        "attribute": "close-on-select",
        "reflect": false,
        "defaultValue": "true"
      },
      "containingElement": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "HTMLElement",
          "resolved": "HTMLElement",
          "references": {
            "HTMLElement": {
              "location": "global"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The dropdown will close when the user interacts outside of this element (e.g. clicking)."
        }
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
          "text": "The distance in pixels from which to offset the panel away from its trigger."
        },
        "attribute": "distance",
        "reflect": false,
        "defaultValue": "2"
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
          "text": "The distance in pixels from which to offset the panel along its trigger."
        },
        "attribute": "skidding",
        "reflect": false,
        "defaultValue": "0"
      },
      "hoist": {
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
          "text": "Enable this option to prevent the panel from being clipped when the component is placed inside a container with\n`overflow: auto|scroll`."
        },
        "attribute": "hoist",
        "reflect": false,
        "defaultValue": "false"
      }
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Dropdown, "events", {
    get: function () { return [{
        "method": "slShow",
        "name": "sl-show",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the dropdown opens. Calling `event.preventDefault()` will prevent it from being opened."
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
          "text": "Emitted after the dropdown opens and all transitions are complete."
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
          "text": "Emitted when the dropdown closes. Calling `event.preventDefault()` will prevent it from being closed."
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
          "text": "Emitted after the dropdown closes and all transitions are complete."
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
  Object.defineProperty(Dropdown, "methods", {
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
          "text": "Shows the dropdown panel",
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
          "text": "Hides the dropdown panel",
          "tags": []
        }
      }
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Dropdown, "elementRef", {
    get: function () { return "host"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Dropdown, "watchers", {
    get: function () { return [{
        "propName": "open",
        "methodName": "handleOpenChange"
      }, {
        "propName": "distance",
        "methodName": "handlePopoverOptionsChange"
      }, {
        "propName": "hoist",
        "methodName": "handlePopoverOptionsChange"
      }, {
        "propName": "placement",
        "methodName": "handlePopoverOptionsChange"
      }, {
        "propName": "skidding",
        "methodName": "handlePopoverOptionsChange"
      }]; },
    enumerable: false,
    configurable: true
  });
  return Dropdown;
}());
export { Dropdown };
