/**
 * Free text input
 */
component.input.text = function(){
  component.input.apply(this, arguments);
};
$.inherits(component.input.text, component.input);

component.input.text.prototype.decorate_contents = function(parent){
  var self = this;
  // container stuff
  var container = document.createElement('div');

  css.apply(container, {
    'display': 'flex',
    'flex-direction': 'column',
    'width': '250px',
    'margin': '20px 10px',
  });

  // main input object
  var input = document.createElement('input');
  var label = document.createElement('label');

  if (
    this.settings &&
    this.settings.label
  ) {
    label.innerText = this.settings.label;
  }

  css.apply(label, {
    'background': 'transparent',
    'padding-bottom': '5px',
    'color': this.disabled ? css.color('gray', '100') : css.color('white', '300'),
    'font-size': '15px',
    'outline': 'none',
    'transition': 'color .5s',
  });

  css.apply(input, {
    'background': this.disabled ? css.color('primary') : 'transparent',
    'padding': '12px 15px',
    'border': '1px solid ' + (this.disabled ? 'transparent' : css.color('gray', '100')),
    'color': css.color('white', '300'),
    'border-radius': '5px',
    'transition': 'border .2s, background .2s',
  });

  input.addEventListener('focus', function() {
    css.apply(this, {
      'background': css.color('secondary_focus'),
      'outline': 'none',
      'border': '1px solid ' + css.color('secondary'),
    });

    css.apply(label, {
      'color': css.color('secondary'),
    });
  });

  input.addEventListener('blur', function() {
    css.apply(this, {
      'background': 'transparent',
      'outline': 'none',
      'border': '1px solid ' + css.color('gray', '100'),
    });

    css.apply(label, {
      'color': css.color('white', '300'),
    });
  });

  input.addEventListener('input', function() {
    self.value = input.value;
    if (
      self.settings &&
      self.settings.update &&
      typeof self.settings.update === 'function'
    ) {
      self.settings.update();
    }
  });

  if (this.disabled) {
    input.disabled = true;
  }

  container.appendChild(label);
  container.appendChild(input);
  parent.appendChild(container);
};
