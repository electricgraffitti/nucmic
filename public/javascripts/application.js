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

var scroll = {
  
  topNavToggle: function() {
    var $tnTrigger = $('#top_nav a.page_trigger');
    
    $tnTrigger.click(function(e) {
      var pagehref = $(this).attr("href");
      e.preventDefault();
      $('#bd').scrollTo($(pagehref), 800);
    });
    
  },
  
  boxNavToggle: function() {
    var $bnTrigger = $('#elements .content_right a');
    
    $bnTrigger.click(function(e) {
      var boxhref = $(this).attr("href");
      e.preventDefault();
      $('#bd').scrollTo($(boxhref), 800);
    });
    
  },
  
  subNavToggle: function() {
    var $snTrigger = $('#sub_nav li a');
    
    $snTrigger.click(function(e) {
      var subhref = $(this).attr("href");
      e.preventDefault();
      $('#bd').scrollTo($(subhref), 800);
    });
    
  },
  
  iconNavToggle: function() {
    var $iconTrigger = $('#icon_nav li a');
    
    $iconTrigger.click(function(e) {
      var panelhref = $(this).attr("href");
      e.preventDefault();
      $('#bd').scrollTo($(panelhref), 800);
    });
  },
  
  setSubNavColor: function() {
    var $iconNavTriggers = $('#icon_nav ul li a');
    
    var $subNav = $('#sub_nav');
    
    $iconNavTriggers.click(function(e) {
      e.preventDefault();
      var colorChip = $(this).attr('trigger_color');
      var $subNavList = $subNav.children('ul.' + colorChip);
      $(this).parents('#icon_nav').find('a').removeClass('active');
      $(this).addClass('active');
      $subNav.removeClass();
      $subNav.addClass(colorChip);
      $subNav.children('ul').hide();
      $subNavList.show();
      
    });
  },
  
	homeNavToggle: function() {
		var $homeLink = $('.home_link');
		
		$homeLink.click(function(e) {
			var pagehref = $(this).attr("href");
			e.preventDefault();
			$('#bd').scrollTo($(pagehref), 800);
		});
		
	},
	
	microTriggers: function() {
		var $microLink = $('.micro_link');
		
		$microLink.click(function(e) {
			var pagehref = $(this).attr("href");
			e.preventDefault();
			$('#bd').scrollTo($(pagehref), 800);
		});
	},

  loadTriggers: function() {
    scroll.iconNavToggle();
    scroll.topNavToggle(); 
    scroll.boxNavToggle();
    scroll.subNavToggle();
    scroll.setSubNavColor();
		scroll.homeNavToggle();
		scroll.microTriggers();
  }
  
};

var flip = {
  
  flipElement: function() {
    var $element = $('.element_front');
    $element.click(function(e) {
			if( $(e.target).hasClass('no_prop') ) return false; 
			
      var $parentBox = $(this).parent('.element');
      var $flipContent = $(this).siblings('.element_back');
      if ($parentBox.hasClass('flipped')) {
        $(this).revertFlip();
        $parentBox.removeClass('flipped'); 
      } else {
        $(this).flip({
          direction:'lr',
          speed:350,
          content:$flipContent,
          color:'#ffffff'
        });
        $parentBox.addClass('flipped');
      }

    });
  },
  
  loadFlips: function() {
   flip.flipElement();  
  }
  
};

var video = {
	
	setFlowPlayer: function(d,l) {
		flowplayer(
			// The Player div passed in from args
			d,
			
			// The path to the flowplayer swf
			"/flowplayer-3.2.5.swf",
			
			// Video URL from args
			l,
			
			// Config Options
			{
				
				
			});
	},
	
	triggerVideo: function() {
		var $trigger = $('.video_trigger');
		var $video_div = $trigger.attr('video_panel');
		
		$trigger.live('click', function(e) {
			
		});
		
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
	    $bd.css({width:$(this).width(), height:$(this).height() - 158 });
	  });
	 
	},
	
	setTips: function() {
	  $('.micro_element_box').tipTip({
	    defaultPosition: 'top'
	  });
	  
	 
	},
	
	formValidation: function() {
	  $('#pf').ketchup();
	 
	},
	
	loadCoreFunctions: function() {
		app.setBodyHeight();
		app.dynamicBodyHeight();
    app.setTips();
		app.formValidation();
		scroll.loadTriggers();
		flip.loadFlips();
		video.triggerVideo();
	}
	
};