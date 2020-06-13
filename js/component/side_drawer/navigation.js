
component.side_drawer.navigation = function(){
  component.apply(this, arguments);
};
$.inherits(component.side_drawer.navigation, component.side_drawer);

/**
 * Set contents
 * Header, Body, and Footer
 */

component.side_drawer.navigation.prototype.decorate_header = function(parent){
  var container = document.createElement('div');

  css.apply(container, {
    'padding': '0px 10px',
  });

  // main title
  var title = document.createElement('h2');
  title.innerText = 'calp.io';

  css.apply(title, {
    'text-decoration': 'underline',
  });

  // subtitle
  var sub_title = document.createElement('p');
  sub_title.innerText = 'by Caleb Rowe';

  container.appendChild(title);
  container.appendChild(sub_title);

  parent.appendChild(container);
};

component.side_drawer.navigation.prototype.decorate_body = function(parent){
  var self = this;
  var nav_list = new component.list();

  var list_contents = [
    {
      'name': 'Projects',
      'icon': 'memory',
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
        new layer.blog().render();
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
    {
      'name': 'Sentence Generator',
      'icon': 'message',
      'action': (function() {
        self.hide();
        new layer.sentence_generator().render();
      }),
    },
  ];

  nav_list.set_contents(list_contents);
  nav_list.render(parent);
};

component.side_drawer.navigation.prototype.decorate_footer = function(parent){
  // todo
};
