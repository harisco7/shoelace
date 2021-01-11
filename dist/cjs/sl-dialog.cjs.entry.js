'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-01349945.js');
const slot = require('./slot-fecf18e9.js');
const scroll = require('./scroll-067aab27.js');
const modal = require('./modal-9eb92b1d.js');

const dialogCss = ":host{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{--width:31rem;display:contents}.dialog{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;position:fixed;top:0;right:0;bottom:0;left:0;z-index:var(--sl-z-index-dialog)}.dialog:not(.dialog--visible){position:absolute;width:1px;height:1px;clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);overflow:hidden;pointer-events:none;visibility:hidden}.dialog__panel{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;z-index:2;width:var(--width);max-width:calc(100% - var(--sl-spacing-xx-large));max-height:calc(100% - var(--sl-spacing-xx-large));background-color:var(--sl-panel-background-color);border-radius:var(--sl-border-radius-medium);-webkit-box-shadow:var(--sl-shadow-x-large);box-shadow:var(--sl-shadow-x-large);opacity:0;-webkit-transform:scale(0.8);transform:scale(0.8);-webkit-transition:var(--sl-transition-medium) opacity, var(--sl-transition-medium) transform;transition:var(--sl-transition-medium) opacity, var(--sl-transition-medium) transform}.dialog__panel:focus{outline:none}@media screen and (max-width: 420px){.dialog__panel{max-height:80vh}}.dialog--open .dialog__panel{display:-ms-flexbox;display:flex;opacity:1;-webkit-transform:none;transform:none}.dialog__header{-ms-flex:0 0 auto;flex:0 0 auto;display:-ms-flexbox;display:flex}.dialog__title{-ms-flex:1 1 auto;flex:1 1 auto;font-size:var(--sl-font-size-large);line-height:var(--sl-line-height-dense);padding:var(--sl-spacing-large)}.dialog__close{-ms-flex:0 0 auto;flex:0 0 auto;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;font-size:var(--sl-font-size-x-large);padding:0 var(--sl-spacing-large)}.dialog__body{-ms-flex:1 1 auto;flex:1 1 auto;padding:var(--sl-spacing-large);overflow:auto;-webkit-overflow-scrolling:touch}.dialog__footer{-ms-flex:0 0 auto;flex:0 0 auto;text-align:right;padding:var(--sl-spacing-large)}.dialog__footer ::slotted(sl-button:not(:first-of-type)){margin-left:var(--sl-spacing-x-small)}.dialog:not(.dialog--has-footer) .dialog__footer{display:none}.dialog__overlay{position:fixed;top:0;right:0;bottom:0;left:0;background-color:var(--sl-overlay-background-color);opacity:0;-webkit-transition:var(--sl-transition-medium) opacity;transition:var(--sl-transition-medium) opacity}.dialog--open .dialog__overlay{opacity:1}";

const hasPreventScroll = modal.isPreventScrollSupported();
let id = 0;
const Dialog = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.slShow = index.createEvent(this, "sl-show", 7);
    this.slAfterShow = index.createEvent(this, "sl-after-show", 7);
    this.slHide = index.createEvent(this, "sl-hide", 7);
    this.slAfterHide = index.createEvent(this, "sl-after-hide", 7);
    this.slInitialFocus = index.createEvent(this, "sl-initial-focus", 7);
    this.slOverlayDismiss = index.createEvent(this, "sl-overlay-dismiss", 7);
    this.componentId = `dialog-${++id}`;
    this.willShow = false;
    this.willHide = false;
    this.hasFooter = false;
    this.isVisible = false;
    /** Indicates whether or not the dialog is open. You can use this in lieu of the show/hide methods. */
    this.open = false;
    /**
     * The dialog's label as displayed in the header. You should always include a relevant label even when using
     * `no-header`, as it is required for proper accessibility.
     */
    this.label = '';
    /**
     * Set to true to disable the header. This will also remove the default close button, so please ensure you provide an
     * easy, accessible way for users to dismiss the dialog.
     */
    this.noHeader = false;
  }
  handleOpenChange() {
    this.open ? this.show() : this.hide();
  }
  connectedCallback() {
    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.handleTransitionEnd = this.handleTransitionEnd.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleOverlayClick = this.handleOverlayClick.bind(this);
    this.handleSlotChange = this.handleSlotChange.bind(this);
    this.modal = new modal.Modal(this.host, {
      onFocusOut: () => this.panel.focus()
    });
  }
  componentWillLoad() {
    this.handleSlotChange();
    // Show on init if open
    if (this.open) {
      this.show();
    }
  }
  disconnectedCallback() {
    scroll.unlockBodyScrolling(this.host);
  }
  /** Shows the dialog */
  async show() {
    if (this.willShow) {
      return;
    }
    const slShow = this.slShow.emit();
    if (slShow.defaultPrevented) {
      this.open = false;
      return;
    }
    this.willShow = true;
    this.isVisible = true;
    this.open = true;
    this.modal.activate();
    scroll.lockBodyScrolling(this.host);
    if (this.open) {
      if (hasPreventScroll) {
        // Wait for the next frame before setting initial focus so the dialog is technically visible
        requestAnimationFrame(() => {
          const slInitialFocus = this.slInitialFocus.emit();
          if (!slInitialFocus.defaultPrevented) {
            this.panel.focus({ preventScroll: true });
          }
        });
      }
      else {
        // Once Safari supports { preventScroll: true } we can remove this nasty little hack, but until then we need to
        // wait for the transition to complete before setting focus, otherwise the panel may render in a buggy way its
        // out of view initially.
        //
        // Fiddle: https://jsfiddle.net/g6buoafq/1/
        // Safari: https://bugs.webkit.org/show_bug.cgi?id=178583
        //
        setTimeout(() => {
          const slInitialFocus = this.slInitialFocus.emit();
          if (!slInitialFocus.defaultPrevented) {
            this.panel.focus();
          }
        }, 250);
      }
    }
  }
  /** Hides the dialog */
  async hide() {
    if (this.willHide) {
      return;
    }
    const slHide = this.slHide.emit();
    if (slHide.defaultPrevented) {
      this.open = true;
      return;
    }
    this.willHide = true;
    this.open = false;
    this.modal.deactivate();
    scroll.unlockBodyScrolling(this.host);
  }
  handleCloseClick() {
    this.hide();
  }
  handleKeyDown(event) {
    if (event.key === 'Escape') {
      this.hide();
    }
  }
  handleOverlayClick() {
    const slOverlayDismiss = this.slOverlayDismiss.emit();
    if (!slOverlayDismiss.defaultPrevented) {
      this.hide();
    }
  }
  handleSlotChange() {
    this.hasFooter = slot.hasSlot(this.host, 'footer');
  }
  handleTransitionEnd(event) {
    const target = event.target;
    // Ensure we only emit one event when the target element is no longer visible
    if (event.propertyName === 'opacity' && target.classList.contains('dialog__panel')) {
      this.isVisible = this.open;
      this.willShow = false;
      this.willHide = false;
      this.open ? this.slAfterShow.emit() : this.slAfterHide.emit();
    }
  }
  render() {
    return (index.h("div", { ref: el => (this.dialog = el), part: "base", class: {
        dialog: true,
        'dialog--open': this.open,
        'dialog--visible': this.isVisible,
        'dialog--has-footer': this.hasFooter
      }, onKeyDown: this.handleKeyDown, onTransitionEnd: this.handleTransitionEnd }, index.h("div", { part: "overlay", class: "dialog__overlay", onClick: this.handleOverlayClick }), index.h("div", { ref: el => (this.panel = el), part: "panel", class: "dialog__panel", role: "dialog", "aria-modal": "true", "aria-hidden": this.open ? 'false' : 'true', "aria-label": this.noHeader ? this.label : null, "aria-labelledby": !this.noHeader ? `${this.componentId}-title` : null, tabIndex: 0 }, !this.noHeader && (index.h("header", { part: "header", class: "dialog__header" }, index.h("span", { part: "title", class: "dialog__title", id: `${this.componentId}-title` }, index.h("slot", { name: "label" }, this.label || String.fromCharCode(65279))), index.h("sl-icon-button", { exportparts: "base:close-button", class: "dialog__close", name: "x", onClick: this.handleCloseClick }))), index.h("div", { part: "body", class: "dialog__body" }, index.h("slot", null)), index.h("footer", { part: "footer", class: "dialog__footer" }, index.h("slot", { name: "footer", onSlotchange: this.handleSlotChange })))));
  }
  get host() { return index.getElement(this); }
  static get watchers() { return {
    "open": ["handleOpenChange"]
  }; }
};
Dialog.style = dialogCss;

exports.sl_dialog = Dialog;
