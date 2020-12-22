
var api = function(class_, method_, arguments_, callback_){
  if (
    !class_ ||
    !method_ ||
    !arguments_
  ) {
    console.error('api() requires a class, method, and arguments');
  } else {
    var body = arguments_;

    body.method = method_;
    body.class = class_;

    fetch('http://localhost:3000/api', {
      'method': 'POST',
      'headers': {
        'Content-Type': 'application/json',
      },
      'body': JSON.stringify(body),
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        if (
          callback_ &&
          typeof callback_ === 'function'
        ) {
          callback_(data);
        }
      })
      .catch(function(error) {
        console.error('Error:', error);
      });
  }
};
