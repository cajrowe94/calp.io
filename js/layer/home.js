layer.home = function(){
  layer.apply(this, arguments);
};
$.inherits(layer.home, layer);

layer.home.prototype.decorate = function(parent) {
  var container = document.createElement('div');

  css.apply(container, {
    'margin': '0 auto',
    'width': css.is_mobile() ? '95%' : '75%',
    'padding': '50px 20px',
  });

  var tile = new component.tile();

  tile.render(container);

  parent.appendChild(container);
};

layer.home.prototype.get_class = function(){
  return ['layer', 'home'];
};
