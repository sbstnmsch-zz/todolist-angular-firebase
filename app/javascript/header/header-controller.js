module.exports = {
  ngProvider: 'controller',
  ngModule: 'controllers',
  ngName: 'todolist.header.controller',
  dependencies: [
    '$rootScope', '$scope'
  ],
  fn: ($rootScope, $scope) => {
    $rootScope.$on('user:loggedin', (e, user) => {
      $scope.user = user;
    });
  }
};
