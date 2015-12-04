module.exports = {
  ngProvider: 'directive',
  ngModule: 'directives',
  ngName: 'todolistInputbar',
  dependencies: ['todolist.util.template'],
  fn: (templateFactory) => {
    return {
      restrict: 'E',
      controller: 'todolist.inputbar.controller',
      templateUrl: templateFactory.url('inputbar'),
      replace: true,
      scope: {
      },
      link: () => {}
    };
  }
};
