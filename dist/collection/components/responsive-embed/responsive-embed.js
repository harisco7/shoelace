import { Component, Prop, Watch, h } from '@stencil/core';
/**
 * @since 2.0
 * @status stable
 *
 * @part base - The component's base wrapper.
 */
var ResponsiveEmbed = /** @class */ (function () {
  function ResponsiveEmbed() {
    /**
     * The aspect ratio of the embedded media in the format of `width:height`, e.g. `16:9`, `4:3`, or `1:1`. Ratios not in
     * this format will be ignored.
     */
    this.aspectRatio = '16:9';
  }
  ResponsiveEmbed.prototype.handleAspectRatioChange = function () {
    this.setAspectRatio();
  };
  ResponsiveEmbed.prototype.connectedCallback = function () {
    this.handleSlotChange = this.handleSlotChange.bind(this);
  };
  ResponsiveEmbed.prototype.handleSlotChange = function () {
    this.setAspectRatio();
  };
  ResponsiveEmbed.prototype.setAspectRatio = function () {
    var split = this.aspectRatio.split(':');
    var x = parseInt(split[0]);
    var y = parseInt(split[1]);
    this.base.style.paddingBottom = x && y ? (y / x) * 100 + "%" : null;
  };
  ResponsiveEmbed.prototype.render = function () {
    var _this = this;
    return (h("div", { ref: function (el) { return (_this.base = el); }, part: "base", class: "responsive-embed" },
      h("slot", { onSlotchange: this.handleSlotChange })));
  };
  Object.defineProperty(ResponsiveEmbed, "is", {
    get: function () { return "sl-responsive-embed"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ResponsiveEmbed, "encapsulation", {
    get: function () { return "shadow"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ResponsiveEmbed, "originalStyleUrls", {
    get: function () { return {
      "$": ["responsive-embed.scss"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ResponsiveEmbed, "styleUrls", {
    get: function () { return {
      "$": ["responsive-embed.css"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ResponsiveEmbed, "properties", {
    get: function () { return {
      "aspectRatio": {
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
          "text": "The aspect ratio of the embedded media in the format of `width:height`, e.g. `16:9`, `4:3`, or `1:1`. Ratios not in\nthis format will be ignored."
        },
        "attribute": "aspect-ratio",
        "reflect": false,
        "defaultValue": "'16:9'"
      }
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ResponsiveEmbed, "watchers", {
    get: function () { return [{
        "propName": "aspectRatio",
        "methodName": "handleAspectRatioChange"
      }]; },
    enumerable: false,
    configurable: true
  });
  return ResponsiveEmbed;
}());
export { ResponsiveEmbed };
