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
import { Component, Element, Event, Method, Prop, State, Watch, h } from '@stencil/core';
import { getTextContent } from '../../utilities/slot';
import { hasSlot } from '../../utilities/slot';
import ResizeObserver from 'resize-observer-polyfill';
var id = 0;
/**
 * @since 2.0
 * @status stable
 *
 * @slot - The select's options in the form of menu items.
 * @slot label - The select's label. Alternatively, you can use the label prop.
 * @slot help-text - Help text that describes how to use the select.
 *
 * @part base - The component's base wrapper.
 * @part form-control - The form control that wraps the label and the input.
 * @part help-text - The select's help text.
 * @part icon - The select's icon.
 * @part label - The select's label.
 * @part menu - The select menu, a <sl-menu> element.
 * @part tag - The multiselect option, a <sl-tag> element.
 * @part tags - The container in which multiselect options are rendered.
 * @part input - The select's input control, exported from <sl-input>.
 * @part label - The select's label, exported from <sl-input>.
 * @part prefix - The select's prefix, exported from <sl-input>.
 * @part clear-button - The input's clear button, exported from <sl-input>.
 * @part suffix - The select's suffix, exported from <sl-input>.
 * @part help-text - The select's help text, exported from <sl-input>.
 */
var Select = /** @class */ (function () {
  function Select() {
    this.inputId = "select-" + ++id;
    this.labelId = "select-label-" + id;
    this.helpTextId = "select-help-text-" + id;
    this.hasFocus = false;
    this.hasLabel = false;
    this.isOpen = false;
    this.items = [];
    this.displayLabel = '';
    this.displayTags = [];
    /** Set to true to enable multiselect. */
    this.multiple = false;
    /**
     * The maximum number of tags to show when `multiple` is true. After the maximum, "+n" will be shown to indicate the
     * number of additional items that are selected. Set to -1 to remove the limit.
     */
    this.maxTagsVisible = 3;
    /** Set to true to disable the select control. */
    this.disabled = false;
    /** The select's name. */
    this.name = '';
    /** The select's placeholder text. */
    this.placeholder = '';
    /** The select's size. */
    this.size = 'medium';
    /**
     * Enable this option to prevent the panel from being clipped when the component is placed inside a container with
     * `overflow: auto|scroll`.
     */
    this.hoist = false;
    /** The value of the control. This will be a string or an array depending on `multiple`. */
    this.value = '';
    /** Set to true to draw a pill-style select with rounded edges. */
    this.pill = false;
    /** The select's label. */
    this.label = '';
    /** The select's required attribute. */
    this.required = false;
    /** Set to true to add a clear button when the select is populated. */
    this.clearable = false;
    /** This will be true when the control is in an invalid state. Validity is determined by the `required` prop. */
    this.invalid = false;
  }
  Select.prototype.handleLabelChange = function () {
    this.detectLabel();
  };
  Select.prototype.handleMultipleChange = function () {
    // Cast to array | string based on `this.multiple`
    var value = this.getValueAsArray();
    this.value = this.multiple ? value : value[0] || '';
    this.syncItemsFromValue();
  };
  Select.prototype.handleValueChange = function () {
    this.syncItemsFromValue();
    this.slChange.emit();
  };
  Select.prototype.connectedCallback = function () {
    this.detectLabel = this.detectLabel.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleCut = this.handleCut.bind(this);
    this.handlePaste = this.handlePaste.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleLabelClick = this.handleLabelClick.bind(this);
    this.handleTagClick = this.handleTagClick.bind(this);
    this.handleTagKeyDown = this.handleTagKeyDown.bind(this);
    this.handleMenuHide = this.handleMenuHide.bind(this);
    this.handleMenuShow = this.handleMenuShow.bind(this);
    this.handleMenuSelect = this.handleMenuSelect.bind(this);
    this.handleSlotChange = this.handleSlotChange.bind(this);
  };
  Select.prototype.componentWillLoad = function () {
    this.detectLabel();
  };
  Select.prototype.componentDidLoad = function () {
    var _this = this;
    this.resizeObserver = new ResizeObserver(function () { return _this.resizeMenu(); });
    this.reportDuplicateItemValues();
    // We need to do an initial sync after the component has rendered, so this will suppress the re-render warning
    requestAnimationFrame(function () { return _this.syncItemsFromValue(); });
  };
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  Select.prototype.reportValidity = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2 /*return*/, this.input.reportValidity()];
      });
    });
  };
  /** Sets a custom validation message. If `message` is not empty, the field will be considered invalid. */
  Select.prototype.setCustomValidity = function (message) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        this.input.setCustomValidity(message);
        return [2 /*return*/];
      });
    });
  };
  Select.prototype.detectLabel = function () {
    this.hasLabel = this.label.length > 0 || hasSlot(this.host, 'label');
  };
  Select.prototype.getItemLabel = function (item) {
    var slot = item.shadowRoot.querySelector('slot:not([name])');
    return getTextContent(slot);
  };
  Select.prototype.getItems = function () {
    return __spreadArrays(this.host.querySelectorAll('sl-menu-item'));
  };
  Select.prototype.getValueAsArray = function () {
    return Array.isArray(this.value) ? this.value : [this.value];
  };
  Select.prototype.handleBlur = function (event) {
    event.stopPropagation();
    this.hasFocus = false;
    this.slBlur.emit();
  };
  Select.prototype.handleFocus = function (event) {
    event.stopPropagation();
    this.hasFocus = true;
    this.slFocus.emit();
    this.input.setSelectionRange(0, 0);
  };
  Select.prototype.handleClear = function () {
    this.value = this.multiple ? [] : '';
    this.syncItemsFromValue();
    this.dropdown.hide();
  };
  Select.prototype.handleKeyDown = function (event) {
    var items = this.getItems();
    var firstItem = items[0];
    var lastItem = items[items.length - 1];
    // We can't make the <sl-input> readonly since that will block the browser's validation messages, so this prevents
    // key presses from modifying the input's value by briefly making it readonly. We don't use `preventDefault()` since
    // that would block tabbing, shortcuts, etc.
    var nativeInput = this.input.shadowRoot.querySelector('[part="input"]');
    nativeInput.readOnly = true;
    if (['ArrowDown', 'ArrowUp'].includes(event.key)) {
      event.preventDefault();
      // Show the menu if it's not already open
      if (!this.isOpen) {
        this.dropdown.show();
      }
      // Focus on a menu item
      if (event.key === 'ArrowDown' && firstItem) {
        firstItem.setFocus();
        return;
      }
      if (event.key === 'ArrowUp' && lastItem) {
        lastItem.setFocus();
        return;
      }
    }
  };
  Select.prototype.handleKeyUp = function () {
    var nativeInput = this.input.shadowRoot.querySelector('[part="input"]');
    nativeInput.readOnly = false;
  };
  Select.prototype.handleCut = function (event) {
    event.preventDefault();
  };
  Select.prototype.handlePaste = function (event) {
    event.preventDefault();
  };
  Select.prototype.handleLabelClick = function () {
    this.input.setFocus();
  };
  Select.prototype.handleMenuSelect = function (event) {
    var item = event.detail.item;
    if (this.multiple) {
      this.value = this.value.includes(item.value)
        ? this.value.filter(function (v) { return v !== item.value; })
        : __spreadArrays(this.value, [item.value]);
    }
    else {
      this.value = item.value;
    }
    this.syncItemsFromValue();
  };
  Select.prototype.handleMenuShow = function (event) {
    if (this.disabled) {
      event.preventDefault();
      return;
    }
    this.resizeMenu();
    this.resizeObserver.observe(this.host);
    this.isOpen = true;
  };
  Select.prototype.handleMenuHide = function () {
    this.resizeObserver.unobserve(this.host);
    this.isOpen = false;
    this.input.setFocus();
  };
  Select.prototype.handleSlotChange = function () {
    this.syncItemsFromValue();
    this.reportDuplicateItemValues();
  };
  Select.prototype.handleTagClick = function (event) {
    // Don't toggle the menu when a tag's clear button is activated
    var path = event.composedPath();
    var clearButton = path.find(function (el) {
      if (el instanceof HTMLElement) {
        var element = el;
        return element.getAttribute('part') === 'clear-button';
      }
    });
    if (clearButton) {
      event.stopPropagation();
    }
  };
  Select.prototype.handleTagKeyDown = function (event) {
    if (event.key === 'Enter') {
      event.stopPropagation();
    }
  };
  Select.prototype.reportDuplicateItemValues = function () {
    var items = this.getItems();
    // Report duplicate values since they can break selection logic
    var duplicateValues = items.map(function (item) { return item.value; }).filter(function (e, i, a) { return a.indexOf(e) !== i; });
    if (duplicateValues.length) {
      throw new Error('Duplicate value found on <sl-menu-item> in <sl-select>: "' + duplicateValues.join('", "') + '"');
    }
  };
  Select.prototype.resizeMenu = function () {
    this.menu.style.width = this.input.clientWidth + "px";
  };
  Select.prototype.syncItemsFromValue = function () {
    var _this = this;
    var items = this.getItems();
    var value = this.getValueAsArray();
    // Sync checked states
    items.map(function (item) { return (item.checked = value.includes(item.value)); });
    // Sync display label
    if (this.multiple) {
      var checkedItems_1 = [];
      value.map(function (val) { return items.map(function (item) { return (item.value === val ? checkedItems_1.push(item) : null); }); });
      this.displayTags = checkedItems_1.map(function (item) {
        return (h("sl-tag", { exportparts: "base:tag", type: "info", size: _this.size, pill: _this.pill, clearable: true, onClick: _this.handleTagClick, onKeyDown: _this.handleTagKeyDown, "onSl-clear": function (event) {
            event.stopPropagation();
            item.checked = false;
            _this.syncValueFromItems();
          } }, _this.getItemLabel(item)));
      });
      if (this.maxTagsVisible > 0 && this.displayTags.length > this.maxTagsVisible) {
        var total = this.displayTags.length;
        this.displayTags = this.displayTags.slice(0, this.maxTagsVisible);
        this.displayTags.push(h("sl-tag", { exportparts: "base:tag", type: "info", size: this.size },
          "+",
          total - this.maxTagsVisible));
      }
      // With `multiple`, the input uses the display label as its value. If no selection is made, we set it to an empty
      // string. If items are selected, we use a zero-width space so `required` validation doesn't fail, but nothing is
      // drawn in the label either. This is a bit ugly, but it gets the job done.
      this.displayLabel = this.value.length === 0 ? '' : '\u200B';
    }
    else {
      var checkedItem = items.filter(function (item) { return item.value === value[0]; })[0];
      this.displayLabel = checkedItem ? this.getItemLabel(checkedItem) : '';
      this.displayTags = [];
    }
  };
  Select.prototype.syncValueFromItems = function () {
    var items = this.getItems();
    var checkedItems = items.filter(function (item) { return item.checked; });
    var checkedValues = checkedItems.map(function (item) { return item.value; });
    if (this.multiple) {
      this.value = this.value.filter(function (val) { return checkedValues.includes(val); });
    }
    else {
      this.value = checkedValues.length > 0 ? checkedValues[0] : '';
    }
  };
  Select.prototype.render = function () {
    var _this = this;
    var _a;
    return (h("div", { part: "form-control", class: {
        'form-control': true,
        'form-control--has-label': this.hasLabel,
        'form-control--invalid': this.invalid
      } },
      h("label", { part: "label", id: this.labelId, class: {
          label: true,
          'label--small': this.size === 'small',
          'label--medium': this.size === 'medium',
          'label--large': this.size === 'large',
          'label--invalid': this.invalid
        }, htmlFor: this.inputId, onClick: this.handleLabelClick },
        h("slot", { name: "label", onSlotchange: this.detectLabel }, this.label)),
      h("sl-dropdown", { part: "base", ref: function (el) { return (_this.dropdown = el); }, hoist: this.hoist, closeOnSelect: !this.multiple, containingElement: this.host, class: {
          select: true,
          'select--open': this.isOpen,
          'select--empty': ((_a = this.value) === null || _a === void 0 ? void 0 : _a.length) === 0,
          'select--focused': this.hasFocus,
          'select--disabled': this.disabled,
          'select--multiple': this.multiple,
          'select--has-tags': this.multiple && this.displayTags.length > 0,
          'select--small': this.size === 'small',
          'select--medium': this.size === 'medium',
          'select--large': this.size === 'large',
          'select--pill': this.pill
        }, "onSl-show": this.handleMenuShow, "onSl-hide": this.handleMenuHide },
        h("sl-input", { slot: "trigger", exportparts: "input, label, prefix, clear-button, suffix, help-text", ref: function (el) { return (_this.input = el); }, id: this.inputId, class: "select__input", name: this.name, value: this.displayLabel, disabled: this.disabled, pill: this.pill, placeholder: this.displayLabel === '' && this.displayTags.length === 0 ? this.placeholder : null, size: this.size, invalid: this.invalid, clearable: this.clearable, required: this.required, "aria-labelledby": this.labelId, "aria-describedby": this.helpTextId, "onSl-focus": this.handleFocus, "onSl-blur": this.handleBlur, "onSl-clear": this.handleClear, onKeyDown: this.handleKeyDown, onKeyUp: this.handleKeyUp, onCut: this.handleCut, onPaste: this.handlePaste },
          this.displayTags.length && (h("span", { part: "tags", slot: "prefix", class: "select__tags" }, this.displayTags)),
          h("span", { part: "icon", slot: "suffix", class: "select__icon" },
            h("sl-icon", { name: "chevron-down" }))),
        h("sl-menu", { ref: function (el) { return (_this.menu = el); }, part: "menu", class: "select__menu", "onSl-select": this.handleMenuSelect },
          h("slot", { onSlotchange: this.handleSlotChange }))),
      h("div", { part: "help-text", id: this.helpTextId, class: {
          'help-text': true,
          'help-text--small': this.size === 'small',
          'help-text--medium': this.size === 'medium',
          'help-text--large': this.size === 'large',
          'help-text--invalid': this.invalid
        } },
        h("slot", { name: "help-text" }))));
  };
  Object.defineProperty(Select, "is", {
    get: function () { return "sl-select"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Select, "encapsulation", {
    get: function () { return "shadow"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Select, "originalStyleUrls", {
    get: function () { return {
      "$": ["select.scss"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Select, "styleUrls", {
    get: function () { return {
      "$": ["select.css"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Select, "properties", {
    get: function () { return {
      "multiple": {
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
          "text": "Set to true to enable multiselect."
        },
        "attribute": "multiple",
        "reflect": false,
        "defaultValue": "false"
      },
      "maxTagsVisible": {
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
          "text": "The maximum number of tags to show when `multiple` is true. After the maximum, \"+n\" will be shown to indicate the\nnumber of additional items that are selected. Set to -1 to remove the limit."
        },
        "attribute": "max-tags-visible",
        "reflect": false,
        "defaultValue": "3"
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
          "text": "Set to true to disable the select control."
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
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
          "text": "The select's name."
        },
        "attribute": "name",
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
          "text": "The select's placeholder text."
        },
        "attribute": "placeholder",
        "reflect": false,
        "defaultValue": "''"
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
          "text": "The select's size."
        },
        "attribute": "size",
        "reflect": false,
        "defaultValue": "'medium'"
      },
      "hoist": {
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
          "text": "Enable this option to prevent the panel from being clipped when the component is placed inside a container with\n`overflow: auto|scroll`."
        },
        "attribute": "hoist",
        "reflect": false,
        "defaultValue": "false"
      },
      "value": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "string | Array<string>",
          "resolved": "string | string[]",
          "references": {
            "Array": {
              "location": "global"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The value of the control. This will be a string or an array depending on `multiple`."
        },
        "attribute": "value",
        "reflect": false,
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
          "text": "Set to true to draw a pill-style select with rounded edges."
        },
        "attribute": "pill",
        "reflect": false,
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
          "text": "The select's label."
        },
        "attribute": "label",
        "reflect": false,
        "defaultValue": "''"
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
          "text": "The select's required attribute."
        },
        "attribute": "required",
        "reflect": false,
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
          "text": "Set to true to add a clear button when the select is populated."
        },
        "attribute": "clearable",
        "reflect": false,
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
        "reflect": false,
        "defaultValue": "false"
      }
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Select, "states", {
    get: function () { return {
      "hasFocus": {},
      "hasLabel": {},
      "isOpen": {},
      "items": {},
      "displayLabel": {},
      "displayTags": {}
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Select, "events", {
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
        "method": "slFocus",
        "name": "sl-focus",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the control gains focus"
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
          "text": "Emitted when the control loses focus"
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
  Object.defineProperty(Select, "methods", {
    get: function () { return {
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
  Object.defineProperty(Select, "elementRef", {
    get: function () { return "host"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Select, "watchers", {
    get: function () { return [{
        "propName": "label",
        "methodName": "handleLabelChange"
      }, {
        "propName": "multiple",
        "methodName": "handleMultipleChange"
      }, {
        "propName": "value",
        "methodName": "handleValueChange"
      }]; },
    enumerable: false,
    configurable: true
  });
  return Select;
}());
export { Select };
