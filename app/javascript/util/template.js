module.exports = {
  ngProvider: 'factory',
  ngModule: 'factories',
  ngName: 'todolist.util.template',
  dependencies: ['todolist.config.environment', 'todolist.config.host', '$location', '$sce'],
  fn: function(environment, host, $location, $sce) {
    var
      factoryInterface = {},
      _interpolateUrl = null;

    _interpolateUrl = (template) => {
      return $sce.trustAsResourceUrl(
        factoryInterface.getRoot() +
          template +
          factoryInterface.getExtension()
      );
    };

    factoryInterface.getRoot = () => {
      return host.host + environment.templateRoot;
    };

    factoryInterface.getExtension = () => {
      return environment.templateExtension;
    };

    factoryInterface.url = (template) => {
      return _interpolateUrl(template);
    };

    return factoryInterface;
  }
};
