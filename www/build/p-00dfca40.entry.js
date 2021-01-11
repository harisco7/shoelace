import { r as e, h as i } from './p-32052503.js';
const t = class {
  constructor(i) {
    e(this, i), (this.hasError = !1), (this.image = ''), (this.alt = ''), (this.initials = ''), (this.shape = 'circle');
  }
  connectedCallback() {
    this.handleImageError = this.handleImageError.bind(this);
  }
  handleImageError() {
    this.hasError = !0;
  }
  render() {
    return i(
      'div',
      {
        part: 'base',
        class: {
          avatar: !0,
          'avatar--circle': 'circle' === this.shape,
          'avatar--rounded': 'rounded' === this.shape,
          'avatar--square': 'square' === this.shape
        },
        role: 'image',
        'aria-label': this.alt
      },
      !this.initials &&
        i(
          'div',
          { part: 'icon', class: 'avatar__icon' },
          i('slot', { name: 'icon' }, i('sl-icon', { name: 'person-fill' }))
        ),
      this.initials && i('div', { part: 'initials', class: 'avatar__initials' }, this.initials),
      this.image &&
        !this.hasError &&
        i('img', { part: 'image', class: 'avatar__image', src: this.image, onError: this.handleImageError })
    );
  }
};
t.style =
  ':host{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{display:inline-block;--size:3rem}.avatar{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;position:relative;width:var(--size);height:var(--size);background-color:var(--sl-color-gray-300);font-family:var(--sl-font-sans);font-size:calc(var(--size) * 0.5);font-weight:var(--sl-font-weight-normal);color:var(--sl-color-white);overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:middle}.avatar--circle{border-radius:var(--sl-border-radius-circle)}.avatar--rounded{border-radius:var(--sl-border-radius-medium)}.avatar--square{border-radius:0}.avatar__icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;position:absolute;top:0;left:0;width:100%;height:100%}.avatar__initials{line-height:1;text-transform:uppercase}.avatar__image{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}';
export { t as sl_avatar };
