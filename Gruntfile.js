module.exports = function(grunt) {
  // load plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-image-preload');

  // project config
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    image_preload: {
      options: {
        jsvar: 'PRELOADER',
        root: 'http://calp.io/',
        inlineFile: null,
        inlineLoad: null,
        rev: false      
      },
      files:[{
        cwd: 'img', 
        src: '**/*.{jpg, jpeg, png, gif, svg}'
      }],        
      process:{
        files:[{
          cwd: 'img',
          src: 'index.html',
          dest: 'tmp/'
        }]
      }
    },
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
          'js/layer/**/*.js',
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

  // tasks for dev, production, and default
  // default, just concats
  grunt.registerTask('default', ['concat']);

  // grunt dev doesnt minimize, just concat and watch
  // todo
  grunt.registerTask('dev', ['concat', 'uglify', 'watch']);

  // prod concats and minimizes, no watching
  // todo prod needs to delete concat.js
  // also will need to somehow switch which js file my index.html calls
  grunt.registerTask('prod', ['image_preload', 'concat', 'uglify']);
}
