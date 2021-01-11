import { Component, Host, Prop, h } from '@stencil/core';
/**
 * @since 2.0
 * @status experimental
 */
var Theme = /** @class */ (function () {
  function Theme() {
    /**
     * The name of the theme to use. The user is responsible for including the associated stylesheet(s). Supportive themes
     * must adhere to theme guidelines by exposing a class that follows the `sl-theme-{name}` convention.
     */
    this.name = '';
  }
  Theme.prototype.render = function () {
    return (h(Host, { class: "sl-theme-" + this.name },
      h("slot", null)));
  };
  Object.defineProperty(Theme, "is", {
    get: function () { return "sl-theme"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Theme, "encapsulation", {
    get: function () { return "shadow"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Theme, "originalStyleUrls", {
    get: function () { return {
      "$": ["theme.scss"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Theme, "styleUrls", {
    get: function () { return {
      "$": ["theme.css"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Theme, "properties", {
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
          "text": "The name of the theme to use. The user is responsible for including the associated stylesheet(s). Supportive themes\nmust adhere to theme guidelines by exposing a class that follows the `sl-theme-{name}` convention."
        },
        "attribute": "name",
        "reflect": false,
        "defaultValue": "''"
      }
    }; },
    enumerable: false,
    configurable: true
  });
  return Theme;
}());
export { Theme };
