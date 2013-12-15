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
    
    var topbar = $('.top-bar');
    
    $(window).scroll(function(e){ 
		
		if ($(this).height()-$(this).scrollTop() <= topbar.height()){
            topbar.addClass('top-bar-top');
		} else {
            topbar.removeClass('top-bar-top');
		}

        $('img.background').each(function(){
            var p = $(this).parent();
            var top_offset = p.offset().top-$(window).scrollTop();
            var bot_offset = top_offset+p.outerHeight()-$(window).height();
            if(top_offset>=0) {
                $(this).css({
                    top: top_offset
                });
                console.log($(this).css('top'));
            } else {
                $(this).css({
                    top: 0
                })
                $(this).css('top');
            } 
        })

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