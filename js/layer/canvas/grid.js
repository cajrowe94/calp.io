layer.canvas.grid = function(args){
  this.lines = [];

  this.is_background = (
    args &&
    args.background
  );

  this.mouse = {
    'x': undefined,
    'y': undefined,
  };

  layer.apply(this, arguments);
};
$.inherits(layer.canvas.grid, layer.canvas);

layer.canvas.grid.prototype.decorate_canvas = function(parent) {
  var self = this;
  this.draw_grid_();

  parent.addEventListener('mousemove', function(e) {
    self.mouse.x = e.pageX;
    self.mouse.y = e.pageY;
  });

  this.animate();

  // animation
  // var anim = setInterval(function() {
  //   self.animate();
  // }, 10);

  // keep track of the timeout id
  // so we can clear it when we render a new canvas layer
  // window.timeout = anim;
};

layer.canvas.grid.prototype.animate = function() {
  var c = this.get_context();
  var ran_low = this.get_random_int(10, 100);
  var ran_high = this.get_random_int(ran_low, (ran_low + 5));

  // c.clearRect(0, 0, this.get_canvas_width(), this.get_canvas_height());
  c.fillRect(0, 0, parent.width, parent.height);
  c.fillStyle = 'rgb(31, 40, 51)';
  // c.alpha = 0.1;
  c.fill();

  var lines = this.lines;

  for (var i = 0; i < lines.length; i++){
    // var dist = Math.floor(this.calculate_distance(
    //   this.mouse.x, this.mouse.y, lines[i].x_start, lines[i].y_start
    // ));

    // var dist = Math.floor(this.calculate_distance(
    //   200,
    //   600,
    //   lines[i].x_start,
    //   lines[i].y_start
    // ));

    // if (
    //   (dist > ran_low && dist < ran_high)
    // ) {
    //   lines[i].show();
    // } else {
    //   lines[i].hide();
    // }

    lines[i].show();
    lines[i].draw();
  }
};

/**
 * Generate a grid and draw lines
 */
layer.canvas.grid.prototype.draw_grid_ = function() {
  var width = document.body.clientWidth;
  var height = document.body.clientHeight;

  // length and width of the square
  var length = this.get_random_int(40, 200);

  var x_start = 0;
  var y_start = 0;
  var x_end = 0;
  var y_end = 0;
  var y_val = 0;
  var x_val = 0;

  for (var i = 0; i <= Math.ceil(height / length); i++) {
    for (var j = 0; j <= Math.ceil(width / length); j++) {
      x_end += length;
      this.draw_line_({'x': x_start, 'y': y_val}, {'x': x_end, 'y': y_val});
      x_start = x_end;
    }

    x_start = 0;
    x_end = 0;
    y_val += length;
    length = this.get_random_int(40, 200);
  }

  for (var i = 0; i <= Math.ceil(width / length); i++) {
    for (var j = 0; j <= Math.ceil(height / length); j++) {
      y_end += length;
      this.draw_line_({'x': x_val, 'y': y_start}, {'x': x_val, 'y': y_end});
      y_start = y_end;
    }

    y_start = 0;
    y_end = 0;
    x_val += length;
    length = this.get_random_int(40, 200);
  }
};

/**
 * Draw a line between two coordinates
 */
layer.canvas.grid.prototype.draw_line_ = function(coord1, coord2) {
  var self = this;
  var c = this.get_context();

  var colors = [
    'rgba(71, 76, 148, ' + this.get_random_float(0.5, 1) + ')',
    'rgba(31, 40, 51, ' + this.get_random_float(0.5, 1) + ')',
    'rgba(1, 253, 154, ' + this.get_random_float(0.5, 1) + ')',
  ];

  var Line = function() {
    this.color = colors[self.get_random_int(0, 2)];
    this.x_start = coord1.x;
    this.y_start = coord1.y;
    this.x_end = coord2.x;
    this.y_end = coord2.y;

    this.draw = function(){
      c.beginPath();
      c.moveTo(this.x_start, this.y_start);
      c.lineTo(this.x_end, this.y_end);
      c.strokeStyle = this.color;
      c.lineWidth = 0.3;
      c.stroke();
    };

    this.hide = function(){
      this.color = colors[self.get_random_int(0, 2)];
    };

    this.show = function(){
      this.color = colors[self.get_random_int(0, 2)];
    };
  };

  this.lines.push(new Line());
};
