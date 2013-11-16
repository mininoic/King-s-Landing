$( document ).ready(function() {
    $.stellar({
  		horizontalScrolling: false,
  		positionProperty: 'transform'
    });
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
});