import { r as registerInstance, h } from './index-a0f9580d.js';

const progressRingCss = ":host{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{--track-color:var(--sl-color-gray-200);--indicator-color:var(--sl-color-primary-500);display:-ms-inline-flexbox;display:inline-flex}.progress-ring{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;position:relative}.progress-ring__image{-webkit-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%}.progress-ring__track{stroke:var(--track-color)}.progress-ring__indicator{stroke:var(--indicator-color);-webkit-transition:0.35s stroke-dashoffset, 0.35s stroke;transition:0.35s stroke-dashoffset, 0.35s stroke}.progress-ring__label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;position:absolute;top:0;left:0;width:100%;height:100%;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}";

const Progress = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** The size of the progress ring in pixels. */
    this.size = 128;
    /** The stroke width of the progress ring in pixels. */
    this.strokeWidth = 4;
  }
  handlePercentageChange() {
    this.updateProgress();
  }
  componentDidLoad() {
    this.updateProgress();
  }
  updateProgress() {
    const radius = this.indicator.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (this.percentage / 100) * circumference;
    this.indicator.style.strokeDasharray = `${circumference} ${circumference}`;
    this.indicator.style.strokeDashoffset = `${offset}`;
  }
  render() {
    return (h("div", { part: "base", class: "progress-ring" }, h("svg", { class: "progress-ring__image", width: this.size, height: this.size }, h("circle", { class: "progress-ring__track", "stroke-width": this.strokeWidth, "stroke-linecap": "round", fill: "transparent", r: this.size / 2 - this.strokeWidth * 2, cx: this.size / 2, cy: this.size / 2 }), h("circle", { ref: (el) => (this.indicator = el), class: "progress-ring__indicator", "stroke-width": this.strokeWidth, "stroke-linecap": "round", fill: "transparent", r: this.size / 2 - this.strokeWidth * 2, cx: this.size / 2, cy: this.size / 2 })), h("span", { part: "label", class: "progress-ring__label" }, h("slot", null))));
  }
  static get watchers() { return {
    "percentage": ["handlePercentageChange"]
  }; }
};
Progress.style = progressRingCss;

export { Progress as sl_progress_ring };
