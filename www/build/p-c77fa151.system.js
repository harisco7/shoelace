System.register(['./p-351060b9.system.js'], function (e) {
  'use strict';
  var l;
  return {
    setters: [
      function (e) {
        l = e.h;
      }
    ],
    execute: function () {
      var t = e('F', function (e, t) {
        var r = e.label ? true : e.hasLabelSlot;
        var o = e.helpText ? true : e.hasHelpTextSlot;
        return l(
          'div',
          {
            part: 'form-control',
            class: {
              'form-control': true,
              'form-control--small': e.size === 'small',
              'form-control--medium': e.size === 'medium',
              'form-control--large': e.size === 'large',
              'form-control--has-label': r,
              'form-control--has-help-text': o
            }
          },
          l(
            'label',
            {
              part: 'label',
              id: e.labelId,
              class: 'form-control__label',
              htmlFor: e.inputId,
              'aria-hidden': r ? 'false' : 'true',
              onClick: e.onLabelClick
            },
            l('slot', { name: 'label' }, e.label)
          ),
          l('div', { class: 'form-control__input' }, t),
          l(
            'div',
            {
              part: 'help-text',
              id: e.helpTextId,
              class: 'form-control__help-text',
              'aria-hidden': o ? 'false' : 'true'
            },
            l('slot', { name: 'help-text' }, e.helpText)
          )
        );
      });
    }
  };
});
