
component.side_drawer.navigation = function(){
  component.apply(this, arguments);
};
$.inherits(component.side_drawer.navigation, component.side_drawer);

/**
 * Set contents
 * Header, Body, and Footer
 */

component.side_drawer.navigation.prototype.decorate_header = function(parent){
  var self = this;
  var container = document.createElement('div');

  css.apply(container, {
    'padding': '0px 10px',
  });

  // main title
  var anchor = document.createElement('a');
  anchor.classList.add('link');

  anchor.addEventListener('click', function() {
    new layer.home().render();
    self.hide();
  });

  var title = document.createElement('h2');
  title.innerText = 'calp.io';

  css.apply(title, {
    'color': css.color('background_secondary'),
    'width': 'fit-content',
    'transition': 'transform .1s',
  });

  // hover effects
  title.addEventListener('mouseover', function() {
    css.apply(title, {
      'transform': 'rotate(2deg)',
    });
  });

  title.addEventListener('mouseleave', function() {
    css.apply(title, {
      'transform': 'rotate(0deg)',
    });
  });

  // fancy trendy blobby blob
  var blob = forge.make('blob', {});

  css.apply(blob, {
    'position': 'absolute',
    'z-index': '-1',
    'height': '500px',
    'top': '-275px',
    'left': '-170px',
  });

  anchor.appendChild(title);
  container.appendChild(anchor);
  container.appendChild(blob);

  parent.appendChild(container);
};

component.side_drawer.navigation.prototype.decorate_body = function(parent){
  var self = this;
  var nav_list = new component.list();

  var list_contents = [
    {
      'name': 'Projects',
      'icon': 'rocket',
      'action': (function() {
        self.hide();
        new layer.projects().render();
      }),
    },
    {
      'name': 'Blog',
      'icon': 'dashboard',
      'action': (function() {
        self.hide();
        new layer.blog_home().render();
      }),
    },
    {
      'name': 'About',
      'icon': 'person',
      'action': (function() {
        self.hide();
        new layer.about().render();
      }),
    },
    // {
    //   'name': 'Sentence Generator',
    //   'icon': 'message',
    //   'action': (function() {
    //     self.hide();
    //     new layer.sentence_generator().render();
    //   }),
    // },
  ];

  nav_list.set_contents(list_contents);
  nav_list.render(parent);
};

component.side_drawer.navigation.prototype.decorate_footer = function(parent){
  // fancy trendy blobby blob
  var blob = forge.make('blob', {});

  css.apply(blob, {
    'position': 'absolute',
    'height': css.is_mobile() ? '42%' : '35%',
    'z-index': '-1',
    'bottom': '-15%',
    'right': '-39%',
  });

  parent.appendChild(blob);
};

component.side_drawer.navigation.prototype.get_class = function() {
  return ['component', 'side_drawer', 'navigation'];
};
