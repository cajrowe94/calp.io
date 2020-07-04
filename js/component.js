var component = function() {
  layer.apply(this, arguments);
};
$.inherits(component, layer);

component.prototype.render = function(parent) {
  if (
    parent &&
    parent.nodeType
  ){
    this.decorate(parent);
  } else { // otherwise append to the document body
    console.error('no parent was specified');
  }
};

/**
 * Main decorate function
 * Must be overriden by child components
 */

component.prototype.decorate = function(parent) {
  // overwrite me
};

component.prototype.get_class = function(parent) {
  return ['component'];
};
