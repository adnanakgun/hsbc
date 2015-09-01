app.controller('calcController', function ($scope) {

  var calculateValue = function(day, multiplier){
  	return day * multiplier;
  };

  var calculateTotalValue = function(val1, val2, val3){
  	return val2 + val3 - val1;
  };


  $scope.numberOfDays = 72;
  
  $scope.calc1DayInit = 31;
  $scope.calc1ValueInit = calculateValue($scope.calc1DayInit, 3);

  $scope.calc2DayInit = 50;
  $scope.calc2ValueInit = calculateValue($scope.calc2DayInit, 4);

  $scope.calc3DayInit = 36;
  $scope.calc3ValueInit = calculateValue($scope.calc3DayInit, 5);

  $scope.calcTotalValueInit = calculateTotalValue($scope.calc1ValueInit, $scope.calc2ValueInit, $scope.calc3ValueInit);
  
  $scope.$watch('calc1Day', function(val){
  	$scope.calc1Value = calculateValue(val, 3);
  	$scope.calcTotalValue = calculateTotalValue($scope.calc1Value, $scope.calc2Value, $scope.calc3Value);
  });
  $scope.$watch('calc2Day', function(val){
  	$scope.calc2Value = calculateValue(val, 4);
  	$scope.calcTotalValue = calculateTotalValue($scope.calc1Value, $scope.calc2Value, $scope.calc3Value);
  });
  $scope.$watch('calc3Day', function(val){
  	$scope.calc3Value = calculateValue(val, 5);
  	$scope.calcTotalValue = calculateTotalValue($scope.calc1Value, $scope.calc2Value, $scope.calc3Value);
  });



});