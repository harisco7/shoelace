var __extends =
  (this && this.__extends) ||
  (function () {
    var e = function (t, r) {
      e =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, t) {
            e.__proto__ = t;
          }) ||
        function (e, t) {
          for (var r in t) if (Object.prototype.hasOwnProperty.call(t, r)) e[r] = t[r];
        };
      return e(t, r);
    };
    return function (t, r) {
      e(t, r);
      function n() {
        this.constructor = t;
      }
      t.prototype = r === null ? Object.create(r) : ((n.prototype = r.prototype), new n());
    };
  })();
var __awaiter =
  (this && this.__awaiter) ||
  function (e, t, r, n) {
    function a(e) {
      return e instanceof r
        ? e
        : new r(function (t) {
            t(e);
          });
    }
    return new (r || (r = Promise))(function (r, i) {
      function s(e) {
        try {
          l(n.next(e));
        } catch (e) {
          i(e);
        }
      }
      function o(e) {
        try {
          l(n['throw'](e));
        } catch (e) {
          i(e);
        }
      }
      function l(e) {
        e.done ? r(e.value) : a(e.value).then(s, o);
      }
      l((n = n.apply(e, t || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (e, t) {
    var r = {
        label: 0,
        sent: function () {
          if (i[0] & 1) throw i[1];
          return i[1];
        },
        trys: [],
        ops: []
      },
      n,
      a,
      i,
      s;
    return (
      (s = { next: o(0), throw: o(1), return: o(2) }),
      typeof Symbol === 'function' &&
        (s[Symbol.iterator] = function () {
          return this;
        }),
      s
    );
    function o(e) {
      return function (t) {
        return l([e, t]);
      };
    }
    function l(s) {
      if (n) throw new TypeError('Generator is already executing.');
      while (r)
        try {
          if (
            ((n = 1),
            a &&
              (i = s[0] & 2 ? a['return'] : s[0] ? a['throw'] || ((i = a['return']) && i.call(a), 0) : a.next) &&
              !(i = i.call(a, s[1])).done)
          )
            return i;
          if (((a = 0), i)) s = [s[0] & 2, i.value];
          switch (s[0]) {
            case 0:
            case 1:
              i = s;
              break;
            case 4:
              r.label++;
              return { value: s[1], done: false };
            case 5:
              r.label++;
              a = s[1];
              s = [0];
              continue;
            case 7:
              s = r.ops.pop();
              r.trys.pop();
              continue;
            default:
              if (!((i = r.trys), (i = i.length > 0 && i[i.length - 1])) && (s[0] === 6 || s[0] === 2)) {
                r = 0;
                continue;
              }
              if (s[0] === 3 && (!i || (s[1] > i[0] && s[1] < i[3]))) {
                r.label = s[1];
                break;
              }
              if (s[0] === 6 && r.label < i[1]) {
                r.label = i[1];
                i = s;
                break;
              }
              if (i && r.label < i[2]) {
                r.label = i[2];
                r.ops.push(s);
                break;
              }
              if (i[2]) r.ops.pop();
              r.trys.pop();
              continue;
          }
          s = t.call(e, r);
        } catch (e) {
          s = [6, e];
          a = 0;
        } finally {
          n = i = 0;
        }
      if (s[0] & 5) throw s[1];
      return { value: s[0] ? s[1] : void 0, done: true };
    }
  };
var __spreadArrays =
  (this && this.__spreadArrays) ||
  function () {
    for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
    for (var n = Array(e), a = 0, t = 0; t < r; t++)
      for (var i = arguments[t], s = 0, o = i.length; s < o; s++, a++) n[a] = i[s];
    return n;
  };
System.register([], function (e, t) {
  'use strict';
  return {
    execute: function () {
      var r = this;
      var n = e('N', 'shoelace');
      var a;
      var i;
      var s;
      var o = false;
      var l = false;
      var f = false;
      var $ = false;
      var u = false;
      var c = e('w', typeof window !== 'undefined' ? window : {});
      var v = e('d', c.document || { head: {} });
      var d = {
        $flags$: 0,
        $resourcesUrl$: '',
        jmp: function (e) {
          return e();
        },
        raf: function (e) {
          return requestAnimationFrame(e);
        },
        ael: function (e, t, r, n) {
          return e.addEventListener(t, r, n);
        },
        rel: function (e, t, r, n) {
          return e.removeEventListener(t, r, n);
        },
        ce: function (e, t) {
          return new CustomEvent(e, t);
        }
      };
      var h = (function () {
        return (v.head.attachShadow + '').indexOf('[native') > -1;
      })();
      var m = e('p', function (e) {
        return Promise.resolve(e);
      });
      var p = (function () {
        try {
          new CSSStyleSheet();
          return true;
        } catch (e) {}
        return false;
      })();
      var g = '{visibility:hidden}.hydrated{visibility:inherit}';
      var y = function (e, t) {
        if (t === void 0) {
          t = '';
        }
        {
          return function () {
            return;
          };
        }
      };
      var b = function (e, t) {
        {
          return function () {
            return;
          };
        }
      };
      var w = new WeakMap();
      var R = function (e, t, r) {
        var n = Me.get(e);
        if (p && r) {
          n = n || new CSSStyleSheet();
          n.replace(t);
        } else {
          n = t;
        }
        Me.set(e, n);
      };
      var N = function (e, t, r, n) {
        var a = k(t);
        var i = Me.get(a);
        e = e.nodeType === 11 ? e : v;
        if (i) {
          if (typeof i === 'string') {
            e = e.head || e;
            var s = w.get(e);
            var o = void 0;
            if (!s) {
              w.set(e, (s = new Set()));
            }
            if (!s.has(a)) {
              {
                {
                  o = v.createElement('style');
                  o.innerHTML = i;
                }
                e.insertBefore(o, e.querySelector('link'));
              }
              if (s) {
                s.add(a);
              }
            }
          } else if (!e.adoptedStyleSheets.includes(i)) {
            e.adoptedStyleSheets = __spreadArrays(e.adoptedStyleSheets, [i]);
          }
        }
        return a;
      };
      var _ = function (e) {
        var t = e.$cmpMeta$;
        var r = e.$hostElement$;
        var n = t.$flags$;
        var a = y('attachStyles', t.$tagName$);
        var i = N(h && r.shadowRoot ? r.shadowRoot : r.getRootNode(), t);
        if (n & 10) {
          r['s-sc'] = i;
          r.classList.add(i + '-h');
        }
        a();
      };
      var k = function (e, t) {
        return 'sc-' + e.$tagName$;
      };
      var x = {};
      var S = 'http://www.w3.org/2000/svg';
      var T = 'http://www.w3.org/1999/xhtml';
      var C = function (e) {
        return e != null;
      };
      var j = function (e) {
        e = typeof e;
        return e === 'object' || e === 'function';
      };
      var E = e('h', function (e, t) {
        var r = [];
        for (var n = 2; n < arguments.length; n++) {
          r[n - 2] = arguments[n];
        }
        var a = null;
        var i = null;
        var s = null;
        var o = false;
        var l = false;
        var f = [];
        var $ = function (t) {
          for (var r = 0; r < t.length; r++) {
            a = t[r];
            if (Array.isArray(a)) {
              $(a);
            } else if (a != null && typeof a !== 'boolean') {
              if ((o = typeof e !== 'function' && !j(a))) {
                a = String(a);
              }
              if (o && l) {
                f[f.length - 1].$text$ += a;
              } else {
                f.push(o ? P(null, a) : a);
              }
              l = o;
            }
          }
        };
        $(r);
        if (t) {
          if (t.key) {
            i = t.key;
          }
          if (t.name) {
            s = t.name;
          }
          {
            var u = t.className || t.class;
            if (u) {
              t.class =
                typeof u !== 'object'
                  ? u
                  : Object.keys(u)
                      .filter(function (e) {
                        return u[e];
                      })
                      .join(' ');
            }
          }
        }
        if (typeof e === 'function') {
          return e(t === null ? {} : t, f, M);
        }
        var c = P(e, null);
        c.$attrs$ = t;
        if (f.length > 0) {
          c.$children$ = f;
        }
        {
          c.$key$ = i;
        }
        {
          c.$name$ = s;
        }
        return c;
      });
      var P = function (e, t) {
        var r = { $flags$: 0, $tag$: e, $text$: t, $elm$: null, $children$: null };
        {
          r.$attrs$ = null;
        }
        {
          r.$key$ = null;
        }
        {
          r.$name$ = null;
        }
        return r;
      };
      var O = e('H', {});
      var A = function (e) {
        return e && e.$tag$ === O;
      };
      var M = {
        forEach: function (e, t) {
          return e.map(I).forEach(t);
        },
        map: function (e, t) {
          return e.map(I).map(t).map(L);
        }
      };
      var I = function (e) {
        return {
          vattrs: e.$attrs$,
          vchildren: e.$children$,
          vkey: e.$key$,
          vname: e.$name$,
          vtag: e.$tag$,
          vtext: e.$text$
        };
      };
      var L = function (e) {
        if (typeof e.vtag === 'function') {
          var t = Object.assign({}, e.vattrs);
          if (e.vkey) {
            t.key = e.vkey;
          }
          if (e.vname) {
            t.name = e.vname;
          }
          return E.apply(void 0, __spreadArrays([e.vtag, t], e.vchildren || []));
        }
        var r = P(e.vtag, e.vtext);
        r.$attrs$ = e.vattrs;
        r.$children$ = e.vchildren;
        r.$key$ = e.vkey;
        r.$name$ = e.vname;
        return r;
      };
      var B = function (e, t, r, n, a, i) {
        if (r !== n) {
          var s = Ee(e, t);
          var o = t.toLowerCase();
          if (t === 'class') {
            var l = e.classList;
            var f = U(r);
            var $ = U(n);
            l.remove.apply(
              l,
              f.filter(function (e) {
                return e && !$.includes(e);
              })
            );
            l.add.apply(
              l,
              $.filter(function (e) {
                return e && !f.includes(e);
              })
            );
          } else if (t === 'style') {
            {
              for (var u in r) {
                if (!n || n[u] == null) {
                  if (u.includes('-')) {
                    e.style.removeProperty(u);
                  } else {
                    e.style[u] = '';
                  }
                }
              }
            }
            for (var u in n) {
              if (!r || n[u] !== r[u]) {
                if (u.includes('-')) {
                  e.style.setProperty(u, n[u]);
                } else {
                  e.style[u] = n[u];
                }
              }
            }
          } else if (t === 'key');
          else if (t === 'ref') {
            if (n) {
              n(e);
            }
          } else if (!s && t[0] === 'o' && t[1] === 'n') {
            if (t[2] === '-') {
              t = t.slice(3);
            } else if (Ee(c, o)) {
              t = o.slice(2);
            } else {
              t = o[2] + t.slice(3);
            }
            if (r) {
              d.rel(e, t, r, false);
            }
            if (n) {
              d.ael(e, t, n, false);
            }
          } else {
            var v = j(n);
            if ((s || (v && n !== null)) && !a) {
              try {
                if (!e.tagName.includes('-')) {
                  var h = n == null ? '' : n;
                  if (t === 'list') {
                    s = false;
                  } else if (r == null || e[t] != h) {
                    e[t] = h;
                  }
                } else {
                  e[t] = n;
                }
              } catch (e) {}
            }
            if (n == null || n === false) {
              if (n !== false || e.getAttribute(t) === '') {
                {
                  e.removeAttribute(t);
                }
              }
            } else if ((!s || i & 4 || a) && !v) {
              n = n === true ? '' : n;
              {
                e.setAttribute(t, n);
              }
            }
          }
        }
      };
      var z = /\s/;
      var U = function (e) {
        return !e ? [] : e.split(z);
      };
      var H = function (e, t, r, n) {
        var a = t.$elm$.nodeType === 11 && t.$elm$.host ? t.$elm$.host : t.$elm$;
        var i = (e && e.$attrs$) || x;
        var s = t.$attrs$ || x;
        {
          for (n in i) {
            if (!(n in s)) {
              B(a, n, i[n], undefined, r, t.$flags$);
            }
          }
        }
        for (n in s) {
          B(a, n, i[n], s[n], r, t.$flags$);
        }
      };
      var V = function (e, t, r, n) {
        var l = t.$children$[r];
        var u = 0;
        var c;
        var d;
        var h;
        if (!o) {
          f = true;
          if (l.$tag$ === 'slot') {
            if (a) {
              n.classList.add(a + '-s');
            }
            l.$flags$ |= l.$children$ ? 2 : 1;
          }
        }
        if (l.$text$ !== null) {
          c = l.$elm$ = v.createTextNode(l.$text$);
        } else if (l.$flags$ & 1) {
          c = l.$elm$ = v.createTextNode('');
        } else {
          if (!$) {
            $ = l.$tag$ === 'svg';
          }
          c = l.$elm$ = v.createElementNS($ ? S : T, l.$flags$ & 2 ? 'slot-fb' : l.$tag$);
          if ($ && l.$tag$ === 'foreignObject') {
            $ = false;
          }
          {
            H(null, l, $);
          }
          if (C(a) && c['s-si'] !== a) {
            c.classList.add((c['s-si'] = a));
          }
          if (l.$children$) {
            for (u = 0; u < l.$children$.length; ++u) {
              d = V(e, l, u, c);
              if (d) {
                c.appendChild(d);
              }
            }
          }
          {
            if (l.$tag$ === 'svg') {
              $ = false;
            } else if (c.tagName === 'foreignObject') {
              $ = true;
            }
          }
        }
        {
          c['s-hn'] = s;
          if (l.$flags$ & (2 | 1)) {
            c['s-sr'] = true;
            c['s-cr'] = i;
            c['s-sn'] = l.$name$ || '';
            h = e && e.$children$ && e.$children$[r];
            if (h && h.$tag$ === l.$tag$ && e.$elm$) {
              q(e.$elm$, false);
            }
          }
        }
        return c;
      };
      var q = function (e, t) {
        d.$flags$ |= 1;
        var r = e.childNodes;
        for (var n = r.length - 1; n >= 0; n--) {
          var a = r[n];
          if (a['s-hn'] !== s && a['s-ol']) {
            K(a).insertBefore(a, J(a));
            a['s-ol'].remove();
            a['s-ol'] = undefined;
            f = true;
          }
          if (t) {
            q(a, t);
          }
        }
        d.$flags$ &= ~1;
      };
      var W = function (e, t, r, n, a, i) {
        var o = (e['s-cr'] && e['s-cr'].parentNode) || e;
        var l;
        if (o.shadowRoot && o.tagName === s) {
          o = o.shadowRoot;
        }
        for (; a <= i; ++a) {
          if (n[a]) {
            l = V(null, r, a, e);
            if (l) {
              n[a].$elm$ = l;
              o.insertBefore(l, J(t));
            }
          }
        }
      };
      var D = function (e, t, r, n, a) {
        for (; t <= r; ++t) {
          if ((n = e[t])) {
            a = n.$elm$;
            te(n);
            {
              l = true;
              if (a['s-ol']) {
                a['s-ol'].remove();
              } else {
                q(a, true);
              }
            }
            a.remove();
          }
        }
      };
      var F = function (e, t, r, n) {
        var a = 0;
        var i = 0;
        var s = 0;
        var o = 0;
        var l = t.length - 1;
        var f = t[0];
        var $ = t[l];
        var u = n.length - 1;
        var c = n[0];
        var v = n[u];
        var d;
        var h;
        while (a <= l && i <= u) {
          if (f == null) {
            f = t[++a];
          } else if ($ == null) {
            $ = t[--l];
          } else if (c == null) {
            c = n[++i];
          } else if (v == null) {
            v = n[--u];
          } else if (G(f, c)) {
            Q(f, c);
            f = t[++a];
            c = n[++i];
          } else if (G($, v)) {
            Q($, v);
            $ = t[--l];
            v = n[--u];
          } else if (G(f, v)) {
            if (f.$tag$ === 'slot' || v.$tag$ === 'slot') {
              q(f.$elm$.parentNode, false);
            }
            Q(f, v);
            e.insertBefore(f.$elm$, $.$elm$.nextSibling);
            f = t[++a];
            v = n[--u];
          } else if (G($, c)) {
            if (f.$tag$ === 'slot' || v.$tag$ === 'slot') {
              q($.$elm$.parentNode, false);
            }
            Q($, c);
            e.insertBefore($.$elm$, f.$elm$);
            $ = t[--l];
            c = n[++i];
          } else {
            s = -1;
            {
              for (o = a; o <= l; ++o) {
                if (t[o] && t[o].$key$ !== null && t[o].$key$ === c.$key$) {
                  s = o;
                  break;
                }
              }
            }
            if (s >= 0) {
              h = t[s];
              if (h.$tag$ !== c.$tag$) {
                d = V(t && t[i], r, s, e);
              } else {
                Q(h, c);
                t[s] = undefined;
                d = h.$elm$;
              }
              c = n[++i];
            } else {
              d = V(t && t[i], r, i, e);
              c = n[++i];
            }
            if (d) {
              {
                K(f.$elm$).insertBefore(d, J(f.$elm$));
              }
            }
          }
        }
        if (a > l) {
          W(e, n[u + 1] == null ? null : n[u + 1].$elm$, r, n, i, u);
        } else if (i > u) {
          D(t, a, l);
        }
      };
      var G = function (e, t) {
        if (e.$tag$ === t.$tag$) {
          if (e.$tag$ === 'slot') {
            return e.$name$ === t.$name$;
          }
          {
            return e.$key$ === t.$key$;
          }
        }
        return false;
      };
      var J = function (e) {
        return (e && e['s-ol']) || e;
      };
      var K = function (e) {
        return (e['s-ol'] ? e['s-ol'] : e).parentNode;
      };
      var Q = function (e, t) {
        var r = (t.$elm$ = e.$elm$);
        var n = e.$children$;
        var a = t.$children$;
        var i = t.$tag$;
        var s = t.$text$;
        var o;
        if (s === null) {
          {
            $ = i === 'svg' ? true : i === 'foreignObject' ? false : $;
          }
          {
            if (i === 'slot');
            else {
              H(e, t, $);
            }
          }
          if (n !== null && a !== null) {
            F(r, n, t, a);
          } else if (a !== null) {
            if (e.$text$ !== null) {
              r.textContent = '';
            }
            W(r, null, t, a, 0, a.length - 1);
          } else if (n !== null) {
            D(n, 0, n.length - 1);
          }
          if ($ && i === 'svg') {
            $ = false;
          }
        } else if ((o = r['s-cr'])) {
          o.parentNode.textContent = s;
        } else if (e.$text$ !== s) {
          r.data = s;
        }
      };
      var X = function (e) {
        var t = e.childNodes;
        var r;
        var n;
        var a;
        var i;
        var s;
        var o;
        for (n = 0, a = t.length; n < a; n++) {
          r = t[n];
          if (r.nodeType === 1) {
            if (r['s-sr']) {
              s = r['s-sn'];
              r.hidden = false;
              for (i = 0; i < a; i++) {
                if (t[i]['s-hn'] !== r['s-hn']) {
                  o = t[i].nodeType;
                  if (s !== '') {
                    if (o === 1 && s === t[i].getAttribute('slot')) {
                      r.hidden = true;
                      break;
                    }
                  } else {
                    if (o === 1 || (o === 3 && t[i].textContent.trim() !== '')) {
                      r.hidden = true;
                      break;
                    }
                  }
                }
              }
            }
            X(r);
          }
        }
      };
      var Y = [];
      var Z = function (e) {
        var t;
        var r;
        var n;
        var a;
        var i;
        var s;
        var o = 0;
        var f = e.childNodes;
        var $ = f.length;
        for (; o < $; o++) {
          t = f[o];
          if (t['s-sr'] && (r = t['s-cr'])) {
            n = r.parentNode.childNodes;
            a = t['s-sn'];
            for (s = n.length - 1; s >= 0; s--) {
              r = n[s];
              if (!r['s-cn'] && !r['s-nr'] && r['s-hn'] !== t['s-hn']) {
                if (ee(r, a)) {
                  i = Y.find(function (e) {
                    return e.$nodeToRelocate$ === r;
                  });
                  l = true;
                  r['s-sn'] = r['s-sn'] || a;
                  if (i) {
                    i.$slotRefNode$ = t;
                  } else {
                    Y.push({ $slotRefNode$: t, $nodeToRelocate$: r });
                  }
                  if (r['s-sr']) {
                    Y.map(function (e) {
                      if (ee(e.$nodeToRelocate$, r['s-sn'])) {
                        i = Y.find(function (e) {
                          return e.$nodeToRelocate$ === r;
                        });
                        if (i && !e.$slotRefNode$) {
                          e.$slotRefNode$ = i.$slotRefNode$;
                        }
                      }
                    });
                  }
                } else if (
                  !Y.some(function (e) {
                    return e.$nodeToRelocate$ === r;
                  })
                ) {
                  Y.push({ $nodeToRelocate$: r });
                }
              }
            }
          }
          if (t.nodeType === 1) {
            Z(t);
          }
        }
      };
      var ee = function (e, t) {
        if (e.nodeType === 1) {
          if (e.getAttribute('slot') === null && t === '') {
            return true;
          }
          if (e.getAttribute('slot') === t) {
            return true;
          }
          return false;
        }
        if (e['s-sn'] === t) {
          return true;
        }
        return t === '';
      };
      var te = function (e) {
        {
          e.$attrs$ && e.$attrs$.ref && e.$attrs$.ref(null);
          e.$children$ && e.$children$.map(te);
        }
      };
      var re = function (e, t) {
        var r = e.$hostElement$;
        var n = e.$cmpMeta$;
        var $ = e.$vnode$ || P(null, null);
        var u = A(t) ? t : E(null, null, t);
        s = r.tagName;
        if (n.$attrsToReflect$) {
          u.$attrs$ = u.$attrs$ || {};
          n.$attrsToReflect$.map(function (e) {
            var t = e[0],
              n = e[1];
            return (u.$attrs$[n] = r[t]);
          });
        }
        u.$tag$ = null;
        u.$flags$ |= 4;
        e.$vnode$ = u;
        u.$elm$ = $.$elm$ = r.shadowRoot || r;
        {
          a = r['s-sc'];
        }
        {
          i = r['s-cr'];
          o = h && (n.$flags$ & 1) !== 0;
          l = false;
        }
        Q($, u);
        {
          d.$flags$ |= 1;
          if (f) {
            Z(u.$elm$);
            var c = void 0;
            var m = void 0;
            var p = void 0;
            var g = void 0;
            var y = void 0;
            var b = void 0;
            var w = 0;
            for (; w < Y.length; w++) {
              c = Y[w];
              m = c.$nodeToRelocate$;
              if (!m['s-ol']) {
                p = v.createTextNode('');
                p['s-nr'] = m;
                m.parentNode.insertBefore((m['s-ol'] = p), m);
              }
            }
            for (w = 0; w < Y.length; w++) {
              c = Y[w];
              m = c.$nodeToRelocate$;
              if (c.$slotRefNode$) {
                g = c.$slotRefNode$.parentNode;
                y = c.$slotRefNode$.nextSibling;
                p = m['s-ol'];
                while ((p = p.previousSibling)) {
                  b = p['s-nr'];
                  if (b && b['s-sn'] === m['s-sn'] && g === b.parentNode) {
                    b = b.nextSibling;
                    if (!b || !b['s-nr']) {
                      y = b;
                      break;
                    }
                  }
                }
                if ((!y && g !== m.parentNode) || m.nextSibling !== y) {
                  if (m !== y) {
                    if (!m['s-hn'] && m['s-ol']) {
                      m['s-hn'] = m['s-ol'].parentNode.nodeName;
                    }
                    g.insertBefore(m, y);
                  }
                }
              } else {
                if (m.nodeType === 1) {
                  m.hidden = true;
                }
              }
            }
          }
          if (l) {
            X(u.$elm$);
          }
          d.$flags$ &= ~1;
          Y.length = 0;
        }
      };
      var ne = e('g', function (e) {
        return Te(e).$hostElement$;
      });
      var ae = e('c', function (e, t, r) {
        var n = ne(e);
        return {
          emit: function (e) {
            return ie(n, t, { bubbles: !!(r & 4), composed: !!(r & 2), cancelable: !!(r & 1), detail: e });
          }
        };
      });
      var ie = function (e, t, r) {
        var n = d.ce(t, r);
        e.dispatchEvent(n);
        return n;
      };
      var se = function (e, t) {
        if (t && !e.$onRenderResolve$ && t['s-p']) {
          t['s-p'].push(
            new Promise(function (t) {
              return (e.$onRenderResolve$ = t);
            })
          );
        }
      };
      var oe = function (e, t) {
        {
          e.$flags$ |= 16;
        }
        if (e.$flags$ & 4) {
          e.$flags$ |= 512;
          return;
        }
        se(e, e.$ancestorComponent$);
        var r = function () {
          return le(e, t);
        };
        return Ve(r);
      };
      var le = function (e, t) {
        var r = y('scheduleUpdate', e.$cmpMeta$.$tagName$);
        var n = e.$lazyInstance$;
        var a;
        if (t) {
          {
            a = ve(n, 'componentWillLoad');
          }
        }
        r();
        return de(a, function () {
          return fe(e, n, t);
        });
      };
      var fe = function (e, t, n) {
        return __awaiter(r, void 0, void 0, function () {
          var r, a, i, s, o, l;
          return __generator(this, function (f) {
            r = e.$hostElement$;
            a = y('update', e.$cmpMeta$.$tagName$);
            i = r['s-rc'];
            if (n) {
              _(e);
            }
            s = y('render', e.$cmpMeta$.$tagName$);
            {
              {
                {
                  re(e, $e(e, t));
                }
              }
            }
            if (i) {
              i.map(function (e) {
                return e();
              });
              r['s-rc'] = undefined;
            }
            s();
            a();
            {
              o = r['s-p'];
              l = function () {
                return ue(e);
              };
              if (o.length === 0) {
                l();
              } else {
                Promise.all(o).then(l);
                e.$flags$ |= 4;
                o.length = 0;
              }
            }
            return [2];
          });
        });
      };
      var $e = function (e, t) {
        try {
          t = t.render();
          {
            e.$flags$ &= ~16;
          }
          {
            e.$flags$ |= 2;
          }
        } catch (t) {
          Pe(t, e.$hostElement$);
        }
        return t;
      };
      var ue = function (e) {
        var t = e.$cmpMeta$.$tagName$;
        var r = e.$hostElement$;
        var n = y('postUpdate', t);
        var a = e.$lazyInstance$;
        var i = e.$ancestorComponent$;
        if (!(e.$flags$ & 64)) {
          e.$flags$ |= 64;
          {
            he(r);
          }
          {
            ve(a, 'componentDidLoad');
          }
          n();
          {
            e.$onReadyResolve$(r);
            if (!i) {
              ce();
            }
          }
        } else {
          {
            ve(a, 'componentDidUpdate');
          }
          n();
        }
        {
          e.$onInstanceResolve$(r);
        }
        {
          if (e.$onRenderResolve$) {
            e.$onRenderResolve$();
            e.$onRenderResolve$ = undefined;
          }
          if (e.$flags$ & 512) {
            He(function () {
              return oe(e, false);
            });
          }
          e.$flags$ &= ~(4 | 512);
        }
      };
      var ce = function (e) {
        {
          he(v.documentElement);
        }
        He(function () {
          return ie(c, 'appload', { detail: { namespace: n } });
        });
      };
      var ve = function (e, t, r) {
        if (e && e[t]) {
          try {
            return e[t](r);
          } catch (e) {
            Pe(e);
          }
        }
        return undefined;
      };
      var de = function (e, t) {
        return e && e.then ? e.then(t) : t();
      };
      var he = function (e) {
        return e.classList.add('hydrated');
      };
      var me = function (e, t) {
        if (e != null && !j(e)) {
          if (t & 4) {
            return e === 'false' ? false : e === '' || !!e;
          }
          if (t & 2) {
            return parseFloat(e);
          }
          if (t & 1) {
            return String(e);
          }
          return e;
        }
        return e;
      };
      var pe = function (e, t) {
        return Te(e).$instanceValues$.get(t);
      };
      var ge = function (e, t, r, n) {
        var a = Te(e);
        var i = a.$hostElement$;
        var s = a.$instanceValues$.get(t);
        var o = a.$flags$;
        var l = a.$lazyInstance$;
        r = me(r, n.$members$[t][0]);
        if ((!(o & 8) || s === undefined) && r !== s) {
          a.$instanceValues$.set(t, r);
          if (l) {
            if (n.$watchers$ && o & 128) {
              var f = n.$watchers$[t];
              if (f) {
                f.map(function (e) {
                  try {
                    l[e](r, s, t);
                  } catch (e) {
                    Pe(e, i);
                  }
                });
              }
            }
            if ((o & (2 | 16)) === 2) {
              oe(a, false);
            }
          }
        }
      };
      var ye = function (e, t, r) {
        if (t.$members$) {
          if (e.watchers) {
            t.$watchers$ = e.watchers;
          }
          var n = Object.entries(t.$members$);
          var a = e.prototype;
          n.map(function (e) {
            var n = e[0],
              i = e[1][0];
            if (i & 31 || (r & 2 && i & 32)) {
              Object.defineProperty(a, n, {
                get: function () {
                  return pe(this, n);
                },
                set: function (e) {
                  ge(this, n, e, t);
                },
                configurable: true,
                enumerable: true
              });
            } else if (r & 1 && i & 64) {
              Object.defineProperty(a, n, {
                value: function () {
                  var e = [];
                  for (var t = 0; t < arguments.length; t++) {
                    e[t] = arguments[t];
                  }
                  var r = Te(this);
                  return r.$onInstancePromise$.then(function () {
                    var t;
                    return (t = r.$lazyInstance$)[n].apply(t, e);
                  });
                }
              });
            }
          });
          if (r & 1) {
            var i = new Map();
            a.attributeChangedCallback = function (e, t, r) {
              var n = this;
              d.jmp(function () {
                var t = i.get(e);
                n[t] = r === null && typeof n[t] === 'boolean' ? false : r;
              });
            };
            e.observedAttributes = n
              .filter(function (e) {
                var t = e[0],
                  r = e[1];
                return r[0] & 15;
              })
              .map(function (e) {
                var r = e[0],
                  n = e[1];
                var a = n[1] || r;
                i.set(a, r);
                if (n[0] & 512) {
                  t.$attrsToReflect$.push([r, a]);
                }
                return a;
              });
          }
        }
        return e;
      };
      var be = function (e, n, a, i, s) {
        return __awaiter(r, void 0, void 0, function () {
          var e, r, i, o, l, f, $;
          return __generator(this, function (u) {
            switch (u.label) {
              case 0:
                if (!((n.$flags$ & 32) === 0)) return [3, 5];
                n.$flags$ |= 32;
                s = Ae(a);
                if (!s.then) return [3, 2];
                e = b();
                return [4, s];
              case 1:
                s = u.sent();
                e();
                u.label = 2;
              case 2:
                if (!s.isProxied) {
                  {
                    a.$watchers$ = s.watchers;
                  }
                  ye(s, a, 2);
                  s.isProxied = true;
                }
                r = y('createInstance', a.$tagName$);
                {
                  n.$flags$ |= 8;
                }
                try {
                  new s(n);
                } catch (e) {
                  Pe(e);
                }
                {
                  n.$flags$ &= ~8;
                }
                {
                  n.$flags$ |= 128;
                }
                r();
                we(n.$lazyInstance$);
                if (!s.style) return [3, 5];
                i = s.style;
                o = k(a);
                if (!!Me.has(o)) return [3, 5];
                l = y('registerStyles', a.$tagName$);
                if (!(a.$flags$ & 8)) return [3, 4];
                return [
                  4,
                  t.import('./p-991273ac.system.js').then(function (e) {
                    return e.scopeCss(i, o, false);
                  })
                ];
              case 3:
                i = u.sent();
                u.label = 4;
              case 4:
                R(o, i, !!(a.$flags$ & 1));
                l();
                u.label = 5;
              case 5:
                f = n.$ancestorComponent$;
                $ = function () {
                  return oe(n, true);
                };
                if (f && f['s-rc']) {
                  f['s-rc'].push($);
                } else {
                  $();
                }
                return [2];
            }
          });
        });
      };
      var we = function (e) {
        {
          ve(e, 'connectedCallback');
        }
      };
      var Re = function (e) {
        if ((d.$flags$ & 1) === 0) {
          var t = Te(e);
          var r = t.$cmpMeta$;
          var n = y('connectedCallback', r.$tagName$);
          if (!(t.$flags$ & 1)) {
            t.$flags$ |= 1;
            {
              if (r.$flags$ & (4 | 8)) {
                Ne(e);
              }
            }
            {
              var a = e;
              while ((a = a.parentNode || a.host)) {
                if (a['s-p']) {
                  se(t, (t.$ancestorComponent$ = a));
                  break;
                }
              }
            }
            if (r.$members$) {
              Object.entries(r.$members$).map(function (t) {
                var r = t[0],
                  n = t[1][0];
                if (n & 31 && e.hasOwnProperty(r)) {
                  var a = e[r];
                  delete e[r];
                  e[r] = a;
                }
              });
            }
            {
              be(e, t, r);
            }
          } else {
            we(t.$lazyInstance$);
          }
          n();
        }
      };
      var Ne = function (e) {
        var t = (e['s-cr'] = v.createComment(''));
        t['s-cn'] = true;
        e.insertBefore(t, e.firstChild);
      };
      var _e = function (e) {
        if ((d.$flags$ & 1) === 0) {
          var t = Te(e);
          var r = t.$lazyInstance$;
          {
            ve(r, 'disconnectedCallback');
          }
        }
      };
      var ke = e('b', function (e, t) {
        if (t === void 0) {
          t = {};
        }
        var r = y();
        var n = [];
        var a = t.exclude || [];
        var i = c.customElements;
        var s = v.head;
        var o = s.querySelector('meta[charset]');
        var l = v.createElement('style');
        var f = [];
        var $;
        var u = true;
        Object.assign(d, t);
        d.$resourcesUrl$ = new URL(t.resourcesUrl || './', v.baseURI).href;
        e.map(function (e) {
          return e[1].map(function (t) {
            var r = { $flags$: t[0], $tagName$: t[1], $members$: t[2], $listeners$: t[3] };
            {
              r.$members$ = t[2];
            }
            {
              r.$attrsToReflect$ = [];
            }
            {
              r.$watchers$ = {};
            }
            if (!h && r.$flags$ & 1) {
              r.$flags$ |= 8;
            }
            var s = r.$tagName$;
            var o = (function (e) {
              __extends(t, e);
              function t(t) {
                var n = e.call(this, t) || this;
                t = n;
                je(t, r);
                if (r.$flags$ & 1) {
                  if (h) {
                    {
                      t.attachShadow({ mode: 'open' });
                    }
                  } else if (!('shadowRoot' in t)) {
                    t.shadowRoot = t;
                  }
                }
                return n;
              }
              t.prototype.connectedCallback = function () {
                var e = this;
                if ($) {
                  clearTimeout($);
                  $ = null;
                }
                if (u) {
                  f.push(this);
                } else {
                  d.jmp(function () {
                    return Re(e);
                  });
                }
              };
              t.prototype.disconnectedCallback = function () {
                var e = this;
                d.jmp(function () {
                  return _e(e);
                });
              };
              t.prototype.componentOnReady = function () {
                return Te(this).$onReadyPromise$;
              };
              return t;
            })(HTMLElement);
            r.$lazyBundleId$ = e[0];
            if (!a.includes(s) && !i.get(s)) {
              n.push(s);
              i.define(s, ye(o, r, 1));
            }
          });
        });
        {
          l.innerHTML = n + g;
          l.setAttribute('data-styles', '');
          s.insertBefore(l, o ? o.nextSibling : s.firstChild);
        }
        u = false;
        if (f.length) {
          f.map(function (e) {
            return e.connectedCallback();
          });
        } else {
          {
            d.jmp(function () {
              return ($ = setTimeout(ce, 30));
            });
          }
        }
        r();
      });
      var xe = e('a', function (e) {
        var t = new URL(e, d.$resourcesUrl$);
        return t.origin !== c.location.origin ? t.href : t.pathname;
      });
      var Se = new WeakMap();
      var Te = function (e) {
        return Se.get(e);
      };
      var Ce = e('r', function (e, t) {
        return Se.set((t.$lazyInstance$ = e), t);
      });
      var je = function (e, t) {
        var r = { $flags$: 0, $hostElement$: e, $cmpMeta$: t, $instanceValues$: new Map() };
        {
          r.$onInstancePromise$ = new Promise(function (e) {
            return (r.$onInstanceResolve$ = e);
          });
        }
        {
          r.$onReadyPromise$ = new Promise(function (e) {
            return (r.$onReadyResolve$ = e);
          });
          e['s-p'] = [];
          e['s-rc'] = [];
        }
        return Se.set(e, r);
      };
      var Ee = function (e, t) {
        return t in e;
      };
      var Pe = function (e, t) {
        return (0, console.error)(e, t);
      };
      var Oe = new Map();
      var Ae = function (e, r, n) {
        var a = e.$tagName$.replace(/-/g, '_');
        var i = e.$lazyBundleId$;
        var s = Oe.get(i);
        if (s) {
          return s[a];
        }
        return t.import('./' + i + '.entry.js' + '').then(function (e) {
          {
            Oe.set(i, e);
          }
          return e[a];
        }, Pe);
      };
      var Me = new Map();
      var Ie = [];
      var Le = [];
      var Be = function (e, t) {
        return function (r) {
          e.push(r);
          if (!u) {
            u = true;
            if (t && d.$flags$ & 4) {
              He(Ue);
            } else {
              d.raf(Ue);
            }
          }
        };
      };
      var ze = function (e) {
        for (var t = 0; t < e.length; t++) {
          try {
            e[t](performance.now());
          } catch (e) {
            Pe(e);
          }
        }
        e.length = 0;
      };
      var Ue = function () {
        ze(Ie);
        {
          ze(Le);
          if ((u = Ie.length > 0)) {
            d.raf(Ue);
          }
        }
      };
      var He = function (e) {
        return m().then(e);
      };
      var Ve = Be(Le, true);
    }
  };
});
