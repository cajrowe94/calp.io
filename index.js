// global vars
var $ = rocket.extend(rocket.$, rocket);
var css = new css();
var forge = new forge();

var callback = function(){
  // global storage
  if (!window.data) {
    window.data = {};
  }
  // instantiate default components and layers
  // (new component.terminal().render(document.getElementsByTagName('body')[0]));

  (new component.navigation()
    .render(document.getElementsByTagName('nav')[0])
  );

  (new layer.home().render());

  new layer.particles().render(document.getElementsByTagName('body')[0]);
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
