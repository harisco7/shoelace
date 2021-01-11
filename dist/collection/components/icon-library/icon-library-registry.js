import { getAssetPath } from '@stencil/core';
var registry = [
  {
    name: 'default',
    resolver: function (name) { return getAssetPath("./icons/" + name + ".svg"); }
  }
];
var watchedIcons = [];
export function watchIcon(icon) {
  watchedIcons.push(icon);
}
export function unwatchIcon(icon) {
  watchedIcons = watchedIcons.filter(function (el) { return el !== icon; });
}
export function getLibrary(name) {
  return registry.filter(function (lib) { return lib.name === name; })[0];
}
export function registerLibrary(name, resolver, mutator) {
  unregisterLibrary(name);
  registry.push({ name: name, resolver: resolver, mutator: mutator });
  // Redraw watched icons
  watchedIcons.map(function (icon) {
    if (icon.library === name) {
      icon.redraw();
    }
  });
}
export function unregisterLibrary(name) {
  registry = registry.filter(function (lib) { return lib.name !== name; });
}
