trig.controller("TrigController", function($scope, CalculatorFactory){
  $scope.calculate = function (a, b) {
    $scope.hypotenuse = CalculatorFactory.hypot(a, b)
  }


});
