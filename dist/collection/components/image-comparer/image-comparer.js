import { Component, Event, Prop, Watch, h } from '@stencil/core';
import { clamp } from '../../utilities/math';
/**
 * @since 2.0
 * @status experimental
 *
 * @slot before - The before image, an `<img>` or `<svg>` element.
 * @slot after - The after image, an `<img>` or `<svg>` element.
 *
 * @part base - The component's base wrapper.
 * @part before - The container that holds the "before" image.
 * @part after - The container that holds the "after" image.
 * @part divider - The divider that separates the images.
 * @part handle - The handle that the user drags to expose the after image.
 */
var ImageComparer = /** @class */ (function () {
  function ImageComparer() {
    /** The position of the divider as a percentage. */
    this.position = 50;
  }
  ImageComparer.prototype.handlePositionChange = function () {
    this.slChange.emit();
  };
  ImageComparer.prototype.connectedCallback = function () {
    this.handleDrag = this.handleDrag.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  };
  ImageComparer.prototype.handleDrag = function (event) {
    var _this = this;
    var width = this.base.getBoundingClientRect().width;
    function drag(event, container, onMove) {
      var move = function (event) {
        var dims = container.getBoundingClientRect();
        var offsetX = dims.left + container.ownerDocument.defaultView.pageXOffset;
        var offsetY = dims.top + container.ownerDocument.defaultView.pageYOffset;
        var x = (event.changedTouches ? event.changedTouches[0].pageX : event.pageX) - offsetX;
        var y = (event.changedTouches ? event.changedTouches[0].pageY : event.pageY) - offsetY;
        onMove(x, y);
      };
      // Move on init
      move(event);
      var stop = function () {
        document.removeEventListener('mousemove', move);
        document.removeEventListener('touchmove', move);
        document.removeEventListener('mouseup', stop);
        document.removeEventListener('touchend', stop);
      };
      document.addEventListener('mousemove', move);
      document.addEventListener('touchmove', move);
      document.addEventListener('mouseup', stop);
      document.addEventListener('touchend', stop);
    }
    this.handle.focus();
    event.preventDefault();
    drag(event, this.base, function (x) {
      _this.position = clamp((x / width) * 100, 0, 100);
    });
  };
  ImageComparer.prototype.handleKeyDown = function (event) {
    if (['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) {
      var incr = event.shiftKey ? 10 : 1;
      var newPosition = this.position;
      event.preventDefault();
      if (event.key === 'ArrowLeft')
        newPosition = newPosition - incr;
      if (event.key === 'ArrowRight')
        newPosition = newPosition + incr;
      if (event.key === 'Home')
        newPosition = 0;
      if (event.key === 'End')
        newPosition = 100;
      newPosition = clamp(newPosition, 0, 100);
      this.position = newPosition;
    }
  };
  ImageComparer.prototype.render = function () {
    var _this = this;
    return (h("div", { ref: function (el) { return (_this.base = el); }, part: "base", class: "image-comparer", onKeyDown: this.handleKeyDown },
      h("div", { class: "image-comparer__image" },
        h("div", { part: "before", class: "image-comparer__before" },
          h("slot", { name: "before" })),
        h("div", { part: "after", class: "image-comparer__after", style: {
            clipPath: "inset(0 " + (100 - this.position) + "% 0 0)"
          } },
          h("slot", { name: "after" }))),
      h("div", { ref: function (el) { return (_this.divider = el); }, part: "divider", class: "image-comparer__divider", style: {
          left: this.position + "%"
        }, onMouseDown: this.handleDrag, onTouchStart: this.handleDrag },
        h("div", { ref: function (el) { return (_this.handle = el); }, part: "handle", class: "image-comparer__handle", role: "scrollbar", "aria-valuenow": this.position, "aria-valuemin": "0", "aria-valuemax": "100", tabIndex: 0 },
          h("sl-icon", { class: "image-comparer__handle-icon", name: "grip-horizontal" })))));
  };
  Object.defineProperty(ImageComparer, "is", {
    get: function () { return "sl-image-comparer"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ImageComparer, "encapsulation", {
    get: function () { return "shadow"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ImageComparer, "originalStyleUrls", {
    get: function () { return {
      "$": ["image-comparer.scss"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ImageComparer, "styleUrls", {
    get: function () { return {
      "$": ["image-comparer.css"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ImageComparer, "properties", {
    get: function () { return {
      "position": {
        "type": "number",
        "mutable": true,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The position of the divider as a percentage."
        },
        "attribute": "position",
        "reflect": false,
        "defaultValue": "50"
      }
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ImageComparer, "events", {
    get: function () { return [{
        "method": "slChange",
        "name": "sl-change",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the slider position changes."
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
  Object.defineProperty(ImageComparer, "watchers", {
    get: function () { return [{
        "propName": "position",
        "methodName": "handlePositionChange"
      }]; },
    enumerable: false,
    configurable: true
  });
  return ImageComparer;
}());
export { ImageComparer };
