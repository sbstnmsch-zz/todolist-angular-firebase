module.exports = function(grunt) {
  'use strict';

  return {
    options: {
      configFile: 'test/config/karma.conf.js',
      hostname: grunt.option('hostname') ? grunt.option('hostname') : 'localhost'
    },
    local: {
      browsers: grunt.option('browsers') ? grunt.option('browsers').split(',') : ['Chrome'],
      singleRun: true,
      reporters: ['mocha']
    },
    'local-keep-alive': {
      browsers: grunt.option('browsers') ? grunt.option('browsers').split(',') : ['Chrome'],
      reporters: ['mocha'],
      singleRun: false
    },
    test: {
      browsers: [
        'IE11',
        'IE10',
        'RemoteChrome',
        'RemoteFirefox'
      ],
      singleRun: true
    },
    'browserstack': {
      singleRun: true,
      browserStack: {
        username: '<%= browserstack.credentials.username %>',
        accessKey: '<%= browserstack.credentials.accessKey %>',
        project: '<%= browserstack.projects.karma %>',
        proxyHost: '<%= browserstack.proxy.host %>',
        proxyPort: '<%= browserstack.proxy.port %>',
        build: new Date().toUTCString(),
      },
      browserDisconnectTimeout: '<%= browserstack.timeouts.disconnectTimeout %>',
      browserDisconnectTolerance: '<%= browserstack.timeouts.disconnectTolerance %>',
      browserNoActivityTimeout: '<%= browserstack.timeouts.noActivityTimeout %>',
      captureTimeout : '<%= browserstack.timeouts.captureTimeout %>',
      browsers: [
        'BSFirefoxWindows',
        'BSIE11Windows'
      ],
      reporters: ['teamcity']
    }
  };
};
