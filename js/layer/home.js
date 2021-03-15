layer.home = function(){
  layer.apply(this, arguments);
};
$.inherits(layer.home, layer);

layer.home.prototype.decorate = function(parent) {
  // decorate tiles
  this.decorate_links(parent);
  this.decorate_blocks(parent);
  this.decorate_extra(parent);
};

layer.home.prototype.get_title = function() {
  return 'Hi, I\'m Caleb';
};

layer.home.prototype.get_sub_title = function() {
  return 'I like web development and fiddling with electronics.';
};

layer.home.prototype.decorate_links = function(parent){
  var grid = new component.grid();

  var projects_tile = new component.tile({
    'title': 'Projects',
    'icon': 'rocket',
    'text': 'Collection of all my projects I have done through the years.',
    'sleeve_image': 'img/tiles/cosmos_tile.png',
    'click': function() {
      new layer.projects().render();
    },
  });

  grid.add_cell(projects_tile);

  var blog_tile = new component.tile({
    'title': 'Blog',
    'icon': 'dashboard',
    'text': 'I write about traveling, electronics, and development.',
    'sleeve_image': 'img/tiles/zion_tile.jpg',
    'click': function() {
      new layer.blog_home().render();
    },
  });

  grid.add_cell(blog_tile);

  var about_tile = new component.tile({
    'title': 'About',
    'icon': 'person',
    'text': 'The heck does calp mean?',
    'sleeve_image': 'img/about/about_page_1.jpg',
    'click': function() {
      new layer.about().render();
    },
  });

  grid.add_cell(about_tile);

  grid.render(parent);
};

layer.home.prototype.decorate_blocks = function(parent){
  var grid = new component.grid();

  var pen_plotter_block = new component.block({
    'background_image': 'img/gifs/pen_plotter_gif_1.gif',
    'link': {
      'url': 'https://www.youtube.com/watch?v=Jm7jGlNqxU0',
      'text': 'Pen plotter build video',
    },
  });

  grid.add_cell(pen_plotter_block);

  var drone_block = new component.block({
    'background_image': 'img/gifs/drone_gif_1.gif',
    'link': {
      'url': 'https://www.youtube.com/watch?v=ruX-3NFbIZ4',
      'text': 'Watch me fly!',
    },
  });

  grid.add_cell(drone_block);

  grid.render(parent);
};

layer.home.prototype.decorate_extra = function(parent){
  var grid = new component.grid();

  var spotify_tile = new component.tile({
    'title': '2020 Spotify stream data',
    'icon': 'bar_chart',
    'text': 'I downloaded my 2020 Spotify stream data and made some cool charts.',
    'sleeve_image': 'img/tiles/spotify_tile.png',
    'click': function() {
      new layer.spotify().render();
    },
  });

  grid.add_cell(spotify_tile);

  grid.render(parent);
};

layer.home.prototype.get_class = function(){
  return ['layer', 'home'];
};
