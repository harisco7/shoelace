var activeModals = [];
var Modal = /** @class */ (function () {
  function Modal(element, options) {
    this.element = element;
    this.options = options;
    this.handleFocusIn = this.handleFocusIn.bind(this);
  }
  Modal.prototype.activate = function () {
    activeModals.push(this.element);
    document.addEventListener('focusin', this.handleFocusIn);
  };
  Modal.prototype.deactivate = function () {
    var _this = this;
    activeModals = activeModals.filter(function (modal) { return modal !== _this.element; });
    document.removeEventListener('focusin', this.handleFocusIn);
  };
  Modal.prototype.isActive = function () {
    // The "active" modal is always the most recent one shown
    return activeModals[activeModals.length - 1] === this.element;
  };
  Modal.prototype.handleFocusIn = function (event) {
    var target = event.target;
    var tagName = this.element.tagName.toLowerCase();
    // If focus is lost while the modal is active, run the onFocusOut callback
    if (this.isActive() && target.closest(tagName) !== this.element && typeof this.options.onFocusOut === 'function') {
      this.options.onFocusOut(event);
    }
  };
  return Modal;
}());
export default Modal;
