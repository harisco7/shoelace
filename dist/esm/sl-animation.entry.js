import { r as registerInstance, c as createEvent, h, g as getElement } from './index-30311a18.js';

const bounce = [
  { offset: 0, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', transform: 'translate3d(0, 0, 0)' },
  { offset: 0.2, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', transform: 'translate3d(0, 0, 0)' },
  { offset: 0.4, easing: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)', transform: 'translate3d(0, -30px, 0) scaleY(1.1)' },
  { offset: 0.43, easing: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)', transform: 'translate3d(0, -30px, 0) scaleY(1.1)' },
  { offset: 0.53, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', transform: 'translate3d(0, 0, 0)' },
  { offset: 0.7, easing: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)', transform: 'translate3d(0, -15px, 0) scaleY(1.05)' },
  {
    offset: 0.8,
    'transition-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    transform: 'translate3d(0, 0, 0) scaleY(0.95)'
  },
  { offset: 0.9, transform: 'translate3d(0, -4px, 0) scaleY(1.02)' },
  { offset: 1, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', transform: 'translate3d(0, 0, 0)' }
];

const flash = [
  { offset: 0, opacity: '1' },
  { offset: 0.25, opacity: '0' },
  { offset: 0.5, opacity: '1' },
  { offset: 0.75, opacity: '0' },
  { offset: 1, opacity: '1' }
];

const headShake = [
  { offset: 0, transform: 'translateX(0)' },
  { offset: 0.065, transform: 'translateX(-6px) rotateY(-9deg)' },
  { offset: 0.185, transform: 'translateX(5px) rotateY(7deg)' },
  { offset: 0.315, transform: 'translateX(-3px) rotateY(-5deg)' },
  { offset: 0.435, transform: 'translateX(2px) rotateY(3deg)' },
  { offset: 0.5, transform: 'translateX(0)' }
];

const heartBeat = [
  { offset: 0, transform: 'scale(1)' },
  { offset: 0.14, transform: 'scale(1.3)' },
  { offset: 0.28, transform: 'scale(1)' },
  { offset: 0.42, transform: 'scale(1.3)' },
  { offset: 0.7, transform: 'scale(1)' }
];

const jello = [
  { offset: 0, transform: 'translate3d(0, 0, 0)' },
  { offset: 0.111, transform: 'translate3d(0, 0, 0)' },
  { offset: 0.222, transform: 'skewX(-12.5deg) skewY(-12.5deg)' },
  { offset: 0.33299999999999996, transform: 'skewX(6.25deg) skewY(6.25deg)' },
  { offset: 0.444, transform: 'skewX(-3.125deg) skewY(-3.125deg)' },
  { offset: 0.555, transform: 'skewX(1.5625deg) skewY(1.5625deg)' },
  { offset: 0.6659999999999999, transform: 'skewX(-0.78125deg) skewY(-0.78125deg)' },
  { offset: 0.777, transform: 'skewX(0.390625deg) skewY(0.390625deg)' },
  { offset: 0.888, transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)' },
  { offset: 1, transform: 'translate3d(0, 0, 0)' }
];

const pulse = [
  { offset: 0, transform: 'scale3d(1, 1, 1)' },
  { offset: 0.5, transform: 'scale3d(1.05, 1.05, 1.05)' },
  { offset: 1, transform: 'scale3d(1, 1, 1)' }
];

const rubberBand = [
  { offset: 0, transform: 'scale3d(1, 1, 1)' },
  { offset: 0.3, transform: 'scale3d(1.25, 0.75, 1)' },
  { offset: 0.4, transform: 'scale3d(0.75, 1.25, 1)' },
  { offset: 0.5, transform: 'scale3d(1.15, 0.85, 1)' },
  { offset: 0.65, transform: 'scale3d(0.95, 1.05, 1)' },
  { offset: 0.75, transform: 'scale3d(1.05, 0.95, 1)' },
  { offset: 1, transform: 'scale3d(1, 1, 1)' }
];

const shake = [
  { offset: 0, transform: 'translate3d(0, 0, 0)' },
  { offset: 0.1, transform: 'translate3d(-10px, 0, 0)' },
  { offset: 0.2, transform: 'translate3d(10px, 0, 0)' },
  { offset: 0.3, transform: 'translate3d(-10px, 0, 0)' },
  { offset: 0.4, transform: 'translate3d(10px, 0, 0)' },
  { offset: 0.5, transform: 'translate3d(-10px, 0, 0)' },
  { offset: 0.6, transform: 'translate3d(10px, 0, 0)' },
  { offset: 0.7, transform: 'translate3d(-10px, 0, 0)' },
  { offset: 0.8, transform: 'translate3d(10px, 0, 0)' },
  { offset: 0.9, transform: 'translate3d(-10px, 0, 0)' },
  { offset: 1, transform: 'translate3d(0, 0, 0)' }
];

const shakeX = [
  { offset: 0, transform: 'translate3d(0, 0, 0)' },
  { offset: 0.1, transform: 'translate3d(-10px, 0, 0)' },
  { offset: 0.2, transform: 'translate3d(10px, 0, 0)' },
  { offset: 0.3, transform: 'translate3d(-10px, 0, 0)' },
  { offset: 0.4, transform: 'translate3d(10px, 0, 0)' },
  { offset: 0.5, transform: 'translate3d(-10px, 0, 0)' },
  { offset: 0.6, transform: 'translate3d(10px, 0, 0)' },
  { offset: 0.7, transform: 'translate3d(-10px, 0, 0)' },
  { offset: 0.8, transform: 'translate3d(10px, 0, 0)' },
  { offset: 0.9, transform: 'translate3d(-10px, 0, 0)' },
  { offset: 1, transform: 'translate3d(0, 0, 0)' }
];

const shakeY = [
  { offset: 0, transform: 'translate3d(0, 0, 0)' },
  { offset: 0.1, transform: 'translate3d(0, -10px, 0)' },
  { offset: 0.2, transform: 'translate3d(0, 10px, 0)' },
  { offset: 0.3, transform: 'translate3d(0, -10px, 0)' },
  { offset: 0.4, transform: 'translate3d(0, 10px, 0)' },
  { offset: 0.5, transform: 'translate3d(0, -10px, 0)' },
  { offset: 0.6, transform: 'translate3d(0, 10px, 0)' },
  { offset: 0.7, transform: 'translate3d(0, -10px, 0)' },
  { offset: 0.8, transform: 'translate3d(0, 10px, 0)' },
  { offset: 0.9, transform: 'translate3d(0, -10px, 0)' },
  { offset: 1, transform: 'translate3d(0, 0, 0)' }
];

const swing = [
  { offset: 0.2, transform: 'rotate3d(0, 0, 1, 15deg)' },
  { offset: 0.4, transform: 'rotate3d(0, 0, 1, -10deg)' },
  { offset: 0.6, transform: 'rotate3d(0, 0, 1, 5deg)' },
  { offset: 0.8, transform: 'rotate3d(0, 0, 1, -5deg)' },
  { offset: 1, transform: 'rotate3d(0, 0, 1, 0deg)' }
];

const tada = [
  { offset: 0, transform: 'scale3d(1, 1, 1)' },
  { offset: 0.1, transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)' },
  { offset: 0.2, transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)' },
  { offset: 0.3, transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)' },
  { offset: 0.4, transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)' },
  { offset: 0.5, transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)' },
  { offset: 0.6, transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)' },
  { offset: 0.7, transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)' },
  { offset: 0.8, transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)' },
  { offset: 0.9, transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)' },
  { offset: 1, transform: 'scale3d(1, 1, 1)' }
];

const wobble = [
  { offset: 0, transform: 'translate3d(0, 0, 0)' },
  { offset: 0.15, transform: 'translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)' },
  { offset: 0.3, transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)' },
  { offset: 0.45, transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)' },
  { offset: 0.6, transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)' },
  { offset: 0.75, transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)' },
  { offset: 1, transform: 'translate3d(0, 0, 0)' }
];

const backInDown = [
  { offset: 0, transform: 'translateY(-1200px) scale(0.7)', opacity: '0.7' },
  { offset: 0.8, transform: 'translateY(0px) scale(0.7)', opacity: '0.7' },
  { offset: 1, transform: 'scale(1)', opacity: '1' }
];

const backInLeft = [
  { offset: 0, transform: 'translateX(-2000px) scale(0.7)', opacity: '0.7' },
  { offset: 0.8, transform: 'translateX(0px) scale(0.7)', opacity: '0.7' },
  { offset: 1, transform: 'scale(1)', opacity: '1' }
];

const backInRight = [
  { offset: 0, transform: 'translateX(2000px) scale(0.7)', opacity: '0.7' },
  { offset: 0.8, transform: 'translateX(0px) scale(0.7)', opacity: '0.7' },
  { offset: 1, transform: 'scale(1)', opacity: '1' }
];

const backInUp = [
  { offset: 0, transform: 'translateY(1200px) scale(0.7)', opacity: '0.7' },
  { offset: 0.8, transform: 'translateY(0px) scale(0.7)', opacity: '0.7' },
  { offset: 1, transform: 'scale(1)', opacity: '1' }
];

const backOutDown = [
  { offset: 0, transform: 'scale(1)', opacity: '1' },
  { offset: 0.2, transform: 'translateY(0px) scale(0.7)', opacity: '0.7' },
  { offset: 1, transform: 'translateY(700px) scale(0.7)', opacity: '0.7' }
];

const backOutLeft = [
  { offset: 0, transform: 'scale(1)', opacity: '1' },
  { offset: 0.2, transform: 'translateX(0px) scale(0.7)', opacity: '0.7' },
  { offset: 1, transform: 'translateX(-2000px) scale(0.7)', opacity: '0.7' }
];

const backOutRight = [
  { offset: 0, transform: 'scale(1)', opacity: '1' },
  { offset: 0.2, transform: 'translateX(0px) scale(0.7)', opacity: '0.7' },
  { offset: 1, transform: 'translateX(2000px) scale(0.7)', opacity: '0.7' }
];

const backOutUp = [
  { offset: 0, transform: 'scale(1)', opacity: '1' },
  { offset: 0.2, transform: 'translateY(0px) scale(0.7)', opacity: '0.7' },
  { offset: 1, transform: 'translateY(-700px) scale(0.7)', opacity: '0.7' }
];

const bounceIn = [
  { offset: 0, opacity: '0', transform: 'scale3d(0.3, 0.3, 0.3)' },
  { offset: 0, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 0.2, transform: 'scale3d(1.1, 1.1, 1.1)' },
  { offset: 0.2, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 0.4, transform: 'scale3d(0.9, 0.9, 0.9)' },
  { offset: 0.4, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 0.6, opacity: '1', transform: 'scale3d(1.03, 1.03, 1.03)' },
  { offset: 0.6, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 0.8, transform: 'scale3d(0.97, 0.97, 0.97)' },
  { offset: 0.8, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 1, opacity: '1', transform: 'scale3d(1, 1, 1)' },
  { offset: 1, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' }
];

const bounceInDown = [
  { offset: 0, opacity: '0', transform: 'translate3d(0, -3000px, 0) scaleY(3)' },
  { offset: 0, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 0.6, opacity: '1', transform: 'translate3d(0, 25px, 0) scaleY(0.9)' },
  { offset: 0.6, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 0.75, transform: 'translate3d(0, -10px, 0) scaleY(0.95)' },
  { offset: 0.75, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 0.9, transform: 'translate3d(0, 5px, 0) scaleY(0.985)' },
  { offset: 0.9, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 1, transform: 'translate3d(0, 0, 0)' },
  { offset: 1, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' }
];

const bounceInLeft = [
  { offset: 0, opacity: '0', transform: 'translate3d(-3000px, 0, 0) scaleX(3)' },
  { offset: 0, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 0.6, opacity: '1', transform: 'translate3d(25px, 0, 0) scaleX(1)' },
  { offset: 0.6, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 0.75, transform: 'translate3d(-10px, 0, 0) scaleX(0.98)' },
  { offset: 0.75, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 0.9, transform: 'translate3d(5px, 0, 0) scaleX(0.995)' },
  { offset: 0.9, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 1, transform: 'translate3d(0, 0, 0)' },
  { offset: 1, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' }
];

const bounceInRight = [
  { offset: 0, opacity: '0', transform: 'translate3d(3000px, 0, 0) scaleX(3)' },
  { offset: 0, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 0.6, opacity: '1', transform: 'translate3d(-25px, 0, 0) scaleX(1)' },
  { offset: 0.6, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 0.75, transform: 'translate3d(10px, 0, 0) scaleX(0.98)' },
  { offset: 0.75, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 0.9, transform: 'translate3d(-5px, 0, 0) scaleX(0.995)' },
  { offset: 0.9, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 1, transform: 'translate3d(0, 0, 0)' },
  { offset: 1, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' }
];

const bounceInUp = [
  { offset: 0, opacity: '0', transform: 'translate3d(0, 3000px, 0) scaleY(5)' },
  { offset: 0, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 0.6, opacity: '1', transform: 'translate3d(0, -20px, 0) scaleY(0.9)' },
  { offset: 0.6, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 0.75, transform: 'translate3d(0, 10px, 0) scaleY(0.95)' },
  { offset: 0.75, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 0.9, transform: 'translate3d(0, -5px, 0) scaleY(0.985)' },
  { offset: 0.9, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 1, transform: 'translate3d(0, 0, 0)' },
  { offset: 1, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' }
];

const bounceOut = [
  { offset: 0.2, transform: 'scale3d(0.9, 0.9, 0.9)' },
  { offset: 0.5, opacity: '1', transform: 'scale3d(1.1, 1.1, 1.1)' },
  { offset: 0.55, opacity: '1', transform: 'scale3d(1.1, 1.1, 1.1)' },
  { offset: 1, opacity: '0', transform: 'scale3d(0.3, 0.3, 0.3)' }
];

const bounceOutDown = [
  { offset: 0.2, transform: 'translate3d(0, 10px, 0) scaleY(0.985)' },
  { offset: 0.4, opacity: '1', transform: 'translate3d(0, -20px, 0) scaleY(0.9)' },
  { offset: 0.45, opacity: '1', transform: 'translate3d(0, -20px, 0) scaleY(0.9)' },
  { offset: 1, opacity: '0', transform: 'translate3d(0, 2000px, 0) scaleY(3)' }
];

const bounceOutLeft = [
  { offset: 0.2, opacity: '1', transform: 'translate3d(20px, 0, 0) scaleX(0.9)' },
  { offset: 1, opacity: '0', transform: 'translate3d(-2000px, 0, 0) scaleX(2)' }
];

const bounceOutRight = [
  { offset: 0.2, opacity: '1', transform: 'translate3d(-20px, 0, 0) scaleX(0.9)' },
  { offset: 1, opacity: '0', transform: 'translate3d(2000px, 0, 0) scaleX(2)' }
];

const bounceOutUp = [
  { offset: 0.2, transform: 'translate3d(0, -10px, 0) scaleY(0.985)' },
  { offset: 0.4, opacity: '1', transform: 'translate3d(0, 20px, 0) scaleY(0.9)' },
  { offset: 0.45, opacity: '1', transform: 'translate3d(0, 20px, 0) scaleY(0.9)' },
  { offset: 1, opacity: '0', transform: 'translate3d(0, -2000px, 0) scaleY(3)' }
];

const fadeIn = [
  { offset: 0, opacity: '0' },
  { offset: 1, opacity: '1' }
];

const fadeInBottomLeft = [
  { offset: 0, opacity: '0', transform: 'translate3d(-100%, 100%, 0)' },
  { offset: 1, opacity: '1', transform: 'translate3d(0, 0, 0)' }
];

const fadeInBottomRight = [
  { offset: 0, opacity: '0', transform: 'translate3d(100%, 100%, 0)' },
  { offset: 1, opacity: '1', transform: 'translate3d(0, 0, 0)' }
];

const fadeInDown = [
  { offset: 0, opacity: '0', transform: 'translate3d(0, -100%, 0)' },
  { offset: 1, opacity: '1', transform: 'translate3d(0, 0, 0)' }
];

const fadeInDownBig = [
  { offset: 0, opacity: '0', transform: 'translate3d(0, -2000px, 0)' },
  { offset: 1, opacity: '1', transform: 'translate3d(0, 0, 0)' }
];

const fadeInLeft = [
  { offset: 0, opacity: '0', transform: 'translate3d(-100%, 0, 0)' },
  { offset: 1, opacity: '1', transform: 'translate3d(0, 0, 0)' }
];

const fadeInLeftBig = [
  { offset: 0, opacity: '0', transform: 'translate3d(-2000px, 0, 0)' },
  { offset: 1, opacity: '1', transform: 'translate3d(0, 0, 0)' }
];

const fadeInRight = [
  { offset: 0, opacity: '0', transform: 'translate3d(100%, 0, 0)' },
  { offset: 1, opacity: '1', transform: 'translate3d(0, 0, 0)' }
];

const fadeInRightBig = [
  { offset: 0, opacity: '0', transform: 'translate3d(2000px, 0, 0)' },
  { offset: 1, opacity: '1', transform: 'translate3d(0, 0, 0)' }
];

const fadeInTopLeft = [
  { offset: 0, opacity: '0', transform: 'translate3d(-100%, -100%, 0)' },
  { offset: 1, opacity: '1', transform: 'translate3d(0, 0, 0)' }
];

const fadeInTopRight = [
  { offset: 0, opacity: '0', transform: 'translate3d(100%, -100%, 0)' },
  { offset: 1, opacity: '1', transform: 'translate3d(0, 0, 0)' }
];

const fadeInUp = [
  { offset: 0, opacity: '0', transform: 'translate3d(0, 100%, 0)' },
  { offset: 1, opacity: '1', transform: 'translate3d(0, 0, 0)' }
];

const fadeInUpBig = [
  { offset: 0, opacity: '0', transform: 'translate3d(0, 2000px, 0)' },
  { offset: 1, opacity: '1', transform: 'translate3d(0, 0, 0)' }
];

const fadeOut = [
  { offset: 0, opacity: '1' },
  { offset: 1, opacity: '0' }
];

const fadeOutBottomLeft = [
  { offset: 0, opacity: '1', transform: 'translate3d(0, 0, 0)' },
  { offset: 1, opacity: '0', transform: 'translate3d(-100%, 100%, 0)' }
];

const fadeOutBottomRight = [
  { offset: 0, opacity: '1', transform: 'translate3d(0, 0, 0)' },
  { offset: 1, opacity: '0', transform: 'translate3d(100%, 100%, 0)' }
];

const fadeOutDown = [
  { offset: 0, opacity: '1' },
  { offset: 1, opacity: '0', transform: 'translate3d(0, 100%, 0)' }
];

const fadeOutDownBig = [
  { offset: 0, opacity: '1' },
  { offset: 1, opacity: '0', transform: 'translate3d(0, 2000px, 0)' }
];

const fadeOutLeft = [
  { offset: 0, opacity: '1' },
  { offset: 1, opacity: '0', transform: 'translate3d(-100%, 0, 0)' }
];

const fadeOutLeftBig = [
  { offset: 0, opacity: '1' },
  { offset: 1, opacity: '0', transform: 'translate3d(-2000px, 0, 0)' }
];

const fadeOutRight = [
  { offset: 0, opacity: '1' },
  { offset: 1, opacity: '0', transform: 'translate3d(100%, 0, 0)' }
];

const fadeOutRightBig = [
  { offset: 0, opacity: '1' },
  { offset: 1, opacity: '0', transform: 'translate3d(2000px, 0, 0)' }
];

const fadeOutTopLeft = [
  { offset: 0, opacity: '1', transform: 'translate3d(0, 0, 0)' },
  { offset: 1, opacity: '0', transform: 'translate3d(-100%, -100%, 0)' }
];

const fadeOutTopRight = [
  { offset: 0, opacity: '1', transform: 'translate3d(0, 0, 0)' },
  { offset: 1, opacity: '0', transform: 'translate3d(100%, -100%, 0)' }
];

const fadeOutUp = [
  { offset: 0, opacity: '1' },
  { offset: 1, opacity: '0', transform: 'translate3d(0, -100%, 0)' }
];

const fadeOutUpBig = [
  { offset: 0, opacity: '1' },
  { offset: 1, opacity: '0', transform: 'translate3d(0, -2000px, 0)' }
];

const flip = [
  {
    offset: 0,
    transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)',
    easing: 'ease-out'
  },
  {
    offset: 0.4,
    transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n      rotate3d(0, 1, 0, -190deg)',
    easing: 'ease-out'
  },
  {
    offset: 0.5,
    transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n      rotate3d(0, 1, 0, -170deg)',
    easing: 'ease-in'
  },
  {
    offset: 0.8,
    transform: 'perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)\n      rotate3d(0, 1, 0, 0deg)',
    easing: 'ease-in'
  },
  {
    offset: 1,
    transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)',
    easing: 'ease-in'
  }
];

const flipInX = [
  { offset: 0, transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)', easing: 'ease-in', opacity: '0' },
  { offset: 0.4, transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)', easing: 'ease-in' },
  { offset: 0.6, transform: 'perspective(400px) rotate3d(1, 0, 0, 10deg)', opacity: '1' },
  { offset: 0.8, transform: 'perspective(400px) rotate3d(1, 0, 0, -5deg)' },
  { offset: 1, transform: 'perspective(400px)' }
];

const flipInY = [
  { offset: 0, transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', easing: 'ease-in', opacity: '0' },
  { offset: 0.4, transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)', easing: 'ease-in' },
  { offset: 0.6, transform: 'perspective(400px) rotate3d(0, 1, 0, 10deg)', opacity: '1' },
  { offset: 0.8, transform: 'perspective(400px) rotate3d(0, 1, 0, -5deg)' },
  { offset: 1, transform: 'perspective(400px)' }
];

const flipOutX = [
  { offset: 0, transform: 'perspective(400px)' },
  { offset: 0.3, transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)', opacity: '1' },
  { offset: 1, transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)', opacity: '0' }
];

const flipOutY = [
  { offset: 0, transform: 'perspective(400px)' },
  { offset: 0.3, transform: 'perspective(400px) rotate3d(0, 1, 0, -15deg)', opacity: '1' },
  { offset: 1, transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', opacity: '0' }
];

const lightSpeedInLeft = [
  { offset: 0, transform: 'translate3d(-100%, 0, 0) skewX(30deg)', opacity: '0' },
  { offset: 0.6, transform: 'skewX(-20deg)', opacity: '1' },
  { offset: 0.8, transform: 'skewX(5deg)' },
  { offset: 1, transform: 'translate3d(0, 0, 0)' }
];

const lightSpeedInRight = [
  { offset: 0, transform: 'translate3d(100%, 0, 0) skewX(-30deg)', opacity: '0' },
  { offset: 0.6, transform: 'skewX(20deg)', opacity: '1' },
  { offset: 0.8, transform: 'skewX(-5deg)' },
  { offset: 1, transform: 'translate3d(0, 0, 0)' }
];

const lightSpeedOutLeft = [
  { offset: 0, opacity: '1' },
  { offset: 1, transform: 'translate3d(-100%, 0, 0) skewX(-30deg)', opacity: '0' }
];

const lightSpeedOutRight = [
  { offset: 0, opacity: '1' },
  { offset: 1, transform: 'translate3d(100%, 0, 0) skewX(30deg)', opacity: '0' }
];

const rotateIn = [
  { offset: 0, transform: 'rotate3d(0, 0, 1, -200deg)', opacity: '0' },
  { offset: 1, transform: 'translate3d(0, 0, 0)', opacity: '1' }
];

const rotateInDownLeft = [
  { offset: 0, transform: 'rotate3d(0, 0, 1, -45deg)', opacity: '0' },
  { offset: 1, transform: 'translate3d(0, 0, 0)', opacity: '1' }
];

const rotateInDownRight = [
  { offset: 0, transform: 'rotate3d(0, 0, 1, 45deg)', opacity: '0' },
  { offset: 1, transform: 'translate3d(0, 0, 0)', opacity: '1' }
];

const rotateInUpLeft = [
  { offset: 0, transform: 'rotate3d(0, 0, 1, 45deg)', opacity: '0' },
  { offset: 1, transform: 'translate3d(0, 0, 0)', opacity: '1' }
];

const rotateInUpRight = [
  { offset: 0, transform: 'rotate3d(0, 0, 1, -90deg)', opacity: '0' },
  { offset: 1, transform: 'translate3d(0, 0, 0)', opacity: '1' }
];

const rotateOut = [
  { offset: 0, opacity: '1' },
  { offset: 1, transform: 'rotate3d(0, 0, 1, 200deg)', opacity: '0' }
];

const rotateOutDownLeft = [
  { offset: 0, opacity: '1' },
  { offset: 1, transform: 'rotate3d(0, 0, 1, 45deg)', opacity: '0' }
];

const rotateOutDownRight = [
  { offset: 0, opacity: '1' },
  { offset: 1, transform: 'rotate3d(0, 0, 1, -45deg)', opacity: '0' }
];

const rotateOutUpLeft = [
  { offset: 0, opacity: '1' },
  { offset: 1, transform: 'rotate3d(0, 0, 1, -45deg)', opacity: '0' }
];

const rotateOutUpRight = [
  { offset: 0, opacity: '1' },
  { offset: 1, transform: 'rotate3d(0, 0, 1, 90deg)', opacity: '0' }
];

const slideInDown = [
  { offset: 0, transform: 'translate3d(0, -100%, 0)', visibility: 'visible' },
  { offset: 1, transform: 'translate3d(0, 0, 0)' }
];

const slideInLeft = [
  { offset: 0, transform: 'translate3d(-100%, 0, 0)', visibility: 'visible' },
  { offset: 1, transform: 'translate3d(0, 0, 0)' }
];

const slideInRight = [
  { offset: 0, transform: 'translate3d(100%, 0, 0)', visibility: 'visible' },
  { offset: 1, transform: 'translate3d(0, 0, 0)' }
];

const slideInUp = [
  { offset: 0, transform: 'translate3d(0, 100%, 0)', visibility: 'visible' },
  { offset: 1, transform: 'translate3d(0, 0, 0)' }
];

const slideOutDown = [
  { offset: 0, transform: 'translate3d(0, 0, 0)' },
  { offset: 1, visibility: 'hidden', transform: 'translate3d(0, 100%, 0)' }
];

const slideOutLeft = [
  { offset: 0, transform: 'translate3d(0, 0, 0)' },
  { offset: 1, visibility: 'hidden', transform: 'translate3d(-100%, 0, 0)' }
];

const slideOutRight = [
  { offset: 0, transform: 'translate3d(0, 0, 0)' },
  { offset: 1, visibility: 'hidden', transform: 'translate3d(100%, 0, 0)' }
];

const slideOutUp = [
  { offset: 0, transform: 'translate3d(0, 0, 0)' },
  { offset: 1, visibility: 'hidden', transform: 'translate3d(0, -100%, 0)' }
];

const hinge = [
  { offset: 0, easing: 'ease-in-out' },
  { offset: 0.2, transform: 'rotate3d(0, 0, 1, 80deg)', easing: 'ease-in-out' },
  { offset: 0.4, transform: 'rotate3d(0, 0, 1, 60deg)', easing: 'ease-in-out', opacity: '1' },
  { offset: 0.6, transform: 'rotate3d(0, 0, 1, 80deg)', easing: 'ease-in-out' },
  { offset: 0.8, transform: 'rotate3d(0, 0, 1, 60deg)', easing: 'ease-in-out', opacity: '1' },
  { offset: 1, transform: 'translate3d(0, 700px, 0)', opacity: '0' }
];

const jackInTheBox = [
  { offset: 0, opacity: '0', transform: 'scale(0.1) rotate(30deg)', 'transform-origin': 'center bottom' },
  { offset: 0.5, transform: 'rotate(-10deg)' },
  { offset: 0.7, transform: 'rotate(3deg)' },
  { offset: 1, opacity: '1', transform: 'scale(1)' }
];

const rollIn = [
  { offset: 0, opacity: '0', transform: 'translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)' },
  { offset: 1, opacity: '1', transform: 'translate3d(0, 0, 0)' }
];

const rollOut = [
  { offset: 0, opacity: '1' },
  { offset: 1, opacity: '0', transform: 'translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)' }
];

const zoomIn = [
  { offset: 0, opacity: '0', transform: 'scale3d(0.3, 0.3, 0.3)' },
  { offset: 0.5, opacity: '1' }
];

const zoomInDown = [
  {
    offset: 0,
    opacity: '0',
    transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)',
    easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)'
  },
  {
    offset: 0.6,
    opacity: '1',
    transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)',
    easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)'
  }
];

const zoomInLeft = [
  {
    offset: 0,
    opacity: '0',
    transform: 'scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)',
    easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)'
  },
  {
    offset: 0.6,
    opacity: '1',
    transform: 'scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)',
    easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)'
  }
];

const zoomInRight = [
  {
    offset: 0,
    opacity: '0',
    transform: 'scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)',
    easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)'
  },
  {
    offset: 0.6,
    opacity: '1',
    transform: 'scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)',
    easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)'
  }
];

const zoomInUp = [
  {
    offset: 0,
    opacity: '0',
    transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)',
    easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)'
  },
  {
    offset: 0.6,
    opacity: '1',
    transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)',
    easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)'
  }
];

const zoomOut = [
  { offset: 0, opacity: '1' },
  { offset: 0.5, opacity: '0', transform: 'scale3d(0.3, 0.3, 0.3)' },
  { offset: 1, opacity: '0' }
];

const zoomOutDown = [
  {
    offset: 0.4,
    opacity: '1',
    transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)',
    easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)'
  },
  {
    offset: 1,
    opacity: '0',
    transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)',
    easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)'
  }
];

const zoomOutLeft = [
  { offset: 0.4, opacity: '1', transform: 'scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)' },
  { offset: 1, opacity: '0', transform: 'scale(0.1) translate3d(-2000px, 0, 0)' }
];

const zoomOutRight = [
  { offset: 0.4, opacity: '1', transform: 'scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)' },
  { offset: 1, opacity: '0', transform: 'scale(0.1) translate3d(2000px, 0, 0)' }
];

const zoomOutUp = [
  {
    offset: 0.4,
    opacity: '1',
    transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)',
    easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)'
  },
  {
    offset: 1,
    opacity: '0',
    transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)',
    easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)'
  }
];

const animations = /*#__PURE__*/Object.freeze({
  __proto__: null,
  bounce: bounce,
  flash: flash,
  headShake: headShake,
  heartBeat: heartBeat,
  jello: jello,
  pulse: pulse,
  rubberBand: rubberBand,
  shake: shake,
  shakeX: shakeX,
  shakeY: shakeY,
  swing: swing,
  tada: tada,
  wobble: wobble,
  backInDown: backInDown,
  backInLeft: backInLeft,
  backInRight: backInRight,
  backInUp: backInUp,
  backOutDown: backOutDown,
  backOutLeft: backOutLeft,
  backOutRight: backOutRight,
  backOutUp: backOutUp,
  bounceIn: bounceIn,
  bounceInDown: bounceInDown,
  bounceInLeft: bounceInLeft,
  bounceInRight: bounceInRight,
  bounceInUp: bounceInUp,
  bounceOut: bounceOut,
  bounceOutDown: bounceOutDown,
  bounceOutLeft: bounceOutLeft,
  bounceOutRight: bounceOutRight,
  bounceOutUp: bounceOutUp,
  fadeIn: fadeIn,
  fadeInBottomLeft: fadeInBottomLeft,
  fadeInBottomRight: fadeInBottomRight,
  fadeInDown: fadeInDown,
  fadeInDownBig: fadeInDownBig,
  fadeInLeft: fadeInLeft,
  fadeInLeftBig: fadeInLeftBig,
  fadeInRight: fadeInRight,
  fadeInRightBig: fadeInRightBig,
  fadeInTopLeft: fadeInTopLeft,
  fadeInTopRight: fadeInTopRight,
  fadeInUp: fadeInUp,
  fadeInUpBig: fadeInUpBig,
  fadeOut: fadeOut,
  fadeOutBottomLeft: fadeOutBottomLeft,
  fadeOutBottomRight: fadeOutBottomRight,
  fadeOutDown: fadeOutDown,
  fadeOutDownBig: fadeOutDownBig,
  fadeOutLeft: fadeOutLeft,
  fadeOutLeftBig: fadeOutLeftBig,
  fadeOutRight: fadeOutRight,
  fadeOutRightBig: fadeOutRightBig,
  fadeOutTopLeft: fadeOutTopLeft,
  fadeOutTopRight: fadeOutTopRight,
  fadeOutUp: fadeOutUp,
  fadeOutUpBig: fadeOutUpBig,
  flip: flip,
  flipInX: flipInX,
  flipInY: flipInY,
  flipOutX: flipOutX,
  flipOutY: flipOutY,
  lightSpeedInLeft: lightSpeedInLeft,
  lightSpeedInRight: lightSpeedInRight,
  lightSpeedOutLeft: lightSpeedOutLeft,
  lightSpeedOutRight: lightSpeedOutRight,
  rotateIn: rotateIn,
  rotateInDownLeft: rotateInDownLeft,
  rotateInDownRight: rotateInDownRight,
  rotateInUpLeft: rotateInUpLeft,
  rotateInUpRight: rotateInUpRight,
  rotateOut: rotateOut,
  rotateOutDownLeft: rotateOutDownLeft,
  rotateOutDownRight: rotateOutDownRight,
  rotateOutUpLeft: rotateOutUpLeft,
  rotateOutUpRight: rotateOutUpRight,
  slideInDown: slideInDown,
  slideInLeft: slideInLeft,
  slideInRight: slideInRight,
  slideInUp: slideInUp,
  slideOutDown: slideOutDown,
  slideOutLeft: slideOutLeft,
  slideOutRight: slideOutRight,
  slideOutUp: slideOutUp,
  hinge: hinge,
  jackInTheBox: jackInTheBox,
  rollIn: rollIn,
  rollOut: rollOut,
  zoomIn: zoomIn,
  zoomInDown: zoomInDown,
  zoomInLeft: zoomInLeft,
  zoomInRight: zoomInRight,
  zoomInUp: zoomInUp,
  zoomOut: zoomOut,
  zoomOutDown: zoomOutDown,
  zoomOutLeft: zoomOutLeft,
  zoomOutRight: zoomOutRight,
  zoomOutUp: zoomOutUp
});

const easings = {
  linear: 'linear',
  ease: 'ease',
  easeIn: 'ease-in',
  easeOut: 'ease-out',
  easeInOut: 'ease-in-out',
  easeInSine: 'cubic-bezier(0.47, 0, 0.745, 0.715)',
  easeOutSine: 'cubic-bezier(0.39, 0.575, 0.565, 1)',
  easeInOutSine: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
  easeInQuad: 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
  easeOutQuad: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  easeInOutQuad: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
  easeInCubic: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
  easeOutCubic: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  easeInOutCubic: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  easeInQuart: 'cubic-bezier(0.895, 0.03, 0.685, 0.22)',
  easeOutQuart: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
  easeInOutQuart: 'cubic-bezier(0.77, 0, 0.175, 1)',
  easeInQuint: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
  easeOutQuint: 'cubic-bezier(0.23, 1, 0.32, 1)',
  easeInOutQuint: 'cubic-bezier(0.86, 0, 0.07, 1)',
  easeInExpo: 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
  easeOutExpo: 'cubic-bezier(0.19, 1, 0.22, 1)',
  easeInOutExpo: 'cubic-bezier(1, 0, 0, 1)',
  easeInCirc: 'cubic-bezier(0.6, 0.04, 0.98, 0.335)',
  easeOutCirc: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
  easeInOutCirc: 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
  easeInBack: 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
  easeOutBack: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  easeInOutBack: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
};

const animationCss = ":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{display:contents}";

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) { try {
      step(generator.next(value));
    }
    catch (e) {
      reject(e);
    } }
    function rejected(value) { try {
      step(generator["throw"](value));
    }
    catch (e) {
      reject(e);
    } }
    function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
const Animate = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.slCancel = createEvent(this, "sl-cancel", 7);
    this.slFinish = createEvent(this, "sl-finish", 7);
    this.slStart = createEvent(this, "sl-start", 7);
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
  handleRestartAnimation() {
    this.createAnimation();
  }
  handlePauseChange() {
    this.pause ? this.animation.pause() : this.animation.play();
    if (!this.pause && !this.hasStarted) {
      this.hasStarted = true;
      this.slStart.emit();
    }
  }
  handlePlaybackRateChange() {
    this.animation.playbackRate = this.playbackRate;
  }
  connectedCallback() {
    this.handleAnimationFinish = this.handleAnimationFinish.bind(this);
    this.handleAnimationCancel = this.handleAnimationCancel.bind(this);
    this.handleSlotChange = this.handleSlotChange.bind(this);
  }
  componentDidLoad() {
    this.createAnimation();
  }
  disconnectedCallback() {
    this.destroyAnimation();
  }
  handleAnimationFinish() {
    this.slFinish.emit();
  }
  handleAnimationCancel() {
    this.slCancel.emit();
  }
  handleSlotChange() {
    this.destroyAnimation();
    this.createAnimation();
  }
  createAnimation() {
    const easing = easings[this.easing] || this.easing;
    const keyframes = this.keyframes ? this.keyframes : animations[this.name];
    const slot = this.host.shadowRoot.querySelector('slot');
    const element = slot.assignedElements({ flatten: true })[0];
    if (!element) {
      return;
    }
    this.destroyAnimation();
    this.animation = element.animate(keyframes, {
      delay: this.delay,
      direction: this.direction,
      duration: this.duration,
      easing,
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
  }
  destroyAnimation() {
    if (this.animation) {
      this.animation.cancel();
      this.animation.removeEventListener('cancel', this.handleAnimationCancel);
      this.animation.removeEventListener('finish', this.handleAnimationFinish);
      this.animation = null;
      this.hasStarted = false;
    }
  }
  /** Clears all KeyframeEffects caused by this animation and aborts its playback. */
  cancel() {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        this.animation.cancel();
      }
      catch (_a) { }
    });
  }
  /** Sets the playback time to the end of the animation corresponding to the current playback direction. */
  finish() {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        this.animation.finish();
      }
      catch (_a) { }
    });
  }
  /** Gets a list of all supported animation names. */
  getAnimationNames() {
    return __awaiter(this, void 0, void 0, function* () {
      return Object.entries(animations).map(([name]) => name);
    });
  }
  /** Gets a list of all supported easing function names. */
  getEasingNames() {
    return __awaiter(this, void 0, void 0, function* () {
      return Object.entries(easings).map(([name]) => name);
    });
  }
  /** Gets the current time of the animation in milliseconds. */
  getCurrentTime() {
    return __awaiter(this, void 0, void 0, function* () {
      return this.animation.currentTime;
    });
  }
  /** Sets the current time of the animation in milliseconds. */
  setCurrentTime(time) {
    return __awaiter(this, void 0, void 0, function* () {
      this.animation.currentTime = time;
    });
  }
  render() {
    return h("slot", { onSlotchange: this.handleSlotChange });
  }
  get host() { return getElement(this); }
  static get watchers() { return {
    "delay": ["handleRestartAnimation"],
    "direction": ["handleRestartAnimation"],
    "easing": ["handleRestartAnimation"],
    "endDelay": ["handleRestartAnimation"],
    "fill": ["handleRestartAnimation"],
    "iterations": ["handleRestartAnimation"],
    "iterationStart": ["handleRestartAnimation"],
    "keyframes": ["handleRestartAnimation"],
    "name": ["handleRestartAnimation"],
    "pause": ["handlePauseChange"],
    "playbackRate": ["handlePlaybackRateChange"]
  }; }
};
Animate.style = animationCss;

export { Animate as sl_animation };
