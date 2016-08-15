$(document).ready(function(){

	var slide = function(){
		$(".hit_box_top_left").hover(function(){
			$(".squareTopLeft").stop().animate({left: "6.25%"},"swing");
			},function(){
				$(".squareTopLeft").stop().animate({left: "25%"},"fast");
			});

		$(".hit_box_top_right").hover(function(){
			$(".squareTopRight").stop().animate({left: "68.75%"},"swing");
			},function(){
				$(".squareTopRight").stop().animate({left: "50%"},"fast");
			});

		$(".hit_box_bottom_left").hover(function(){
			$(".squareBottomLeft").stop().animate({right: "68.75%"},"swing");
			},function(){
				$(".squareBottomLeft").stop().animate({right: "50%"},"fast");
			});

		$(".hit_box_bottom_right").hover(function(){
			$(".squareBottomRight").stop().animate({right: "6.25%"},"swing");
			},function(){
				$(".squareBottomRight").stop().animate({right: "25%"},"fast");
			});

	} 
	
	slide();

});

	