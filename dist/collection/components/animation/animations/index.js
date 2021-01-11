var __assign = (this && this.__assign) || function () {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
import animatecss from './animatecss';
import animista from './animista';
var sortObject = function (o) {
  return Object.keys(o)
    .sort()
    .reduce(function (r, k) { return ((r[k] = o[k]), r); }, {});
};
export default __assign({ none: [] }, sortObject(__assign(__assign({}, animatecss), animista)));
