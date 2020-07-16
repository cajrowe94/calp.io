/**
 * {
 *   'icon': '',
 *   'text': '',
 *   'title': '',
 *   'sleeve_image': '',
 *   'click': '',
 * }
 */
component.tile = function(args){
  component.apply(this, arguments);
  this.options_ = args;
};
$.inherits(component.tile, component);

component.tile.prototype.decorate = function(parent) {
  var self = this;
  // main container for the tile
  var main_container = document.createElement('div');
  var height = '130px';

  this.set_click_event_(main_container);

  css.apply(main_container, {
    'height': height,
    'width': '100%',
    'background': css.color('background_secondary'),
    'border-radius': '10px',
    'box-shadow': '0px 2px 8px rgba(0,0,0,0)',
    'cursor': 'pointer',
    'z-index': '10',
    'position': 'relative',
    'display': 'flex',
    'transition': 'transform .1s, top .1s',
  });

  // sleeve container
  var sleeve_container = document.createElement('div');

  // hover effects
  main_container.addEventListener('mouseover', function() {
    css.apply(sleeve_container, {
      'opacity': '0',
    });

    css.apply(main_container, {
      'transform': 'rotate(1deg)',
      'top': '-5px',
    });
  });

  main_container.addEventListener('mouseleave', function() {
    css.apply(sleeve_container, {
      'opacity': '100',
    });

    css.apply(main_container, {
      'transform': 'rotate(0deg)',
      'top': '0px',
    });
  });

  var sleeve_background = {};

  if (
    this.options_ &&
    this.options_.sleeve_image
  ) {
    var overlay = document.createElement('div');

    css.apply(overlay, {
      'position': 'absolute',
      'top': '0',
      'left': '0',
      'width': '100%',
      'height': '100%',
      'z-index': '-1',
      'background-image': 'linear-gradient(to right, rgba(18,18,18,1), rgba(18,18,18,0.3))',
    });

    sleeve_container.appendChild(overlay);

    sleeve_background['background-image'] = 'url("' + this.options_.sleeve_image + '")';
    sleeve_background['background-repeat'] = 'no-repeat';
    sleeve_background['background-position'] = 'center';
    sleeve_background['background-size'] = 'cover';
  } else {
    sleeve_background.background = css.color('background_secondary_alpha');
    sleeve_background['backdrop-filter'] = 'blur(7px)';
  }

  css.apply(sleeve_container, $.extend({
    'z-index': '10',
    'height': '100%',
    // 'border-radius': '10px',
    'width': '100%',
    'top': '0',
    'right': '0',
    'display': 'flex',
    'line-height': height,
    'position': 'absolute',
    'transition': 'opacity .2s ease-in-out',
    // 'box-shadow': '-2px 0px 7px rgba(0,0,0, 0.8)',
    'opacity': '100',
  }, sleeve_background));

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
      'min-height': '25%',
      'width': 'auto',
      'padding-left': '20px',
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
    var title = document.createElement('h3');
    title.innerText = this.options_.title;

    css.apply(title, {
      'padding-left': '10px',
      'overflow': 'hidden',
      'font-weight': '300',
    });

    sleeve_container.appendChild(title);
  }

  // if a link is provided, it overrides any other click event
  if (
    this.options_ &&
    this.options_.link
  ) {
    main_container.addEventListener('click', function() {
      window.open(self.options_.link, '_blank');
    });
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
