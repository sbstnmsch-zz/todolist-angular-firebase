/* globals hostname */
var
  devServer = require('../../../../grunt/options/dev-server.json'),
  host = '//' + ((typeof hostname === 'undefined') ? devServer.host : hostname) + ':' + devServer.port;

module.exports = {
  ngProvider: 'constant',
  ngModule: 'config',
  ngName: 'todolist.config.host',
  dependencies: [],
  fn: {
    host: host
  }
};
