//
// A lightweight debounce implementation
//
export function debounce(callback, delay) {
  var timer = null;
  return function () {
    if (timer) {
      return;
    }
    callback.apply(this, arguments);
    timer = setTimeout(function () { return (timer = null); }, delay);
  };
}
//
// A lightweight throttle implementation
//
export function throttle(callback, delay) {
  var isThrottled = false;
  var args;
  var context;
  function wrapper() {
    if (isThrottled) {
      args = arguments;
      context = this;
      return;
    }
    isThrottled = true;
    callback.apply(this, arguments);
    setTimeout(function () {
      isThrottled = false;
      if (args) {
        wrapper.apply(context, args);
        args = context = null;
      }
    }, delay);
  }
  return wrapper;
}
