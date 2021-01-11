import { Component, h } from '@stencil/core';
/**
 * @since 2.0
 * @status stable
 *
 * @part base - The component's base wrapper.
 */
var MenuDivider = /** @class */ (function () {
  function MenuDivider() {
  }
  MenuDivider.prototype.render = function () {
    return h("div", { part: "base", class: "menu-divider", role: "separator", "aria-hidden": "true" });
  };
  Object.defineProperty(MenuDivider, "is", {
    get: function () { return "sl-menu-divider"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MenuDivider, "encapsulation", {
    get: function () { return "shadow"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MenuDivider, "originalStyleUrls", {
    get: function () { return {
      "$": ["menu-divider.scss"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MenuDivider, "styleUrls", {
    get: function () { return {
      "$": ["menu-divider.css"]
    }; },
    enumerable: false,
    configurable: true
  });
  return MenuDivider;
}());
export { MenuDivider };
