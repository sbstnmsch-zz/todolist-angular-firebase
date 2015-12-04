module.exports = {
  ngProvider: 'directive',
  ngModule: 'directives',
  ngName: 'todolistAction',
  dependencies: ['todolist.util.template'],
  fn: (templateFactory) => {
    return {
      restrict: 'E',
      controller: 'todolist.action.controller',
      templateUrl: templateFactory.url('action'),
      replace: true
    };
  }
};
