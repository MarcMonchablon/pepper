(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var presentation = require('./components/presentation/presentation.js');
var slide        = require('./components/slide/slide.js');

angular.module('pepper', ['pepper.presentation', 'pepper.slide']);

},{"./components/presentation/presentation.js":2,"./components/slide/slide.js":3}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIiwiYXBwL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uL3ByZXNlbnRhdGlvbi5qcyIsImFwcC9jb21wb25lbnRzL3NsaWRlL3NsaWRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHByZXNlbnRhdGlvbiA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9wcmVzZW50YXRpb24vcHJlc2VudGF0aW9uLmpzJyk7XG52YXIgc2xpZGUgICAgICAgID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3NsaWRlL3NsaWRlLmpzJyk7XG5cbmFuZ3VsYXIubW9kdWxlKCdwZXBwZXInLCBbJ3BlcHBlci5wcmVzZW50YXRpb24nLCAncGVwcGVyLnNsaWRlJ10pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHJlc2VudGF0aW9uTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3BlcHBlci5wcmVzZW50YXRpb24nLCBbXSlcblxuLmRpcmVjdGl2ZSgncHJlc2VudGF0aW9uJywgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcblx0cmVzdHJpY3Q6ICdFJyxcblx0dHJhbnNjbHVkZTogdHJ1ZSxcblx0dGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwicHJlc2VudGF0aW9uXCIgbmctdHJhbnNjbHVkZT48L2Rpdj4nLFxuXHRsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCkge1xuXHQgICAgdmFyIHByZXNlbnRhdGlvbiA9ICQoJy5wcmVzZW50YXRpb24nKTtcblx0ICAgIHZhciBzbGlkZSA9ICQoJy5zbGlkZScpO1xuXG5cdCAgICBhZGp1c3RDdXJyZW50U2xpZGVTaXplKHNsaWRlLCBwcmVzZW50YXRpb24sIHNjb3BlLnByZXNlbnRhdGlvbkZvcm1hdC5oZWlnaHQsIHNjb3BlLnByZXNlbnRhdGlvbkZvcm1hdC53aWR0aCk7XG5cdCAgICBcblx0ICAgIGZ1bmN0aW9uIGFkanVzdEN1cnJlbnRTbGlkZVNpemUoc2xpZGUsIHByZXNlbnRhdGlvbiwgZGVzaXJlZEZvcm1hdEhlaWdodCwgZGVzaXJlZEZvcm1hdFdpZHRoKSB7XG5cdFx0dmFyIG1heGltdW1SZWN0YW5nbGUgPSBjb21wdXRlTWF4aW11bVJlY3RhbmdsZShwcmVzZW50YXRpb24uaGVpZ2h0KCksXG5cdFx0XHRcdFx0XHRcdCAgICAgIHByZXNlbnRhdGlvbi53aWR0aCgpLFxuXHRcdFx0XHRcdFx0XHQgICAgICBkZXNpcmVkRm9ybWF0SGVpZ2h0LFxuXHRcdFx0XHRcdFx0XHQgICAgICBkZXNpcmVkRm9ybWF0V2lkdGgpO1xuXHRcdFxuXHRcdChmdW5jdGlvbiBhZGp1c3RTbGlkZVNpemUoc2xpZGUsIG1heGltdW1SZWN0YW5nbGUpIHtcblx0XHQgICAgc2xpZGUuaGVpZ2h0KG1heGltdW1SZWN0YW5nbGUuaGVpZ2h0KTtcblx0XHQgICAgc2xpZGUud2lkdGgobWF4aW11bVJlY3RhbmdsZS53aWR0aCk7XG5cdFx0fSkoc2xpZGUsIG1heGltdW1SZWN0YW5nbGUpO1xuXG5cdFx0KGZ1bmN0aW9uIGNlbnRlclNsaWRlSW5QcmVzZW50YXRpb24oc2xpZGUsIHByZXNlbnRhdGlvbikge1xuXHRcdCAgICB2YXIgbGVmdE1hcmdpbiA9IChwcmVzZW50YXRpb24ud2lkdGgoKSAtIHNsaWRlLndpZHRoKCkpIC8gMjtcblx0XHQgICAgdmFyIHRvcE1hcmdpbiA9IChwcmVzZW50YXRpb24uaGVpZ2h0KCkgLSBzbGlkZS5oZWlnaHQoKSkgLyAyO1xuXHRcdCAgICBwcmVzZW50YXRpb24uY3NzKCdwYWRkaW5nLWxlZnQnLCBsZWZ0TWFyZ2luICsgJ3B4Jyk7XG5cdFx0ICAgIHByZXNlbnRhdGlvbi5jc3MoJ3BhZGRpbmctdG9wJywgdG9wTWFyZ2luICsgJ3B4Jyk7XG5cdFx0fSkoc2xpZGUsIHByZXNlbnRhdGlvbik7XG5cdCAgICB9XG5cblx0ICAgIGZ1bmN0aW9uIGNvbXB1dGVNYXhpbXVtUmVjdGFuZ2xlKG91dGVyUmVjdGFuZ2xlSGVpZ2h0LCBvdXRlclJlY3RhbmdsZVdpZHRoLCBkZXNpcmVkRm9ybWF0SGVpZ2h0LCBkZXNpcmVkRm9ybWF0V2lkdGgpIHtcblx0XHR2YXIgcmF0aW9PZk91dGVyUmVjdGFuZ2xlID0gb3V0ZXJSZWN0YW5nbGVIZWlnaHQgLyBvdXRlclJlY3RhbmdsZVdpZHRoO1xuXHRcdHZhciByYXRpb09mRGVzaXJlZEZvcm1hdCA9IGRlc2lyZWRGb3JtYXRIZWlnaHQgLyBkZXNpcmVkRm9ybWF0V2lkdGg7XG5cdFx0dmFyIGlubmVyUmVjdGFuZ2xlID0ge307XG5cblx0XHRpZiAocmF0aW9PZkRlc2lyZWRGb3JtYXQgPiByYXRpb09mT3V0ZXJSZWN0YW5nbGUpIHtcblx0XHQgICAgaW5uZXJSZWN0YW5nbGUuaGVpZ2h0ID0gb3V0ZXJSZWN0YW5nbGVIZWlnaHQ7XG5cdFx0ICAgIGlubmVyUmVjdGFuZ2xlLndpZHRoID0gZGVzaXJlZEZvcm1hdFdpZHRoICogKGlubmVyUmVjdGFuZ2xlLmhlaWdodCAvIGRlc2lyZWRGb3JtYXRIZWlnaHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0ICAgIGlubmVyUmVjdGFuZ2xlLndpZHRoID0gb3V0ZXJSZWN0YW5nbGVXaWR0aDtcblx0XHQgICAgaW5uZXJSZWN0YW5nbGUuaGVpZ2h0ID0gZGVzaXJlZEZvcm1hdEhlaWdodCAqIChpbm5lclJlY3RhbmdsZS53aWR0aCAvIGRlc2lyZWRGb3JtYXRXaWR0aCk7XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiBpbm5lclJlY3RhbmdsZTtcblx0ICAgIH1cblxuXG5cdCAgICBcblx0fSxcblx0Y29udHJvbGxlcjogZnVuY3Rpb24oJHNjb3BlKSB7XG5cdCAgJHNjb3BlLnByZXNlbnRhdGlvbkZvcm1hdCA9IHtcblx0ICAgICAgaGVpZ2h0OiA5LFxuXHQgICAgICB3aWR0aDogMTZcblx0ICB9O1xuXG5cdCAgICBcblx0ICAgIFxuXHR9XG5cblx0XG4gICAgfTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHByZXNlbnRhdGlvbk1vZHVsZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuYW5ndWxhci5tb2R1bGUoJ3BlcHBlci5zbGlkZScsIFtdKVxuXG4uZGlyZWN0aXZlKCdzbGlkZScsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG5cdHJlc3RyaWN0OiAnRScsXG5cdHRyYW5zY2x1ZGU6IHRydWUsXG5cdHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cInNsaWRlXCIgbmctdHJhbnNjbHVkZT48L2Rpdj4nLFxuXHRzY29wZTogdHJ1ZSxcblx0Y29udHJvbGxlcjogZnVuY3Rpb24oJHNjb3BlKSB7XG5cdCAgICAkc2NvcGUudGl0bGUgPSBcIlNsaWRlIHRpdGxlXCI7XG5cdH1cbiAgICB9O1xufSk7XG4iXX0=
