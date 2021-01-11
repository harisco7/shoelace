'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-2ed8b67e.js');
const iconLibraryRegistry = require('./icon-library-registry-4b968839.js');

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
    function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
    function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
const iconFiles = new Map();
const requestIcon = (url) => {
  if (iconFiles.has(url)) {
    return iconFiles.get(url);
  }
  else {
    const request = fetch(url).then((response) => __awaiter(void 0, void 0, void 0, function* () {
      if (response.ok) {
        const div = document.createElement('div');
        div.innerHTML = yield response.text();
        const svg = div.firstElementChild;
        return {
          ok: response.ok,
          status: response.status,
          svg: svg && svg.tagName.toLowerCase() === 'svg' ? svg.outerHTML : ''
        };
      }
      else {
        return {
          ok: response.ok,
          status: response.status,
          svg: null
        };
      }
    }));
    iconFiles.set(url, request);
    return request;
  }
};

const iconCss = ":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{display:inline-block;width:1em;height:1em;contain:strict;box-sizing:content-box !important}.icon,svg{display:block;height:100%;width:100%}";

var __awaiter$1 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) { try {
      step(generator.next(value));
    }
    catch (e) {
      reject(e);
    } }
    function rejected(value) { try {
      step(generator["throw"](value));
    }
    catch (e) {
      reject(e);
    } }
    function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
const parser = new DOMParser();
const Icon = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.slLoad = index.createEvent(this, "sl-load", 7);
    this.slError = index.createEvent(this, "sl-error", 7);
    /** The name of a registered custom icon library. */
    this.library = 'default';
  }
  handleChange() {
    this.setIcon();
  }
  connectedCallback() {
    iconLibraryRegistry.watchIcon(this.host);
  }
  componentDidLoad() {
    this.setIcon();
  }
  disconnectedCallback() {
    iconLibraryRegistry.unwatchIcon(this.host);
  }
  /** @internal Fetches the icon and redraws it. Used to handle library registrations. */
  redraw() {
    return __awaiter$1(this, void 0, void 0, function* () {
      this.setIcon();
    });
  }
  getLabel() {
    let label = '';
    if (this.label) {
      label = this.label;
    }
    else if (this.name) {
      label = this.name.replace(/-/g, ' ');
    }
    else if (this.src) {
      label = this.src.replace(/.*\//, '').replace(/-/g, ' ').replace(/\.svg/i, '');
    }
    return label;
  }
  setIcon() {
    return __awaiter$1(this, void 0, void 0, function* () {
      const library = iconLibraryRegistry.getLibrary(this.library);
      let url = this.src;
      if (this.name && library) {
        url = library.resolver(this.name);
      }
      if (url) {
        try {
          const file = yield requestIcon(url);
          if (file.ok) {
            const doc = parser.parseFromString(file.svg, 'text/html');
            const svg = doc.body.querySelector('svg');
            if (svg) {
              if (library && library.mutator) {
                library.mutator(svg);
              }
              this.svg = svg.outerHTML;
              this.slLoad.emit();
            }
            else {
              this.svg = '';
              this.slError.emit({ status: file.status });
            }
          }
        }
        catch (_a) {
          this.slError.emit();
        }
      }
      else if (this.svg) {
        // If we can't resolve a URL and an icon was previously set, remove it
        this.svg = null;
      }
    });
  }
  render() {
    return index.h("div", { part: "base", class: "icon", role: "img", "aria-label": this.getLabel(), innerHTML: this.svg });
  }
  static get assetsDirs() { return ["icons"]; }
  get host() { return index.getElement(this); }
  static get watchers() { return {
    "name": ["handleChange"],
    "src": ["handleChange"],
    "library": ["handleChange"]
  }; }
};
Icon.style = iconCss;

exports.sl_icon = Icon;
