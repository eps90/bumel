var app = angular.module('nukomeet.bumel');

app.directive('panel', ['LocalStorageService', function (ls) {
    return {
        restrict: 'E',
        transclude: true,
        template: '<div ng-transclude layout="row"></div>',
        controller: function ($scope) {
            $scope.taskName = '';
            $scope.running = false;
            $scope.timer = null;
            this.setTimer = function(timer) {
                $scope.timer = timer;
            };

            $scope.startTimer = function (taskName) {
                var name = taskName.toLowerCase()
                    .replace(/ /g,'-')
                    .replace(/[^\w-]+/g,'');

                ls.setItem('currentTask', name);
                ls.setItem(name + '.name', taskName);

                $scope.timer.startTimer(name);
                $scope.running = true;
                $scope.timer.running = true;
            };
        }
    }
}]);
