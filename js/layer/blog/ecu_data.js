
layer.blog.ecu_data = function(){
  layer.blog.apply(this, arguments);
};
$.inherits(layer.blog.ecu_data, layer.blog);

layer.blog.ecu_data.prototype.get_title = function(){
  return 'ECU Data';
};

layer.blog.ecu_data.prototype.get_content_blocks = function(){
  return [
    {
      'type': 'text',
      'link': {
        'text': 'Watch the video!',
        'url': 'https://www.youtube.com/watch?v=JdtRn1oTF4A&t=4s',
      },
      'text': 'I have a passion for cars and to be able to read data straight from the ECU sounded so fun. For this project I got an ECU reader for the Arduino from a company called Freematics. It plugs into the OBD-II port under the dash and then plugs into your Arduino’s serial pins. It worked perfectly and allows you to read all kinds of live data from your car; speed, RPM’s, engine load %, and so much more. Their Arduino library is constantly being updated and has excellent support for users.\n\nI had a strip of programmable LED’s that would work perfect for this project. I mapped the RPM’s of the car to the green value of the LED’s and when the RPM’s went into redline (6k+), the LED’s blinked red. The hard thing about all of this was that you can’t print values to read in your console, because the serial pins are used for the OBD-II connection. This made it hard to understand exactly what values I was getting from my car. I set the blue value to 255 and left the red value at 0. So when you drive you are changing the color from dark blue to a teal. At idle, which is below 1k, the LED’s do a looped animation with random RGB values.',
    },
    {
      'type': 'image',
      'src': 'img/blog/ecu_data_1.jpg',
    },
    {
      'type': 'image',
      'src': 'img/blog/ecu_data_2.jpg',
    },
    {
      'type': 'image',
      'src': 'img/blog/ecu_data_3.jpg',
    },
    {
      'type': 'text',
      'text': 'To power the LEDs I used a fuse piggyback with a 5v source. The piggyback plugs into the original fuse location and has two additional slots for fuses. One is for the original circuit and the other is for your new circuit. Out from the fuse it has a red wire that you use for your chosen voltage. I then simply grounded the connection to a bolt inside the fuse box. The connections were fine but the whole fuse box was a mess. I wasn’t too worried about this as I simply closed the panel and couldn’t see the jumble of wires with my Arduino. I was very impressed with the load time of my ECU data. I figured their might be a lag but the Freematics OBD-II connector served very well and fast.',
    },
    {
      'type': 'image',
      'src': 'img/blog/ecu_data_4.jpg',
    },
    {
      'type': 'text',
      'text': 'This project turned out so well and I was very happy with the responsiveness of the hardware involved. Things like this make me realize how lucky I am to be learning this in this day and age with such advanced technology. This OBD-II reader opens up this project for so much more possibilities.',
    },
  ];
};
