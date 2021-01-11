import { r as s, h as t } from './p-32052503.js';
const i = class {
  constructor(t) {
    s(this, t), (this.label = '');
  }
  connectedCallback() {
    (this.handleFocus = this.handleFocus.bind(this)), (this.handleBlur = this.handleBlur.bind(this));
  }
  componentDidLoad() {
    this.buttonGroup.addEventListener('sl-focus', this.handleFocus),
      this.buttonGroup.addEventListener('sl-blur', this.handleBlur);
  }
  disconnectedCallback() {
    this.buttonGroup.removeEventListener('sl-focus', this.handleFocus),
      this.buttonGroup.removeEventListener('sl-blur', this.handleBlur);
  }
  handleFocus(s) {
    s.target.classList.add('sl-focus');
  }
  handleBlur(s) {
    s.target.classList.remove('sl-focus');
  }
  render() {
    return t(
      'div',
      { ref: s => (this.buttonGroup = s), part: 'base', class: 'button-group', 'aria-label': this.label },
      t('slot', null)
    );
  }
};
i.style =
  ':host{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{display:inline-block}.button-group{display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;position:relative}::slotted(.sl-hover){z-index:1}::slotted(.sl-focus){z-index:2}';
export { i as sl_button_group };
