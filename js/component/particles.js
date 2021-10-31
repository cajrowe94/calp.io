component.particles = function(){
  component.apply(this, arguments);
};
$.inherits(component.particles, component);

component.particles.prototype.decorate = function(parent) {
  var parent_id = this.get_random_id();

  if (parent) {
    // particles needs an id to attach to
    parent.id = parent_id;

    particlesJS(parent_id, this.get_particles_config());
  }
}

/**
 * Particles JS requires an ID
 * This generates a random ID and applies it to the parent
 */

component.particles.prototype.get_random_id = function() {
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

component.particles.prototype.get_particles_config = function() {
  return {};
}