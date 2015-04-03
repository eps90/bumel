var app = angular.module('nukomeet.bumel');

app.filter('realTime', function() {
    function padNumber(number, totalLength) {
        if (!totalLength) {
            return number;
        }

        number = number + '';
        return number.length >= totalLength ? number : new Array(totalLength - number.length + 1).join('0') + number;
    }

    return function(timeInSeconds) {
        timeInSeconds = parseInt(timeInSeconds);
        var hours   = padNumber(Math.floor(timeInSeconds / 3600), 2);
        var minutes = padNumber(Math.floor((timeInSeconds - (hours * 3600)) / 60), 2);
        var seconds = padNumber(timeInSeconds - (hours * 3600) - (minutes * 60), 2);

        return hours + ":" + minutes + ":" + seconds;
    }
});
