/**
 * Blog home is just a display of all posts
 * Not my ideal naming choice, since there is another blog layer
 * But oh well, I DO WHAT I WANT ITS MY PROJECT :D
 */
layer.blog_home = function(){
  layer.apply(this, arguments);
};
$.inherits(layer.blog_home, layer);

layer.blog_home.prototype.decorate = function(parent) {
  var container = document.createElement('div');

  parent.appendChild(container);
};

layer.blog_home.prototype.get_title = function(parent) {
  return 'Blog';
};

layer.blog_home.prototype.get_sub_title = function(parent) {
  return 'Electronics, development, and travelling.';
};

layer.blog_home.prototype.get_class = function(){
  return ['layer', 'blog_home'];
};
