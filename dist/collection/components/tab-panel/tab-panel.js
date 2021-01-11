import { Component, Element, Host, Prop, h } from '@stencil/core';
var id = 0;
/**
 * @since 2.0
 * @status stable
 *
 * @slot - The tab panel's content.
 *
 * @part base - The component's base wrapper.
 */
var TabPanel = /** @class */ (function () {
  function TabPanel() {
    this.componentId = "tab-panel-" + ++id;
    /** The tab panel's name. */
    this.name = '';
    /** When true, the tab panel will be shown. */
    this.active = false;
  }
  TabPanel.prototype.render = function () {
    return (
    // If the user didn't provide an ID, we'll set one so we can link tabs and tab panels with aria labels
    h(Host, { id: this.host.id || this.componentId, style: { display: this.active ? 'block' : 'none' } },
      h("div", { part: "base", class: "tab-panel", role: "tabpanel", "aria-selected": this.active ? 'true' : 'false', "aria-hidden": this.active ? 'false' : 'true' },
        h("slot", null))));
  };
  Object.defineProperty(TabPanel, "is", {
    get: function () { return "sl-tab-panel"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(TabPanel, "encapsulation", {
    get: function () { return "shadow"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(TabPanel, "originalStyleUrls", {
    get: function () { return {
      "$": ["tab-panel.scss"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(TabPanel, "styleUrls", {
    get: function () { return {
      "$": ["tab-panel.css"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(TabPanel, "properties", {
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
          "text": "The tab panel's name."
        },
        "attribute": "name",
        "reflect": false,
        "defaultValue": "''"
      },
      "active": {
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
          "text": "When true, the tab panel will be shown."
        },
        "attribute": "active",
        "reflect": false,
        "defaultValue": "false"
      }
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(TabPanel, "elementRef", {
    get: function () { return "host"; },
    enumerable: false,
    configurable: true
  });
  return TabPanel;
}());
export { TabPanel };
