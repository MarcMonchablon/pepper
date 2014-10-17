'use strict';

var expandBoxToFormat = require('./expandBoxToFormat.js');

var presentationModule = angular.module('pepper.presentation', [])
.directive('presentation', function() {
    return {
	restrict: 'E',
	transclude: true,
	template: '<div class="presentation" ng-transclude></div>',
	link: function(scope, element) {
	    var presentation = $('.presentation');
	    var slide = $('.slide');

	    expandBoxToFormat(slide,
			      presentation,
			      scope.presentationFormat.height,
			      scope.presentationFormat.width);
	},
	controller: function($scope) {
	  $scope.presentationFormat = {
	      height: 9,
	      width: 16
	  };
	}
    };
});

module.exports = presentationModule;
