window.ondblclick = function(){
	document.querySelector('#myCarousel').classList.toggle('hideee');
}
$(document).ready(function(){
	//Adding smooth scroll
	$('a').on('click', function(event){
		if(this.hash !== ""){
			event.perventDefault;
			var hash = this.hash;
			$('html, body').animate({
				scrollTop:$(hash).offset().top
			}, 800, function(){
				window.location.hash = hash;
			});
		}
	});
});