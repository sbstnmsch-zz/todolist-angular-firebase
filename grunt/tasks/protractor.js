/* globals module */
module.exports = function(grunt) {
  'use strict';

  var
      host = grunt.option('hostname') ? grunt.option('hostname') : '<%= devServer.host %>',
      url = '<%= devServer.protocol %>' + host + ':<%= devServer.port %>/';

  return {
    options: {
      keepAlive: false
    },
    local: {
      options: {
        configFile: 'test/config/protractor.conf.js',
        args: {
          baseUrl: url
        }
      }
    },
    browserstack: {
      options: {
        configFile: 'test/config/protractor.bs.conf.js',
        noColor: true,
        args: {
          baseUrl: url
        }
      }
    }
  };
};
