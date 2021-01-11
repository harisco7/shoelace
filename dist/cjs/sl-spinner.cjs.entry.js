'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-01349945.js');

const spinnerCss = ":host{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{--track-color:#0d131e20;--indicator-color:var(--sl-color-primary-500);--stroke-width:2px;display:-ms-inline-flexbox;display:inline-flex}.spinner{display:inline-block;width:1em;height:1em;border-radius:50%;border:solid var(--stroke-width) var(--track-color);border-top-color:var(--indicator-color);border-right-color:var(--indicator-color);-webkit-animation:1s linear infinite spin;animation:1s linear infinite spin}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}";

const Spinner = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return index.h("span", { part: "base", class: "spinner", "aria-busy": "true", "aria-live": "polite" });
  }
};
Spinner.style = spinnerCss;

exports.sl_spinner = Spinner;
