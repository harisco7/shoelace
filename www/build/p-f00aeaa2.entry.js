import { r as s, h as e } from './p-32052503.js';
const r = class {
  constructor(e) {
    s(this, e), (this.size = 128), (this.strokeWidth = 4);
  }
  handlePercentageChange() {
    this.updateProgress();
  }
  componentDidLoad() {
    this.updateProgress();
  }
  updateProgress() {
    const s = 2 * this.indicator.r.baseVal.value * Math.PI,
      e = s - (this.percentage / 100) * s;
    (this.indicator.style.strokeDasharray = `${s} ${s}`), (this.indicator.style.strokeDashoffset = '' + e);
  }
  render() {
    return e(
      'div',
      { part: 'base', class: 'progress-ring' },
      e(
        'svg',
        { class: 'progress-ring__image', width: this.size, height: this.size },
        e('circle', {
          class: 'progress-ring__track',
          'stroke-width': this.strokeWidth,
          'stroke-linecap': 'round',
          fill: 'transparent',
          r: this.size / 2 - 2 * this.strokeWidth,
          cx: this.size / 2,
          cy: this.size / 2
        }),
        e('circle', {
          ref: s => (this.indicator = s),
          class: 'progress-ring__indicator',
          'stroke-width': this.strokeWidth,
          'stroke-linecap': 'round',
          fill: 'transparent',
          r: this.size / 2 - 2 * this.strokeWidth,
          cx: this.size / 2,
          cy: this.size / 2
        })
      ),
      e('span', { part: 'label', class: 'progress-ring__label' }, e('slot', null))
    );
  }
  static get watchers() {
    return { percentage: ['handlePercentageChange'] };
  }
};
r.style =
  ':host{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{--track-color:var(--sl-color-gray-200);--indicator-color:var(--sl-color-primary-500);display:-ms-inline-flexbox;display:inline-flex}.progress-ring{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;position:relative}.progress-ring__image{-webkit-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%}.progress-ring__track{stroke:var(--track-color)}.progress-ring__indicator{stroke:var(--indicator-color);-webkit-transition:0.35s stroke-dashoffset, 0.35s stroke;transition:0.35s stroke-dashoffset, 0.35s stroke}.progress-ring__label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;position:absolute;top:0;left:0;width:100%;height:100%;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}';
export { r as sl_progress_ring };
