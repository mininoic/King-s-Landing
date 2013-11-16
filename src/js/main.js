$( document ).ready(function() {
    $.stellar({
  		horizontalScrolling: false,
  		positionProperty: 'transform'
    });
    var preventDefault = function(selector){
    	$(selector).on("click", function (e) {
	        e.preventDefault();
	    });
    }
    preventDefault('.top-bar a');
    $(window).scroll(function(e){ 
		var topbar = $('.top-bar');
		if ($(this).height()-$(this).scrollTop() <= 53){ 
			topbar.css({'position': 'fixed', 'top': '0px'}); 
		} else {
			topbar.css({
				'position': 'absolute',
				'top': 'auto'
			});
		}
	});
	window.scrolltopost0 = function(){
    	$('html,body').animate({
    		scrollTop: $('#post0').offset().top-53
    	}, 500);
    		
    }

	window.scrolltopost1 = function(){
	//console.log('an');
		$('html,body').animate({
       		scrollTop: $('#post1').offset().top-53
   		}, 500);
    }

    window.scrolltopost2 = function(){
    	$('html,body').animate({
    		scrollTop: $('#post2').offset().top-53
    	}, 500);
    		
    }

    window.scrolltopost3 = function(){
    	$('html,body').animate({
    		scrollTop: $('#post3').offset().top-53
    	}, 500);
    		
    }

    window.scrolltopost4 = function(){
    	$('html,body').animate({
    		scrollTop: $('#post4').offset().top-53
    	}, 500);
    		
    }

});