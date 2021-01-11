import { r as t } from './p-32052503.js';
import { u as e, r as s } from './p-67dfcaed.js';
const a = class {
  constructor(e) {
    t(this, e);
  }
  handleUpdate() {
    this.register();
  }
  connectedCallback() {
    this.name && this.resolver && this.register();
  }
  disconnectedCallback() {
    e(this.name);
  }
  register() {
    const { name: t, resolver: e, mutator: a } = this;
    s(t, e, a);
  }
  render() {
    return null;
  }
  static get watchers() {
    return { name: ['handleUpdate'], resolver: ['handleUpdate'], mutator: ['handleUpdate'] };
  }
};
a.style = ':host{display:none}';
export { a as sl_icon_library };
