var current_link,
	prime_stat,
	bonus_stat,
	stats = ['str', 'dex', 'const', 'int', 'wis', 'char'];

$(function() {
	console.log('App activated');
	
	//If section is clicked
	$('#jump_menu > li > a').on('click', function() {
		current_link = $(this).attr('href');
		
		//Highlights the section
		$('[data-highlight="'+current_link+'"]').each(function() {
			$(this).addClass('highlight').one('webkitAnimationEnd msAnimationEnd animationend', function(e) {
				$(this).removeClass('highlight');
			});
		});
		
		//Closes the menu if anchor is clicked
		close_navbar();
	});
	
	//Closes the nav if options are clicked
	$('.nav-toggle > li > a').on('click', function() {
		close_navbar();
	});
	
	//Calc Button
	$('.calc_btn').on('click', function(){
		calc_values(stats);
	});
	
	//Clear Button
	$('.clear_btn').on('click', function(){
		$('#main-form')[0].reset();
		document.title = 'D&D Character Sheet';
	});
	
	//Title Change
	$('#name').on('blur', function() {
		if( $(this).val() )
			document.title = $(this).val() + ' - D&D Character Sheet';
	});
});

//Closes the navbar
function close_navbar() {
	if ($(window).width() < 768)
		$('button.navbar-toggle').trigger('click');
}

//Calculation Function
function calc_values(arry){
	$.each(arry, function(i, v){
		prime_stat = '#'+v+'_prime';
		bonus_stat = '#'+v+'_bonus';
		
		if( !$('#prof_bonus').val() )
			$('#prof_bonus').val(0);
		
		if( $(prime_stat).val() >= 1 && $(prime_stat).val() <= 24 )
			$(bonus_stat).val( Math.floor(($(prime_stat).val() - 10) / 2) );
		
		if( $(bonus_stat).val() ){
			$('[data-calc="'+v+'"]').each(function(){
				if( $('[data-target="'+$(this).attr('id')+'"]').is(':checked') ){
					$(this).val(parseInt($(bonus_stat).val()) + parseInt($('#prof_bonus').val()));
				} else {
					$(this).val($(bonus_stat).val());
				}
			});
		}
	});
}