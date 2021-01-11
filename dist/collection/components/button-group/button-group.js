import { Component, Prop, h } from '@stencil/core';
/**
 * @since 2.0
 * @status stable
 *
 * @slot - One or more `<sl-button>` elements to display in the button group.
 *
 * @part base - The component's base wrapper.
 */
var ButtonGroup = /** @class */ (function () {
  function ButtonGroup() {
    /** A label to use for the button group's `aria-label` attribute. */
    this.label = '';
  }
  ButtonGroup.prototype.connectedCallback = function () {
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  };
  ButtonGroup.prototype.componentDidLoad = function () {
    this.buttonGroup.addEventListener('sl-focus', this.handleFocus);
    this.buttonGroup.addEventListener('sl-blur', this.handleBlur);
  };
  ButtonGroup.prototype.disconnectedCallback = function () {
    this.buttonGroup.removeEventListener('sl-focus', this.handleFocus);
    this.buttonGroup.removeEventListener('sl-blur', this.handleBlur);
  };
  ButtonGroup.prototype.handleFocus = function (event) {
    var button = event.target;
    button.classList.add('sl-focus');
  };
  ButtonGroup.prototype.handleBlur = function (event) {
    var button = event.target;
    button.classList.remove('sl-focus');
  };
  ButtonGroup.prototype.render = function () {
    var _this = this;
    return (h("div", { ref: function (el) { return (_this.buttonGroup = el); }, part: "base", class: "button-group", "aria-label": this.label },
      h("slot", null)));
  };
  Object.defineProperty(ButtonGroup, "is", {
    get: function () { return "sl-button-group"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ButtonGroup, "encapsulation", {
    get: function () { return "shadow"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ButtonGroup, "originalStyleUrls", {
    get: function () { return {
      "$": ["button-group.scss"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ButtonGroup, "styleUrls", {
    get: function () { return {
      "$": ["button-group.css"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ButtonGroup, "properties", {
    get: function () { return {
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
          "text": "A label to use for the button group's `aria-label` attribute."
        },
        "attribute": "label",
        "reflect": false,
        "defaultValue": "''"
      }
    }; },
    enumerable: false,
    configurable: true
  });
  return ButtonGroup;
}());
export { ButtonGroup };
