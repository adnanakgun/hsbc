app.directive('dayDial', [ function() {

    return {
        restrict: 'EA',
        replace: true,
        templateUrl: 'templates/dayDial.html',
        scope: {
            numberOfDays: '=',
            topTenPercent: '='
        },
        link: function($scope, $element) {
            $scope.numberOfDaysArr = [];
            for(var i = 0; i < $scope.numberOfDays; i++){
                var deg = 'rotate('+(((360/$scope.numberOfDays)*i)+270)+'deg)';

                $scope.numberOfDaysArr.push({
                    'deg': deg
                }); 
            }
           
        }
    };
}]);

app.directive('radialSlider', [ function() {

    return {
        restrict: 'EA',
        replace: true,
        templateUrl: 'templates/radialSlider.html',
        scope: {
            value: '=',
            numberOfDays: '=',
            radius: '@',
            thickness: '@',
            colour: '@',
            size: '@'
        },
        link: function($scope, $element) {
            $scope.Math = window.Math;
            $scope.numberOfDaysArr = [];
            $scope.mouseClicked = false;

            $scope.heightArr = [];
            $scope.outerRadius = parseInt($scope.radius) + parseInt($scope.thickness/2);

            for(var i = 0; i < $scope.numberOfDays; i++){
                var deg = 'rotate(' + (((360 / $scope.numberOfDays) * i) + 270) + 'deg)';

                $scope.numberOfDaysArr.push({
                    'deg': deg,
                    'outerRadius': $scope.outerRadius
                }); 
            };

            $scope.mouseSelect = function(index){
                if($scope.mouseClicked){
                    $scope.select(index);
                }
            };

            $scope.select = function(index){
                $scope.value = index;
            };

        }
    };
}]);