function lengthCheck() {
  return {
    restrict: 'A',
    require: 'ngModel',
    compile: function($element) {
      $element.addClass('dynamic-input');
      return function($scope, $element, $attrs, $ctrl) {
        const dynamicClass = 'dynamic-input--no-contents';
        $scope.$watch(() => {
          return $ctrl.$viewValue;
        }, (newValue) => {
          if (newValue) {
            $element.removeClass(dynamicClass);
          } else {
            $element.addClass(dynamicClass);
          }
        });
      };
    }
  };
}

angular
  .module('components.contact')
  .directive('lengthCheck', lengthCheck);
