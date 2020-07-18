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

    var child_root = document.createElement('div');

    css.apply(child_root, {
      'max-width': '1300px',
      'margin': '0 auto',
    });

    this.decorate_title(child_root);
    root.appendChild(child_root);
    this.decorate(child_root);
    window.scrollTo(0, 0);
  }
};

layer.prototype.decorate = function(parent) {
  // overwrite
};

layer.prototype.decorate_title = function(parent) {
  var container = document.createElement('div');

  css.apply(container, {
    'margin': '50px 0px 30px 0px',
  });

  // main title
  if (this.get_title()) {
    var title = document.createElement('h1');
    title.innerText = this.get_title();
    container.appendChild(title);
  }

  // sub title
  if (this.get_sub_title()) {
    var sub_title = document.createElement('h3');
    sub_title.innerText = this.get_sub_title();
    container.appendChild(sub_title);
  }

  parent.appendChild(container);
};

layer.prototype.get_title = function() {
  return null;
};

layer.prototype.get_sub_title = function() {
  return null;
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
/**
 * Init function
 * Used to initiatilize variables before rendering
 */
layer.prototype.init = function() {
  console.warn('overwrite this.init()');
};
