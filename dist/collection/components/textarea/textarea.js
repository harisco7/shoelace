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
import ResizeObserver from 'resize-observer-polyfill';
var id = 0;
/**
 * @since 2.0
 * @status stable
 *
 * @slot label - The textarea's label. Alternatively, you can use the label prop.
 * @slot help-text - Help text that describes how to use the input.
 *
 * @part base - The component's base wrapper.
 * @part form-control - The form control that wraps the textarea and label.
 * @part label - The textarea label.
 * @part textarea - The textarea control.
 * @part help-text - The textarea help text.
 */
var Textarea = /** @class */ (function () {
  function Textarea() {
    this.textareaId = "textarea-" + ++id;
    this.labelId = "textarea-label-" + id;
    this.helpTextId = "textarea-help-text-" + id;
    this.hasFocus = false;
    this.hasLabel = false;
    /** The textarea's size. */
    this.size = 'medium';
    /** The textarea's name attribute. */
    this.name = '';
    /** The textarea's value attribute. */
    this.value = '';
    /** The textarea's label. */
    this.label = '';
    /** The number of rows to display by default. */
    this.rows = 4;
    /** Controls how the textarea can be resized. */
    this.resize = 'vertical';
    /** Set to true to disable the textarea. */
    this.disabled = false;
    /** Set to true for a readonly textarea. */
    this.readonly = false;
    /**
     * This will be true when the control is in an invalid state. Validity is determined by props such as `required`,
     * `minlength`, and `maxlength` using the browser's constraint validation API.
     */
    this.invalid = false;
  }
  Textarea.prototype.handleLabelChange = function () {
    this.detectLabel();
  };
  Textarea.prototype.handleRowsChange = function () {
    this.setTextareaHeight();
  };
  Textarea.prototype.handleValueChange = function () {
    this.invalid = !this.textarea.checkValidity();
  };
  Textarea.prototype.connectedCallback = function () {
    this.detectLabel = this.detectLabel.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  };
  Textarea.prototype.componentWillLoad = function () {
    this.detectLabel();
  };
  Textarea.prototype.componentDidLoad = function () {
    var _this = this;
    this.setTextareaHeight();
    this.resizeObserver = new ResizeObserver(function () { return _this.setTextareaHeight(); });
    this.resizeObserver.observe(this.textarea);
  };
  Textarea.prototype.disconnectedCallback = function () {
    this.resizeObserver.unobserve(this.textarea);
  };
  /** Sets focus on the textarea. */
  Textarea.prototype.setFocus = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        this.textarea.focus();
        return [2 /*return*/];
      });
    });
  };
  /** Removes focus fromt the textarea. */
  Textarea.prototype.removeFocus = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        this.textarea.blur();
        return [2 /*return*/];
      });
    });
  };
  /** Selects all the text in the input. */
  Textarea.prototype.select = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2 /*return*/, this.textarea.select()];
      });
    });
  };
  /** Sets the start and end positions of the text selection (0-based). */
  Textarea.prototype.setSelectionRange = function (selectionStart, selectionEnd, selectionDirection) {
    if (selectionDirection === void 0) { selectionDirection = 'none'; }
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2 /*return*/, this.textarea.setSelectionRange(selectionStart, selectionEnd, selectionDirection)];
      });
    });
  };
  /** Replaces a range of text with a new string. */
  Textarea.prototype.setRangeText = function (replacement, start, end, selectMode) {
    if (selectMode === void 0) { selectMode = 'preserve'; }
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        this.textarea.setRangeText(replacement, start, end, selectMode);
        if (this.value !== this.textarea.value) {
          this.value = this.textarea.value;
          this.setTextareaHeight();
          this.slChange.emit();
          this.slInput.emit();
        }
        return [2 /*return*/];
      });
    });
  };
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  Textarea.prototype.reportValidity = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2 /*return*/, this.textarea.reportValidity()];
      });
    });
  };
  /** Sets a custom validation message. If `message` is not empty, the field will be considered invalid. */
  Textarea.prototype.setCustomValidity = function (message) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        this.textarea.setCustomValidity(message);
        this.invalid = !this.textarea.checkValidity();
        return [2 /*return*/];
      });
    });
  };
  Textarea.prototype.detectLabel = function () {
    this.hasLabel = this.label.length > 0 || hasSlot(this.host, 'label');
  };
  Textarea.prototype.handleChange = function () {
    this.slChange.emit();
  };
  Textarea.prototype.handleInput = function () {
    this.value = this.textarea.value;
    this.setTextareaHeight();
    this.slInput.emit();
  };
  Textarea.prototype.handleBlur = function () {
    this.hasFocus = false;
    this.slBlur.emit();
  };
  Textarea.prototype.handleFocus = function () {
    this.hasFocus = true;
    this.slFocus.emit();
  };
  Textarea.prototype.setTextareaHeight = function () {
    if (this.resize === 'auto') {
      this.textarea.style.height = 'auto';
      this.textarea.style.height = this.textarea.scrollHeight + 'px';
    }
    else {
      this.textarea.style.height = undefined;
    }
  };
  Textarea.prototype.render = function () {
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
        }, htmlFor: this.textareaId },
        h("slot", { name: "label", onSlotchange: this.detectLabel }, this.label)),
      h("div", { part: "base", class: {
          textarea: true,
          // Sizes
          'textarea--small': this.size === 'small',
          'textarea--medium': this.size === 'medium',
          'textarea--large': this.size === 'large',
          // States
          'textarea--disabled': this.disabled,
          'textarea--focused': this.hasFocus,
          'textarea--empty': ((_a = this.value) === null || _a === void 0 ? void 0 : _a.length) === 0,
          'textarea--invalid': this.invalid,
          // Modifiers
          'textarea--resize-none': this.resize === 'none',
          'textarea--resize-vertical': this.resize === 'vertical',
          'textarea--resize-auto': this.resize === 'auto'
        } },
        h("textarea", { part: "textarea", ref: function (el) { return (_this.textarea = el); }, id: this.textareaId, class: "textarea__control", name: this.name, placeholder: this.placeholder, disabled: this.disabled, readOnly: this.readonly, rows: this.rows, minLength: this.minlength, maxLength: this.maxlength, value: this.value, autoCapitalize: this.autocapitalize, autoCorrect: this.autocorrect, autoFocus: this.autofocus, spellcheck: this.spellcheck, required: this.required, inputMode: this.inputmode, "aria-labelledby": this.labelId, onChange: this.handleChange, onInput: this.handleInput, onFocus: this.handleFocus, onBlur: this.handleBlur })),
      h("div", { part: "help-text", id: this.helpTextId, class: {
          'help-text': true,
          'help-text--small': this.size === 'small',
          'help-text--medium': this.size === 'medium',
          'help-text--large': this.size === 'large',
          'help-text--invalid': this.invalid
        } },
        h("slot", { name: "help-text" }))));
  };
  Object.defineProperty(Textarea, "is", {
    get: function () { return "sl-textarea"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Textarea, "encapsulation", {
    get: function () { return "shadow"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Textarea, "originalStyleUrls", {
    get: function () { return {
      "$": ["textarea.scss"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Textarea, "styleUrls", {
    get: function () { return {
      "$": ["textarea.css"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Textarea, "properties", {
    get: function () { return {
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
          "text": "The textarea's size."
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
          "text": "The textarea's name attribute."
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
          "text": "The textarea's value attribute."
        },
        "attribute": "value",
        "reflect": true,
        "defaultValue": "''"
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
          "text": "The textarea's label."
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
          "text": "The textarea's placeholder text."
        },
        "attribute": "placeholder",
        "reflect": false
      },
      "rows": {
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
          "text": "The number of rows to display by default."
        },
        "attribute": "rows",
        "reflect": false,
        "defaultValue": "4"
      },
      "resize": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'none' | 'vertical' | 'auto'",
          "resolved": "\"auto\" | \"none\" | \"vertical\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Controls how the textarea can be resized."
        },
        "attribute": "resize",
        "reflect": false,
        "defaultValue": "'vertical'"
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
          "text": "Set to true to disable the textarea."
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
          "text": "Set to true for a readonly textarea."
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
          "text": "The textarea's required attribute."
        },
        "attribute": "required",
        "reflect": true
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
          "text": "This will be true when the control is in an invalid state. Validity is determined by props such as `required`,\n`minlength`, and `maxlength` using the browser's constraint validation API."
        },
        "attribute": "invalid",
        "reflect": true,
        "defaultValue": "false"
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
          "text": "The textarea's autocaptialize attribute."
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
          "text": "The textarea's autocorrect attribute."
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
          "text": "The textarea's autocomplete attribute."
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
          "text": "The textarea's autofocus attribute."
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
          "text": "The textarea's spellcheck attribute."
        },
        "attribute": "spellcheck",
        "reflect": false
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
          "text": "The textarea's inputmode attribute."
        },
        "attribute": "inputmode",
        "reflect": false
      }
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Textarea, "states", {
    get: function () { return {
      "hasFocus": {},
      "hasLabel": {}
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Textarea, "events", {
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
  Object.defineProperty(Textarea, "methods", {
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
          "text": "Sets focus on the textarea.",
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
          "text": "Removes focus fromt the textarea.",
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
  Object.defineProperty(Textarea, "elementRef", {
    get: function () { return "host"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Textarea, "watchers", {
    get: function () { return [{
        "propName": "label",
        "methodName": "handleLabelChange"
      }, {
        "propName": "rows",
        "methodName": "handleRowsChange"
      }, {
        "propName": "value",
        "methodName": "handleValueChange"
      }]; },
    enumerable: false,
    configurable: true
  });
  return Textarea;
}());
export { Textarea };
