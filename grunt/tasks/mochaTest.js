module.exports = {
  options: {
    reporter: 'spec',
    require: [
      'test/config/mocha',
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js'
    ]
  },
  test: {
    src: '<%= paths.test.mocha %>'
  },
  'ci-test': {
    src: '<%= paths.test.mocha %>',
    options: {
      reporter: 'mocha-teamcity-reporter'
    }
  }
};
