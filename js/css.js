var css = function(){};

/**
 * Set the CSS of an element
 * Replaces only what is sent in
 */

css.prototype.apply = function(ele, options){
  if ( // check if you be passing in what I need bish
    ele &&
    ele.nodeType &&
    options
  ) {
    // split the css properties and value into arrays
    var prop_values_pair = Object.entries(options);
    for (var i in prop_values_pair){ // apply each css prop
      ele.style[prop_values_pair[i][0]] = prop_values_pair[i][1];
    }
  }
};

css.prototype.color = function(color, opt_shade){
  // stores the current theme
  // will somehow store this in the state somehow
  var theme = this.get_theme('dark');

  /**
   * All colors
   * Also has the theme's color palette built in
   */
  var colors = {
    'primary': theme.primary,
    'background': theme.background,
    'background_secondary': theme.background_secondary,
    'secondary': theme.secondary,
    'secondary_focus': 'rgba(0, 227, 227, 0.1)',
    'gray': {
      '100': '#484848',
      '200': '#212121',
      '300': '#0f0f0f',
    },
    'black': {
      '200': '#000000',
    },
    'blue_gray': {
      '100': '#62727b',
      '200': '#37474f',
      '300': '#102027',
    },
    'cyan': {
      '100': '#76ffff',
      '200': '#18ffff',
      '300': '#00cbcc',
    },
    'white': {
      '100': '#ffffff',
      '200': '#ffffff',
      '300': '#e1e1e1',
    },
    'error': '#CF6679',
  };

  if (
    colors[color] &&
    opt_shade
  ) {
    return colors[color][opt_shade];
  } else if (
    colors[color] &&
    Object.prototype.hasOwnProperty.call(colors[color], 200)
  ) { // default to 200 shade level
    return colors[color][200];
  }
  // this only happens if its a secondary or primary color
  return colors[color];
};

css.prototype.get_theme = function(theme){
  var theme_palettes = {
    'dark': {
      'primary': '#121212',
      'secondary': '#18ffff',
      'background': '#121212',
      'background_alpha': 'rgba(18, 18, 18, 0.5)',
      'background_secondary': '#212121',
    },
    'forest': {
      'primary': '#363030',
      'secondary': '#547980',
    },
    'beach': {
      'primary': '#355C7D',
      'secondary': '#6C5B7B',
    },
  };

  return theme_palettes[theme];
};

css.prototype.is_mobile = function(){
  return (screen.width <= 500);
};

