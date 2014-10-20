"use strict";

var presentation = require('./components/presentation/presentation.js');
var slide        = require('./components/slide/slide.js');
var uiPanel      = require('./components/uiPanel/uiPanel.js');

angular.module('pepper', ['pepper.presentation', 'pepper.slide', 'pepper.uiPanel']);
