layer.blog = function(){
  layer.apply(this, arguments);
};
$.inherits(layer.blog, layer);

layer.blog.prototype.decorate = function(parent) {
  var container = document.createElement('div');
  
  css.apply(container, {
    'width': css.is_mobile() ? '95%' : '60%',
    'margin': '0 auto',
  });

  var title = document.createElement('h1');
  title.innerText = this.get_title();
  container.appendChild(title);

  var content_blocks = this.get_content_blocks();

  if (
    content_blocks &&
    content_blocks.length
  ) {
    content_blocks.forEach(function(block) {
      var block_container = document.createElement('div');
      block_container.innerHTML = JSON.stringify(block);
      container.appendChild(block_container);
    })
  }

  parent.appendChild(container);
};

layer.blog.prototype.get_class = function(){
  return ['layer', 'blog'];
};

/**
 * Set the title of the blog
 */
layer.blog.prototype.get_title = function() {
	return 'todo overwrite get_title()';
}

/**
 * Return JSON object of all contents
 * Includes all the text + images
 */
layer.blog.prototype.get_content_blocks = function() {
  return [];
}