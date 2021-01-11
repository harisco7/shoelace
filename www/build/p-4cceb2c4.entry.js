import { r as e, h as r } from './p-32052503.js';
const s = class {
  constructor(r) {
    e(this, r), (this.type = 'primary'), (this.pill = !1), (this.pulse = !1);
  }
  render() {
    return r(
      'span',
      {
        ref: e => (this.badge = e),
        part: 'base',
        class: {
          badge: !0,
          'badge--primary': 'primary' === this.type,
          'badge--success': 'success' === this.type,
          'badge--info': 'info' === this.type,
          'badge--warning': 'warning' === this.type,
          'badge--danger': 'danger' === this.type,
          'badge--text': 'text' === this.type,
          'badge--pill': this.pill,
          'badge--pulse': this.pulse
        },
        role: 'status'
      },
      r('slot', null)
    );
  }
};
s.style =
  ':host{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{display:-ms-inline-flexbox;display:inline-flex}.badge{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-size:var(--sl-font-size-x-small);font-weight:var(--sl-font-weight-semibold);letter-spacing:var(--sl-letter-spacing-normal);line-height:1;border-radius:var(--sl-border-radius-small);white-space:nowrap;padding:3px 6px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:inherit}.badge--primary{background-color:var(--sl-color-primary-500);color:var(--sl-color-white)}.badge--success{background-color:var(--sl-color-success-500);color:var(--sl-color-white)}.badge--info{background-color:var(--sl-color-info-500);color:var(--sl-color-white)}.badge--warning{background-color:var(--sl-color-warning-500);color:var(--sl-color-white)}.badge--danger{background-color:var(--sl-color-danger-500);color:var(--sl-color-white)}.badge--pill{border-radius:var(--sl-border-radius-pill)}.badge--pulse{-webkit-animation:pulse 1.5s infinite;animation:pulse 1.5s infinite}.badge--pulse.badge--primary{--pulse-color:var(--sl-color-primary-500)}.badge--pulse.badge--success{--pulse-color:var(--sl-color-success-500)}.badge--pulse.badge--info{--pulse-color:var(--sl-color-info-500)}.badge--pulse.badge--warning{--pulse-color:var(--sl-color-warning-500)}.badge--pulse.badge--danger{--pulse-color:var(--sl-color-danger-500)}@-webkit-keyframes pulse{0%{-webkit-box-shadow:0 0 0 0 var(--pulse-color);box-shadow:0 0 0 0 var(--pulse-color)}70%{-webkit-box-shadow:0 0 0 0.5rem transparent;box-shadow:0 0 0 0.5rem transparent}100%{-webkit-box-shadow:0 0 0 0 transparent;box-shadow:0 0 0 0 transparent}}@keyframes pulse{0%{-webkit-box-shadow:0 0 0 0 var(--pulse-color);box-shadow:0 0 0 0 var(--pulse-color)}70%{-webkit-box-shadow:0 0 0 0.5rem transparent;box-shadow:0 0 0 0.5rem transparent}100%{-webkit-box-shadow:0 0 0 0 transparent;box-shadow:0 0 0 0 transparent}}';
export { s as sl_badge };
