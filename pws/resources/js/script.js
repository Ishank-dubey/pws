(function ($, document, window) {
	$(document).ready(function() {
		$('#contact-form').on('submit', formsubmission);
		changeHeightOfSections(true);
		scrollFunction(window.location.hash);
		var timerId;
		$(window).scroll(function() {
		    checkScroll($(this));
		    });
		$(window).resize(function(){
			if(timerId){
				clearTimeout(timerId);
			}
			timerId = setTimeout(changeHeightOfSections(false),100);
		});	
		function checkScroll ($window) {
			if ( $window.scrollTop() > $window.height()/2 ){
				$('#scroll-to-top').css('display','block');
		      }else {
		    	  $('#scroll-to-top').css('display','none');  
		      }
		}
		function changeHeightOfSections(scroll) {
			var heightBody = $(window).height(),
			  height = heightBody - $('nav').outerHeight();
			$('.aboutusSection').outerHeight(height);
			$('.projectroadmapSection').outerHeight(heightBody);
			$('.contactUsSection').outerHeight(heightBody);
			
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
			    	  checkScroll($(window)) 
			        });   
			};
		}
		
		function formsubmission(event){
			event.preventDefault();
			console.log(this.contactUsMessage.value);
			$('.postMessegeStatus').text('Thank you! We will be in touch with you shortly');
		}
		
		
		$("a").on('click', function (event){
			event.preventDefault();
			scrollFunction(this.hash);  
		      
		});	      
		
	});	
})(jQuery, document, window);
