import { getOffset } from './offset';
var locks = new Set();
//
// Prevents body scrolling. Keeps track of which elements requested a lock so multiple levels of locking are possible
// without premature unlocking.
//
export function lockBodyScrolling(lockingEl) {
  locks.add(lockingEl);
  document.body.classList.add('sl-scroll-lock');
}
//
// Unlocks body scrolling. Scrolling will only be unlocked once all elements that requested a lock call this method.
//
export function unlockBodyScrolling(lockingEl) {
  locks.delete(lockingEl);
  if (locks.size === 0) {
    document.body.classList.remove('sl-scroll-lock');
  }
}
//
// Scrolls an element into view of its container. If the element is already in view, nothing will happen.
//
export function scrollIntoView(element, container, direction) {
  if (direction === void 0) { direction = 'vertical'; }
  var offset = getOffset(element, container);
  var offsetTop = offset.top + container.scrollTop;
  var offsetLeft = offset.left + container.scrollLeft;
  var minX = container.scrollLeft;
  var maxX = container.scrollLeft + container.offsetWidth;
  var minY = container.scrollTop;
  var maxY = container.scrollTop + container.offsetHeight;
  if (direction === 'horizontal' || direction === 'both') {
    if (offsetLeft < minX) {
      container.scrollTo({ left: offsetLeft, behavior: 'smooth' });
    }
    else if (offsetLeft + element.clientWidth > maxX) {
      container.scrollTo({ left: offsetLeft - container.offsetWidth + element.clientWidth, behavior: 'smooth' });
    }
  }
  if (direction === 'vertical' || direction === 'both') {
    if (offsetTop < minY) {
      container.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
    else if (offsetTop + element.clientHeight > maxY) {
      container.scrollTo({ top: offsetTop - container.offsetHeight + element.clientHeight, behavior: 'smooth' });
    }
  }
}
