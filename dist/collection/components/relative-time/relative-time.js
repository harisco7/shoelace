import { Component, Prop, State, Watch, h } from '@stencil/core';
/**
 * @since 2.0
 * @status stable
 */
var RelativeTime = /** @class */ (function () {
  function RelativeTime() {
    this.isoTime = '';
    this.relativeTime = '';
    this.titleTime = '';
    /** The formatting style to use. */
    this.format = 'long';
    /**
     * When `auto`, values such as "yesterday" and "tomorrow" will be shown when possible. When `always`, values such as
     * "1 day ago" and "in 1 day" will be shown.
     */
    this.numeric = 'auto';
    /** Keep the displayed value up to date as time passes. */
    this.sync = false;
  }
  RelativeTime.prototype.connectedCallback = function () {
    this.updateTime();
  };
  RelativeTime.prototype.disconnectedCallback = function () {
    clearTimeout(this.updateTimeout);
  };
  RelativeTime.prototype.updateTime = function () {
    var _this = this;
    var now = new Date();
    var date = new Date(this.date);
    // Check for an invalid date
    if (isNaN(date.getMilliseconds())) {
      this.relativeTime = '';
      this.isoTime = '';
      return;
    }
    var diff = +date - +now;
    var availableUnits = [
      { max: 2760000, value: 60000, unit: 'minute' },
      { max: 72000000, value: 3600000, unit: 'hour' },
      { max: 518400000, value: 86400000, unit: 'day' },
      { max: 2419200000, value: 604800000, unit: 'week' },
      { max: 28512000000, value: 2592000000, unit: 'month' },
      { max: Infinity, value: 31536000000, unit: 'year' }
    ];
    var _a = availableUnits.find(function (unit) { return Math.abs(diff) < unit.max; }), unit = _a.unit, value = _a.value;
    this.isoTime = date.toISOString();
    this.titleTime = new Intl.DateTimeFormat(this.locale, {
      month: 'long',
      year: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      timeZoneName: 'short'
    }).format(date);
    // @ts-ignore - https://github.com/microsoft/TypeScript/issues/29129
    this.relativeTime = new Intl.RelativeTimeFormat(this.locale, {
      numeric: this.numeric,
      style: this.format
    }).format(Math.round(diff / value), unit);
    // If sync is enabled, update as time passes
    clearTimeout(this.updateTimeout);
    if (this.sync) {
      // Calculates the number of milliseconds until the next respective unit changes. This ensures that all components
      // update at the same time which is less distracting than updating independently.
      var getTimeUntilNextUnit = function (unit) {
        var units = { second: 1000, minute: 60000, hour: 3600000, day: 86400000 };
        var value = units[unit];
        return value - (now.getTime() % value);
      };
      var nextInterval = void 0;
      // NOTE: this could be optimized to determine when the next update should actually occur, but the size and cost of
      // that logic probably isn't worth the performance benefit
      if (unit === 'minute') {
        nextInterval = getTimeUntilNextUnit('second');
      }
      else if (unit === 'hour') {
        nextInterval = getTimeUntilNextUnit('minute');
      }
      else if (unit === 'day') {
        nextInterval = getTimeUntilNextUnit('hour');
      }
      else {
        // Cap updates at once per day. It's unlikely a user will reach this value, plus setTimeout has a limit on the
        // value it can accept. https://stackoverflow.com/a/3468650/567486
        nextInterval = getTimeUntilNextUnit('day'); // next day
      }
      this.updateTimeout = setTimeout(function () { return _this.updateTime(); }, nextInterval);
    }
  };
  RelativeTime.prototype.render = function () {
    return (h("time", { dateTime: this.isoTime, title: this.titleTime }, this.relativeTime));
  };
  Object.defineProperty(RelativeTime, "is", {
    get: function () { return "sl-relative-time"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(RelativeTime, "encapsulation", {
    get: function () { return "shadow"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(RelativeTime, "properties", {
    get: function () { return {
      "date": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "Date | string",
          "resolved": "Date | string",
          "references": {
            "Date": {
              "location": "global"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The date from which to calculate time from."
        },
        "attribute": "date",
        "reflect": false
      },
      "locale": {
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
          "text": "The locale to use when formatting the number."
        },
        "attribute": "locale",
        "reflect": false
      },
      "format": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'long' | 'short' | 'narrow'",
          "resolved": "\"long\" | \"narrow\" | \"short\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The formatting style to use."
        },
        "attribute": "format",
        "reflect": false,
        "defaultValue": "'long'"
      },
      "numeric": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'always' | 'auto'",
          "resolved": "\"always\" | \"auto\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "When `auto`, values such as \"yesterday\" and \"tomorrow\" will be shown when possible. When `always`, values such as\n\"1 day ago\" and \"in 1 day\" will be shown."
        },
        "attribute": "numeric",
        "reflect": false,
        "defaultValue": "'auto'"
      },
      "sync": {
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
          "text": "Keep the displayed value up to date as time passes."
        },
        "attribute": "sync",
        "reflect": false,
        "defaultValue": "false"
      }
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(RelativeTime, "states", {
    get: function () { return {
      "isoTime": {},
      "relativeTime": {},
      "titleTime": {}
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(RelativeTime, "watchers", {
    get: function () { return [{
        "propName": "date",
        "methodName": "updateTime"
      }, {
        "propName": "locale",
        "methodName": "updateTime"
      }, {
        "propName": "format",
        "methodName": "updateTime"
      }, {
        "propName": "numeric",
        "methodName": "updateTime"
      }, {
        "propName": "sync",
        "methodName": "updateTime"
      }]; },
    enumerable: false,
    configurable: true
  });
  return RelativeTime;
}());
export { RelativeTime };
