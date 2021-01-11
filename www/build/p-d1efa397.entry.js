import { r as t, h as s, H as e, g as i } from './p-32052503.js';
let a = 0;
const r = class {
  constructor(s) {
    t(this, s), (this.componentId = 'tab-panel-' + ++a), (this.name = ''), (this.active = !1);
  }
  render() {
    return s(
      e,
      { id: this.host.id || this.componentId, style: { display: this.active ? 'block' : 'none' } },
      s(
        'div',
        {
          part: 'base',
          class: 'tab-panel',
          role: 'tabpanel',
          'aria-selected': this.active ? 'true' : 'false',
          'aria-hidden': this.active ? 'false' : 'true'
        },
        s('slot', null)
      )
    );
  }
  get host() {
    return i(this);
  }
};
r.style =
  ':host{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{display:block}.tab-panel{border:solid 1px transparent;padding:20px 20px}';
export { r as sl_tab_panel };
