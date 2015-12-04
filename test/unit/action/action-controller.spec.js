/* globals afterEach, beforeEach, describe, it, require, window */
/* jshint -W030 *//* Accept expressions that look like they should be an assignment*/

var
  actionController = require('../../../app/javascript/action/action-controller'),
  utils = require('../../helper/stubs/utils'),
  expect = utils.expect,
  stubs = require('../../helper/stubs/stubs');

describe('Controller: todolist.action.controller', function() {
  'use strict';

  var
    controller,
    $firebaseArray,
    $rootScope,
    Ref,
    refStub = stubs.Ref(),
    resource,
    scope = {};

  beforeEach(function() {
    utils.mocks.angularBefore();

    refStub.setRef('todos', require('../../mock/json/todos.json'));

    window.module(function($provide) {
      $provide.value('$firebaseAuth', stubs.$firebaseAuth);
      $provide.value('$firebaseArray', stubs.$firebaseArray);
      $provide.factory('Ref', refStub.fn);
      $provide.factory('todolist.util.api',
        utils.injectDependencies(require('../../../app/javascript/util/api'))
      );
    });

    window.inject([
      '$controller', '$rootScope', 'todolist.util.api', function($controller, $rootScope, _resource_) {
        scope = $rootScope.$new();
        resource = _resource_;

        controller = $controller(utils.injectDependencies(actionController), {
          $scope: scope
        });
      }
    ]);
  });

  describe('status', function() {
    it('should correctly indicate if all todos are done', function() {
      resource.todos = [{done: true}, {done: true}];

      expect(scope.percentDone()).to.be.equal(100);
    });

    it('should correctly indicate if some are done and some open', function() {
      resource.todos = [{done: true}, {done: true}, {done: false}];

      expect(scope.percentDone()).to.be.equal(66);
    });
  });

  afterEach(function() {
    utils.mocks.angularAfter();
  });
});
