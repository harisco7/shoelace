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
import { Component, Element, Event, Prop, State, Watch, h } from '@stencil/core';
import { requestInclude } from './request';
/**
 * @since 2.0
 * @status experimental
 */
var Include = /** @class */ (function () {
  function Include() {
    this.html = '';
    /** The fetch mode to use. */
    this.mode = 'cors';
  }
  Include.prototype.handleSrcChange = function () {
    this.loadSource();
  };
  Include.prototype.componentWillLoad = function () {
    this.loadSource();
  };
  Include.prototype.loadSource = function () {
    return __awaiter(this, void 0, void 0, function () {
      var src, file, _a;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            _b.trys.push([0, 2, , 3]);
            src = this.src;
            return [4 /*yield*/, requestInclude(src, this.mode)];
          case 1:
            file = _b.sent();
            // If the src changed since the request started do nothing, otherwise we risk overwriting a subsequent response
            if (src !== this.src) {
              return [2 /*return*/];
            }
            if (!file.ok) {
              this.slError.emit({ status: file.status });
              return [2 /*return*/];
            }
            this.host.innerHTML = file.html;
            this.slLoad.emit();
            return [3 /*break*/, 3];
          case 2:
            _a = _b.sent();
            this.slError.emit();
            return [3 /*break*/, 3];
          case 3: return [2 /*return*/];
        }
      });
    });
  };
  Include.prototype.render = function () {
    return h("slot", null);
  };
  Object.defineProperty(Include, "is", {
    get: function () { return "sl-include"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Include, "encapsulation", {
    get: function () { return "shadow"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Include, "originalStyleUrls", {
    get: function () { return {
      "$": ["include.scss"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Include, "styleUrls", {
    get: function () { return {
      "$": ["include.css"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Include, "properties", {
    get: function () { return {
      "src": {
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
          "text": "The location of the HTML file to include."
        },
        "attribute": "src",
        "reflect": false
      },
      "mode": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'cors' | 'no-cors' | 'same-origin'",
          "resolved": "\"cors\" | \"no-cors\" | \"same-origin\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The fetch mode to use."
        },
        "attribute": "mode",
        "reflect": false,
        "defaultValue": "'cors'"
      }
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Include, "states", {
    get: function () { return {
      "html": {}
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Include, "events", {
    get: function () { return [{
        "method": "slLoad",
        "name": "sl-load",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the included file is loaded."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "slError",
        "name": "sl-error",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the included file fails to load due to an error."
        },
        "complexType": {
          "original": "{ status?: number }",
          "resolved": "{ status?: number; }",
          "references": {}
        }
      }]; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Include, "elementRef", {
    get: function () { return "host"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Include, "watchers", {
    get: function () { return [{
        "propName": "src",
        "methodName": "handleSrcChange"
      }]; },
    enumerable: false,
    configurable: true
  });
  return Include;
}());
export { Include };
