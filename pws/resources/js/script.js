$(document).ready(function() {
    var heightBody = $('body').outerHeight(),
	height = heightBody - $('nav').outerHeight();
	$('.aboutusSection').outerHeight(height);
	$('.projectroadmapSection').outerHeight(heightBody);
});