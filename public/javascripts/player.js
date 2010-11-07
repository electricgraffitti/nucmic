$(document).ready(function() {
	player = $f("player",
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
	        sliderGradient: 'none',
	        tooltipColor: '#5F747C',
	        borderRadius: '0px',
	        volumeSliderGradient: 'none',
	        bufferColor: '#ffffff',
	        progressColor: '#0b471d',
	        progressGradient: 'medium',
	        timeBgColor: '#555555',
	        durationColor: '#ffffff',
	        buttonOverColor: '#728B94',
	        sliderColor: '#000000',
	        volumeSliderColor: '#000000',
	        buttonColor: '#3d4c43',
	        bufferGradient: 'none',
	        timeColor: '#051a0b',
	        backgroundColor: '#000000',
	        tooltipTextColor: '#ffffff',
	        backgroundGradient: 'low',
	        height: 20,
	        opacity: 1.0
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

  	});
	
});
