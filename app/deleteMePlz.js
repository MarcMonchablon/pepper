(function() {

    adjustSlideSize();
    function adjustSlideSize() {
	var slide = $('.slide');
	var presentation = $('.presentation');
	var desiredFormat = {};
	desiredFormat.height = function() {return 9;};
	desiredFormat.width = function() {return 16;};

	var maximumRectangle = computeMaximumRectangle(presentation, desiredFormat);
	slide.height(maximumRectangle.height);
	slide.width(maximumRectangle.width);
	
	centerSlideInPresentation(slide, presentation);
    }

    function computeMaximumRectangle(outerRectangle, desiredFormat) {
	var ratioOfOuterRectangle = outerRectangle.height() / outerRectangle.width();
	var ratioOfDesiredFormat = desiredFormat.height() / desiredFormat.width();
	var innerRectangle = {};

	if (ratioOfDesiredFormat > ratioOfOuterRectangle) {
	    innerRectangle.height = outerRectangle.height();
	    innerRectangle.width = desiredFormat.width() * (innerRectangle.height / desiredFormat.height());
	} else {
	    innerRectangle.width = outerRectangle.width();
	    innerRectangle.height = desiredFormat.height() * (innerRectangle.width / desiredFormat.width());
	}

	return innerRectangle;
    }

    function centerSlideInPresentation(slide, presentation) {
	var leftMargin = (presentation.width() - slide.width()) / 2;
	var topMargin = (presentation.height() - slide.height()) / 2;

	presentation.css('padding-left', leftMargin + 'px');
	presentation.css('padding-top', topMargin + 'px');
    }
    
})();
