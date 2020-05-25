layer.about = function(){
  layer.apply(this, arguments);
};
$.inherits(layer.about, layer);

layer.about.prototype.decorate = function(parent) {
  var container = document.createElement('div');
  container.innerHTML = ('About page!');

  parent.appendChild(container);
};

layer.about.prototype.get_class = function(){
  return ['layer', 'about'];
};