layer.blog = function(){
  layer.apply(this, arguments);
};
$.inherits(layer.blog, layer);

layer.blog.prototype.decorate = function(parent) {
  var container = document.createElement('div');
  container.innerHTML = ('Blog page!');

  parent.appendChild(container);
};

layer.blog.prototype.get_class = function(){
  return ['layer', 'blog'];
};
