'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-01349945.js');

const menuLabelCss = ":host{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{display:block}.menu-label{font-family:var(--sl-font-sans);font-size:var(--sl-font-size-small);font-weight:var(--sl-font-weight-normal);line-height:var(--sl-line-height-normal);letter-spacing:var(--sl-letter-spacing-normal);color:var(--sl-color-gray-400);padding:var(--sl-spacing-xx-small) var(--sl-spacing-x-large);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}";

const MenuLabel = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("div", { part: "base", class: "menu-label" }, index.h("slot", null)));
  }
};
MenuLabel.style = menuLabelCss;

exports.sl_menu_label = MenuLabel;
