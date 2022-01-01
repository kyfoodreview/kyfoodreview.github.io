$('#mobile-menu-button').click(function(){
    event.preventDefault();
		$('.menu').slideToggle();
	})

$(window).resize(function(){

  if ($(window).width() > 849){
      
    $('.menu').removeAttr('style');
    
    }
  })