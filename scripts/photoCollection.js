$(document).ready(function(){

	$('.one').click(function(){
		$('#two').css({"display":"none"})
		$('#three').css({"display":"none"})
		$('#one').css({"display":"block"})

	})

	$('.two').click(function(){
		$('#one').css({"display":"none"})
		$('#three').css({"display":"none"})
		$('#two').css({"display":"block"})

	})

	$('.three').click(function(){
		$('#one').css({"display":"none"})
		$('#two').css({"display":"none"})
		$('#three').css({"display":"block"})

	})
});

