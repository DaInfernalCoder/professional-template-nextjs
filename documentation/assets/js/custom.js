(function($) {
	"use strict";


	/*-----------------------------------------------------------------------------------*/
	/*	EFFECTS ON MENU TOGGLE
	/*-----------------------------------------------------------------------------------*/ 
	$('.nav-expander').on('click', function(e){
		e.preventDefault();	

		var menuHeight = $(".documentation-content").height();
		
		if ($(this).hasClass('menu-toggle-open')) {		
			$(this).removeClass('menu-toggle-open').addClass('menu-toggle-close');
			$('.navWrapper').animate({height:'0px'},{queue:false, duration:300}).addClass('menu-close');	
		} else {			
			$(this).removeClass('menu-toggle-close').addClass('menu-toggle-open');
			$('.navWrapper').animate({height: menuHeight},{queue:false, duration:300}).removeClass('menu-close');
		}
	});	

	

})(jQuery);
