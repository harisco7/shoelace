var __awaiter =
  (this && this.__awaiter) ||
  function (t, e, o, r) {
    function a(t) {
      return t instanceof o
        ? t
        : new o(function (e) {
            e(t);
          });
    }
    return new (o || (o = Promise))(function (o, i) {
      function n(t) {
        try {
          l(r.next(t));
        } catch (t) {
          i(t);
        }
      }
      function s(t) {
        try {
          l(r['throw'](t));
        } catch (t) {
          i(t);
        }
      }
      function l(t) {
        t.done ? o(t.value) : a(t.value).then(n, s);
      }
      l((r = r.apply(t, e || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (t, e) {
    var o = {
        label: 0,
        sent: function () {
          if (i[0] & 1) throw i[1];
          return i[1];
        },
        trys: [],
        ops: []
      },
      r,
      a,
      i,
      n;
    return (
      (n = { next: s(0), throw: s(1), return: s(2) }),
      typeof Symbol === 'function' &&
        (n[Symbol.iterator] = function () {
          return this;
        }),
      n
    );
    function s(t) {
      return function (e) {
        return l([t, e]);
      };
    }
    function l(n) {
      if (r) throw new TypeError('Generator is already executing.');
      while (o)
        try {
          if (
            ((r = 1),
            a &&
              (i = n[0] & 2 ? a['return'] : n[0] ? a['throw'] || ((i = a['return']) && i.call(a), 0) : a.next) &&
              !(i = i.call(a, n[1])).done)
          )
            return i;
          if (((a = 0), i)) n = [n[0] & 2, i.value];
          switch (n[0]) {
            case 0:
            case 1:
              i = n;
              break;
            case 4:
              o.label++;
              return { value: n[1], done: false };
            case 5:
              o.label++;
              a = n[1];
              n = [0];
              continue;
            case 7:
              n = o.ops.pop();
              o.trys.pop();
              continue;
            default:
              if (!((i = o.trys), (i = i.length > 0 && i[i.length - 1])) && (n[0] === 6 || n[0] === 2)) {
                o = 0;
                continue;
              }
              if (n[0] === 3 && (!i || (n[1] > i[0] && n[1] < i[3]))) {
                o.label = n[1];
                break;
              }
              if (n[0] === 6 && o.label < i[1]) {
                o.label = i[1];
                i = n;
                break;
              }
              if (i && o.label < i[2]) {
                o.label = i[2];
                o.ops.push(n);
                break;
              }
              if (i[2]) o.ops.pop();
              o.trys.pop();
              continue;
          }
          n = e.call(t, o);
        } catch (t) {
          n = [6, t];
          a = 0;
        } finally {
          r = i = 0;
        }
      if (n[0] & 5) throw n[1];
      return { value: n[0] ? n[1] : void 0, done: true };
    }
  };
var __spreadArrays =
  (this && this.__spreadArrays) ||
  function () {
    for (var t = 0, e = 0, o = arguments.length; e < o; e++) t += arguments[e].length;
    for (var r = Array(t), a = 0, e = 0; e < o; e++)
      for (var i = arguments[e], n = 0, s = i.length; n < s; n++, a++) r[a] = i[n];
    return r;
  };
System.register(['./p-351060b9.system.js', './p-6b0e3125.system.js', './p-4ebc54b7.system.js'], function (t) {
  'use strict';
  var e, o, r, a, i, n, s;
  return {
    setters: [
      function (t) {
        e = t.r;
        o = t.c;
        r = t.h;
        a = t.g;
      },
      function (t) {
        i = t.f;
      },
      function (t) {
        n = t.s;
        s = t.g;
      }
    ],
    execute: function () {
      var l =
        ':host{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{--tabs-border-color:var(--sl-color-gray-200);display:block}.tab-group{display:-ms-flexbox;display:flex;border:solid 1px transparent;border-radius:0}.tab-group .tab-group__tabs{display:-ms-flexbox;display:flex;position:relative}.tab-group .tab-group__active-tab-indicator{position:absolute;-webkit-transition:var(--sl-transition-fast) transform ease, var(--sl-transition-fast) width ease;transition:var(--sl-transition-fast) transform ease, var(--sl-transition-fast) width ease}.tab-group:not(.focus-visible) ::slotted(sl-tab){--focus-ring:none}.tab-group--has-scroll-controls .tab-group__nav-container{position:relative;padding:0 var(--sl-spacing-x-large)}.tab-group__scroll-button{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;position:absolute;top:0;bottom:0;width:var(--sl-spacing-x-large)}.tab-group__scroll-button--left{left:0}.tab-group__scroll-button--right{right:0}.tab-group--top{-ms-flex-direction:column;flex-direction:column}.tab-group--top .tab-group__nav-container{-ms-flex-order:1;order:1}.tab-group--top .tab-group__nav{display:-ms-flexbox;display:flex;overflow-x:auto;scrollbar-width:none;-ms-overflow-style:none}.tab-group--top .tab-group__nav::-webkit-scrollbar{width:0;height:0}.tab-group--top .tab-group__tabs{-ms-flex:1 1 auto;flex:1 1 auto;position:relative;-ms-flex-direction:row;flex-direction:row;border-bottom:solid 2px var(--tabs-border-color)}.tab-group--top .tab-group__active-tab-indicator{bottom:-2px;border-bottom:solid 2px var(--sl-color-primary-500)}.tab-group--top .tab-group__body{-ms-flex-order:2;order:2}.tab-group--bottom{-ms-flex-direction:column;flex-direction:column}.tab-group--bottom .tab-group__nav-container{-ms-flex-order:2;order:2}.tab-group--bottom .tab-group__nav{display:-ms-flexbox;display:flex;overflow-x:auto;scrollbar-width:none;-ms-overflow-style:none}.tab-group--bottom .tab-group__nav::-webkit-scrollbar{width:0;height:0}.tab-group--bottom .tab-group__tabs{-ms-flex:1 1 auto;flex:1 1 auto;position:relative;-ms-flex-direction:row;flex-direction:row;border-top:solid 2px var(--tabs-border-color)}.tab-group--bottom .tab-group__active-tab-indicator{top:calc(-1 * 2px);border-top:solid 2px var(--sl-color-primary-500)}.tab-group--bottom .tab-group__body{-ms-flex-order:1;order:1}.tab-group--left{-ms-flex-direction:row;flex-direction:row}.tab-group--left .tab-group__nav-container{-ms-flex-order:1;order:1}.tab-group--left .tab-group__tabs{-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-direction:column;flex-direction:column;border-right:solid 2px var(--tabs-border-color)}.tab-group--left .tab-group__active-tab-indicator{right:calc(-1 * 2px);border-right:solid 2px var(--sl-color-primary-500)}.tab-group--left .tab-group__body{-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-order:2;order:2}.tab-group--right{-ms-flex-direction:row;flex-direction:row}.tab-group--right .tab-group__nav-container{-ms-flex-order:2;order:2}.tab-group--right .tab-group__tabs{-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-direction:column;flex-direction:column;border-left:solid 2px var(--tabs-border-color)}.tab-group--right .tab-group__active-tab-indicator{left:calc(-1 * 2px);border-left:solid 2px var(--sl-color-primary-500)}.tab-group--right .tab-group__body{-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-order:1;order:1}';
      var c = t(
        'sl_tab_group',
        (function () {
          function t(t) {
            e(this, t);
            this.slTabShow = o(this, 'sl-tab-show', 7);
            this.slTabHide = o(this, 'sl-tab-hide', 7);
            this.hasScrollControls = false;
            this.placement = 'top';
            this.noScrollControls = false;
          }
          t.prototype.handlePlacementChange = function () {
            this.syncActiveTabIndicator();
          };
          t.prototype.handleNoScrollControlsChange = function () {
            this.updateScrollControls();
          };
          t.prototype.connectedCallback = function () {
            this.handleClick = this.handleClick.bind(this);
            this.handleKeyDown = this.handleKeyDown.bind(this);
            this.handleScrollLeft = this.handleScrollLeft.bind(this);
            this.handleScrollRight = this.handleScrollRight.bind(this);
          };
          t.prototype.componentDidLoad = function () {
            var t = this;
            var e = new IntersectionObserver(function (e, o) {
              if (e[0].intersectionRatio > 0) {
                t.setAriaLabels();
                t.setActiveTab(t.getActiveTab() || t.getAllTabs()[0], false);
                o.unobserve(e[0].target);
              }
            });
            e.observe(this.host);
            i.observe(this.tabGroup);
            this.resizeObserver = new ResizeObserver(function () {
              return t.updateScrollControls();
            });
            this.resizeObserver.observe(this.nav);
            requestAnimationFrame(function () {
              return t.updateScrollControls();
            });
            this.mutationObserver = new MutationObserver(function (e) {
              if (
                e.some(function (t) {
                  return !['aria-labelledby', 'aria-controls'].includes(t.attributeName);
                })
              ) {
                setTimeout(function () {
                  return t.setAriaLabels();
                });
              }
            });
            this.mutationObserver.observe(this.host, { attributes: true, childList: true, subtree: true });
          };
          t.prototype.disconnectedCallback = function () {
            this.mutationObserver.disconnect();
            i.unobserve(this.tabGroup);
            this.resizeObserver.unobserve(this.nav);
          };
          t.prototype.show = function (t) {
            return __awaiter(this, void 0, void 0, function () {
              var e, o;
              return __generator(this, function (r) {
                e = this.getAllTabs();
                o = e.find(function (e) {
                  return e.panel === t;
                });
                if (o) {
                  this.setActiveTab(o);
                }
                return [2];
              });
            });
          };
          t.prototype.getAllTabs = function (t) {
            if (t === void 0) {
              t = false;
            }
            var e = this.tabs.querySelector('slot');
            return __spreadArrays(e.assignedElements()).filter(function (e) {
              return t ? e.tagName.toLowerCase() === 'sl-tab' : e.tagName.toLowerCase() === 'sl-tab' && !e.disabled;
            });
          };
          t.prototype.getAllPanels = function () {
            var t = this.body.querySelector('slot');
            return __spreadArrays(t.assignedElements()).filter(function (t) {
              return t.tagName.toLowerCase() === 'sl-tab-panel';
            });
          };
          t.prototype.getActiveTab = function () {
            return this.getAllTabs().find(function (t) {
              return t.active;
            });
          };
          t.prototype.handleClick = function (t) {
            var e = t.target;
            var o = e.closest('sl-tab');
            var r = o.closest('sl-tab-group');
            if (r !== this.host) {
              return false;
            }
            if (o) {
              this.setActiveTab(o);
            }
          };
          t.prototype.handleKeyDown = function (t) {
            var e = t.target;
            var o = e.closest('sl-tab');
            var r = o.closest('sl-tab-group');
            if (r !== this.host) {
              return false;
            }
            if (['Enter', ' '].includes(t.key)) {
              if (o) {
                this.setActiveTab(o);
                t.preventDefault();
              }
            }
            if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'].includes(t.key)) {
              var a = document.activeElement;
              if (a && a.tagName.toLowerCase() === 'sl-tab') {
                var i = this.getAllTabs();
                var s = i.indexOf(a);
                if (t.key === 'Home') {
                  s = 0;
                } else if (t.key === 'End') {
                  s = i.length - 1;
                } else if (t.key === 'ArrowLeft') {
                  s = Math.max(0, s - 1);
                } else if (t.key === 'ArrowRight') {
                  s = Math.min(i.length - 1, s + 1);
                }
                i[s].setFocus({ preventScroll: true });
                if (['top', 'bottom'].includes(this.placement)) {
                  n(i[s], this.nav, 'horizontal');
                }
                t.preventDefault();
              }
            }
          };
          t.prototype.handleScrollLeft = function () {
            this.nav.scroll({ left: this.nav.scrollLeft - this.nav.clientWidth, behavior: 'smooth' });
          };
          t.prototype.handleScrollRight = function () {
            this.nav.scroll({ left: this.nav.scrollLeft + this.nav.clientWidth, behavior: 'smooth' });
          };
          t.prototype.updateScrollControls = function () {
            if (this.noScrollControls) {
              this.hasScrollControls = false;
            } else {
              this.hasScrollControls =
                ['top', 'bottom'].includes(this.placement) && this.nav.scrollWidth > this.nav.clientWidth;
            }
          };
          t.prototype.setActiveTab = function (t, e) {
            var o = this;
            if (e === void 0) {
              e = true;
            }
            if (t && t !== this.activeTab && !t.disabled) {
              var r = this.activeTab;
              this.activeTab = t;
              this.getAllTabs().map(function (t) {
                return (t.active = t === o.activeTab);
              });
              this.getAllPanels().map(function (t) {
                return (t.active = t.name === o.activeTab.panel);
              });
              this.syncActiveTabIndicator();
              if (['top', 'bottom'].includes(this.placement)) {
                n(this.activeTab, this.nav, 'horizontal');
              }
              if (e) {
                if (r) {
                  this.slTabHide.emit({ name: r.panel });
                }
                this.slTabShow.emit({ name: this.activeTab.panel });
              }
            }
          };
          t.prototype.setAriaLabels = function () {
            var t = this.getAllTabs();
            var e = this.getAllPanels();
            t.map(function (t) {
              var o = e.find(function (e) {
                return e.name === t.panel;
              });
              if (o) {
                t.setAttribute('aria-controls', o.getAttribute('id'));
                o.setAttribute('aria-labelledby', t.getAttribute('id'));
              }
            });
          };
          t.prototype.syncActiveTabIndicator = function () {
            var t = this.getActiveTab();
            var e = t.clientWidth;
            var o = t.clientHeight;
            var r = s(t, this.nav);
            var a = r.top + this.nav.scrollTop;
            var i = r.left + this.nav.scrollLeft;
            switch (this.placement) {
              case 'top':
              case 'bottom':
                this.activeTabIndicator.style.width = e + 'px';
                this.activeTabIndicator.style.height = null;
                this.activeTabIndicator.style.transform = 'translateX(' + i + 'px)';
                break;
              case 'left':
              case 'right':
                this.activeTabIndicator.style.width = null;
                this.activeTabIndicator.style.height = o + 'px';
                this.activeTabIndicator.style.transform = 'translateY(' + a + 'px)';
                break;
            }
          };
          t.prototype.render = function () {
            var t = this;
            return r(
              'div',
              {
                part: 'base',
                ref: function (e) {
                  return (t.tabGroup = e);
                },
                class: {
                  'tab-group': true,
                  'tab-group--top': this.placement === 'top',
                  'tab-group--bottom': this.placement === 'bottom',
                  'tab-group--left': this.placement === 'left',
                  'tab-group--right': this.placement === 'right',
                  'tab-group--has-scroll-controls': this.hasScrollControls
                },
                onClick: this.handleClick,
                onKeyDown: this.handleKeyDown
              },
              r(
                'div',
                { class: 'tab-group__nav-container' },
                this.hasScrollControls &&
                  r('sl-icon-button', {
                    class: 'tab-group__scroll-button tab-group__scroll-button--left',
                    exportparts: 'base:scroll-button',
                    name: 'chevron-left',
                    onClick: this.handleScrollLeft
                  }),
                r(
                  'div',
                  {
                    ref: function (e) {
                      return (t.nav = e);
                    },
                    key: 'nav',
                    part: 'nav',
                    class: 'tab-group__nav',
                    tabindex: '-1'
                  },
                  r(
                    'div',
                    {
                      ref: function (e) {
                        return (t.tabs = e);
                      },
                      part: 'tabs',
                      class: 'tab-group__tabs',
                      role: 'tablist'
                    },
                    r('div', {
                      ref: function (e) {
                        return (t.activeTabIndicator = e);
                      },
                      part: 'active-tab-indicator',
                      class: 'tab-group__active-tab-indicator'
                    }),
                    r('slot', { name: 'nav' })
                  )
                ),
                this.hasScrollControls &&
                  r('sl-icon-button', {
                    class: 'tab-group__scroll-button tab-group__scroll-button--right',
                    exportparts: 'base:scroll-button',
                    name: 'chevron-right',
                    onClick: this.handleScrollRight
                  })
              ),
              r(
                'div',
                {
                  ref: function (e) {
                    return (t.body = e);
                  },
                  part: 'body',
                  class: 'tab-group__body'
                },
                r('slot', null)
              )
            );
          };
          Object.defineProperty(t.prototype, 'host', {
            get: function () {
              return a(this);
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(t, 'watchers', {
            get: function () {
              return { placement: ['handlePlacementChange'], noScrollControls: ['handleNoScrollControlsChange'] };
            },
            enumerable: false,
            configurable: true
          });
          return t;
        })()
      );
      c.style = l;
    }
  };
});
