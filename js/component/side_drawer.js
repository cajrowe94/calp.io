
component.side_drawer = function(){
  component.apply(this, arguments);
};
$.inherits(component.side_drawer, component);

/**
 * Main decorate
 * Called automatically
 */

component.side_drawer.prototype.decorate = function(parent) {
  var self = this;
  // set which side it will render on
  this.side_ = this.set_side();

  /**
   * Build out each section
   * Header, body, footer
   * Each needs overriden
   */

  var main_container = document.createElement('div');

  // add close button
  var close_icon = forge.make('icon', {
    'file_name': 'close',
    'theme': 'dark',
  });

  css.apply(close_icon, {
    'position': 'absolute',
    'top': '10px',
    'left': this.get_side() === 'right' ? '10px' : null,
    'right': this.get_side() === 'left' ? '10px' : null,
    'cursor': 'pointer',
  });

  close_icon.addEventListener('click', function(){
    self.hide();
  });
  main_container.appendChild(close_icon);

  this.set_default_styles_(main_container);
  this.main_container_ = main_container;
  parent.appendChild(main_container);
};

/**
 * Side drawer will contain 3 sections
 * The header, body, and footer
 * All three functions need overridden
 */

component.side_drawer.prototype.set_default_styles_ = function(container) {
  this.set_side();
  this.drawer_width_ = '320';
  // set styles of container

  css.apply(container, {
    'height': '100%',
    'width': this.drawer_width_ + 'px',
    'background': css.color('gray', '200'),
    'display': 'flex',
    'flex-direction': 'column',
    'position': 'fixed',
    'top': '0px',
    'left': this.get_side() === 'left' ? '-' + this.drawer_width_ + 'px' : null,
    'right': this.get_side() === 'right' ? '-' + this.drawer_width_ + 'px' : null,
    'transition': 'right .3s, left .3s',
    'z-index': 9999,
  });

  // build sections
  var header_container = document.createElement('div');

  css.apply(header_container, {
    'flex': '0 1 20%',
    'border-bottom': '1px solid ' + css.color('gray', 100),
    'padding': '10px 0px',
  });
  this.decorate_header(header_container);
  container.appendChild(header_container);

  var body_container = document.createElement('div');

  css.apply(body_container, {
    'flex': '1 1 auto',
    'padding': '10px 0px',
  });
  this.decorate_body(body_container);
  container.appendChild(body_container);

  var footer_container = document.createElement('div');

  css.apply(footer_container, {
    'flex': '0 1 15%',
    'border-top': '1px solid ' + css.color('gray', 100),
    'padding': '10px 0px',
  });
  this.decorate_footer(footer_container);
  container.appendChild(footer_container);

  // hide drawer on render
  this.hide();
};

component.side_drawer.prototype.decorate_header = function(parent){
  console.warn('todo override decorate_header');
};

component.side_drawer.prototype.decorate_body = function(parent){
  console.warn('todo override decorate_body');
};

component.side_drawer.prototype.decorate_footer = function(parent){
  console.warn('todo override decorate_footer');
};

/**
 * Which side of the container to render on
 * Default will be left
 */

component.side_drawer.prototype.set_side = function() {
  return 'left';
};

component.side_drawer.prototype.get_side = function() {
  return this.side_;
};

/**
 * Used to slide the drawer in and out of view
 */

component.side_drawer.prototype.show = function() {
  if (this.hidden_) {
    css.apply(this.main_container_, {
      'left': this.get_side() === 'left' ? '0px' : null,
      'right': this.get_side() === 'right' ? '0px' : null,
      'box-shadow': '0px 2px 12px black',
    });
  }
  this.hidden_ = false;
};

component.side_drawer.prototype.hide = function() {
  if (!this.hidden_) {
    css.apply(this.main_container_, {
      'left': this.get_side() === 'left' ? '-' + this.drawer_width_ + 'px' : null,
      'right': this.get_side() === 'right' ? '-' + this.drawer_width_ + 'px' : null,
      'box-shadow': 'none',
    });
  }
  this.hidden_ = true;
};
