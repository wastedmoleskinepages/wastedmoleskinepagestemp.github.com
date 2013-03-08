$('html').bind("load", function () { $(this).fadeIn(); });


window.onload = function() {
	
	// //shows the filter div
	// $("#fltrbtn").click(function() {
	// 	$("#second").slideDown('slow');
	// });
	
	// // hides the filter div
	// $("#fltrhidebtn").click(function() {
	// 	$("#second").slideUp('slow');
	// });

	// //changes background of filter boxes when clicked
	// $(".filtergrid").click(function() {
	// //  	$(this).toggleClass("off");
	//  });


  


	var images = [ 'image2.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg', 'image7.jpg'];

	$('html').css({'background-image': 'url(images/' + images[Math.floor(Math.random() * images.length)] + ')'});




	// var images = ['bgb1.png', 'bgb3.png', 'bgb4.png', 'bgb5.png', 'bgb6.png', 'bgb7.png'];

	// $('#fltrhidebtn').css({'background-image': 'url(images/' + images[Math.floor(Math.random() * images.length)] + ')'});


	};