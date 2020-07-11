layer.home = function(){
  layer.apply(this, arguments);
};
$.inherits(layer.home, layer);

layer.home.prototype.decorate = function(parent) {
  // decorate intro text
  this.decorate_title(parent);
  // decorate tiles
  this.decorate_links(parent);
};

layer.home.prototype.decorate_title = function(parent) {
  var container = document.createElement('div');

  css.apply(container, {
    'margin': '50px 0px 30px 0px',
  })

  // main title
  var title = document.createElement('h1');
  title.innerText = 'Hi, I\'m Caleb.';
  container.appendChild(title);

  // sub title
  var sub_title = document.createElement('h3');
  sub_title.innerText = 'I got a thing for web development and fiddling with electronics.';
  container.appendChild(sub_title);

  parent.appendChild(container);
};

layer.home.prototype.decorate_links = function(parent){
  var grid = new component.grid();

  var projects_tile = new component.tile({
    'title': 'Projects',
    'icon': 'memory',
    'text': 'Collection of all my projects I have done through the years.',
    'click': function() {
      new layer.projects().render();
    },
  });

  grid.add_cell(projects_tile);

  var blog_tile = new component.tile({
    'title': 'Blog',
    'icon': 'dashboard',
    'text': 'I write about traveling, electronics, and development.',
    'click': function() {
      new layer.blog().render();
    },
  });

  grid.add_cell(blog_tile);

  var about_tile = new component.tile({
    'title': 'About',
    'icon': 'person',
    'text': 'The heck does calp mean?',
    'click': function() {
      new layer.about().render();
    },
  });

  grid.add_cell(about_tile);

  grid.render(parent);
};

layer.home.prototype.get_class = function(){
  return ['layer', 'home'];
};
