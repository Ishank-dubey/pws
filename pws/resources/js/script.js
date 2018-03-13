$(document).ready(function() {
	
	
	changeHeightOfSections();
	scrollFunction(window.location.hash);
	var timerId;
	$(window).resize(function(){
		if(timerId){
			clearTimeout(timerId);
		}
		timerId = setTimeout(changeHeightOfSections,100)
	});	
	function changeHeightOfSections() {
		var heightBody = $('body').outerHeight(),
		height = heightBody - $('nav').outerHeight();
		$('.aboutusSection').outerHeight(height);
		$('.projectroadmapSection').outerHeight(heightBody);
		
		
			var hlocation = window.location.hash;
	    	if (hlocation) {
	    		scrollFunction(hlocation);
	    	}
		
		
	}
	
	function scrollFunction (hash) {
		if (hash !== "") {
			$('html, body').animate({
		        scrollTop: $(hash).offset().top - $('body').offset().top + $('body').scrollTop()
		      }, 800, function(){
		    	  window.location.hash = hash;
		        });   
		};
	}
	$("a").on('click', function (event){
		event.preventDefault();
		scrollFunction(this.hash);  
	      
	});	      
	
});