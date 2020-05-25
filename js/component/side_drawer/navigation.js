
component.side_drawer.navigation = function(){
  component.apply(this, arguments);
};
$.inherits(component.side_drawer.navigation, component.side_drawer);

/**
 * Set contents
 * Header, Body, and Footer
 */

component.side_drawer.navigation.prototype.decorate_header = function(parent){
  // todo
};

component.side_drawer.navigation.prototype.decorate_body = function(parent){
  var nav_list = new component.list();

  var list_contents = [
    {
      'name': 'Projects',
      'icon': 'memory',
      'action': (function() {
        new layer.projects().render();
      }),
    },
    {
      'name': 'Blog',
      'icon': 'dashboard',
      'action': (function() {
        new layer.blog().render();
      }),
    },
    {
      'name': 'About',
      'icon': 'person',
      'action': (function() {
        new layer.about().render();
      }),
    },
    {
      'name': 'Sentence Generator',
      'icon': 'message',
      'action': (function() {
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
