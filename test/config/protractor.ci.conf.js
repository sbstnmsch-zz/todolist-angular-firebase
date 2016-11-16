/* globals exports */
var
  devServer = require('../../grunt/options/dev-server.json');

exports.config = {
  specs: ['../e2e/**/*.js'],
  baseUrl: devServer.protocol + devServer.host + ':' + devServer.port,
  seleniumAddress: 'https://<your-selenium-hub>/wd/hub',
  framework: 'mocha',
  noColor: true,
  mochaOpts: {
    reporter: 'mocha-teamcity-reporter',
    timeout: 20000
  },
  multiCapabilities: [
    {browserName: 'chrome', name: 'Chrome:Windows 7'},
    {browserName: 'firefox', name: 'Firefox:Windows 7'},
    {browserName: 'internet explorer', version: '10', name: 'IE10:Windows 7'},
    {browserName: 'internet explorer', version: '11', name: 'IE11:Windows 7'}
  ]
};
