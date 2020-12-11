

layer.canvas = function(){
  layer.apply(this, arguments);
};
$.inherits(layer.canvas, layer);

layer.canvas.prototype.decorate = function(parent) {
  console.log(window.timeout);
  clearTimeout(window.timeout);
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');

  this.ctx_ = ctx;

  css.apply(canvas, {
    'position': 'absolute',
    'top': '0',
    'left': '0',
    'overflow': 'hidden',
  });

  canvas.width = document.body.clientWidth;
  this.width_ = canvas.width;

  canvas.height = document.body.clientHeight;
  this.height_ = canvas.height;

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

layer.canvas.prototype.get_canvas_width = function() {
  return this.width_;
};

layer.canvas.prototype.get_canvas_height = function() {
  return this.height_;
};

layer.canvas.prototype.get_class = function(){
  return ['layer', 'canvas'];
};

/**
 * Helper functions
 */

layer.canvas.prototype.calculate_distance = function(xin, yin, x2in, y2in) {
  var a = xin - x2in;
  var b = yin - y2in;

  var d = Math.sqrt(a * a + b * b);

  return d;
};

layer.canvas.prototype.get_random_int = function(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

layer.canvas.prototype.get_random_float = function(min, max){
  return Math.random() * (max - min) + min;
};
