angular.module("birdApp")
.directive('header', function() {
    return {
        restrict    : 'A',
        templateUrl : 'angular-app/common/header/header.html'
    }
});
