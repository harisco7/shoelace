import { r as s, c as r, h as t, g as i } from './p-32052503.js';
import { g as a } from './p-e1b02254.js';
const e = class {
  constructor(t) {
    s(this, t), (this.slSelect = r(this, 'sl-select', 7)), (this.typeToSelectString = '');
  }
  connectedCallback() {
    (this.handleClick = this.handleClick.bind(this)), (this.handleKeyDown = this.handleKeyDown.bind(this));
  }
  async typeToSelect(s) {
    clearTimeout(this.typeToSelectTimeout),
      (this.typeToSelectTimeout = setTimeout(() => (this.typeToSelectString = ''), 750)),
      (this.typeToSelectString += s.toLowerCase());
    const r = this.getItems();
    for (const s of r) {
      const r = s.shadowRoot.querySelector('slot:not([name])');
      if (a(r).toLowerCase().trim().substring(0, this.typeToSelectString.length) === this.typeToSelectString) {
        s.setFocus();
        break;
      }
    }
  }
  getItems() {
    return [...this.menu.querySelector('slot').assignedElements({ flatten: !0 })].filter(
      s => 'sl-menu-item' === s.tagName.toLowerCase() && !s.disabled
    );
  }
  getActiveItem() {
    return this.getItems().find(s => s === document.activeElement);
  }
  setActiveItem(s) {
    s.setFocus();
  }
  handleClick(s) {
    const r = s.target.closest('sl-menu-item');
    r && !r.disabled && this.slSelect.emit({ item: r });
  }
  handleKeyDown(s) {
    if ('Enter' === s.key) {
      const r = this.getActiveItem();
      s.preventDefault(), r && this.slSelect.emit({ item: r });
    }
    if ((' ' === s.key && s.preventDefault(), ['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(s.key))) {
      const r = this.getItems(),
        t = this.getActiveItem();
      let i = r.indexOf(t);
      if (r.length)
        return (
          s.preventDefault(),
          'ArrowDown' === s.key
            ? i++
            : 'ArrowUp' === s.key
            ? i--
            : 'Home' === s.key
            ? (i = 0)
            : 'End' === s.key && (i = r.length - 1),
          i < 0 && (i = 0),
          i > r.length - 1 && (i = r.length - 1),
          void this.setActiveItem(r[i])
        );
    }
    this.typeToSelect(s.key);
  }
  render() {
    return t(
      'div',
      {
        ref: s => (this.menu = s),
        part: 'base',
        class: 'menu',
        role: 'menu',
        onClick: this.handleClick,
        onKeyDown: this.handleKeyDown,
        tabIndex: 0
      },
      t('slot', null)
    );
  }
  get host() {
    return i(this);
  }
};
e.style =
  ':host{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{display:block}.menu{padding:var(--sl-spacing-x-small) 0}.menu:focus{outline:none}';
const l = class {
  constructor(t) {
    s(this, t),
      (this.slClear = r(this, 'sl-clear', 7)),
      (this.type = 'primary'),
      (this.size = 'medium'),
      (this.pill = !1),
      (this.clearable = !1);
  }
  connectedCallback() {
    this.handleClearClick = this.handleClearClick.bind(this);
  }
  handleClearClick() {
    this.slClear.emit();
  }
  render() {
    return t(
      'span',
      {
        ref: s => (this.tag = s),
        part: 'base',
        class: {
          tag: !0,
          'tag--primary': 'primary' === this.type,
          'tag--success': 'success' === this.type,
          'tag--info': 'info' === this.type,
          'tag--warning': 'warning' === this.type,
          'tag--danger': 'danger' === this.type,
          'tag--text': 'text' === this.type,
          'tag--small': 'small' === this.size,
          'tag--medium': 'medium' === this.size,
          'tag--large': 'large' === this.size,
          'tag--pill': this.pill,
          'tag--clearable': this.clearable
        }
      },
      t('span', { part: 'content', class: 'tag__content' }, t('slot', null)),
      this.clearable &&
        t('sl-icon-button', {
          exportparts: 'base:clear-button',
          name: 'x',
          class: 'tag__clear',
          onClick: this.handleClearClick
        })
    );
  }
};
l.style =
  ':host{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{display:inline-block}.tag{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;border:solid 1px;line-height:1;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.tag__clear::part(base){color:inherit;padding:0}.tag--primary{background-color:var(--sl-color-primary-100);border-color:var(--sl-color-primary-200);color:var(--sl-color-primary-700)}.tag--success{background-color:var(--sl-color-success-100);border-color:var(--sl-color-success-200);color:var(--sl-color-success-700)}.tag--info{background-color:var(--sl-color-info-100);border-color:var(--sl-color-info-200);color:var(--sl-color-info-700)}.tag--warning{background-color:var(--sl-color-warning-100);border-color:var(--sl-color-warning-200);color:var(--sl-color-warning-700)}.tag--danger{background-color:var(--sl-color-danger-100);border-color:var(--sl-color-danger-200);color:var(--sl-color-danger-700)}.tag--small{font-size:var(--sl-button-font-size-small);height:calc(var(--sl-input-height-small) * 0.8);line-height:calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);border-radius:var(--sl-input-border-radius-small);padding:0 var(--sl-spacing-x-small)}.tag--small .tag__clear{margin-left:var(--sl-spacing-xx-small);margin-right:calc(-1 * var(--sl-spacing-xxx-small))}.tag--medium{font-size:var(--sl-button-font-size-medium);height:calc(var(--sl-input-height-medium) * 0.8);line-height:calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);border-radius:var(--sl-input-border-radius-medium);padding:0 var(--sl-spacing-small)}.tag--medium .tag__clear{margin-left:var(--sl-spacing-xx-small);margin-right:calc(-1 * var(--sl-spacing-xx-small))}.tag--large{font-size:var(--sl-button-font-size-large);height:calc(var(--sl-input-height-large) * 0.8);line-height:calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);border-radius:var(--sl-input-border-radius-large);padding:0 var(--sl-spacing-medium)}.tag--large .tag__clear{margin-left:var(--sl-spacing-xx-small);margin-right:calc(-1 * var(--sl-spacing-x-small))}.tag--pill{border-radius:var(--sl-border-radius-pill)}';
export { e as sl_menu, l as sl_tag };
