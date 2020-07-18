
layer.blog.servo_wave = function(){
  layer.blog.apply(this, arguments);
};
$.inherits(layer.blog.servo_wave, layer.blog);

layer.blog.servo_wave.prototype.get_title = function(){
  return 'Servo wave';
};

layer.blog.servo_wave.prototype.get_content_blocks = function(){
  return [
    {
      'type': 'text',
      'link': {
        'text': 'Watch the video!',
        'url': 'https://www.youtube.com/watch?v=90sJzTvwLP4&t=456s',
      },
      'text': 'The requirements for this project were simple; use a minumum of 3 servo motors to create something interesting. So naturally, I had to take it to the extreme and use 35 servos. I mounted 35 servo motors to a peg board and attached foam pieces at various heights to the top of the servos. With an infrared sensor, the user can move their hand in front of it and send a “wave” across the board. The end result wasn’t exactly what I had imagined, but I was happy I got as far as I did.',
    },
    {
      'type': 'image',
      'src': 'img/blog/servo_wave_1.jpg',
    },
    {
      'type': 'text',
      'text': 'The servo motors were controlled with 3 separate PWM drivers. Each module had 16 available spots to hookup servos. For power I had a 5v-20amp power supply that, unfortunately did not supply enough power and was part of the downfall of this project. The amperage was fine, but later on I discovered that the servos could take up to 6v, which caused some of them to act erratically and glitchy. You could still see the “wave” across the board, but some servos refused to cooperate and sat there twitching.\n\nI hot-glued components down in the back to keep it as flat as possible, and the peg board allowed for easy maneuvering of wires. The infrared sensor was homemade with a receiver and emmiter hooked up to my arduino.',
    },
    {
      'type': 'image',
      'src': 'img/blog/servo_wave_2.jpg',
    },
    {
      'type': 'image',
      'src': 'img/blog/servo_wave_3.jpg',
    },
    {
      'type': 'text',
      'text': 'One of the most difficult things I encounter when building with arduinos and electronics, is figuring out the power. As far as software came, it was clean and the logic was sound. I tested the program as I added servos and the more I installed, the more problems I encountered. Some people recommended putting a small capacitor in the servo connections to reduce noise, but this was not the end-all solution. The IR sensor was also a problem that I didn’t see until I brought it in for critique day. I had not setup the program to adjust to various room’s lighting situations. The values I got at home were far different from the values I got in the classroom. I chalked this project up as a learning experience and did not stress the small details. I created a living sculpture of servo motors and I was happy with that.',
    },
    {
      'type': 'image',
      'src': 'img/blog/servo_wave_4.jpg',
    },
  ];
};
