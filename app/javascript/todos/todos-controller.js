module.exports = {
  ngProvider: 'controller',
  ngModule: 'controllers',
  ngName: 'todolist.todos.controller',
  dependencies: [
    '$scope', 'todolist.util.api'
  ],
  fn: ($scope, api) => {
    $scope.todos = api.load();
  }
};
