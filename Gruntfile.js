module.exports = function(grunt) {
  // load plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // project config
  grunt.initConfig({
    'pkg': grunt.file.readJSON('package.json'),
    'watch': {
      'files': [
        'index.html',
        'style.css',
        'scss/*.scss',
        'scss/**/*.scss',
        '*.js',
        'js/*.js',
        'js/**/*.js',
        'js/**/**/*.js',

      ],
      'tasks': ['sass', 'cssmin', 'concat', 'uglify'],
    },
    'concat': {
      'dist': {
        'src': [
          'lib/*.js',
          'lib/rocket/build/rocket.js',
          'js/api.js',
          'js/css.js',
          'js/forge.js',
          'index.js',
          'js/layer.js',
          'js/component.js',
          'js/layer/*.js',
          'js/layer/**/*.js',
          'js/component/*.js',
          'js/component/**/*.js',
        ],
        'dest': 'build/js.js',
      },
    },
    'sass': {
      'dist': {
        'src': [
          'scss/import.scss'
        ],
        'dest': 'build/styles.css',
      },
    },
    'uglify': {
      'options': {
        'banner': '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
      },
      'build': {
        'src': 'build/js.js',
        'dest': 'build/js.min.js',
      },
    },
    'cssmin': {
      'options': {
        'mergeIntoShorthands': false,
        'roundingPrecision': -1
      },
      'target': {
        'files': {
          'build/styles.min.css': ['build/styles.css']
        }
      }
    }
  });

  // tasks for dev, production, and default
  // default, just concats
  grunt.registerTask('default', ['sass', 'cssmin', 'concat']);

  // grunt dev doesnt minimize, just concat and watch
  grunt.registerTask('dev', ['sass', 'cssmin', 'concat', 'uglify', 'watch']);

  // prod concats and minimizes, no watching
  // todo prod needs to delete concat.js
  // also will need to somehow switch which js file my index.html calls
  grunt.registerTask('prod', ['sass', 'cssmin', 'concat', 'uglify']);
};
