/* globals exports */
var
  devServer = require('../../grunt/options/dev-server.json');

exports.config = {
  specs: ['../e2e/**/*.js'],
  baseUrl: devServer.protocol + devServer.host + ':' + devServer.port,
  framework: 'mocha',
  mochaOpts: {
    reporter: 'spec',
    timeout: 4000
  },
  multiCapabilities: [
    {
      browserName: 'chrome',
      count: 1,
      shardTestFiles: false,
      maxInstances: 1
    }
  ]
};
