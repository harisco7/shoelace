import { r as registerInstance, h, H as Host } from './index-a0f9580d.js';

const themeCss = ":host{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{display:contents}";

const Theme = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * The name of the theme to use. The user is responsible for including the associated stylesheet(s). Supportive themes
     * must adhere to theme guidelines by exposing a class that follows the `sl-theme-{name}` convention.
     */
    this.name = '';
  }
  render() {
    return (h(Host, { class: `sl-theme-${this.name}` }, h("slot", null)));
  }
};
Theme.style = themeCss;

export { Theme as sl_theme };
