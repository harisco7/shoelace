import { r as registerInstance, c as createEvent, h, g as getElement } from './index-30311a18.js';

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
    function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
    function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
const includeFiles = new Map();
const requestInclude = (src, mode = 'cors') => __awaiter(void 0, void 0, void 0, function* () {
  if (includeFiles.has(src)) {
    return includeFiles.get(src);
  }
  else {
    const request = fetch(src, { mode: mode }).then((response) => __awaiter(void 0, void 0, void 0, function* () {
      return {
        ok: response.ok,
        status: response.status,
        html: yield response.text()
      };
    }));
    includeFiles.set(src, request);
    return request;
  }
});

const includeCss = ":host{display:block}";

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
const Include = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.slLoad = createEvent(this, "sl-load", 7);
    this.slError = createEvent(this, "sl-error", 7);
    this.html = '';
    /** The fetch mode to use. */
    this.mode = 'cors';
    /**
     * Allows included scripts to be executed. You must ensure the content you're including is trusted, otherwise this
     * option can lead to XSS vulnerabilities in your app!
     */
    this.allowScripts = false;
  }
  handleSrcChange() {
    this.loadSource();
  }
  componentWillLoad() {
    this.loadSource();
  }
  executeScript(script) {
    // Create a copy of the script and swap it out so the browser executes it
    const newScript = document.createElement('script');
    [...script.attributes].map(attr => newScript.setAttribute(attr.name, attr.value));
    newScript.textContent = script.textContent;
    script.parentNode.replaceChild(newScript, script);
  }
  loadSource() {
    return __awaiter$1(this, void 0, void 0, function* () {
      try {
        const src = this.src;
        const file = yield requestInclude(src, this.mode);
        // If the src changed since the request started do nothing, otherwise we risk overwriting a subsequent response
        if (src !== this.src) {
          return;
        }
        if (!file.ok) {
          this.slError.emit({ status: file.status });
          return;
        }
        this.host.innerHTML = file.html;
        if (this.allowScripts) {
          [...this.host.querySelectorAll('script')].map(script => this.executeScript(script));
        }
        this.slLoad.emit();
      }
      catch (_a) {
        this.slError.emit();
      }
    });
  }
  render() {
    return h("slot", null);
  }
  get host() { return getElement(this); }
  static get watchers() { return {
    "src": ["handleSrcChange"]
  }; }
};
Include.style = includeCss;

export { Include as sl_include };
