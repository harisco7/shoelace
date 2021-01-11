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
import { Component, Event, Method, Prop, State, Watch, h } from '@stencil/core';
var id = 0;
/**
 * @since 2.0
 * @status stable
 *
 * @slot - The checkbox's label.
 *
 * @part base - The component's base wrapper.
 * @part control - The checkbox control.
 * @part checked-icon - The container the wraps the checked icon.
 * @part indeterminate-icon - The container that wraps the indeterminate icon.
 * @part label - The checkbox label.
 */
var Checkbox = /** @class */ (function () {
  function Checkbox() {
    this.inputId = "checkbox-" + ++id;
    this.labelId = "checkbox-label-" + id;
    this.hasFocus = false;
    /** Set to true to disable the checkbox. */
    this.disabled = false;
    /** Set to true to make the checkbox a required field. */
    this.required = false;
    /** Set to true to draw the checkbox in a checked state. */
    this.checked = false;
    /** Set to true to draw the checkbox in an indeterminate state. */
    this.indeterminate = false;
    /** This will be true when the control is in an invalid state. Validity is determined by the `required` prop. */
    this.invalid = false;
  }
  Checkbox.prototype.handleCheckedChange = function () {
    this.input.checked = this.checked;
    this.input.indeterminate = this.indeterminate;
    this.slChange.emit();
  };
  Checkbox.prototype.connectedCallback = function () {
    this.handleClick = this.handleClick.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
  };
  Checkbox.prototype.componentDidLoad = function () {
    this.input.indeterminate = this.indeterminate;
  };
  /** Sets focus on the checkbox. */
  Checkbox.prototype.setFocus = function (options) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        this.input.focus(options);
        return [2 /*return*/];
      });
    });
  };
  /** Removes focus from the checkbox. */
  Checkbox.prototype.removeFocus = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        this.input.blur();
        return [2 /*return*/];
      });
    });
  };
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  Checkbox.prototype.reportValidity = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2 /*return*/, this.input.reportValidity()];
      });
    });
  };
  /** Sets a custom validation message. If `message` is not empty, the field will be considered invalid. */
  Checkbox.prototype.setCustomValidity = function (message) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        this.input.setCustomValidity(message);
        this.invalid = !this.input.checkValidity();
        return [2 /*return*/];
      });
    });
  };
  Checkbox.prototype.handleClick = function () {
    this.checked = this.input.checked;
    this.indeterminate = false;
  };
  Checkbox.prototype.handleBlur = function () {
    this.hasFocus = false;
    this.slBlur.emit();
  };
  Checkbox.prototype.handleFocus = function () {
    this.hasFocus = true;
    this.slFocus.emit();
  };
  Checkbox.prototype.handleMouseDown = function (event) {
    // Prevent clicks on the label from briefly blurring the input
    event.preventDefault();
    this.input.focus();
  };
  Checkbox.prototype.render = function () {
    var _this = this;
    return (h("label", { part: "base", class: {
        checkbox: true,
        'checkbox--checked': this.checked,
        'checkbox--disabled': this.disabled,
        'checkbox--focused': this.hasFocus,
        'checkbox--indeterminate': this.indeterminate
      }, htmlFor: this.inputId, onMouseDown: this.handleMouseDown },
      h("span", { part: "control", class: "checkbox__control" },
        this.checked && (h("span", { part: "checked-icon", class: "checkbox__icon" },
          h("svg", { viewBox: "0 0 16 16" },
            h("g", { stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd", "stroke-linecap": "round" },
              h("g", { stroke: "currentColor", "stroke-width": "2" },
                h("g", { transform: "translate(3.428571, 3.428571)" },
                  h("path", { d: "M0,5.71428571 L3.42857143,9.14285714" }),
                  h("path", { d: "M9.14285714,0 L3.42857143,9.14285714" }))))))),
        !this.checked && this.indeterminate && (h("span", { part: "indeterminate-icon", class: "checkbox__icon" },
          h("svg", { viewBox: "0 0 16 16" },
            h("g", { stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd", "stroke-linecap": "round" },
              h("g", { stroke: "currentColor", "stroke-width": "2" },
                h("g", { transform: "translate(2.285714, 6.857143)" },
                  h("path", { d: "M10.2857143,1.14285714 L1.14285714,1.14285714" }))))))),
        h("input", { ref: function (el) { return (_this.input = el); }, id: this.inputId, type: "checkbox", name: this.name, value: this.value, checked: this.checked, disabled: this.disabled, required: this.required, role: "checkbox", "aria-checked": this.checked ? 'true' : 'false', "aria-labelledby": this.labelId, onClick: this.handleClick, onBlur: this.handleBlur, onFocus: this.handleFocus })),
      h("span", { part: "label", id: this.labelId, class: "checkbox__label" },
        h("slot", null))));
  };
  Object.defineProperty(Checkbox, "is", {
    get: function () { return "sl-checkbox"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Checkbox, "encapsulation", {
    get: function () { return "shadow"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Checkbox, "originalStyleUrls", {
    get: function () { return {
      "$": ["checkbox.scss"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Checkbox, "styleUrls", {
    get: function () { return {
      "$": ["checkbox.css"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Checkbox, "properties", {
    get: function () { return {
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
          "text": "The checkbox's name attribute."
        },
        "attribute": "name",
        "reflect": false
      },
      "value": {
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
          "text": "The checkbox's value attribute."
        },
        "attribute": "value",
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
          "text": "Set to true to disable the checkbox."
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
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
          "text": "Set to true to make the checkbox a required field."
        },
        "attribute": "required",
        "reflect": false,
        "defaultValue": "false"
      },
      "checked": {
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
          "text": "Set to true to draw the checkbox in a checked state."
        },
        "attribute": "checked",
        "reflect": true,
        "defaultValue": "false"
      },
      "indeterminate": {
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
          "text": "Set to true to draw the checkbox in an indeterminate state."
        },
        "attribute": "indeterminate",
        "reflect": true,
        "defaultValue": "false"
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
          "text": "This will be true when the control is in an invalid state. Validity is determined by the `required` prop."
        },
        "attribute": "invalid",
        "reflect": true,
        "defaultValue": "false"
      }
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Checkbox, "states", {
    get: function () { return {
      "hasFocus": {}
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Checkbox, "events", {
    get: function () { return [{
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
      }, {
        "method": "slChange",
        "name": "sl-change",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the control's checked state changes."
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
      }]; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Checkbox, "methods", {
    get: function () { return {
      "setFocus": {
        "complexType": {
          "signature": "(options?: FocusOptions) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            },
            "FocusOptions": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Sets focus on the checkbox.",
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
          "text": "Removes focus from the checkbox.",
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
  Object.defineProperty(Checkbox, "watchers", {
    get: function () { return [{
        "propName": "checked",
        "methodName": "handleCheckedChange"
      }, {
        "propName": "indeterminate",
        "methodName": "handleCheckedChange"
      }]; },
    enumerable: false,
    configurable: true
  });
  return Checkbox;
}());
export { Checkbox };
