import { Component, Prop, Watch, h } from '@stencil/core';
/**
 * @since 2.0
 * @status stable
 *
 * @slot - A label to show inside the ring.
 *
 * @part base - The component's base wrapper.
 * @part label - The progress ring label.
 */
var Progress = /** @class */ (function () {
  function Progress() {
    /** The size of the progress ring in pixels. */
    this.size = 128;
    /** The stroke width of the progress ring in pixels. */
    this.strokeWidth = 4;
  }
  Progress.prototype.handlePercentageChange = function () {
    this.updateProgress();
  };
  Progress.prototype.componentDidLoad = function () {
    this.updateProgress();
  };
  Progress.prototype.updateProgress = function () {
    var radius = this.indicator.r.baseVal.value;
    var circumference = radius * 2 * Math.PI;
    var offset = circumference - (this.percentage / 100) * circumference;
    this.indicator.style.strokeDasharray = circumference + " " + circumference;
    this.indicator.style.strokeDashoffset = "" + offset;
  };
  Progress.prototype.render = function () {
    var _this = this;
    return (h("div", { part: "base", class: "progress-ring" },
      h("svg", { class: "progress-ring__image", width: this.size, height: this.size },
        h("circle", { class: "progress-ring__track", "stroke-width": this.strokeWidth, "stroke-linecap": "round", fill: "transparent", r: this.size / 2 - this.strokeWidth * 2, cx: this.size / 2, cy: this.size / 2 }),
        h("circle", { ref: function (el) { return (_this.indicator = el); }, class: "progress-ring__indicator", "stroke-width": this.strokeWidth, "stroke-linecap": "round", fill: "transparent", r: this.size / 2 - this.strokeWidth * 2, cx: this.size / 2, cy: this.size / 2 })),
      h("span", { part: "label", class: "progress-ring__label" },
        h("slot", null))));
  };
  Object.defineProperty(Progress, "is", {
    get: function () { return "sl-progress-ring"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Progress, "encapsulation", {
    get: function () { return "shadow"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Progress, "originalStyleUrls", {
    get: function () { return {
      "$": ["progress-ring.scss"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Progress, "styleUrls", {
    get: function () { return {
      "$": ["progress-ring.css"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Progress, "properties", {
    get: function () { return {
      "size": {
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
          "text": "The size of the progress ring in pixels."
        },
        "attribute": "size",
        "reflect": false,
        "defaultValue": "128"
      },
      "strokeWidth": {
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
          "text": "The stroke width of the progress ring in pixels."
        },
        "attribute": "stroke-width",
        "reflect": false,
        "defaultValue": "4"
      },
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
          "text": "The current progress percentage, 0 - 100."
        },
        "attribute": "percentage",
        "reflect": false
      }
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Progress, "watchers", {
    get: function () { return [{
        "propName": "percentage",
        "methodName": "handlePercentageChange"
      }]; },
    enumerable: false,
    configurable: true
  });
  return Progress;
}());
export { Progress };
