'use strict';

angular.module('pepper.slide', [])

.directive('slide', function() {
    return {
	restrict: 'E',
	transclude: true,
	template: '<div class="slide" ng-transclude></div>',
	scope: true,
	controller: function($scope) {
	    $scope.title = "Slide title";
	}
    };
});
