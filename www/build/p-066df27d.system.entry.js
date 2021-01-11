var __awaiter =
  (this && this.__awaiter) ||
  function (t, e, r, n) {
    function o(t) {
      return t instanceof r
        ? t
        : new r(function (e) {
            e(t);
          });
    }
    return new (r || (r = Promise))(function (r, i) {
      function s(t) {
        try {
          u(n.next(t));
        } catch (t) {
          i(t);
        }
      }
      function a(t) {
        try {
          u(n['throw'](t));
        } catch (t) {
          i(t);
        }
      }
      function u(t) {
        t.done ? r(t.value) : o(t.value).then(s, a);
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
          if (i[0] & 1) throw i[1];
          return i[1];
        },
        trys: [],
        ops: []
      },
      n,
      o,
      i,
      s;
    return (
      (s = { next: a(0), throw: a(1), return: a(2) }),
      typeof Symbol === 'function' &&
        (s[Symbol.iterator] = function () {
          return this;
        }),
      s
    );
    function a(t) {
      return function (e) {
        return u([t, e]);
      };
    }
    function u(s) {
      if (n) throw new TypeError('Generator is already executing.');
      while (r)
        try {
          if (
            ((n = 1),
            o &&
              (i = s[0] & 2 ? o['return'] : s[0] ? o['throw'] || ((i = o['return']) && i.call(o), 0) : o.next) &&
              !(i = i.call(o, s[1])).done)
          )
            return i;
          if (((o = 0), i)) s = [s[0] & 2, i.value];
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
              o = s[1];
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
          s = e.call(t, r);
        } catch (t) {
          s = [6, t];
          o = 0;
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
    for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
    for (var n = Array(t), o = 0, e = 0; e < r; e++)
      for (var i = arguments[e], s = 0, a = i.length; s < a; s++, o++) n[o] = i[s];
    return n;
  };
System.register(['./p-351060b9.system.js'], function (t) {
  'use strict';
  var e, r, n, o;
  return {
    setters: [
      function (t) {
        e = t.r;
        r = t.c;
        n = t.h;
        o = t.g;
      }
    ],
    execute: function () {
      var i = this;
      var s = new Map();
      var a = function (t, e) {
        if (e === void 0) {
          e = 'cors';
        }
        return __awaiter(i, void 0, void 0, function () {
          var r;
          var n = this;
          return __generator(this, function (o) {
            if (s.has(t)) {
              return [2, s.get(t)];
            } else {
              r = fetch(t, { mode: e }).then(function (t) {
                return __awaiter(n, void 0, void 0, function () {
                  var e;
                  return __generator(this, function (r) {
                    switch (r.label) {
                      case 0:
                        e = { ok: t.ok, status: t.status };
                        return [4, t.text()];
                      case 1:
                        return [2, ((e.html = r.sent()), e)];
                    }
                  });
                });
              });
              s.set(t, r);
              return [2, r];
            }
            return [2];
          });
        });
      };
      var u = ':host{display:block}';
      var c = t(
        'sl_include',
        (function () {
          function t(t) {
            e(this, t);
            this.slLoad = r(this, 'sl-load', 7);
            this.slError = r(this, 'sl-error', 7);
            this.html = '';
            this.mode = 'cors';
            this.allowScripts = false;
          }
          t.prototype.handleSrcChange = function () {
            this.loadSource();
          };
          t.prototype.componentWillLoad = function () {
            this.loadSource();
          };
          t.prototype.executeScript = function (t) {
            var e = document.createElement('script');
            __spreadArrays(t.attributes).map(function (t) {
              return e.setAttribute(t.name, t.value);
            });
            e.textContent = t.textContent;
            t.parentNode.replaceChild(e, t);
          };
          t.prototype.loadSource = function () {
            return __awaiter(this, void 0, void 0, function () {
              var t, e, r;
              var n = this;
              return __generator(this, function (o) {
                switch (o.label) {
                  case 0:
                    o.trys.push([0, 2, , 3]);
                    t = this.src;
                    return [4, a(t, this.mode)];
                  case 1:
                    e = o.sent();
                    if (t !== this.src) {
                      return [2];
                    }
                    if (!e.ok) {
                      this.slError.emit({ status: e.status });
                      return [2];
                    }
                    this.host.innerHTML = e.html;
                    if (this.allowScripts) {
                      __spreadArrays(this.host.querySelectorAll('script')).map(function (t) {
                        return n.executeScript(t);
                      });
                    }
                    this.slLoad.emit();
                    return [3, 3];
                  case 2:
                    r = o.sent();
                    this.slError.emit();
                    return [3, 3];
                  case 3:
                    return [2];
                }
              });
            });
          };
          t.prototype.render = function () {
            return n('slot', null);
          };
          Object.defineProperty(t.prototype, 'host', {
            get: function () {
              return o(this);
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(t, 'watchers', {
            get: function () {
              return { src: ['handleSrcChange'] };
            },
            enumerable: false,
            configurable: true
          });
          return t;
        })()
      );
      c.style = u;
    }
  };
});
