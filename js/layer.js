var layer = function(){};

// shared state object across layers + components
layer.prototype.state = {};

layer.prototype.render = function(opt_parent){
  var root = document.getElementsByTagName('main')[0];
  this.set_class(root);

  if (
    opt_parent &&
    opt_parent.nodeType
  ){
    this.decorate(opt_parent);
  } else { // otherwise render to <main>
    root.innerHTML = '';

    css.apply(root, {
      'background-color': css.color('background'),
      'height': '100vh',
      'width': '100%',
      'padding': '60px 20px 0px 20px',
      'overflow-y': 'scroll',
      'scrollbar-width': 'none',
      '-ms-overflow-style': 'none',
    });
    this.decorate(root);
  }
};

layer.prototype.decorate = function(parent) {
  // overwrite
};

layer.prototype.get_class = function() {
  return ['layer'];
};

layer.prototype.set_class = function(container) {
  // clear and add new class
  container.removeAttribute('class');

  this.get_class().forEach(function(class_name){
    container.classList.add(class_name);
  });
};
