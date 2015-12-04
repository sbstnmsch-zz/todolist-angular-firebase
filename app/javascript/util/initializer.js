/* globals console */
/**
 * # Notes on this module
 *
 * This module bootstraps an angular application based on
 * components registered and their demands as exported by
 * module.exports.
 *
 * # E.g.
 *
 * A module having the configuration as in:
 *
 * ngProvider: 'controller',
 * ngModule: 'controllers',
 * ngName: 'todolist.list.itemcontroller',
 * dependencies: ['$scope'],
 * fn: ...
 *
 * will be registered as a controller provider on the controllers
 * module within angular while being accessible via its ngName. The
 * controller fn and their dependencies will be 'merged' via
 * using the $inject on the fn. In tests one can use the utils.
 *
 * # Additional functionality
 *
 * It will check for duplicate module namings and setup angular
 * modules on demand.
 */

var
  angular = require('angular'),
  _ = require('lodash'),
  Initializer = {},
  _ngRootModule,
  _ngModules = {},
  _ngComponents = {},
  log = console,
  _isComponentValid,
  _getModules,
  _initializeModules,
  _initializeComponents,
  _initializeComponent,
  _initializeConfigurableComponent;

_isComponentValid = (ngName, ngModule, ngSuffix) => {
  if (ngModule === undefined || (ngName === undefined && ngSuffix === undefined)) {
    log.error(
      'Component',
      ngName,
      'can not be registered on',
      ngModule,
      '.'
    );

    return false;
  } else if (_ngComponents[ngName || _ngRootModule + '.' + ngSuffix]) {
    log.error(
      'Component',
      ngName,
      'is already registered!'
    );

    return false;
  }

  return true;
};

_getModules = () => {
  return _.chain(_ngComponents)
          .pluck('ngModule')
          .uniq()
          .value();
};

_initializeModules = () => {
  _getModules().forEach(ngModule => {
    _ngModules[ngModule] = angular.module(
      _ngRootModule + '.' + ngModule,
      []
    );
  });
};

_initializeComponent = (component) => {
  component.fn.$inject = component.dependencies;

  _ngModules[component.ngModule][component.ngProvider](
    component.ngName,
    component.fn
  );
};

_initializeConfigurableComponent = (component) => {
  var
    _moduleName = _ngRootModule + '.' + component.ngSuffix;

  component.fn.$inject = component.dependencies;

  _ngModules[component.ngModule][component.ngProvider](
    _moduleName,
    component.fn
  );
};

_initializeComponents = () => {
  _.each(_ngComponents, component => {
    if (typeof component.ngSuffix === 'string') {
      _initializeConfigurableComponent(component);
    } else {
      _initializeComponent(component);
    }
  });
};

Initializer.register = (component) => {
  if (!_isComponentValid(component.ngName, component.ngModule, component.ngSuffix)) {
    log.error('Attempt to registister invalid component!');
  }

  _ngComponents[component.ngName || _ngRootModule + '.' + component.ngSuffix] = component;

  return Initializer;
};

Initializer.common = Initializer.register;

Initializer.module = (ngModule) => {
  _ngRootModule = ngModule;

  return Initializer;
};

Initializer.initialize = (onComplete) => {
  _initializeModules();
  _initializeComponents();

  onComplete();
};

Initializer.flush = () => {
  _ngComponents = {};
  _ngModules = {};
};

module.exports = Initializer;
