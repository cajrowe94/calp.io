layer.about = function(){
  layer.apply(this, arguments);
};
$.inherits(layer.about, layer);

layer.about.prototype.decorate = function(parent) {
  var container = document.createElement('div');

  css.apply(container, {
    'max-width': '800px',
    'margin': '0 auto',
  });

  var about_image = document.createElement('img');

  about_image.src = 'img/about/about_page_1.jpg';

  css.apply(about_image, {
    'margin': '15px 0px',
    'width': '100%',
    'height': 'auto',
  });

  container.appendChild(about_image);

  var intro = document.createElement('p');

  intro.innerText =
    'I\'m Calp! It\'s sort of this weird nickname of mine. My actual name is Caleb,' +
    ' but if you say Caleb fast enough, it sounds like Calp. So, it\'s just a thing now.\n¯\\_(ツ)_/¯' +
    '\n\nI started coding my freshman year of college at Indiana University Kokomo.' +
    ' I had an amazing professor that showed me creative and artistic ways to use code, so I was hooked right away.' +
    ' I started out making cool animations and generative art, but has now transitioned into a passion for modern web development.' +
    ' Along with making websites, I really enjoy playing around with electronics. I\'ve completed a handful of Arduino projects,' +
    ' and recently have found myself diving into drone racing. I built my own racing quadcopter, and despite hundreds of crashes, have' +
    ' gotten pretty good!' +
    '\n\nOutside of the tech space, board sports, traveling, and the outdoors have become a big part of my life.' +
    ' Visiting national parks is my favorite thing to do in this world. The feeling of vertigo while staring down ' +
    ' a steep canyon wall is something you just don\'t get very often in life. I try and take every opportunity I can to' +
    ' go somewhere new with people I love; life comes and goes very quickly and I never want to have any regrets once I\'m' +
    ' an old man. :)' +
    '\n\nHope you like the website! It\'s a single page application, which there\'s only one html file, and javascript does the rest. I built this without' +
    ' any frameworks or libraries, just plain ole vanilla javascript. I still used a couple libraries here and there for fun stuff,' +
    ' but the framework it runs on was built by yours truly.' +
    '\n\nThanks for visiting my little corner of the web!' +
    '\n- Caleb (Calp)';

  css.apply(intro, {
    'margin-bottom': '50px',
  });

  container.appendChild(intro);

  parent.appendChild(container);
};

layer.about.prototype.get_title = function() {
  return 'About me';
};

layer.about.prototype.get_sub_title = function() {
  return 'Who\'s Calp?';
};

layer.about.prototype.get_class = function(){
  return ['layer', 'about'];
};
