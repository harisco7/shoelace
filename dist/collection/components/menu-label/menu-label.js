import { Component, h } from '@stencil/core';
/**
 * @since 2.0
 * @status stable
 *
 * @slot - The menu label's content.
 *
 * @part base - The component's base wrapper.
 */
var MenuLabel = /** @class */ (function () {
  function MenuLabel() {
  }
  MenuLabel.prototype.render = function () {
    return (h("div", { part: "base", class: "menu-label" },
      h("slot", null)));
  };
  Object.defineProperty(MenuLabel, "is", {
    get: function () { return "sl-menu-label"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MenuLabel, "encapsulation", {
    get: function () { return "shadow"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MenuLabel, "originalStyleUrls", {
    get: function () { return {
      "$": ["menu-label.scss"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MenuLabel, "styleUrls", {
    get: function () { return {
      "$": ["menu-label.css"]
    }; },
    enumerable: false,
    configurable: true
  });
  return MenuLabel;
}());
export { MenuLabel };
