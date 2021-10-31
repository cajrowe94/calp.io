layer.scrapyard = function(){
  layer.apply(this, arguments);
};
$.inherits(layer.scrapyard, layer);

layer.scrapyard.prototype.get_title = function(parent) {
  return 'The Scrapyard';
};

layer.scrapyard.prototype.decorate = function(parent) {
  var description = document.createElement('p');
  var grid = new component.grid();

  description.innerHTML = 'This is just a place for me to throw projects that aren\'t really complete or notable.' + '<br>' +
  ' Most of these are old and busted.. hence the <i>scrapyard</i>. Bugs and broken links run wild around these parts, so keep a sharp eye out!';

  // get all the projects
  var projects = this.get_projects();

  projects.forEach(function(project){
    var tile = new component.tile(project);
    grid.add_cell(tile);
  });

  parent.appendChild(description);

  grid.render(parent);
};

layer.scrapyard.prototype.get_projects = function() {
  return [
    {
      'title': 'S.P.L.I.C.E.',
      'text': 'Senior project at IU Kokomo. Online repository and discussion forum for Dr. Hisako Masuda\'s genomics courses',
      'sleeve_image': 'img/tiles/spliceiuk_tile.jpg',
      'link': 'http://spliceiuk.000webhostapp.com/pages/index.php',
      'icon': 'computer',
    },
    {
      'title': 'Twitter bot',
      'text': 'My twitter bot Jimothy Johannes',
      'sleeve_image': 'img/tiles/jimothy_tile.png',
      'link': 'https://twitter.com/jjohannesbot',
      'icon': 'computer',
    },
    {
      'title': 'Perlin noise',
      'text': 'Experimenting with perlin noise and word vector data.',
      'sleeve_image': 'img/tiles/perlin_noise_tile.png',
      'link': 'https://calebrowe.work/wp-content/perlin-noise-wordvecs/wikiPerlinNoiseProject4/index.html',
      'icon': 'brush',
    },
    {
      'title': 'Collisions',
      'text': 'Creating the illusion of planetary collisions',
      'sleeve_image': 'img/tiles/collisions_tile.png',
      'link': 'https://calebrowe.work/projects/art/collision_art/',
      'icon': 'brush',
    },
    {
      'title': 'LeWitt 358',
      'text': 'Recreation of Sol LeWitt\'s wall drawing #358',
      'sleeve_image': 'img/tiles/lewitt_358_tile.png',
      'link': 'https://calebrowe.work/projects/art/lewitt-358/',
      'icon': 'brush',
    },
    {
      'title': 'Machine learning',
      'text': 'Exploring basic machine learning principles with smart rockets',
      'sleeve_image': 'img/tiles/machine_learning_tile.png',
      'link': 'https://calebrowe.work/wp-content/Project%205%20-%20DNA_FINAL/files/index.html',
      'icon': 'brush',
    },
    {
      'title': 'Cell growth',
      'text': 'Emulating organic cell growth with the cellular automata algorithm',
      'sleeve_image': 'img/tiles/cell_growth_tile.png',
      'link': 'https://calebrowe.work/wp-content/game-of-life-remix/gameoflifeRemix.html',
      'icon': 'brush',
    },
    {
      'title': 'Sin & Cosin',
      'text': 'Exploring the use of sin and cosin within the movement of particles',
      'sleeve_image': 'img/tiles/sin_cosin_tile.jpg',
      'link': 'https://calebrowe.work/projects/art/sin-cosin/',
      'icon': 'brush',
    },
    {
      'title': 'Mouse particles',
      'text': 'Interactive mouse movement events using the comic.js library',
      'sleeve_image': 'img/tiles/mouse_particles_tile.png',
      'link': 'https://calebrowe.work/projects/art/mouse_particles/',
      'icon': 'brush',
    },
    {
      'title': 'Gravity',
      'text': 'Attempting to emulate gravitational fields',
      'sleeve_image': 'img/tiles/gravity_tile.png',
      'link': 'https://calebrowe.work/projects/art/gravity-2/',
      'icon': 'brush',
    },
    {
      'title': 'Cosmos',
      'text': 'Building the cosmos in html5 canvas',
      'sleeve_image': 'img/tiles/cosmos_tile.png',
      'link': 'https://calebrowe.work/projects/art/cosmos/',
      'icon': 'brush',
    },
    {
      'title': 'Mouse lasers',
      'text': 'Interactive line drawing canvas',
      'sleeve_image': 'img/tiles/mouse_lasers_tile.png',
      'link': 'https://calebrowe.work/projects/art/lasers/',
      'icon': 'brush',
    },
    {
      'title': 'Servo wave',
      'text': 'Using servo motors to emulate wavelike movement',
      'sleeve_image': 'img/tiles/servo_wave_tile.png',
      'click': function() {
        new layer.blog.servo_wave().render();
      },
      'icon': 'memory',
    },
    {
      'title': 'Hanging plotter',
      'text': 'Vertical pen plotter, controllable with a joystick',
      'sleeve_image': 'img/tiles/hanging_plotter_tile.png',
      'click': function() {
        new layer.blog.hanging_plotter().render();
      },
      'icon': 'memory',
    },
    {
      'title': 'LED Toy',
      'text': 'Using basic components to build an Arduino on a breadboard',
      'sleeve_image': 'img/tiles/led_toy_tile.png',
      'click': function() {
        new layer.blog.led_toy().render();
      },
      'icon': 'memory',
    },
    {
      'title': 'ECU data',
      'text': 'Reading ECU data from my car and mapping it to LED colors',
      'sleeve_image': 'img/tiles/ecu_data_tile.png',
      'click': function() {
        new layer.blog.ecu_data().render();
      },
      'icon': 'memory',
    },
  ];
};

layer.scrapyard.prototype.get_class = function(){
  return ['layer', 'scrapyard'];
};