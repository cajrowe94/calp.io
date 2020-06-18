
component.tile = function(){
  component.apply(this, arguments);
};
$.inherits(component.tile, component);

component.tile.prototype.decorate = function(parent) {
  // main container for the tile
  var main_container = document.createElement('div');

  css.apply(main_container, {
    'height': '130px',
    'max-width': '375px',
    'background': css.color('gray', '200'),
    'box-shadow': '0px 2px 8px rgba(0,0,0,0.6)',
    'border-radius': '5px',
  });

  parent.appendChild(main_container);
};
