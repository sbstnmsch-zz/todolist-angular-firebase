module.exports = {
  ngProvider: 'directive',
  ngModule: 'directives',
  ngName: 'todolistTodo',
  dependencies: [
    'todolist.util.template'
  ],
  fn: (templateFactory) => {
    return {
      restrict: 'E',
      controller: 'todolist.todo.controller',
      templateUrl: templateFactory.url('todo'),
      replace: true,
      scope: {
        todo: '='
      },
      link: () => {}
    };
  }
};
