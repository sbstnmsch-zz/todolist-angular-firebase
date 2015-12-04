module.exports = {
  ngProvider: 'controller',
  ngModule: 'controllers',
  ngName: 'todolist.todo.controller',
  dependencies: [
    '$scope', 'todolist.util.api'
  ],
  fn: ($scope, api) => {
    $scope.proceed = function() {
      if ($scope.todo.assigned) {
        api.done($scope.todo);
      } else {
        api.assign($scope.todo);
      }
    };

    $scope.cutback = function() {
      if ($scope.todo.done) {
        $scope.todo.done = false;
        api.undone($scope.todo);
      } else if($scope.todo.assigned) {
        $scope.todo.assigned = undefined;
        api.unassign($scope.todo);
      }
    };
  }
};
