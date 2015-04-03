var app = angular.module('nukomeet.bumel');

app.directive('timer', ['LocalStorageService', '$interval', function (ls, $interval) {
    return {
        restrict: 'E',
        templateUrl: 'src/views/partials/timer.html',
        scope: {
            interval: '@',
            name: '@'
        },
        link: function (scope) {
            var timerName = 'timer.' + scope.name;
            scope.value = 0;

            if (ls.isSet(timerName)) {
                scope.value = ls.getItem(timerName);
            }

            $interval(
                function () {
                    scope.value++;
                    ls.setItem(timerName, scope.value);
                },
                scope.interval
            );
        }
    }
}]);
