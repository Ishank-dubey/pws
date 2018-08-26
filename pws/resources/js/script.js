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
			var form = $('#contact-form'),
			body = {name:form.find('#contactUsName').val(),
			        organization : form.find('#contactUsOrganization').val(),
			        country : form.find('#country').val(),
			        contact : form.find('#contactUsContactNumber').val(),
			        email : form.find('#contactUsEmail').val(),
			        message : form.find('#contactUsMessage').val()};
			
			$.ajax({
				  type: "POST",
				  url: 'http://localhost:8090/contactus',
				  dataType:'text',
				  contentType: 'application/json',
				  data: JSON.stringify(body),
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
