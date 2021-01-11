import { Component, Prop, h } from '@stencil/core';
/**
 * @since 2.0
 * @status stable
 *
 * @slot - The badge's content.
 *
 * @part base - The base wrapper
 */
var Badge = /** @class */ (function () {
  function Badge() {
    /** The badge's type. */
    this.type = 'primary';
    /** Set to true to draw a pill-style badge with rounded edges. */
    this.pill = false;
    /** Set to true to make the badge pulsate to draw attention. */
    this.pulse = false;
  }
  Badge.prototype.render = function () {
    var _this = this;
    return (h("span", { ref: function (el) { return (_this.badge = el); }, part: "base", class: {
        badge: true,
        // Types
        'badge--primary': this.type === 'primary',
        'badge--success': this.type === 'success',
        'badge--info': this.type === 'info',
        'badge--warning': this.type === 'warning',
        'badge--danger': this.type === 'danger',
        'badge--text': this.type === 'text',
        'badge--pill': this.pill,
        'badge--pulse': this.pulse
      }, role: "status" },
      h("slot", null)));
  };
  Object.defineProperty(Badge, "is", {
    get: function () { return "sl-badge"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Badge, "encapsulation", {
    get: function () { return "shadow"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Badge, "originalStyleUrls", {
    get: function () { return {
      "$": ["badge.scss"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Badge, "styleUrls", {
    get: function () { return {
      "$": ["badge.css"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Badge, "properties", {
    get: function () { return {
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'primary' | 'success' | 'info' | 'warning' | 'danger' | 'text'",
          "resolved": "\"danger\" | \"info\" | \"primary\" | \"success\" | \"text\" | \"warning\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The badge's type."
        },
        "attribute": "type",
        "reflect": false,
        "defaultValue": "'primary'"
      },
      "pill": {
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
          "text": "Set to true to draw a pill-style badge with rounded edges."
        },
        "attribute": "pill",
        "reflect": false,
        "defaultValue": "false"
      },
      "pulse": {
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
          "text": "Set to true to make the badge pulsate to draw attention."
        },
        "attribute": "pulse",
        "reflect": false,
        "defaultValue": "false"
      }
    }; },
    enumerable: false,
    configurable: true
  });
  return Badge;
}());
export { Badge };
