import { r as t } from './p-32052503.js';
const i = class {
  constructor(i) {
    t(this, i), (this.value = 0), (this.unit = 'bytes');
  }
  render() {
    return (function (t, i) {
      const s =
          'bytes' === (i = Object.assign({ unit: 'bytes', locale: void 0 }, i)).unit
            ? ['B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
            : ['b', 'kbit', 'Mbit', 'Gbit', 'Tbit', 'Pbit', 'Ebit', 'Zbit', 'Ybit'],
        r = t < 0;
      if (0 === (t = Math.abs(t))) return '0 B';
      const b = Math.min(Math.floor(Math.log10(t) / 3), s.length - 1);
      return `${r ? '-' : ''}${Number((t / Math.pow(1e3, b)).toPrecision(3)).toLocaleString(i.locale)} ${s[b]}`;
    })(this.value, { unit: this.unit, locale: this.locale });
  }
};
export { i as sl_format_bytes };
