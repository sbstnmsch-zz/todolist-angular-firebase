module.exports = {
  ngProvider: 'directive',
  ngModule: 'directives',
  ngName: 'todolistRightClick',
  dependencies: [
    '$parse'
  ],
  fn: ($parse) => {
    return {
      restrict: 'A',
      link: (scope, element, attrs) => {
        let
          fn = $parse(attrs.todolistRightClick);

        element.bind('contextmenu', function(event) {
          scope.$apply(function() {
            event.preventDefault();

            fn(scope, {
              $event: event
            });
          });
        });
      }
    };
  }
};
