/* globals exports */
var
  browserstackConfig = require('../../grunt/options/browserstack.json'),
  devServer = require('../../grunt/options/dev-server.json');

  if (browserstackConfig.proxy.host && browserstackConfig.proxy.host.length > 0) {
    require('global-tunnel').initialize({
      host: browserstackConfig.proxy.host,
      port: browserstackConfig.proxy.port
    });
  }

exports.config = {
  specs: ['../e2e/**/*.js'],
  baseUrl: devServer.protocol + devServer.host + ':' + devServer.port,
  seleniumAddress: 'http://hub.browserstack.com/wd/hub',
  framework: 'mocha',
  noColor: true,
  mochaOpts: {
    timeout: 120000 // browserstack can be slow
  },

  maxSessions: 1, // num of vms you want to use in parallel

  multiCapabilities: [
    {
      name: 'todolist:Firefox:Windows 8',
      browserName: 'firefox',
      version: '39.0',
      os: 'Windows',
      os_version: '8',
      resolution: '1024x768',
      project: browserstackConfig.projects.protractor,
      'browserstack.user': browserstackConfig.credentials.username,
      'browserstack.key': browserstackConfig.credentials.accessKey,
      'browserstack.local': browserstackConfig.local,
      'browserstack.debug': browserstackConfig.debug,
      'browserstack.localIdentifier': browserstackConfig.localIdentifier
    },
    {
      name: 'todolist:IE 10:Windows 8',
      browserName: 'ie',
      version: '10.0',
      os: 'Windows',
      os_version: '8',
      resolution: '1024x768',
      project: browserstackConfig.projects.protractor,
      'browserstack.user': browserstackConfig.credentials.username,
      'browserstack.key': browserstackConfig.credentials.accessKey,
      'browserstack.local': browserstackConfig.local,
      'browserstack.debug': browserstackConfig.debug,
      'browserstack.localIdentifier': browserstackConfig.localIdentifier
    },
    {
      name: 'todolist:IE 11:Windows 8.1',
      browserName: 'ie',
      version: '11.0',
      os: 'Windows',
      os_version: '8.1',
      resolution: '1024x768',
      project: browserstackConfig.projects.protractor,
      'browserstack.user': browserstackConfig.credentials.username,
      'browserstack.key': browserstackConfig.credentials.accessKey,
      'browserstack.local': browserstackConfig.local,
      'browserstack.debug': browserstackConfig.debug,
      'browserstack.localIdentifier': browserstackConfig.localIdentifier
    }
  ]
};
