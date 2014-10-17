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
