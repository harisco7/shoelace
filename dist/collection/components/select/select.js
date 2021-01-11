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
import FormControl from '../../functional-components/form-control/form-control';
import { getTextContent } from '../../utilities/slot';
import { hasSlot } from '../../utilities/slot';
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
 * @part clear-button - The input's clear button, exported from <sl-input>.
 * @part form-control - The form control that wraps the label, input, and help text.
 * @part help-text - The select's help text.
 * @part icon - The select's icon.
 * @part label - The select's label.
 * @part menu - The select menu, a <sl-menu> element.
 * @part tag - The multiselect option, a <sl-tag> element.
 * @part tags - The container in which multiselect options are rendered.
 */
var Select = /** @class */ (function () {
  function Select() {
    this.inputId = "select-" + ++id;
    this.labelId = "select-label-" + id;
    this.helpTextId = "select-help-text-" + id;
    this.hasFocus = false;
    this.hasHelpTextSlot = false;
    this.hasLabelSlot = false;
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
    /** The select's label. Alternatively, you can use the label slot. */
    this.label = '';
    /** The select's help text. Alternatively, you can use the help-text slot. */
    this.helpText = '';
    /** The select's required attribute. */
    this.required = false;
    /** Set to true to add a clear button when the select is populated. */
    this.clearable = false;
    /** This will be true when the control is in an invalid state. Validity is determined by the `required` prop. */
    this.invalid = false;
  }
  Select.prototype.handleDisabledChange = function () {
    if (this.disabled && this.isOpen) {
      this.dropdown.hide();
    }
  };
  Select.prototype.handleLabelChange = function () {
    this.handleSlotChange();
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
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleClearClick = this.handleClearClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleLabelClick = this.handleLabelClick.bind(this);
    this.handleMenuHide = this.handleMenuHide.bind(this);
    this.handleMenuShow = this.handleMenuShow.bind(this);
    this.handleMenuSelect = this.handleMenuSelect.bind(this);
    this.handleSlotChange = this.handleSlotChange.bind(this);
    this.handleTagInteraction = this.handleTagInteraction.bind(this);
    this.host.shadowRoot.addEventListener('slotchange', this.handleSlotChange);
  };
  Select.prototype.componentWillLoad = function () {
    this.handleSlotChange();
  };
  Select.prototype.componentDidLoad = function () {
    var _this = this;
    this.resizeObserver = new ResizeObserver(function () { return _this.resizeMenu(); });
    this.reportDuplicateItemValues();
    // We need to do an initial sync after the component has rendered, so this will suppress the re-render warning
    requestAnimationFrame(function () { return _this.syncItemsFromValue(); });
  };
  Select.prototype.disconnectedCallback = function () {
    this.host.shadowRoot.removeEventListener('slotchange', this.handleSlotChange);
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
        this.invalid = !this.input.checkValidity();
        return [2 /*return*/];
      });
    });
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
  Select.prototype.handleBlur = function () {
    this.hasFocus = false;
    this.slBlur.emit();
  };
  Select.prototype.handleFocus = function () {
    this.hasFocus = true;
    this.slFocus.emit();
  };
  Select.prototype.handleClearClick = function (event) {
    event.stopPropagation();
    this.value = this.multiple ? [] : '';
    this.syncItemsFromValue();
  };
  Select.prototype.handleKeyDown = function (event) {
    var target = event.target;
    var items = this.getItems();
    var firstItem = items[0];
    var lastItem = items[items.length - 1];
    // Ignore key presses on tags
    if (target.tagName.toLowerCase() === 'sl-tag') {
      return;
    }
    // Tabbing out of the control closes it
    if (event.key === 'Tab') {
      if (this.isOpen) {
        this.dropdown.hide();
      }
      return;
    }
    // Up/down opens the menu
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
    // All other keys open the menu and initiate type to select
    if (!this.isOpen) {
      event.stopPropagation();
      event.preventDefault();
      this.dropdown.show();
      this.menu.typeToSelect(event.key);
    }
  };
  Select.prototype.handleLabelClick = function () {
    this.box.focus();
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
  };
  Select.prototype.handleSlotChange = function () {
    this.hasHelpTextSlot = hasSlot(this.host, 'help-text');
    this.hasLabelSlot = hasSlot(this.host, 'label');
    this.syncItemsFromValue();
    this.reportDuplicateItemValues();
  };
  Select.prototype.handleTagInteraction = function (event) {
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
  Select.prototype.reportDuplicateItemValues = function () {
    var items = this.getItems();
    // Report duplicate values since they can break selection logic
    var duplicateValues = items.map(function (item) { return item.value; }).filter(function (e, i, a) { return a.indexOf(e) !== i; });
    if (duplicateValues.length) {
      throw new Error('Duplicate value found on <sl-menu-item> in <sl-select>: "' + duplicateValues.join('", "') + '"');
    }
  };
  Select.prototype.resizeMenu = function () {
    this.menu.style.width = this.box.clientWidth + "px";
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
        return (h("sl-tag", { exportparts: "base:tag", type: "info", size: _this.size, pill: _this.pill, clearable: true, onClick: _this.handleTagInteraction, onKeyDown: _this.handleTagInteraction, "onSl-clear": function (event) {
            event.stopPropagation();
            if (!_this.disabled) {
              item.checked = false;
              _this.syncValueFromItems();
            }
          } }, _this.getItemLabel(item)));
      });
      if (this.maxTagsVisible > 0 && this.displayTags.length > this.maxTagsVisible) {
        var total = this.displayTags.length;
        this.displayLabel = '';
        this.displayTags = this.displayTags.slice(0, this.maxTagsVisible);
        this.displayTags.push(h("sl-tag", { exportparts: "base:tag", type: "info", size: this.size },
          "+",
          total - this.maxTagsVisible));
      }
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
    var hasSelection = this.multiple ? this.value.length > 0 : this.value !== '';
    return (h(FormControl, { inputId: this.inputId, label: this.label, labelId: this.labelId, hasLabelSlot: this.hasLabelSlot, helpTextId: this.helpTextId, helpText: this.helpText, hasHelpTextSlot: this.hasHelpTextSlot, size: this.size, onLabelClick: this.handleLabelClick },
      h("sl-dropdown", { part: "base", ref: function (el) { return (_this.dropdown = el); }, hoist: this.hoist, closeOnSelect: !this.multiple, containingElement: this.host, class: {
          select: true,
          'select--open': this.isOpen,
          'select--empty': ((_a = this.value) === null || _a === void 0 ? void 0 : _a.length) === 0,
          'select--focused': this.hasFocus,
          'select--clearable': this.clearable,
          'select--disabled': this.disabled,
          'select--multiple': this.multiple,
          'select--has-tags': this.multiple && hasSelection,
          'select--placeholder-visible': this.displayLabel === '',
          'select--small': this.size === 'small',
          'select--medium': this.size === 'medium',
          'select--large': this.size === 'large',
          'select--pill': this.pill,
          'select--invalid': this.invalid
        }, "onSl-show": this.handleMenuShow, "onSl-hide": this.handleMenuHide },
        h("div", { slot: "trigger", ref: function (el) { return (_this.box = el); }, id: this.inputId, class: "select__box", role: "combobox", "aria-labelledby": this.labelId, "aria-describedby": this.helpTextId, "aria-haspopup": "true", "aria-expanded": this.isOpen ? 'true' : 'false', tabIndex: this.disabled ? -1 : 0, onBlur: this.handleBlur, onFocus: this.handleFocus, onKeyDown: this.handleKeyDown },
          h("div", { class: "select__label" }, this.displayTags.length ? (h("span", { part: "tags", class: "select__tags" }, this.displayTags)) : (this.displayLabel || this.placeholder)),
          this.clearable && hasSelection && (h("sl-icon-button", { exportparts: "base:clear-button", class: "select__clear", name: "x-circle", onClick: this.handleClearClick, tabindex: "-1" })),
          h("span", { part: "icon", class: "select__icon" },
            h("sl-icon", { name: "chevron-down" })),
          h("input", { ref: function (el) { return (_this.input = el); }, class: "select__hidden-select", "aria-hidden": "true", required: this.required, value: hasSelection ? '1' : '', tabIndex: -1 })),
        h("sl-menu", { ref: function (el) { return (_this.menu = el); }, part: "menu", class: "select__menu", "onSl-select": this.handleMenuSelect },
          h("slot", { onSlotchange: this.handleSlotChange })))));
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
          "text": "The select's label. Alternatively, you can use the label slot."
        },
        "attribute": "label",
        "reflect": false,
        "defaultValue": "''"
      },
      "helpText": {
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
          "text": "The select's help text. Alternatively, you can use the help-text slot."
        },
        "attribute": "help-text",
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
      "hasHelpTextSlot": {},
      "hasLabelSlot": {},
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
        "propName": "disabled",
        "methodName": "handleDisabledChange"
      }, {
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
