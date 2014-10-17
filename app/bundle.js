(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var presentation = require('./components/presentation/presentation.js');
var slide        = require('./components/slide/slide.js');

angular.module('pepper', ['pepper.presentation', 'pepper.slide']);

},{"./components/presentation/presentation.js":2,"./components/slide/slide.js":3}],2:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIiwiYXBwL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uL3ByZXNlbnRhdGlvbi5qcyIsImFwcC9jb21wb25lbnRzL3NsaWRlL3NsaWRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgcHJlc2VudGF0aW9uID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3ByZXNlbnRhdGlvbi9wcmVzZW50YXRpb24uanMnKTtcbnZhciBzbGlkZSAgICAgICAgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvc2xpZGUvc2xpZGUuanMnKTtcblxuYW5ndWxhci5tb2R1bGUoJ3BlcHBlcicsIFsncGVwcGVyLnByZXNlbnRhdGlvbicsICdwZXBwZXIuc2xpZGUnXSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmFuZ3VsYXIubW9kdWxlKCdwZXBwZXIucHJlc2VudGF0aW9uJywgW10pXG5cbi5kaXJlY3RpdmUoJ3ByZXNlbnRhdGlvbicsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG5cdHJlc3RyaWN0OiAnRScsXG5cdHRyYW5zY2x1ZGU6IHRydWUsXG5cdHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cInByZXNlbnRhdGlvblwiIG5nLXRyYW5zY2x1ZGU+PC9kaXY+Jyxcblx0Y29udHJvbGxlcjogZnVuY3Rpb24oJHNjb3BlKSB7XG5cdCAgICBcblx0fVxuICAgIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5hbmd1bGFyLm1vZHVsZSgncGVwcGVyLnNsaWRlJywgW10pXG5cbi5kaXJlY3RpdmUoJ3NsaWRlJywgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcblx0cmVzdHJpY3Q6ICdFJyxcblx0dHJhbnNjbHVkZTogdHJ1ZSxcblx0dGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwic2xpZGVcIiBuZy10cmFuc2NsdWRlPjwvZGl2PicsXG5cdHNjb3BlOiB0cnVlLFxuXHRjb250cm9sbGVyOiBmdW5jdGlvbigkc2NvcGUpIHtcblx0ICAgICRzY29wZS50aXRsZSA9IFwiU2xpZGUgdGl0bGVcIjtcblx0fVxuICAgIH07XG59KTtcbiJdfQ==
