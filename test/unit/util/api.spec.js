/* globals afterEach, beforeEach, describe, it, require, window */
/* jshint -W030 *//* Accept expressions that look like they should be an assignment*/

var
  apiResource = require('../../../app/javascript/util/api'),
  utils = require('../../helper/stubs/utils'),
  expect = utils.expect,
  stubs = require('../../helper/stubs/stubs'),
  _ = require('lodash');

describe('Unit: todolist.util.api', function() {
  'use strict';

  var
    $firebaseArray,
    $rootScope,
    Ref,
    refStub = stubs.Ref(),
    resource;

  beforeEach(function() {
    utils.mocks.angularBefore();

    window.module(function($provide) {
      $provide.value('$firebaseArray', stubs.$firebaseArray);
      $provide.factory('Ref', refStub.fn);
    });

    window.inject([
      '$rootScope', '$firebaseArray', 'Ref',
      function(
        _$rootScope_, _$firebaseArray_, _Ref_
      ) {
        $firebaseArray = _$firebaseArray_;
        Ref = _Ref_;
        $rootScope = _$rootScope_;
      }
    ]);

    refStub.setRef('todos', require('../../mock/json/todos.json'));

    resource = apiResource.fn($rootScope, Ref, $firebaseArray);
  });

  describe('load', function() {
    it('should allow loading todos as an array', function() {
      expect(resource.load()).to.be.instanceof(Array);
    });

    it('should return todos with correct properties', function() {
      expect(resource.load()).to.all.have.property('title');
      expect(resource.load()).to.all.have.property('assigned');
      expect(resource.load()).to.all.have.property('done');
    });
  });

  describe('add', function() {
    it('should perist a todo', function() {
      var
        _todos = refStub.getRef('todos'),
        _todo = _todos[0];

      resource.add(_todo);

      expect(_todo.$save).to.be.called;
    });
  });

  describe('assign', function() {
    beforeEach(function() {
      resource.user = {
        name: 'test',
        avatar: 'url'
      };
    });

    it('should assign the todo to the user', function() {
      var
        _todos = refStub.getRef('todos'),
        _todo = _todos[0];

      resource.assign(_todo);

      expect(_todo.assigned.name).to.be.equal('test');
      expect(_todo.assigned.avatar).to.be.equal('url');
    });

    it('should assign the todo to the user', function() {
      var
        _todos = refStub.getRef('todos'),
        _todo = _todos[0];

      resource.assign(_todo);

      expect(_todo.$save).to.be.called;
    });
  });

  describe('unassign', function() {
    it('should unassign the todo from the user', function() {
      var
        _todos = refStub.getRef('todos'),
        _todo = _todos[0];

      resource.unassign(_todo);

      expect(_todo.assigned).to.be.undefined;
    });

    it('should assign the todo to the user', function() {
      var
        _todos = refStub.getRef('todos'),
        _todo = _todos[0];

      resource.unassign(_todo);

      expect(_todo.$save).to.be.called;
    });
  });

  describe('done', function() {
    it('should mark the todo as done', function() {
      var
        _todos = refStub.getRef('todos'),
        _todo = _todos[0];

      resource.done(_todo);

      expect(_todo.done).to.be.true;
    });
  });

  describe('undone', function() {
    it('should mark the todo as undone', function() {
      var
        _todos = refStub.getRef('todos'),
        _todo = _todos[0];

      resource.undone(_todo);

      expect(_todo.done).to.be.false;
    });
  });

  afterEach(function() {
    utils.mocks.angularAfter();
  });

});
