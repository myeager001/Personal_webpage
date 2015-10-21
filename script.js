$(document).ready(function(){
	$('#panel').on('click','button',function(){
		var id = '#' + $(this).text()
		console.log(id);
		if ($(id).hasClass('response')){

			$('.active').addClass('response').removeClass('active');
			$(id).addClass('active').removeClass('response');
		};

	});

});
