/**
 * Fun lil terminal thing for fun stuff
 */
component.terminal = function(args){
  component.apply(this, arguments);
  this.visible = false;
};
$.inherits(component.terminal, component);

component.terminal.prototype.decorate = function(parent) {
  var container = document.createElement('div');

  css.apply(container, {
    'position': 'absolute',
    'bottom': '-35px',
    'right': '0',
    'transition': 'bottom .1s',
    'height': '35px',
    'width': '300px',
    'display': 'flex',
    'background-color': css.color('secondary'),
    'z-index': 99999,
    'box-shadow': '0px 2px 10px inset ' + css.color('background_secondary'),
  });

  var input = this.get_input(container);

  document.addEventListener('keypress', function(e) {
    if (
      e &&
      e.charCode &&
      e.charCode === 96
    ) {
      if (self.visible) {
        css.apply(container, {
          'bottom': '-35px',
        });
      } else {
        css.apply(container, {
          'bottom': '8px',
        });
      }

      input.value = '';
      self.visible = !self.visible;
    }
  });

  parent.appendChild(container);
};

component.terminal.prototype.get_input = function(parent) {
  var self = this;

  var input = document.createElement('input');
  var arrow = document.createElement('span');

  input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      var res = self.parse_input(this.value);
      this.value = res;
    }
  });

  arrow.innerHTML = '>';

  css.apply(arrow, {
    'color': css.color('background_secondary'),
    'line-height': '35px',
    'padding': '0px 5px',
  });

  parent.appendChild(arrow);

  css.apply(input, {
    'height': '100%',
    'width': '100%',
    'color': css.color('background_secondary'),
    'background-color': 'transparent',
    'border': 'none',
  });

  parent.appendChild(input);

  return input;
};

component.terminal.prototype.parse_input = function(input) {
  var response = null;

  var split = input.split(' ');

  var cls = split[0];
  var target = split[1];
  var attribute = split[2];
  var val = split[3];

  if (
    !cls ||
    !this['handle_' + cls]
  ) {
    response = 'class \'' + cls + '\' not found';
  } else {
    this['handle_' + cls](target, attribute, val);
  }

  return response;
};

component.terminal.prototype.handle_css = function(tag, attribute, value) {
  var eles = document.getElementsByTagName(tag);

  for (var i = 0; i < eles.length; i++) {
    eles[i].style[attribute] = value;
  }
};
