$(document).ready(function() {
	player = $f("ipad",
	  // Flash Configs
	  {
	     src: "flowplayer-3.2.5.swf",
	     wmode: 'opaque'
	  },
  	// Player Configs
  	{ 
    	// key: '#$45a5242c3cfddf0c3cb',

    	play: {opacity: 0},

    	canvas: {
   			background: '#000000',
   			backgroundGradient: 'none'
   		},

   		screen: {
   			backgroundColor: '#000000',
   			backgroundGradient: 'none'
   		},

    	plugins:  {
	      content: {
	   			// the only required property for dynamic loading
	   			url: 'flowplayer.content-3.2.0.swf',

	   			// some display properties
	   			height: 80,
	   			color: '#ffffff',
	   			backgroundColor: '#000000',
	   			backgroundGradient: [0.0, 0.0, 0.0],
	   			border: "none",
	   			opacity: 0.0,
	   			zIndex: 10
	   		},
	      controls: {
					// display properties
					bottom:0,
					height:24,
					zIndex:1,
					backgroundColor: '#1a1a1a',
					backgroundGradient: 'low',

					// controlbar-specific configuration
					fontColor: '#ffffff',
					timeFontColor: '#333333',
					autoHide: {
						enabled: true,
						fullscreenOnly: false,
						hideDelay: 1000
					},

					// which buttons are visible and which are not?
					play:true,
					volume:true,
					mute:false,
					time:false,
					stop:false,
					playlist:false,
					fullscreen:true,

					// scrubber is a well-known nickname for the timeline/playhead combination
					scrubber: true
	      }
    	},

	    clip: {
	      // url: "/videos/4/original/brian_fox_073109.f4v?1260914724",
	   		autoPlay: false,
	   		autoBuffering: true,
	   		fadeInSpeed: 5000,
	   		scaling: "orig",
	   		backgroundColor: '#000000'
	   	},
	
    	playlist: []

  	}).ipad();
	
});
