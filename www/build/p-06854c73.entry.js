import { r as o, c as e, h as t } from './p-32052503.js';
let s = 0;
const i = class {
  constructor(t) {
    o(this, t),
      (this.slBlur = e(this, 'sl-blur', 7)),
      (this.slChange = e(this, 'sl-change', 7)),
      (this.slFocus = e(this, 'sl-focus', 7)),
      (this.inputId = 'checkbox-' + ++s),
      (this.labelId = 'checkbox-label-' + s),
      (this.hasFocus = !1),
      (this.disabled = !1),
      (this.required = !1),
      (this.checked = !1),
      (this.indeterminate = !1),
      (this.invalid = !1);
  }
  handleCheckedChange() {
    (this.input.checked = this.checked), (this.input.indeterminate = this.indeterminate), this.slChange.emit();
  }
  connectedCallback() {
    (this.handleClick = this.handleClick.bind(this)),
      (this.handleBlur = this.handleBlur.bind(this)),
      (this.handleFocus = this.handleFocus.bind(this)),
      (this.handleMouseDown = this.handleMouseDown.bind(this));
  }
  componentDidLoad() {
    this.input.indeterminate = this.indeterminate;
  }
  async setFocus(o) {
    this.input.focus(o);
  }
  async removeFocus() {
    this.input.blur();
  }
  async reportValidity() {
    return this.input.reportValidity();
  }
  async setCustomValidity(o) {
    this.input.setCustomValidity(o), (this.invalid = !this.input.checkValidity());
  }
  handleClick() {
    (this.checked = this.input.checked), (this.indeterminate = !1);
  }
  handleBlur() {
    (this.hasFocus = !1), this.slBlur.emit();
  }
  handleFocus() {
    (this.hasFocus = !0), this.slFocus.emit();
  }
  handleMouseDown(o) {
    o.preventDefault(), this.input.focus();
  }
  render() {
    return t(
      'label',
      {
        part: 'base',
        class: {
          checkbox: !0,
          'checkbox--checked': this.checked,
          'checkbox--disabled': this.disabled,
          'checkbox--focused': this.hasFocus,
          'checkbox--indeterminate': this.indeterminate
        },
        htmlFor: this.inputId,
        onMouseDown: this.handleMouseDown
      },
      t(
        'span',
        { part: 'control', class: 'checkbox__control' },
        this.checked &&
          t(
            'span',
            { part: 'checked-icon', class: 'checkbox__icon' },
            t(
              'svg',
              { viewBox: '0 0 16 16' },
              t(
                'g',
                {
                  stroke: 'none',
                  'stroke-width': '1',
                  fill: 'none',
                  'fill-rule': 'evenodd',
                  'stroke-linecap': 'round'
                },
                t(
                  'g',
                  { stroke: 'currentColor', 'stroke-width': '2' },
                  t(
                    'g',
                    { transform: 'translate(3.428571, 3.428571)' },
                    t('path', { d: 'M0,5.71428571 L3.42857143,9.14285714' }),
                    t('path', { d: 'M9.14285714,0 L3.42857143,9.14285714' })
                  )
                )
              )
            )
          ),
        !this.checked &&
          this.indeterminate &&
          t(
            'span',
            { part: 'indeterminate-icon', class: 'checkbox__icon' },
            t(
              'svg',
              { viewBox: '0 0 16 16' },
              t(
                'g',
                {
                  stroke: 'none',
                  'stroke-width': '1',
                  fill: 'none',
                  'fill-rule': 'evenodd',
                  'stroke-linecap': 'round'
                },
                t(
                  'g',
                  { stroke: 'currentColor', 'stroke-width': '2' },
                  t(
                    'g',
                    { transform: 'translate(2.285714, 6.857143)' },
                    t('path', { d: 'M10.2857143,1.14285714 L1.14285714,1.14285714' })
                  )
                )
              )
            )
          ),
        t('input', {
          ref: o => (this.input = o),
          id: this.inputId,
          type: 'checkbox',
          name: this.name,
          value: this.value,
          checked: this.checked,
          disabled: this.disabled,
          required: this.required,
          role: 'checkbox',
          'aria-checked': this.checked ? 'true' : 'false',
          'aria-labelledby': this.labelId,
          onClick: this.handleClick,
          onBlur: this.handleBlur,
          onFocus: this.handleFocus
        })
      ),
      t('span', { part: 'label', id: this.labelId, class: 'checkbox__label' }, t('slot', null))
    );
  }
  static get watchers() {
    return { checked: ['handleCheckedChange'], indeterminate: ['handleCheckedChange'] };
  }
};
i.style =
  ':host{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{display:inline-block}.checkbox{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;font-family:var(--sl-input-font-family);font-size:var(--sl-input-font-size-medium);font-weight:var(--sl-input-font-weight);color:var(--sl-input-color);vertical-align:middle;cursor:pointer}.checkbox__control{position:relative;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:var(--sl-toggle-size);height:var(--sl-toggle-size);border:solid var(--sl-input-border-width) var(--sl-input-border-color);border-radius:2px;background-color:var(--sl-input-background-color);color:var(--sl-color-white);-webkit-transition:var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color, var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow;transition:var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color, var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow}.checkbox__control input[type=checkbox]{position:absolute;opacity:0;padding:0;margin:0;pointer-events:none}.checkbox__control .checkbox__icon{display:-ms-inline-flexbox;display:inline-flex;width:var(--sl-toggle-size);height:var(--sl-toggle-size)}.checkbox__control .checkbox__icon svg{width:100%;height:100%}.checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover{border-color:var(--sl-input-border-color-hover);background-color:var(--sl-input-background-color-hover)}.checkbox.checkbox--focused:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control{border-color:var(--sl-input-border-color-focus);background-color:var(--sl-input-background-color-focus);-webkit-box-shadow:0 0 0 var(--sl-focus-ring-width) var(--sl-focus-ring-color-primary);box-shadow:0 0 0 var(--sl-focus-ring-width) var(--sl-focus-ring-color-primary)}.checkbox--checked .checkbox__control,.checkbox--indeterminate .checkbox__control{border-color:var(--sl-color-primary-500);background-color:var(--sl-color-primary-500)}.checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,.checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover{border-color:var(--sl-color-primary-400);background-color:var(--sl-color-primary-400)}.checkbox.checkbox--checked:not(.checkbox--disabled).checkbox--focused .checkbox__control,.checkbox.checkbox--indeterminate:not(.checkbox--disabled).checkbox--focused .checkbox__control{border-color:var(--sl-color-primary-400);background-color:var(--sl-color-primary-400);-webkit-box-shadow:0 0 0 var(--sl-focus-ring-width) var(--sl-focus-ring-color-primary);box-shadow:0 0 0 var(--sl-focus-ring-width) var(--sl-focus-ring-color-primary)}.checkbox--disabled{opacity:0.5;cursor:not-allowed}.checkbox__label{line-height:var(--sl-toggle-size);margin-left:0.5em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}';
export { i as sl_checkbox };
