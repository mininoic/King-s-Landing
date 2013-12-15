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
        ivScroll = setInterval(dispatchScroll, 0);
    }

    var deactivateOnScroll = function() {
        clearInterval(ivScroll);
    }

    if ("ontouchstart" in window) {
        window.addEventListener("touchstart", activateOnScroll);
        window.addEventListener("touchmove", dispatchScroll);
        window.addEventListener("touchend", deactivateOnScroll);
    }
    var w = $(window);
    var tbh = topbar.height();
    var p4 = $('#post4');
    var p4b = p4.children('img.background');
    var p4o = p4.offset().top;
    window.addEventListener("scroll", function() {
        if (w.height()-w.scrollTop() <= tbh){
            topbar.addClass('top-bar-top');
        } else {
            topbar.removeClass('top-bar-top');
        }
        
        // p4b.css({
        //     clip: "rect("+
        //         (p4o-w.scrollTop())+"px,"+
        //         w.width()+"px,"+
        //         w.height()+"px,"+
        //         0+"px)"
        // })

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