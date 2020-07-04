layer.home = function(){
  layer.apply(this, arguments);
};
$.inherits(layer.home, layer);

layer.home.prototype.decorate = function(parent) {
  var projects_tile = new component.tile({
    'title': 'Projects',
    'icon': 'memory',
    'text': 'Collection of all my projects I have done through the years.',
    'click': function() {
      new layer.projects().render();
    },
  });

  projects_tile.render(parent);

  var blog_tile = new component.tile({
    'title': 'Blog',
    'icon': 'dashboard',
    'text': 'I write about traveling, electronics, and development.',
    'click': function() {
      new layer.blog().render();
    },
  });

  blog_tile.render(parent);

  var about_tile = new component.tile({
    'title': 'About',
    'icon': 'person',
    'text': 'What\'s calp? Who am I and what do I even do?',
    'click': function() {
      new layer.about().render();
    },
  });

  about_tile.render(parent);
};

layer.home.prototype.get_class = function(){
  return ['layer', 'home'];
};
