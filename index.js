var $ = rocket.extend(rocket.$, rocket);
var css = new css();
var forge = new forge();

var callback = function(){
  // instantiate default components and layers
  (new component.navigation()
    .render(document.getElementsByTagName('nav')[0])
  );
  (new layer.home().render());
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
