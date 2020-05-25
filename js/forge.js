
/**
 * Forge is used to make various elements
 * Mostly little things like buttons, links, icons
 * Will most likely blow this up later
 */

var forge = function() {};

forge.prototype.make = function(element, element_type) {
  var forgery = null;

  if (
    element &&
    typeof element === 'string' &&
    element_type &&
    typeof element_type === 'object'
  ) {
    forgery = this['get_' + element + '_'](element_type);
  }

  return forgery;
};

forge.prototype.get_button_ = function(button_args) {
  var button = document.createElement('button');
  button.classList.add('button');

  if (
    button_args &&
    typeof button_args === 'object'
  ) {
    button.innerHTML = button_args.name || 'Button';
    if (button_args.type){
      button.classList.add(button_args.type);
    }
  }

  return button;
};

forge.prototype.get_icon_ = function(icon_args) {
  var icon = document.createElement('img');
  icon.classList.add('icon');
  var theme = '';

  if (
    icon_args &&
    icon_args.file_name
  ) {
    if (icon_args.theme === 'light'){
      icon.setAttribute('src', 'img/icons/' + icon_args.file_name + '_light.svg');
    } else {
      icon.setAttribute('src', 'img/icons/' + icon_args.file_name + '_dark.svg');
    }
  } else {
    console.error('No icon name was given');
    return;
  }
  
  return icon;
};
