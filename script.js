var scrolling;
function jScroll(event)
{
	var elem = '#'+$(event.target).attr('name');
	scrolling = $('html, body').animate({
		scrollTop: $(elem).offset().top
	}, 1500);
}
var hovertext = {
	'basic':'Elementary level of knowledge. Suitable for quickfixes and small projects.',
	'novice':'Entry level. Suitable for larger projects and the baseline for a job using this skill.',
	'intermediate':'Fluency. Comfortable with using this skill professionally. Able to do most projects involving this skill.',
	'expert':'Able to discuss the skills at a high level among other experts. The level I strive for with every skill in my programming toolkit.'
};
window.onwheel = function(){
	if (scrolling)
	{
		scrolling.stop();
	}
};

$(document).scroll(function(){
	var dist = $(document).scrollTop();	
	var opacity = 1 - (dist/255);
	opacity = opacity>0?opacity:0.2;
	$('nav').css('background','rgba(0,0,0,'+(opacity-0.2)+')');
	//Change the background depending on position
	if (dist > 700)
	{
		$('body').css('background-image','url(city.jpg)');
	}
	else
	{
		$('body').css('background-image','url(office.jpg)');
	}
});
$(document).ready(function(){
	//Handle the hovers in the skill section
	$('.popup').hover(function(e){
		if ($('.hovertext').length == 0)
		{
			var newdiv = $('<div>');
			newdiv.attr('class','hovertext');
			var name = e.target.innerHTML;
			var text = hovertext[name.toLowerCase()];
			var p= $('<p>');
			p.html(text);
			newdiv.append(p);
			$(e.target).append(newdiv);
		}
	},function(){
		$('.hovertext').remove();
	});
});
