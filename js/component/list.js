
component.list = function(){
  component.apply(this, arguments);
};
$.inherits(component.list, component);

component.list.prototype.decorate = function(parent) {
  var list_container = document.createElement('div');

  var list = this.get_contents_();
  if (!list) {
    console.warn('no list items given');
    return;
  }

  list.forEach(function(list_item) {
    var container = document.createElement('div');
    var line_height = '23px';

    css.apply(container, {
      'height': 'auto',
      'line-height': line_height,
      'cursor': 'pointer',
      'display': 'flex',
      'width': '95%',
      'margin': '0 auto',
      'padding': '10px 10px 10px 20px',
      'transition': 'background .2s',
      'border-radius': '5px',
    });


    container.addEventListener('click', function(){
      if ( // call action if a function is passed
        list_item &&
        Object.prototype.hasOwnProperty.call(list_item, 'action') &&
        (typeof list_item.action === 'function')
      ) {
        list_item.action();
      } else {
        console.warn(list_item.name + ' list_item has not been assigned an action');
      }
    });


    // add the icon if available
    if (list_item.icon) {
      var icon = forge.make('icon', {
        'file_name': list_item.icon,
        'theme': 'dark',
      });

      css.apply(icon, {
        'margin-right': '20px',
      });
      container.appendChild(icon);
    }

    // add the text
    var text = document.createElement('span');
    text.innerHTML = list_item.name;

    css.apply(text, {
      'display': 'block',
      'font-size': '14px',
      'transition': 'color .2s',
    });

    container.appendChild(text);

    // container events

    container.addEventListener('mouseenter', function(){
      css.apply(container, {
        'background': css.color('blue_crayola'),
      });
    });

    container.addEventListener('mouseleave', function(){
      css.apply(container, {
        'background': 'transparent',
      });
    });

    list_container.appendChild(container);
  });

  parent.appendChild(list_container);
};

component.list.prototype.set_contents = function(list) {
  this.list_ = list;
};

component.list.prototype.get_contents_ = function() {
  return this.list_;
};
