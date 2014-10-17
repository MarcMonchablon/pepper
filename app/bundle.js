(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var presentation = require('./components/presentation/presentation.js');
var slide        = require('./components/slide/slide.js');

angular.module('pepper', ['pepper.presentation', 'pepper.slide']);

},{"./components/presentation/presentation.js":3,"./components/slide/slide.js":4}],2:[function(require,module,exports){
'use strict';

module.exports = expandBoxToFormat;

function expandBoxToFormat(innerBox, outerBox, desiredFormatHeight, desiredFormatWidth) {
    var maximumRectangle = computeMaximumRectangle(outerBox.height(),
						   outerBox.width(),
						   desiredFormatHeight,
						   desiredFormatWidth);
    adjustInnerBoxSize(innerBox, maximumRectangle);
    centerInnerBox(innerBox, outerBox);
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

function adjustInnerBoxSize(innerBox, maximumRectangle) {
    innerBox.height(maximumRectangle.height);
    innerBox.width(maximumRectangle.width);
}


function centerInnerBox(innerBox, outerBox) {
    var leftMargin = (outerBox.width() - innerBox.width()) / 2;
    var topMargin = (outerBox.height() - innerBox.height()) / 2;
    outerBox.css('padding-left', leftMargin + 'px');
    outerBox.css('padding-top', topMargin + 'px');
}

},{}],3:[function(require,module,exports){
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

},{"./expandBoxToFormat.js":2}],4:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIiwiYXBwL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uL2V4cGFuZEJveFRvRm9ybWF0LmpzIiwiYXBwL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uL3ByZXNlbnRhdGlvbi5qcyIsImFwcC9jb21wb25lbnRzL3NsaWRlL3NsaWRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgcHJlc2VudGF0aW9uID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3ByZXNlbnRhdGlvbi9wcmVzZW50YXRpb24uanMnKTtcbnZhciBzbGlkZSAgICAgICAgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvc2xpZGUvc2xpZGUuanMnKTtcblxuYW5ndWxhci5tb2R1bGUoJ3BlcHBlcicsIFsncGVwcGVyLnByZXNlbnRhdGlvbicsICdwZXBwZXIuc2xpZGUnXSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwYW5kQm94VG9Gb3JtYXQ7XG5cbmZ1bmN0aW9uIGV4cGFuZEJveFRvRm9ybWF0KGlubmVyQm94LCBvdXRlckJveCwgZGVzaXJlZEZvcm1hdEhlaWdodCwgZGVzaXJlZEZvcm1hdFdpZHRoKSB7XG4gICAgdmFyIG1heGltdW1SZWN0YW5nbGUgPSBjb21wdXRlTWF4aW11bVJlY3RhbmdsZShvdXRlckJveC5oZWlnaHQoKSxcblx0XHRcdFx0XHRcdCAgIG91dGVyQm94LndpZHRoKCksXG5cdFx0XHRcdFx0XHQgICBkZXNpcmVkRm9ybWF0SGVpZ2h0LFxuXHRcdFx0XHRcdFx0ICAgZGVzaXJlZEZvcm1hdFdpZHRoKTtcbiAgICBhZGp1c3RJbm5lckJveFNpemUoaW5uZXJCb3gsIG1heGltdW1SZWN0YW5nbGUpO1xuICAgIGNlbnRlcklubmVyQm94KGlubmVyQm94LCBvdXRlckJveCk7XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVNYXhpbXVtUmVjdGFuZ2xlKG91dGVyUmVjdGFuZ2xlSGVpZ2h0LCBvdXRlclJlY3RhbmdsZVdpZHRoLCBkZXNpcmVkRm9ybWF0SGVpZ2h0LCBkZXNpcmVkRm9ybWF0V2lkdGgpIHtcbiAgICB2YXIgcmF0aW9PZk91dGVyUmVjdGFuZ2xlID0gb3V0ZXJSZWN0YW5nbGVIZWlnaHQgLyBvdXRlclJlY3RhbmdsZVdpZHRoO1xuICAgIHZhciByYXRpb09mRGVzaXJlZEZvcm1hdCA9IGRlc2lyZWRGb3JtYXRIZWlnaHQgLyBkZXNpcmVkRm9ybWF0V2lkdGg7XG4gICAgdmFyIGlubmVyUmVjdGFuZ2xlID0ge307XG5cbiAgICBpZiAocmF0aW9PZkRlc2lyZWRGb3JtYXQgPiByYXRpb09mT3V0ZXJSZWN0YW5nbGUpIHtcblx0aW5uZXJSZWN0YW5nbGUuaGVpZ2h0ID0gb3V0ZXJSZWN0YW5nbGVIZWlnaHQ7XG5cdGlubmVyUmVjdGFuZ2xlLndpZHRoID0gZGVzaXJlZEZvcm1hdFdpZHRoICogKGlubmVyUmVjdGFuZ2xlLmhlaWdodCAvIGRlc2lyZWRGb3JtYXRIZWlnaHQpO1xuICAgIH0gZWxzZSB7XG5cdGlubmVyUmVjdGFuZ2xlLndpZHRoID0gb3V0ZXJSZWN0YW5nbGVXaWR0aDtcblx0aW5uZXJSZWN0YW5nbGUuaGVpZ2h0ID0gZGVzaXJlZEZvcm1hdEhlaWdodCAqIChpbm5lclJlY3RhbmdsZS53aWR0aCAvIGRlc2lyZWRGb3JtYXRXaWR0aCk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBpbm5lclJlY3RhbmdsZTtcbn1cblxuZnVuY3Rpb24gYWRqdXN0SW5uZXJCb3hTaXplKGlubmVyQm94LCBtYXhpbXVtUmVjdGFuZ2xlKSB7XG4gICAgaW5uZXJCb3guaGVpZ2h0KG1heGltdW1SZWN0YW5nbGUuaGVpZ2h0KTtcbiAgICBpbm5lckJveC53aWR0aChtYXhpbXVtUmVjdGFuZ2xlLndpZHRoKTtcbn1cblxuXG5mdW5jdGlvbiBjZW50ZXJJbm5lckJveChpbm5lckJveCwgb3V0ZXJCb3gpIHtcbiAgICB2YXIgbGVmdE1hcmdpbiA9IChvdXRlckJveC53aWR0aCgpIC0gaW5uZXJCb3gud2lkdGgoKSkgLyAyO1xuICAgIHZhciB0b3BNYXJnaW4gPSAob3V0ZXJCb3guaGVpZ2h0KCkgLSBpbm5lckJveC5oZWlnaHQoKSkgLyAyO1xuICAgIG91dGVyQm94LmNzcygncGFkZGluZy1sZWZ0JywgbGVmdE1hcmdpbiArICdweCcpO1xuICAgIG91dGVyQm94LmNzcygncGFkZGluZy10b3AnLCB0b3BNYXJnaW4gKyAncHgnKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGV4cGFuZEJveFRvRm9ybWF0ID0gcmVxdWlyZSgnLi9leHBhbmRCb3hUb0Zvcm1hdC5qcycpO1xuXG52YXIgcHJlc2VudGF0aW9uTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3BlcHBlci5wcmVzZW50YXRpb24nLCBbXSlcbi5kaXJlY3RpdmUoJ3ByZXNlbnRhdGlvbicsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG5cdHJlc3RyaWN0OiAnRScsXG5cdHRyYW5zY2x1ZGU6IHRydWUsXG5cdHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cInByZXNlbnRhdGlvblwiIG5nLXRyYW5zY2x1ZGU+PC9kaXY+Jyxcblx0bGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQpIHtcblx0ICAgIHZhciBwcmVzZW50YXRpb24gPSAkKCcucHJlc2VudGF0aW9uJyk7XG5cdCAgICB2YXIgc2xpZGUgPSAkKCcuc2xpZGUnKTtcblxuXHQgICAgZXhwYW5kQm94VG9Gb3JtYXQoc2xpZGUsXG5cdFx0XHQgICAgICBwcmVzZW50YXRpb24sXG5cdFx0XHQgICAgICBzY29wZS5wcmVzZW50YXRpb25Gb3JtYXQuaGVpZ2h0LFxuXHRcdFx0ICAgICAgc2NvcGUucHJlc2VudGF0aW9uRm9ybWF0LndpZHRoKTtcblx0fSxcblx0Y29udHJvbGxlcjogZnVuY3Rpb24oJHNjb3BlKSB7XG5cdCAgJHNjb3BlLnByZXNlbnRhdGlvbkZvcm1hdCA9IHtcblx0ICAgICAgaGVpZ2h0OiA5LFxuXHQgICAgICB3aWR0aDogMTZcblx0ICB9O1xuXHR9XG4gICAgfTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHByZXNlbnRhdGlvbk1vZHVsZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuYW5ndWxhci5tb2R1bGUoJ3BlcHBlci5zbGlkZScsIFtdKVxuXG4uZGlyZWN0aXZlKCdzbGlkZScsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG5cdHJlc3RyaWN0OiAnRScsXG5cdHRyYW5zY2x1ZGU6IHRydWUsXG5cdHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cInNsaWRlXCIgbmctdHJhbnNjbHVkZT48L2Rpdj4nLFxuXHRzY29wZTogdHJ1ZSxcblx0Y29udHJvbGxlcjogZnVuY3Rpb24oJHNjb3BlKSB7XG5cdCAgICAkc2NvcGUudGl0bGUgPSBcIlNsaWRlIHRpdGxlXCI7XG5cdH1cbiAgICB9O1xufSk7XG4iXX0=
