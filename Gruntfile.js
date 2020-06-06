module.exports = function(grunt) {
  // project config
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      files: [
        'index.html',
        'style.css',
        '*.js',
        'js/*.js',
        'js/**/*.js',
        'js/**/**/*.js',
      ],
      tasks: ['concat', 'uglify']
    },
    concat: {
      dist: {
        src: [
          'rocket/build/rocket.js',
          'js/howl.js',
          'js/css.js',
          'js/forge.js',
          'index.js',
          'js/layer.js',
          'js/component.js',
          'js/layer/*.js',
          'js/component/*.js',
          'js/component/**/*.js'
        ],
        dest: 'build/concat.js',
      },
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
      },
      build: {
        src: 'build/concat.js',
        dest: 'build/concat.min.js'
      }
    },
  });

  // load plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['concat', 'uglify']);
  grunt.registerTask('production', ['concat', 'uglify']);
}