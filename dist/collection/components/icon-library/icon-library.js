import { Component, Prop, Watch } from '@stencil/core';
import { registerLibrary, unregisterLibrary } from './icon-library-registry';
/**
 * @since 2.0
 * @status stable
 */
var IconLibrary = /** @class */ (function () {
  function IconLibrary() {
  }
  IconLibrary.prototype.handleUpdate = function () {
    // Subsequent registrations with the same name will invalidate existing ones
    this.register();
  };
  IconLibrary.prototype.connectedCallback = function () {
    if (this.name && this.resolver) {
      this.register();
    }
  };
  IconLibrary.prototype.disconnectedCallback = function () {
    unregisterLibrary(this.name);
  };
  IconLibrary.prototype.register = function () {
    var _a = this, name = _a.name, resolver = _a.resolver, mutator = _a.mutator;
    registerLibrary(name, resolver, mutator);
  };
  IconLibrary.prototype.render = function () {
    return null;
  };
  Object.defineProperty(IconLibrary, "is", {
    get: function () { return "sl-icon-library"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(IconLibrary, "encapsulation", {
    get: function () { return "shadow"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(IconLibrary, "originalStyleUrls", {
    get: function () { return {
      "$": ["icon-library.scss"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(IconLibrary, "styleUrls", {
    get: function () { return {
      "$": ["icon-library.css"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(IconLibrary, "properties", {
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
          "text": "The name of the icon library."
        },
        "attribute": "name",
        "reflect": false
      },
      "resolver": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "IconLibraryResolver",
          "resolved": "(name: string) => string",
          "references": {
            "IconLibraryResolver": {
              "location": "import",
              "path": "./icon-library-registry"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "A function that translates an icon name to a URL where the corresponding SVG file exists The URL can be local or a\nCORS-enabled endpoint."
        }
      },
      "mutator": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "IconLibraryMutator",
          "resolved": "(svg: SVGElement) => void",
          "references": {
            "IconLibraryMutator": {
              "location": "import",
              "path": "./icon-library-registry"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "A function that mutates the SVG element before it renders."
        }
      }
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(IconLibrary, "watchers", {
    get: function () { return [{
        "propName": "name",
        "methodName": "handleUpdate"
      }, {
        "propName": "resolver",
        "methodName": "handleUpdate"
      }, {
        "propName": "mutator",
        "methodName": "handleUpdate"
      }]; },
    enumerable: false,
    configurable: true
  });
  return IconLibrary;
}());
export { IconLibrary };
