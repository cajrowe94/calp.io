layer.home = function(){
  layer.apply(this, arguments);
};
$.inherits(layer.home, layer);

layer.home.prototype.decorate = function(parent) {
  var container = document.createElement('div');

  css.apply(container, {
    'margin': '0 auto',
    'width': css.is_mobile() ? '95%' : '75%',
    'padding': '50px 20px',
  });

  var projects_tile = new component.tile({
    'title': 'Projects',
    'icon': 'memory',
    'text': 'Collection of all my projects I have done through the years.' +
      ' It mostly consists of web development projects and electronics.',
    'click': function() {
      new layer.projects().render();
    },
  });

  projects_tile.render(container);

  var blog_tile = new component.tile({
    'title': 'Blog',
    'icon': 'dashboard',
    'text': 'Collection of all my projects I have done through the years.' +
      ' It mostly consists of web development projects and electronics.',
    'click': function() {
      new layer.blog().render();
    },
  });

  blog_tile.render(container);

  var about_tile = new component.tile({
    'title': 'About',
    'icon': 'person',
    'text': 'Collection of all my projects I have done through the years.' +
      ' It mostly consists of web development projects and electronics.',
    'click': function() {
      new layer.about().render();
    },
  });

  about_tile.render(container);

  parent.appendChild(container);
};

layer.home.prototype.get_class = function(){
  return ['layer', 'home'];
};
