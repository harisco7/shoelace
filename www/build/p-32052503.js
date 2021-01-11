const e = 'shoelace';
let t,
  l,
  n,
  o = !1,
  s = !1,
  c = !1,
  i = !1,
  r = !1;
const a = 'undefined' != typeof window ? window : {},
  f = a.document || { head: {} },
  u = {
    t: 0,
    l: '',
    jmp: e => e(),
    raf: e => requestAnimationFrame(e),
    ael: (e, t, l, n) => e.addEventListener(t, l, n),
    rel: (e, t, l, n) => e.removeEventListener(t, l, n),
    ce: (e, t) => new CustomEvent(e, t)
  },
  d = (() => (f.head.attachShadow + '').indexOf('[native') > -1)(),
  $ = e => Promise.resolve(e),
  h = (() => {
    try {
      return new CSSStyleSheet(), !0;
    } catch (e) {}
    return !1;
  })(),
  p = new WeakMap(),
  m = e => 'sc-' + e.o,
  b = {},
  y = e => 'object' == (e = typeof e) || 'function' === e,
  w = (e, t, ...l) => {
    let n = null,
      o = null,
      s = null,
      c = !1,
      i = !1,
      r = [];
    const a = t => {
      for (let l = 0; l < t.length; l++)
        (n = t[l]),
          Array.isArray(n)
            ? a(n)
            : null != n &&
              'boolean' != typeof n &&
              ((c = 'function' != typeof e && !y(n)) && (n += ''),
              c && i ? (r[r.length - 1].i += n) : r.push(c ? g(null, n) : n),
              (i = c));
    };
    if ((a(l), t)) {
      t.key && (o = t.key), t.name && (s = t.name);
      {
        const e = t.className || t.class;
        e &&
          (t.class =
            'object' != typeof e
              ? e
              : Object.keys(e)
                  .filter(t => e[t])
                  .join(' '));
      }
    }
    if ('function' == typeof e) return e(null === t ? {} : t, r, j);
    const f = g(e, null);
    return (f.u = t), r.length > 0 && (f.$ = r), (f.h = o), (f.p = s), f;
  },
  g = (e, t) => ({ t: 0, m: e, i: t, g: null, $: null, u: null, h: null, p: null }),
  v = {},
  j = { forEach: (e, t) => e.map(k).forEach(t), map: (e, t) => e.map(k).map(t).map(O) },
  k = e => ({ vattrs: e.u, vchildren: e.$, vkey: e.h, vname: e.p, vtag: e.m, vtext: e.i }),
  O = e => {
    if ('function' == typeof e.vtag) {
      const t = Object.assign({}, e.vattrs);
      return e.vkey && (t.key = e.vkey), e.vname && (t.name = e.vname), w(e.vtag, t, ...(e.vchildren || []));
    }
    const t = g(e.vtag, e.vtext);
    return (t.u = e.vattrs), (t.$ = e.vchildren), (t.h = e.vkey), (t.p = e.vname), t;
  },
  S = (e, t, l, n, o, s) => {
    if (l !== n) {
      let c = ae(e, t),
        i = t.toLowerCase();
      if ('class' === t) {
        const t = e.classList,
          o = M(l),
          s = M(n);
        t.remove(...o.filter(e => e && !s.includes(e))), t.add(...s.filter(e => e && !o.includes(e)));
      } else if ('style' === t) {
        for (const t in l) (n && null != n[t]) || (t.includes('-') ? e.style.removeProperty(t) : (e.style[t] = ''));
        for (const t in n)
          (l && n[t] === l[t]) || (t.includes('-') ? e.style.setProperty(t, n[t]) : (e.style[t] = n[t]));
      } else if ('key' === t);
      else if ('ref' === t) n && n(e);
      else if (c || 'o' !== t[0] || 'n' !== t[1]) {
        const i = y(n);
        if ((c || (i && null !== n)) && !o)
          try {
            if (e.tagName.includes('-')) e[t] = n;
            else {
              let o = null == n ? '' : n;
              'list' === t ? (c = !1) : (null != l && e[t] == o) || (e[t] = o);
            }
          } catch (e) {}
        null == n || !1 === n
          ? (!1 === n && '' !== e.getAttribute(t)) || e.removeAttribute(t)
          : (!c || 4 & s || o) && !i && e.setAttribute(t, (n = !0 === n ? '' : n));
      } else
        (t = '-' === t[2] ? t.slice(3) : ae(a, i) ? i.slice(2) : i[2] + t.slice(3)),
          l && u.rel(e, t, l, !1),
          n && u.ael(e, t, n, !1);
    }
  },
  _ = /\s/,
  M = e => (e ? e.split(_) : []),
  C = (e, t, l, n) => {
    const o = 11 === t.g.nodeType && t.g.host ? t.g.host : t.g,
      s = (e && e.u) || b,
      c = t.u || b;
    for (n in s) n in c || S(o, n, s[n], void 0, l, t.t);
    for (n in c) S(o, n, s[n], c[n], l, t.t);
  },
  R = (e, s, r, a) => {
    let u,
      d,
      $,
      h = s.$[r],
      p = 0;
    if ((o || ((c = !0), 'slot' === h.m && (t && a.classList.add(t + '-s'), (h.t |= h.$ ? 2 : 1))), null !== h.i))
      u = h.g = f.createTextNode(h.i);
    else if (1 & h.t) u = h.g = f.createTextNode('');
    else {
      if (
        (i || (i = 'svg' === h.m),
        (u = h.g = f.createElementNS(
          i ? 'http://www.w3.org/2000/svg' : 'http://www.w3.org/1999/xhtml',
          2 & h.t ? 'slot-fb' : h.m
        )),
        i && 'foreignObject' === h.m && (i = !1),
        C(null, h, i),
        null != t && u['s-si'] !== t && u.classList.add((u['s-si'] = t)),
        h.$)
      )
        for (p = 0; p < h.$.length; ++p) (d = R(e, h, p, u)), d && u.appendChild(d);
      'svg' === h.m ? (i = !1) : 'foreignObject' === u.tagName && (i = !0);
    }
    return (
      (u['s-hn'] = n),
      3 & h.t &&
        ((u['s-sr'] = !0),
        (u['s-cr'] = l),
        (u['s-sn'] = h.p || ''),
        ($ = e && e.$ && e.$[r]),
        $ && $.m === h.m && e.g && x(e.g, !1)),
      u
    );
  },
  x = (e, t) => {
    u.t |= 1;
    const l = e.childNodes;
    for (let e = l.length - 1; e >= 0; e--) {
      const o = l[e];
      o['s-hn'] !== n && o['s-ol'] && (U(o).insertBefore(o, E(o)), o['s-ol'].remove(), (o['s-ol'] = void 0), (c = !0)),
        t && x(o, t);
    }
    u.t &= -2;
  },
  L = (e, t, l, o, s, c) => {
    let i,
      r = (e['s-cr'] && e['s-cr'].parentNode) || e;
    for (r.shadowRoot && r.tagName === n && (r = r.shadowRoot); s <= c; ++s)
      o[s] && ((i = R(null, l, s, e)), i && ((o[s].g = i), r.insertBefore(i, E(t))));
  },
  P = (e, t, l, n, o) => {
    for (; t <= l; ++t)
      (n = e[t]) && ((o = n.g), H(n), (s = !0), o['s-ol'] ? o['s-ol'].remove() : x(o, !0), o.remove());
  },
  T = (e, t) => e.m === t.m && ('slot' === e.m ? e.p === t.p : e.h === t.h),
  E = e => (e && e['s-ol']) || e,
  U = e => (e['s-ol'] ? e['s-ol'] : e).parentNode,
  N = (e, t) => {
    const l = (t.g = e.g),
      n = e.$,
      o = t.$,
      s = t.m,
      c = t.i;
    let r;
    null === c
      ? ((i = 'svg' === s || ('foreignObject' !== s && i)),
        'slot' === s || C(e, t, i),
        null !== n && null !== o
          ? ((e, t, l, n) => {
              let o,
                s,
                c = 0,
                i = 0,
                r = 0,
                a = 0,
                f = t.length - 1,
                u = t[0],
                d = t[f],
                $ = n.length - 1,
                h = n[0],
                p = n[$];
              for (; c <= f && i <= $; )
                if (null == u) u = t[++c];
                else if (null == d) d = t[--f];
                else if (null == h) h = n[++i];
                else if (null == p) p = n[--$];
                else if (T(u, h)) N(u, h), (u = t[++c]), (h = n[++i]);
                else if (T(d, p)) N(d, p), (d = t[--f]), (p = n[--$]);
                else if (T(u, p))
                  ('slot' !== u.m && 'slot' !== p.m) || x(u.g.parentNode, !1),
                    N(u, p),
                    e.insertBefore(u.g, d.g.nextSibling),
                    (u = t[++c]),
                    (p = n[--$]);
                else if (T(d, h))
                  ('slot' !== u.m && 'slot' !== p.m) || x(d.g.parentNode, !1),
                    N(d, h),
                    e.insertBefore(d.g, u.g),
                    (d = t[--f]),
                    (h = n[++i]);
                else {
                  for (r = -1, a = c; a <= f; ++a)
                    if (t[a] && null !== t[a].h && t[a].h === h.h) {
                      r = a;
                      break;
                    }
                  r >= 0
                    ? ((s = t[r]),
                      s.m !== h.m ? (o = R(t && t[i], l, r, e)) : (N(s, h), (t[r] = void 0), (o = s.g)),
                      (h = n[++i]))
                    : ((o = R(t && t[i], l, i, e)), (h = n[++i])),
                    o && U(u.g).insertBefore(o, E(u.g));
                }
              c > f ? L(e, null == n[$ + 1] ? null : n[$ + 1].g, l, n, i, $) : i > $ && P(t, c, f);
            })(l, n, t, o)
          : null !== o
          ? (null !== e.i && (l.textContent = ''), L(l, null, t, o, 0, o.length - 1))
          : null !== n && P(n, 0, n.length - 1),
        i && 'svg' === s && (i = !1))
      : (r = l['s-cr'])
      ? (r.parentNode.textContent = c)
      : e.i !== c && (l.data = c);
  },
  W = e => {
    let t,
      l,
      n,
      o,
      s,
      c,
      i = e.childNodes;
    for (l = 0, n = i.length; l < n; l++)
      if (((t = i[l]), 1 === t.nodeType)) {
        if (t['s-sr'])
          for (s = t['s-sn'], t.hidden = !1, o = 0; o < n; o++)
            if (i[o]['s-hn'] !== t['s-hn'])
              if (((c = i[o].nodeType), '' !== s)) {
                if (1 === c && s === i[o].getAttribute('slot')) {
                  t.hidden = !0;
                  break;
                }
              } else if (1 === c || (3 === c && '' !== i[o].textContent.trim())) {
                t.hidden = !0;
                break;
              }
        W(t);
      }
  },
  A = [],
  D = e => {
    let t,
      l,
      n,
      o,
      c,
      i,
      r = 0,
      a = e.childNodes,
      f = a.length;
    for (; r < f; r++) {
      if (((t = a[r]), t['s-sr'] && (l = t['s-cr'])))
        for (n = l.parentNode.childNodes, o = t['s-sn'], i = n.length - 1; i >= 0; i--)
          (l = n[i]),
            l['s-cn'] ||
              l['s-nr'] ||
              l['s-hn'] === t['s-hn'] ||
              (F(l, o)
                ? ((c = A.find(e => e.v === l)),
                  (s = !0),
                  (l['s-sn'] = l['s-sn'] || o),
                  c ? (c.j = t) : A.push({ j: t, v: l }),
                  l['s-sr'] &&
                    A.map(e => {
                      F(e.v, l['s-sn']) && ((c = A.find(e => e.v === l)), c && !e.j && (e.j = c.j));
                    }))
                : A.some(e => e.v === l) || A.push({ v: l }));
      1 === t.nodeType && D(t);
    }
  },
  F = (e, t) =>
    1 === e.nodeType
      ? (null === e.getAttribute('slot') && '' === t) || e.getAttribute('slot') === t
      : e['s-sn'] === t || '' === t,
  H = e => {
    e.u && e.u.ref && e.u.ref(null), e.$ && e.$.map(H);
  },
  q = e => ce(e).k,
  V = (e, t, l) => {
    const n = q(e);
    return { emit: e => z(n, t, { bubbles: !!(4 & l), composed: !!(2 & l), cancelable: !!(1 & l), detail: e }) };
  },
  z = (e, t, l) => {
    const n = u.ce(t, l);
    return e.dispatchEvent(n), n;
  },
  B = (e, t) => {
    t && !e.O && t['s-p'] && t['s-p'].push(new Promise(t => (e.O = t)));
  },
  G = (e, t) => {
    if (((e.t |= 16), !(4 & e.t))) return B(e, e.S), ge(() => I(e, t));
    e.t |= 512;
  },
  I = (e, t) => {
    const l = e._;
    let n;
    return t && (n = Y(l, 'componentWillLoad')), Z(n, () => J(e, l, t));
  },
  J = async (e, i, r) => {
    const a = e.k,
      $ = a['s-rc'];
    r &&
      (e => {
        const t = e.M,
          l = e.k,
          n = t.t,
          o = ((e, t) => {
            let l = m(t),
              n = $e.get(l);
            if (((e = 11 === e.nodeType ? e : f), n))
              if ('string' == typeof n) {
                let t,
                  o = p.get((e = e.head || e));
                o || p.set(e, (o = new Set())),
                  o.has(l) ||
                    ((t = f.createElement('style')),
                    (t.innerHTML = n),
                    e.insertBefore(t, e.querySelector('link')),
                    o && o.add(l));
              } else e.adoptedStyleSheets.includes(n) || (e.adoptedStyleSheets = [...e.adoptedStyleSheets, n]);
            return l;
          })(d && l.shadowRoot ? l.shadowRoot : l.getRootNode(), t);
        10 & n && ((l['s-sc'] = o), l.classList.add(o + '-h'));
      })(e);
    ((e, i) => {
      const r = e.k,
        a = e.M,
        $ = e.C || g(null, null),
        h = (e => e && e.m === v)(i) ? i : w(null, null, i);
      if (
        ((n = r.tagName),
        a.R && ((h.u = h.u || {}), a.R.map(([e, t]) => (h.u[t] = r[e]))),
        (h.m = null),
        (h.t |= 4),
        (e.C = h),
        (h.g = $.g = r.shadowRoot || r),
        (t = r['s-sc']),
        (l = r['s-cr']),
        (o = d && 0 != (1 & a.t)),
        (s = !1),
        N($, h),
        (u.t |= 1),
        c)
      ) {
        let e, t, l, n, o, s;
        D(h.g);
        let c = 0;
        for (; c < A.length; c++)
          (e = A[c]),
            (t = e.v),
            t['s-ol'] || ((l = f.createTextNode('')), (l['s-nr'] = t), t.parentNode.insertBefore((t['s-ol'] = l), t));
        for (c = 0; c < A.length; c++)
          if (((e = A[c]), (t = e.v), e.j)) {
            for (n = e.j.parentNode, o = e.j.nextSibling, l = t['s-ol']; (l = l.previousSibling); )
              if (
                ((s = l['s-nr']),
                s && s['s-sn'] === t['s-sn'] && n === s.parentNode && ((s = s.nextSibling), !s || !s['s-nr']))
              ) {
                o = s;
                break;
              }
            ((!o && n !== t.parentNode) || t.nextSibling !== o) &&
              t !== o &&
              (!t['s-hn'] && t['s-ol'] && (t['s-hn'] = t['s-ol'].parentNode.nodeName), n.insertBefore(t, o));
          } else 1 === t.nodeType && (t.hidden = !0);
      }
      s && W(h.g), (u.t &= -2), (A.length = 0);
    })(e, K(e, i)),
      $ && ($.map(e => e()), (a['s-rc'] = void 0));
    {
      const t = a['s-p'],
        l = () => Q(e);
      0 === t.length ? l() : (Promise.all(t).then(l), (e.t |= 4), (t.length = 0));
    }
  },
  K = (e, t) => {
    try {
      (t = t.render()), (e.t &= -17), (e.t |= 2);
    } catch (t) {
      fe(t, e.k);
    }
    return t;
  },
  Q = e => {
    const t = e.k,
      l = e._,
      n = e.S;
    64 & e.t ? Y(l, 'componentDidUpdate') : ((e.t |= 64), ee(t), Y(l, 'componentDidLoad'), e.L(t), n || X()),
      e.P(t),
      e.O && (e.O(), (e.O = void 0)),
      512 & e.t && we(() => G(e, !1)),
      (e.t &= -517);
  },
  X = () => {
    ee(f.documentElement), we(() => z(a, 'appload', { detail: { namespace: 'shoelace' } }));
  },
  Y = (e, t, l) => {
    if (e && e[t])
      try {
        return e[t](l);
      } catch (e) {
        fe(e);
      }
  },
  Z = (e, t) => (e && e.then ? e.then(t) : t()),
  ee = e => e.classList.add('hydrated'),
  te = (e, t, l) => {
    if (t.T) {
      e.watchers && (t.U = e.watchers);
      const n = Object.entries(t.T),
        o = e.prototype;
      if (
        (n.map(([e, [n]]) => {
          31 & n || (2 & l && 32 & n)
            ? Object.defineProperty(o, e, {
                get() {
                  return ((e, t) => ce(this).N.get(t))(0, e);
                },
                set(l) {
                  ((e, t, l, n) => {
                    const o = ce(e),
                      s = o.k,
                      c = o.N.get(t),
                      i = o.t,
                      r = o._;
                    if (
                      ((l = ((e, t) =>
                        null == e || y(e)
                          ? e
                          : 4 & t
                          ? 'false' !== e && ('' === e || !!e)
                          : 2 & t
                          ? parseFloat(e)
                          : 1 & t
                          ? e + ''
                          : e)(l, n.T[t][0])),
                      !((8 & i && void 0 !== c) || l === c) && (o.N.set(t, l), r))
                    ) {
                      if (n.U && 128 & i) {
                        const e = n.U[t];
                        e &&
                          e.map(e => {
                            try {
                              r[e](l, c, t);
                            } catch (e) {
                              fe(e, s);
                            }
                          });
                      }
                      2 == (18 & i) && G(o, !1);
                    }
                  })(this, e, l, t);
                },
                configurable: !0,
                enumerable: !0
              })
            : 1 & l &&
              64 & n &&
              Object.defineProperty(o, e, {
                value(...t) {
                  const l = ce(this);
                  return l.W.then(() => l._[e](...t));
                }
              });
        }),
        1 & l)
      ) {
        const l = new Map();
        (o.attributeChangedCallback = function (e, t, n) {
          u.jmp(() => {
            const t = l.get(e);
            this[t] = (null !== n || 'boolean' != typeof this[t]) && n;
          });
        }),
          (e.observedAttributes = n
            .filter(([e, t]) => 15 & t[0])
            .map(([e, n]) => {
              const o = n[1] || e;
              return l.set(o, e), 512 & n[0] && t.R.push([e, o]), o;
            }));
      }
    }
    return e;
  },
  le = e => {
    Y(e, 'connectedCallback');
  },
  ne = (e, t = {}) => {
    const l = [],
      n = t.exclude || [],
      o = a.customElements,
      s = f.head,
      c = s.querySelector('meta[charset]'),
      i = f.createElement('style'),
      r = [];
    let $,
      p = !0;
    Object.assign(u, t),
      (u.l = new URL(t.resourcesUrl || './', f.baseURI).href),
      e.map(e =>
        e[1].map(t => {
          const s = { t: t[0], o: t[1], T: t[2], A: t[3] };
          (s.T = t[2]), (s.R = []), (s.U = {}), !d && 1 & s.t && (s.t |= 8);
          const c = s.o,
            i = class extends HTMLElement {
              constructor(e) {
                super(e),
                  re((e = this), s),
                  1 & s.t && (d ? e.attachShadow({ mode: 'open' }) : 'shadowRoot' in e || (e.shadowRoot = e));
              }
              connectedCallback() {
                $ && (clearTimeout($), ($ = null)),
                  p
                    ? r.push(this)
                    : u.jmp(() =>
                        (e => {
                          if (0 == (1 & u.t)) {
                            const t = ce(e),
                              l = t.M,
                              n = () => {};
                            if (1 & t.t) le(t._);
                            else {
                              (t.t |= 1),
                                12 & l.t &&
                                  (e => {
                                    const t = (e['s-cr'] = f.createComment(''));
                                    (t['s-cn'] = !0), e.insertBefore(t, e.firstChild);
                                  })(e);
                              {
                                let l = e;
                                for (; (l = l.parentNode || l.host); )
                                  if (l['s-p']) {
                                    B(t, (t.S = l));
                                    break;
                                  }
                              }
                              l.T &&
                                Object.entries(l.T).map(([t, [l]]) => {
                                  if (31 & l && e.hasOwnProperty(t)) {
                                    const l = e[t];
                                    delete e[t], (e[t] = l);
                                  }
                                }),
                                (async (e, t, l, n, o) => {
                                  if (0 == (32 & t.t)) {
                                    {
                                      if (((t.t |= 32), (o = de(l)).then)) {
                                        const e = () => {};
                                        (o = await o), e();
                                      }
                                      o.isProxied || ((l.U = o.watchers), te(o, l, 2), (o.isProxied = !0));
                                      const e = () => {};
                                      t.t |= 8;
                                      try {
                                        new o(t);
                                      } catch (e) {
                                        fe(e);
                                      }
                                      (t.t &= -9), (t.t |= 128), e(), le(t._);
                                    }
                                    if (o.style) {
                                      let e = o.style;
                                      const t = m(l);
                                      if (!$e.has(t)) {
                                        const n = () => {};
                                        8 & l.t &&
                                          (e = await __sc_import_shoelace('./p-5dca96a3.js').then(l =>
                                            l.scopeCss(e, t, !1)
                                          )),
                                          ((e, t, l) => {
                                            let n = $e.get(e);
                                            h && l ? ((n = n || new CSSStyleSheet()), n.replace(t)) : (n = t),
                                              $e.set(e, n);
                                          })(t, e, !!(1 & l.t)),
                                          n();
                                      }
                                    }
                                  }
                                  const s = t.S,
                                    c = () => G(t, !0);
                                  s && s['s-rc'] ? s['s-rc'].push(c) : c();
                                })(0, t, l);
                            }
                            n();
                          }
                        })(this)
                      );
              }
              disconnectedCallback() {
                u.jmp(() =>
                  (() => {
                    0 == (1 & u.t) && Y(ce(this)._, 'disconnectedCallback');
                  })()
                );
              }
              componentOnReady() {
                return ce(this).D;
              }
            };
          (s.F = e[0]), n.includes(c) || o.get(c) || (l.push(c), o.define(c, te(i, s, 1)));
        })
      ),
      (i.innerHTML = l + '{visibility:hidden}.hydrated{visibility:inherit}'),
      i.setAttribute('data-styles', ''),
      s.insertBefore(i, c ? c.nextSibling : s.firstChild),
      (p = !1),
      r.length ? r.map(e => e.connectedCallback()) : u.jmp(() => ($ = setTimeout(X, 30)));
  },
  oe = e => {
    const t = new URL(e, u.l);
    return t.origin !== a.location.origin ? t.href : t.pathname;
  },
  se = new WeakMap(),
  ce = e => se.get(e),
  ie = (e, t) => se.set((t._ = e), t),
  re = (e, t) => {
    const l = { t: 0, k: e, M: t, N: new Map() };
    return (
      (l.W = new Promise(e => (l.P = e))),
      (l.D = new Promise(e => (l.L = e))),
      (e['s-p'] = []),
      (e['s-rc'] = []),
      se.set(e, l)
    );
  },
  ae = (e, t) => t in e,
  fe = (e, t) => (0, console.error)(e, t),
  ue = new Map(),
  de = e => {
    const t = e.o.replace(/-/g, '_'),
      l = e.F,
      n = ue.get(l);
    return n ? n[t] : __sc_import_shoelace(`./${l}.entry.js`).then(e => (ue.set(l, e), e[t]), fe);
  },
  $e = new Map(),
  he = [],
  pe = [],
  me = (e, t) => l => {
    e.push(l), r || ((r = !0), t && 4 & u.t ? we(ye) : u.raf(ye));
  },
  be = e => {
    for (let t = 0; t < e.length; t++)
      try {
        e[t](performance.now());
      } catch (e) {
        fe(e);
      }
    e.length = 0;
  },
  ye = () => {
    be(he), be(pe), (r = he.length > 0) && u.raf(ye);
  },
  we = e => $().then(e),
  ge = me(pe, !0);
export { v as H, e as N, oe as a, ne as b, V as c, f as d, q as g, w as h, $ as p, ie as r, a as w };
