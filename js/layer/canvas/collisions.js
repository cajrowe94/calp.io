layer.canvas.collisions = function(){
  this.points = [];
  this.x_range = 10;
  this.y_range = 10;
  this.line_color = 'teal';
  this.angle = 1;

  this.mouse = {
    'x': undefined,
    'y': undefined,
  };

  layer.apply(this, arguments);
};
$.inherits(layer.canvas.collisions, layer.canvas);

layer.canvas.collisions.prototype.decorate_canvas = function(parent) {
  var self = this;
  this.starting_x = parent.width / 2;
  this.starting_y = parent.height / 2;

  this.create_points();

  parent.addEventListener('click', function() {
    self.create_points();
  });

  parent.addEventListener('mousemove', function(e) {
    self.mouse.x = e.pageX;
    self.mouse.y = e.pageY;
  });

  // animation
  var anim = setInterval(function() {
    self.animate();
  }, 10);

  window.timeout = anim;
};

layer.canvas.collisions.prototype.animate = function() {
  var c = this.get_context();

  c.clearRect(0, 0, parent.width, parent.height);
  c.globalAlpha = .9;
  c.fillRect(0, 0, parent.width, parent.height);
  c.fillStyle = 'black';
  c.fill();

  var points = this.points;

  for (var i = 0; i < points.length; i++){
    points[i].update();
  }

  this.draw_lines();
};

layer.canvas.collisions.prototype.create_points = function() {
  var self = this;
  var c = this.get_context();

  var Point = function() {
    // these need to be stored on the object
    // theyre used in the draw_lines function
    this.x = self.mouse.x || self.starting_x;
    this.y = self.mouse.y || self.starting_y;

    var angle = self.angle; // starting angle
    var amplitudeX = self.get_random_int(1, 4); // how far out on x axis
    var amplitudeY = self.get_random_int(1, 4); // how far out on y axis
    var angleVel = self.get_random_float(.01, .03); // how fast objects orbit

    this.draw = function(){
      c.beginPath();
      c.arc(this.x, this.y, this.rad, 0, 2 * Math.PI);
      c.strokeStyle = 'white';
      c.stroke();
    };

    this.update = function(){
      this.x += (Math.sin(angle) * self.get_random_float(amplitudeX, amplitudeY));
      this.y += (Math.cos(angle) * self.get_random_float(amplitudeY, amplitudeX));
      angle += angleVel;
    };
  };

  for (var i = 0; i < 10; i++){
    this.points.push(new Point());
  }

  this.angle = this.get_random_int(1, 100);
};

layer.canvas.collisions.prototype.draw_lines = function() {
  var c = this.get_context();
  var dist;
  var points = this.points;
  for (var i = 0; i < points.length; i++){
    for (var q = 0; q < points.length; q++){
      dist = this.calculate_distance(points[i].x, points[i].y, points[q].x, points[q].y);
      if (dist < 30 && dist > 20){
        c.globalCompositeOperation = 'lighter';
        c.beginPath();
        c.moveTo(points[i].x, points[i].y);
        c.lineTo(points[q].x, points[q].y);
        c.strokeStyle = 'rgba(' + this.get_random_int(10, 150) + ',255,255, 0.3)';
        c.lineWidth = .2;
        c.stroke();
      }
    }
  }
};
