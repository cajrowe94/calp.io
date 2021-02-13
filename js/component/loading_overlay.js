
/**
 * Loading overlay element
 */
component.loading_overlay = function(args){
  component.apply(this, arguments);
};
$.inherits(component.loading_overlay, component);

component.loading_overlay.prototype.decorate = function(parent){
  var overlay_container = document.createElement('div');
  var overlay = document.createElement('div');

  css.apply(overlay, {
    'height': '100%',
    'width': '100%',
    'z-index': '9998',
    'position': 'relative',
    'background': css.color('background_secondary_alpha'),
  });

  var loading_centerpiece = document.createElement('div');

  css.apply(loading_centerpiece, {
    'display': 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
    'justify-content': 'center',
    'position': 'absolute',
    'z-index': '9999',
    'left': '50%',
    'top': '50%',
    'transform': 'translate(-50%, -50%)',
    'width': 'fit-content',
    'height': '75px',
  });

  var loading_gif = forge.make('gif', {
    'file_name': 'circles_loading',
  });

  css.apply(loading_gif, {
    'height': '32px',
    'width': '32px',
  });

  loading_centerpiece.appendChild(loading_gif);

  var text = document.createElement('span');

  css.apply(text, {
    'font-size': '13px',
  });

  text.innerHTML = 'doing some things';

  loading_centerpiece.appendChild(text);

  overlay_container.appendChild(loading_centerpiece);
  overlay_container.appendChild(overlay);

  parent.appendChild(overlay_container);
};
