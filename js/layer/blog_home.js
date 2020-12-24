/**
 * Blog home is just a display of all posts
 * Not my ideal naming choice, since there is another blog layer
 * But oh well, I DO WHAT I WANT ITS MY PROJECT :D
 */
layer.blog_home = function(){
  layer.apply(this, arguments);
};
$.inherits(layer.blog_home, layer);

layer.blog_home.prototype.decorate = function(parent) {
  new layer.canvas.grid({
    'background': true,
  }).render(parent);

  this.decorate_tiles(parent);
};

layer.blog_home.prototype.get_title = function(parent) {
  return 'Blog';
};

layer.blog_home.prototype.get_sub_title = function(parent) {
  return 'Electronics, development, and traveling.';
};

layer.blog_home.prototype.decorate_tiles = function(parent) {
  var grid = new component.grid();

  // get all the blogs
  var blogs = this.get_blogs();

  blogs.forEach(function(blog){
    var tile = new component.tile(blog);
    grid.add_cell(tile);
  });

  grid.render(parent);
};

layer.blog_home.prototype.get_blogs = function() {
  return [
    {
      'title': 'Pen Plotter',
      'text': 'Undergraduate research project at IU Kokomo. 6\'x6\' Arduino drawing machine.',
      'sleeve_image': 'img/tiles/pen_plotter_tile.png',
      'click': function() {
        new layer.blog.pen_plotter().render();
      },
      'icon': 'memory',
    },
    {
      'title': 'ECU Data',
      'text': 'Reading ECU data from my car and using it to control LED\'s.',
      'sleeve_image': 'img/tiles/ecu_data_tile.png',
      'click': function() {
        new layer.blog.ecu_data().render();
      },
      'icon': 'memory',
    },
    {
      'title': 'Servo Wave',
      'text': 'I glued a bunch of servo motors to a piece of wood and made it do the wave.',
      'sleeve_image': 'img/tiles/servo_wave_tile.png',
      'click': function() {
        new layer.blog.servo_wave().render();
      },
      'icon': 'memory',
    },
    {
      'title': 'LED Toy',
      'text': 'Arduino on a breadboard project.',
      'sleeve_image': 'img/tiles/led_toy_tile.png',
      'click': function() {
        new layer.blog.led_toy().render();
      },
      'icon': 'memory',
    },
    // {
    //   'title': 'Zion',
    //   'text': 'A little bit about why I fell in love with Zion National Park.',
    //   'sleeve_image': 'img/tiles/zion_tile_2.jpg',
    //   'click': function() {
    //     new layer.blog.zion().render();
    //   },
    //   'icon': 'landscape',
    // },
  ];
};

layer.blog_home.prototype.get_class = function(){
  return ['layer', 'blog_home'];
};
