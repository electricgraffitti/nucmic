var nav = {
	
	resetActive: function() {
		var $a = $("#hd a");		
		$a.removeClass("active");
	},
	
	resetSubNavDisplay: function() {
		var sn = $("#sub_nav ul");
		sn.removeClass('active');
	},
	
	setSubNav: function(color) {
		var $subNav = $("#sub_nav");
    var $subNavList = $subNav.children('ul.' + color);
    $subNav.removeClass();
    $subNav.addClass(color);
    $subNav.children('ul').hide();
    $subNavList.show();
	},
	
	setActiveTopNav: function(eid) {
		nav.resetActive();
		var $tNav = $("#top_nav");
		var n = $tNav.find("a[href=" + eid + "]");
	},
	
	setActiveIconNav: function(eid) {
		var $iNav = $("#icon_nav");
		var n = $iNav.find("a[href=" + eid + "]");
		var color = n.attr("trigger_color");
		nav.resetActive();
		nav.resetSubNavDisplay();
		nav.setSubNav(color);
		n.addClass('active');
	},
	
	setActiveSubNav: function(eid) {
		var $sNav = $("#sub_nav");
		var n = $sNav.find("a[href=" + eid + "]");
		$sNav.find("a").removeClass("active");
		n.addClass('active');
	}	
};

var scroll = {
  
  topNavToggle: function() {
    var $tnTrigger = $('#top_nav a.page_trigger');
    
    $tnTrigger.click(function(e) {
      var pagehref = $(this).attr("href");
      e.preventDefault();
			nav.resetActive();
			$(this).addClass('active');
      $('#bd').scrollTo($(pagehref), 800);
    });
    
  },
  
  boxNavToggle: function() {
    var $bnTrigger = $('#elements .element.color_box .content_bottom_section a');
    
    $bnTrigger.click(function(e) {
	    var boxhref = $(this).attr("href");
			var icon = $(this).attr("parent_box");
			
			e.preventDefault();
			e.stopPropagation();

			nav.setActiveIconNav(icon);
			nav.setActiveSubNav(boxhref);
      scroll.setScroll(boxhref);

    });
    
  },

	nextTriggers: function() {
		var nTrigger = $("#elements a.next_element_trigger");
		nTrigger.live("click", function(e) {
			var boxhref = $(this).attr("href");
			var icon = $(this).attr("parent_box");
			
			e.preventDefault();
			e.stopPropagation();

			nav.setActiveIconNav(icon);
			nav.setActiveSubNav(boxhref);
      scroll.setScroll(boxhref);
		});
	},
  
  subNavToggle: function() {
    var $snTrigger = $('#sub_nav li a');
    
    $snTrigger.click(function(e) {
      var subhref = $(this).attr("href");
			var icon = $(this).attr("parent_box");
			
      e.preventDefault();
			nav.resetActive();
			
			nav.setActiveIconNav(icon);
      scroll.setScroll(subhref);
    });
    
  },
  
  iconNavToggle: function() {
    var $iconTrigger = $('#icon_nav ul li a');
    
    $iconTrigger.click(function(e) {
			e.preventDefault();
      var panelhref = $(this).attr("href");
			var colorChip = $(this).attr('trigger_color');
			nav.resetActive();
			nav.setSubNav(colorChip);
	    $(this).addClass('active');
      scroll.setScroll(panelhref);
    });
  },
  
	homeNavToggle: function() {
		var $homeLink = $('.home_link');
		
		$homeLink.click(function(e) {
			var pagehref = $(this).attr("href");
			e.preventDefault();
			scroll.setScroll(pagehref);
		});
		
	},
	
	microTriggers: function() {
		var $microLink = $('.micro_link');
		
		$microLink.click(function(e) {
			e.preventDefault();
			var pagehref = $(this).attr("href");
			var icon = $(this).attr("parent_box");
			
			if ($(this).hasClass("color_box")) {
				nav.setActiveIconNav(pagehref);
			} else {
				nav.setActiveIconNav(icon);
				nav.setActiveSubNav(pagehref);
			}
			
			scroll.setScroll(pagehref);
		});
	},

	elementTriggers: function() {
		var $element = $(".element");
		
		$element.click(function() {
			var eid = "#" + $(this).attr("id");
			var icon = $(this).attr("parent_box");
			
			if ($(this).hasClass("color_box")) {
				nav.setActiveIconNav(eid);
			} else {
				nav.setActiveIconNav(icon);
				nav.setActiveSubNav(eid);
			}
			
			scroll.setScroll(eid);
			
		});
		
	},
	
	setScroll: function(link) {
		var el = $(link);
		
		if (el.hasClass("flipped")) {
			return false;
		} else {
			$('#bd').scrollTo(el, 800);
			flip.setAutoFlip(el);
		}
	},

  loadTriggers: function() {
    scroll.iconNavToggle();
    scroll.topNavToggle(); 
    scroll.boxNavToggle();
    scroll.subNavToggle();
		scroll.homeNavToggle();
		scroll.microTriggers();
		scroll.elementTriggers();
		scroll.nextTriggers();
  }
  
};

var flip = {
	
	setAutoFlip: function(el) {
		window.setTimeout(function() {
			if (el.hasClass("color_box")) {
				flip.revertFlipped(el);
				return false;
			} else {
				flip.autoFlip(el);
			}
		}, 2000);
	},
	
	revertFlipped: function() {
		var el = $("#elements .element.flipped");
		var $flipPanel = el.children('.element_front');
		$flipPanel.revertFlip();
		el.removeClass('flipped');
	},
	
	autoFlip: function(el) {
		var $flipPanel = el.children('.element_front');
    var $flipContent = $flipPanel.siblings('.element_back');
		
		flip.revertFlipped(el);

    $flipPanel.flip({
      direction:'lr',
      speed:350,
      content:$flipContent,
      color:'#ffffff'
    });
    el.addClass('flipped');
	}
  
};

var video = {
	
	setFlowPlayer: function() {
		flowplayer(
			// The Player div passed in from args
			"player",
			
			// The path to the flowplayer swf
			"/flowplayer-3.2.5.swf",
			
			// Video URL from args
			"/videos/meet_nucleus.f4v",
			
			// Config Options
			{
				
				
			});
	},
	
	triggerVideo: function() {
		var $trigger = $('.video_trigger');
		$trigger.live('click', function(e) {
		  player.load();
		  player.play();
		  return false;
		});
		
	}
	
};

var player = $f("player", 
		// Flash Configs
		{
		  src: "/flowplayer-3.2.5.swf",
		  wmode: "transparent",
		  bgcolor: "none"
		}, 
		//  Player Configs
		{
		  // key: '#$45a5242c3cfddf0c3cb',
		  play: {opacity: 0},
		  clip: {
		    url: "/videos/meet_nucleus.f4v",
		    autoPlay: true,
		    backgroundColor: 'transparent',
    
		    onLoad: function() {
					player.play();
				},
    
		    // onPause: function(){ 
		    //   player.hide();
		    //   document.getElementById("nucleus_main_video").style.display="none";
		    // },
		    // 
		    // onStop: function(){ 
		    //   player.hide();
		    //   document.getElementById("nucleus_main_video").style.display="none";
		    // },
		    // 
		    // onFinish: function(){ 
		    //   player.hide();
		    //   document.getElementById("nucleus_main_video").style.display="none";
		    // }
    
		  },
		  play: { 
		      label: null
		  },
		  plugins:  { 
		    controls: null 
		  }
});

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
		video.triggerVideo();
	}
	
};