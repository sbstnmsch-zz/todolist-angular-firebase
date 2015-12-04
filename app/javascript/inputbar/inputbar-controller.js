module.exports = {
  ngProvider: 'controller',
  ngModule: 'controllers',
  ngName: 'todolist.inputbar.controller',
  dependencies: [
    '$scope', 'todolist.util.api'
  ],
  fn: ($scope, api) => {
    $scope.add = function() {
      api.add({
        title: $scope.title,
        done: false,
        assigned: false
      });
      $scope.title = null;
    };
  }
};
