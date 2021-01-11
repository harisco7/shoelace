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
import { Component, Element, Event, Method, Prop, State, Watch, h } from '@stencil/core';
import { getOffset } from '../../utilities/offset';
import { scrollIntoView } from '../../utilities/scroll';
import { focusVisible } from '../../utilities/focus-visible';
import ResizeObserver from 'resize-observer-polyfill';
/**
 * @since 2.0
 * @status stable
 *
 * @slot nav - Used for grouping tabs in the tab group.
 * @slot - Used for grouping tab panels in the tab group.
 *
 * @part base - The component's base wrapper.
 * @part nav - The tab group navigation container.
 * @part tabs - The container that wraps the slotted tabs.
 * @part active-tab-indicator - An element that displays the currently selected tab. This is a child of the tabs container.
 * @part body - The tab group body where tab panels are slotted in.
 */
var TabGroup = /** @class */ (function () {
  function TabGroup() {
    this.hasScrollControls = false;
    /** The placement of the tabs. */
    this.placement = 'top';
    /** Disables the scroll arrows that appear when tabs overflow. */
    this.noScrollControls = false;
  }
  TabGroup.prototype.handlePlacementChange = function () {
    this.syncActiveTabIndicator();
  };
  TabGroup.prototype.handleNoScrollControlsChange = function () {
    this.updateScrollControls();
  };
  TabGroup.prototype.connectedCallback = function () {
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleScrollLeft = this.handleScrollLeft.bind(this);
    this.handleScrollRight = this.handleScrollRight.bind(this);
  };
  TabGroup.prototype.componentDidLoad = function () {
    var _this = this;
    // Set initial tab state when the tabs first become visible
    var observer = new IntersectionObserver(function (entries, observer) {
      if (entries[0].intersectionRatio > 0) {
        _this.setAriaLabels();
        _this.setActiveTab(_this.getActiveTab() || _this.getAllTabs()[0], false);
        observer.unobserve(entries[0].target);
      }
    });
    observer.observe(this.host);
    focusVisible.observe(this.tabGroup);
    this.resizeObserver = new ResizeObserver(function () { return _this.updateScrollControls(); });
    this.resizeObserver.observe(this.nav);
    requestAnimationFrame(function () { return _this.updateScrollControls(); });
    // Update aria labels if the DOM changes
    this.mutationObserver = new MutationObserver(function (mutations) {
      if (mutations.some(function (mutation) {
        return !['aria-labelledby', 'aria-controls'].includes(mutation.attributeName);
      })) {
        setTimeout(function () { return _this.setAriaLabels(); });
      }
    });
    this.mutationObserver.observe(this.host, { attributes: true, childList: true, subtree: true });
  };
  TabGroup.prototype.disconnectedCallback = function () {
    this.mutationObserver.disconnect();
    focusVisible.unobserve(this.tabGroup);
    this.resizeObserver.unobserve(this.nav);
  };
  /** Shows the specified tab panel. */
  TabGroup.prototype.show = function (panel) {
    return __awaiter(this, void 0, void 0, function () {
      var tabs, tab;
      return __generator(this, function (_a) {
        tabs = this.getAllTabs();
        tab = tabs.find(function (el) { return el.panel === panel; });
        if (tab) {
          this.setActiveTab(tab);
        }
        return [2 /*return*/];
      });
    });
  };
  TabGroup.prototype.getAllTabs = function (includeDisabled) {
    if (includeDisabled === void 0) { includeDisabled = false; }
    var slot = this.tabs.querySelector('slot');
    return __spreadArrays(slot.assignedElements()).filter(function (el) {
      return includeDisabled
        ? el.tagName.toLowerCase() === 'sl-tab'
        : el.tagName.toLowerCase() === 'sl-tab' && !el.disabled;
    });
  };
  TabGroup.prototype.getAllPanels = function () {
    var slot = this.body.querySelector('slot');
    return __spreadArrays(slot.assignedElements()).filter(function (el) { return el.tagName.toLowerCase() === 'sl-tab-panel'; });
  };
  TabGroup.prototype.getActiveTab = function () {
    return this.getAllTabs().find(function (el) { return el.active; });
  };
  TabGroup.prototype.handleClick = function (event) {
    var target = event.target;
    var tab = target.closest('sl-tab');
    if (tab) {
      this.setActiveTab(tab);
    }
  };
  TabGroup.prototype.handleKeyDown = function (event) {
    // Activate a tab
    if (['Enter', ' '].includes(event.key)) {
      var target = event.target;
      var tab = target.closest('sl-tab');
      if (tab) {
        this.setActiveTab(tab);
        event.preventDefault();
      }
    }
    // Move focus left or right
    if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) {
      var activeEl = document.activeElement;
      if (activeEl && activeEl.tagName.toLowerCase() === 'sl-tab') {
        var tabs = this.getAllTabs();
        var index = tabs.indexOf(activeEl);
        if (event.key === 'Home') {
          index = 0;
        }
        else if (event.key === 'End') {
          index = tabs.length - 1;
        }
        else if (event.key === 'ArrowLeft') {
          index = Math.max(0, index - 1);
        }
        else if (event.key === 'ArrowRight') {
          index = Math.min(tabs.length - 1, index + 1);
        }
        tabs[index].setFocus();
        if (['top', 'bottom'].includes(this.placement)) {
          scrollIntoView(tabs[index], this.nav, 'horizontal');
        }
        event.preventDefault();
      }
    }
  };
  TabGroup.prototype.handleScrollLeft = function () {
    this.nav.scroll({
      left: this.nav.scrollLeft - this.nav.clientWidth,
      behavior: 'smooth'
    });
  };
  TabGroup.prototype.handleScrollRight = function () {
    this.nav.scroll({
      left: this.nav.scrollLeft + this.nav.clientWidth,
      behavior: 'smooth'
    });
  };
  TabGroup.prototype.updateScrollControls = function () {
    if (this.noScrollControls) {
      this.hasScrollControls = false;
    }
    else {
      this.hasScrollControls =
        ['top', 'bottom'].includes(this.placement) && this.nav.scrollWidth > this.nav.clientWidth;
    }
  };
  TabGroup.prototype.setActiveTab = function (tab, emitEvents) {
    var _this = this;
    if (emitEvents === void 0) { emitEvents = true; }
    if (tab && tab !== this.activeTab && !tab.disabled) {
      var previousTab = this.activeTab;
      this.activeTab = tab;
      // Sync tabs and panels
      this.getAllTabs().map(function (el) { return (el.active = el === _this.activeTab); });
      this.getAllPanels().map(function (el) { return (el.active = el.name === _this.activeTab.panel); });
      this.syncActiveTabIndicator();
      if (['top', 'bottom'].includes(this.placement)) {
        scrollIntoView(this.activeTab, this.nav, 'horizontal');
      }
      // Emit events
      if (emitEvents) {
        if (previousTab) {
          this.slTabHide.emit({ name: previousTab.panel });
        }
        this.slTabShow.emit({ name: this.activeTab.panel });
      }
    }
  };
  TabGroup.prototype.setAriaLabels = function () {
    var tabs = this.getAllTabs();
    var panels = this.getAllPanels();
    // Link each tab with its corresponding panel
    tabs.map(function (tab) {
      var panel = panels.find(function (el) { return el.name === tab.panel; });
      if (panel) {
        tab.setAttribute('aria-controls', panel.getAttribute('id'));
        panel.setAttribute('aria-labelledby', tab.getAttribute('id'));
      }
    });
  };
  TabGroup.prototype.syncActiveTabIndicator = function () {
    var tab = this.getActiveTab();
    var width = tab.clientWidth;
    var height = tab.clientHeight;
    var offset = getOffset(tab, this.nav);
    var offsetTop = offset.top + this.nav.scrollTop;
    var offsetLeft = offset.left + this.nav.scrollLeft;
    switch (this.placement) {
      case 'top':
      case 'bottom':
        this.activeTabIndicator.style.width = width + "px";
        this.activeTabIndicator.style.height = null;
        this.activeTabIndicator.style.transform = "translateX(" + offsetLeft + "px)";
        break;
      case 'left':
      case 'right':
        this.activeTabIndicator.style.width = null;
        this.activeTabIndicator.style.height = height + "px";
        this.activeTabIndicator.style.transform = "translateY(" + offsetTop + "px)";
        break;
    }
  };
  TabGroup.prototype.render = function () {
    var _this = this;
    return (h("div", { part: "base", ref: function (el) { return (_this.tabGroup = el); }, class: {
        'tab-group': true,
        // Placements
        'tab-group--top': this.placement === 'top',
        'tab-group--bottom': this.placement === 'bottom',
        'tab-group--left': this.placement === 'left',
        'tab-group--right': this.placement === 'right',
        'tab-group--has-scroll-controls': this.hasScrollControls
      }, onClick: this.handleClick, onKeyDown: this.handleKeyDown },
      h("div", { class: "tab-group__nav-container" },
        this.hasScrollControls && (h("sl-icon-button", { class: "tab-group__scroll-button tab-group__scroll-button--left", name: "chevron-left", onClick: this.handleScrollLeft })),
        h("div", { ref: function (el) { return (_this.nav = el); }, key: "nav", part: "nav", class: "tab-group__nav", tabindex: "-1" },
          h("div", { ref: function (el) { return (_this.tabs = el); }, part: "tabs", class: "tab-group__tabs", role: "tablist" },
            h("div", { ref: function (el) { return (_this.activeTabIndicator = el); }, part: "active-tab-indicator", class: "tab-group__active-tab-indicator" }),
            h("slot", { name: "nav" }))),
        this.hasScrollControls && (h("sl-icon-button", { class: "tab-group__scroll-button tab-group__scroll-button--right", name: "chevron-right", onClick: this.handleScrollRight }))),
      h("div", { ref: function (el) { return (_this.body = el); }, part: "body", class: "tab-group__body" },
        h("slot", null))));
  };
  Object.defineProperty(TabGroup, "is", {
    get: function () { return "sl-tab-group"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(TabGroup, "encapsulation", {
    get: function () { return "shadow"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(TabGroup, "originalStyleUrls", {
    get: function () { return {
      "$": ["tab-group.scss"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(TabGroup, "styleUrls", {
    get: function () { return {
      "$": ["tab-group.css"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(TabGroup, "properties", {
    get: function () { return {
      "placement": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'top' | 'bottom' | 'left' | 'right'",
          "resolved": "\"bottom\" | \"left\" | \"right\" | \"top\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The placement of the tabs."
        },
        "attribute": "placement",
        "reflect": false,
        "defaultValue": "'top'"
      },
      "noScrollControls": {
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
          "text": "Disables the scroll arrows that appear when tabs overflow."
        },
        "attribute": "no-scroll-controls",
        "reflect": false,
        "defaultValue": "false"
      }
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(TabGroup, "states", {
    get: function () { return {
      "hasScrollControls": {}
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(TabGroup, "events", {
    get: function () { return [{
        "method": "slTabShow",
        "name": "sl-tab-show",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when a tab is shown."
        },
        "complexType": {
          "original": "{ name: string }",
          "resolved": "{ name: string; }",
          "references": {}
        }
      }, {
        "method": "slTabHide",
        "name": "sl-tab-hide",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when a tab is hidden."
        },
        "complexType": {
          "original": "{ name: string }",
          "resolved": "{ name: string; }",
          "references": {}
        }
      }]; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(TabGroup, "methods", {
    get: function () { return {
      "show": {
        "complexType": {
          "signature": "(panel: string) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Shows the specified tab panel.",
          "tags": []
        }
      }
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(TabGroup, "elementRef", {
    get: function () { return "host"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(TabGroup, "watchers", {
    get: function () { return [{
        "propName": "placement",
        "methodName": "handlePlacementChange"
      }, {
        "propName": "noScrollControls",
        "methodName": "handleNoScrollControlsChange"
      }]; },
    enumerable: false,
    configurable: true
  });
  return TabGroup;
}());
export { TabGroup };
