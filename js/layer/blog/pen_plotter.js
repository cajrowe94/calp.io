
layer.blog.pen_plotter = function(){
  layer.blog.apply(this, arguments);
};
$.inherits(layer.blog.pen_plotter, layer.blog);

layer.blog.pen_plotter.prototype.get_title = function(){
  return 'Pen plotter';
};

layer.blog.pen_plotter.prototype.get_content_blocks = function(){
  return [
    {
      'type': 'image',
      'src': 'img/blog/pen_plotter_1.jpg',
    },
  	{
  		'type': 'text',
      'title': 'This project was the highlight of my time at IU Kokomo.',
  		'text': 'One day after class, Wayne Madsen, my New Media professor at IUK, asked if I would like to get paid to work on an exciting research project in which we build a huge, homemade CNC drawing robot. Naturally, I agreed to do it. We started in August of 2017, and ‘finished’ by December of the same year. The reason I put ‘finished’ in quotes is because it’s never really finished, small additions and modifications are always needed. Perhaps calling it a ‘working model’ would be more appropriate. Nonetheless, the 6’x6′ robot was producing large, algorithmically crafted drawings to our horizontal canvas.',
  	},
    {
      'type': 'text',
      'text': 'Originally we weren’t planning on producing such a large plotter. We discussed different options, such as whether to do a hanging plotter or a horizontal plotter, and how big to make it. We decided on a horizontal, ground plotter for it’s high precision and versatility. The way we ended up both agreeing to tackling 6’x6′ model was pretty simple really. Why not? The software hiccups we would encounter would be consistent across any size we chose and the hardware would be nearly the same, just bigger.',
    },
    {
      'type': 'image',
      'src': 'img/blog/pen_plotter_2.jpg',
    },
    {
      'type': 'text',
      'text': 'Software obviously proved to be where we ran into the most problems. Early on we tried using an Adafruit motor shield to run the steppers, but due to complications it caused with GRBL (Library for running g-code on your Arduino), we had to switch to independent drivers for each stepper motor. Through many hours of re-wiring, debugging, and head-scratchin’, we were able to get all the stepper motors running correctly and accepting g-code. When we were confident we had the right circuitry, we removed the breadboard and made finalized connections. Assisting Wayne with my amateur soldering skills, we were able to get through it with minimal issues and applied the hardware to the frame.',
    },
    {
      'type': 'image',
      'src': 'img/blog/pen_plotter_3.jpg',
    },
    {
      'type': 'text',
      'text': 'Our frame needed a lot of modifications once we started running the shuttle up and down the length of the plotter. Our steel rods were bending under the weight of the shuttle to the point it was immobile and almost touching the ground. Obviously this was a huge issue, especially when our canvas was directly underneath it. Our X axis required supports to reduce bending, which we originally made out of dixie cups and later replaced with 3D printed models. The Y axis underwent a complete re-design after we discovered a much more efficient method and after running into lots of incorrect measurements. I like to blame the crude measurements on our habit of eyeballing things and Wayne’s tendency to say things like, “Looks good enough, cut it.” We were too excited for the end product to get bogged down with perfect, precise measurements. Despite the set-backs, we finished the axes, replacing the y-axis steel rods with t-bars and a newly designed shuttle which worked brilliantly.',
    },
    {
      'type': 'image',
      'src': 'img/blog/pen_plotter_4.jpg',
    },
    {
      'type': 'image',
      'src': 'img/blog/pen_plotter_5.jpg',
    },
    {
      'type': 'image',
      'src': 'img/blog/pen_plotter_6.jpg',
    },
    {
      'type': 'text',
      'text': 'To run the gcode on our Arduino, we had a linux machine installed with Universal Gcode Sender. This is a fairly simple program that takes .nc files and runs the gcode on the Arduino in real time. To produce the necessary .nc files is a bit of a process. We first got a still image from Processing and HTML5 canvas pieces that we wrote and imported them into Inkscape. Inkscape has a feature that allows you to trace bitmap any image with many different availalble settings. When we were satisfied with our bitmap, we uploaded that file to a web app called Makercam. This application is where we are able to set all of our plotter settings and also generate our gcode. We set our drawing dimensions, pen depth, and various other small details after we calculate the path of our bitmap image, and are now ready to export the .nc file. This is the final step before sending it to the GRBL controlled Arduino.\n\nEarly on we produced very simplistic drawings with minimal paths, such as circles or bubble letters. This was a way for us to fine tune the settings and make sure our plotter was ready for the large scale drawings it was meant for. During these small tests we also encountered hardware issues that would require fixing. The importance of these small-scale drawings proved to be very significant.',
    },
    {
      'type': 'image',
      'src': 'img/blog/pen_plotter_7.jpg',
    },
    {
      'type': 'text',
      'text': 'Wayne introduced me to various artists, one of which I grew very fond of, Roman Verostko. He produced many elegant plotter drawings that heavily influenced our entire project. Verostko constructed his artwork by repeating a single line, multiple times, in different directions across the canvas. This was how he made lots of his plotter work, including his ‘Flower’ pieces, which I very much enjoy. Wayne wrote a program that allowed us to input gcode from a single drawn line, and output the same line however many times we wanted. This was our way of recreating our own versions of Verostko-style plotter drawings.',
    },
    {
      'type': 'image',
      'src': 'img/blog/pen_plotter_8.jpg',
    },
    {
      'type': 'image',
      'src': 'img/blog/pen_plotter_9.jpg',
    },
    {
      'type': 'text',
      'text': 'Towards the time we began to prepare for large drawings, we had a very solid, finished plotter. We 3d printed supports for the x-axis, 3d printed a new pen holder, replaced burnt out drivers, organized our wires and belts, and fixed minor interference in the z-axis servo. Now began prep for our long-awaited 6 foot drawings.',
    },
    {
      'type': 'image',
      'src': 'img/blog/pen_plotter_10.jpg',
    },
    {
      'type': 'image',
      'src': 'img/blog/pen_plotter_11.jpg',
    },
    {
      'type': 'text',
      'text': 'The most important thing when preparing for large drawings is finding level ground free of cracks, bumps, or dips. Fortunately where we originally had the plotter was fairly clean, so we left it where it was. In order to avoid blank spots untouched by the pen, we had to find the lowest spot of the ground and adjust the pen height accordingly. We ran lines across the canvas and adjusted the pen down at every gap spot until there were no more. Once we were confident the pen was at the right height, we proceeded to tape down our paper to the floor and prepare our g-code.',
    },
    {
      'type': 'image',
      'src': 'img/blog/pen_plotter_12.jpg',
    },
    {
      'type': 'image',
      'src': 'img/blog/pen_plotter_13.jpg',
    },
    {
      'type': 'image',
      'src': 'img/blog/pen_plotter_14.jpg',
    },
    {
      'type': 'text',
      'text': 'Our first official large-scale drawing was a generative piece Wayne had designed in Processing. Lines find random paths across the canvas, bypassing ‘void’ areas placed there by the user, specifying their size and location. Multiple renders of the sketch were placed on top of each other to achieve the desired density before we finally chose to bitmap the image and send the g-code to the arduino. The end result caused mixed feelings, mainly due to the color of the pen and the blotches left over by the bunching up of ink. Still, it was what we’ve been looking forward to throughout this entire process of building this machine, so it holds a special place in our heart.',
    },
    {
      'type': 'image',
      'src': 'img/blog/pen_plotter_15.jpg',
    },
    {
      'type': 'text',
      'text': 'This project is a time in my life that I can look back at and reminisce of everything that it taught me. The entire process of planning, to execution and completion held numerous teaching points that can be applied to anything in life. Wayne was a blast to work with and I’m honored I was chosen to work as his assistant.',
    }
  ];
};
