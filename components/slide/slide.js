'use strict';

angular.module('pepper.slide', [])

.directive('slide', function() {
    return {
	restrict: 'AE',
	templateUrl: 'components/slide/slide.html',
	scope: true,
	replace: false,
	controller: function($scope) {
	    $scope.title = "Slide title";
	}
    };
});
