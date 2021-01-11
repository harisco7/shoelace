import { r as registerInstance, h } from './index-a0f9580d.js';

const menuLabelCss = ":host{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{display:block}.menu-label{font-family:var(--sl-font-sans);font-size:var(--sl-font-size-small);font-weight:var(--sl-font-weight-normal);line-height:var(--sl-line-height-normal);letter-spacing:var(--sl-letter-spacing-normal);color:var(--sl-color-gray-400);padding:var(--sl-spacing-xx-small) var(--sl-spacing-x-large);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}";

const MenuLabel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { part: "base", class: "menu-label" }, h("slot", null)));
  }
};
MenuLabel.style = menuLabelCss;

export { MenuLabel as sl_menu_label };
