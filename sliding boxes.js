$(document).ready(function(){

	var slide = function(){
		$(".hit_box_top_left").hover(function(){
			$(".squareTopLeft").stop().animate({left: "-12.5%"});
			},function(){
				$(".squareTopLeft").stop().animate({left: "18.75%"});
			});

		$(".hit_box_top_right").hover(function(){
			$(".squareTopRight").stop().animate({left: "75%"});
			},function(){
				$(".squareTopRight").stop().animate({left: "43.75%"});
			});

		$(".hit_box_bottom_left").hover(function(){
			$(".squareBottomLeft").stop().animate({left: "0%"});
			},function(){
				$(".squareBottomLeft").stop().animate({left: "31.25%"});
			});

		$(".hit_box_bottom_right").hover(function(){
			$(".squareBottomRight").stop().animate({left: "87.5%"});
			},function(){
				$(".squareBottomRight").stop().animate({left: "56.25%"});
			});

	}
	
slide();

});

	