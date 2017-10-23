$(document).ready(function() {

/* waypoints snippet for sticky navigation using http://imakewebthings.com/waypoints/guides/jquery-zepto/ */	
	$('.js--sticky-start').waypoint(function(direction) {
		if (direction == "down") {
			$('nav').addClass('sticky')
		} else {
			$('nav').removeClass('sticky');
		}
	});
	
//smooth scrolling button -> contact section
	$('.js--scroll-contact').click(function(){
		$('html, body').animate({scrollTop:$('.js--nav-contact').offset().top}, 1000);
	});
	
//scrolling to all elements in navigation
/* snippet from 
https://css-tricks.com/snippets/jquery/smooth-scrolling/
*/	
	$('a[href*="#"]')
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function (event) {
			if (
				location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
				location.hostname == this.hostname
			) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					event.preventDefault();
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000, function () {
						var $target = $(target);
						$target.focus();
						if ($target.is(":focus")) {
							return false;
						} else {
							$target.attr('tabindex', '-1');
							$target.focus();
						};
					});
				}
			}
		});
	
/*animation on scroll using waypoints and https://daneden.github.io/animate.css*/
	$('.js--animation1').waypoint(function(direction) {
		$('.js--animation1').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	
	$('.js--animation2').waypoint(function(direction) {
		$('.js--animation2').addClass('animated fadeInDown');
	}, {
		offset: '50%'
	});
	
	$('.js--animation3').waypoint(function(direction) {
		$('.js--animation3').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	
//mobile navigation	
	$('.js--nav-icon').click(function() {
		var nav = $('.js--nav');
		var icon = $('.js--nav-icon i');
		
		nav.slideToggle(200);
		if(icon.hasClass('fa-times-circle')) {
			icon.addClass('fa-bars');	
			icon.removeClass('fa-times-circle');
		} else {
			icon.addClass('fa-times-circle');	
			icon.removeClass('fa-bars');
		}
	});
});


/* from https://hpneo.github.io/gmaps 
for contact section */
var map = new GMaps({
  div: '.map',
	lat: 52.3287914,
	lng: 15.3735521,
	zoom: 12
/*  lat: 52.344595,
  lng: 15.324506,
	zoom: 13*/
});

map.addMarker({
  lat: 52.3545091, 
  lng: 15.2694684,
  title: 'Agroturystyka rodzinna Buchmila',
	infoWindow: {
		content: '<p>Buchmila - zapraszamy!</p>'
	}
});
