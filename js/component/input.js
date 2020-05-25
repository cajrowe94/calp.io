
component.input = function(settings){
  component.apply(this, arguments);
  this.settings = settings;
};
$.inherits(component.input, component);

component.input.prototype.decorate = function(parent){
  var container = document.createElement('div');
  this.decorate_contents(container);
  parent.appendChild(container);
};

/**
 * Override this with child classes
 * Main decorate contents function
 */

component.input.prototype.decorate_contents = function(type){
  console.warn('override decorate_contents()');
  this.decorate_blank();
};

/**
 * Render a blank, disabled input
 * This is just a fallback to avoid any crashing
 */
component.input.prototype.decorate_blank_ = function(){
  // todo
};

/**
 * Disable the input
 * boolean
 */
component.input.prototype.disable = function(disable){
  if (
    disable &&
    typeof disable === 'boolean'
  ) {
    this.disabled = true;
  } else {
    this.disabled = false;
  }
};
