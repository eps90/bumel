var app = angular.module('nukomeet.bumel');

app.factory('LocalStorageService', ['$window', function ($window) {
    return {
        getItem: function (key) {
            return JSON.parse($window.localStorage.getItem(key)) || null;
        },
        setItem: function (key, value) {
            return $window.localStorage.setItem(key, JSON.stringify(value));
        },
        isSet: function (key) {
            return this.getItem(key) !== null;
        },
        appendTo: function (key, value) {
            var currentValue = [];
            if ($window.localStorage.getItem(key)) {
                currentValue = this.getItem(key);
            }

            currentValue.push(value);
            this.setItem(key, currentValue);
        },
        remove: function (key) {
            $window.localStorage.removeItem(key);
        },
        clear: function () {
            $window.localStorage.clear();
        }
    }
}]);
