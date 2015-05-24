var current_link,
	 prime_stat,
	 bonus_stat,
	 save_throw,
	 saving_bonus,
	 stats = ['str', 'dex', 'const', 'int', 'wis', 'char'];

$(function() {
	console.log('App activated');
	
	//If section is clicked
	$('#jump_menu > li > a').on('click', function() {
		current_link = $(this).attr('href');
		
		//Highlights the section
		$('[data-highlight="'+current_link+'"]').each(function() {
			$(this).addClass('highlight').one('webkitAnimationEnd msAnimationEnd animationend', function(e) {
				$(this).removeClass('highlight')
			});
		})
		
		//Closes the menu if anchor is clicked
		if ($(window).width() < 768) {
			$('button.navbar-toggle').trigger('click');
		}
	});
	
	//FOR TESTING
	$('.calc_btn').on('click', function(e){
		e.preventDefault();
		calc_values(stats);
	})
	
});

function calc_values(arry){
	$.each(arry, function(i, v){
		prime_stat = '#'+v+'_prime';
		bonus_stat = '#'+v+'_bonus';
		save_throw = '#'+v+'_saving';
		saving_bonus = 'input[name="'+v+'_saving_bonus"]';
		
		if( $(prime_stat).val() >= 1 && $(prime_stat).val() <= 25 ){
			$(bonus_stat).val( Math.floor(($(prime_stat).val() - 10) / 2) );
		}
		
		if( $(bonus_stat).val() ){
			if( $(saving_bonus).is(':checked') ){
			console.log('meh');
				$(save_throw).val(parseInt($(bonus_stat).val()) + parseInt($('#prof_bonus').val()));
			} else {
				$(save_throw).val($(bonus_stat).val());
			}
		}
	});
}