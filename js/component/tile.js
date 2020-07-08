
component.tile = function(args){
  component.apply(this, arguments);
  this.options_ = args;
};
$.inherits(component.tile, component);

component.tile.prototype.decorate = function(parent) {
  // main container for the tile
  var main_container = document.createElement('div');
  var height = '130px';

  this.set_click_event_(main_container);

  css.apply(main_container, {
    'height': height,
    'max-width': '400px',
    'background': css.color('background_secondary'),
    'box-shadow': '0px 2px 8px rgba(0,0,0,0.6)',
    'border-radius': '10px',
    'cursor': 'pointer',
    'z-index': '10',
    'position': 'relative',
    'display': 'flex',
    'margin': '20px',
  });

  // sliding sleeve container
  var sleeve_container = document.createElement('div');

  // hover sliding effects
  main_container.addEventListener('mouseover', function() {
    css.apply(sleeve_container, {
      'opacity': '0',
    });
  });

  main_container.addEventListener('mouseleave', function() {
    css.apply(sleeve_container, {
      'opacity': '100',
    });
  });

  css.apply(sleeve_container, {
    'z-index': '11',
    'height': '100%',
    'border-radius': '0px 10px 10px 0px',
    'width': '100%',
    'top': '0',
    'right': '0',
    'display': 'flex',
    'line-height': height,
    'position': 'absolute',
    'transition': 'opacity .2s ease-in-out',
    'transition-delay': '.1s',
    'box-shadow': '-2px 0px 7px rgba(0,0,0, 0.8)',
    'background': css.color('secondary_focus'),
    'backdrop-filter': 'blur(7px)',
    'border-left': '5px solid ' + css.color('secondary'),
    'opacity': '100',
  });

  main_container.appendChild(sleeve_container);

  // add an icon if passed in
  if (
    this.options_ &&
    this.options_.icon
  ) {
    var icon_sleeve = forge.make('icon', {
      'file_name': this.options_.icon,
    });

    css.apply(icon_sleeve, {
      'min-height': '40%',
      'width': 'auto',
      'z-index': '10',
      'padding-left': '10px',
    });

    var icon_main = forge.make('icon', {
      'file_name': this.options_.icon,
    });

    css.apply(icon_main, {
      'height': '35px',
      'position': 'absolute',
      'bottom': '5px',
      'right': '5px',
    });

    sleeve_container.appendChild(icon_sleeve);
    main_container.appendChild(icon_main);
  }

  // add an icon if passed in
  if (
    this.options_ &&
    this.options_.text
  ) {
    var text = document.createElement('p');

    text.innerText = this.options_.text;

    css.apply(text, {
      'margin': '10px 5px',
      'border-left': '2px solid ' + css.color('secondary'),
      'padding': '18px 10px 10px 10px',
    });

    main_container.appendChild(text);
  }

  // set a title if passed in
  // should I make this required?
  if (
    this.options_ &&
    this.options_.title
  ) {
    var title = document.createElement('h2');
    title.innerText = this.options_.title;

    css.apply(title, {
      'padding-left': '10px',
      'overflow': 'hidden',
    });

    sleeve_container.appendChild(title);
  }

  parent.appendChild(main_container);
};

/**
 * Set the click event for this tile
 * Must be a function
 */
component.tile.prototype.set_click_event_ = function(container) {
  // check if event was passed and if its a function
  if (
    this.options_ &&
    this.options_.click &&
    typeof this.options_.click === 'function'
  ) {
    container.addEventListener('click', this.options_.click);
  }
};

component.tile.prototype.get_class = function() {
  return ['component', 'tile'];
};
