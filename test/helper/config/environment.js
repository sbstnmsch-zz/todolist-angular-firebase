module.exports = {
  ngProvider: 'constant',
  ngModule: 'config',
  ngName: 'todolist.config.environment',
  dependencies: [],
  fn: {
    root: '/',
    apiRoot: 'mock/json/',
    apiExtension: '.json',
    paramsDelimiter: '?',
    paramsGlue: '&',
    pathPostfix: '',
    templateRoot: 'app/templates/',
    templateExtension: '.html'
  }
};
