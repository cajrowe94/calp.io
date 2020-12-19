
var api = function(class_, method_, arguments_, callback_){
  if (
    !class_ ||
    !method ||
    !arguments_
  ) {
    console.error('api() requires a class, method, and arguments');
  } else {
    this.init_(
      class_,
      method_,
      arguments_,
      callback_
    );
  }
};

api.prototype.init_ = function(class_, method_, arguments_, callback_) {
  // body...
};
