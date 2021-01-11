var __spreadArrays =
  (this && this.__spreadArrays) ||
  function () {
    for (var r = 0, e = 0, t = arguments.length; e < t; e++) r += arguments[e].length;
    for (var n = Array(r), s = 0, e = 0; e < t; e++)
      for (var u = arguments[e], o = 0, a = u.length; o < a; o++, s++) n[s] = u[o];
    return n;
  };
System.register([], function (r) {
  'use strict';
  return {
    execute: function () {
      r({ g: e, h: t });
      function e(r) {
        var e = r ? r.assignedNodes({ flatten: true }) : [];
        var t = '';
        __spreadArrays(e).map(function (r) {
          if (r.nodeType === Node.TEXT_NODE) {
            t += r.textContent;
          }
        });
        return t;
      }
      function t(r, e) {
        if (e) {
          return r.querySelector('[slot="' + e + '"]') !== null;
        }
        return __spreadArrays(r.childNodes).some(function (r) {
          if (r.nodeType === r.TEXT_NODE && r.textContent.trim() !== '') {
            return true;
          }
          if (r.nodeType === r.ELEMENT_NODE) {
            var e = r;
            if (!e.hasAttribute('slot')) {
              return true;
            }
          }
          return false;
        });
      }
    }
  };
});
