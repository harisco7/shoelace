var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
    function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
    function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0: case 1: t = op; break;
        case 4: _.label++; return { value: op[1], done: false };
        case 5: _.label++; y = op[1]; op = [0]; continue;
        case 7: op = _.ops.pop(); _.trys.pop(); continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
          if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
          if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
          if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
          if (t[2]) _.ops.pop();
          _.trys.pop(); continue;
      }
      op = body.call(thisArg, _);
    } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
    if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
};
import { Component, Element, Event, Method, Prop, Watch, h } from '@stencil/core';
import { animations } from './animations';
import { easings } from './easings';
/**
 * @since 2.0
 * @status stable
 *
 * @slot - The element to animate. If multiple elements are to be animated, wrap them in a single container.
 */
var Animate = /** @class */ (function () {
  function Animate() {
    this.hasStarted = false;
    /** The name of the built-in animation to use. For custom animations, use the `keyframes` prop. */
    this.name = 'none';
    /** The number of milliseconds to delay the start of the animation. */
    this.delay = 0;
    /** Determines the direction of playback as well as the behavior when reaching the end of an iteration. */
    this.direction = 'normal';
    /** The number of milliseconds each iteration of the animation takes to complete. */
    this.duration = 1000;
    /**
     * The easing function to use for the animation. This can be a Shoelace easing function or a custom easing function
     * such as `cubic-bezier(0, 1, .76, 1.14)`.
     */
    this.easing = 'linear';
    /** The number of milliseconds to delay after the active period of an animation sequence. */
    this.endDelay = 0;
    /** Sets how the animation applies styles to its target before and after its execution. */
    this.fill = 'auto';
    /** The number of iterations to run before the animation completes. Defaults to `Infinity`, which loops. */
    this.iterations = Infinity;
    /** The offset at which to start the animation, usually between 0 (start) and 1 (end). */
    this.iterationStart = 0;
    /**
     * Sets the animation's playback rate. The default is `1`, which plays the animation at a normal speed. Setting this
     * to `2`, for example, will double the animation's speed. A negative value can be used to reverse the animation. This
     * value can be changed without causing the animation to restart.
     */
    this.playbackRate = 1;
    /** Pauses the animation. The animation will resume when this prop is removed. */
    this.pause = false;
  }
  // Restart the animation when any of these properties change
  Animate.prototype.handleRestartAnimation = function () {
    this.createAnimation();
  };
  Animate.prototype.handlePauseChange = function () {
    this.pause ? this.animation.pause() : this.animation.play();
    if (!this.pause && !this.hasStarted) {
      this.hasStarted = true;
      this.slStart.emit();
    }
  };
  Animate.prototype.handlePlaybackRateChange = function () {
    this.animation.playbackRate = this.playbackRate;
  };
  Animate.prototype.connectedCallback = function () {
    this.handleAnimationFinish = this.handleAnimationFinish.bind(this);
    this.handleAnimationCancel = this.handleAnimationCancel.bind(this);
    this.handleSlotChange = this.handleSlotChange.bind(this);
  };
  Animate.prototype.componentDidLoad = function () {
    this.createAnimation();
  };
  Animate.prototype.disconnectedCallback = function () {
    this.destroyAnimation();
  };
  Animate.prototype.handleAnimationFinish = function () {
    this.slFinish.emit();
  };
  Animate.prototype.handleAnimationCancel = function () {
    this.slCancel.emit();
  };
  Animate.prototype.handleSlotChange = function () {
    this.destroyAnimation();
    this.createAnimation();
  };
  Animate.prototype.createAnimation = function () {
    var easing = easings[this.easing] || this.easing;
    var keyframes = this.keyframes ? this.keyframes : animations[this.name];
    var slot = this.host.shadowRoot.querySelector('slot');
    var element = slot.assignedElements({ flatten: true })[0];
    if (!element) {
      return;
    }
    this.destroyAnimation();
    this.animation = element.animate(keyframes, {
      delay: this.delay,
      direction: this.direction,
      duration: this.duration,
      easing: easing,
      endDelay: this.endDelay,
      fill: this.fill,
      iterationStart: this.iterationStart,
      iterations: this.iterations
    });
    this.animation.playbackRate = this.playbackRate;
    this.animation.addEventListener('cancel', this.handleAnimationCancel);
    this.animation.addEventListener('finish', this.handleAnimationFinish);
    if (this.pause) {
      this.animation.pause();
    }
    else {
      this.hasStarted = true;
      this.slStart.emit();
    }
  };
  Animate.prototype.destroyAnimation = function () {
    if (this.animation) {
      this.animation.cancel();
      this.animation.removeEventListener('cancel', this.handleAnimationCancel);
      this.animation.removeEventListener('finish', this.handleAnimationFinish);
      this.animation = null;
      this.hasStarted = false;
    }
  };
  /** Clears all KeyframeEffects caused by this animation and aborts its playback. */
  Animate.prototype.cancel = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        try {
          this.animation.cancel();
        }
        catch (_b) { }
        return [2 /*return*/];
      });
    });
  };
  /** Sets the playback time to the end of the animation corresponding to the current playback direction. */
  Animate.prototype.finish = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        try {
          this.animation.finish();
        }
        catch (_b) { }
        return [2 /*return*/];
      });
    });
  };
  /** Gets a list of all supported animation names. */
  Animate.prototype.getAnimationNames = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2 /*return*/, Object.entries(animations).map(function (_a) {
            var name = _a[0];
            return name;
          })];
      });
    });
  };
  /** Gets a list of all supported easing function names. */
  Animate.prototype.getEasingNames = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2 /*return*/, Object.entries(easings).map(function (_a) {
            var name = _a[0];
            return name;
          })];
      });
    });
  };
  /** Gets the current time of the animation in milliseconds. */
  Animate.prototype.getCurrentTime = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2 /*return*/, this.animation.currentTime];
      });
    });
  };
  /** Sets the current time of the animation in milliseconds. */
  Animate.prototype.setCurrentTime = function (time) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        this.animation.currentTime = time;
        return [2 /*return*/];
      });
    });
  };
  Animate.prototype.render = function () {
    return h("slot", { onSlotchange: this.handleSlotChange });
  };
  Object.defineProperty(Animate, "is", {
    get: function () { return "sl-animation"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Animate, "encapsulation", {
    get: function () { return "shadow"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Animate, "originalStyleUrls", {
    get: function () { return {
      "$": ["animation.scss"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Animate, "styleUrls", {
    get: function () { return {
      "$": ["animation.css"]
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Animate, "properties", {
    get: function () { return {
      "name": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The name of the built-in animation to use. For custom animations, use the `keyframes` prop."
        },
        "attribute": "name",
        "reflect": false,
        "defaultValue": "'none'"
      },
      "delay": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The number of milliseconds to delay the start of the animation."
        },
        "attribute": "delay",
        "reflect": false,
        "defaultValue": "0"
      },
      "direction": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "PlaybackDirection",
          "resolved": "\"alternate\" | \"alternate-reverse\" | \"normal\" | \"reverse\"",
          "references": {
            "PlaybackDirection": {
              "location": "global"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Determines the direction of playback as well as the behavior when reaching the end of an iteration."
        },
        "attribute": "direction",
        "reflect": false,
        "defaultValue": "'normal'"
      },
      "duration": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The number of milliseconds each iteration of the animation takes to complete."
        },
        "attribute": "duration",
        "reflect": false,
        "defaultValue": "1000"
      },
      "easing": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The easing function to use for the animation. This can be a Shoelace easing function or a custom easing function\nsuch as `cubic-bezier(0, 1, .76, 1.14)`."
        },
        "attribute": "easing",
        "reflect": false,
        "defaultValue": "'linear'"
      },
      "endDelay": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The number of milliseconds to delay after the active period of an animation sequence."
        },
        "attribute": "end-delay",
        "reflect": false,
        "defaultValue": "0"
      },
      "fill": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "FillMode",
          "resolved": "\"auto\" | \"backwards\" | \"both\" | \"forwards\" | \"none\"",
          "references": {
            "FillMode": {
              "location": "global"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Sets how the animation applies styles to its target before and after its execution."
        },
        "attribute": "fill",
        "reflect": false,
        "defaultValue": "'auto'"
      },
      "iterations": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The number of iterations to run before the animation completes. Defaults to `Infinity`, which loops."
        },
        "attribute": "iterations",
        "reflect": false,
        "defaultValue": "Infinity"
      },
      "iterationStart": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The offset at which to start the animation, usually between 0 (start) and 1 (end)."
        },
        "attribute": "iteration-start",
        "reflect": false,
        "defaultValue": "0"
      },
      "keyframes": {
        "type": "unknown",
        "mutable": true,
        "complexType": {
          "original": "Keyframe[]",
          "resolved": "Keyframe[]",
          "references": {
            "Keyframe": {
              "location": "global"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The keyframes to use for the animation. If this is set, `name` will be ignored."
        }
      },
      "playbackRate": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Sets the animation's playback rate. The default is `1`, which plays the animation at a normal speed. Setting this\nto `2`, for example, will double the animation's speed. A negative value can be used to reverse the animation. This\nvalue can be changed without causing the animation to restart."
        },
        "attribute": "playback-rate",
        "reflect": false,
        "defaultValue": "1"
      },
      "pause": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Pauses the animation. The animation will resume when this prop is removed."
        },
        "attribute": "pause",
        "reflect": false,
        "defaultValue": "false"
      }
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Animate, "events", {
    get: function () { return [{
        "method": "slCancel",
        "name": "sl-cancel",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the animation is canceled."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "slFinish",
        "name": "sl-finish",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the animation finishes."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "slStart",
        "name": "sl-start",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the animation starts or restarts."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }]; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Animate, "methods", {
    get: function () { return {
      "cancel": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Clears all KeyframeEffects caused by this animation and aborts its playback.",
          "tags": []
        }
      },
      "finish": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Sets the playback time to the end of the animation corresponding to the current playback direction.",
          "tags": []
        }
      },
      "getAnimationNames": {
        "complexType": {
          "signature": "() => Promise<string[]>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<string[]>"
        },
        "docs": {
          "text": "Gets a list of all supported animation names.",
          "tags": []
        }
      },
      "getEasingNames": {
        "complexType": {
          "signature": "() => Promise<string[]>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<string[]>"
        },
        "docs": {
          "text": "Gets a list of all supported easing function names.",
          "tags": []
        }
      },
      "getCurrentTime": {
        "complexType": {
          "signature": "() => Promise<number>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<number>"
        },
        "docs": {
          "text": "Gets the current time of the animation in milliseconds.",
          "tags": []
        }
      },
      "setCurrentTime": {
        "complexType": {
          "signature": "(time: number) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Sets the current time of the animation in milliseconds.",
          "tags": []
        }
      }
    }; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Animate, "elementRef", {
    get: function () { return "host"; },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Animate, "watchers", {
    get: function () { return [{
        "propName": "delay",
        "methodName": "handleRestartAnimation"
      }, {
        "propName": "direction",
        "methodName": "handleRestartAnimation"
      }, {
        "propName": "easing",
        "methodName": "handleRestartAnimation"
      }, {
        "propName": "endDelay",
        "methodName": "handleRestartAnimation"
      }, {
        "propName": "fill",
        "methodName": "handleRestartAnimation"
      }, {
        "propName": "iterations",
        "methodName": "handleRestartAnimation"
      }, {
        "propName": "iterationStart",
        "methodName": "handleRestartAnimation"
      }, {
        "propName": "keyframes",
        "methodName": "handleRestartAnimation"
      }, {
        "propName": "name",
        "methodName": "handleRestartAnimation"
      }, {
        "propName": "pause",
        "methodName": "handlePauseChange"
      }, {
        "propName": "playbackRate",
        "methodName": "handlePlaybackRateChange"
      }]; },
    enumerable: false,
    configurable: true
  });
  return Animate;
}());
export { Animate };
