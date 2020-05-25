var component = function() {};

component.prototype.render = function(parent) {
  if (
    parent &&
    parent.nodeType
  ){
    // clear and add new class
    parent.removeAttribute('class');

    this.get_class().forEach(function(class_name){
      parent.classList.add(class_name);
    });

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
