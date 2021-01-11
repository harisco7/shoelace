import { Component, Element, Event, h } from '@stencil/core';
/**
 * @since 2.0
 * @status experimental
 */
var ResizeObserverUtility = /** @class */ (function () {
  function ResizeObserverUtility() {
    this.observedElements = [];
  }
  ResizeObserverUtility.prototype.connectedCallback = function () {
    var _this = this;
    this.resizeObserver = new ResizeObserver(function (entries) { return _this.slResize.emit(entries); });
    this.handleSlotChange = this.handleSlotChange.bind(this);
  };
  ResizeObserverUtility.prototype.disconnectedCallback = function () {
    this.resizeObserver.disconnect();
  };
  ResizeObserverUtility.prototype.handleSlotChange = function () {
    var _this = this;
    var slot = this.host.shadowRoot.querySelector('slot');
    var elements = slot.assignedElements({ flatten: true });
    // Unwatch previous elements
    this.observedElements.map(function (el) { return _this.resizeObserver.unobserve(el); });
    this.observedElements = [];
    // Watch new elements
    elements.map(function (el) {
      _this.resizeObserver.observe(el);
      _this.observedElements.push(el);
    });
  };
  ResizeObserverUtility.prototype.render = function () {
    return h("slot", { onSlotchange: this.handleSlotChange });
  };
  Object.defineProperty(ResizeObserverUtility, "is", {
    get: function () { return "sl-resize-observer"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ResizeObserverUtility, "encapsulation", {
    get: function () { return "shadow"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ResizeObserverUtility, "originalStyleUrls", {
    get: function () { return {
      "$": ["resize-observer.scss"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ResizeObserverUtility, "styleUrls", {
    get: function () { return {
      "$": ["resize-observer.css"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ResizeObserverUtility, "events", {
    get: function () { return [{
        "method": "slResize",
        "name": "sl-resize",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the element is resized."
        },
        "complexType": {
          "original": "readonly ResizeObserverEntry[]",
          "resolved": "readonly ResizeObserverEntry[]",
          "references": {
            "ResizeObserverEntry": {
              "location": "global"
            }
          }
        }
      }]; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ResizeObserverUtility, "elementRef", {
    get: function () { return "host"; },
    enumerable: false,
    configurable: true
  });
  return ResizeObserverUtility;
}());
export { ResizeObserverUtility };
