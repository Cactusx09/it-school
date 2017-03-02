$(document).ready(function(){

	//gallery grid
	if (window.matchMedia('(min-width: 769px)').matches) {
		var wall = new Freewall(".s_gallery__waterfall");
		wall.reset({
			gutterX: 20,
			gutterY: 20,
			selector: 'a',
			onResize: function() {
				wall.fitWidth();
			}
		}).fitWidth();
	}else{
		$('.s_gallery__waterfall').lightSlider({
			item: 1,
			controls: false,
			adaptiveHeight: true
		});
	}

	//adaptive slider why
	if (window.matchMedia('(max-width: 950.5px)').matches) {
		$('.s_why__blocks').lightSlider({
			item: 3,
			controls: false,
			adaptiveHeight: true,
			responsive : [
				{
					breakpoint:650,
					settings: {
						item:2,
						slideMove:2
					  }
				},
				{
					breakpoint:480,
					settings: {
						item:1,
						slideMove:1
					  }
				}
			]
		});
	}
	if (window.matchMedia('(max-width: 650.5px)').matches) {
		$('.s_blocks__body').lightSlider({
			item: 1,
			controls: false,
			adaptiveHeight: true
		});
	}

	//gallery gallery
	$('.s_gallery__waterfall').lightGallery();

	//teachers slider
	var sl_teachers = $('.s_teachers__slider').lightSlider({
		item: 1,
		pager: !1,
		controls: !1,
		mode: 'fade',
		adaptiveHeight: true
	});
	//teachers pager
	$('.s_teachers__txt_pager span').click(function(){
		var n = $(this).index();
		$('.s_teachers__txt_pager').each(function(){
			$(this).find('span').removeClass('current')
				.eq(n).addClass('current');
		});
		sl_teachers.goToSlide(n);
	});


	//reviews pager
	$('.s_reviews__right span').click(function(){
		var n = $(this).index();
		$('.s_reviews__txt').eq(n).addClass('current')
			.siblings().removeClass('current');
		$(this).addClass('current').siblings().removeClass('current');
	});


	//nav sticky
	$(".header__nav").sticky({
		zIndex: 9999999
	});

	//
	if($('*').is('.s_main__slider')){
		$('.s_main__slider').lightSlider({
			item: 1,
			slideMargin: 0,
			controls: false,
			loop: true,
			speed: 1000,
			auto: true,
			pause: 7000,
			pauseOnHover: true
		});
	}

	//form steps
	var sl_steps = $('.s_form__slider').lightSlider({
		item: 1,
		controls: false,
		adaptiveHeight: !0,
		pager: !1,
		enableDrag: !1,
		onBeforeNextSlide: function(el){
			var n = el.getCurrentSlideCount();
			$('.s_form__bot_step').eq(n).addClass('active')
			$('.s_form__bot_step').eq(n-1).addClass('filled')
		}
	})
	$('.s_form__bot .btn').click(function(e){
		e.preventDefault();
		var current_slide = $('.s_form__txt.active');
		var n = sl_steps.getCurrentSlideCount();
		if(n==2){
			var current_tab = current_slide.find('.s_form__txt_tab._active');
			current_tab.find('input').each(function(){
				if($(this).prop('checked')){
					sl_steps.goToNextSlide();
					$('.s_form__bot .btn')
						.html('<span>Записаться на занятие</span>')
						.addClass('btn_green').removeClass('btn_blue');
				}else{
					$(this).next().addClass('_error');
				}
			});
		}else if(n==3){
			$('.s_form__item').submit();
		}else{
			sl_steps.goToNextSlide();
		}
	});
	$('.s_form__txt label').click(function(){
		$(this).removeClass('_error')
			.siblings('label').removeClass('_error');
	});
	$('.s_form__bot_step').click(function(){
		var el = $(this);
		if(el.hasClass('active')){
			el.removeClass('filled').nextAll().removeClass('filled active');
			sl_steps.goToSlide(el.index());
			$('.s_form__bot .btn').html('<span>СЛЕДУЮЩИЙ ШАГ</span><svg xmlns="http://www.w3.org/2000/svg" width="41" height="16"><path d="M32.8 0.3C32.5-0.1 31.9-0.1 31.6 0.3 31.2 0.6 31.2 1.2 31.6 1.5L37.9 7.1 0.9 7.1C0.4 7.1 0 7.5 0 8 0 8.5 0.4 8.9 0.9 8.9L37.9 8.9 31.6 14.4C31.2 14.8 31.2 15.3 31.6 15.7 31.9 16.1 32.5 16.1 32.8 15.7L40.7 8.6C41.1 8.3 41.1 7.7 40.7 7.3L32.8 0.3Z" fill="rgb(255, 255, 255)"/></svg>')
			.removeClass('btn_green').addClass('btn_blue');
			$('.s_form__txt label').removeClass('_error');
		}
	});
	$('.s_form__txt li').click(function(){
		var el = $(this),
			n = el.index();
		el.addClass('current').siblings().removeClass('current');
		el.closest('.s_form__slider').find('#age').val($(this).text());
		el.closest('.s_form__slider').find('.s_form__txt_tab')
			.eq(n).show().addClass('_active')
			.siblings().hide().removeClass('_active');
	});


	//news grid
	if (window.matchMedia('(min-width: 651px)').matches) {
		var wall2 = new Freewall(".s_news__body");
		wall2.reset({
			gutterX: 20,
			gutterY: 20,
			onResize: function() {
				wall2.fitWidth();
			}
		}).fitWidth();
	}else{
		$('.s_news__body').lightSlider({
			item: 1,
			adaptiveHeight: true,
			controls: false
		});
		if($('*').is('.s_like')){
			$('.s_like .g_blocks__wrap').lightSlider({
				item:1,
				adaptiveHeight: true,
				controls: false
			});
		}
		if($('*').is('.s_vuz__wrap')){
			$('.s_vuz__wrap').lightSlider({
				item:1,
				adaptiveHeight: true,
				controls: false
			});
		}
	}

	//courses tabs
	$('.s_courses li').click(function(){
		var elem = $(this),
			n = elem.index(),
			section = elem.closest('.s_courses');
		elem.addClass('current')
			.siblings().removeClass('current');
		section.nextAll('.g_blocks._courses').hide()
			.eq(n).show();
	});


	//popups
	$('._open_pop').click(function(e){
		e.preventDefault();
		$('form').each(function() {
            $(this)[0].reset();
        });
		var name = $(this).data('name');
		setTimeout(function() {
            $('.popup').find('input').eq(0).focus();
        }, 1000);
		if ($(this).closest('.header')) {
			$('.header__nav_cont').removeClass('active');
		}
		$('.overlay, .popup._'+name).addClass('visible');
		var px = window.pageYOffset;
		$('.popup').css('top',px+'px');
	});
	//close popups
	$('.overlay, .close_pop').click(function(){
		$('.popup, .overlay').removeClass('visible');
		var px = window.pageYOffset;
		$('.popup').css('top','0');
	});


	//anhor btn
	$('.btn.anchor').click(function(e){
		e.preventDefault();
		var to = $(this).attr('href');
        $('html, body').stop()
			.animate({scrollTop: $(to).offset().top}, 300);
	});


	//mask
	$('input[name="phone"]').mask('+7 (999) 999-99-99');


	//validate
	$("form").each(function () {
		var it = $(this);
		it.validate({
			rules: {
				name: {required: true},
				phone: {required: true},
				mail: {required: true}
			},
			messages: {},
			errorPlacement: function (error, element) {},
			submitHandler: function (form) {
				$.ajax({
					type: "POST",
					url: "../mail.php",
					data: it.serialize()
				}).done(function () {
					$('.popup').removeClass('visible');
					var px = window.pageYOffset;
					$('.popup').css('top',px);
					$('.popup._thnx, .overlay').addClass('visible');
					setTimeout(function () {
						if ($('.popup._thnx').hasClass('visible')) {
							$('.popup._thnx, .overlay').removeClass('visible');
						}
					}, 2800);
				});
				return false;
			},
			success: function () {},
			highlight: function (element, errorClass) {
				$(element).addClass('error');
			},
			unhighlight: function (element, errorClass, validClass) {
				$(element).removeClass('error');
			}
		});
	});


	//faq
	$('.s_question__head').click(function(){
		$(this).toggleClass('active')
			.next('.s_question__body').toggleClass('active');
	});


	//hamburger
	$('.header__nav_hamb').click(function(){
		$('.header__nav_cont').addClass('active');
	});
	$('.header__close_nav').click(function(){
		$('.header__nav_cont').removeClass('active');
	});


	//gmap init
	if($('*').is('.s_map')){
		mapInitialize('s_map');
	}

	$('.readmore-block').readmore({
        maxHeight: 180,
        speed: 300,
        moreLink: '<a href="#" class="s_about__more"><span>Читать далее</span><svg xmlns="http://www.w3.org/2000/svg" width="21" height="12"><path d="M14.8 0.2C14.6-0.1 14.1-0.1 13.9 0.2 13.6 0.5 13.6 0.9 13.9 1.2L18.7 5.3 0.7 5.3C0.3 5.3 0 5.6 0 6 0 6.4 0.3 6.7 0.7 6.7L18.7 6.7 13.9 10.8C13.6 11.1 13.6 11.5 13.9 11.8 14.1 12.1 14.6 12.1 14.8 11.8L20.8 6.5C21 6.2 21 5.8 20.8 5.5L14.8 0.2Z" fill="rgb(0, 23, 41)"/></svg></a>',
        lessLink: '<a href="#" class="s_about__more"><span>Свернуть</span><svg xmlns="http://www.w3.org/2000/svg" width="21" height="12"><path d="M14.8 0.2C14.6-0.1 14.1-0.1 13.9 0.2 13.6 0.5 13.6 0.9 13.9 1.2L18.7 5.3 0.7 5.3C0.3 5.3 0 5.6 0 6 0 6.4 0.3 6.7 0.7 6.7L18.7 6.7 13.9 10.8C13.6 11.1 13.6 11.5 13.9 11.8 14.1 12.1 14.6 12.1 14.8 11.8L20.8 6.5C21 6.2 21 5.8 20.8 5.5L14.8 0.2Z" fill="rgb(0, 23, 41)"/></svg></a>',
    });
	//stoch fix
	$('.s_stock__blocks_item').click(function(e){
		e.preventDefault();
	});
});

//gmap init
function mapInitialize(el_id) {
	var moscow = new google.maps.LatLng(55.759119, 37.624978);
	var stylez =
	  [{
		"elementType": "geometry",
		"stylers": [
		  {
			"color": "#242f3e"
		  }
		]
	  },
	  {
		"elementType": "labels.text.fill",
		"stylers": [
		  {
			"color": "#746855"
		  }
		]
	  },
	  {
		"elementType": "labels.text.stroke",
		"stylers": [
		  {
			"color": "#242f3e"
		  }
		]
	  },
	  {
		"featureType": "administrative.locality",
		"elementType": "labels.text.fill",
		"stylers": [
		  {
			"color": "#d59563"
		  }
		]
	  },
	  {
		"featureType": "poi",
		"elementType": "labels.text.fill",
		"stylers": [
		  {
			"color": "#d59563"
		  }
		]
	  },
	  {
		"featureType": "poi.park",
		"elementType": "geometry",
		"stylers": [
		  {
			"color": "#263c3f"
		  }
		]
	  },
	  {
		"featureType": "poi.park",
		"elementType": "labels.text.fill",
		"stylers": [
		  {
			"color": "#6b9a76"
		  }
		]
	  },
	  {
		"featureType": "road",
		"elementType": "geometry",
		"stylers": [
		  {
			"color": "#38414e"
		  }
		]
	  },
	  {
		"featureType": "road",
		"elementType": "geometry.stroke",
		"stylers": [
		  {
			"color": "#212a37"
		  }
		]
	  },
	  {
		"featureType": "road",
		"elementType": "labels.text.fill",
		"stylers": [
		  {
			"color": "#9ca5b3"
		  }
		]
	  },
	  {
		"featureType": "road.highway",
		"elementType": "geometry",
		"stylers": [
		  {
			"color": "#746855"
		  }
		]
	  },
	  {
		"featureType": "road.highway",
		"elementType": "geometry.stroke",
		"stylers": [
		  {
			"color": "#1f2835"
		  }
		]
	  },
	  {
		"featureType": "road.highway",
		"elementType": "labels.text.fill",
		"stylers": [
		  {
			"color": "#f3d19c"
		  }
		]
	  },
	  {
		"featureType": "transit",
		"elementType": "geometry",
		"stylers": [
		  {
			"color": "#2f3948"
		  }
		]
	  },
	  {
		"featureType": "transit.station",
		"elementType": "labels.text.fill",
		"stylers": [
		  {
			"color": "#d59563"
		  }
		]
	  },
	  {
		"featureType": "water",
		"elementType": "geometry",
		"stylers": [
		  {
			"color": "#17263c"
		  }
		]
	  },
	  {
		"featureType": "water",
		"elementType": "labels.text.fill",
		"stylers": [
		  {
			"color": "#515c6d"
		  }
		]
	  },
	  {
		"featureType": "water",
		"elementType": "labels.text.stroke",
		"stylers": [
		  {
			"color": "#17263c"
		  }
		]
	  }
	];
	var mapOptions = {
		zoom: 17,
		center: moscow,
		mapTypeControl: false,
		scrollwheel: false,
		navigationControl: false,
		scaleControl: false
	};
	map = new google.maps.Map(document.getElementById(el_id), mapOptions);
	var mapType = new google.maps.StyledMapType(stylez, {
		name: "Night"
	});
	map.mapTypes.set('Night', mapType);
    map.setMapTypeId('Night');
	moscow = new google.maps.Marker({
		map: map,
		position: moscow,
		title: "Мы находимся тут!",
		icon: '../images/ico/marker.svg'
	});
}
