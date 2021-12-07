
function scroll_to(clicked_link, nav_height) {
	var element_class = clicked_link.attr('href').replace('#', '.');
	var scroll_to = 0;
	if(element_class != '.top-content') {
		element_class += '-container';
		scroll_to = $(element_class).offset().top - nav_height;
	}
	if($(window).scrollTop() != scroll_to) {
		$('html, body').stop().animate({scrollTop: scroll_to}, 1000);
	}
}


jQuery(document).ready(function() {

	/*
	    Navigation
	*/
	$('a.scroll-link').on('click', function(e) {
		e.preventDefault();
		scroll_to($(this), $('nav').outerHeight());
	});

    /*
        Background
    */
    //$('.section-4-container').backstretch("assets/img/backgrounds/bg.jpg");

    /*
	    Wow
	*/
	new WOW().init();

	/*
	    Carousel
	*/
	var pubTitles = ["2016 Advanced Materials: 3D Bioprinting (We got on the cover!)",
	"2018 Sensors and Actuators B: Chemical: Gas Segmentation",
	"2019 Frontiers in Mechanical Engineering: Ultrasonic Sensors",
   "2020 Ultrasonics: Time of Flight Sensors", "2021 Scientific Reports Gas Segmentation" ];
	var pubDescs = ["Automatisation of a process capable of 3D printing living tissue with Arduino.",
	 "Measurement of mass density and viscosity simultaneously allowed to identify several gas mixtures from one another and determine their concentrations.",
	 "Use of ultrasonic sensors typically used in imaging for gas sensing",
	  "Measuring of the speed of sound in different gas mixtures in order to determine their composition",
		"Simultaneously measuring the sound velocity and attenuation in order to identify it (segmentation) and determine its composition","Desc 5", "Desc 6", "Desc 7"];
	var pubIdx = 0;
	document.getElementById("ptitle").innerHTML = pubTitles[pubIdx];
	document.getElementById("pdesc").innerHTML = pubDescs[pubIdx];
	$('#carousel-example').on('slide.bs.carousel', function (e) {

	    /*
	        CC 2.0 License Iatek LLC 2018
	        Attribution required
	    */
	    var $e = $(e.relatedTarget);
	    var idx = $e.index();
	    var itemsPerSlide = 5;
	    var totalItems = $('.carousel-item').length;

			if(e.direction=="left"){
				pubIdx = (pubIdx+1)% pubTitles.length;
			}
			else {
				if(pubIdx==0){
					pubIdx = pubTitles.length-1;
				}
				else{
					pubIdx = pubIdx-1 ;

				}

			}
			document.getElementById("ptitle").innerHTML = pubTitles[pubIdx];
			document.getElementById("pdesc").innerHTML = pubDescs[pubIdx];
	    if (idx >= totalItems-(itemsPerSlide-1)) {
	        var it = itemsPerSlide - (totalItems - idx);
	        for (var i=0; i<it; i++) {
	            // append slides to end
	            if (e.direction=="left") {
	                $('.carousel-item').eq(i).appendTo('.carousel-inner');
	            }
	            else {
	                $('.carousel-item').eq(0).appendTo('.carousel-inner');
	            }
	        }
	    }
	});

});
