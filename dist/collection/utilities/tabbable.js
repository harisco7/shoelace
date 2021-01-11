var __spreadArrays = (this && this.__spreadArrays) || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
      r[k] = a[j];
  return r;
};
export function isTabbable(el) {
  var tabIndex = el.tabIndex;
  return tabIndex > -1;
}
export function getNearestTabbableElement(el) {
  // Check the element
  if (isTabbable(el)) {
    return el;
  }
  // Check the element's shadow root
  if (el.shadowRoot) {
    var tabbableShadowChild = __spreadArrays(el.shadowRoot.children).find(isTabbable);
    if (tabbableShadowChild) {
      return tabbableShadowChild;
    }
  }
  // Check the element's children
  if (el.children) {
    return __spreadArrays(el.children).map(getNearestTabbableElement)[0];
  }
  return null;
}
