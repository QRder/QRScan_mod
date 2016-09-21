/* //global console:true */

jQuery( document ).ready( function($) {


	// Setup strict mode
	(function() {

    "use strict";
			    
	
		var $color_switcher_container,
				$color_switcher,
				$color_switcher_toggle,
				$color_swatches,
				current_color = 'yellow',
				mtphr_colorswitcher_vars = {
					path: '',
					before: '',
					after: '/assets/css/style',
					colors: ['#ffff33', '#33ffff', '#33ff99'],
					colornames: ['yellow', 'blue', 'green']
				};
		
		
		/* --------------------------------------------------------- */
		/* !Images */
		/* --------------------------------------------------------- */
		
		function color_switcher_images( color ) {
		
			$('img').each( function() {
			
				var path = $(this).attr('src');
				
				if( path.indexOf(current_color) >= 0 ) {
					path = path.replace(current_color, color);
					$(this).attr('src', path);
				}
			});
		}
	
		function color_switcher_swap_colors( color ) {
		
			color = color.replace('#', '');
		
			color_switcher_images( color );
			
			var $stylesheet = $('#theme-color-css');
			if( $stylesheet.length === 0 ) {
				$stylesheet = $("<link rel='stylesheet' id='theme-color-css' type='text/css' media='all' />");
				$('head').append($stylesheet);
			}

			$stylesheet.attr('href', mtphr_colorswitcher_vars.path+mtphr_colorswitcher_vars.before+color+mtphr_colorswitcher_vars.after+'.css' );
			
			current_color = color;
		}
	
		function color_switcher_show() {
			$('#color-switcher-toggle').addClass('active');
			$color_switcher_container.stop().animate( {
				left: 0
			}, 1000, 'easeOutExpo', function() {
				// Animation complete.
			});
		}
		
		function color_switcher_hide() {
			$('#color-switcher-toggle').removeClass('active');
			$color_switcher_container.stop().animate( {
				left: '-208px'
			}, 1000, 'easeOutExpo', function() {
				// Animation complete.
			});
		}
		
		function build_color_switcher() {

			$color_switcher_container = $('<div id="color-switcher-container"></div>');
			$color_switcher = $('<div id="color-switcher"></div>');
			$color_switcher_toggle = $('<a id="color-switcher-toggle" href="#"></a>');
			$color_swatches = $('<div id="color-swatches" class="clearfix"></div>');
			
			$color_switcher_toggle.append('<i class="fa fa-cog color-switcher-spinner-slow"></i>');
			
			$color_switcher.append( $color_switcher_toggle );
			$color_switcher.append( '<h3>Color Switcher</h3>' );
			$color_switcher.append( $color_swatches );
			$color_switcher.append( '<a id="color-switcher-done" class="btn" href="#">Done</a>' );

			
			for( var i=0; i<mtphr_colorswitcher_vars.colors.length; i++ ) {
				var swatch_class = 'color-swatch';
				if( i === 0 ) {
					swatch_class = 'color-swatch active';
				}
				
				$color_swatches.append('<div style="background-color:'+mtphr_colorswitcher_vars.colors[i]+';" class="'+swatch_class+'"><a href="'+mtphr_colorswitcher_vars.colornames[i]+'"></a></div>');
			}
			
			$color_switcher_container.append($color_switcher);
			$('body').append( $color_switcher_container );	
		}
		
		build_color_switcher();
			
		
		// If the color switcher exists 
			
		if( $color_switcher.length > 0 ) {
		
			$('#color-switcher-toggle').click( function(e) {
				e.preventDefault();
				
				if( $(this).hasClass('active') ) {
					color_switcher_hide();
				} else {
					color_switcher_show();
				}
	
			});
			
			$('#color-switcher-done').click( function(e) {
				e.preventDefault();
				color_switcher_hide();
			});
			
			$('.color-swatch a').click( function(e) {
				e.preventDefault();
				
				$('.color-swatch').removeClass('active');
				$(this).parent().addClass('active');
				
				color_switcher_swap_colors( $(this).attr('href') );
			});
			
		}
	
	}());

});