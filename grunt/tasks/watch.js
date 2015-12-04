module.exports = {
  stylus: {
    files: [
      '<%= paths.src.css %>/**/*.styl'
    ],
    tasks: ['_css', 'clean:after']
  },
  templates: {
    files: '<%= paths.src.templates %>/**/*',
    tasks: [
      'ngtemplates'
    ]
  },
  mocha: {
    files: [
      '<%= paths.src.js %>/**/*.js',
      '<%= paths.test.mocha %>'
    ],
    tasks: ['_mocha-test']
  },
  karma: {
    files: [
      '<%= paths.src.js %>/**/*.js',
      '<%= paths.src.templates %>/**/*.html',
      '<%= paths.test.mocha %>',
      '<%= paths.test.karma %>'
    ],
    tasks: ['local-test']
  }
};
