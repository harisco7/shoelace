import { Component, Prop, State, h } from '@stencil/core';
/**
 * @since 2.0
 * @status stable
 *
 * @slot icon - The default icon to use when no image or initials are present.
 *
 * @part base - The component's base wrapper.
 * @part icon - The container that wraps the avatar icon.
 * @part initials - The container that wraps the avatar initials.
 * @part image - The avatar image.
 */
var Avatar = /** @class */ (function () {
  function Avatar() {
    this.hasError = false;
    /** The image source to use for the avatar. */
    this.image = '';
    /** Alternative text for the image. */
    this.alt = '';
    /** Initials to use as a fallback when no image is available (1-2 characters max recommended). */
    this.initials = '';
    /** The shape of the avatar. */
    this.shape = 'circle';
  }
  Avatar.prototype.connectedCallback = function () {
    this.handleImageError = this.handleImageError.bind(this);
  };
  Avatar.prototype.handleImageError = function () {
    this.hasError = true;
  };
  Avatar.prototype.render = function () {
    return (h("div", { part: "base", class: {
        avatar: true,
        'avatar--circle': this.shape === 'circle',
        'avatar--rounded': this.shape === 'rounded',
        'avatar--square': this.shape === 'square'
      }, role: "image", "aria-label": this.alt },
      !this.initials && (h("div", { part: "icon", class: "avatar__icon" },
        h("slot", { name: "icon" },
          h("sl-icon", { name: "person-fill" })))),
      this.initials && (h("div", { part: "initials", class: "avatar__initials" }, this.initials)),
      this.image && !this.hasError && (h("img", { part: "image", class: "avatar__image", src: this.image, onError: this.handleImageError }))));
  };
  Object.defineProperty(Avatar, "is", {
    get: function () { return "sl-avatar"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Avatar, "encapsulation", {
    get: function () { return "shadow"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Avatar, "originalStyleUrls", {
    get: function () { return {
      "$": ["avatar.scss"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Avatar, "styleUrls", {
    get: function () { return {
      "$": ["avatar.css"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Avatar, "properties", {
    get: function () { return {
      "image": {
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
          "text": "The image source to use for the avatar."
        },
        "attribute": "image",
        "reflect": false,
        "defaultValue": "''"
      },
      "alt": {
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
          "text": "Alternative text for the image."
        },
        "attribute": "alt",
        "reflect": false,
        "defaultValue": "''"
      },
      "initials": {
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
          "text": "Initials to use as a fallback when no image is available (1-2 characters max recommended)."
        },
        "attribute": "initials",
        "reflect": false,
        "defaultValue": "''"
      },
      "shape": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'circle' | 'square' | 'rounded'",
          "resolved": "\"circle\" | \"rounded\" | \"square\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The shape of the avatar."
        },
        "attribute": "shape",
        "reflect": false,
        "defaultValue": "'circle'"
      }
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Avatar, "states", {
    get: function () { return {
      "hasError": {}
    }; },
    enumerable: false,
    configurable: true
  });
  return Avatar;
}());
export { Avatar };
