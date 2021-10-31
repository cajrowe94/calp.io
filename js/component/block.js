/**
 * Block class
 * Used to display a big picture with text
 * Or have a small paragraph block beneath
 */

component.block = function(args){
  component.apply(this, arguments);
  this.options_ = args;
};
$.inherits(component.block, component);

component.block.prototype.decorate = function(parent) {
  var container = document.createElement('div');

  css.apply(container, {
    'position': 'relative',
    'overflow': 'hidden',
    'width': '100%',
    'height': '350px',
    'z-index': '2',
    'background-size': 'cover',
    'background-repeat': 'no-repeat',
    'background-position': 'center',
  });

  // set the background image
  if (
    this.options_ &&
    this.options_.background_image
  ) {
    css.apply(container, {
      'background-image': 'url("' + this.options_.background_image + '")',
    });
  }

  // add some footer text
  if (
    this.options_ &&
    this.options_.link &&
    this.options_.link.url
  ) {
    this.add_link(container);
  }

  parent.appendChild(container);
};

component.block.prototype.add_link = function(parent) {
  var link_text = document.createElement('a');

  link_text.href = this.options_.link.url;
  link_text.target = '_blank';
  link_text.innerText = this.options_.link.text;

  css.apply(link_text, {
    'position': 'absolute',
    'bottom': '0',
    'right': '0',
    'padding': '15px',
    'background-color': css.color('background_secondary'),
  });

  parent.appendChild(link_text);
};
