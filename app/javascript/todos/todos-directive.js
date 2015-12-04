module.exports = {
  ngProvider: 'directive',
  ngModule: 'directives',
  ngName: 'todolistTodos',
  dependencies: [
    'todolist.util.template'
  ],
  fn: (templateFactory) => {
    return {
      restrict: 'E',
      controller: 'todolist.todos.controller',
      templateUrl: templateFactory.url('todos'),
      replace: true,
      scope: {
      },
      link: () => {}
    };
  }
};
