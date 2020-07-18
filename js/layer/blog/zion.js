
layer.blog.zion = function(){
  layer.blog.apply(this, arguments);
};
$.inherits(layer.blog.zion, layer.blog);

layer.blog.zion.prototype.get_title = function(){
  return 'Zion';
};

layer.blog.zion.prototype.get_content_blocks = function(){
  return [];
};
