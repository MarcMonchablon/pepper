'use strict';

angular.module('pepper.uiPanel', [])

.directive('uiPanel', function() {
    return {
	restrict: 'E',
	transclude: true,
	replace: true,
	template: '<ul class="uiPanel ng-transclude"></ul>',
	scope: true
    };
})

.directive('uiPanelSection', function() {
    return {
	restrict: 'E',
	transclude: true,
	replace: true,
	template: '<li class="uiPanelSection" ng-transclude></li>',
	scope: true
    };
});

