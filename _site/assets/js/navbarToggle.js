$(document).ready(function(){
  var moreToggle = $('.more').unbind();

  $('#mobile-menu-button').click(function(){
      event.preventDefault();
  		$('.menu').slideToggle();
  	})

  $(window).resize(function(){

    if ($(window).width() > 849){

      $('.menu').removeAttr('style');

      }
    })

  moreToggle.on('click', function(e){
    $(this).find('#sub-menu').slideToggle(function(){
      if($('#sub-menu').is(':hidden')) {
        $('#sub-menu').removeAttr('style');
      }
    });
  });
});
