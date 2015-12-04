module.exports = {
  ngProvider: 'directive',
  ngModule: 'directives',
  ngName: 'todolistHeader',
  dependencies: ['todolist.util.template'],
  fn: (templateFactory) => {
    return {
      restrict: 'E',
      controller: 'todolist.header.controller',
      templateUrl: templateFactory.url('header'),
      replace: true,
      scope: {
      },
      link: () => {}
    };
  }
};
