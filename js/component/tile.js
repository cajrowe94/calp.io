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
  main_container.classList.add('tile-main-container');

  this.set_click_event_(main_container);

  // sleeve container
  var sleeve_container = document.createElement('div');
  sleeve_container.classList.add('tile-sleeve');

  var sleeve_background = {};

  var overlay = document.createElement('div');

  if (
    this.options_ &&
    this.options_.sleeve_image
  ) {
    overlay.classList.add('sleeve-image-overlay');
    sleeve_container.appendChild(overlay);

    sleeve_background['background-image'] = 'url("' + this.options_.sleeve_image + '")';
    sleeve_background['background-repeat'] = 'no-repeat';
    sleeve_background['background-position'] = 'center';
    sleeve_background['background-size'] = 'cover';
  } else if (this.options_.background_color) {
    sleeve_background.background = this.options_.background_color;
    sleeve_background['backdrop-filter'] = 'blur(7px)';
  } else {
    sleeve_background.background = css.color('background_secondary_alpha');
    sleeve_background['backdrop-filter'] = 'blur(7px)';
  }

  css.apply(sleeve_container, sleeve_background);

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
      'width': '50px',
      'padding-left': '20px',
    });

    var icon_main = forge.make('icon', {
      'file_name': this.options_.icon,
    });

    css.apply(icon_main, {
      'position': 'absolute',
      'bottom': '5px',
      'right': '5px',
    });

    sleeve_container.appendChild(icon_sleeve);
    main_container.appendChild(icon_main);
  }

  if (
    this.options_ &&
    this.options_.text
  ) {
    var text = document.createElement('p');

    text.innerText = this.options_.text;

    css.apply(text, {
      'margin': '10px 5px',
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
    var title = document.createElement('h4');
    title.innerText = this.options_.title;

    css.apply(title, {
      'padding-left': '10px',
      'overflow': 'hidden',
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
