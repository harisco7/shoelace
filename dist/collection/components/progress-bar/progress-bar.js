import { Component, Prop, h } from '@stencil/core';
/**
 * @since 2.0
 * @status stable
 *
 * @slot - A label to show inside the indicator.
 *
 * @part base - The component's base wrapper.
 * @part indicator - The progress bar indicator.
 * @part label - The progress bar label.
 */
var ProgressBar = /** @class */ (function () {
  function ProgressBar() {
    /** The progress bar's percentage, 0 to 100. */
    this.percentage = 0;
  }
  ProgressBar.prototype.render = function () {
    return (h("div", { part: "base", class: "progress-bar", role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": this.percentage },
      h("div", { part: "indicator", class: "progress-bar__indicator", style: {
          width: this.percentage + "%"
        } },
        h("span", { part: "label", class: "progress-bar__label" },
          h("slot", null)))));
  };
  Object.defineProperty(ProgressBar, "is", {
    get: function () { return "sl-progress-bar"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ProgressBar, "encapsulation", {
    get: function () { return "shadow"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ProgressBar, "originalStyleUrls", {
    get: function () { return {
      "$": ["progress-bar.scss"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ProgressBar, "styleUrls", {
    get: function () { return {
      "$": ["progress-bar.css"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ProgressBar, "properties", {
    get: function () { return {
      "percentage": {
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
          "text": "The progress bar's percentage, 0 to 100."
        },
        "attribute": "percentage",
        "reflect": false,
        "defaultValue": "0"
      }
    }; },
    enumerable: false,
    configurable: true
  });
  return ProgressBar;
}());
export { ProgressBar };
