/*jslint white: false, onevar: false, browser: true, devel: true, undef: true, nomen: true, laxbreak: true, eqeqeq: true, plusplus: true, bitwise: true, regexp: true, strict: false, newcap: true, immed: true, laxbreak: true */
/*global jQuery, $, Raphael */

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
      var pagehref = $(this).attr("hash");
      e.preventDefault();
			nav.resetActive();
			$(this).addClass('active');
      $('#bd').scrollTo($(pagehref), 800);
    });
    
  },
  
  boxNavToggle: function() {
    var $bnTrigger = $('#elements .element.color_box .content_bottom_section a');
    
    $bnTrigger.click(function(e) {
	    var boxhref = $(this).attr("hash");
			var icon = $(this).attr("parent_box");
			
			if ($(this).hasClass('reg_video_trigger')) {
				app.eventHandler(e);
				video.triggerVideo($(this));
			} else {
				app.eventHandler(e);
				nav.setActiveIconNav(icon);
				nav.setActiveSubNav(boxhref);
	      scroll.setScroll(boxhref);
			}
    });
    
  },

	nextTriggers: function() {
		var nTrigger = $("#elements a.next_element_trigger");
		nTrigger.live('click', function(e) {
			var boxhref = $(this).attr("hash");
			var icon = $(this).attr("parent_box");			
			app.eventHandler(e);
			
			nav.setActiveIconNav(icon);
			nav.setActiveSubNav(boxhref);
      scroll.setScroll(boxhref);
		});
	},
  
  subNavToggle: function() {
    var $snTrigger = $('#sub_nav li a');
    
    $snTrigger.click(function(e) {				
			e.preventDefault();
			nav.resetActive();
						
			if ($(this).hasClass("sub_nav_video_trigger")) {
				$(this).addClass('active');
				video.triggerVideo($(this));
			} else {
				var subhref = $(this).attr("hash");
				var icon = $(this).attr("parent_box");
				nav.setActiveIconNav(icon);
	      scroll.setScroll(subhref);
			}
    });
    
  },
  
  iconNavToggle: function() {
    var $iconTrigger = $('#icon_nav ul li a');
    
    $iconTrigger.click(function(e) {
			e.preventDefault();
      var panelhref = $(this).attr("hash");
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
			var pagehref = $(this).attr("hash");
			e.preventDefault();
			scroll.setScroll(pagehref);
		});
		
	},
	
	elementBackDemoTriggers: function() {
		var $rdTrigger = $('#elements a.demo');
		
		$rdTrigger.live('click', function(e) {
			var pagehref = $(this).attr("hash");
			var demoLink = $("#rDemo");
      e.preventDefault();
			e.stopPropagation();
			nav.resetActive();
			demoLink.addClass('active');
      $('#bd').scrollTo($(pagehref), 800);
		});
		
	},
	
	microTriggers: function() {
		var $microLink = $('.micro_link');
		
		$microLink.click(function(e) {
			e.preventDefault();
			var pagehref = $(this).attr("hash");
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
		var $element = $(".element.active_element");
		
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
	
	setScroll: function(l) {
		var el = $(l);
		
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
		scroll.elementBackDemoTriggers();
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
		}, 1000);
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
	
	liveVideoTrigger: function() {
		var $trigger = $('.video_trigger');	
		$trigger.live("click", function(e) {
			app.eventHandler(e);
			video.triggerVideo($(this));
		});
	},
	
	triggerVideo: function(el) {
				
		el.overlay({	 
		 expose: {
		  color: '#000',
		  opacity: 0.85,
		  closeSpeed: 700
		 },

		 onLoad: function() {
		  var v = this.getTrigger().attr("href");
		 	player.load().play(v);
		 },

		 onClose: function() {
			player.pause();
		  player.unload();
		 }
		});
	},
	
	loadVideoTriggers: function() {
		video.liveVideoTrigger();
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
	
	eventHandler: function(e) {
		e.preventDefault();
	  if (!e)
	    e = window.event;

	  if (e.cancelBubble)
	    e.cancelBubble = true;
	  else
	    e.stopPropagation();
	},
	
	setTips: function() {
	  $('.micro_element_box').tipTip({
	    defaultPosition: 'top'
	  });
	},
	
	formValidation: function() {
	  $('#pf')
	    .bind('formIsValid', function(event, form) {
        //do whatever when the form is valid
        //form - the form that is valid (jQuery Object)
        app.launchFormThankYouModal();
      })
      .ketchup();
	},
	
	launchFormThankYouModal: function() {
	  $("#coming_soon").overlay({

    	// custom top position
    	top: 260,

      expose: {
 		  color: '#000',
 		  opacity: 0.85,
 		  closeSpeed: 700
 		 },

    	// disable this for modal dialog-type of overlays
    	closeOnClick: false,

    	// load it immediately after the construction
    	load: true

    });
	},
	
	loadCoreFunctions: function() {
		app.setBodyHeight();
		app.dynamicBodyHeight();
    app.setTips();
		app.formValidation();
		scroll.loadTriggers();
		video.loadVideoTriggers();
	}
	
};