let bar = $('.bar').width();
let partials = [];
$('.percentage').each(function(){
  partials.push(bar * $(this).text().substr(0,2)/100);
});

let i = 0;
function ScrollHandler(){
  $('section').each(function(){
	if($(window).scrollTop()>=$(this).position().top){
		$(this).find('.vertical-center').animate({top:'0', opacity:'1'},1000);
    }
})

  if($(window).scrollTop()>=$('.about').position().top){
    $('#about-btn').css('color', '#4A4A4A');
    $('#contact-btn').css('color', '#4A4A4A');
    $('.inner-bar').each(function(){
    
    $(this).animate({width:`${partials[i]}`}, 2000);
    i++;
    })
  }
  else{
    $('#about-btn').css('color', 'white');
    $('#contact-btn').css('color', 'white');
}
}

$(window).on('scroll', ScrollHandler);

ScrollHandler();



$('#about-btn').on('click', function(){
  $('html, body').stop().animate({scrollTop: $('.about').position().top}, 500);
});

$('#contact-btn').on('click', function(){
  $('html, body').stop().animate({scrollTop: $('.contact').position().top}, 500);
});