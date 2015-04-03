var app = angular.module('nukomeet.bumel');

app.directive('timer', ['LocalStorageService', '$interval', function (ls, $interval) {
    return {
        restrict: 'E',
        templateUrl: 'src/views/partials/timer.html',
        scope: {
            interval: '='
        },
        link: function (scope, element, attrs) {
            scope.value = 0;
            $interval(
                function () {
                    scope.value++;
                    scope.$emit('timer.tick');
                },
                scope.interval
            );
        }
    }
}]);
