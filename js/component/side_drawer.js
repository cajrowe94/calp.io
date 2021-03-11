
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

  // container for overlay
  this.close_container_ = document.createElement('div');

  css.apply(this.close_container_, {
    'position': 'absolute',
    'top': '0px',
    'left': '0px',
    'width': '100vw',
    'height': '100vh',
    'z-index': '2000',
    'background': css.color('background_alpha'),
    'transition': 'visibility 0s, opacity .2s ease-in-out',
    'opacity': '0',
    'visibility': 'hidden',
  });

  this.close_container_.addEventListener('click', function() {
    self.hide();
  });

  parent.appendChild(this.close_container_);

  var main_container = document.createElement('div');
  this.set_class(main_container);

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
    'border-radius': '50%',
    'background': 'transparent',
    'padding': '3px',
    'transition': 'background .3s',
  });

  close_icon.addEventListener('mouseover', function() {
    css.apply(close_icon, {
      'background': css.color('secondary_focus'),
    });
  });

  close_icon.addEventListener('mouseleave', function() {
    css.apply(close_icon, {
      'background': 'transparent',
    });
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
    'background': css.color('background_secondary'),
    'display': 'flex',
    'flex-direction': 'column',
    'position': 'fixed',
    'border-radius': '0px 10px 10px 0px',
    'border': '1px solid ' + css.color('border_color'),
    'border-left': '0px',
    'top': '0px',
    'left': this.get_side() === 'left' ? '-' + this.drawer_width_ + 'px' : null,
    'right': this.get_side() === 'right' ? '-' + this.drawer_width_ + 'px' : null,
    'transition': 'right .3s, left .3s',
    'z-index': 9999,
    'overflow': 'hidden',
  });

  // build sections
  var header_container = document.createElement('div');
  header_container.setAttribute('data-nav', true);

  css.apply(header_container, {
    'flex': '0 1 30%',
    // 'border-bottom': '2px solid ' + css.color('secondary_focus'),
    'margin': '0px 10px',
    'padding': '5px 0px',
  });
  this.decorate_header(header_container);
  container.appendChild(header_container);

  var body_container = document.createElement('div');
  body_container.setAttribute('data-nav', true);

  css.apply(body_container, {
    'flex': '1 1 auto',
    'padding': '10px 0px',
  });
  this.decorate_body(body_container);
  container.appendChild(body_container);

  var footer_container = document.createElement('div');
  footer_container.setAttribute('data-nav', true);

  css.apply(footer_container, {
    'flex': '0 1 15%',
    // 'border-top': '2px solid ' + css.color('secondary_focus'),
    'margin': '0px 10px',
    'padding': '5px 0px',
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
      'box-shadow': '0px 2px 15px ' + css.color('gray', '300'),
    });

    // show overlay
    css.apply(this.close_container_, {
      'visibility': 'visible',
      'opacity': '100',
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

    // hide overlay
    css.apply(this.close_container_, {
      'opacity': '0',
      'visibility': 'hidden',
    });
  }

  this.hidden_ = true;
};

component.side_drawer.prototype.get_class = function() {
  return ['component', 'side_drawer'];
};
