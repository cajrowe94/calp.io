layer.projects = function(){
  layer.apply(this, arguments);
};
$.inherits(layer.projects, layer);

layer.projects.prototype.decorate = function(parent) {
  this.decorate_tiles(parent);
};

layer.projects.prototype.get_class = function(){
  return ['layer', 'projects'];
};

layer.projects.prototype.get_title = function(parent) {
  return 'Projects';
};

layer.projects.prototype.get_sub_title = function(parent) {
  return 'Web dev, art, and electronics';
};

layer.projects.prototype.decorate_tiles = function(parent) {
  var grid = new component.grid();

  // get all the projects
  var projects = this.get_projects();

  projects.forEach(function(project){
    var tile = new component.tile(project);
    grid.add_cell(tile);
  });

  grid.render(parent);
};

layer.projects.prototype.get_projects = function() {
  return [
    {
      'title': 'Pen plotter',
      'text': 'Homemade 6\'x6\' Arduino drawing machine',
      'sleeve_image': 'img/tiles/pen_plotter_tile.png',
      'click': function() {
        new layer.blog.pen_plotter().render();
      },
      'icon': 'memory',
    },
  ];
};
