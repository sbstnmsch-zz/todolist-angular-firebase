module.exports = {
  ngProvider: 'factory',
  ngModule: 'factories',
  ngName: 'todolist.util.endpoint',
  dependencies: ['$location', 'todolist.config.environment', 'todolist.config.host', '$sce'],
  fn: ($location, environment, host, $sce) => {
    var
      _ = require('lodash'),
      factoryInterface = {},
      _interpolateUrl = null,
      _interpolateParams = null,
      _getHost = null,
      _toQueryString;

    environment.host = host.host;

    _getHost = () => {
      return environment.host === 'browser' ?
        $location.protocol() + '://' + $location.host() + ':' + $location.port() + '/' :
        environment.host;
    };

    _interpolateParams = (filter) => {
      var _interpolated = environment.pathPostfix,
          _filters = _.keys(filter);

      if (_filters.length === 0) { return ''; }

      _interpolated += environment.paramsDelimiter;
      _interpolated += _toQueryString(filter);

      return _interpolated;
    };

    _toQueryString = (from) => {
      return _.map(from, function(queryValue, queryKey) {
        var _queryValues = _.isArray(queryValue) ? queryValue : [queryValue];

        return _.map(_queryValues, function(value) {
          return encodeURIComponent(queryKey) + '=' + encodeURIComponent(value);
        }).join(environment.paramsGlue);

      }).join(environment.paramsGlue);
    };

    _interpolateUrl = (resource, filter) => {
      return $sce.trustAsResourceUrl(
        factoryInterface.getRoot() +
        resource +
        _interpolateParams(filter) +
        factoryInterface.getExtension()
      );
    };

    factoryInterface.getRoot = () => {
      return _getHost() + environment.root + environment.apiRoot;
    };

    factoryInterface.getExtension = () => {
      return environment.apiExtension;
    };

    factoryInterface.todosUrl = () => {
      return _interpolateUrl('todos');
    };

    return factoryInterface;
  }
};
