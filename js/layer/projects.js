layer.projects = function(){
  layer.apply(this, arguments);
};
$.inherits(layer.projects, layer);

layer.projects.prototype.decorate = function(parent) {
  var container = document.createElement('div');
  container.innerHTML = ('Projects page!');

  parent.appendChild(container);
};

layer.projects.prototype.get_class = function(){
  return ['layer', 'projects'];
};