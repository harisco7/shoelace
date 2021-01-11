import { r as registerInstance, h } from './index-a0f9580d.js';

const skeletonCss = ":host{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{--border-radius:var(--sl-border-radius-pill);--color:var(--sl-color-gray-200);--sheen-color:var(--sl-color-gray-100);display:block;position:relative}.skeleton{display:-ms-flexbox;display:flex;width:100%;height:100%;min-height:1rem}.skeleton__indicator{-ms-flex:1 1 auto;flex:1 1 auto;background:var(--color);border-radius:var(--border-radius)}.skeleton--sheen .skeleton__indicator{background:-webkit-gradient(linear, right top, left top, from(var(--sheen-color)), color-stop(var(--color)), color-stop(var(--color)), to(var(--sheen-color)));background:linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));background-size:400% 100%;background-size:400% 100%;-webkit-animation:sheen 8s ease-in-out infinite;animation:sheen 8s ease-in-out infinite}.skeleton--pulse .skeleton__indicator{-webkit-animation:pulse 2s ease-in-out 0.5s infinite;animation:pulse 2s ease-in-out 0.5s infinite}@-webkit-keyframes sheen{0%{background-position:200% 0}to{background-position:-200% 0}}@keyframes sheen{0%{background-position:200% 0}to{background-position:-200% 0}}@-webkit-keyframes pulse{0%{opacity:1}50%{opacity:0.4}100%{opacity:1}}@keyframes pulse{0%{opacity:1}50%{opacity:0.4}100%{opacity:1}}";

const Skeleton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** Determines which effect the skeleton will use. */
    this.effect = 'sheen';
  }
  render() {
    return (h("div", { part: "base", class: {
        skeleton: true,
        'skeleton--pulse': this.effect === 'pulse',
        'skeleton--sheen': this.effect === 'sheen'
      }, "aria-busy": "true", "aria-live": "polite" }, h("div", { part: "indicator", class: "skeleton__indicator" })));
  }
};
Skeleton.style = skeletonCss;

export { Skeleton as sl_skeleton };
