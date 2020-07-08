
component.paper = function(args){
  component.apply(this, arguments);
  this.title_ = args.title;
  this.header_ = args.header;
  this.init_();
};
$.inherits(component.paper, component);

component.paper.prototype.decorate = function(parent){
  this.decorate_contents(this.container_);
  parent.appendChild(this.top_container_);
};

/**
 * Override this with child classes
 * Main decorate contents function
 */

component.paper.prototype.decorate_contents = function(type){
  console.warn('override decorate_contents()');
};

component.paper.prototype.get_container = function(parent){
  return this.container_;
};

component.paper.prototype.decorate_title_ = function(parent){
  if (this.title_) {
    var title_element = document.createElement('h2');
    title_element.innerHTML = this.title_;

    css.apply(title_element, {
      'padding': '10px 5px',
    });

    parent.appendChild(title_element);
  }
};

component.paper.prototype.decorate_header_ = function(parent){
  if (this.header_) {
    var header_element = document.createElement('p');
    header_element.innerHTML = this.header_;

    css.apply(header_element, {
      'padding': '10px 5px 20px 5px',
      'color': css.color('white', '300'),
      'border-bottom': '0.5px solid ' + css.color('gray', '100'),
    });

    parent.appendChild(header_element);
  }
};

component.paper.prototype.apply_paper_styles_ = function(container){
  css.apply(container, {
    'background': css.color('background_secondary'),
    'box-shadow': '0px 2px 8px rgba(0,0,0,0.6)',
    'min-height': '100px',
    'padding': '20px',
    'border-radius': '20px',
  });
};

component.paper.prototype.apply_container_styles_ = function(container){
  css.apply(container, {
    'max-width': '1000px',
    'margin': '20px auto',
  });
};

component.paper.prototype.init_ = function(){
  var top_container = document.createElement('div');
  var paper_container = document.createElement('div');

  this.apply_paper_styles_(paper_container);
  this.apply_container_styles_(top_container);

  this.decorate_title_(top_container);
  this.decorate_header_(paper_container);

  top_container.appendChild(paper_container);

  this.container_ = paper_container;
  this.top_container_ = top_container;
};

component.paper.prototype.set_title = function(title){
  this.title_ = title;
};
