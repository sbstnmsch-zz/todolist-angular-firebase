/* globals module, process, require */

module.exports = function(grunt) {

  'use strict';

  require('time-grunt')(grunt);

  var path = require('path');

  require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), 'grunt', 'tasks'),
    init: true,
    data: {
      options: {
        hostname: grunt.option('hostname'),
        browsers: grunt.option('browsers')
      },
      webpack: grunt.option('webpack') || '',
      paths: require(path.join(process.cwd(), 'grunt', 'options/') + 'paths.json'),
      files: require(path.join(process.cwd(), 'grunt', 'options/') + 'files.json'),
      browserstack: require(path.join(process.cwd(), 'grunt', 'options/') + 'browserstack.json'),
      devServer: require(path.join(process.cwd(), 'grunt', 'options/') + 'dev-server.json')
    },
    loadGruntTasks: {
      config: require('./package.json'),
      scope: 'devDependencies'
    },
    jitGrunt: {
      staticMappings: {
        ngtemplates: 'grunt-angular-templates',
        protractor: 'grunt-protractor-runner'
      }
    }
  });
};
