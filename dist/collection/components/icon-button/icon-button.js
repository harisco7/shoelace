import { Component, Prop, h } from '@stencil/core';
import { focusVisible } from '../../utilities/focus-visible';
/**
 * @since 2.0
 * @status stable
 *
 * @part base - The component's base wrapper.
 */
var IconButton = /** @class */ (function () {
  function IconButton() {
    /** Set to true to disable the button. */
    this.disabled = false;
  }
  IconButton.prototype.componentDidLoad = function () {
    focusVisible.observe(this.button);
  };
  IconButton.prototype.disconnectedCallback = function () {
    focusVisible.unobserve(this.button);
  };
  IconButton.prototype.render = function () {
    var _this = this;
    return (h("button", { ref: function (el) { return (_this.button = el); }, part: "base", class: {
        'icon-button': true,
        'icon-button--disabled': this.disabled
      }, type: "button", "aria-label": this.label },
      h("sl-icon", { library: this.library, name: this.name, src: this.src, "aria-hidden": "true" })));
  };
  Object.defineProperty(IconButton, "is", {
    get: function () { return "sl-icon-button"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(IconButton, "encapsulation", {
    get: function () { return "shadow"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(IconButton, "originalStyleUrls", {
    get: function () { return {
      "$": ["icon-button.scss"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(IconButton, "styleUrls", {
    get: function () { return {
      "$": ["icon-button.css"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(IconButton, "properties", {
    get: function () { return {
      "name": {
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
          "text": "The name of the icon to draw."
        },
        "attribute": "name",
        "reflect": true
      },
      "library": {
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
          "text": "The name of a registered custom icon library."
        },
        "attribute": "library",
        "reflect": true
      },
      "src": {
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
          "text": "An external URL of an SVG file."
        },
        "attribute": "src",
        "reflect": true
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
          "text": "A description that gets read by screen readers and other assistive devices. For optimal accessibility, you should\nalways include a label that describes what the icon button does."
        },
        "attribute": "label",
        "reflect": true
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
          "text": "Set to true to disable the button."
        },
        "attribute": "disabled",
        "reflect": true,
        "defaultValue": "false"
      }
    }; },
    enumerable: false,
    configurable: true
  });
  return IconButton;
}());
export { IconButton };
