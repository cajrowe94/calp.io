layer.projects = function(){
  layer.apply(this, arguments);
};
$.inherits(layer.projects, layer);

layer.projects.prototype.decorate = function(parent) {
  this.decorate_title(parent);
  this.decorate_tiles(parent);
};

layer.projects.prototype.get_class = function(){
  return ['layer', 'projects'];
};

layer.projects.prototype.decorate_title = function(parent) {
	var container = document.createElement('div');

  css.apply(container, {
    'margin': '50px 0px 30px 0px',
  });

  // main title
  var title = document.createElement('h1');
  title.innerText = 'My Projects.';
  container.appendChild(title);

  // sub title
  var sub_title = document.createElement('h3');
  sub_title.innerText = 'Web dev and electronics';
  container.appendChild(sub_title);

  parent.appendChild(container);
}

layer.projects.prototype.decorate_tiles = function(parent) {
  var grid = new component.grid();

  // // get all the projects
  var projects = this.get_projects();

  projects.forEach(function(project){
    var tile = new component.tile(project);
    grid.add_cell(tile);
  });

  grid.render(parent);
}

layer.projects.prototype.get_projects = function() {
  return [
    {
      'title': 'S.P.L.I.C.E.',
      'text': 'Senior project at IU Kokomo. Online repository and discussion forum for Dr. Hisako Masuda\'s genomics courses',
      'sleeve_image': 'img/tiles/spliceiuk_tile.jpg',
      'link': 'http://spliceiuk.000webhostapp.com/pages/index.php',
    },
    {
      'title': 'Twitter bot',
      'text': 'My twitter bot Jimothy Johannes',
      'sleeve_image': 'img/tiles/jimothy_tile.jpg',
      'link': 'https://twitter.com/jjohannesbot',
    },
    {
      'title': 'Perlin noise',
      'text': 'Experimenting with perlin noise and word vector data.',
      'sleeve_image': 'img/tiles/perlin_noise_tile.jpg',
      'link': 'https://calebrowe.work/wp-content/perlin-noise-wordvecs/wikiPerlinNoiseProject4/index.html',
    },
    {
      'title': 'Pen plotter',
      'text': 'Homemade 6\'x6\' Arduino drawing machine',
      'sleeve_image': 'img/tiles/pen_plotter_tile.jpg',
    },
    {
      'title': 'Collisions',
      'text': 'Creating the illusion of planetary collisions',
      'sleeve_image': 'img/tiles/collisions_tile.jpg',
    },
    {
      'title': 'LeWitt 358',
      'text': 'Recreation of Sol LeWitt\'s wall drawing #358',
      'sleeve_image': 'img/tiles/lewitt_358_tile.jpg',
    },
    {
      'title': 'Machine learning',
      'text': 'Exploring basic machine learning principles with smart rockets',
      'sleeve_image': 'img/tiles/machine_learning_tile.jpg',
    },
    {
      'title': 'Cell growth',
      'text': 'Emulating organic cell growth with the cellular automata algorithm',
      'sleeve_image': 'img/tiles/cell_growth_tile.jpg',
    },
    {
      'title': 'Sin & Cosin',
      'text': 'Exploring the use of sin and cosin within the movement of particles',
      'sleeve_image': 'img/tiles/sin_cosin_tile.jpg',
    },
    {
      'title': 'Mouse particles',
      'text': 'Interactive mouse movement events using the comic.js library',
      'sleeve_image': 'img/tiles/mouse_particles_tile.jpg',
    },
    {
      'title': 'Gravity',
      'text': 'Attempting to emulate gravitational fields',
      'sleeve_image': 'img/tiles/gravity_tile.jpg',
    },
    {
      'title': 'Cosmos',
      'text': 'Building the cosmos in html5 canvas',
      'sleeve_image': 'img/tiles/cosmos_tile.jpg',
    },
    {
      'title': 'Mouse lasers',
      'text': 'Interactive line drawing canvas',
      'sleeve_image': 'img/tiles/mouse_lasers_tile.jpg',
    },
    {
      'title': 'Hike\'s Peak',
      'text': 'Fictional travel agency',
      'sleeve_image': 'img/tiles/hikes_peak_tile.jpg',
    },
    {
      'title': 'Iceland Tours',
      'text': 'Fictional Iceland travel agency and tours',
      'sleeve_image': 'img/tiles/iceland_tile.jpg',
    },
    {
      'title': 'Art Portfolio',
      'text': 'Art type portfolio landing page',
      'sleeve_image': 'img/tiles/art_tile.jpg',
    },
    {
      'title': 'Weather app',
      'text': 'Every beginner makes a weather app at some point',
      'sleeve_image': 'img/tiles/weather_app_tile.jpg',
    },
    {
      'title': 'Tech Talk',
      'text': 'Fictional tech news subscription service',
      'sleeve_image': 'img/tiles/tech_talk_tile.jpg',
    },
    {
      'title': 'Servo wave',
      'text': 'Using servo motors to emulate wavelike movement',
      'sleeve_image': 'img/tiles/servo_wave_tile.jpg',
    },
    {
      'title': 'Hanging plotter',
      'text': 'Vertical pen plotter, controllable with a joystick',
      'sleeve_image': 'img/tiles/hanging_plotter_tile.jpg',
    },
    {
      'title': 'LED Toy',
      'text': 'Using basic components to build an Arduino on a breadboard',
      'sleeve_image': 'img/tiles/led_toy_tile.jpg',
    },
    {
      'title': 'ECU data',
      'text': 'Reading ECU data from my car and mapping it to LED colors',
      'sleeve_image': 'img/tiles/ecu_data_tile.jpg',
    },
  ];
}