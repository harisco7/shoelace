var __awaiter =
  (this && this.__awaiter) ||
  function (t, e, r, n) {
    function i(t) {
      return t instanceof r
        ? t
        : new r(function (e) {
            e(t);
          });
    }
    return new (r || (r = Promise))(function (r, s) {
      function o(t) {
        try {
          u(n.next(t));
        } catch (t) {
          s(t);
        }
      }
      function a(t) {
        try {
          u(n['throw'](t));
        } catch (t) {
          s(t);
        }
      }
      function u(t) {
        t.done ? r(t.value) : i(t.value).then(o, a);
      }
      u((n = n.apply(t, e || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (t, e) {
    var r = {
        label: 0,
        sent: function () {
          if (s[0] & 1) throw s[1];
          return s[1];
        },
        trys: [],
        ops: []
      },
      n,
      i,
      s,
      o;
    return (
      (o = { next: a(0), throw: a(1), return: a(2) }),
      typeof Symbol === 'function' &&
        (o[Symbol.iterator] = function () {
          return this;
        }),
      o
    );
    function a(t) {
      return function (e) {
        return u([t, e]);
      };
    }
    function u(o) {
      if (n) throw new TypeError('Generator is already executing.');
      while (r)
        try {
          if (
            ((n = 1),
            i &&
              (s = o[0] & 2 ? i['return'] : o[0] ? i['throw'] || ((s = i['return']) && s.call(i), 0) : i.next) &&
              !(s = s.call(i, o[1])).done)
          )
            return s;
          if (((i = 0), s)) o = [o[0] & 2, s.value];
          switch (o[0]) {
            case 0:
            case 1:
              s = o;
              break;
            case 4:
              r.label++;
              return { value: o[1], done: false };
            case 5:
              r.label++;
              i = o[1];
              o = [0];
              continue;
            case 7:
              o = r.ops.pop();
              r.trys.pop();
              continue;
            default:
              if (!((s = r.trys), (s = s.length > 0 && s[s.length - 1])) && (o[0] === 6 || o[0] === 2)) {
                r = 0;
                continue;
              }
              if (o[0] === 3 && (!s || (o[1] > s[0] && o[1] < s[3]))) {
                r.label = o[1];
                break;
              }
              if (o[0] === 6 && r.label < s[1]) {
                r.label = s[1];
                s = o;
                break;
              }
              if (s && r.label < s[2]) {
                r.label = s[2];
                r.ops.push(o);
                break;
              }
              if (s[2]) r.ops.pop();
              r.trys.pop();
              continue;
          }
          o = e.call(t, r);
        } catch (t) {
          o = [6, t];
          i = 0;
        } finally {
          n = s = 0;
        }
      if (o[0] & 5) throw o[1];
      return { value: o[0] ? o[1] : void 0, done: true };
    }
  };
System.register(['./p-351060b9.system.js', './p-6a46304e.system.js'], function (t) {
  'use strict';
  var e, r, n, i, s, o, a;
  return {
    setters: [
      function (t) {
        e = t.r;
        r = t.c;
        n = t.h;
        i = t.g;
      },
      function (t) {
        s = t.a;
        o = t.g;
        a = t.w;
      }
    ],
    execute: function () {
      var u = this;
      var c = new Map();
      var l = function (t) {
        if (c.has(t)) {
          return c.get(t);
        } else {
          var e = fetch(t).then(function (t) {
            return __awaiter(u, void 0, void 0, function () {
              var e, r, n;
              return __generator(this, function (i) {
                switch (i.label) {
                  case 0:
                    if (!t.ok) return [3, 2];
                    e = document.createElement('div');
                    r = e;
                    return [4, t.text()];
                  case 1:
                    r.innerHTML = i.sent();
                    n = e.firstElementChild;
                    return [
                      2,
                      { ok: t.ok, status: t.status, svg: n && n.tagName.toLowerCase() === 'svg' ? n.outerHTML : '' }
                    ];
                  case 2:
                    return [2, { ok: t.ok, status: t.status, svg: null }];
                }
              });
            });
          });
          c.set(t, e);
          return e;
        }
      };
      var h =
        ':host{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{display:inline-block;width:1em;height:1em;contain:strict;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}.icon,svg{display:block;height:100%;width:100%}';
      var f = new DOMParser();
      var b = t(
        'sl_icon',
        (function () {
          function t(t) {
            e(this, t);
            this.slLoad = r(this, 'sl-load', 7);
            this.slError = r(this, 'sl-error', 7);
            this.library = 'default';
          }
          t.prototype.handleChange = function () {
            this.setIcon();
          };
          t.prototype.connectedCallback = function () {
            a(this.host);
          };
          t.prototype.componentDidLoad = function () {
            this.setIcon();
          };
          t.prototype.disconnectedCallback = function () {
            s(this.host);
          };
          t.prototype.redraw = function () {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (t) {
                this.setIcon();
                return [2];
              });
            });
          };
          t.prototype.getLabel = function () {
            var t = '';
            if (this.label) {
              t = this.label;
            } else if (this.name) {
              t = this.name.replace(/-/g, ' ');
            } else if (this.src) {
              t = this.src.replace(/.*\//, '').replace(/-/g, ' ').replace(/\.svg/i, '');
            }
            return t;
          };
          t.prototype.setIcon = function () {
            return __awaiter(this, void 0, void 0, function () {
              var t, e, r, n, i, s;
              return __generator(this, function (a) {
                switch (a.label) {
                  case 0:
                    t = o(this.library);
                    e = this.src;
                    if (this.name && t) {
                      e = t.resolver(this.name);
                    }
                    if (!e) return [3, 5];
                    a.label = 1;
                  case 1:
                    a.trys.push([1, 3, , 4]);
                    return [4, l(e)];
                  case 2:
                    r = a.sent();
                    if (r.ok) {
                      n = f.parseFromString(r.svg, 'text/html');
                      i = n.body.querySelector('svg');
                      if (i) {
                        if (t && t.mutator) {
                          t.mutator(i);
                        }
                        this.svg = i.outerHTML;
                        this.slLoad.emit();
                      } else {
                        this.svg = '';
                        this.slError.emit({ status: r.status });
                      }
                    }
                    return [3, 4];
                  case 3:
                    s = a.sent();
                    this.slError.emit();
                    return [3, 4];
                  case 4:
                    return [3, 6];
                  case 5:
                    if (this.svg) {
                      this.svg = null;
                    }
                    a.label = 6;
                  case 6:
                    return [2];
                }
              });
            });
          };
          t.prototype.render = function () {
            return n('div', {
              part: 'base',
              class: 'icon',
              role: 'img',
              'aria-label': this.getLabel(),
              innerHTML: this.svg
            });
          };
          Object.defineProperty(t, 'assetsDirs', {
            get: function () {
              return ['icons'];
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(t.prototype, 'host', {
            get: function () {
              return i(this);
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(t, 'watchers', {
            get: function () {
              return { name: ['handleChange'], src: ['handleChange'], library: ['handleChange'] };
            },
            enumerable: false,
            configurable: true
          });
          return t;
        })()
      );
      b.style = h;
    }
  };
});
