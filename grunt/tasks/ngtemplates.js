module.exports = {
  options: {
    module: 'todolist',
    bootstrap:  function(module, script) {
      'use strict';

      return 'module.exports = [' +
        '"$templateCache", function($templateCache) {' +
        script +
      '}];';
    },
    htmlmin: {
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true,
      // Not to break comment directives
      // which are not currently used still:
      //  1.) Templates currently don't have comments
      //  2.) Not to confuse people and not to inadvertently break things
      removeComments: false,
      removeEmptyAttributes: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true
    }
  },
  dist: {
    src: '<%= paths.src.templates %>/**.html',
    dest: '<%= paths.src.js %>/ng-templates.js'
  }
};
