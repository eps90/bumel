var app = angular.module('nukomeet.bumel');

app.directive('timer', ['LocalStorageService', '$interval', function (ls, $interval) {
    return {
        restrict: 'E',
        templateUrl: 'src/views/partials/timer.html',
        scope: {
            interval: '@'
        },
        link: function (scope) {

        },
        controller: function ($scope) {
            $scope.value = 0;
            $scope.startTimer = function (timerName) {
                if (ls.isSet(timerName)) {
                    $scope.value = ls.getItem(timerName);
                }

                $interval(
                    function () {
                        $scope.value++;
                        ls.setItem(timerName, $scope.value);
                    },
                    $scope.interval
                );
            }
        }
    }
}]);
