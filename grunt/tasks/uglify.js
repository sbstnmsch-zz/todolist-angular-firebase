module.exports = {
  libs: {
    src: [
      '<%= paths.src.npm %>/angular/angular.js',
      '<%= paths.src.npm %>/angular-ui-router/release/angular-ui-router.js',
      '<%= paths.src.npm %>/angular-sanitize/angular-sanitize.js',
      '<%= paths.src.npm %>/lodash/index.js',
      '<%= paths.src.npm %>/angularfire/dist/angularfire.js'
    ],
    dest: '<%= paths.dist.js %>/libs.min.js'
  },
  options: {
    mangle: false,
    beautify: true,
    sourceMap: true
  },
  app: {
    src: [
      '<%= paths.dist.js %>/todolist.bundle.js'
    ],
    dest: '<%= paths.dist.js %>/todolist.min.js'
  },
  options: {
    mangle: false,
    beautify: false,
    sourceMap: true
  }
};
