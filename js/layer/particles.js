layer.particles = function(){
  layer.apply(this, arguments);
};
$.inherits(layer.particles, layer);

layer.particles.prototype.decorate = function(parent) {
  var container = document.createElement('div');
  var container_id = this.get_random_id();

  container.id = container_id;

  css.apply(container, {
    'position': 'absolute',
    'top': '0',
    'left': '0',
    'overflow': 'hidden',
    'height': '100%',
    'width': '100%',
  });

  parent.appendChild(container);

  particlesJS(container_id, this.get_particles_config());
}

/**
 * Particles JS requires an ID
 * This generates a random ID and applies it to the parent
 */

layer.particles.prototype.get_random_id = function() {
  return (
    'particles-js-' +
    this.get_random_int(10000) +
    '-id-' +
    this.get_random_int(10000)
  );
}

/**
 * Craft your particles js config json
 * Example: https://github.com/VincentGarreau/particles.js/blob/master/particles.js
 */

layer.particles.prototype.get_particles_config = function() {
  return {
    'particles': {
      'number': {
        'value': 125,
        'density': {
          'enable': true,
          'value_area': 1122.388442605866
        }
      },
      'color': {
        'value': '#212121'
      },
      'shape': {
        'type': 'circle',
        'stroke': {
          'width': 0,
          'color': '#000000'
        },
        'polygon': {
          'nb_sides': 4
        },
        'image': {
          'src': 'img/github.svg',
          'width': 100,
          'height': 100
        }
      },
      'opacity': {
        'value': 0.31565905665290905,
        'random': false,
        'anim': {
          'enable': false,
          'speed': 1,
          'opacity_min': 0.1,
          'sync': false
        }
      },
      'size': {
        'value': 3,
        'random': true,
        'anim': {
          'enable': false,
          'speed': 40,
          'size_min': 0.1,
          'sync': false
        }
      },
      'line_linked': {
        'enable': true,
        'distance': 112.2388442605866,
        'color': '#212121',
        'opacity': 0.37680183430339786,
        'width': 1.122388442605866
      },
      'move': {
        'enable': true,
        'speed': 2,
        'direction': 'top-left',
        'random': true,
        'straight': false,
        'out_mode': 'out',
        'bounce': false,
        'attract': {
          'enable': true,
          'rotateX': 400.8530152163807,
          'rotateY': 1200
        }
      }
    },
    'interactivity': {
      'detect_on': 'canvas',
      'events': {
        'onhover': {
          'enable': true,
          'mode': 'repulse'
        },
        'onclick': {
          'enable': true,
          'mode': 'push'
        },
        'resize': true
      },
      'modes': {
        'grab': {
          'distance': 400,
          'line_linked': {
            'opacity': 1
          }
        },
        'bubble': {
          'distance': 400,
          'size': 40,
          'duration': 2,
          'opacity': 8,
          'speed': 3
        },
        'repulse': {
          'distance': 81.20772123013451,
          'duration': 0.4
        },
        'push': {
          'particles_nb': 4
        },
        'remove': {
          'particles_nb': 2
        }
      }
    },
    'retina_detect': true
  }
}