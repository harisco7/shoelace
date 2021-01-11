export { setAssetPath } from '@stencil/core/internal/client';

const defineCustomElements = (opts) => {
  if (typeof customElements !== 'undefined') {
    [
      
    ].forEach(cmp => {
      if (!customElements.get(cmp.is)) {
        customElements.define(cmp.is, cmp, opts);
      }
    });
  }
};

export { defineCustomElements };
