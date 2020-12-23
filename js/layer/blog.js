layer.blog = function(){
  layer.apply(this, arguments);
};
$.inherits(layer.blog, layer);

layer.blog.prototype.decorate = function(parent) {
  new layer.canvas.grid().render(parent);
  var container = document.createElement('div');

  css.apply(container, {
    'max-width': '800px',
    'margin': '0 auto',
  });

  var content_blocks = this.get_content_blocks();

  if (
    content_blocks &&
    content_blocks.length
  ) {
    content_blocks.forEach(function(block) {
      var block_container = document.createElement('div');

      css.apply(block_container, {
        'padding': '15px 0px',
      });

      if (
        block.type === 'image' &&
        block.src
      ) {
        var block_image = document.createElement('img');

        css.apply(block_image, {
          'width': '100%',
          'height': 'auto',
        });

        block_image.src = block.src;
        block_container.appendChild(block_image);
      }

      if (
        block.type === 'text' &&
        block.title
      ) {
        var block_title = document.createElement('h3');

        css.apply(block_title, {
          'padding-bottom': '10px',
        });

        block_title.innerText = block.title;
        block_container.appendChild(block_title);
      }

      if (
        block.link
      ) {
        var block_link_container = document.createElement('div');
        var block_link = document.createElement('a');

        css.apply(block_link_container, {
          'font-size': '24px',
          'margin-bottom': '10px',
        });

        block_link.href = block.link.url;
        block_link.target = '_blank';
        block_link.innerText = block.link.text;
        block_link_container.appendChild(block_link);
        block_container.appendChild(block_link_container);
      }

      if (
        block.type === 'text' &&
        block.text
      ) {
        var block_text = document.createElement('p');
        block_text.innerText = block.text;
        block_container.appendChild(block_text);
      }

      container.appendChild(block_container);
    });
  }

  parent.appendChild(container);
};

layer.blog.prototype.get_class = function(){
  return ['layer', 'blog'];
};

/**
 * Set the title of the blog
 */
// layer.blog.prototype.get_blog_title = function() {
//   return 'todo overwrite get_title()';
// };

/**
 * Return JSON object of all contents
 * Includes all the text + images
 */
layer.blog.prototype.get_content_blocks = function() {
  return [];
};
