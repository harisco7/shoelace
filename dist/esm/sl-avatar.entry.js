import { r as registerInstance, h } from './index-a0f9580d.js';

const avatarCss = ":host{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{display:inline-block;--size:3rem}.avatar{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;position:relative;width:var(--size);height:var(--size);background-color:var(--sl-color-gray-300);font-family:var(--sl-font-sans);font-size:calc(var(--size) * 0.5);font-weight:var(--sl-font-weight-normal);color:var(--sl-color-white);overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:middle}.avatar--circle{border-radius:var(--sl-border-radius-circle)}.avatar--rounded{border-radius:var(--sl-border-radius-medium)}.avatar--square{border-radius:0}.avatar__icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;position:absolute;top:0;left:0;width:100%;height:100%}.avatar__initials{line-height:1;text-transform:uppercase}.avatar__image{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}";

const Avatar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.hasError = false;
    /** The image source to use for the avatar. */
    this.image = '';
    /** Alternative text for the image. */
    this.alt = '';
    /** Initials to use as a fallback when no image is available (1-2 characters max recommended). */
    this.initials = '';
    /** The shape of the avatar. */
    this.shape = 'circle';
  }
  connectedCallback() {
    this.handleImageError = this.handleImageError.bind(this);
  }
  handleImageError() {
    this.hasError = true;
  }
  render() {
    return (h("div", { part: "base", class: {
        avatar: true,
        'avatar--circle': this.shape === 'circle',
        'avatar--rounded': this.shape === 'rounded',
        'avatar--square': this.shape === 'square'
      }, role: "image", "aria-label": this.alt }, !this.initials && (h("div", { part: "icon", class: "avatar__icon" }, h("slot", { name: "icon" }, h("sl-icon", { name: "person-fill" })))), this.initials && (h("div", { part: "initials", class: "avatar__initials" }, this.initials)), this.image && !this.hasError && (h("img", { part: "image", class: "avatar__image", src: this.image, onError: this.handleImageError }))));
  }
};
Avatar.style = avatarCss;

export { Avatar as sl_avatar };
