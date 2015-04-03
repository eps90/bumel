var app = angular.module('nukomeet.bumel');

app.factory('LocalStorageService', ['$window', function ($window) {
    return {
        get: function(key) {
            return $window.localStorage.getItem(JSON.parse(key)) || null;
        },
        set: function(key, value) {
            return $window.localStorage.setItem(key, JSON.stringify(value));
        },
        appendTo: function (key, value) {
            if (!$window.localStorage.getItem(key)) {
                if (typeof value === "object") {
                    this.set(key, {});
                } else if (Array.isArray && Array.isArray(value)) {
                    this.set(key, []);
                }
            }
        }
    }
}]);
