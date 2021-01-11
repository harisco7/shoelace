import { r as registerInstance } from './index-a0f9580d.js';
import { u as unregisterLibrary, r as registerLibrary } from './icon-library-registry-4dfb0fe6.js';

const iconLibraryCss = ":host{display:none}";

const IconLibrary = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  handleUpdate() {
    // Subsequent registrations with the same name will invalidate existing ones
    this.register();
  }
  connectedCallback() {
    if (this.name && this.resolver) {
      this.register();
    }
  }
  disconnectedCallback() {
    unregisterLibrary(this.name);
  }
  register() {
    const { name, resolver, mutator } = this;
    registerLibrary(name, resolver, mutator);
  }
  render() {
    return null;
  }
  static get watchers() { return {
    "name": ["handleUpdate"],
    "resolver": ["handleUpdate"],
    "mutator": ["handleUpdate"]
  }; }
};
IconLibrary.style = iconLibraryCss;

export { IconLibrary as sl_icon_library };
