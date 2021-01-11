import { Component, h } from '@stencil/core';
/**
 * @since 2.0
 * @status stable
 *
 * @part base - The component's base wrapper.
 */
var Spinner = /** @class */ (function () {
  function Spinner() {
  }
  Spinner.prototype.render = function () {
    return h("span", { part: "base", class: "spinner", "aria-busy": "true", "aria-live": "polite" });
  };
  Object.defineProperty(Spinner, "is", {
    get: function () { return "sl-spinner"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Spinner, "encapsulation", {
    get: function () { return "shadow"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Spinner, "originalStyleUrls", {
    get: function () { return {
      "$": ["spinner.scss"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Spinner, "styleUrls", {
    get: function () { return {
      "$": ["spinner.css"]
    }; },
    enumerable: false,
    configurable: true
  });
  return Spinner;
}());
export { Spinner };
