var app = angular.module('nukomeet.bumel');

app.directive('tasksList',['LocalStorageService', function (ls) {
    return {
        restrict: 'E',
        templateUrl: 'src/views/partials/tasks_list.html',
        link: function (scope) {
            scope.tasksCompleted = ls.getItem('tasks.completed');
        },
        controller: function ($scope) {
            $scope.tasksCompleted = [];
            $scope.$on('timer.stop', function () {
                $scope.tasksCompleted = ls.getItem('tasks.completed');
            });

            $scope.clearList = function () {
                ls.clear();
                $scope.tasksCompleted = [];
            }
        }
    }
}]);
