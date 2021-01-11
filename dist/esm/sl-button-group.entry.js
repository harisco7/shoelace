import { r as registerInstance, h } from './index-a0f9580d.js';

const buttonGroupCss = ":host{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{display:inline-block}.button-group{display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;position:relative}::slotted(.sl-hover){z-index:1}::slotted(.sl-focus){z-index:2}";

const ButtonGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** A label to use for the button group's `aria-label` attribute. */
    this.label = '';
  }
  connectedCallback() {
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  componentDidLoad() {
    this.buttonGroup.addEventListener('sl-focus', this.handleFocus);
    this.buttonGroup.addEventListener('sl-blur', this.handleBlur);
  }
  disconnectedCallback() {
    this.buttonGroup.removeEventListener('sl-focus', this.handleFocus);
    this.buttonGroup.removeEventListener('sl-blur', this.handleBlur);
  }
  handleFocus(event) {
    const button = event.target;
    button.classList.add('sl-focus');
  }
  handleBlur(event) {
    const button = event.target;
    button.classList.remove('sl-focus');
  }
  render() {
    return (h("div", { ref: el => (this.buttonGroup = el), part: "base", class: "button-group", "aria-label": this.label }, h("slot", null)));
  }
};
ButtonGroup.style = buttonGroupCss;

export { ButtonGroup as sl_button_group };
