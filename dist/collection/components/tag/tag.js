import { Component, Event, Prop, h } from '@stencil/core';
/**
 * @since 2.0
 * @status stable
 *
 * @slot - The tag's content.
 *
 * @part base - The component's base wrapper.
 * @part content - The tag content.
 * @part clear-button - The clear button.
 */
var Tag = /** @class */ (function () {
  function Tag() {
    /** The tag's type. */
    this.type = 'primary';
    /** The tag's size. */
    this.size = 'medium';
    /** Set to true to draw a pill-style tag with rounded edges. */
    this.pill = false;
    /** Set to true to make the tag clearable. */
    this.clearable = false;
  }
  Tag.prototype.connectedCallback = function () {
    this.handleClearClick = this.handleClearClick.bind(this);
  };
  Tag.prototype.handleClearClick = function () {
    this.slClear.emit();
  };
  Tag.prototype.render = function () {
    var _this = this;
    return (h("span", { ref: function (el) { return (_this.tag = el); }, part: "base", class: {
        tag: true,
        // Types
        'tag--primary': this.type === 'primary',
        'tag--success': this.type === 'success',
        'tag--info': this.type === 'info',
        'tag--warning': this.type === 'warning',
        'tag--danger': this.type === 'danger',
        'tag--text': this.type === 'text',
        // Sizes
        'tag--small': this.size === 'small',
        'tag--medium': this.size === 'medium',
        'tag--large': this.size === 'large',
        // Modifers
        'tag--pill': this.pill,
        'tag--clearable': this.clearable
      } },
      h("span", { part: "content", class: "tag__content" },
        h("slot", null)),
      this.clearable && (h("sl-icon-button", { exportparts: "base:clear-button", name: "x", class: "tag__clear", onClick: this.handleClearClick }))));
  };
  Object.defineProperty(Tag, "is", {
    get: function () { return "sl-tag"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Tag, "encapsulation", {
    get: function () { return "shadow"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Tag, "originalStyleUrls", {
    get: function () { return {
      "$": ["tag.scss"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Tag, "styleUrls", {
    get: function () { return {
      "$": ["tag.css"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Tag, "properties", {
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
          "text": "The tag's type."
        },
        "attribute": "type",
        "reflect": true,
        "defaultValue": "'primary'"
      },
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'small' | 'medium' | 'large'",
          "resolved": "\"large\" | \"medium\" | \"small\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The tag's size."
        },
        "attribute": "size",
        "reflect": true,
        "defaultValue": "'medium'"
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
          "text": "Set to true to draw a pill-style tag with rounded edges."
        },
        "attribute": "pill",
        "reflect": true,
        "defaultValue": "false"
      },
      "clearable": {
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
          "text": "Set to true to make the tag clearable."
        },
        "attribute": "clearable",
        "reflect": true,
        "defaultValue": "false"
      }
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Tag, "events", {
    get: function () { return [{
        "method": "slClear",
        "name": "sl-clear",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the clear button is activated."
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
  return Tag;
}());
export { Tag };
