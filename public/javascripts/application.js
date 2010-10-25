var flash = {
	
	injectFlashBox: function () {
		$('#flash').addClass("flash_wrap");
		$("#flash").hide();
	},
	
	setFlash: function(){
	 	flash_message = $("#flash").html();
  	msg = $.trim(flash_message);
   	if(msg != "") {
  		flash.activateNotice(flash_message);
  	};
	},
	
	activateNotice: function (flash_message) {
		var $flash_div = $("#flash");
	 	$flash_div.html(flash_message);
	 	$flash_div.show("slide", {direction: 'up'});
		// Set the fadeout
		setTimeout(function() {
	  $flash_div.hide("slide", {direction: 'up'},
		  function() {
		   $flash_div.html("");
		   $flash_div.hide()})},
		 	2500);
	}
	
};

var nav = {
	
	setNavHover: function() {
		// get all <li> nav elements
		var $nav_list = $('#main_nav ul li');
		
		// get all anchors in the <li>
		var $anchors = $nav_list.find('a');
		
		// remove all highlight classes that are for non js browsers
		$nav_list.removeClass('highlight');
		
		// dynamically add a span tag to each anchor that will have the hover CSS state
		$anchors.append('<span class="hover" />');
		
		$anchors.each(function() {
			
			// reduce the font size for FF
			$(this).css({fontSize : 0});
			
			// set all spans to invisible
      var $span2 = $('> span.hover', this).css({opacity : 0});

			// trigger the hover on each anchor to fade in the span with hover state
      $(this).hover(function() {
        if ($(this).hasClass('active')) {
          $span2.stop().fadeTo(500, 0);
        } else {
         $span2.stop().fadeTo(500, 1); 
        }
      }, function() {
        $span2.stop().fadeTo(500, 0);
    	});
			
			// Adds the active class to the clicked anchor
    	$(this).click( function() {
      	$span2.fadeTo(200, 0);
      	$anchors.removeClass('active');
      	$(this).addClass('active');
    	});

		});
	},
	
	setInitialNav: function() {
		// Get the current browser URL
		var url = location.pathname;
		
		// Find the link that matches the URL and add the active class
	  var $current_link = $('#main_nav ul li a[href$="' + url + '"]');
	  if (url == "/") {
	  	$current_link.removeClass('active');
	    $('#nav1 li').addClass('active');
	  } else {
	   current_link.addClass('active');
	  }
	}
	
};

var app = {
	
	setBodyHeight: function() {
	 var $bd = $('#bd');
	 var h = $(window).height() - 158;
	 var w = $(window).width();
	 $bd.css({width:w,height:h});
	},
	
	dynamicBodyHeight: function() {
	  var $bd = $('#bd');
	  $(window).resize(function() {
	    $bd.css({width:$(this).width() ,height:$(this).height() - 158 });
	  });
	 
	},
	
	loadCoreFunctions: function() {
		// nav.setNavHover();
		flash.injectFlashBox();
		flash.setFlash();
		app.setBodyHeight();
		app.dynamicBodyHeight();
	}
	
};