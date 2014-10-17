'use strict';

var presentationModule = angular.module('pepper.presentation', [])

.directive('presentation', function() {
    return {
	restrict: 'E',
	transclude: true,
	template: '<div class="presentation" ng-transclude></div>',
	link: function(scope, element) {
	    var presentation = $('.presentation');
	    var slide = $('.slide');

	    adjustCurrentSlideSize(slide, presentation, scope.presentationFormat.height, scope.presentationFormat.width);
	    
	    function adjustCurrentSlideSize(slide, presentation, desiredFormatHeight, desiredFormatWidth) {
		var maximumRectangle = computeMaximumRectangle(presentation.height(),
							      presentation.width(),
							      desiredFormatHeight,
							      desiredFormatWidth);
		
		(function adjustSlideSize(slide, maximumRectangle) {
		    slide.height(maximumRectangle.height);
		    slide.width(maximumRectangle.width);
		})(slide, maximumRectangle);

		(function centerSlideInPresentation(slide, presentation) {
		    var leftMargin = (presentation.width() - slide.width()) / 2;
		    var topMargin = (presentation.height() - slide.height()) / 2;
		    presentation.css('padding-left', leftMargin + 'px');
		    presentation.css('padding-top', topMargin + 'px');
		})(slide, presentation);
	    }

	    function computeMaximumRectangle(outerRectangleHeight, outerRectangleWidth, desiredFormatHeight, desiredFormatWidth) {
		var ratioOfOuterRectangle = outerRectangleHeight / outerRectangleWidth;
		var ratioOfDesiredFormat = desiredFormatHeight / desiredFormatWidth;
		var innerRectangle = {};

		if (ratioOfDesiredFormat > ratioOfOuterRectangle) {
		    innerRectangle.height = outerRectangleHeight;
		    innerRectangle.width = desiredFormatWidth * (innerRectangle.height / desiredFormatHeight);
		} else {
		    innerRectangle.width = outerRectangleWidth;
		    innerRectangle.height = desiredFormatHeight * (innerRectangle.width / desiredFormatWidth);
		}
		
		return innerRectangle;
	    }


	    
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
