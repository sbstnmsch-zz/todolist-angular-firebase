/* globals module */
module.exports = function(grunt) {
  'use strict';
  var host = 'localhost',
      loaders = [];

  if (grunt.option('hostname')) {
    host = grunt.option('hostname');

    loaders.push({
      test: /config\/host.js/,
      loader: 'imports?hostname=>"' + grunt.option('hostname') + '"'
    });
  }

  return {
    options: {
      config: '<%= paths.src.js %>/config/webpack.config.js',
      host: host,
      port: '<%= devServer.port %>',
      webpack: {
        devServer: {
          contentBase: './'
        },
        resolve: {
          alias: {
            'config/environment': 'mock-config/environment.js',
            'config/host': 'mock-config/host.js',
            'config/log': 'mock-config/log.js'
          }
        },
        module: {
          loaders: loaders
        }
      }
    },
    protractor: {
      options: {
        keepAlive: false
      }
    },
    serve: {
      options: {
        keepAlive: true
      }
    }
  };
};
