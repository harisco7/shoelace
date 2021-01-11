import { Component, Prop, h } from '@stencil/core';
/**
 * @since 2.0
 * @status stable
 *
 * @part base - The component's base wrapper.
 * @part indicator - The skeleton's indicator which is responsible for its color and animation.
 */
var Skeleton = /** @class */ (function () {
  function Skeleton() {
    /** Determines which effect the skeleton will use. */
    this.effect = 'sheen';
  }
  Skeleton.prototype.render = function () {
    return (h("div", { part: "base", class: {
        skeleton: true,
        'skeleton--pulse': this.effect === 'pulse',
        'skeleton--sheen': this.effect === 'sheen'
      }, "aria-busy": "true", "aria-live": "polite" },
      h("div", { part: "indicator", class: "skeleton__indicator" })));
  };
  Object.defineProperty(Skeleton, "is", {
    get: function () { return "sl-skeleton"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Skeleton, "encapsulation", {
    get: function () { return "shadow"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Skeleton, "originalStyleUrls", {
    get: function () { return {
      "$": ["skeleton.scss"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Skeleton, "styleUrls", {
    get: function () { return {
      "$": ["skeleton.css"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Skeleton, "properties", {
    get: function () { return {
      "effect": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'pulse' | 'sheen' | 'none'",
          "resolved": "\"none\" | \"pulse\" | \"sheen\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Determines which effect the skeleton will use."
        },
        "attribute": "effect",
        "reflect": false,
        "defaultValue": "'sheen'"
      }
    }; },
    enumerable: false,
    configurable: true
  });
  return Skeleton;
}());
export { Skeleton };
