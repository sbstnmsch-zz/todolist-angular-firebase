var
  initializer = require('util/initializer'),
  ngModule;

require('angular-animate');
require('bem/global.css');
require('bem/todolist.css');
require('bem/action.css');
require('bem/header.css');
require('bem/inputbar.css');
require('bem/todo.css');
require('bem/todos.css');

initializer
  .module('todolist')
  .register(require('config/host'))
  .register(require('config/environment'))
  .register(require('config/log'))
  .register(require('util/api'))
  .register(require('util/endpoint'))
  .register(require('util/template'))
  .register(require('action/action-directive'))
  .register(require('action/action-controller'))
  .register(require('header/header-directive'))
  .register(require('header/header-controller'))
  .register(require('todos/todos-directive'))
  .register(require('todos/todos-controller'))
  .register(require('todo/todo-directive'))
  .register(require('todo/todo-controller'))
  .register(require('inputbar/inputbar-directive'))
  .register(require('inputbar/inputbar-controller'))
  .register(require('util/rightclick-directive'))
  .initialize(() => {

    angular.module('firebase.config', [])
      .constant('FBURL', 'https://epa-todosy.firebaseio.com')
      .constant('SIMPLE_LOGIN_PROVIDERS', ['facebook', 'google', 'github'])
      .constant('loginRedirectPath', '/');

    angular.module('firebase.auth', ['firebase', 'firebase.ref'])
      .factory('Auth', function($firebaseAuth, Ref) {
        return $firebaseAuth(Ref);
      });

    angular.module('firebase.ref', ['firebase', 'firebase.config'])
      .factory('Ref', ['$window', 'FBURL', function($window, FBURL) {
        return new $window.Firebase(FBURL);
      }]);

    ngModule = angular
    .module('todolist', [
      'ngAnimate',
      'todolist.config',
      'todolist.factories',
      'todolist.controllers',
      'todolist.directives',
      'firebase',
      'firebase.ref',
      'firebase.auth'
    ])
    .run(require('ng-templates'));
  });

module.exports = ngModule;
