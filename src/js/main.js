$( document ).ready(function() {
    // $.stellar({
  		// horizontalScrolling: false,
  		// positionProperty: 'transform'
    // });
    var preventDefault = function(selector){
    	$(selector).on("click", function (e) {
	        e.preventDefault();
	    });
    }
    preventDefault('.top-bar a');
    
    var topbar = $('.top-bar');
    
    $(window).scroll(function(e){ 
		
		if ($(this).height()-$(this).scrollTop() <= topbar.height()){
            topbar.addClass('top-bar-top');
		} else {
            topbar.removeClass('top-bar-top');
		}

	});

    $('.button.menu').click(function(){
        if (topbar.height() == 53) {
            topbar.animate({
                height: topbar[0].scrollHeight+'px'
            }, 300);
        } else {
            topbar.animate({
                height: "53px"
            }, 300);
        }
    })

    window.scrolltopost = function(data){
        $('html,body').animate({
            scrollTop: $('[data-slide='+data+']').offset().top-53
        }, 500);
    }

});