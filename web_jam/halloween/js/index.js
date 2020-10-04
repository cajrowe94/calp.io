
/*eslint-disable */
// button handlers
(()=>{
  var check_it_out = document.getElementById('check-it-out');
  var check_it_out_maze = document.getElementById('show_corn_maze');

  var bg_to = document.querySelectorAll('.bg-morph')[0];
  var close_icon = document.querySelectorAll('.close-icon')[0];
  var intro_section = document.querySelectorAll('.intro-section')[0];
  var main_content = document.querySelectorAll('.main-content')[0];
  var back_arrow_maze = document.querySelectorAll('.back-arrow-maze')[0];
  var corn_maze_content = document.querySelectorAll('.corn-maze')[0];

  check_it_out.addEventListener('click', function() {
    bg_to.classList.add("bg-morph-to");
    close_icon.classList.remove('close-icon-hidden');
    intro_section.classList.add('intro-section-hidden');
    main_content.classList.remove('main-content-hidden');
  });

  close_icon.addEventListener('click', function() {
    close_icon.classList.add('close-icon-hidden');
    bg_to.classList.remove('bg-morph-to');
    intro_section.classList.remove('intro-section-hidden');
    main_content.classList.add('main-content-hidden');
    corn_maze_content.classList.add('corn-maze-hidden');
  })

  back_arrow_maze.addEventListener('click', function() {
    corn_maze_content.classList.add('corn-maze-hidden');
    main_content.classList.remove('main-content-hidden');
  });

  check_it_out_maze.addEventListener('click', function() {
    main_content.classList.add('main-content-hidden');
    corn_maze_content.classList.remove('corn-maze-hidden');
  });

})();
