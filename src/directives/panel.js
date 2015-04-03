var app = angular.module('nukomeet.bumel');

app.directive('panel', function () {
    return {
        restrict: 'E',
        transclude: true,
        template: '<div ng-transclude layout="row"></div>',
        controller: function ($scope) {
            $scope.taskName = '';

            $scope.timer = null;
            this.setTimer = function(timer) {
                $scope.timer = timer;
            };

            $scope.startTimer = function () {
                var name = $scope.taskName.toLowerCase()
                    .replace(/ /g,'-')
                    .replace(/[^\w-]+/g,'');

                $scope.timer.startTimer(name);
            };
        }
    }
});
