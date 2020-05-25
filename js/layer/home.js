layer.home = function(){
  layer.apply(this, arguments);
};
$.inherits(layer.home, layer);

layer.home.prototype.decorate = function(parent) {
  // nothing here
};

layer.home.prototype.get_class = function(){
  return ['layer', 'home'];
};
