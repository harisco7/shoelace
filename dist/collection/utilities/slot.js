var __spreadArrays = (this && this.__spreadArrays) || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
      r[k] = a[j];
  return r;
};
//
// Given a slot, this function iterates over all of its assigned element and text nodes and returns the concatenated
// HTML as a string. This is useful because we can't use slot.innerHTML as an alternative.
//
export function getInnerHTML(slot) {
  var nodes = slot.assignedNodes({ flatten: true });
  var html = '';
  __spreadArrays(nodes).map(function (node) {
    if (node.nodeType === Node.ELEMENT_NODE) {
      html += node.outerHTML;
    }
    if (node.nodeType === Node.TEXT_NODE) {
      html += node.textContent;
    }
  });
  return html;
}
//
// Given a slot, this function iterates over all of its assigned text nodes and returns the concatenated text as a
// string. This is useful because we can't use slot.textContent as an alternative.
//
export function getTextContent(slot) {
  var nodes = slot ? slot.assignedNodes({ flatten: true }) : [];
  var text = '';
  __spreadArrays(nodes).map(function (node) {
    if (node.nodeType === Node.TEXT_NODE) {
      text += node.textContent;
    }
  });
  return text;
}
//
// Determines whether a slot with the given name exists in an element.
//
export function hasSlot(el, name) {
  return el.querySelector("[slot=\"" + name + "\"]") !== null;
}
