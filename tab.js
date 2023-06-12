// function responsible for tabs in project section
$(document).ready(function(){
	console.log("opp")
	$('.topnav div').click(function(){
        console.log("popo")
		var tab_id = $(this).attr('data-tab');
        console.log(tab_id)
		$('.topnav div').removeClass('current');
		$('.mointorArea').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})

  