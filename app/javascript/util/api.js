module.exports = {
  ngProvider: 'factory',
  ngModule: 'factories',
  ngName: 'todolist.util.api',
  dependencies: [
    '$rootScope', 'Ref', '$firebaseArray'
  ],
  fn: (
    $rootScope, Ref, $firebaseArray
  ) => {
    'use strict';

    let
      _ = require('lodash'),
      api = {
        user: {},
        todos: $firebaseArray(Ref.child('todos'))
      };

    api.auth = (user) => {
      if (user.provider === 'facebook') {
        api.user = {
          name: user.facebook.displayName,
          avatar: user.facebook.profileImageURL
        };
      } else
      if (user.provider === 'google') {
        api.user = {
          name: user.google.displayName,
          avatar: user.google.profileImageURL
        };
      } else
      if (user.provider === 'github') {
        api.user = {
          name: user.github.displayName,
          avatar: user.github.profileImageURL
        };
      }

      $rootScope.$broadcast('user:loggedin', api.user);
    };

    api.load = () => {
      return api.todos;
    };

    api.add = (todo) => {
      api.todos.$add(todo);
    };

    api.assign = (todo) => {
      todo.assigned = api.user;
      api.todos.$save(todo);
    };

    api.unassign = (todo) => {
      todo.assigned = undefined;
      api.todos.$save(todo);
    };

    api.done = (todo) => {
      todo.done = true;
      api.todos.$save(todo);
    };

    api.undone = (todo) => {
      todo.done = false;
      api.todos.$save(todo);
    };

    api.clear = () => {
      _.filter(api.todos, todo => {
        return todo.done === true;
      }).forEach((todo) => {
        api.todos.$remove(todo);
      });
      api.todos.$save();
    };

    return api;
  }
};
