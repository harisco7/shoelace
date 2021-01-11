var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
    function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
    function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
import { Component, Event, Method, Prop, h } from '@stencil/core';
/**
 * @since 2.0
 * @status stable
 *
 * @slot - The form's content.
 *
 * @part base - The component's base wrapper.
 */
export class Form {
  constructor() {
    /** Prevent the form from validating inputs before submitting. */
    this.novalidate = false;
  }
  connectedCallback() {
    this.formControls = [
      {
        tag: 'button',
        serialize: (el, formData) => el.name && !el.disabled ? formData.append(el.name, el.value) : null,
        click: event => {
          const target = event.target;
          if (target.type === 'submit') {
            this.submit();
          }
        }
      },
      {
        tag: 'input',
        serialize: (el, formData) => {
          if (!el.name || el.disabled) {
            return;
          }
          if ((el.type === 'checkbox' || el.type === 'radio') && !el.checked) {
            return;
          }
          if (el.type === 'file') {
            [...el.files].map(file => formData.append(el.name, file));
            return;
          }
          formData.append(el.name, el.value);
        },
        click: event => {
          const target = event.target;
          if (target.type === 'submit') {
            this.submit();
          }
        },
        keyDown: event => {
          const target = event.target;
          if (event.key === 'Enter' &&
            !event.defaultPrevented &&
            !['checkbox', 'file', 'radio'].includes(target.type)) {
            this.submit();
          }
        }
      },
      {
        tag: 'select',
        serialize: (el, formData) => {
          if (el.name && !el.disabled) {
            if (el.multiple) {
              const selectedOptions = [...el.querySelectorAll('option:checked')];
              if (selectedOptions.length) {
                selectedOptions.map((option) => formData.append(el.name, option.value));
              }
              else {
                formData.append(el.name, '');
              }
            }
            else {
              formData.append(el.name, el.value);
            }
          }
        }
      },
      {
        tag: 'sl-button',
        serialize: (el, formData) => el.name && !el.disabled ? formData.append(el.name, el.value) : null,
        click: event => {
          const target = event.target;
          if (target.submit) {
            this.submit();
          }
        }
      },
      {
        tag: 'sl-checkbox',
        serialize: (el, formData) => el.name && el.checked && !el.disabled ? formData.append(el.name, el.value) : null
      },
      {
        tag: 'sl-color-picker',
        serialize: (el, formData) => el.name && !el.disabled ? formData.append(el.name, el.value) : null
      },
      {
        tag: 'sl-input',
        serialize: (el, formData) => el.name && !el.disabled ? formData.append(el.name, el.value) : null,
        keyDown: event => {
          if (event.key === 'Enter' && !event.defaultPrevented) {
            this.submit();
          }
        }
      },
      {
        tag: 'sl-radio',
        serialize: (el, formData) => el.name && el.checked && !el.disabled ? formData.append(el.name, el.value) : null
      },
      {
        tag: 'sl-range',
        serialize: (el, formData) => {
          if (el.name && !el.disabled) {
            formData.append(el.name, el.value + '');
          }
        }
      },
      {
        tag: 'sl-select',
        serialize: (el, formData) => {
          if (el.name && !el.disabled) {
            if (el.multiple) {
              const selectedOptions = [...el.value];
              if (selectedOptions.length) {
                selectedOptions.map(value => formData.append(el.name, value));
              }
              else {
                formData.append(el.name, '');
              }
            }
            else {
              formData.append(el.name, el.value + '');
            }
          }
        }
      },
      {
        tag: 'sl-switch',
        serialize: (el, formData) => el.name && el.checked && !el.disabled ? formData.append(el.name, el.value) : null
      },
      {
        tag: 'sl-textarea',
        serialize: (el, formData) => el.name && !el.disabled ? formData.append(el.name, el.value) : null
      },
      {
        tag: 'textarea',
        serialize: (el, formData) => el.name && !el.disabled ? formData.append(el.name, el.value) : null
      }
    ];
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  /** Serializes all form controls elements and returns a `FormData` object. */
  getFormData() {
    return __awaiter(this, void 0, void 0, function* () {
      const formData = new FormData();
      const formControls = yield this.getFormControls();
      formControls.map(el => this.serializeElement(el, formData));
      return formData;
    });
  }
  /** Gets all form control elements (native and custom). */
  getFormControls() {
    return __awaiter(this, void 0, void 0, function* () {
      const slot = this.form.querySelector('slot');
      const tags = this.formControls.map(control => control.tag);
      return slot
        .assignedElements({ flatten: true })
        .reduce((all, el) => all.concat(el, [...el.querySelectorAll('*')]), [])
        .filter(el => tags.includes(el.tagName.toLowerCase()));
    });
  }
  /**
   * Submits the form. If all controls are valid, the `sl-submit` event will be emitted and the promise will resolve
   * with `true`. If any form control is invalid, the promise will resolve with `false` and no event will be emitted.
   */
  submit() {
    return __awaiter(this, void 0, void 0, function* () {
      const formData = yield this.getFormData();
      const formControls = yield this.getFormControls();
      const formControlsThatReport = formControls.filter((el) => typeof el.reportValidity === 'function');
      if (!this.novalidate) {
        for (const el of formControlsThatReport) {
          const isValid = yield el.reportValidity();
          if (!isValid) {
            return false;
          }
        }
      }
      this.slSubmit.emit({ formData, formControls });
      return true;
    });
  }
  handleClick(event) {
    const target = event.target;
    const tag = target.tagName.toLowerCase();
    for (const formControl of this.formControls) {
      if (formControl.tag === tag && formControl.click) {
        formControl.click(event);
      }
    }
  }
  handleKeyDown(event) {
    const target = event.target;
    const tag = target.tagName.toLowerCase();
    for (const formControl of this.formControls) {
      if (formControl.tag === tag && formControl.keyDown) {
        formControl.keyDown(event);
      }
    }
  }
  serializeElement(el, formData) {
    const tag = el.tagName.toLowerCase();
    for (const formControl of this.formControls) {
      if (formControl.tag === tag) {
        return formControl.serialize(el, formData);
      }
    }
    return null;
  }
  render() {
    return (h("div", { ref: el => (this.form = el), part: "base", class: "form", role: "form", onClick: this.handleClick, onKeyDown: this.handleKeyDown },
      h("slot", null)));
  }
  static get is() { return "sl-form"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["form.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["form.css"]
  }; }
  static get properties() { return {
    "novalidate": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Prevent the form from validating inputs before submitting."
      },
      "attribute": "novalidate",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get events() { return [{
      "method": "slSubmit",
      "name": "sl-submit",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted when the form is submitted. This event will not be emitted if any form control inside of it is in an\ninvalid state, unless the form has the `novalidate` attribute. Note that there is never a need to prevent this\nevent, since it doen't send a GET or POST request like native forms. To \"prevent\" submission, use a conditional\naround the XHR request you use to submit the form's data with."
      },
      "complexType": {
        "original": "{ formData: FormData; formControls: HTMLElement[] }",
        "resolved": "{ formData: FormData; formControls: HTMLElement[]; }",
        "references": {
          "FormData": {
            "location": "global"
          },
          "HTMLElement": {
            "location": "global"
          }
        }
      }
    }]; }
  static get methods() { return {
    "getFormData": {
      "complexType": {
        "signature": "() => Promise<FormData>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          },
          "FormData": {
            "location": "global"
          }
        },
        "return": "Promise<FormData>"
      },
      "docs": {
        "text": "Serializes all form controls elements and returns a `FormData` object.",
        "tags": []
      }
    },
    "getFormControls": {
      "complexType": {
        "signature": "() => Promise<HTMLElement[]>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          },
          "HTMLElement": {
            "location": "global"
          }
        },
        "return": "Promise<HTMLElement[]>"
      },
      "docs": {
        "text": "Gets all form control elements (native and custom).",
        "tags": []
      }
    },
    "submit": {
      "complexType": {
        "signature": "() => Promise<boolean>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<boolean>"
      },
      "docs": {
        "text": "Submits the form. If all controls are valid, the `sl-submit` event will be emitted and the promise will resolve\nwith `true`. If any form control is invalid, the promise will resolve with `false` and no event will be emitted.",
        "tags": []
      }
    }
  }; }
}
