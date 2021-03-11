component.navigation = function(){
  component.apply(this, arguments);
};
$.inherits(component.navigation, component);

component.navigation.prototype.decorate = function(parent) {
  var container = document.createElement('div');
  var drawer_container = document.getElementsByTagName('body')[0];
  var nav_drawer = new component.side_drawer.navigation();

  // decorate the logo
  this.decorate_logo_(container);

  var menu_icon = forge.make('icon', {
    'file_name': 'menu',
    'theme': 'dark',
  });

  css.apply(menu_icon, {
    'height': '50px',
    'position': 'absolute',
    'top': '0',
    'left': '10px',
    'cursor': 'pointer',
  });

  container.appendChild(menu_icon);

  menu_icon.addEventListener('click', function(){
    nav_drawer.show();
  });

  css.apply(container, {
    'position': 'fixed',
    'top': '0',
    'left': '0',
    'backgroundColor': css.color('background_secondary'),
    'box-shadow': '0px 2px 8px rgba(0,0,0,0.3)',
    'border': '1px solid ' + css.color('border_color'),
    'border-top': '0px',
    'height': '50px',
    'width': '100%',
    'line-height': '75px',
    'z-index': '200',
    'border-radius': '0px 0px 10px 10px',
  });

  var title = document.createElement('h1');
  title.innerText = 'calp.io';

  css.apply(title, {
    'position': 'absolute',
    'right': '5px',
    'height': '50px',
    'line-height': '43px',
    'color': 'rgba(225, 225, 225, 0.1)',
  });

  container.appendChild(title);

  parent.appendChild(container);
  nav_drawer.render(drawer_container);
};

component.navigation.prototype.get_class = function() {
  return ['component', 'navigation'];
};

component.navigation.prototype.decorate_logo_ = function(parent) {
  var logo_container = document.createElement('div');

  parent.appendChild(logo_container);
};
