
/**
 * Forge is used to make various elements
 * Mostly little things like buttons, links, icons
 * Will most likely blow this up later
 */

var forge = function() {};

forge.prototype.make = function(element_type, args) {
  var forgery = null;

  if (
    element_type &&
    typeof element_type === 'string' &&
    args &&
    typeof args === 'object'
  ) {
    forgery = this['get_' + element_type + '_'](args);
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

/**
 * Returns a random blob svg
 */
forge.prototype.get_blob_ = function(blob_args) {
  var blob = document.createElement('img');

  // credit: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
  var random_num = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  blob.classList.add('blob');
  blob.setAttribute('src', 'img/blobs/' + 'blob_' + random_num(1, 6) + '.svg');


  return blob;
};
