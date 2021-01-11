import { r as registerInstance, h } from './index-a0f9580d.js';

const progressBarCss = ":host{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{--height:16px;--track-color:var(--sl-color-gray-200);--indicator-color:var(--sl-color-primary-500);--label-color:var(--sl-color-white);display:block}.progress-bar{position:relative;background-color:var(--track-color);height:var(--height);border-radius:var(--sl-border-radius-pill);overflow:hidden}.progress-bar__indicator{height:100%;font-family:var(--sl-font-sans);font-size:12px;font-weight:var(--sl-font-weight-normal);background-color:var(--indicator-color);color:var(--label-color);text-align:center;line-height:var(--height);white-space:nowrap;overflow:hidden;-webkit-transition:400ms width, 400ms background-color;transition:400ms width, 400ms background-color;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.progress-bar--indeterminate .progress-bar__indicator{position:absolute;-webkit-animation:indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);animation:indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1)}@-webkit-keyframes indeterminate{0%{left:-50%;width:50%}75%,100%{left:100%;width:50%}}@keyframes indeterminate{0%{left:-50%;width:50%}75%,100%{left:100%;width:50%}}";

const ProgressBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** The progress bar's percentage, 0 to 100. */
    this.percentage = 0;
    /** When true, percentage is ignored, the label is hidden, and the progress bar is drawn in an indeterminate state. */
    this.indeterminate = false;
  }
  render() {
    return (h("div", { part: "base", class: {
        'progress-bar': true,
        'progress-bar--indeterminate': this.indeterminate
      }, role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": this.indeterminate ? null : this.percentage }, h("div", { part: "indicator", class: "progress-bar__indicator", style: {
        width: `${this.percentage}%`
      } }, !this.indeterminate && (h("span", { part: "label", class: "progress-bar__label" }, h("slot", null))))));
  }
};
ProgressBar.style = progressBarCss;

export { ProgressBar as sl_progress_bar };
