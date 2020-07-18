/**
 * Block class
 * Used to display a big picture with text
 * Or have a small paragraph block beneath
 */

component.block = function(args){
  component.apply(this, arguments);
  this.options_ = args;
};
$.inherits(component.block, component);

component.block.prototype.decorate = function(parent) {
	var container = document.createElement('div');

	css.apply(container, {
		'max-width': '500px',
		'height': '350px',
	});

	parent.appendChild(container);
};

component.block.prototype.add_footer = function(parent) {
	// body...
};

component.block.prototype.add_link = function(parent) {
	// body...
};