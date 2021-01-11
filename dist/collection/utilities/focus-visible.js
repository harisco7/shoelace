//
// Simulates :focus-visible behavior on an element by watching for certain keyboard and mouse heuristics and toggling a
// `focus-visible` class. Works at the component level so no global polyfill is necessary.
//
// This will eventually be removed pending better :focus-visible support: https://caniuse.com/#search=focus-visible
//
var listeners = new WeakMap();
export function observe(el) {
  var keys = ['Tab', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Home', 'End', 'PageDown', 'PageUp'];
  var is = function (event) {
    if (keys.includes(event.key)) {
      el.classList.add('focus-visible');
    }
  };
  var isNot = function () { return el.classList.remove('focus-visible'); };
  listeners.set(el, { is: is, isNot: isNot });
  el.addEventListener('keydown', is);
  el.addEventListener('keyup', is);
  el.addEventListener('mousedown', isNot);
  el.addEventListener('mousedown', isNot);
}
export function unobserve(el) {
  var _a = listeners.get(el), is = _a.is, isNot = _a.isNot;
  el.classList.remove('focus-visible');
  el.removeEventListener('keydown', is);
  el.removeEventListener('keyup', is);
  el.removeEventListener('mousedown', isNot);
  el.removeEventListener('mousedown', isNot);
}
export var focusVisible = {
  observe: observe,
  unobserve: unobserve
};
