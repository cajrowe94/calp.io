var layer = function(){};

layer.prototype.render = function(opt_parent){
  var root = document.getElementsByTagName('main')[0];

  // clear and add new class
  root.removeAttribute('class');

  this.get_class().forEach(function(class_name){
    root.classList.add(class_name);
  });

  if (
    opt_parent &&
    opt_parent.nodeType
  ){
    this.decorate(opt_parent);
  } else { // otherwise render to <main>
    root.innerHTML = '';

    css.apply(root, {
      'background-color': css.color('primary'),
      'height': '100vh',
      'width': '100%',
      'padding': '60px 20px 0px 20px',
    });
    this.decorate(root);
  }

  // clear state for each layer
  this.state = {};
};

layer.prototype.decorate = function(parent) {
  // overwrite
};

layer.prototype.get_class = function() {
  return ['layer'];
};
