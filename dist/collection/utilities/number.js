//
// Formats a number to a human-readable string of bytes or bits such as "100 MB"
//
export function formatBytes(bytes, options) {
  options = Object.assign({
    unit: 'bytes',
    locale: undefined
  }, options);
  var byteUnits = ['B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  var bitUnits = ['b', 'kbit', 'Mbit', 'Gbit', 'Tbit', 'Pbit', 'Ebit', 'Zbit', 'Ybit'];
  var units = options.unit === 'bytes' ? byteUnits : bitUnits;
  var isNegative = bytes < 0;
  bytes = Math.abs(bytes);
  if (bytes === 0)
    return '0 B';
  var i = Math.min(Math.floor(Math.log10(bytes) / 3), units.length - 1);
  var num = Number((bytes / Math.pow(1000, i)).toPrecision(3));
  var numString = num.toLocaleString(options.locale);
  var prefix = isNegative ? '-' : '';
  return "" + prefix + numString + " " + units[i];
}
