$('#increment').click(function(){
	var count = $('.sidebar__count-text span').text();
	count ++;
	$('.sidebar__count-text span').text(count);
	return false;
});

$('#mobile-sidebar').click(function(){
	if($(this).is('.open')){
		$(this).removeClass('open');
		$('.map, .sidebar').removeClass('open');
	}
	else{
		$(this).addClass('open');
		$('.map, .sidebar').addClass('open');
	}
	return false;
});
