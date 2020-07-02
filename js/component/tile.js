
component.tile = function(args){
  component.apply(this, arguments);
  this.options_ = args;
};
$.inherits(component.tile, component);

component.tile.prototype.decorate = function(parent) {
  // main container for the tile
  var main_container = document.createElement('div');

  css.apply(main_container, {
    'height': '130px',
    'max-width': '400px',
    'background': css.color('gray', '200'),
    'box-shadow': '0px 2px 8px rgba(0,0,0,0.6)',
    'border-radius': '5px',
    'cursor': 'pointer',
    'z-index': '10',
    'position': 'relative',
  });

  var sleeve_container = document.createElement('div');

  main_container.addEventListener('mouseover', function() {
    css.apply(sleeve_container, {
      'width': '10%',
    });
  });

  main_container.addEventListener('mouseleave', function() {
    css.apply(sleeve_container, {
      'width': '80%',
    });
  });

  css.apply(sleeve_container, {
    'z-index': '11',
    'height': '100%',
    'border-radius': '0px 5px 5px 0px',
    'width': '80%',
    'position': 'relative',
    'float': 'right',
    'transition': 'width .4s ease-in-out',
    'box-shadow': '-2px 0px 7px rgba(0,0,0, 0.8)',
    'background': css.color('gray', '100'),
  });

  main_container.appendChild(sleeve_container);

  if (
    this.options_ &&
    this.options_.icon
  ) {
    var icon = forge.make('icon', {
      'file_name': this.options_.icon,
    });

    css.apply(icon, {
      'position': 'absolute',
      'top': '0px',
      'left': '0px',
      'height': '100%',
      'width': 'auto',
      'z-index': '10',
    });

    main_container.appendChild(icon);
  }

  if (
    this.options_ &&
    this.options_.title
  ) {
    var title = document.createElement('h3');
    title.innerText = this.options_.title;

    css.apply(title, {
      'padding-left': '10px',
    });

    sleeve_container.appendChild(title);
  }

  parent.appendChild(main_container);
};
