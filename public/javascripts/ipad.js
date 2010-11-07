var ipad = {
	
	setiPadScroll: function() {
	    $('#bd').jScrollTouch();
	  },
	
	loadiPad: function() {
		ipad.setiPadScroll();
	},
	
};

$(document).ready(function() {
	ipad.loadiPad();
});