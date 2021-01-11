System.register(['./p-351060b9.system.js'], function (t) {
  'use strict';
  var e;
  return {
    setters: [
      function (t) {
        e = t.r;
      }
    ],
    execute: function () {
      function i(t, e) {
        e = Object.assign({ unit: 'bytes', locale: undefined }, e);
        var i = ['B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        var r = ['b', 'kbit', 'Mbit', 'Gbit', 'Tbit', 'Pbit', 'Ebit', 'Zbit', 'Ybit'];
        var n = e.unit === 'bytes' ? i : r;
        var a = t < 0;
        t = Math.abs(t);
        if (t === 0) return '0 B';
        var s = Math.min(Math.floor(Math.log10(t) / 3), n.length - 1);
        var u = Number((t / Math.pow(1e3, s)).toPrecision(3));
        var o = u.toLocaleString(e.locale);
        var b = a ? '-' : '';
        return '' + b + o + ' ' + n[s];
      }
      var r = t(
        'sl_format_bytes',
        (function () {
          function t(t) {
            e(this, t);
            this.value = 0;
            this.unit = 'bytes';
          }
          t.prototype.render = function () {
            return i(this.value, { unit: this.unit, locale: this.locale });
          };
          return t;
        })()
      );
    }
  };
});
