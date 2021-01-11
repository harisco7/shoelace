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
var __spreadArrays = (this && this.__spreadArrays) || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
      r[k] = a[j];
  return r;
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
var Form = /** @class */ (function () {
  function Form() {
    /** Prevent the form from validating inputs before submitting. */
    this.novalidate = false;
  }
  Form.prototype.connectedCallback = function () {
    var _this = this;
    this.formControls = [
      {
        tag: 'button',
        serialize: function (el, formData) {
          return el.name && !el.disabled ? formData.append(el.name, el.value) : null;
        },
        click: function (event) {
          var target = event.target;
          if (target.type === 'submit') {
            _this.submit();
          }
        }
      },
      {
        tag: 'input',
        serialize: function (el, formData) {
          if (!el.name || el.disabled) {
            return;
          }
          if ((el.type === 'checkbox' || el.type === 'radio') && !el.checked) {
            return;
          }
          if (el.type === 'file') {
            __spreadArrays(el.files).map(function (file) { return formData.append(el.name, file); });
            return;
          }
          formData.append(el.name, el.value);
        },
        click: function (event) {
          var target = event.target;
          if (target.type === 'submit') {
            _this.submit();
          }
        },
        keyDown: function (event) {
          var target = event.target;
          if (event.key === 'Enter' &&
            !event.defaultPrevented &&
            !['checkbox', 'file', 'radio'].includes(target.type)) {
            _this.submit();
          }
        }
      },
      {
        tag: 'select',
        serialize: function (el, formData) {
          if (el.name && !el.disabled) {
            if (el.multiple) {
              var selectedOptions = __spreadArrays(el.querySelectorAll('option:checked'));
              if (selectedOptions.length) {
                selectedOptions.map(function (option) { return formData.append(el.name, option.value); });
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
        serialize: function (el, formData) {
          return el.name && !el.disabled ? formData.append(el.name, el.value) : null;
        },
        click: function (event) {
          var target = event.target;
          if (target.submit) {
            _this.submit();
          }
        }
      },
      {
        tag: 'sl-checkbox',
        serialize: function (el, formData) {
          return el.name && el.checked && !el.disabled ? formData.append(el.name, el.value) : null;
        }
      },
      {
        tag: 'sl-color-picker',
        serialize: function (el, formData) {
          return el.name && !el.disabled ? formData.append(el.name, el.value) : null;
        }
      },
      {
        tag: 'sl-input',
        serialize: function (el, formData) {
          return el.name && !el.disabled ? formData.append(el.name, el.value) : null;
        },
        keyDown: function (event) {
          if (event.key === 'Enter' && !event.defaultPrevented) {
            _this.submit();
          }
        }
      },
      {
        tag: 'sl-radio',
        serialize: function (el, formData) {
          return el.name && el.checked && !el.disabled ? formData.append(el.name, el.value) : null;
        }
      },
      {
        tag: 'sl-range',
        serialize: function (el, formData) {
          if (el.name && !el.disabled) {
            formData.append(el.name, el.value + '');
          }
        }
      },
      {
        tag: 'sl-select',
        serialize: function (el, formData) {
          if (el.name && !el.disabled) {
            if (el.multiple) {
              var selectedOptions = __spreadArrays(el.value);
              if (selectedOptions.length) {
                selectedOptions.map(function (value) { return formData.append(el.name, value); });
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
        serialize: function (el, formData) {
          return el.name && el.checked && !el.disabled ? formData.append(el.name, el.value) : null;
        }
      },
      {
        tag: 'sl-textarea',
        serialize: function (el, formData) {
          return el.name && !el.disabled ? formData.append(el.name, el.value) : null;
        }
      },
      {
        tag: 'textarea',
        serialize: function (el, formData) {
          return el.name && !el.disabled ? formData.append(el.name, el.value) : null;
        }
      }
    ];
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  };
  /** Serializes all form controls elements and returns a `FormData` object. */
  Form.prototype.getFormData = function () {
    return __awaiter(this, void 0, void 0, function () {
      var formData, formControls;
      var _this = this;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            formData = new FormData();
            return [4 /*yield*/, this.getFormControls()];
          case 1:
            formControls = _a.sent();
            formControls.map(function (el) { return _this.serializeElement(el, formData); });
            return [2 /*return*/, formData];
        }
      });
    });
  };
  /** Gets all form control elements (native and custom). */
  Form.prototype.getFormControls = function () {
    return __awaiter(this, void 0, void 0, function () {
      var slot, tags;
      return __generator(this, function (_a) {
        slot = this.form.querySelector('slot');
        tags = this.formControls.map(function (control) { return control.tag; });
        return [2 /*return*/, slot
            .assignedElements({ flatten: true })
            .reduce(function (all, el) { return all.concat(el, __spreadArrays(el.querySelectorAll('*'))); }, [])
            .filter(function (el) { return tags.includes(el.tagName.toLowerCase()); })];
      });
    });
  };
  /**
   * Submits the form. If all controls are valid, the `sl-submit` event will be emitted and the promise will resolve
   * with `true`. If any form control is invalid, the promise will resolve with `false` and no event will be emitted.
   */
  Form.prototype.submit = function () {
    return __awaiter(this, void 0, void 0, function () {
      var formData, formControls, formControlsThatReport, _i, formControlsThatReport_1, el, isValid;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0: return [4 /*yield*/, this.getFormData()];
          case 1:
            formData = _a.sent();
            return [4 /*yield*/, this.getFormControls()];
          case 2:
            formControls = _a.sent();
            formControlsThatReport = formControls.filter(function (el) { return typeof el.reportValidity === 'function'; });
            if (!!this.novalidate) return [3 /*break*/, 6];
            _i = 0, formControlsThatReport_1 = formControlsThatReport;
            _a.label = 3;
          case 3:
            if (!(_i < formControlsThatReport_1.length)) return [3 /*break*/, 6];
            el = formControlsThatReport_1[_i];
            return [4 /*yield*/, el.reportValidity()];
          case 4:
            isValid = _a.sent();
            if (!isValid) {
              return [2 /*return*/, false];
            }
            _a.label = 5;
          case 5:
            _i++;
            return [3 /*break*/, 3];
          case 6:
            this.slSubmit.emit({ formData: formData, formControls: formControls });
            return [2 /*return*/, true];
        }
      });
    });
  };
  Form.prototype.handleClick = function (event) {
    var target = event.target;
    var tag = target.tagName.toLowerCase();
    for (var _i = 0, _a = this.formControls; _i < _a.length; _i++) {
      var formControl = _a[_i];
      if (formControl.tag === tag && formControl.click) {
        formControl.click(event);
      }
    }
  };
  Form.prototype.handleKeyDown = function (event) {
    var target = event.target;
    var tag = target.tagName.toLowerCase();
    for (var _i = 0, _a = this.formControls; _i < _a.length; _i++) {
      var formControl = _a[_i];
      if (formControl.tag === tag && formControl.keyDown) {
        formControl.keyDown(event);
      }
    }
  };
  Form.prototype.serializeElement = function (el, formData) {
    var tag = el.tagName.toLowerCase();
    for (var _i = 0, _a = this.formControls; _i < _a.length; _i++) {
      var formControl = _a[_i];
      if (formControl.tag === tag) {
        return formControl.serialize(el, formData);
      }
    }
    return null;
  };
  Form.prototype.render = function () {
    var _this = this;
    return (h("div", { ref: function (el) { return (_this.form = el); }, part: "base", class: "form", role: "form", onClick: this.handleClick, onKeyDown: this.handleKeyDown },
      h("slot", null)));
  };
  Object.defineProperty(Form, "is", {
    get: function () { return "sl-form"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Form, "encapsulation", {
    get: function () { return "shadow"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Form, "originalStyleUrls", {
    get: function () { return {
      "$": ["form.scss"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Form, "styleUrls", {
    get: function () { return {
      "$": ["form.css"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Form, "properties", {
    get: function () { return {
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
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Form, "events", {
    get: function () { return [{
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
      }]; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Form, "methods", {
    get: function () { return {
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
    }; },
    enumerable: false,
    configurable: true
  });
  return Form;
}());
export { Form };
