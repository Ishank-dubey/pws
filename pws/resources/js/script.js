(function ($, document, window) {
	$(document).ready(function() {
		$('#contact-form').on('submit', formsubmission);
		changeHeightOfSections(true);
		scrollFunction(window.location.hash);
		var timerId;
		
		$(window).resize(function(){
			if(timerId){
				clearTimeout(timerId);
			}
			timerId = setTimeout(changeHeightOfSections(false),100);
		});	
		function changeHeightOfSections(scroll) {
			var heightBody = $(window).height(),
			  height = heightBody - $('nav').outerHeight();
			$('.aboutusSection').outerHeight(height);
			/*$('.projectroadmapSection').outerHeight(heightBody);
			$('.contactUsSection').outerHeight(heightBody);*/
			
			if(scroll){
				var hlocation = window.location.hash;
		    	if (hlocation) {
		    		scrollFunction(hlocation);
		    	}
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
		
		function formsubmission(event){
			event.preventDefault();
			$.ajax({
				  type: "POST",
				  url: 'http://localhost:8090/contactus',
				  dataType:'json',
				  contentType:'application/json',
				  data: JSON.stringify({ foo: 'bar' }),
				  success: function(result) {
				    	$('.postMessegeStatus').text('Thank you! We will be in touch with you shortly');           
				    },
				  error : function (error){
					  $('.postMessegeStatus').text('Some Problem occured');
				  }  
				});
			$(event.target).find('input.btn').val('Sent!');
			
		}
		
		
		$("a").on('click', function (event){
			event.preventDefault();
			scrollFunction(this.hash);  
		      
		});	      
		
	});	
})(jQuery, document, window);
