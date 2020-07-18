
layer.blog.hanging_plotter = function(){
  layer.blog.apply(this, arguments);
};
$.inherits(layer.blog.hanging_plotter, layer.blog);

layer.blog.hanging_plotter.prototype.get_title = function(){
  return 'Hanging plotter';
};

layer.blog.hanging_plotter.prototype.get_content_blocks = function(){
  return [
    {
      'type': 'image',
      'src': 'img/blog/hanging_plotter_1.jpg',
    },
    {
      'type': 'text',
      'text': 'This project was heavily influenced by the previous plotter project I worked on with my professor. Instead of a lying, horizontal plotter like the last one, this plotter hangs from stepper motors and was driven by a joystick. I wanted to make my own personal pen plotter and be able to draw with it using a controller of some sort. The gondola in the middle is attached to two cords that hang over two separate stepper motors in each corner of the white board. The user can move the joystick in any direction to move the gondola with the pen in it. The switch on the controller is to raise and lower the pen, so it is not constantly drawing when moving it. This project turned out really well and I was very happy with the results.',
    },
    {
      'type': 'image',
      'src': 'img/blog/hanging_plotter_2.jpg',
    },
    {
      'type': 'text',
      'text': 'The “gondola” was made using a 3d printer with a model I downloaded from Instructables. This piece holds the pen and is connected to the stepper motors via two teethed cords. In order to weigh the gondola down and keep it against the board, you have to place a stack of coins in the bottom of it. To raise and lower the pen, a servo motor with an arm attachment is required. The pen or marker is placed in the center of the gondola and a screw is used to hold in tightly in place.',
    },
    {
      'type': 'image',
      'src': 'img/blog/hanging_plotter_3.jpg',
    },
    {
      'type': 'text',
      'text': 'The stepper motors in the corner were held in place using a piece that was also 3d printed. It had a hole in the center of it that the stepper’s tooth attachment could fit through and had 4 holes to screw the entire motor to the piece. I used hot glue to secure it all to the board.In order to keep the cords securely draped over the stepper motors, I used a pack of 4 batteries on both end of the cords.',
    },
    {
      'type': 'image',
      'src': 'img/blog/hanging_plotter_4.jpg',
    },
    {
      'type': 'image',
      'src': 'img/blog/hanging_plotter_5.jpg',
    },
    {
      'type': 'text',
      'text': 'To control the steppers, an external motor driver is required. I used the Adafruit motor shield v2 for this project. It has room for 4 dc motors or 2 stepper motors. It also has a spot for a servo. This is a very handy driver, it has a spot for external power which makes powering your hardware very easy. It plugs into the top of your Arduino Uno and is easy to use with it’s open source libraries. The joystick is an analog input device that hooks up easily into your arduino for reading analog values. I consider this project a success, everything was working very fluidly and had minimal bugs.',
    },
  ];
};
