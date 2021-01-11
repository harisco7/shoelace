System.register(['./p-351060b9.system.js', './p-6a46304e.system.js'], function (e) {
  'use strict';
  var t, n, r;
  return {
    setters: [
      function (e) {
        t = e.r;
      },
      function (e) {
        n = e.u;
        r = e.r;
      }
    ],
    execute: function () {
      var o = ':host{display:none}';
      var s = e(
        'sl_icon_library',
        (function () {
          function e(e) {
            t(this, e);
          }
          e.prototype.handleUpdate = function () {
            this.register();
          };
          e.prototype.connectedCallback = function () {
            if (this.name && this.resolver) {
              this.register();
            }
          };
          e.prototype.disconnectedCallback = function () {
            n(this.name);
          };
          e.prototype.register = function () {
            var e = this,
              t = e.name,
              n = e.resolver,
              o = e.mutator;
            r(t, n, o);
          };
          e.prototype.render = function () {
            return null;
          };
          Object.defineProperty(e, 'watchers', {
            get: function () {
              return { name: ['handleUpdate'], resolver: ['handleUpdate'], mutator: ['handleUpdate'] };
            },
            enumerable: false,
            configurable: true
          });
          return e;
        })()
      );
      s.style = o;
    }
  };
});
