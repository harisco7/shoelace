System.register(['./p-351060b9.system.js'], function (n) {
  'use strict';
  var t;
  return {
    setters: [
      function (n) {
        t = n.a;
      }
    ],
    execute: function () {
      n({ a: i, g: f, r: o, u: c, w: u });
      var r = [
        {
          name: 'default',
          resolver: function (n) {
            return t('./icons/' + n + '.svg');
          }
        }
      ];
      var e = [];
      function u(n) {
        e.push(n);
      }
      function i(n) {
        e = e.filter(function (t) {
          return t !== n;
        });
      }
      function f(n) {
        return r.filter(function (t) {
          return t.name === n;
        })[0];
      }
      function o(n, t, u) {
        c(n);
        r.push({ name: n, resolver: t, mutator: u });
        e.map(function (t) {
          if (t.library === n) {
            t.redraw();
          }
        });
      }
      function c(n) {
        r = r.filter(function (t) {
          return t.name !== n;
        });
      }
    }
  };
});
