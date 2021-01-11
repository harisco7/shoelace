System.register([], function (t) {
  'use strict';
  return {
    execute: function () {
      t({ g: e, l: l, s: r, u: i });
      function e(t, e) {
        return {
          top: Math.round(t.getBoundingClientRect().top - e.getBoundingClientRect().top),
          left: Math.round(t.getBoundingClientRect().left - e.getBoundingClientRect().left)
        };
      }
      var o = new Set();
      function l(t) {
        o.add(t);
        document.body.classList.add('sl-scroll-lock');
      }
      function i(t) {
        o.delete(t);
        if (o.size === 0) {
          document.body.classList.remove('sl-scroll-lock');
        }
      }
      function r(t, o, l, i) {
        if (l === void 0) {
          l = 'vertical';
        }
        if (i === void 0) {
          i = 'smooth';
        }
        var r = e(t, o);
        var c = r.top + o.scrollTop;
        var n = r.left + o.scrollLeft;
        var s = o.scrollLeft;
        var f = o.scrollLeft + o.offsetWidth;
        var a = o.scrollTop;
        var d = o.scrollTop + o.offsetHeight;
        if (l === 'horizontal' || l === 'both') {
          if (n < s) {
            o.scrollTo({ left: n, behavior: i });
          } else if (n + t.clientWidth > f) {
            o.scrollTo({ left: n - o.offsetWidth + t.clientWidth, behavior: i });
          }
        }
        if (l === 'vertical' || l === 'both') {
          if (c < a) {
            o.scrollTo({ top: c, behavior: i });
          } else if (c + t.clientHeight > d) {
            o.scrollTo({ top: c - o.offsetHeight + t.clientHeight, behavior: i });
          }
        }
      }
    }
  };
});
