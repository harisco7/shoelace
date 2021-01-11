import { Component, Element, State, h } from '@stencil/core';
import { hasSlot } from '../../utilities/slot';
/**
 * @since 2.0
 * @status stable
 *
 * @slot - The card's body.
 * @slot header - The card's header.
 * @slot footer - The card's footer.
 * @slot image - The card's image.
 *
 * @part base - The component's base wrapper.
 * @part image - The card's image, if present.
 * @part header - The card's header, if present.
 * @part body - The card's body.
 * @part footer - The card's footer, if present.
 */
var Card = /** @class */ (function () {
  function Card() {
    this.hasFooter = false;
    this.hasImage = false;
    this.hasHeader = false;
  }
  Card.prototype.connectedCallback = function () {
    this.handleSlotChange = this.handleSlotChange.bind(this);
  };
  Card.prototype.componentWillLoad = function () {
    this.handleSlotChange();
  };
  Card.prototype.handleSlotChange = function () {
    this.hasFooter = hasSlot(this.host, 'footer');
    this.hasImage = hasSlot(this.host, 'image');
    this.hasHeader = hasSlot(this.host, 'header');
  };
  Card.prototype.render = function () {
    return (h("div", { part: "base", class: {
        card: true,
        'card--has-footer': this.hasFooter,
        'card--has-image': this.hasImage,
        'card--has-header': this.hasHeader
      } },
      h("div", { part: "image", class: "card__image" },
        h("slot", { name: "image", onSlotchange: this.handleSlotChange })),
      h("div", { part: "header", class: "card__header" },
        h("slot", { name: "header", onSlotchange: this.handleSlotChange })),
      h("div", { part: "body", class: "card__body" },
        h("slot", null)),
      h("div", { part: "footer", class: "card__footer" },
        h("slot", { name: "footer", onSlotchange: this.handleSlotChange }))));
  };
  Object.defineProperty(Card, "is", {
    get: function () { return "sl-card"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Card, "encapsulation", {
    get: function () { return "shadow"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Card, "originalStyleUrls", {
    get: function () { return {
      "$": ["card.scss"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Card, "styleUrls", {
    get: function () { return {
      "$": ["card.css"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Card, "states", {
    get: function () { return {
      "hasFooter": {},
      "hasImage": {},
      "hasHeader": {}
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Card, "elementRef", {
    get: function () { return "host"; },
    enumerable: false,
    configurable: true
  });
  return Card;
}());
export { Card };
