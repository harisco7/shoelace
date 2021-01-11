var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
    function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
    function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0: case 1: t = op; break;
        case 4: _.label++; return { value: op[1], done: false };
        case 5: _.label++; y = op[1]; op = [0]; continue;
        case 7: op = _.ops.pop(); _.trys.pop(); continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
          if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
          if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
          if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
          if (t[2]) _.ops.pop();
          _.trys.pop(); continue;
      }
      op = body.call(thisArg, _);
    } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
    if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
};
import { Component, Element, Event, Method, Prop, State, Watch, h } from '@stencil/core';
import { hasSlot } from '../../utilities/slot';
var id = 0;
/**
 * @since 2.0
 * @status stable
 *
 * @slot label - The input's label. Alternatively, you can use the label prop.
 * @slot prefix - Used to prepend an icon or similar element to the input.
 * @slot suffix - Used to append an icon or similar element to the input.
 * @slot clear-icon - An icon to use in lieu of the default clear icon.
 * @slot show-password-icon - An icon to use in lieu of the default show password icon.
 * @slot hide-password-icon - An icon to use in lieu of the default hide password icon.
 * @slot help-text - Help text that describes how to use the input.
 *
 * @part base - The component's base wrapper.
 * @part form-control - The form control that wraps the label and the input.
 * @part label - The input label.
 * @part input - The input control.
 * @part prefix - The input prefix container.
 * @part clear-button - The clear button.
 * @part password-toggle-button - The password toggle button.
 * @part suffix - The input suffix container.
 * @part help-text - The input help text.
 */
var Input = /** @class */ (function () {
  function Input() {
    this.inputId = "input-" + ++id;
    this.labelId = "input-label-" + id;
    this.helpTextId = "input-help-text-" + id;
    this.hasFocus = false;
    this.hasLabel = false;
    this.isPasswordVisible = false;
    /** The input's type. */
    this.type = 'text';
    /** The input's size. */
    this.size = 'medium';
    /** The input's name attribute. */
    this.name = '';
    /** The input's value attribute. */
    this.value = '';
    /** Set to true to draw a pill-style input with rounded edges. */
    this.pill = false;
    /** The input's label. */
    this.label = '';
    /** Set to true to disable the input. */
    this.disabled = false;
    /** Set to true to make the input readonly. */
    this.readonly = false;
    /**
     * This will be true when the control is in an invalid state. Validity is determined by props such as `type`,
     * `required`, `minlength`, `maxlength`, and `pattern` using the browser's constraint validation API.
     */
    this.invalid = false;
    /** Set to true to add a clear button when the input is populated. */
    this.clearable = false;
    /** Set to true to add a password toggle button for password inputs. */
    this.togglePassword = false;
  }
  Input.prototype.handleLabelChange = function () {
    this.detectLabel();
  };
  Input.prototype.handleValueChange = function () {
    this.invalid = !this.input.checkValidity();
  };
  Input.prototype.connectedCallback = function () {
    this.detectLabel = this.detectLabel.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleInvalid = this.handleInvalid.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleClearClick = this.handleClearClick.bind(this);
    this.handlePasswordToggle = this.handlePasswordToggle.bind(this);
  };
  Input.prototype.componentWillLoad = function () {
    this.detectLabel();
  };
  /** Sets focus on the input. */
  Input.prototype.setFocus = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        this.input.focus();
        return [2 /*return*/];
      });
    });
  };
  /** Removes focus from the input. */
  Input.prototype.removeFocus = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        this.input.blur();
        return [2 /*return*/];
      });
    });
  };
  /** Selects all the text in the input. */
  Input.prototype.select = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2 /*return*/, this.input.select()];
      });
    });
  };
  /** Sets the start and end positions of the text selection (0-based). */
  Input.prototype.setSelectionRange = function (selectionStart, selectionEnd, selectionDirection) {
    if (selectionDirection === void 0) { selectionDirection = 'none'; }
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2 /*return*/, this.input.setSelectionRange(selectionStart, selectionEnd, selectionDirection)];
      });
    });
  };
  /** Replaces a range of text with a new string. */
  Input.prototype.setRangeText = function (replacement, start, end, selectMode) {
    if (selectMode === void 0) { selectMode = 'preserve'; }
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        this.input.setRangeText(replacement, start, end, selectMode);
        if (this.value !== this.input.value) {
          this.value = this.input.value;
          this.slChange.emit();
          this.slInput.emit();
        }
        return [2 /*return*/];
      });
    });
  };
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  Input.prototype.reportValidity = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2 /*return*/, this.input.reportValidity()];
      });
    });
  };
  /** Sets a custom validation message. If `message` is not empty, the field will be considered invalid. */
  Input.prototype.setCustomValidity = function (message) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        this.input.setCustomValidity(message);
        this.invalid = !this.input.checkValidity();
        return [2 /*return*/];
      });
    });
  };
  Input.prototype.detectLabel = function () {
    this.hasLabel = this.label.length > 0 || hasSlot(this.host, 'label');
  };
  Input.prototype.handleChange = function () {
    this.value = this.input.value;
    this.slChange.emit();
  };
  Input.prototype.handleInput = function () {
    this.value = this.input.value;
    this.slInput.emit();
  };
  Input.prototype.handleInvalid = function () {
    this.invalid = true;
  };
  Input.prototype.handleBlur = function () {
    this.hasFocus = false;
    this.slBlur.emit();
  };
  Input.prototype.handleFocus = function () {
    this.hasFocus = true;
    this.slFocus.emit();
  };
  Input.prototype.handleClearClick = function (event) {
    this.value = '';
    this.slClear.emit();
    this.slInput.emit();
    this.slChange.emit();
    this.input.focus();
    event.stopPropagation();
  };
  Input.prototype.handlePasswordToggle = function () {
    this.isPasswordVisible = !this.isPasswordVisible;
  };
  Input.prototype.render = function () {
    var _this = this;
    var _a;
    return (h("div", { part: "form-control", class: {
        'form-control': true,
        'form-control--has-label': this.hasLabel,
        'form-control--invalid': this.invalid
      } },
      h("label", { part: "label", class: {
          label: true,
          'label--small': this.size === 'small',
          'label--medium': this.size === 'medium',
          'label--large': this.size === 'large',
          'label--invalid': this.invalid
        }, htmlFor: this.inputId },
        h("slot", { name: "label", onSlotchange: this.detectLabel }, this.label)),
      h("div", { part: "base", class: {
          input: true,
          // Sizes
          'input--small': this.size === 'small',
          'input--medium': this.size === 'medium',
          'input--large': this.size === 'large',
          // States
          'input--pill': this.pill,
          'input--disabled': this.disabled,
          'input--focused': this.hasFocus,
          'input--empty': ((_a = this.value) === null || _a === void 0 ? void 0 : _a.length) === 0,
          'input--invalid': this.invalid
        } },
        h("span", { part: "prefix", class: "input__prefix" },
          h("slot", { name: "prefix" })),
        h("input", { part: "input", ref: function (el) { return (_this.input = el); }, id: this.inputId, class: "input__control", type: this.type === 'password' && this.isPasswordVisible ? 'text' : this.type, name: this.name, placeholder: this.placeholder, disabled: this.disabled, readonly: this.readonly, minLength: this.minlength, maxLength: this.maxlength, min: this.min, max: this.max, step: this.step, value: this.value, autoCapitalize: this.autocapitalize, autoComplete: this.autocomplete, autoCorrect: this.autocorrect, autoFocus: this.autofocus, spellcheck: this.spellcheck, pattern: this.pattern, required: this.required, inputMode: this.inputmode, "aria-labelledby": this.labelId, "aria-describedby": this.helpTextId, "aria-invalid": this.invalid ? 'true' : 'false', onChange: this.handleChange, onInput: this.handleInput, onInvalid: this.handleInvalid, onFocus: this.handleFocus, onBlur: this.handleBlur }),
        this.clearable && (h("button", { part: "clear-button", class: "input__clear", type: "button", onClick: this.handleClearClick, tabindex: "-1" },
          h("slot", { name: "clear-icon" },
            h("sl-icon", { name: "x-circle" })))),
        this.togglePassword && (h("button", { part: "password-toggle-button", class: "input__password-toggle", type: "button", onClick: this.handlePasswordToggle, tabindex: "-1" }, this.isPasswordVisible ? (h("slot", { name: "show-password-icon" },
          h("sl-icon", { name: "eye-slash" }))) : (h("slot", { name: "hide-password-icon" },
          ' ',
          h("sl-icon", { name: "eye" }))))),
        h("span", { part: "suffix", class: "input__suffix" },
          h("slot", { name: "suffix" }))),
      h("div", { part: "help-text", id: this.helpTextId, class: {
          'help-text': true,
          'help-text--small': this.size === 'small',
          'help-text--medium': this.size === 'medium',
          'help-text--large': this.size === 'large',
          'help-text--invalid': this.invalid
        } },
        h("slot", { name: "help-text" }))));
  };
  Object.defineProperty(Input, "is", {
    get: function () { return "sl-input"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Input, "encapsulation", {
    get: function () { return "shadow"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Input, "originalStyleUrls", {
    get: function () { return {
      "$": ["input.scss"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Input, "styleUrls", {
    get: function () { return {
      "$": ["input.css"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Input, "properties", {
    get: function () { return {
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url'",
          "resolved": "\"email\" | \"number\" | \"password\" | \"search\" | \"tel\" | \"text\" | \"url\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The input's type."
        },
        "attribute": "type",
        "reflect": true,
        "defaultValue": "'text'"
      },
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'small' | 'medium' | 'large'",
          "resolved": "\"large\" | \"medium\" | \"small\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The input's size."
        },
        "attribute": "size",
        "reflect": true,
        "defaultValue": "'medium'"
      },
      "name": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The input's name attribute."
        },
        "attribute": "name",
        "reflect": true,
        "defaultValue": "''"
      },
      "value": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The input's value attribute."
        },
        "attribute": "value",
        "reflect": true,
        "defaultValue": "''"
      },
      "pill": {
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
          "text": "Set to true to draw a pill-style input with rounded edges."
        },
        "attribute": "pill",
        "reflect": true,
        "defaultValue": "false"
      },
      "label": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The input's label."
        },
        "attribute": "label",
        "reflect": false,
        "defaultValue": "''"
      },
      "placeholder": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The input's placeholder text."
        },
        "attribute": "placeholder",
        "reflect": false
      },
      "disabled": {
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
          "text": "Set to true to disable the input."
        },
        "attribute": "disabled",
        "reflect": true,
        "defaultValue": "false"
      },
      "readonly": {
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
          "text": "Set to true to make the input readonly."
        },
        "attribute": "readonly",
        "reflect": true,
        "defaultValue": "false"
      },
      "minlength": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The minimum length of input that will be considered valid."
        },
        "attribute": "minlength",
        "reflect": true
      },
      "maxlength": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The maximum length of input that will be considered valid."
        },
        "attribute": "maxlength",
        "reflect": true
      },
      "min": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The input's minimum value."
        },
        "attribute": "min",
        "reflect": true
      },
      "max": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The input's maximum value."
        },
        "attribute": "max",
        "reflect": true
      },
      "step": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The input's step attribute."
        },
        "attribute": "step",
        "reflect": true
      },
      "pattern": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "A pattern to validate input against."
        },
        "attribute": "pattern",
        "reflect": true
      },
      "required": {
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
          "text": "Set to true to make the input a required field."
        },
        "attribute": "required",
        "reflect": true
      },
      "autocapitalize": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The input's autocaptialize attribute."
        },
        "attribute": "autocapitalize",
        "reflect": false
      },
      "autocorrect": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The input's autocorrect attribute."
        },
        "attribute": "autocorrect",
        "reflect": false
      },
      "autocomplete": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The input's autocomplete attribute."
        },
        "attribute": "autocomplete",
        "reflect": false
      },
      "autofocus": {
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
          "text": "The input's autofocus attribute."
        },
        "attribute": "autofocus",
        "reflect": false
      },
      "spellcheck": {
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
          "text": "Enables spell checking on the input."
        },
        "attribute": "spellcheck",
        "reflect": false
      },
      "invalid": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "This will be true when the control is in an invalid state. Validity is determined by props such as `type`,\n`required`, `minlength`, `maxlength`, and `pattern` using the browser's constraint validation API."
        },
        "attribute": "invalid",
        "reflect": true,
        "defaultValue": "false"
      },
      "clearable": {
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
          "text": "Set to true to add a clear button when the input is populated."
        },
        "attribute": "clearable",
        "reflect": false,
        "defaultValue": "false"
      },
      "togglePassword": {
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
          "text": "Set to true to add a password toggle button for password inputs."
        },
        "attribute": "toggle-password",
        "reflect": false,
        "defaultValue": "false"
      },
      "inputmode": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url'",
          "resolved": "\"decimal\" | \"email\" | \"none\" | \"numeric\" | \"search\" | \"tel\" | \"text\" | \"url\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The input's inputmode attribute."
        },
        "attribute": "inputmode",
        "reflect": false
      }
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Input, "states", {
    get: function () { return {
      "hasFocus": {},
      "hasLabel": {},
      "isPasswordVisible": {}
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Input, "events", {
    get: function () { return [{
        "method": "slChange",
        "name": "sl-change",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the control's value changes."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "slClear",
        "name": "sl-clear",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the clear button is activated."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "slInput",
        "name": "sl-input",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the control receives input."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "slFocus",
        "name": "sl-focus",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the control gains focus."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "slBlur",
        "name": "sl-blur",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the control loses focus."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }]; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Input, "methods", {
    get: function () { return {
      "setFocus": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Sets focus on the input.",
          "tags": []
        }
      },
      "removeFocus": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Removes focus from the input.",
          "tags": []
        }
      },
      "select": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Selects all the text in the input.",
          "tags": []
        }
      },
      "setSelectionRange": {
        "complexType": {
          "signature": "(selectionStart: number, selectionEnd: number, selectionDirection?: 'forward' | 'backward' | 'none') => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }, {
              "tags": [],
              "text": ""
            }, {
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Sets the start and end positions of the text selection (0-based).",
          "tags": []
        }
      },
      "setRangeText": {
        "complexType": {
          "signature": "(replacement: string, start: number, end: number, selectMode?: 'select' | 'start' | 'end' | 'preserve') => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }, {
              "tags": [],
              "text": ""
            }, {
              "tags": [],
              "text": ""
            }, {
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Replaces a range of text with a new string.",
          "tags": []
        }
      },
      "reportValidity": {
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
          "text": "Checks for validity and shows the browser's validation message if the control is invalid.",
          "tags": []
        }
      },
      "setCustomValidity": {
        "complexType": {
          "signature": "(message: string) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Sets a custom validation message. If `message` is not empty, the field will be considered invalid.",
          "tags": []
        }
      }
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Input, "elementRef", {
    get: function () { return "host"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Input, "watchers", {
    get: function () { return [{
        "propName": "label",
        "methodName": "handleLabelChange"
      }, {
        "propName": "value",
        "methodName": "handleValueChange"
      }]; },
    enumerable: false,
    configurable: true
  });
  return Input;
}());
export { Input };
