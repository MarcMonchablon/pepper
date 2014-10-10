'use strict';

angular.module('pepper.presentation', [])

.directive('presentation', function() {
    return {
	restrict: 'E',
	transclude: true,
	template: '<div class="presentation" ng-transclude></div>',
	controller: function($scope) {
	    
	}
    }
});
