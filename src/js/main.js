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

    

    var ivScroll;
    var evt = document.createEvent("Event");
    evt.initEvent("scroll", true, true);

    var dispatchScroll = function() {
        window.dispatchEvent(evt);
    };

    var activateOnScroll = function() {
        ivScroll = setInterval(dispatchScroll, 20);
    }

    var deactivateOnScroll = function() {
        clearInterval(ivScroll);
    }

    if ("ontouchstart" in window) {
        window.addEventListener("touchstart", activateOnScroll);
        window.addEventListener("touchmove", dispatchScroll);
        window.addEventListener("touchend", deactivateOnScroll);
    }

    window.addEventListener("scroll", function() {
        if ($(window).height()-$(window).scrollTop() <= topbar.height()){
            topbar.addClass('top-bar-top');
        } else {
            topbar.removeClass('top-bar-top');
        }

        $('img.background').each(function(){
            var p = $(this).parent();
            var top_offset = p.offset().top-$(window).scrollTop();
            var bot_offset = top_offset+p.outerHeight()-$(window).height();
            $(this).css({
                clip: "rect("+
                    top_offset+"px,"+
                    $(window).width()+"px,"+
                    $(window).height()+"px,"+
                    0+"px)"
            });
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