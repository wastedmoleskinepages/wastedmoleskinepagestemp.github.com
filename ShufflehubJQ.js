$(document).ready(function() {

	var images = [ 'image2.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg', 'image7.jpg'];

	$('#random').click(function(){
		$('html').css('background-image': 'url(images/' + images[Math.floor(Math.random() * images.length)] + ')');
	});

};