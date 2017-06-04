/* BEGIN increment function on index.html */
$('#increment').click(function(){
	var count = $('.sidebar__count-text span').text();
	count ++;
	$('.sidebar__count-text span').text(count);
	return false;
});
/* END increment function on index.html */

/* BEGIN mobile-menu function*/
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
/* END mobile-menu function */


/* BEGIN modal window function*/
$('#modal-start').click(function(){
	if(!$('.modal').is('.open')){
		$('.modal').addClass('open').fadeIn();
		$('body').css('overflow','hidden');
	}
	return false;
});
$('.modal__close').click(function(){
	$('.modal').removeClass('open').fadeOut();
	$('body').css('overflow','auto');
	return false;
});
/* END modal window function */