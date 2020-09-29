layer.canvas = function(){
  layer.apply(this, arguments);
};
$.inherits(layer.canvas, layer);

layer.canvas.prototype.decorate = function(parent) {
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');

  this.ctx_ = ctx;

  css.apply(canvas, {
    'position': 'absolute',
    'top': '0',
    'left': '0',
    'height': '100vh',
    'width': '100vw',
    'overflow': 'hidden',
  });

  // send decorate_canvas the context
  this.decorate_canvas(canvas);

  parent.appendChild(canvas);
};

/**
 * Decorate the canvas
 * This is what you want to override
 */
layer.canvas.prototype.decorate_canvas = function(ctx) {
  console.warn('override decorate_canvas');
};

layer.canvas.prototype.get_context = function() {
  return this.ctx_;
};

layer.canvas.prototype.get_class = function(){
  return ['layer', 'canvas'];
};

