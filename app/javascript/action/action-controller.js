/* lobals Firebase */
module.exports = {
  ngProvider: 'controller',
  ngModule: 'controllers',
  ngName: 'todolist.action.controller',
  dependencies: [
    '$scope', 'todolist.util.api', 'Ref', '$firebaseAuth'
  ],
  fn: ($scope, api, Ref, $firebaseAuth) => {
    'use strict';

    let
      _ = require('lodash'),
      auth = $firebaseAuth(Ref);

    auth.$onAuth((user) => {
      if (user) {
        $scope.authenticated = true;
        api.auth(user);
      }
    });

    ['facebook', 'google', 'github'].forEach((provider) => {
      $scope[provider] = () => {
        auth.$authWithOAuthPopup(provider);
      };
    });

    $scope.percentDone = () => {
      let
        finished = _.filter(api.todos, todo => {
          return todo.done;
        }).length,
        open = api.todos.length;

      return open ? (finished / open) * 100 | 0 : 100;
    };

    $scope.clear = () => {
      api.clear();
    };
  }
};
