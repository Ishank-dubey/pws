$(document).ready(function() {
   /* $('.aboutusSection').outerHeight($(window).
    		height()-$('header').outerHeight()+'px'); 
    console.log($(window).height());*/
	console.log($('body').outerHeight() - $('nav').outerHeight());
	var height = $('body').outerHeight() - $('nav').outerHeight();
	$('.aboutusSection').outerHeight(height);
});