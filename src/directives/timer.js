var app = angular.module('nukomeet.bumel');

app.directive('timer', ['LocalStorageService', '$interval', function (ls, $interval) {
    return {
        restrict: 'E',
        templateUrl: 'src/views/partials/timer.html',
        require: '^panel',
        scope: {
            interval: '@'
        },
        link: function (scope, elem, attrs, panelCtrl) {
            panelCtrl.setTimer(scope);
        },
        controller: function ($scope) {
            $scope.value = 0;
            $scope.status = undefined;
            $scope.startTimer = function (timerName) {
                if (ls.isSet(timerName)) {
                    $scope.value = ls.getItem(timerName);
                }

                $scope.status = $interval(
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
