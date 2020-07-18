
layer.blog.led_toy = function(){
  layer.blog.apply(this, arguments);
};
$.inherits(layer.blog.led_toy, layer.blog);

layer.blog.led_toy.prototype.get_title = function(){
  return 'LED Toy';
};

layer.blog.led_toy.prototype.get_content_blocks = function(){
  return [
    {
      'type': 'image',
      'src': 'img/blog/led_toy_1.jpg',
    },
    {
      'type': 'text',
      'link': {
        'text': 'Watch the video!',
        'url': 'https://www.youtube.com/watch?v=i78VDc87Dbs&t=7s',
      },
      'text': 'This was a personal project of mine to explore using the ATMega 328P chip in it’s bare-bones state. I built an LED “light toy” that runs various LED animations based on the user’s input from the potentiometer. This chip is what the Arduino Uno uses and requires only a few other components to get full functionality similar to the Arduino board. With the 328P chip, 16-mghz crystal, resistor, and two capacitors you can run a majority of programs without any trouble. Certain functions require more components, but for this project it was satisfactory.',
    },
    {
      'type': 'image',
      'src': 'img/blog/led_toy_2.jpg',
    },
    {
      'type': 'text',
      'text': 'This simple project was a great eye-opener for me. I got to explore the inner workings of the Arduino Uno that I had been using for so long. I was able to dive in and see the individual components and their roles they play in the execution of programs. The entire setup is very simple and surprised me in how few components you actually need to run basic programs. I really enjoyed building this LED toy and it came out perfect.',
    },
  ];
};

layer.blog.led_toy.prototype.get_class = function(){
  return ['layer', 'blog', 'led_toy'];
};
