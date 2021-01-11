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
import color from 'color';
import { clamp } from '../../utilities/math';
/**
 * @since 2.0
 * @status stable
 *
 * @part base - The component's base wrapper.
 * @part trigger - The color picker's dropdown trigger.
 * @part swatches - The container that holds swatches.
 * @part swatch - Each individual swatch.
 * @part grid - The color grid.
 * @part grid-handle - The color grid's handle.
 * @part hue-slider - The hue slider.
 * @part opacity-slider - The opacity slider.
 * @part slider - Hue and opacity sliders.
 * @part slider-handle - Hue and opacity slider handles.
 * @part preview - The preview color.
 * @part input - The text input.
 * @part format-button - The toggle format button's base.
 */
var ColorPicker = /** @class */ (function () {
  function ColorPicker() {
    this.bypassValueParse = false;
    this.inputValue = '';
    this.hue = 0;
    this.saturation = 100;
    this.lightness = 100;
    this.alpha = 100;
    this.showCopyFeedback = false;
    /** The current color. */
    this.value = '#ffffff';
    /**
     * The format to use for the display value. If opacity is enabled, these will translate to HEXA, RGBA, and HSLA
     * respectively. The color picker will always accept user input in any format (including CSS color names) and convert
     * it to the desired format.
     */
    this.format = 'hex';
    /** Set to true to render the color picker inline rather than inside a dropdown. */
    this.inline = false;
    /** Determines the size of the color picker's trigger. This has no effect on inline color pickers. */
    this.size = 'medium';
    /** Removes the format toggle. */
    this.noFormatToggle = false;
    /** The input's name attribute. */
    this.name = '';
    /** Set to true to disable the color picker. */
    this.disabled = false;
    /**
     * This will be true when the control is in an invalid state. Validity is determined by the `setCustomValidity()`
     * method using the browser's constraint validation API.
     */
    this.invalid = false;
    /**
     * Enable this option to prevent the panel from being clipped when the component is placed inside a container with
     * `overflow: auto|scroll`.
     */
    this.hoist = false;
    /** Whether to show the opacity slider. */
    this.opacity = false;
    /** By default, the value will be set in lowercase. Set this to true to set it in uppercase instead. */
    this.uppercase = false;
    /**
     * An array of predefined color swatches to display. Can include any format the color picker can parse, including
     * HEX(A), RGB(A), HSL(A), and CSS color names.
     */
    this.swatches = [
      '#d0021b',
      '#f5a623',
      '#f8e71c',
      '#8b572a',
      '#7ed321',
      '#417505',
      '#bd10e0',
      '#9013fe',
      '#4a90e2',
      '#50e3c2',
      '#b8e986',
      '#000',
      '#444',
      '#888',
      '#ccc',
      '#fff'
    ];
  }
  ColorPicker.prototype.handleFormatChange = function () {
    this.syncValues();
  };
  ColorPicker.prototype.handleOpacityChange = function () {
    this.alpha = 100;
  };
  ColorPicker.prototype.handleValueChange = function (newValue, oldValue) {
    if (!this.bypassValueParse) {
      var newColor = this.parseColor(newValue);
      if (newColor) {
        this.inputValue = this.value;
        this.hue = newColor.hsla.h;
        this.saturation = newColor.hsla.s;
        this.lightness = newColor.hsla.l;
        this.alpha = newColor.hsla.a * 100;
      }
      else {
        this.inputValue = oldValue;
      }
    }
    if (this.value !== this.lastValueEmitted) {
      this.slChange.emit();
      this.lastValueEmitted = this.value;
    }
  };
  ColorPicker.prototype.connectedCallback = function () {
    this.handleAlphaDrag = this.handleAlphaDrag.bind(this);
    this.handleAlphaInput = this.handleAlphaInput.bind(this);
    this.handleAlphaKeyDown = this.handleAlphaKeyDown.bind(this);
    this.handleCopy = this.handleCopy.bind(this);
    this.handleFormatToggle = this.handleFormatToggle.bind(this);
    this.handleDocumentMouseDown = this.handleDocumentMouseDown.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleDropdownAfterHide = this.handleDropdownAfterHide.bind(this);
    this.handleDropdownAfterShow = this.handleDropdownAfterShow.bind(this);
    this.handleDropdownHide = this.handleDropdownHide.bind(this);
    this.handleDropdownShow = this.handleDropdownShow.bind(this);
    this.handleGridDrag = this.handleGridDrag.bind(this);
    this.handleGridKeyDown = this.handleGridKeyDown.bind(this);
    this.handleHueDrag = this.handleHueDrag.bind(this);
    this.handleHueInput = this.handleHueInput.bind(this);
    this.handleHueKeyDown = this.handleHueKeyDown.bind(this);
    this.handleLightnessInput = this.handleLightnessInput.bind(this);
    this.handleSaturationInput = this.handleSaturationInput.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputKeyDown = this.handleInputKeyDown.bind(this);
  };
  ColorPicker.prototype.componentWillLoad = function () {
    if (!this.setColor(this.value)) {
      this.setColor("#ffff");
    }
    this.inputValue = this.value;
    this.lastValueEmitted = this.value;
    this.syncValues();
  };
  /** Returns the current value as a string in the specified format. */
  ColorPicker.prototype.getFormattedValue = function (format) {
    if (format === void 0) { format = 'hex'; }
    return __awaiter(this, void 0, void 0, function () {
      var currentColor;
      return __generator(this, function (_a) {
        currentColor = this.parseColor("hsla(" + this.hue + ", " + this.saturation + "%, " + this.lightness + "%, " + this.alpha / 100 + ")");
        if (!currentColor) {
          return [2 /*return*/, ''];
        }
        switch (format) {
          case 'hex':
            return [2 /*return*/, currentColor.hex];
          case 'hexa':
            return [2 /*return*/, currentColor.hexa];
          case 'rgb':
            return [2 /*return*/, currentColor.rgb.string];
          case 'rgba':
            return [2 /*return*/, currentColor.rgba.string];
          case 'hsl':
            return [2 /*return*/, currentColor.hsl.string];
          case 'hsla':
            return [2 /*return*/, currentColor.hsla.string];
          default:
            return [2 /*return*/, ''];
        }
        return [2 /*return*/];
      });
    });
  };
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  ColorPicker.prototype.reportValidity = function () {
    return __awaiter(this, void 0, void 0, function () {
      var _this = this;
      return __generator(this, function (_a) {
        // If the input is invalid, show the dropdown so the browser can focus on it
        if (!this.inline && this.input.invalid) {
          return [2 /*return*/, new Promise(function (resolve) {
              _this.dropdown.addEventListener('sl-after-show', function () {
                _this.input.reportValidity();
                resolve();
              }, { once: true });
              _this.dropdown.show();
            })];
        }
        else {
          return [2 /*return*/, this.input.reportValidity()];
        }
        return [2 /*return*/];
      });
    });
  };
  /** Sets a custom validation message. If `message` is not empty, the field will be considered invalid. */
  ColorPicker.prototype.setCustomValidity = function (message) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0: return [4 /*yield*/, this.input.setCustomValidity(message)];
          case 1:
            _a.sent();
            this.invalid = this.input.invalid;
            return [2 /*return*/];
        }
      });
    });
  };
  ColorPicker.prototype.handleCopy = function () {
    var _this = this;
    this.input.select().then(function () {
      document.execCommand('copy');
      _this.previewButton.focus();
      _this.showCopyFeedback = true;
      _this.previewButton.addEventListener('animationend', function () { return (_this.showCopyFeedback = false); }, { once: true });
    });
  };
  ColorPicker.prototype.handleFormatToggle = function () {
    var formats = ['hex', 'rgb', 'hsl'];
    var nextIndex = (formats.indexOf(this.format) + 1) % formats.length;
    this.format = formats[nextIndex];
  };
  ColorPicker.prototype.handleHueInput = function (event) {
    var target = event.target;
    this.hue = clamp(Number(target.value), 0, 360);
  };
  ColorPicker.prototype.handleSaturationInput = function (event) {
    var target = event.target;
    this.saturation = clamp(Number(target.value), 0, 100);
  };
  ColorPicker.prototype.handleLightnessInput = function (event) {
    var target = event.target;
    this.lightness = clamp(Number(target.value), 0, 100);
  };
  ColorPicker.prototype.handleAlphaInput = function (event) {
    var target = event.target;
    this.alpha = clamp(Number(target.value), 0, 100);
  };
  ColorPicker.prototype.handleAlphaDrag = function (event) {
    var _this = this;
    var container = this.host.shadowRoot.querySelector('.color-picker__slider.color-picker__alpha');
    var handle = container.querySelector('.color-picker__slider-handle');
    var width = container.getBoundingClientRect().width;
    handle.focus();
    event.preventDefault();
    this.handleDrag(event, container, function (x) {
      _this.alpha = clamp((x / width) * 100, 0, 100);
      _this.syncValues();
    });
  };
  ColorPicker.prototype.handleHueDrag = function (event) {
    var _this = this;
    var container = this.host.shadowRoot.querySelector('.color-picker__slider.color-picker__hue');
    var handle = container.querySelector('.color-picker__slider-handle');
    var width = container.getBoundingClientRect().width;
    handle.focus();
    event.preventDefault();
    this.handleDrag(event, container, function (x) {
      _this.hue = clamp((x / width) * 360, 0, 360);
      _this.syncValues();
    });
  };
  ColorPicker.prototype.handleGridDrag = function (event) {
    var _this = this;
    var grid = this.host.shadowRoot.querySelector('.color-picker__grid');
    var handle = grid.querySelector('.color-picker__grid-handle');
    var _a = grid.getBoundingClientRect(), width = _a.width, height = _a.height;
    handle.focus();
    event.preventDefault();
    this.handleDrag(event, grid, function (x, y) {
      _this.saturation = clamp((x / width) * 100, 0, 100);
      _this.lightness = clamp(100 - (y / height) * 100, 0, 100);
      _this.syncValues();
    });
  };
  ColorPicker.prototype.handleDrag = function (event, container, onMove) {
    if (this.disabled) {
      return false;
    }
    var move = function (event) {
      var dims = container.getBoundingClientRect();
      var offsetX = dims.left + container.ownerDocument.defaultView.pageXOffset;
      var offsetY = dims.top + container.ownerDocument.defaultView.pageYOffset;
      var x = (event.changedTouches ? event.changedTouches[0].pageX : event.pageX) - offsetX;
      var y = (event.changedTouches ? event.changedTouches[0].pageY : event.pageY) - offsetY;
      onMove(x, y);
    };
    // Move on init
    move(event);
    var stop = function () {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('touchmove', move);
      document.removeEventListener('mouseup', stop);
      document.removeEventListener('touchend', stop);
    };
    document.addEventListener('mousemove', move);
    document.addEventListener('touchmove', move);
    document.addEventListener('mouseup', stop);
    document.addEventListener('touchend', stop);
  };
  ColorPicker.prototype.handleAlphaKeyDown = function (event) {
    var increment = event.shiftKey ? 10 : 1;
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      this.alpha = clamp(this.alpha - increment, 0, 100);
      this.syncValues();
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      this.alpha = clamp(this.alpha + increment, 0, 100);
      this.syncValues();
    }
    if (event.key === 'Home') {
      event.preventDefault();
      this.alpha = 0;
      this.syncValues();
    }
    if (event.key === 'End') {
      event.preventDefault();
      this.alpha = 100;
      this.syncValues();
    }
  };
  ColorPicker.prototype.handleHueKeyDown = function (event) {
    var increment = event.shiftKey ? 10 : 1;
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      this.hue = clamp(this.hue - increment, 0, 360);
      this.syncValues();
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      this.hue = clamp(this.hue + increment, 0, 360);
      this.syncValues();
    }
    if (event.key === 'Home') {
      event.preventDefault();
      this.hue = 0;
      this.syncValues();
    }
    if (event.key === 'End') {
      event.preventDefault();
      this.hue = 360;
      this.syncValues();
    }
  };
  ColorPicker.prototype.handleGridKeyDown = function (event) {
    var increment = event.shiftKey ? 10 : 1;
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      this.saturation = clamp(this.saturation - increment, 0, 100);
      this.syncValues();
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      this.saturation = clamp(this.saturation + increment, 0, 100);
      this.syncValues();
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.lightness = clamp(this.lightness + increment, 0, 100);
      this.syncValues();
    }
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.lightness = clamp(this.lightness - increment, 0, 100);
      this.syncValues();
    }
  };
  ColorPicker.prototype.handleInputChange = function (event) {
    var target = event.target;
    this.setColor(target.value);
    target.value = this.value;
    event.stopPropagation();
  };
  ColorPicker.prototype.handleInputKeyDown = function (event) {
    var _this = this;
    if (event.key === 'Enter') {
      this.setColor(this.input.value);
      this.input.value = this.value;
      setTimeout(function () { return _this.input.select(); });
    }
  };
  ColorPicker.prototype.handleDocumentMouseDown = function (event) {
    var target = event.target;
    // Close when clicking outside of the dropdown
    if (target.closest('sl-color-picker') !== this.host) {
      this.dropdown.hide();
    }
  };
  ColorPicker.prototype.handleDropdownShow = function (event) {
    event.stopPropagation();
    this.slShow.emit();
  };
  ColorPicker.prototype.handleDropdownAfterShow = function (event) {
    event.stopPropagation();
    this.slAfterShow.emit();
  };
  ColorPicker.prototype.handleDropdownHide = function (event) {
    event.stopPropagation();
    this.slHide.emit();
  };
  ColorPicker.prototype.handleDropdownAfterHide = function (event) {
    event.stopPropagation();
    this.slAfterHide.emit();
    this.showCopyFeedback = false;
  };
  ColorPicker.prototype.normalizeColorString = function (colorString) {
    //
    // The color module we're using doesn't parse % values for the alpha channel in RGBA and HSLA. It also doesn't parse
    // hex colors when the # is missing. This pre-parser tries to normalize these edge cases to provide a better
    // experience for users who type in color values.
    //
    if (/rgba?/i.test(colorString)) {
      var rgba = colorString
        .replace(/[^\d.%]/g, ' ')
        .split(' ')
        .map(function (val) { return val.trim(); })
        .filter(function (val) { return val.length; });
      if (rgba.length < 4) {
        rgba[3] = '1';
      }
      if (rgba[3].indexOf('%') > -1) {
        rgba[3] = (Number(rgba[3].replace(/%/g, '')) / 100).toString();
      }
      return "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ", " + rgba[3] + ")";
    }
    if (/hsla?/i.test(colorString)) {
      var hsla = colorString
        .replace(/[^\d.%]/g, ' ')
        .split(' ')
        .map(function (val) { return val.trim(); })
        .filter(function (val) { return val.length; });
      if (hsla.length < 4) {
        hsla[3] = '1';
      }
      if (hsla[3].indexOf('%') > -1) {
        hsla[3] = (Number(hsla[3].replace(/%/g, '')) / 100).toString();
      }
      return "hsla(" + hsla[0] + ", " + hsla[1] + ", " + hsla[2] + ", " + hsla[3] + ")";
    }
    if (/^[0-9a-f]+$/i.test(colorString)) {
      return "#" + colorString;
    }
    return colorString;
  };
  ColorPicker.prototype.parseColor = function (colorString) {
    function toHex(value) {
      var hex = Math.round(value).toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    }
    var parsed;
    // The color module has a weak parser, so we normalize certain things to make the user experience better
    colorString = this.normalizeColorString(colorString);
    try {
      parsed = color(colorString);
    }
    catch (_a) {
      return false;
    }
    var hsl = {
      h: parsed.hsl().color[0],
      s: parsed.hsl().color[1],
      l: parsed.hsl().color[2],
      a: parsed.hsl().valpha
    };
    var rgb = {
      r: parsed.rgb().color[0],
      g: parsed.rgb().color[1],
      b: parsed.rgb().color[2],
      a: parsed.rgb().valpha
    };
    var hex = {
      r: toHex(parsed.rgb().color[0]),
      g: toHex(parsed.rgb().color[1]),
      b: toHex(parsed.rgb().color[2]),
      a: toHex(parsed.rgb().valpha * 255)
    };
    return {
      hsl: {
        h: hsl.h,
        s: hsl.s,
        l: hsl.l,
        string: this.setLetterCase("hsl(" + Math.round(hsl.h) + ", " + Math.round(hsl.s) + "%, " + Math.round(hsl.l) + "%)")
      },
      hsla: {
        h: hsl.h,
        s: hsl.s,
        l: hsl.l,
        a: hsl.a,
        string: this.setLetterCase("hsla(" + Math.round(hsl.h) + ", " + Math.round(hsl.s) + "%, " + Math.round(hsl.l) + "%, " + Number(hsl.a.toFixed(2).toString()) + ")")
      },
      rgb: {
        r: rgb.r,
        g: rgb.g,
        b: rgb.b,
        string: this.setLetterCase("rgb(" + Math.round(rgb.r) + ", " + Math.round(rgb.g) + ", " + Math.round(rgb.b) + ")")
      },
      rgba: {
        r: rgb.r,
        g: rgb.g,
        b: rgb.b,
        a: rgb.a,
        string: this.setLetterCase("rgba(" + Math.round(rgb.r) + ", " + Math.round(rgb.g) + ", " + Math.round(rgb.b) + ", " + Number(rgb.a.toFixed(2).toString()) + ")")
      },
      hex: this.setLetterCase("#" + hex.r + hex.g + hex.b),
      hexa: this.setLetterCase("#" + hex.r + hex.g + hex.b + hex.a)
    };
  };
  ColorPicker.prototype.setColor = function (colorString) {
    var newColor = this.parseColor(colorString);
    if (!newColor) {
      return false;
    }
    this.hue = newColor.hsla.h;
    this.saturation = newColor.hsla.s;
    this.lightness = newColor.hsla.l;
    this.alpha = this.opacity ? newColor.hsla.a * 100 : 100;
    this.syncValues();
    return true;
  };
  ColorPicker.prototype.setLetterCase = function (string) {
    if (typeof string !== 'string')
      return '';
    return this.uppercase ? string.toUpperCase() : string.toLowerCase();
  };
  ColorPicker.prototype.syncValues = function () {
    var currentColor = this.parseColor("hsla(" + this.hue + ", " + this.saturation + "%, " + this.lightness + "%, " + this.alpha / 100 + ")");
    if (!currentColor) {
      return false;
    }
    // Update the value
    if (this.format === 'hsl') {
      this.inputValue = this.opacity ? currentColor.hsla.string : currentColor.hsl.string;
    }
    else if (this.format === 'rgb') {
      this.inputValue = this.opacity ? currentColor.rgba.string : currentColor.rgb.string;
    }
    else {
      this.inputValue = this.opacity ? currentColor.hexa : currentColor.hex;
    }
    // Setting this.value will trigger the watcher which parses the new color. We want to bypass that behavior because
    // a) we've already done it in this function and b) conversion/rounding can lead to values changing slightly.
    this.bypassValueParse = true;
    this.value = this.inputValue;
    this.bypassValueParse = false;
  };
  ColorPicker.prototype.render = function () {
    var _this = this;
    var x = this.saturation;
    var y = 100 - this.lightness;
    var ColorPicker = function () {
      return (h("div", { part: "base", class: {
          'color-picker': true,
          'color-picker--inline': _this.inline,
          'color-picker--disabled': _this.disabled
        }, "aria-disabled": _this.disabled ? 'true' : 'false' },
        h("div", { part: "grid", class: "color-picker__grid", style: {
            backgroundColor: "hsl(" + _this.hue + "deg, 100%, 50%)"
          }, onMouseDown: _this.handleGridDrag, onTouchStart: _this.handleGridDrag },
          h("span", { part: "grid-handle", class: "color-picker__grid-handle", style: {
              top: y + "%",
              left: x + "%",
              backgroundColor: "hsla(" + _this.hue + "deg, " + _this.saturation + "%, " + _this.lightness + "%)"
            }, role: "slider", "aria-label": "HSL", "aria-valuetext": "hsl(" + Math.round(_this.hue) + ", " + Math.round(_this.saturation) + "%, " + Math.round(_this.lightness) + "%)", tabIndex: _this.disabled ? null : 0, onKeyDown: _this.handleGridKeyDown })),
        h("div", { class: "color-picker__controls" },
          h("div", { class: "color-picker__sliders" },
            h("div", { part: "slider hue-slider", class: "color-picker__hue color-picker__slider", onMouseDown: _this.handleHueDrag, onTouchStart: _this.handleHueDrag },
              h("span", { part: "slider-handle", class: "color-picker__slider-handle", style: {
                  left: (_this.hue === 0 ? 0 : 100 / (360 / _this.hue)) + "%"
                }, role: "slider", "aria-label": "hue", "aria-orientation": "horizontal", "aria-valuemin": "0", "aria-valuemax": "360", "aria-valuenow": Math.round(_this.hue), tabIndex: _this.disabled ? null : 0, onKeyDown: _this.handleHueKeyDown })),
            _this.opacity && (h("div", { part: "slider opacity-slider", class: "color-picker__alpha color-picker__slider color-picker__transparent-bg", onMouseDown: _this.handleAlphaDrag, onTouchStart: _this.handleAlphaDrag },
              h("div", { class: "color-picker__alpha-gradient", style: {
                  backgroundImage: "linear-gradient(\n                      to right,\n                      hsl(" + _this.hue + "deg, " + _this.saturation + "%, " + _this.lightness + "%, 0%) 0%,\n                      hsl(" + _this.hue + "deg, " + _this.saturation + "%, " + _this.lightness + "%) 100%\n                      )"
                } }),
              h("span", { part: "slider-handle", class: "color-picker__slider-handle", style: {
                  left: _this.alpha + "%"
                }, role: "slider", "aria-label": "alpha", "aria-orientation": "horizontal", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": Math.round(_this.alpha), tabIndex: _this.disabled ? null : 0, onKeyDown: _this.handleAlphaKeyDown })))),
          h("button", { ref: function (el) { return (_this.previewButton = el); }, type: "button", part: "preview", class: "color-picker__preview color-picker__transparent-bg", style: {
              '--preview-color': "hsla(" + _this.hue + "deg, " + _this.saturation + "%, " + _this.lightness + "%, " + _this.alpha / 100 + ")"
            }, onClick: _this.handleCopy },
            h("sl-icon", { name: "check", class: {
                'color-picker__copy-feedback': true,
                'color-picker__copy-feedback--visible': _this.showCopyFeedback,
                'color-picker__copy-feedback--dark': _this.lightness > 50
              } }))),
        h("div", { class: "color-picker__user-input" },
          h("sl-input", { ref: function (el) { return (_this.input = el); }, part: "input", size: "small", type: "text", name: _this.name, autocomplete: "off", autocorrect: "off", autocapitalize: "off", spellcheck: false, value: _this.inputValue, disabled: _this.disabled, onKeyDown: _this.handleInputKeyDown, "onSl-change": _this.handleInputChange }),
          !_this.noFormatToggle && (h("sl-button", { exportparts: "base:format-button", size: "small", onClick: _this.handleFormatToggle }, _this.setLetterCase(_this.format)))),
        _this.swatches && (h("div", { part: "swatches", class: "color-picker__swatches" }, _this.swatches.map(function (swatch) { return (h("div", { part: "swatch", class: "color-picker__swatch color-picker__transparent-bg", tabIndex: _this.disabled ? null : 0, role: "button", "aria-label": swatch, onClick: function () { return !_this.disabled && _this.setColor(swatch); }, onKeyDown: function (event) { return !_this.disabled && event.key === 'Enter' && _this.setColor(swatch); } },
          h("div", { class: "color-picker__swatch-color", style: { backgroundColor: swatch } }))); })))));
    };
    // Render inline
    if (this.inline) {
      return h(ColorPicker, null);
    }
    // Render as a dropdown
    return (h("sl-dropdown", { ref: function (el) { return (_this.dropdown = el); }, class: "color-dropdown", "aria-disabled": this.disabled ? 'true' : 'false', containingElement: this.host, hoist: this.hoist, "onSl-show": this.handleDropdownShow, "onSl-after-show": this.handleDropdownAfterShow, "onSl-hide": this.handleDropdownHide, "onSl-after-hide": this.handleDropdownAfterHide },
      h("button", { ref: function (el) { return (_this.trigger = el); }, part: "trigger", slot: "trigger", class: {
          'color-dropdown__trigger': true,
          'color-dropdown__trigger--disabled': this.disabled,
          'color-dropdown__trigger--small': this.size === 'small',
          'color-dropdown__trigger--medium': this.size === 'medium',
          'color-dropdown__trigger--large': this.size === 'large',
          'color-picker__transparent-bg': true
        }, style: {
          color: "hsla(" + this.hue + "deg, " + this.saturation + "%, " + this.lightness + "%, " + this.alpha / 100 + ")"
        }, type: "button" }),
      h(ColorPicker, null)));
  };
  Object.defineProperty(ColorPicker, "is", {
    get: function () { return "sl-color-picker"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ColorPicker, "encapsulation", {
    get: function () { return "shadow"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ColorPicker, "originalStyleUrls", {
    get: function () { return {
      "$": ["color-picker.scss"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ColorPicker, "styleUrls", {
    get: function () { return {
      "$": ["color-picker.css"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ColorPicker, "properties", {
    get: function () { return {
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
          "text": "The current color."
        },
        "attribute": "value",
        "reflect": true,
        "defaultValue": "'#ffffff'"
      },
      "format": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "'hex' | 'rgb' | 'hsl'",
          "resolved": "\"hex\" | \"hsl\" | \"rgb\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The format to use for the display value. If opacity is enabled, these will translate to HEXA, RGBA, and HSLA\nrespectively. The color picker will always accept user input in any format (including CSS color names) and convert\nit to the desired format."
        },
        "attribute": "format",
        "reflect": false,
        "defaultValue": "'hex'"
      },
      "inline": {
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
          "text": "Set to true to render the color picker inline rather than inside a dropdown."
        },
        "attribute": "inline",
        "reflect": false,
        "defaultValue": "false"
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
          "text": "Determines the size of the color picker's trigger. This has no effect on inline color pickers."
        },
        "attribute": "size",
        "reflect": false,
        "defaultValue": "'medium'"
      },
      "noFormatToggle": {
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
          "text": "Removes the format toggle."
        },
        "attribute": "no-format-toggle",
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
          "text": "The input's name attribute."
        },
        "attribute": "name",
        "reflect": true,
        "defaultValue": "''"
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
          "text": "Set to true to disable the color picker."
        },
        "attribute": "disabled",
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
          "text": "This will be true when the control is in an invalid state. Validity is determined by the `setCustomValidity()`\nmethod using the browser's constraint validation API."
        },
        "attribute": "invalid",
        "reflect": true,
        "defaultValue": "false"
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
      "opacity": {
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
          "text": "Whether to show the opacity slider."
        },
        "attribute": "opacity",
        "reflect": false,
        "defaultValue": "false"
      },
      "uppercase": {
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
          "text": "By default, the value will be set in lowercase. Set this to true to set it in uppercase instead."
        },
        "attribute": "uppercase",
        "reflect": false,
        "defaultValue": "false"
      },
      "swatches": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "string[]",
          "resolved": "string[]",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "An array of predefined color swatches to display. Can include any format the color picker can parse, including\nHEX(A), RGB(A), HSL(A), and CSS color names."
        },
        "defaultValue": "[\n    '#d0021b',\n    '#f5a623',\n    '#f8e71c',\n    '#8b572a',\n    '#7ed321',\n    '#417505',\n    '#bd10e0',\n    '#9013fe',\n    '#4a90e2',\n    '#50e3c2',\n    '#b8e986',\n    '#000',\n    '#444',\n    '#888',\n    '#ccc',\n    '#fff'\n  ]"
      }
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ColorPicker, "states", {
    get: function () { return {
      "inputValue": {},
      "hue": {},
      "saturation": {},
      "lightness": {},
      "alpha": {},
      "showCopyFeedback": {}
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ColorPicker, "events", {
    get: function () { return [{
        "method": "slChange",
        "name": "sl-change",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the color picker's value changes."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "slShow",
        "name": "sl-show",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the color picker opens. Calling `event.preventDefault()` will prevent it from being opened."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "slAfterShow",
        "name": "sl-after-show",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted after the color picker opens and all transitions are complete."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "slHide",
        "name": "sl-hide",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the color picker closes. Calling `event.preventDefault()` will prevent it from being closed."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "slAfterHide",
        "name": "sl-after-hide",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted after the color picker closes and all transitions are complete."
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
  Object.defineProperty(ColorPicker, "methods", {
    get: function () { return {
      "getFormattedValue": {
        "complexType": {
          "signature": "(format?: 'hex' | 'hexa' | 'rgb' | 'rgba' | 'hsl' | 'hsla') => Promise<string>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<string>"
        },
        "docs": {
          "text": "Returns the current value as a string in the specified format.",
          "tags": []
        }
      },
      "reportValidity": {
        "complexType": {
          "signature": "() => Promise<boolean | void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<boolean | void>"
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
  Object.defineProperty(ColorPicker, "elementRef", {
    get: function () { return "host"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ColorPicker, "watchers", {
    get: function () { return [{
        "propName": "format",
        "methodName": "handleFormatChange"
      }, {
        "propName": "opacity",
        "methodName": "handleOpacityChange"
      }, {
        "propName": "value",
        "methodName": "handleValueChange"
      }]; },
    enumerable: false,
    configurable: true
  });
  return ColorPicker;
}());
export { ColorPicker };
