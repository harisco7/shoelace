//
// A positioning utility for popovers that handles show/hide/transitionEnd events with simple callbacks.
//
// Powered by Popper.js.
//
// NOTE:
//
// - The popover MUST have at least one property that transitions, otherwise transitionEnd won't fire and the popover
//   won't be hidden. If transitions are delegated to a child element, set the `transitionElement` property accordingly.
//
// - When the popover is shown, it's assigned `PopoverOptions.visibleClass`. You can use this class to provide different
//   transitions for show/hide.
//
// - Popper uses `translate3d` to position elements, so adding a transition to the `transform` property may have an
//   undesired effect when the element is shown and when its placement changes.
//
import { createPopper } from '@popperjs/core';
var Popover = /** @class */ (function () {
  function Popover(anchor, popover, options) {
    this.handleTransitionEnd = this.handleTransitionEnd.bind(this);
    this.anchor = anchor;
    this.popover = popover;
    this.options = Object.assign({
      skidding: 0,
      distance: 0,
      placement: 'bottom-start',
      strategy: 'absolute',
      transitionElement: this.popover,
      visibleClass: 'popover-visible',
      onAfterShow: function () { },
      onAfterHide: function () { },
      onTransitionEnd: function () { }
    }, options);
    this.isVisible = false;
    this.popover.hidden = true;
    this.popover.classList.remove(this.options.visibleClass);
    this.popover.addEventListener('transitionend', this.handleTransitionEnd);
  }
  Popover.prototype.handleTransitionEnd = function (event) {
    var target = event.target;
    // Make sure the transition event originates from from the correct element, and not one that has bubbled up
    if (target === this.options.transitionElement) {
      // This is called before the element is hidden so users can do things like reset scroll. It will fire once for
      // every transition property. Use `event.propertyName` to determine which property has finished transitioning.
      this.options.onTransitionEnd.call(this, event);
      // Make sure we only do this once, since transitionend will fire for every transition
      if (!this.isVisible && !this.popover.hidden) {
        this.popover.hidden = true;
        this.popover.classList.remove(this.options.visibleClass);
        this.options.onAfterHide.call(this);
      }
    }
  };
  Popover.prototype.destroy = function () {
    this.popover.removeEventListener('transitionend', this.handleTransitionEnd);
    if (this.popper) {
      this.popper.destroy();
      this.popper = null;
    }
  };
  Popover.prototype.show = function () {
    var _this = this;
    this.isVisible = true;
    this.popover.hidden = false;
    this.popover.clientWidth; // force reflow
    requestAnimationFrame(function () { return _this.popover.classList.add(_this.options.visibleClass); });
    if (this.popper) {
      this.popper.destroy();
    }
    this.popper = createPopper(this.anchor, this.popover, {
      placement: this.options.placement,
      strategy: this.options.strategy,
      modifiers: [
        {
          name: 'flip',
          options: {
            boundary: 'viewport'
          }
        },
        {
          name: 'offset',
          options: {
            offset: [this.options.skidding, this.options.distance]
          }
        }
      ]
    });
    this.popover.addEventListener('transitionend', function () { return _this.options.onAfterShow.call(_this); }, { once: true });
    // Reposition the menu after it appears in case a modifier kicked in
    requestAnimationFrame(function () { return _this.popper.update(); });
  };
  Popover.prototype.hide = function () {
    // Apply the hidden styles and wait for the transition before hiding completely
    this.isVisible = false;
    this.popover.classList.remove(this.options.visibleClass);
  };
  Popover.prototype.setOptions = function (options) {
    var _this = this;
    this.options = Object.assign(this.options, options);
    this.isVisible
      ? this.popover.classList.add(this.options.visibleClass)
      : this.popover.classList.remove(this.options.visibleClass);
    // Update popper options
    if (this.popper) {
      this.popper.setOptions({
        placement: this.options.placement,
        strategy: this.options.strategy
      });
      requestAnimationFrame(function () { return _this.popper.update(); });
    }
  };
  return Popover;
}());
export default Popover;
