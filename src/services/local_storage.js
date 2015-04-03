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
            if (!$window.localStorage.getItem(key)) {
                if (typeof value === "object") {
                    this.setItem(key, {});
                } else if (Array.isArray && Array.isArray(value)) {
                    this.setItem(key, []);
                }
            }
        }
    }
}]);
