/**
 * CSS Grid component
 * Should be fairly simple for now
 * Will expand if necessary
 */

component.grid = function(settings){
  component.apply(this, arguments);
  this.settings_ = settings || {};
  this.init();
};
$.inherits(component.grid, component);

component.grid.prototype.decorate = function(parent){
  if (this.grid_container_) {
    parent.appendChild(this.grid_container_);
  } else {
    console.warn('Must call init() before rendering grid');
  }
};

/**
 * Add a cell to the grid
 * These will appear in the order they are added
 */

component.grid.prototype.add_cell = function(contents) {
  var wrapper = document.createElement('div');

  // use render function if available
  if (contents.render) {
    contents.render(this.grid_container_)
  } else {
    this.grid_container_.appendChild(contents);  
  }
};

component.grid.prototype.init = function() {
  var grid_container = document.createElement('div');

  // main grid container
  css.apply(grid_container, {
    'display': 'grid',
    'column-gap': '15px',
    'row-gap': '15px',
    'grid-template-columns': 'repeat(' + (this.settings_.columns || 'auto-fit') + ', minmax(300px, 1fr))',
    'justify-items': 'center',
    'margin': '20px 0px',
  });

  this.grid_container_ = grid_container;
};
