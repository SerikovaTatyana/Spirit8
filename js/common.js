$(document).ready(function(){
  

	// Карусель
	$(".parent-carosel1").owlCarousel({
		//items: 4,
		dots: true,
		responsive: {

			0: {
				items: 1
			},

			768: {
				items: 2
			},

			1024: {
				items: 4
			},

			

		}
	});


	// Карусель
	$(".parent-carosel2").owlCarousel({
		//items: 5,
		dots: true,
		responsive: {

			0: {
				items: 3
			},

			630: {
				items: 4
			},

			1024: {
				items: 5
			}


		}
	});

	// Карусель 
	$(".parent-carosel3").owlCarousel({
		items: 1,
		dots: true,
	});



	// Меню

	$(".btn-menu").click(function(){
		$(".btn-menu").next().slideToggle();
	});



});