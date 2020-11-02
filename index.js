// global vars
var $ = rocket.extend(rocket.$, rocket);
var css = new css();
var forge = new forge();
// layer stack
// var layer_stack = [];

// save the hash to localStorage before we refresh
// that way we can reload onto the same layer
// window.onbeforeunload = function() {
//   localStorage.setItem('layer', window.location.hash.substring(1));
// };

var callback = function(){
  // instantiate default components and layers
  (new component.navigation()
    .render(document.getElementsByTagName('nav')[0])
  );
  (new layer.home().render());
  // if (localStorage.getItem('layer')) {
  //   (new layer[localStorage.getItem('layer')]().render());
  // } else {
  //   (new layer.home().render());
  // }
};

if (
  document.readyState === "complete" ||
  (
    document.readyState !== "loading" &&
    !document.documentElement.doScroll
  )
) {
  callback();
} else {
  document.addEventListener("DOMContentLoaded", callback);
}
