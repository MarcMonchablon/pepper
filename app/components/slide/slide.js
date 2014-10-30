'use strict';

angular.module('pepper.slide', ['ngSanitize'])

.directive('slide', function() {
    return {
	restrict: 'E',
	transclude: true,
	template: '<div class="slide">'+
	    '<textarea class="contentWriterZone" ng-model="contentInHTML">Writer Zone</textarea>'+
	    '<div class="contentRenderZone" ng-bind-html="contentInHTML">Render Zone</div>'+
	    '</div>',
	scope: true,
	link: function(scope, element) {
	    var writerZone = element.find('.contentWriterZone');
	    var renderZone = element.find('.contentRenderZone');

	    writerZone.html(scope.contentInHTML);
	    renderZone.html(scope.contentInHTML);
	    
	},
	controller: function($scope) {
	    $scope.title = "Slide title";
	    $scope.contentInHTML = '<h1><i class="fa fa-cube"></i>Slide Title</h1>'+
		'<ul>'+
		'<li>Gnip</li>'+
		'<li>Gnop</li>'+
		'<li>Glup</li>'+
		'<li>Gnark</li>'+
		'<li>Muf</li>'+
		'</ul>';
	}
    };
});
