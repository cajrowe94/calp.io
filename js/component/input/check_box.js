/**
 * Simple checbox with label
 */
component.input.check_box = function(){
  component.input.apply(this, arguments);
};
$.inherits(component.input.check_box, component.input);

component.input.check_box.prototype.decorate_contents = function(parent){
  var self = this;
  this.checked = false;
  // container stuff
  var container = document.createElement('div');
  var height = '24px';

  css.apply(container, {
    'display': 'flex',
    'width': '250px',
    'margin': '20px 10px',
    'height': height,
    'line-height': height,
    'outline': 'none',
  });

  var icon_container = document.createElement('div');

  css.apply(icon_container, {
    'position': 'relative',
    'display': 'inline-block',
    'height': height,
    'width': height,
  });

  var icon = forge.make('icon', {
    'file_name': 'check',
    'theme': 'dark',
  });

  css.apply(icon, {
    'height': height,
  });

  var icon_cover = document.createElement('div');

  css.apply(icon_cover, {
    'position': 'absolute',
    'top': '0px',
    'left': '0px',
    'height': height,
    'width': height,
    'background': css.color('gray', '200'),
    'border-radius': '4px',
    'border': '1px solid ' + css.color('gray', '100'),
    'transition': 'background .3s, border .3s',
    'z-index': '999',
  });


  icon_container.appendChild(icon_cover);
  icon_container.appendChild(icon);


  container.appendChild(icon_container);

  var label = document.createElement('label');

  if (
    this.settings &&
    this.settings.label
  ) {
    label.innerText = this.settings.label;
  }

  css.apply(label, {
    'color': this.disabled ? css.color('gray', '100') : css.color('white', '300'),
    'font-size': '15px',
    'outline': 'none',
    'margin': '0 auto',
    'width': '100%',
    'text-align': 'left',
    'padding-left': '15px',
    'transition': 'color .3s',
  });

  container.addEventListener('mouseover', function() {
    css.apply(this, {
      'cursor': 'pointer',
    });
  });

  container.addEventListener('mouseleave', function() {
    css.apply(this, {
      'cursor': 'default',
    });
  });

  container.addEventListener('click', function() {
    self.checked = !self.checked;

    css.apply(label, {
      'color': self.checked ? css.color('secondary') : css.color('white', '300'),
    });

    css.apply(icon_cover, {
      'background': self.checked ? 'transparent' : css.color('gray', '200'),
      'border': '1px solid ' + (self.checked ? 'transparent' : css.color('gray', '100')),
    });

    if (
      self.settings &&
      self.settings.click &&
      typeof self.settings.click === 'function'
    ) {
      self.settings.click();
    }
  });

  container.appendChild(label);
  parent.appendChild(container);
};
